import React, { useState } from 'react';
import { QuestionArchetype } from '../../types/sat';
import { EliminatorCard } from './EliminatorCard';
import { TurkishCognateCard } from '../common/TurkishCognateCard';
import { SecondaryDefinitionsCard } from '../common/SecondaryDefinitionsCard';
import { DetailTrapExamplesCard } from '../common/DetailTrapExamplesCard';
import { EvidenceTrapExamplesCard } from '../common/EvidenceTrapExamplesCard';
import { QuantitativeTrapExamplesCard } from '../common/QuantitativeTrapExamplesCard';
import { InferenceTrapExamplesCard } from '../common/InferenceTrapExamplesCard';
import { StructureTrapExamplesCard } from '../common/StructureTrapExamplesCard';
import { CrossTextTrapExamplesCard } from '../common/CrossTextTrapExamplesCard';
import { TurkishDualPassageCard } from '../common/TurkishDualPassageCard';
import { 
  AlertCircle, 
  CheckCircle2, 
  Lightbulb, 
  ShieldAlert, 
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';

interface ArchetypeGuideProps {
  archetype: QuestionArchetype;
  onCompleteArchetype: (id: string) => void;
  isCompleted: boolean;
}

export const ArchetypeGuide: React.FC<ArchetypeGuideProps> = ({ 
  archetype, 
  onCompleteArchetype,
  isCompleted 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = archetype.questions[currentQuestionIndex];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Module Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
              <span>Archetype #{archetype.number}</span>
              <span>•</span>
              <span>Digital SAT 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {archetype.title}
            </h1>
            <p className="text-sm font-medium text-slate-500 mt-0.5">
              {archetype.subtitle}
            </p>
          </div>

          <button
            onClick={() => onCompleteArchetype(archetype.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition cursor-pointer ${
              isCompleted
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-500/20'
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{isCompleted ? 'Archetype Mastered' : 'Mark as Mastered'}</span>
          </button>
        </div>

        {/* The Issue vs The Method Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          
          {/* The Issue Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 border border-rose-200/90 border-l-4 border-l-rose-500 shadow-sm space-y-2.5">
            <div className="flex items-center space-x-2 text-rose-900 font-bold text-sm sm:text-base">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>The Overthinking Pitfall (Why Students Panic)</span>
            </div>
            <p className="text-sm sm:text-base text-rose-950 leading-relaxed font-medium">
              {archetype.theIssue}
            </p>
          </div>

          {/* The Method Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-sky-50/70 border border-sky-200/90 border-l-4 border-l-sky-500 shadow-sm space-y-2.5">
            <div className="flex items-center space-x-2 text-sky-950 font-bold text-sm sm:text-base">
              <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
              <span>The Eliminator Method (100% Objective Gameplan)</span>
            </div>
            <p className="text-sm sm:text-base text-sky-950 leading-relaxed font-medium">
              {archetype.theMethod}
            </p>
          </div>

        </div>
      </div>

      {/* Turkish Cognate Bridge Card */}
      {archetype.id === 'words-in-context' && (
        <TurkishCognateCard />
      )}

      {/* Turkish Dual Passage Bridge Card */}
      {archetype.id === 'cross-text-connections' && (
        <TurkishDualPassageCard />
      )}

      {/* Step-by-Step Method Breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
        <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <span>Step-by-Step Eliminator Execution</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {archetype.methodSteps.map((step, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
              <div className="text-xs sm:text-sm font-extrabold text-sky-700 uppercase tracking-wide">{step.step}</div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Traps to Flag */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
        <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <ShieldAlert className="w-5 h-5 text-rose-500" />
          <span>Common Distractor Traps to Flag</span>
        </h2>

        <div className="space-y-4">
          {archetype.trapsToFlag.map((trap, idx) => (
            <React.Fragment key={idx}>
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 border-l-4 border-l-rose-500 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-rose-900 bg-rose-100/80 px-3.5 py-1 rounded-lg border border-rose-200">
                    Trap #{idx + 1}: {trap.name}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                  {trap.description}
                </p>
                <div className="text-xs sm:text-sm text-slate-700 italic bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  💡 <strong>Example:</strong> {trap.example}
                </div>
              </div>

              {/* Render Secondary Definitions Card directly under Trap #1 for Words in Context */}
              {idx === 0 && archetype.id === 'words-in-context' && (
                <SecondaryDefinitionsCard />
              )}

              {/* Render Detail Trap Examples Card directly under Trap #1 for Central Ideas & Details */}
              {idx === 0 && archetype.id === 'central-ideas-details' && (
                <DetailTrapExamplesCard />
              )}

              {/* Render Evidence Trap Examples Card directly under Trap #1 and Trap #2 for Command of Evidence */}
              {archetype.id === 'command-of-evidence-textual' && (idx === 0 || idx === 1) && (
                <EvidenceTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}

              {/* Render Quantitative Trap Examples Card directly under Trap #1 and Trap #2 for Command of Evidence Quantitative */}
              {archetype.id === 'command-of-evidence-quantitative' && (idx === 0 || idx === 1) && (
                <QuantitativeTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}

              {/* Render Inference Trap Examples Card directly under Trap #1 and Trap #2 for Inferences & Logical Completion */}
              {archetype.id === 'inferences-logical-completion' && (idx === 0 || idx === 1) && (
                <InferenceTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}

              {/* Render Structure Trap Examples Card directly under Trap #1 and Trap #2 for Text Structure & Purpose */}
              {archetype.id === 'text-structure-purpose' && (idx === 0 || idx === 1) && (
                <StructureTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}

              {/* Render Cross-Text Trap Examples Card directly under Trap #1 and Trap #2 for Cross-Text Connections */}
              {archetype.id === 'cross-text-connections' && (idx === 0 || idx === 1) && (
                <CrossTextTrapExamplesCard trapNumber={(idx + 1) as 1 | 2} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Pro Tip Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-indigo-500/10 border border-sky-200/80 border-l-4 border-l-amber-500 shadow-sm text-sm sm:text-base text-slate-900 space-y-2">
          <span className="font-bold text-sky-950 flex items-center space-x-2 text-sm sm:text-base">
            <Lightbulb className="w-4.5 h-4.5 text-amber-600" />
            <span>Eliminator Golden Rule</span>
          </span>
          <p className="text-slate-800 leading-relaxed font-medium">{archetype.proTip}</p>
        </div>
      </div>

      {/* Interactive Practice Questions */}
      {currentQuestion && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-bold text-xs sm:text-sm">
                Interactive Practice
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                Question {currentQuestionIndex + 1} of {archetype.questions.length}
              </span>
            </div>

            {archetype.questions.length > 1 && (
              <div className="flex items-center space-x-2">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  disabled={currentQuestionIndex === archetype.questions.length - 1}
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Passage Container - BIGGER TEXT FOR LESSON INTEGRATION */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-inner">
            {currentQuestion.passageTitle && (
              <h3 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                {currentQuestion.passageTitle}
              </h3>
            )}
            
            <p className="text-base sm:text-lg lg:text-xl font-passage text-slate-900 leading-relaxed sm:leading-loose whitespace-pre-line">
              {currentQuestion.passage}
            </p>

            {/* Quantitative Data Chart if present */}
            {currentQuestion.chartData && (
              <div className="mt-5 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 text-center">
                  {currentQuestion.chartData.title}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left text-slate-700 border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200">
                        {currentQuestion.chartData.headers.map((h, i) => (
                          <th key={i} className="p-2.5 font-bold text-slate-900">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentQuestion.chartData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2.5 font-medium text-slate-800">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {currentQuestion.chartData.caption && (
                  <p className="text-xs text-slate-500 italic text-center">
                    {currentQuestion.chartData.caption}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Question Stem - BIGGER TEXT */}
          <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200 text-sm sm:text-base lg:text-lg font-bold text-slate-900 leading-snug">
            {currentQuestion.questionStem}
          </div>

          {/* Eliminator Options Board */}
          <EliminatorCard 
            key={currentQuestion.id}
            options={currentQuestion.options}
            onCorrectAnswer={() => onCompleteArchetype(archetype.id)}
          />

          {/* Walkthrough section */}
          <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 space-y-1.5">
            <span className="text-xs sm:text-sm font-bold text-slate-800">Expert Walkthrough Strategy:</span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{currentQuestion.expertWalkthrough}</p>
          </div>

        </div>
      )}

    </div>
  );
};
