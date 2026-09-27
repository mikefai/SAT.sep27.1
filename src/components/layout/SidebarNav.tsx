import React from 'react';
import { 
  BookOpen, 
  Target, 
  FileText, 
  BarChart3, 
  GitCommit, 
  Layers, 
  GitCompare, 
  ShieldAlert, 
  Eye, 
  FileCheck,
  Compass,
  Trophy
} from 'lucide-react';
import { ARCHETYPES } from '../../data/satData';

interface SidebarNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  completedArchetypes: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-4 h-4" />,
  Target: <Target className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  GitCommit: <GitCommit className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  GitCompare: <GitCompare className="w-4 h-4" />,
};

export const SidebarNav: React.FC<SidebarNavProps> = ({ 
  activeTab, 
  setActiveTab, 
  completedArchetypes 
}) => {
  return (
    <aside className="w-full lg:w-72 bg-white border-r border-slate-200 shrink-0 lg:min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between">
      <div className="space-y-6">
        
        {/* Course Overview Header */}
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Question Archetypes</span>
          </div>
          
          <nav className="space-y-1">
            {ARCHETYPES.map((arch) => {
              const isActive = activeTab === arch.id;
              const isCompleted = completedArchetypes.includes(arch.id);
              
              return (
                <button
                  key={arch.id}
                  onClick={() => setActiveTab(arch.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 text-left cursor-pointer ${
                    isActive
                      ? 'bg-sky-50 text-sky-900 font-semibold border border-sky-200/80 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <span className={`p-1 rounded-lg ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {iconMap[arch.iconName] || <BookOpen className="w-4 h-4" />}
                    </span>
                    <span className="truncate">{arch.number}. {arch.title}</span>
                  </div>
                  {isCompleted && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 ml-1" title="Mastered" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Interactive Tools Section */}
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
            <ShieldAlert className="w-3.5 h-3.5 text-indigo-500" />
            <span>Interactive Tools</span>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('trap-detector')}
              className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                activeTab === 'trap-detector'
                  ? 'bg-indigo-50 text-indigo-900 font-semibold border border-indigo-200/80 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`p-1 rounded-lg ${activeTab === 'trap-detector' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                <ShieldAlert className="w-4 h-4" />
              </span>
              <span>Trap Detector Mini-Drills</span>
            </button>

            <button
              onClick={() => setActiveTab('vocab-predictor')}
              className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                activeTab === 'vocab-predictor'
                  ? 'bg-amber-50 text-amber-900 font-semibold border border-amber-200/80 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`p-1 rounded-lg ${activeTab === 'vocab-predictor' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                <Eye className="w-4 h-4" />
              </span>
              <span>Vocab Finger Cover Engine</span>
            </button>
          </nav>
        </div>

        {/* Reference & Dashboard Section */}
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
            <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Dashboard & Reference</span>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('mock-exam')}
              className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                activeTab === 'mock-exam'
                  ? 'bg-amber-500/10 text-amber-950 font-extrabold border border-amber-300 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`p-1 rounded-lg ${activeTab === 'mock-exam' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                <Trophy className="w-4 h-4" />
              </span>
              <span className="flex-1 font-bold">Full SAT Mock Exam (40 Qs)</span>
            </button>

            <button
              onClick={() => setActiveTab('cheat-sheet')}
              className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                activeTab === 'cheat-sheet'
                  ? 'bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200/80 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`p-1 rounded-lg ${activeTab === 'cheat-sheet' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                <FileCheck className="w-4 h-4" />
              </span>
              <span>Cheat Sheet & Signals</span>
            </button>
          </nav>
        </div>

      </div>

      {/* Progress Footer Card */}
      <div className="mt-8 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
        <div className="flex justify-between items-center text-slate-700 font-semibold">
          <span>Mastery Progress</span>
          <span>{completedArchetypes.length} / {ARCHETYPES.length} Archetypes</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-sky-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedArchetypes.length / ARCHETYPES.length) * 100}%` }}
          />
        </div>
        <p className="text-[11px] text-slate-500">
          Focus on why answers fail. Objective perfection comes from elimination.
        </p>
      </div>

    </aside>
  );
};
