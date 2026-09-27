import React from 'react';
import { SECONDARY_DEFINITION_ITEMS } from '../../data/satData';
import { BookOpenCheck, Languages } from 'lucide-react';

export const SecondaryDefinitionsCard: React.FC = () => {
  return (
    <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4">
      
      {/* Supporting Note Header - Neutral Slate/Indigo Theme */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center space-x-2 text-slate-700 font-bold text-xs sm:text-sm">
          <BookOpenCheck className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Supplementary Reference: High-Frequency Secondary Meanings & Turkish Equivalents</span>
        </div>
        
        <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
          <Languages className="w-3.5 h-3.5 text-indigo-500" />
          <span>Secondary Note</span>
        </div>
      </div>

      {/* 4 Compact Word Breakdown Cards in Muted Neutral Tones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        {SECONDARY_DEFINITION_ITEMS.map((item, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2.5"
          >
            {/* Word Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-800 text-base sm:text-lg">
                "{item.word}"
              </span>
              <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                Word Reference
              </span>
            </div>

            {/* Primary Trap vs SAT Meaning - Muted Secondary Colors */}
            <div className="space-y-2 text-xs sm:text-sm">
              {/* Primary Trap */}
              <div className="p-2.5 rounded-lg bg-slate-100/80 border border-slate-200 space-y-0.5">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide block">
                  Primary Dictionary Meaning (Distractor):
                </span>
                <p className="text-slate-700 font-medium leading-relaxed">
                  {item.primaryMeaning}
                </p>
              </div>

              {/* SAT Meaning */}
              <div className="p-2.5 rounded-lg bg-indigo-50/80 border border-indigo-200 space-y-0.5">
                <span className="text-[11px] font-bold text-indigo-900 uppercase tracking-wide block">
                  SAT Secondary Meaning (Target):
                </span>
                <p className="text-indigo-950 font-bold leading-relaxed">
                  {item.satSecondaryMeaning}
                </p>
              </div>
            </div>

            {/* SAT Example Sentence */}
            <div className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60 leading-relaxed italic">
              💬 "{item.satExample}"
            </div>

            {/* Turkish Concept */}
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 space-y-0.5 text-xs sm:text-sm">
              <p className="text-slate-800 font-bold">
                🇹🇷 <strong>Türkçe Karşılığı:</strong> <span className="text-slate-900">{item.turkishComparison.turkishWord}</span>
              </p>
              <p className="text-slate-600 leading-relaxed font-normal text-[11px] sm:text-xs">
                {item.turkishComparison.turkishSecondaryUsage}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
