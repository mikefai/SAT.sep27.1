import React, { useState } from 'react';
import { ChoiceOption } from '../../types/sat';
import { XCircle, CheckCircle, AlertTriangle, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EliminatorCardProps {
  options: ChoiceOption[];
  onCorrectAnswer?: () => void;
  onEliminateOption?: () => void;
  selectedOptionId?: 'A' | 'B' | 'C' | 'D';
  onSelectOption?: (optionId: 'A' | 'B' | 'C' | 'D') => void;
  eliminatedOptionIds?: string[];
  onToggleEliminateOption?: (optionId: string) => void;
  hideFeedbackOnSelect?: boolean;
  expertWalkthrough?: string;
}

export const EliminatorCard: React.FC<EliminatorCardProps> = ({ 
  options, 
  onCorrectAnswer,
  onEliminateOption,
  selectedOptionId,
  onSelectOption,
  eliminatedOptionIds,
  onToggleEliminateOption,
  hideFeedbackOnSelect = false,
  expertWalkthrough
}) => {
  const [internalEliminatedIds, setInternalEliminatedIds] = useState<string[]>([]);
  const [internalSelectedId, setInternalSelectedId] = useState<string | null>(null);
  const [showWalkthrough, setShowWalkthrough] = useState<boolean>(false);

  const eliminatedIds = eliminatedOptionIds !== undefined ? eliminatedOptionIds : internalEliminatedIds;
  const selectedId = selectedOptionId !== undefined ? selectedOptionId : internalSelectedId;

  const toggleEliminate = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();

    if (onToggleEliminateOption) {
      onToggleEliminateOption(id);
    } else {
      if (internalEliminatedIds.includes(id)) {
        setInternalEliminatedIds(internalEliminatedIds.filter(item => item !== id));
      } else {
        const nextEliminated = [...internalEliminatedIds, id];
        setInternalEliminatedIds(nextEliminated);
        if (onEliminateOption) onEliminateOption();

        // Check if 3 wrong options are eliminated
        const wrongOptionIds = options.filter(o => !o.isCorrect).map(o => o.id);
        const allWrongEliminated = wrongOptionIds.every(wid => nextEliminated.includes(wid));
        
        if (allWrongEliminated && !hideFeedbackOnSelect) {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
          if (onCorrectAnswer) onCorrectAnswer();
        }
      }
    }
  };

  const handleSelectOption = (option: ChoiceOption) => {
    if (eliminatedIds.includes(option.id)) return; // Prevent selecting eliminated choice
    
    if (onSelectOption) {
      onSelectOption(option.id);
    } else {
      setInternalSelectedId(option.id);
    }

    if (!hideFeedbackOnSelect) {
      setShowWalkthrough(true);
      if (option.isCorrect) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        if (onCorrectAnswer) onCorrectAnswer();
      }
    }
  };

  const handleReset = () => {
    if (onToggleEliminateOption && eliminatedIds.length > 0) {
      eliminatedIds.forEach(id => onToggleEliminateOption(id));
    } else {
      setInternalEliminatedIds([]);
    }
    setInternalSelectedId(null);
    setShowWalkthrough(false);
  };

  return (
    <div className="space-y-4 font-sans">
      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
        <span className="font-semibold text-slate-700">
          The Eliminator Practice Board:
        </span>
        <div className="flex items-center space-x-3">
          <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
            Click option to select | Click <XCircle className="w-3 h-3 inline text-rose-500" /> to cross out wrong options
          </span>
          {(eliminatedIds.length > 0 || selectedId !== null) && !hideFeedbackOnSelect && (
            <button 
              onClick={handleReset}
              className="flex items-center space-x-1 text-slate-500 hover:text-slate-800 transition cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-3.5">
        {options.map((option) => {
          const isEliminated = eliminatedIds.includes(option.id);
          const isSelected = selectedId === option.id;
          const isCorrect = option.isCorrect;

          let cardStyle = 'bg-white border-slate-200/90 hover:border-sky-300 hover:shadow-md';
          let badgeStyle = 'bg-slate-100 text-slate-800 border border-slate-200';
          let textStyle = 'text-slate-900';

          if (isEliminated) {
            cardStyle = 'bg-slate-100/70 border-slate-200 opacity-60';
            badgeStyle = 'bg-slate-200 text-slate-400 line-through';
            textStyle = 'line-through text-slate-400';
          } else if (isSelected) {
            if (hideFeedbackOnSelect) {
              // Real Exam / Strict Mode styling: Neutral selected state without spoilers!
              cardStyle = 'bg-sky-50/90 border-sky-600 shadow-md ring-4 ring-sky-100';
              badgeStyle = 'bg-sky-600 text-white shadow-sky-600/30';
              textStyle = 'text-sky-950 font-bold';
            } else {
              // Practice mode styling with instant feedback
              if (isCorrect) {
                cardStyle = 'bg-emerald-50/90 border-emerald-500 shadow-md ring-4 ring-emerald-100';
                badgeStyle = 'bg-emerald-600 text-white shadow-emerald-500/30';
                textStyle = 'text-emerald-950 font-semibold';
              } else {
                cardStyle = 'bg-rose-50/90 border-rose-500 shadow-md ring-4 ring-rose-100';
                badgeStyle = 'bg-rose-600 text-white shadow-rose-500/30';
                textStyle = 'text-rose-950';
              }
            }
          }

          return (
            <div
              key={option.id}
              onClick={() => handleSelectOption(option)}
              className={`relative rounded-2xl border-2 p-4 sm:p-5 transition-all duration-200 cursor-pointer ${cardStyle}`}
            >
              <div className="flex items-start justify-between space-x-4">
                
                {/* Option Badge & Text */}
                <div className="flex items-start space-x-3.5 flex-1">
                  <span
                    className={`w-9 h-9 rounded-xl text-sm sm:text-base font-extrabold flex items-center justify-center shrink-0 shadow-xs ${badgeStyle}`}
                  >
                    {option.id}
                  </span>

                  <div className="space-y-1.5 flex-1">
                    <p className={`text-sm sm:text-base lg:text-lg font-medium leading-relaxed ${textStyle}`}>
                      {option.text}
                    </p>

                    {/* Trap Type Tag (Hidden in Strict mode) */}
                    {!hideFeedbackOnSelect && option.trapType && (isEliminated || showWalkthrough) && (
                      <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-lg text-xs font-bold bg-rose-100 text-rose-900 border border-rose-300 mt-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Trap: {option.trapType}</span>
                      </div>
                    )}

                    {/* Fatal Flaw Breakdown (Hidden in Strict mode) */}
                    {!hideFeedbackOnSelect && (isEliminated || showWalkthrough) && (
                      <div
                        className={`mt-2.5 p-3 rounded-xl text-xs sm:text-sm leading-relaxed font-medium shadow-xs ${
                          isCorrect
                            ? 'bg-emerald-100/90 text-emerald-950 border border-emerald-300/80'
                            : 'bg-rose-100/80 text-rose-950 border border-rose-300/80'
                        }`}
                      >
                        {option.fatalFlawReason}
                      </div>
                    )}
                  </div>
                </div>

                {/* Eliminate Button */}
                <div className="shrink-0 flex items-center space-x-2">
                  <button
                    onClick={(e) => toggleEliminate(e, option.id)}
                    title={isEliminated ? "Restore Option" : "Eliminate Option"}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 cursor-pointer ${
                      isEliminated
                        ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        : 'bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 border border-slate-200'
                    }`}
                  >
                    <XCircle className={`w-3.5 h-3.5 ${isEliminated ? 'text-slate-500' : 'text-rose-500'}`} />
                    <span className="hidden sm:inline">{isEliminated ? 'Restore' : 'Strike Out'}</span>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Guided Walkthrough Banner */}
      {!hideFeedbackOnSelect && showWalkthrough && expertWalkthrough && (
        <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 text-xs sm:text-sm space-y-1.5 shadow-sm animate-fadeIn">
          <div className="flex items-center space-x-2 text-sky-400 font-extrabold">
            <Sparkles className="w-4 h-4" />
            <span>Eliminator Golden Walkthrough:</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-medium">
            {expertWalkthrough}
          </p>
        </div>
      )}
    </div>
  );
};
