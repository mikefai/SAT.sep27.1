import React from 'react';
import { TURKISH_COGNATES } from '../../data/satData';
import { Globe, Languages, Sparkles, ArrowRight } from 'lucide-react';

export const TurkishCognateCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-red-50/90 via-slate-50 to-amber-50/90 border-2 border-red-200/90 border-l-8 border-l-red-600 rounded-3xl p-6 sm:p-7 shadow-md space-y-5 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-red-200/60 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-red-500/20">
            🇹🇷
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Turkish Cognate Bridge (Türkçe Akraba Kelimeler Köprüsü)
              </h2>
              <span className="px-2.5 py-0.5 text-xs font-bold bg-red-100 text-red-900 rounded-full border border-red-300">
                SAT Secret Weapon
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
              Many high-frequency SAT Latin/French loanwords exist in Turkish with identical roots and meanings!
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/80 border border-red-200 text-xs font-bold text-red-900 shadow-xs">
          <Languages className="w-4 h-4 text-red-600" />
          <span>Bilingual Advantage</span>
        </div>
      </div>

      {/* 4 Turkish Cognate Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TURKISH_COGNATES.map((item, idx) => (
          <div 
            key={idx} 
            className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 space-y-3"
          >
            {/* Word Headers */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="space-y-0.5">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">SAT Word</span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                  {item.englishWord}
                </h3>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

              <div className="text-right space-y-0.5">
                <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider">Türkçe Karşılığı</span>
                <h4 className="text-base sm:text-lg font-extrabold text-red-950">
                  {item.turkishCognate}
                </h4>
              </div>
            </div>

            {/* Meanings */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-slate-800 block mb-0.5">SAT Academic Meaning:</span>
                <p className="text-slate-700 leading-relaxed">{item.satMeaning}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-red-50/70 border border-red-200/70">
                <span className="font-bold text-red-950 block mb-0.5">Türkçe Anlamı & Bağlamı:</span>
                <p className="text-red-950 leading-relaxed font-medium">{item.turkishMeaning}</p>
              </div>
            </div>

            {/* SAT Example Sentence */}
            <div className="text-xs sm:text-sm text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-200">
              💬 <strong>SAT Example:</strong> "{item.satExample}"
            </div>

            {/* Bridge Tip */}
            <div className="flex items-start space-x-2 text-xs text-amber-900 bg-amber-50 p-2.5 rounded-xl border border-amber-200/80">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Köprü İpucu:</strong> {item.turkishBridgeTip}</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
