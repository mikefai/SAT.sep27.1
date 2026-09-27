import React from 'react';
import { 
  TRANSITION_SIGNALS, 
  QUESTION_STEM_TRANSLATIONS 
} from '../../data/satData';
import { TurkishCognateCard } from '../common/TurkishCognateCard';
import { Printer, ShieldCheck, Compass, CheckCircle2, FileText, Zap } from 'lucide-react';

export const CheatSheetDashboard: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn printable-area">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 no-print">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                Daily Confidence & Cheat Sheet Dashboard
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                High-frequency transition signals, question decoders, and objective elimination rules.
              </p>
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Cheat Sheet</span>
          </button>
        </div>
      </div>

      {/* Print-Only Title Header */}
      <div className="hidden print-only mb-6 text-center border-b pb-4">
        <h1 className="text-2xl font-bold">Digital SAT 2026 Reading & Writing Cheat Sheet</h1>
        <p className="text-xs text-gray-600">The Eliminator Mindset Quick Reference</p>
      </div>

      {/* Turkish Cognates Bridge Section */}
      <TurkishCognateCard />

      {/* The 4 Fatal Flaws Summary Cards */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <Zap className="w-5 h-5 text-amber-500" />
          <span>The 4 Fatal Flaws (Objective Elimination Criteria)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4.5 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
            <span className="text-sm font-bold text-rose-800">1. Too Extreme</span>
            <p className="text-xs sm:text-sm text-rose-950 leading-relaxed font-medium">
              Uses absolute terms like <em>all, always, completely, uniquely, impossible</em> when text only proved a conditional point.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
            <span className="text-sm font-bold text-amber-800">2. Opposite / Reversed</span>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
              Flips the cause and effect, or claims Variable X increased when data shows Variable X decreased.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-purple-50 border border-purple-200 space-y-1.5">
            <span className="text-sm font-bold text-purple-800">3. Out of Scope</span>
            <p className="text-xs sm:text-sm text-purple-950 leading-relaxed font-medium">
              Introduces outside assumptions, unmentioned comparisons, or future predictions not in the text container.
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-sky-50 border border-sky-200 space-y-1.5">
            <span className="text-sm font-bold text-sky-800">4. True But Irrelevant</span>
            <p className="text-xs sm:text-sm text-sky-950 leading-relaxed font-medium">
              States a fact 100% accurate to line 2 or real life, but fails to answer the specific prompt asked in the stem.
            </p>
          </div>
        </div>
      </div>

      {/* Transition Signal Matrix */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex items-center space-x-2">
          <Compass className="w-5 h-5 text-sky-600" />
          <h2 className="text-xl font-bold text-slate-900">
            High-Frequency Transition Signal Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRANSITION_SIGNALS.map((group, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-md text-xs sm:text-sm font-bold border ${group.badgeColor}`}>
                  {group.category}
                </span>
              </div>

              <div className="space-y-3">
                {group.signals.map((sig, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm space-y-1 shadow-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base">
                      <span>{sig.word}</span>
                      <span className="text-xs font-medium text-slate-500">{sig.function}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 italic">"{sig.example}"</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question Stem Decoder */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-900">
            Digital SAT Question Stem Translators
          </h2>
        </div>

        <div className="space-y-4">
          {QUESTION_STEM_TRANSLATIONS.map((trans, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-sm sm:text-base font-bold text-indigo-900 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-200 inline-block">
                Raw Prompt: {trans.rawStem}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1 text-sm">Plain English Meaning:</span>
                  <p className="text-slate-700 leading-relaxed">{trans.plainEnglish}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <span className="font-bold text-emerald-950 block mb-1 text-sm">Eliminator Mindset Key:</span>
                  <p className="text-emerald-950 font-semibold leading-relaxed">{trans.mindsetKey}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Encouragement Footer */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-bold text-sm text-sky-400">Final Reminder Before Test Day</h3>
          <p className="text-xs text-slate-300">
            You do not need to decipher literature or agree with the author. You only need to verify which 3 choices violate objective rules.
          </p>
        </div>
        <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0 ml-4 hidden sm:block" />
      </div>

    </div>
  );
};
