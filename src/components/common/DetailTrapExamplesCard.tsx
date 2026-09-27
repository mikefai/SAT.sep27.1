import React from 'react';
import { Target, AlertCircle, CheckCircle2, FileText } from 'lucide-react';

export const DetailTrapExamplesCard: React.FC = () => {
  return (
    <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
      
      {/* Supporting Note Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
          <Target className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Supplementary Note: 2 Visual Examples of "True But Irrelevant" Traps</span>
        </div>
        
        <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
          <FileText className="w-3.5 h-3.5 text-indigo-500" />
          <span>Detail vs. Thesis</span>
        </div>
      </div>

      {/* 2 Visual Example Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        
        {/* Example 1 */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 1: Bee Colony Study
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Prompt: Main Idea
            </span>
          </div>

          {/* Passage snippet */}
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 italic text-xs leading-relaxed">
            "A study noted that <span className="bg-amber-100 text-amber-950 font-semibold px-1 rounded underline decoration-amber-400">worker bees collect nectar from wildflowers</span>. However, researchers concluded that pesticide exposure is the primary cause of colony collapse disorder."
          </div>

          {/* Distractor vs Correct Comparison */}
          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Detail Trap):</span>
                <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold">100% True Fact</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Worker bees collect nectar from wildflowers."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: True fact from sentence 1, but <u className="decoration-rose-500 font-bold">FAILS to state the main thesis</u>!</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Main Thesis):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Full Scope</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Pesticide exposure is the primary driver of bee colony collapse disorder."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Encompasses the whole passage’s core conclusion.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 2: Deep-Sea Anglerfish
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Prompt: Main Thesis
            </span>
          </div>

          {/* Passage snippet */}
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 italic text-xs leading-relaxed">
            "Anglerfish use bioluminescence for predatory lures. Furthermore, <span className="bg-amber-100 text-amber-950 font-semibold px-1 rounded underline decoration-amber-400">males use light patterns to locate mates</span>. Thus, bioluminescence serves dual evolutionary roles."
          </div>

          {/* Distractor vs Correct Comparison */}
          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Detail Trap):</span>
                <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold">100% True Fact</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Male anglerfish rely on light patterns to find mates."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: Accurate detail, but <u className="decoration-rose-500 font-bold">TOO NARROW</u> (ignores predatory lures).</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Main Thesis):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Full Scope</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Anglerfish bioluminescence serves dual functions in feeding and reproduction."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Acts as an umbrella covering all paragraph details.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
