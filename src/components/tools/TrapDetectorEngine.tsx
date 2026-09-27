import React, { useState } from 'react';
import { TRAP_DETECTOR_DRILLS } from '../../data/satData';
import { TrapType } from '../../types/sat';
import { ShieldAlert, CheckCircle2, XCircle, RefreshCw, Trophy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TrapDetectorEngine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTrap, setSelectedTrap] = useState<TrapType | null>(null);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  const currentDrill = TRAP_DETECTOR_DRILLS[currentIndex];

  const handleSelectTrap = (trap: TrapType) => {
    if (hasAnswered) return;
    setSelectedTrap(trap);
    setHasAnswered(true);

    if (trap === currentDrill.correctTrap) {
      setScore(prev => prev + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const handleNext = () => {
    setSelectedTrap(null);
    setHasAnswered(false);
    if (currentIndex < TRAP_DETECTOR_DRILLS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                Interactive Trap Detector Engine
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Don't guess the right answer—tag why the wrong choice fails!
              </p>
            </div>
          </div>

          {/* Score Badge */}
          <div className="flex items-center space-x-2 bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 rounded-xl text-xs font-bold text-indigo-900">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Detector Score: {score}</span>
          </div>
        </div>
      </div>

      {/* Drill Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-b border-slate-100 pb-3">
          <span>Drill #{currentIndex + 1} of {TRAP_DETECTOR_DRILLS.length}</span>
          <span>Goal: Identify the specific distractor trap</span>
        </div>

        {/* Passage Context */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Passage Context</span>
          <p className="text-base sm:text-lg lg:text-xl font-passage text-slate-900 leading-relaxed sm:leading-loose">
            {currentDrill.passage}
          </p>
        </div>

        {/* Prompt & Choice to Tag */}
        <div className="space-y-3">
          <p className="text-sm sm:text-base font-bold text-slate-800">
            {currentDrill.questionStem}
          </p>

          <div className="p-5 rounded-xl bg-rose-50/80 border border-rose-200 space-y-2">
            <div className="flex items-center space-x-2 font-bold text-sm sm:text-base text-rose-900">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold">
                {currentDrill.choiceToAnalyze.id}
              </span>
              <span>Choice {currentDrill.choiceToAnalyze.id} to Tag:</span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-rose-950 pl-8 leading-relaxed">
              "{currentDrill.choiceToAnalyze.text}"
            </p>
          </div>
        </div>

        {/* Trap Selection Buttons */}
        <div className="space-y-3">
          <span className="text-sm sm:text-base font-bold text-slate-800 block">
            Select the fatal trap type for Choice {currentDrill.choiceToAnalyze.id}:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentDrill.trapOptions.map((trapOption) => {
              const isSelected = selectedTrap === trapOption;
              const isCorrect = trapOption === currentDrill.correctTrap;

              return (
                <button
                  key={trapOption}
                  onClick={() => handleSelectTrap(trapOption as TrapType)}
                  disabled={hasAnswered}
                  className={`p-4 rounded-xl border text-sm sm:text-base font-bold transition-all text-left flex items-center justify-between cursor-pointer ${
                    hasAnswered
                      ? isCorrect
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 ring-2 ring-emerald-200'
                        : isSelected
                          ? 'bg-rose-50 border-rose-400 text-rose-950'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-400 hover:bg-indigo-50/50'
                  }`}
                >
                  <span>{trapOption}</span>
                  {hasAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                  {hasAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation Section */}
        {hasAnswered && (
          <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 animate-fadeIn">
            <div className="flex items-center space-x-2 text-sm font-bold text-sky-400">
              <Sparkles className="w-4 h-4" />
              <span>Trap Diagnosis Breakdown</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {currentDrill.explanation}
            </p>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm transition flex items-center space-x-2 cursor-pointer"
            >
              <span>Next Drill</span>
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
