import React from 'react';
import { ArrowLeftRight, CheckCircle2, AlertCircle, FileSpreadsheet } from 'lucide-react';

interface EvidenceTrapExamplesProps {
  trapNumber: 1 | 2;
}

export const EvidenceTrapExamplesCard: React.FC<EvidenceTrapExamplesProps> = ({ trapNumber }) => {
  if (trapNumber === 1) {
    return (
      <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
            <ArrowLeftRight className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Supplementary Note: 2 Visual Examples of "Reverse Causality" Traps</span>
          </div>
          
          <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
            <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-500" />
            <span>A $\to$ B vs B $\to$ A</span>
          </div>
        </div>

        {/* 2 Visual Example Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          
          {/* Example 1: Stress & Sleep */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 1: Work Stress vs Sleep Loss
              </span>
              <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                Hypothesis: Stress $\to$ Sleep Loss
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (Reversed Causality):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">B $\to$ A Trap</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "Employees who suffer from sleep loss experience higher work stress."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Flips cause and effect</u>! Claims Sleep Loss causes Stress instead of Stress causing Sleep Loss.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Target Direction):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">A $\to$ B Match</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "Employees facing increased work stress exhibit a 40% reduction in nightly sleep duration."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Directly proves Stress (A) causes Sleep Loss (B).</span>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Rain & Erosion */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 2: Rainfall vs Erosion
              </span>
              <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                Hypothesis: Rain $\to$ Erosion
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (Reversed Causality):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">B $\to$ A Trap</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "Severely eroded soil attracts higher levels of annual rainfall."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Absurd reverse claim</u>! Erosion does not cause rain to fall.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Target Direction):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">A $\to$ B Match</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "High-rainfall storms increased hillside soil erosion rates by 300%."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Matches exact hypothesis direction (Rain $\to$ Erosion).</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }

  // Trap #2: Evidence for a Different Claim
  return (
    <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
          <ArrowLeftRight className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Supplementary Note: 2 Visual Examples of "Evidence for a Different Claim" Traps</span>
        </div>
        
        <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
          <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-500" />
          <span>Claim Misalignment</span>
        </div>
      </div>

      {/* 2 Visual Example Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        
        {/* Example 1: Tree Roots */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 1: Tree Energy Preservation
            </span>
            <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
              Target: Winter Roots
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Different Claim):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Wrong Topic</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Deciduous trees expand their leaf canopy rapidly during warm summer months."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: Proves summer leaf growth, <u className="decoration-rose-500 font-bold">NOT winter root energy preservation</u>!</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Matching Claim):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Exact Match</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Root starch reserves remain 85% intact throughout sub-zero winter freeze periods."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Directly supports subterranean winter root preservation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example 2: Bird Songs vs Migration */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 2: Bird Migration Timing
            </span>
            <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
              Target: Migration Departure
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Different Claim):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Wrong Topic</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Warbler light exposure increases male morning song frequencies."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: Fascinating fact about songs, but <u className="decoration-rose-500 font-bold">does NOT prove migration departure</u>!</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Matching Claim):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Exact Match</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Warblers exposed to high light departed for spring migration 9.8 days earlier."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Directly tests and proves migration departure timing.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
