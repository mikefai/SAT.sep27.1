import React, { useState } from 'react';
import { VOCAB_PREDICTOR_ITEMS } from '../../data/satData';
import { EliminatorCard } from '../modules/EliminatorCard';
import { Eye, EyeOff, Sparkles, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';

export const VocabPredictorEngine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userPrediction, setUserPrediction] = useState('');
  const [isChoicesRevealed, setIsChoicesRevealed] = useState(false);

  const currentItem = VOCAB_PREDICTOR_ITEMS[currentIndex];

  const handleReveal = () => {
    setIsChoicesRevealed(true);
  };

  const handleNext = () => {
    setUserPrediction('');
    setIsChoicesRevealed(false);
    if (currentIndex < VOCAB_PREDICTOR_ITEMS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Vocabulary Finger Cover Engine
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Train your brain to predict context words BEFORE looking at answer options!
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Board */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-b border-slate-100 pb-3">
          <span>Item #{currentIndex + 1} of {VOCAB_PREDICTOR_ITEMS.length}</span>
          <span>Method: Cover Choices $\to$ Context Clues $\to$ Predict $\to$ Match</span>
        </div>

        {/* Passage with Masked Blank */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-inner">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Passage Context</span>
          <p className="text-base sm:text-lg lg:text-xl font-passage text-slate-900 leading-relaxed sm:leading-loose">
            {currentItem.passage}
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs sm:text-sm">
            <span className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-950 font-semibold border border-amber-200">
              Transition Signal: <strong>{currentItem.transitionDirection}</strong>
            </span>
          </div>
        </div>

        {/* Context Clues Accordion */}
        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2.5">
          <div className="flex items-center space-x-2 text-sm sm:text-base font-bold text-amber-900">
            <Sparkles className="w-4.5 h-4.5 text-amber-600" />
            <span>Key Passage Context Clues</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentItem.contextClues.map((clue, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-lg bg-white border border-amber-200 text-xs sm:text-sm font-bold text-amber-950 shadow-xs">
                "{clue}"
              </span>
            ))}
          </div>
        </div>

        {/* Step 1: User Prediction Input */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm font-bold text-sky-400">
              <EyeOff className="w-5 h-5" />
              <span>Step 1: Write Down Your Simple Replacement Word</span>
            </div>
            {isChoicesRevealed && (
              <span className="text-xs sm:text-sm text-emerald-400 font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Choices Uncovered!</span>
              </span>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={userPrediction}
              onChange={(e) => setUserPrediction(e.target.value)}
              placeholder="e.g. expensive, steadfast, hidden..."
              className="flex-1 px-4.5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-base sm:text-lg focus:outline-none focus:border-sky-500 placeholder-slate-500 font-medium"
            />
            
            {!isChoicesRevealed && (
              <button
                onClick={handleReveal}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm sm:text-base shadow-md transition flex items-center space-x-2 cursor-pointer"
              >
                <span>Uncover Choices</span>
                <Eye className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="text-xs sm:text-sm text-slate-300 font-medium">
            Suggested expert predictions for this blank: {currentItem.suggestedPredictions.map(p => `"${p}"`).join(', ')}
          </div>
        </div>

        {/* Step 2: Uncovered Choices Board */}
        {isChoicesRevealed && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                <ArrowRight className="w-4 h-4 text-sky-600" />
                <span>Step 2: Match Your Prediction "{userPrediction || 'Word'}" to the SAT Options</span>
              </span>

              <button
                onClick={handleNext}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center space-x-1.5 transition cursor-pointer"
              >
                <span>Next Item</span>
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <EliminatorCard options={currentItem.choices} />
          </div>
        )}

      </div>
    </div>
  );
};
