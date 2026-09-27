import React from 'react';
import { GitCompare, CheckCircle2, AlertCircle, UserX, MessageSquareWarning } from 'lucide-react';

interface CrossTextTrapExamplesProps {
  trapNumber: 1 | 2;
}

export const CrossTextTrapExamplesCard: React.FC<CrossTextTrapExamplesProps> = ({ trapNumber }) => {
  if (trapNumber === 1) {
    return (
      <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
            <UserX className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Supplementary Note: 2 Visual Examples of "Right Passage, Wrong Author" Traps</span>
          </div>
          
          <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
            <GitCompare className="w-3.5 h-3.5 text-indigo-500" />
            <span>Author 1 vs Author 2 Perspective</span>
          </div>
        </div>

        {/* 2 Visual Example Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          
          {/* Example 1: Megafauna Extinction */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 1: Megafauna Extinction
              </span>
              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                Prompt: Author 2's Response
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (Wrong Author Trap):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Author 1's View</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "Clovis hunting weapons were the sole cause of mammoth extinction."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">States Author 1's view, NOT Author 2's critique</u>! Author 2 claims overhunting alone is incomplete.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Author 2's Shoes):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Author 2 Stance</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "Passage 1 oversimplifies by failing to account for paleoclimate habitat disruptions."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Correctly steps into Author 2's shoes to critique Author 1.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: AI Art Creativity */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 2: AI & Art Creativity
              </span>
              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                Prompt: Author 2's Stance
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (Wrong Author Trap):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Author 1's View</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "AI generative algorithms possess authentic creative imagination."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Accurately states Author 1's claim</u>, but the stem specifically asked for Author 2's perspective!</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Author 2's Shoes):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Author 2 Stance</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "AI output lacks true intentionality because it depends entirely on existing human dataset recombination."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Expresses Author 2's exact counter-argument regarding dataset dependency.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Trap #2: Generic Debate Trap
  return (
    <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
          <MessageSquareWarning className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Supplementary Note: 2 Visual Examples of "Generic Debate Trap"</span>
        </div>
        
        <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
          <GitCompare className="w-3.5 h-3.5 text-indigo-500" />
          <span>Broad Disagreement vs Exact Intersection</span>
        </div>
      </div>

      {/* 2 Visual Example Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        
        {/* Example 1: Historical Monument Dating */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 1: Ancient Monument Dating
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Point of Conflict: Date & Method
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Generic Debate Trap):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Overly Broad</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Author 2 completely rejects all historical archaeological research methods."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: <u className="decoration-rose-500 font-bold">Vague, overly broad debate claim</u>! Author 2 only disputes stylistic dating in favor of radiocarbon testing.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Exact Point of Intersection):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Specific Conflict</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Author 2 challenges the reliance on stylistic motifs by citing physical radiocarbon data from structural timber."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Pinpoints the EXACT scientific intersection where the two authors disagree.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example 2: Solar Battery Storage */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 2: Solar Battery Storage
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Point of Conflict: Lithium vs Flow
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Generic Debate Trap):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Overly Broad</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Author 2 opposes the adoption of solar power and grid modernization."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: <u className="decoration-rose-500 font-bold">Absurd general rejection</u>! Author 2 supports solar energy, but advocates flow batteries over lithium.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Exact Point of Intersection):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Specific Conflict</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Author 2 argues lithium-ion batteries are less suitable for long-term grid storage than flow batteries due to degradation rates."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Directly targets the specific technological trade-off debated by the authors.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
