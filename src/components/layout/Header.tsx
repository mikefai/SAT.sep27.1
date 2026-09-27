import React from 'react';
import { ShieldAlert, Sparkles, CheckCircle2, PenTool } from 'lucide-react';

interface HeaderProps {
  onOpenEmergencyModal: () => void;
  eliminationCount: number;
  isPenActive?: boolean;
  onTogglePen?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenEmergencyModal, 
  eliminationCount,
  isPenActive,
  onTogglePen 
}) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand & Mindset Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-lg tracking-tight font-sans text-white">SAT ELIMINATOR</span>
              <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                Digital 2026
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              Reading & Writing Confidence Engine
            </p>
          </div>
        </div>

        {/* Eliminator Rule Badge */}
        <div className="hidden lg:flex items-center px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
          <span>Rule #1: <strong className="text-white">Never look for the best answer first</strong>; find why 3 are provably wrong.</span>
        </div>

        {/* Emergency Protocol & Disappearing Pen Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Disappearing Pen Header Button */}
          {onTogglePen && (
            <button
              onClick={onTogglePen}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                isPenActive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              <PenTool className="w-4 h-4" />
              <span className="hidden sm:inline">Disappearing Pen</span>
              <span className="text-[10px] px-1 py-0.2 rounded bg-slate-950/40 text-amber-300">5s</span>
            </button>
          )}

          <button
            onClick={onOpenEmergencyModal}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-rose-500/20 transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span>Stuck Between 2 Choices?</span>
          </button>
        </div>

      </div>
    </header>
  );
};
