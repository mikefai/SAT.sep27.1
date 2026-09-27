import React from 'react';
import { GitCommit, CheckCircle2, AlertCircle, Sparkles, HelpCircle } from 'lucide-react';

interface InferenceTrapExamplesProps {
  trapNumber: 1 | 2;
}

export const InferenceTrapExamplesCard: React.FC<InferenceTrapExamplesProps> = ({ trapNumber }) => {
  if (trapNumber === 1) {
    return (
      <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Supplementary Note: 2 Visual Examples of "The Hollywood Twist (Wild Leap)" Traps</span>
          </div>
          
          <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
            <GitCommit className="w-3.5 h-3.5 text-indigo-500" />
            <span>Wild Speculation vs Baby Step</span>
          </div>
        </div>

        {/* 2 Visual Example Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          
          {/* Example 1: Hydrothermal Enzyme */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 1: Deep-Sea Enzyme Study
              </span>
              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                Premise: Lab test at 80°C
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (Hollywood Twist):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Wild 3-Step Leap</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "Enzyme X-9 will eliminate global ocean plastic pollution within the next decade."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Grandiose speculative leap</u>! Lab test at 80°C does not prove real-world global ocean deployment.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Baby Step Rule):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Inescapable Step</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "Enzyme X-9 retains catalytic activity when exposed to high-temperature polymer breakdown environments."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Boring, safe, 100% forced by the lab test premise.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Ancient Grain Trial */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 2: Drought Grain Yield
              </span>
              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                Premise: 1-Year Trial (+15% Yield)
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (Hollywood Twist):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Wild 3-Step Leap</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "Teff grain will permanently replace wheat as the primary global staple crop."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Unwarranted global extrapolation</u>! A 1-year trial does not prove global crop replacement.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Baby Step Rule):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Inescapable Step</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "Teff varieties demonstrate greater resilience to water scarcity than wheat under trial dry conditions."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Conservative, strict deduction directly anchored in the trial data.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Trap #2: Unmentioned Assumption
  return (
    <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
          <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Supplementary Note: 2 Visual Examples of "Unmentioned Assumption" Traps</span>
        </div>
        
        <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
          <GitCommit className="w-3.5 h-3.5 text-indigo-500" />
          <span>Outside Story vs Text Premise</span>
        </div>
      </div>

      {/* 2 Visual Example Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        
        {/* Example 1: Fort Vanes Pottery */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 1: Fort Vanes Pottery Trade
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Text: River route shifted
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Unmentioned Assumption):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Invented Story</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Fort Vanes was destroyed by an invading enemy military force in 1420 CE."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: <u className="decoration-rose-500 font-bold">Assumes unstated historical events</u>! The text mentions trade rerouting, never war or destruction.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Strict Text Boundary):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Premise Grounded</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Local commercial pottery circulation declined following the shift in river trade routes."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Connects pottery loss to trade rerouting without inventing external causes.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example 2: Exam Performance */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 2: Exam Completion
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Text: Arrived 25 mins late
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Unmentioned Assumption):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Invented Story</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Marcus failed to answer questions because he did not study the course material."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: <u className="decoration-rose-500 font-bold">Assumes unstated study habits</u>! The text ONLY stated Marcus arrived late, not his prep level.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Strict Text Boundary):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Premise Grounded</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Marcus had less available time to complete all test sections than punctual test-takers."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Boring, inescapable fact strictly derived from his late arrival.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
