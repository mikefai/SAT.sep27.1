import React, { useState, useEffect } from 'react';
import { GUIDED_PRACTICE_QUESTIONS, STRICT_EXAM_QUESTIONS } from '../../data/mockExamData';
import { MockExamQuestion, ExamMode } from '../../types/sat';
import { EliminatorCard } from './EliminatorCard';
import { 
  Trophy, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  AlertCircle,
  FileSpreadsheet,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle,
  FastForward
} from 'lucide-react';

const EXAM_DURATION_SECONDS = 24 * 60; // 24 minutes for 20 questions

export const MockExamModule: React.FC = () => {
  const [examMode, setExamMode] = useState<ExamMode>('guided');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<number, string[]>>({});
  const [showCheatEngine, setShowCheatEngine] = useState<boolean>(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(EXAM_DURATION_SECONDS);
  const [isTimerHidden, setIsTimerHidden] = useState<boolean>(false);
  const [showUnansweredModal, setShowUnansweredModal] = useState<boolean>(false);
  const [reportFilter, setReportFilter] = useState<'all' | 'missed' | 'correct' | 'unanswered'>('all');

  const questions: MockExamQuestion[] = examMode === 'guided' ? GUIDED_PRACTICE_QUESTIONS : STRICT_EXAM_QUESTIONS;
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const unansweredCount = totalQuestions - Object.keys(userAnswers).length;

  // Active Timer Countdown
  useEffect(() => {
    if (isExamSubmitted || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamSubmitted, timeRemaining]);

  // Keyboard Shortcuts: A, B, C, D for choices; ArrowLeft, ArrowRight for navigation
  useEffect(() => {
    if (isExamSubmitted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is interacting with form controls
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        handleAnswerSelect(key as 'A' | 'B' | 'C' | 'D');
      } else if (e.key === 'ArrowRight' && currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setShowCheatEngine(false);
      } else if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        setCurrentQuestionIndex(prev => prev - 1);
        setShowCheatEngine(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, isExamSubmitted, totalQuestions]);

  const handleSelectMode = (mode: ExamMode) => {
    setExamMode(mode);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setEliminatedOptions({});
    setShowCheatEngine(false);
    setIsExamSubmitted(false);
    setTimeRemaining(EXAM_DURATION_SECONDS);
  };

  const handleAnswerSelect = (optionId: 'A' | 'B' | 'C' | 'D') => {
    if (isExamSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionId
    }));
  };

  const handleToggleEliminate = (optionId: string) => {
    setEliminatedOptions(prev => {
      const currentList = prev[currentQuestionIndex] || [];
      const updated = currentList.includes(optionId)
        ? currentList.filter(id => id !== optionId)
        : [...currentList, optionId];
      return {
        ...prev,
        [currentQuestionIndex]: updated
      };
    });
  };

  const handleAttemptSubmit = () => {
    if (unansweredCount > 0) {
      setShowUnansweredModal(true);
    } else {
      handleSubmitExam();
    }
  };

  const handleSubmitExam = () => {
    setIsExamSubmitted(true);
    setShowUnansweredModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartExam = () => {
    setUserAnswers({});
    setEliminatedOptions({});
    setCurrentQuestionIndex(0);
    setShowCheatEngine(false);
    setIsExamSubmitted(false);
    setTimeRemaining(EXAM_DURATION_SECONDS);
    setShowUnansweredModal(false);
  };

  const handleJumpToNextUnanswered = () => {
    for (let i = 0; i < totalQuestions; i++) {
      const nextIdx = (currentQuestionIndex + 1 + i) % totalQuestions;
      if (userAnswers[nextIdx] === undefined) {
        setCurrentQuestionIndex(nextIdx);
        setShowCheatEngine(false);
        return;
      }
    }
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate results
  const calculateScore = () => {
    let correctCount = 0;
    const trapFails: Record<string, number> = {};
    const archetypeScores: Record<string, { correct: number; total: number }> = {};

    questions.forEach((q, idx) => {
      const selected = userAnswers[idx];
      const correctOption = q.options.find(o => o.isCorrect);

      if (!archetypeScores[q.archetypeTitle]) {
        archetypeScores[q.archetypeTitle] = { correct: 0, total: 0 };
      }
      archetypeScores[q.archetypeTitle].total += 1;

      if (selected && correctOption && selected === correctOption.id) {
        correctCount += 1;
        archetypeScores[q.archetypeTitle].correct += 1;
      } else if (selected) {
        const chosenOption = q.options.find(o => o.id === selected);
        if (chosenOption && chosenOption.trapType) {
          trapFails[chosenOption.trapType] = (trapFails[chosenOption.trapType] || 0) + 1;
        }
      }
    });

    // Estimate SAT Reading score (scaled 200 - 800)
    const percentage = (correctCount / totalQuestions);
    const scaledScore = Math.round(200 + percentage * 600);

    return { correctCount, percentage, scaledScore, trapFails, archetypeScores };
  };

  const scoreData = calculateScore();

  return (
    <div className="space-y-8 font-sans animate-fadeIn">
      
      {/* Exam Header & Mode Toggle */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
              <span>Digital SAT 2026</span>
              <span>•</span>
              <span>Full Reading & Writing Section</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-3">
              <Trophy className="w-7 h-7 text-amber-500 shrink-0" />
              <span>Full SAT Practice & Exam Engine</span>
            </h1>
            <p className="text-sm font-medium text-slate-500 mt-1">
              Test your skills with 40 authentic Digital SAT 2026 level questions across 2 dedicated modes.
            </p>
          </div>

          {!isExamSubmitted && (
            <div className="flex items-center space-x-2.5">
              {/* Bluebook Digital SAT Active Timer */}
              <div className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl border text-xs font-extrabold transition shadow-xs ${
                timeRemaining <= 300 
                  ? 'bg-rose-50 text-rose-700 border-rose-300 ring-2 ring-rose-200 animate-pulse' 
                  : 'bg-slate-900 text-white border-slate-800'
              }`}>
                <Clock className={`w-3.5 h-3.5 ${timeRemaining <= 300 ? 'text-rose-600' : 'text-sky-400'}`} />
                <span className="font-mono tracking-wider">
                  {isTimerHidden ? 'Timer Hidden' : formatTimer(timeRemaining)}
                </span>
                <button 
                  onClick={() => setIsTimerHidden(!isTimerHidden)}
                  title={isTimerHidden ? "Show Timer" : "Hide Timer"}
                  className="ml-1 text-slate-400 hover:text-white transition p-0.5 cursor-pointer"
                >
                  {isTimerHidden ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                </button>
              </div>

              <button
                onClick={() => handleRestartExam()}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition flex items-center space-x-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Test</span>
              </button>
            </div>
          )}
        </div>

        {/* Mode Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Mode 1: Guided Practice */}
          <button
            onClick={() => handleSelectMode('guided')}
            className={`p-5 rounded-2xl text-left border-2 transition-all cursor-pointer space-y-2 relative overflow-hidden ${
              examMode === 'guided'
                ? 'bg-sky-50/80 border-sky-500 shadow-sm'
                : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center space-x-2">
                <Sparkles className="w-4.5 h-4.5 text-sky-600" />
                <span>1. Guided Practice Exam (20 Qs)</span>
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300">
                With Cheat Button
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Includes an interactive <strong>"Cheat / Eliminator Walkthrough"</strong> button on every question for step-by-step guidance and trap analysis.
            </p>
          </button>

          {/* Mode 2: Strict Test Condition */}
          <button
            onClick={() => handleSelectMode('strict')}
            className={`p-5 rounded-2xl text-left border-2 transition-all cursor-pointer space-y-2 relative overflow-hidden ${
              examMode === 'strict'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-sm sm:text-base flex items-center space-x-2">
                <Lock className={`w-4.5 h-4.5 ${examMode === 'strict' ? 'text-amber-400' : 'text-slate-600'}`} />
                <span>2. Strict Test Condition Exam (20 Qs)</span>
              </span>
              <span className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${
                examMode === 'strict'
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/30'
                  : 'bg-slate-200 text-slate-700 border-slate-300'
              }`}>
                No Cheating!
              </span>
            </div>
            <p className={`text-xs font-medium leading-relaxed ${
              examMode === 'strict' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Simulates authentic test-day difficulty with <strong>NO Cheat button</strong>, option cross-out elimination, and full score reporting.
            </p>
          </button>
        </div>
      </div>

      {/* RESULT REPORT SCREEN */}
      {isExamSubmitted ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8 animate-fadeIn">
          
          {/* Top Score Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Official Exam Score Report</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                  {examMode === 'guided' ? 'Guided Practice Performance' : 'Strict Exam Performance'}
                </h2>
              </div>
              <button
                onClick={handleRestartExam}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white transition flex items-center space-x-2 cursor-pointer shadow-lg shadow-sky-500/30"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Exam</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Raw Accuracy</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {scoreData.correctCount} / {totalQuestions}
                </div>
                <div className="text-xs text-emerald-400 font-bold mt-1">
                  {Math.round(scoreData.percentage * 100)}% Correct
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Estimated SAT Reading Score</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-300">
                  {scoreData.scaledScore} <span className="text-sm font-normal text-slate-400">/ 800</span>
                </div>
                <div className="text-xs text-sky-400 font-bold mt-1">
                  Scaled Score Representation
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Completion Status</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                  {Object.keys(userAnswers).length} / {totalQuestions}
                </div>
                <div className="text-xs text-amber-300 font-bold mt-1">
                  Questions Answered
                </div>
              </div>
            </div>
          </div>

          {/* Archetype Accuracy Breakdown */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Accuracy Breakdown by Question Archetype</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(scoreData.archetypeScores).map(([title, data], idx) => {
                const pct = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-xs font-extrabold text-slate-800 tracking-tight">{title}</div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-slate-900">{data.correct} of {data.total} Correct</span>
                      <span className={`font-bold px-2 py-0.5 rounded text-xs ${
                        pct >= 80 ? 'bg-emerald-100 text-emerald-800' : pct >= 50 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {pct}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trap Vulnerability Analysis */}
          {Object.keys(scoreData.trapFails).length > 0 && (
            <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-3">
              <h3 className="text-base font-bold text-rose-950 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <span>Distractor Trap Vulnerability Report</span>
              </h3>
              <p className="text-xs text-rose-900 font-medium leading-relaxed">
                You lost points to the following distractor trap types. Focus on these specific rules to prevent future mistakes:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {Object.entries(scoreData.trapFails).map(([trapName, count], idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-rose-300 text-rose-950 font-bold text-xs shadow-xs">
                    ⚠️ {trapName}: <strong className="text-rose-700">{count} Mistake{count > 1 ? 's' : ''}</strong>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Question-by-Question Full Review */}
          <div className="space-y-6 pt-4 border-t border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center space-x-2">
                <HelpCircle className="w-5.5 h-5.5 text-sky-600" />
                <span>Full Exam Question Review & Expert Walkthroughs</span>
              </h3>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <button
                  onClick={() => setReportFilter('all')}
                  className={`px-3 py-1.5 rounded-xl cursor-pointer transition ${
                    reportFilter === 'all'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All ({totalQuestions})
                </button>
                <button
                  onClick={() => setReportFilter('missed')}
                  className={`px-3 py-1.5 rounded-xl cursor-pointer transition ${
                    reportFilter === 'missed'
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                  }`}
                >
                  Missed ({totalQuestions - scoreData.correctCount - unansweredCount})
                </button>
                <button
                  onClick={() => setReportFilter('correct')}
                  className={`px-3 py-1.5 rounded-xl cursor-pointer transition ${
                    reportFilter === 'correct'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                  }`}
                >
                  Correct ({scoreData.correctCount})
                </button>
                {unansweredCount > 0 && (
                  <button
                    onClick={() => setReportFilter('unanswered')}
                    className={`px-3 py-1.5 rounded-xl cursor-pointer transition ${
                      reportFilter === 'unanswered'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-300'
                    }`}
                  >
                    Unanswered ({unansweredCount})
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-6">
              {questions.filter((q, idx) => {
                const selected = userAnswers[idx];
                const correctOption = q.options.find(o => o.isCorrect);
                const isUserCorrect = selected && correctOption && selected === correctOption.id;
                const isUnanswered = selected === undefined;

                if (reportFilter === 'correct') return isUserCorrect;
                if (reportFilter === 'missed') return !isUserCorrect && !isUnanswered;
                if (reportFilter === 'unanswered') return isUnanswered;
                return true;
              }).map((q) => {
                const idx = questions.findIndex(item => item.id === q.id);
                const selected = userAnswers[idx];
                const correctOption = q.options.find(o => o.isCorrect);
                const isUserCorrect = selected && correctOption && selected === correctOption.id;

                return (
                  <div key={q.id} className={`p-5 sm:p-6 rounded-2xl border-2 space-y-4 ${
                    isUserCorrect ? 'bg-emerald-50/40 border-emerald-300' : 'bg-rose-50/40 border-rose-300'
                  }`}>
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                      <div className="flex items-center space-x-3">
                        <span className={`w-8 h-8 rounded-xl font-extrabold text-sm flex items-center justify-center ${
                          isUserCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{q.archetypeTitle}</span>
                          <h4 className="text-base font-extrabold text-slate-900">{q.title}</h4>
                        </div>
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
                        isUserCorrect ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-rose-100 text-rose-900 border-rose-300'
                      }`}>
                        {isUserCorrect ? '✅ Correct' : selected ? '❌ Missed' : '⚪ Unanswered'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 italic bg-white p-3 rounded-xl border border-slate-200 leading-relaxed font-passage">
                      "{q.passage}"
                    </p>

                    <div className="text-xs font-bold text-slate-900">{q.questionStem}</div>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map(opt => {
                        const isChosen = selected === opt.id;
                        return (
                          <div key={opt.id} className={`p-3 rounded-xl border font-medium ${
                            opt.isCorrect
                              ? 'bg-emerald-100 text-emerald-950 border-emerald-400 font-bold'
                              : isChosen
                              ? 'bg-rose-100 text-rose-950 border-rose-400'
                              : 'bg-white text-slate-700 border-slate-200'
                          }`}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-extrabold">{opt.id}. {opt.text}</span>
                              {opt.isCorrect && <span className="text-[10px] bg-emerald-700 text-white px-1.5 py-0.5 rounded font-bold">CORRECT</span>}
                              {isChosen && !opt.isCorrect && <span className="text-[10px] bg-rose-700 text-white px-1.5 py-0.5 rounded font-bold">YOUR CHOICE</span>}
                            </div>
                            <div className="text-[11px] text-slate-600 mt-1 italic">{opt.fatalFlawReason}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Walkthrough */}
                    <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 text-xs font-medium space-y-1">
                      <strong className="text-sky-400 block font-bold">💡 Expert Walkthrough:</strong>
                      <p className="leading-relaxed text-slate-300">{q.expertWalkthrough}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      ) : (
        /* ACTIVE QUESTION WORKSPACE */
        <div className="space-y-6">
          
          {/* Question Navigator Grid (1 to 20) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <div className="flex items-center space-x-2">
                <span>Question Navigator ({currentQuestionIndex + 1} of {totalQuestions})</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="hidden sm:inline font-mono text-slate-500 text-[11px] normal-case">
                  Keys: <kbd className="bg-slate-100 border border-slate-300 px-1 rounded text-slate-700 font-bold">A</kbd> <kbd className="bg-slate-100 border border-slate-300 px-1 rounded text-slate-700 font-bold">B</kbd> <kbd className="bg-slate-100 border border-slate-300 px-1 rounded text-slate-700 font-bold">C</kbd> <kbd className="bg-slate-100 border border-slate-300 px-1 rounded text-slate-700 font-bold">D</kbd> | <kbd className="bg-slate-100 border border-slate-300 px-1 rounded text-slate-700 font-bold">←</kbd> <kbd className="bg-slate-100 border border-slate-300 px-1 rounded text-slate-700 font-bold">→</kbd>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {unansweredCount > 0 && (
                  <button
                    onClick={handleJumpToNextUnanswered}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 transition flex items-center space-x-1 cursor-pointer"
                  >
                    <FastForward className="w-3 h-3 text-amber-600" />
                    <span>Next Unanswered ({unansweredCount} left)</span>
                  </button>
                )}
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-extrabold">
                  {Object.keys(userAnswers).length}/{totalQuestions} Answered
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {questions.map((_, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = userAnswers[idx] !== undefined;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentQuestionIndex(idx);
                      setShowCheatEngine(false);
                    }}
                    className={`w-9 h-9 rounded-xl font-extrabold text-xs transition cursor-pointer flex items-center justify-center ${
                      isCurrent
                        ? 'bg-sky-600 text-white ring-2 ring-sky-400 ring-offset-2 shadow-md'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Question Container */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Question Archetype Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-extrabold text-sky-600 uppercase tracking-wider">
                  Archetype: {currentQuestion.archetypeTitle}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                  Question {currentQuestionIndex + 1}: {currentQuestion.title}
                </h2>
              </div>

              {/* Guided Mode CHEAT BUTTON */}
              {examMode === 'guided' && (
                <button
                  onClick={() => setShowCheatEngine(!showCheatEngine)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center space-x-2 transition cursor-pointer shadow-sm ${
                    showCheatEngine
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-amber-950 font-extrabold shadow-md'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-950 shrink-0" />
                  <span>{showCheatEngine ? 'Hide Cheat Walkthrough' : '💡 Cheat / Eliminator Walkthrough'}</span>
                </button>
              )}
            </div>

            {/* Passage Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-900 space-y-3 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span>SAT Passage Context</span>
              </div>
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-passage">
                "{currentQuestion.passage}"
              </p>
            </div>

            {/* Optional Chart / Data Table */}
            {currentQuestion.chartData && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-extrabold text-indigo-700 uppercase tracking-wider">
                  <FileSpreadsheet className="w-4 h-4 text-indigo-600" />
                  <span>Data Table: {currentQuestion.chartData.title}</span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                        {currentQuestion.chartData.headers.map((h, i) => (
                          <th key={i} className="p-2.5 font-extrabold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentQuestion.chartData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50/80 font-medium text-slate-800">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2.5">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {currentQuestion.chartData.caption && (
                  <p className="text-xs text-slate-500 italic pt-1">{currentQuestion.chartData.caption}</p>
                )}
              </div>
            )}

            {/* Question Stem */}
            <div className="text-base sm:text-lg font-extrabold text-slate-900 pt-2">
              {currentQuestion.questionStem}
            </div>

            {/* CHEAT ENGINE EXPANDED WALKTHROUGH CARD */}
            {examMode === 'guided' && showCheatEngine && currentQuestion.cheatWalkthrough && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/80 border-2 border-amber-300 space-y-4 shadow-md animate-fadeIn">
                <div className="flex items-center justify-between border-b border-amber-200 pb-2.5">
                  <span className="font-extrabold text-amber-950 text-sm flex items-center space-x-2">
                    <Sparkles className="w-4.5 h-4.5 text-amber-600" />
                    <span>Cheat Engine: Expert Eliminator Breakdown</span>
                  </span>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded bg-amber-200 text-amber-950">
                    Live Guidance
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-amber-200 space-y-1">
                    <strong className="text-amber-900 font-extrabold block">🟡 Finger Cover Prediction / Key Clue:</strong>
                    <p className="text-slate-800 font-medium leading-relaxed">{currentQuestion.cheatWalkthrough.fingerCoverPrediction}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-amber-200 space-y-1">
                    <strong className="text-indigo-900 font-extrabold block">🔵 Scope & Architecture Analysis:</strong>
                    <p className="text-slate-800 font-medium leading-relaxed">{currentQuestion.cheatWalkthrough.scopeAnalysis}</p>
                  </div>
                </div>

                {/* Option Trap Breakdown */}
                {currentQuestion.cheatWalkthrough.optionTraps && currentQuestion.cheatWalkthrough.optionTraps.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <strong className="text-xs text-amber-950 font-extrabold block">🔴 Option Trap Breakdown (A - D):</strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {currentQuestion.cheatWalkthrough.optionTraps.map((t, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-white border border-amber-200 space-y-0.5">
                          <div className="flex items-center justify-between font-bold text-slate-900">
                            <span>Option {t.optionId}:</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                              t.trapName === 'Correct Choice' ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                            }`}>
                              {t.trapName}
                            </span>
                          </div>
                          <p className="text-slate-700 text-[11px] leading-relaxed">{t.reasoning}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Answer Options (A - D) via EliminatorCard */}
            <div className="pt-2">
              <EliminatorCard
                key={`${examMode}-${currentQuestion.id}`}
                options={currentQuestion.options}
                selectedOptionId={userAnswers[currentQuestionIndex]}
                onSelectOption={handleAnswerSelect}
                eliminatedOptionIds={eliminatedOptions[currentQuestionIndex] || []}
                onToggleEliminateOption={handleToggleEliminate}
                hideFeedbackOnSelect={examMode === 'strict'}
                expertWalkthrough={currentQuestion.expertWalkthrough}
              />
            </div>

            {/* Bottom Question Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => {
                  setCurrentQuestionIndex(prev => prev - 1);
                  setShowCheatEngine(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center space-x-1.5 transition cursor-pointer ${
                  currentQuestionIndex === 0
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="text-xs font-bold text-slate-500">
                {userAnswers[currentQuestionIndex] ? '✓ Choice Saved' : 'Select Choice A–D (or press key)'}
              </div>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(prev => prev + 1);
                    setShowCheatEngine(false);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-sky-600 hover:bg-sky-700 text-white flex items-center space-x-1.5 transition cursor-pointer shadow-sm shadow-sky-600/30"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleAttemptSubmit}
                  className="px-6 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center space-x-1.5 transition cursor-pointer shadow-md shadow-emerald-600/30 animate-bounce"
                >
                  <ShieldCheck className="w-4.5 h-4.5" />
                  <span>Submit Exam & View Report</span>
                </button>
              )}
            </div>

          </div>

        </div>
      )}

      {/* Unanswered Questions Confirmation Modal */}
      {showUnansweredModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-scaleUp">
            <div className="flex items-start space-x-3.5">
              <div className="p-3 bg-amber-100 text-amber-700 rounded-2xl shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Unanswered Questions Detected</h3>
                <p className="text-xs text-slate-600 mt-1">
                  You currently have <strong className="text-amber-700 font-extrabold">{unansweredCount}</strong> unanswered question{unansweredCount > 1 ? 's' : ''}.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-3">
              <p className="font-medium leading-relaxed">
                💡 <strong>Digital SAT Rule:</strong> There is <strong>no penalty for guessing</strong> on the SAT! You should always guess on every question before completing the module.
              </p>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Click below to jump to an unanswered question:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {questions.map((_, idx) => {
                    if (userAnswers[idx] === undefined) {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setCurrentQuestionIndex(idx);
                            setShowUnansweredModal(false);
                            setShowCheatEngine(false);
                          }}
                          className="w-8 h-8 rounded-lg bg-white border border-amber-300 text-amber-950 font-extrabold text-xs hover:bg-amber-200 transition cursor-pointer flex items-center justify-center"
                        >
                          {idx + 1}
                        </button>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowUnansweredModal(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                Return to Exam
              </button>
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer shadow-md shadow-emerald-600/30"
              >
                Submit Exam Anyway
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
