import React from 'react';
import { Layers, CheckCircle2, AlertCircle, FileCode, Split } from 'lucide-react';

interface StructureTrapExamplesProps {
  trapNumber: 1 | 2;
}

export const StructureTrapExamplesCard: React.FC<StructureTrapExamplesProps> = ({ trapNumber }) => {
  if (trapNumber === 1) {
    return (
      <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
            <Layers className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Supplementary Note: 2 Visual Examples of "Content vs. Function Confusion" Traps</span>
          </div>
          
          <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
            <FileCode className="w-3.5 h-3.5 text-indigo-500" />
            <span>Topic Summary vs Structural Action</span>
          </div>
        </div>

        {/* 2 Visual Example Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          
          {/* Example 1: 18th-Century Poetry */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 1: 18th-Century Poetry Analysis
              </span>
              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                Structure: Claim → Evidence → Revision
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (Content Summary):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Topic Summary Trap</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "The passage discusses 18th-century English romantic poetry and rhyming techniques."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Summarizes subject matter</u>! Tells you WHAT the text is about, not HOW the author structures the argument.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Function Action Verbs):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Structural Function</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "It presents a traditional interpretation, introduces new archival evidence, and offers a revised reading."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Uses structural action verbs (presents, introduces, offers) to describe passage architecture.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Ancient Acoustic Design */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 2: Ancient Acoustic Design
              </span>
              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                Structure: Belief → Challenge → Implication
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (Content Summary):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Topic Summary Trap</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "The passage explains how limestone seats in ancient Greek amphitheaters absorbed wind noise."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Confuses topic content with structural purpose</u>! Fails to state that the author is challenging an old belief.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Function Action Verbs):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Structural Function</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "It outlines a long-standing historical belief, presents recent engineering research that challenges it, and considers the implications."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Accurately maps out the macro structural moves of the entire text.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Trap #2: Half-Passage Trap
  return (
    <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
          <Split className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Supplementary Note: 2 Visual Examples of "Half-Passage" Traps</span>
        </div>
        
        <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
          <Layers className="w-3.5 h-3.5 text-indigo-500" />
          <span>Chunk 1 Only vs Full Arc</span>
        </div>
      </div>

      {/* 2 Visual Example Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        
        {/* Example 1: Market Hypothesis */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 1: Market Efficiency Theory
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Arc: Theory (P1) → Refutation (P2)
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Half-Passage Trap):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Ignores Paragraph 2</span>
              </div>
              <p className="text-rose-950 font-medium">
                "The primary purpose of the passage is to summarize the core tenets of the Efficient Market Hypothesis."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: <u className="decoration-rose-500 font-bold">Accurately describes Paragraph 1, but ignores Paragraph 2</u>! Misses the shift where P2 refutes the hypothesis.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Full Passage Scope):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Complete Arc</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "The passage outlines an economic hypothesis and then presents empirical trading evidence that refutes its assumptions."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Encompasses BOTH Paragraph 1 (hypothesis) and Paragraph 2 (refutation).</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example 2: Salmon Migration */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 2: Salmon Navigation Study
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Arc: Magnetic (P1) → Olfactory (P2)
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (Half-Passage Trap):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Ignores Paragraph 2</span>
              </div>
              <p className="text-rose-950 font-medium">
                "The main function of the text is to detail how salmon utilize magnetic fields for ocean navigation."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: <u className="decoration-rose-500 font-bold">Truncates the passage at Paragraph 1</u>! Completely ignores Paragraph 2's focus on olfactory cues.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Full Passage Scope):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Complete Arc</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "The text describes a long-held navigation theory and then introduces experimental findings supporting an alternative mechanism."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Captures the full transition from traditional theory to new alternative mechanism.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
