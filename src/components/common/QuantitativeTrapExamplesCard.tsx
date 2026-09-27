import React from 'react';
import { BarChart2, CheckCircle2, AlertCircle, Percent, FileCheck2 } from 'lucide-react';

interface QuantitativeTrapExamplesProps {
  trapNumber: 1 | 2;
}

export const QuantitativeTrapExamplesCard: React.FC<QuantitativeTrapExamplesProps> = ({ trapNumber }) => {
  if (trapNumber === 1) {
    return (
      <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
            <Percent className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Supplementary Note: 2 Visual Examples of "Percentages vs. Absolute Numbers" Traps</span>
          </div>
          
          <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
            <BarChart2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>% Rate vs. Total Count</span>
          </div>
        </div>

        {/* 2 Visual Example Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
          
          {/* Example 1: Startup Growth */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 1: Tech Startup Hiring
              </span>
              <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
                Data: +300% (6 hires) vs +10% (1,000 hires)
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (% vs Count Trap):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Confuses % with Count</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "Startup A hired more total engineers in 2024 than Tech Giant B."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Confuses % growth rate with raw total</u>! 300% of 2 is only 6 engineers, whereas 10% of 10,000 is 1,000 engineers.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Exact Data Match):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Accurate Rate Claim</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "Startup A recorded a higher percentage growth rate in engineering staff (+300%) than Tech Giant B (+10%)."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Accurately specifies % growth rate without falsely claiming higher total count.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Solar Home Adoption */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Example 2: Solar Home Adoption
              </span>
              <span className="text-[11px] font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
                Data: 80% (400 homes) vs 20% (200k homes)
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Distractor */}
              <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
                <div className="flex items-center justify-between font-bold text-rose-900">
                  <span>❌ Distractor Choice (% vs Count Trap):</span>
                  <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Confuses % with Count</span>
                </div>
                <p className="text-rose-950 font-medium">
                  "Small Town X has more total solar-powered homes than Metro City Y."
                </p>
                <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span>Why it fails: <u className="decoration-rose-500 font-bold">Misreads percentage as raw count</u>! 80% of 500 homes is 400; 20% of 1M homes is 200,000.</span>
                </div>
              </div>

              {/* Correct */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>✅ Correct Choice (Exact Data Match):</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Accurate Rate Claim</span>
                </div>
                <p className="text-emerald-950 font-bold">
                  "Small Town X achieved a higher proportion of solar-powered homes (80%) than Metro City Y (20%)."
                </p>
                <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Why it wins: Correctly compares proportions (percentages) matching the graph axes.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Trap #2: Accurate Chart Data, Wrong Argument
  return (
    <div className="mt-3 bg-slate-100/60 border border-slate-300/80 border-l-4 border-l-slate-400 rounded-2xl p-4 sm:p-5 space-y-4 font-sans animate-fadeIn">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
        <div className="flex items-center space-x-2 text-slate-800 font-bold text-xs sm:text-sm">
          <FileCheck2 className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Supplementary Note: 2 Visual Examples of "Accurate Data, Wrong Argument" Traps</span>
        </div>
        
        <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
          <BarChart2 className="w-3.5 h-3.5 text-indigo-500" />
          <span>True Fact $\neq$ Thesis Support</span>
        </div>
      </div>

      {/* 2 Visual Example Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
        
        {/* Example 1: Corporate Net Profit */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 1: Corporate Financial Loss
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Passage Claim: Net Loss in 2023
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (True Data, Wrong Claim):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Unrelated Chart Fact</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Gross revenue increased from $50M in 2022 to $60M in 2023."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: <u className="decoration-rose-500 font-bold">True data from graph, but ignores text claim</u>! High gross revenue does not support the author's point about net losses due to costs.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Data + Thesis Match):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Supports Thesis</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Operating costs increased from $40M to $65M in 2023, exceeding revenue and resulting in a $5M net loss."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Uses accurate chart data AND directly proves the author's written thesis.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example 2: EV Battery Cost Barrier */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              Example 2: EV Battery Production Cost
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Passage Claim: Cost is Main Barrier
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-900">
                <span>❌ Distractor Choice (True Data, Wrong Claim):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Unrelated Chart Fact</span>
              </div>
              <p className="text-rose-950 font-medium">
                "Average EV battery driving range increased by 45 miles between 2020 and 2024."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Why it fails: <u className="decoration-rose-500 font-bold">True chart fact, wrong argument</u>! Driving range gains do not prove high manufacturing costs are a barrier.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Correct Choice (Data + Thesis Match):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Supports Thesis</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Battery pack manufacturing costs remained high at $155/kWh in 2024, keeping EV retail prices above average budget thresholds."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Why it wins: Cites accurate cost figures that directly validate the author's written thesis.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
