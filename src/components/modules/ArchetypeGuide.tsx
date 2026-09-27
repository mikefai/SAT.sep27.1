import React, { useState } from 'react';
import { QuestionArchetype } from '../../types/sat';
import { EliminatorCard } from './EliminatorCard';
import { TurkishCognateCard } from '../common/TurkishCognateCard';
import { SecondaryDefinitionsCard } from '../common/SecondaryDefinitionsCard';
import { DetailTrapExamplesCard } from '../common/DetailTrapExamplesCard';
import { EvidenceTrapExamplesCard } from '../common/EvidenceTrapExamplesCard';
import { QuantitativeTrapExamplesCard } from '../common/QuantitativeTrapExamplesCard';
import { InferenceTrapExamplesCard } from '../common/InferenceTrapExamplesCard';
import { StructureTrapExamplesCard } from '../common/StructureTrapExamplesCard';
import { CrossTextTrapExamplesCard } from '../common/CrossTextTrapExamplesCard';
import { TurkishDualPassageCard } from '../common/TurkishDualPassageCard';
import { 
  AlertCircle, 
  CheckCircle2, 
  Lightbulb, 
  ShieldAlert, 
  ChevronRight,
  ChevronLeft, 
  Check,
  Target,
  BookOpen,
  ArrowRight,
  Layers
} from 'lucide-react';

interface ArchetypeGuideProps {
  archetype: QuestionArchetype;
  onCompleteArchetype: (id: string) => void;
  isCompleted: boolean;
}

type LessonTab = 'practice' | 'strategy' | 'traps' | 'all';

export const ArchetypeGuide: React.FC<ArchetypeGuideProps> = ({ 
  archetype, 
  onCompleteArchetype,
  isCompleted 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lessonTab, setLessonTab] = useState<LessonTab>('practice');

  const currentQuestion = archetype.questions[currentQuestionIndex];

  // Helper renderers for modular sections
  const renderStrategySection = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* The Issue vs The Method Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* The Issue Card */}
        <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200/80 border-l-4 border-l-rose-500 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 text-rose-900 font-bold text-sm sm:text-base">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>The Overthinking Pitfall (Why Students Panic)</span>
          </div>
          <p className="text-sm sm:text-base text-rose-950 leading-relaxed font-normal">
            {archetype.theIssue}
          </p>
        </div>

        {/* The Method Card */}
        <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 border-l-4 border-l-blue-600 shadow-xs space-y-3">
          <div className="flex items-center space-x-2 text-blue-950 font-bold text-sm sm:text-base">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
            <span>The Eliminator Method (100% Objective Gameplan)</span>
          </div>
          <p className="text-sm sm:text-base text-blue-950 leading-relaxed font-normal">
            {archetype.theMethod}
          </p>
        </div>

      </div>

      {/* Step-by-Step Method Breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
        <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span>Step-by-Step Eliminator Execution Gameplan</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {archetype.methodSteps.map((step, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2.5 transition-all duration-150 hover:bg-slate-50 hover:border-slate-300">
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">{step.step}</div>
              <p className="text-sm text-slate-800 leading-relaxed font-normal">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eliminator Golden Rule Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 border-l-4 border-l-amber-500 shadow-xs text-sm sm:text-base text-amber-950 space-y-2">
        <span className="font-bold flex items-center space-x-2 text-sm sm:text-base text-amber-900">
          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Eliminator Golden Rule for {archetype.title}</span>
        </span>
        <p className="leading-relaxed font-normal text-amber-950">{archetype.proTip}</p>
      </div>

      {/* Turkish Cognate Bridge Card */}
      {archetype.id === 'words-in-context' && (
        <TurkishCognateCard />
      )}

      {/* Turkish Dual Passage Bridge Card */}
      {archetype.id === 'cross-text-connections' && (
        <TurkishDualPassageCard />
      )}

      {/* Jump to Practice CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => setLessonTab('practice')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center space-x-2 transition cursor-pointer shadow-sm shadow-blue-600/20"
        >
          <span>Jump to Interactive Practice</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const renderPracticeSection = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Quick Lesson Anchor Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950">
        <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium">
          <Lightbulb className="w-4.5 h-4.5 text-amber-600 shrink-0" />
          <span><strong>Golden Rule:</strong> {archetype.proTip}</span>
        </div>
        <button
          onClick={() => setLessonTab('strategy')}
          className="text-xs font-bold text-amber-900 hover:text-amber-950 underline underline-offset-2 cursor-pointer shrink-0"
        >
          View Full Strategy →
        </button>
      </div>

      {currentQuestion && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
          
          {/* Question Navigator Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-xl bg-slate-900 text-white font-bold text-xs">
                Drill {currentQuestionIndex + 1} of {archetype.questions.length}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {currentQuestion.title}
              </span>
            </div>

            {archetype.questions.length > 1 && (
              <div className="flex items-center space-x-2">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer flex items-center space-x-1 text-xs font-semibold"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>
                <div className="flex items-center space-x-1">
                  {archetype.questions.map((_, qIdx) => (
                    <button
                      key={qIdx}
                      onClick={() => setCurrentQuestionIndex(qIdx)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center ${
                        qIdx === currentQuestionIndex
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {qIdx + 1}
                    </button>
                  ))}
                </div>
                <button
                  disabled={currentQuestionIndex === archetype.questions.length - 1}
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer flex items-center space-x-1 text-xs font-semibold"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Unified High-Legibility Passage Container */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-4">
            {currentQuestion.passageTitle && (
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>Passage Context:</span>
                <span className="text-slate-700">{currentQuestion.passageTitle}</span>
              </div>
            )}
            
            <p className="text-base sm:text-lg text-slate-900 leading-relaxed sm:leading-loose whitespace-pre-line font-normal">
              "{currentQuestion.passage}"
            </p>

            {/* Quantitative Data Chart if present */}
            {currentQuestion.chartData && (
              <div className="mt-5 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <h4 className="text-sm font-bold text-slate-900 text-center">
                  {currentQuestion.chartData.title}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left text-slate-700 border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200">
                        {currentQuestion.chartData.headers.map((h, i) => (
                          <th key={i} className="p-2.5 font-bold text-slate-900">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentQuestion.chartData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50 font-normal">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2.5 text-slate-800">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {currentQuestion.chartData.caption && (
                  <p className="text-xs text-slate-500 italic text-center pt-1">
                    {currentQuestion.chartData.caption}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Question Stem */}
          <div className="p-4 sm:p-5 rounded-xl bg-blue-50/60 border border-blue-200/80 text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {currentQuestion.questionStem}
          </div>

          {/* Eliminator Options Board */}
          <EliminatorCard 
            key={currentQuestion.id}
            options={currentQuestion.options}
            onCorrectAnswer={() => onCompleteArchetype(archetype.id)}
          />

          {/* Walkthrough Section */}
          <div className="p-5 rounded-xl bg-slate-900 text-slate-100 space-y-1.5 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-blue-400 block">💡 Expert Walkthrough & Reasoning:</span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">{currentQuestion.expertWalkthrough}</p>
          </div>

        </div>
      )}
    </div>
  );

  const renderTrapsSection = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <ShieldAlert className="w-5 h-5 text-rose-500" />
            <span>Common Distractor Traps to Flag</span>
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            {archetype.trapsToFlag.length} Core Traps Cataloged
          </span>
        </div>

        <div className="space-y-4">
          {archetype.trapsToFlag.map((trap, idx) => (
            <React.Fragment key={idx}>
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 border-l-4 border-l-rose-500 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-rose-900 bg-rose-100/70 px-3 py-1 rounded-lg border border-rose-200">
                    Trap #{idx + 1}: {trap.name}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
                  {trap.description}
                </p>
                <div className="text-xs sm:text-sm text-slate-700 italic bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  💡 <strong>Example:</strong> {trap.example}
                </div>
              </div>

              {/* Render Secondary Definitions Card directly under Trap #1 for Words in Context */}
              {idx === 0 && archetype.id === 'words-in-context' && (
                <SecondaryDefinitionsCard />
              )}

              {/* Render Detail Trap Examples Card directly under Trap #1 for Central Ideas & Details */}
              {idx === 0 && archetype.id === 'central-ideas-details' && (
                <DetailTrapExamplesCard />
              )}

              {/* Render Evidence Trap Examples Card directly under Trap #1 and Trap #2 for Command of Evidence */}
              {archetype.id === 'command-of-evidence-textual' && (idx === 0 || idx === 1) && (
                <EvidenceTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}

              {/* Render Quantitative Trap Examples Card directly under Trap #1 and Trap #2 for Command of Evidence Quantitative */}
              {archetype.id === 'command-of-evidence-quantitative' && (idx === 0 || idx === 1) && (
                <QuantitativeTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}

              {/* Render Inference Trap Examples Card directly under Trap #1 and Trap #2 for Inferences & Logical Completion */}
              {archetype.id === 'inferences-logical-completion' && (idx === 0 || idx === 1) && (
                <InferenceTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}

              {/* Render Structure Trap Examples Card directly under Trap #1 and Trap #2 for Text Structure & Purpose */}
              {archetype.id === 'text-structure-purpose' && (idx === 0 || idx === 1) && (
                <StructureTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}

              {/* Render Cross-Text Trap Examples Card directly under Trap #1 and Trap #2 for Cross-Text Connections */}
              {archetype.id === 'cross-text-connections' && (idx === 0 || idx === 1) && (
                <CrossTextTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Jump to Practice CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => setLessonTab('practice')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center space-x-2 transition cursor-pointer shadow-sm shadow-blue-600/20"
        >
          <span>Test Traps in Interactive Practice</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      
      {/* Module Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <span>Archetype #{archetype.number}</span>
              <span>•</span>
              <span>Digital SAT 2026 Reading & Writing</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {archetype.title}
            </h1>
            <p className="text-sm font-normal text-slate-500 mt-1">
              {archetype.subtitle}
            </p>
          </div>

          <button
            onClick={() => onCompleteArchetype(archetype.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition cursor-pointer ${
              isCompleted
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20'
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{isCompleted ? 'Archetype Mastered' : 'Mark as Mastered'}</span>
          </button>
        </div>

        {/* Structured Lesson Flow Navigator */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/90 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setLessonTab('practice')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center space-x-2 ${
              lessonTab === 'practice'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Target className="w-4 h-4 text-blue-600" />
            <span>1. Interactive Practice</span>
            <span className="px-1.5 py-0.2 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold">
              {archetype.questions.length} Qs
            </span>
          </button>

          <button
            onClick={() => setLessonTab('strategy')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center space-x-2 ${
              lessonTab === 'strategy'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>2. Strategy & Core Method</span>
          </button>

          <button
            onClick={() => setLessonTab('traps')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center space-x-2 ${
              lessonTab === 'traps'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-rose-500" />
            <span>3. Distractor Traps & Field Guide</span>
          </button>

          <button
            onClick={() => setLessonTab('all')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center space-x-2 ${
              lessonTab === 'all'
                ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-slate-500" />
            <span>All-in-One View</span>
          </button>
        </div>
      </div>

      {/* Render Active View Based on Lesson Flow Tab */}
      {lessonTab === 'practice' && renderPracticeSection()}
      {lessonTab === 'strategy' && renderStrategySection()}
      {lessonTab === 'traps' && renderTrapsSection()}
      {lessonTab === 'all' && (
        <div className="space-y-8">
          {renderStrategySection()}
          {renderPracticeSection()}
          {renderTrapsSection()}
        </div>
      )}

    </div>
  );
};
