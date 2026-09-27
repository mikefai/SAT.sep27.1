import React, { useState } from 'react';
import { X, ShieldAlert, CheckSquare, Square, ArrowRight, HelpCircle } from 'lucide-react';

interface EmergencyProtocolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyProtocolModal: React.FC<EmergencyProtocolModalProps> = ({ isOpen, onClose }) => {
  const [checkedSteps, setCheckedSteps] = useState<boolean[]>([false, false, false, false]);

  if (!isOpen) return null;

  const toggleStep = (index: number) => {
    const updated = [...checkedSteps];
    updated[index] = !updated[index];
    setCheckedSteps(updated);
  };

  const steps = [
    {
      title: '1. Hunt for the "One Word Flaw"',
      detail: 'Read both choices side-by-side word for word. Look for ONE word that makes a choice false: an extreme modifier (all, always, completely), a reversed relationship, or an unmentioned comparison.',
      flawRule: 'Even if 99% of the choice sounds brilliant, ONE wrong word makes the entire answer 100% wrong.'
    },
    {
      title: '2. Check Verb, Tense & Scope',
      detail: 'Compare the main action verb of both choices against the passage. Is Choice A describing a detail from paragraph 1 while paragraph 2 completely shifted?',
      flawRule: 'Too narrow choices describe a detail; too broad choices make universal declarations.'
    },
    {
      title: '3. Re-Read the Exact Question Stem',
      detail: 'Did the stem ask for the main idea, evidence supporting a specific hypothesis, or Author 2\'s critique? Double check you aren\'t selecting a true fact that answers the wrong question.',
      flawRule: 'Right fact + wrong prompt = wrong answer.'
    },
    {
      title: '4. Apply "The Defensiveness Test"',
      detail: 'Are you defending Choice A by thinking: "Well, maybe if we assume X, then this could work..."?',
      flawRule: 'If you have to defend an answer with excuses or hypothetical leaps, IT IS WRONG. The correct choice requires zero excuses.'
    }
  ];

  const resetChecklist = () => setCheckedSteps([false, false, false, false]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 flex items-center justify-center shadow-md">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-sans tracking-tight">
                Emergency 2-Choice Protocol
              </h2>
              <p className="text-xs text-slate-300">
                Paralyzed between the final two choices? Follow these 4 objective steps.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-900 flex items-start space-x-2.5">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Golden Rule:</strong> The SAT test creators have 100% objective rules. They cannot leave room for interpretation. One choice has a fatal flaw; the other is conservative and flawless.
            </span>
          </div>

          {/* 100% Completion Badge */}
          {checkedSteps.every(Boolean) && (
            <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs p-3 rounded-xl flex items-center justify-between font-bold animate-fadeIn">
              <div className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All 4 Protocol Checks Verified — Flawed Choice Provably Identified!</span>
              </div>
              <span className="bg-emerald-600 text-white text-[11px] px-2.5 py-1 rounded-full font-bold shadow-xs">
                100% Completed
              </span>
            </div>
          )}

          {/* Interactive Checklist */}
          <div className="space-y-4">
            {steps.map((item, index) => {
              const isDone = checkedSteps[index];

              return (
                <div
                  key={index}
                  onClick={() => toggleStep(index)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isDone 
                      ? 'bg-emerald-50/70 border-emerald-300 shadow-sm' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <button className="mt-0.5 text-emerald-600 focus:outline-none">
                      {isDone ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </button>
                    <div className="space-y-1.5">
                      <h3 className={`text-sm font-bold ${isDone ? 'text-emerald-900' : 'text-slate-800'}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                      <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-[11px] text-slate-700 font-medium">
                        🔍 <strong>Fatal Flaw Key:</strong> {item.flawRule}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={resetChecklist}
            className="text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer"
          >
            Reset Checklist
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center space-x-2 transition cursor-pointer"
          >
            <span>Back to Question</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
