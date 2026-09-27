import React from 'react';
import { Languages, HelpCircle, AlertTriangle, CheckCircle2, ArrowRightLeft } from 'lucide-react';

export const TurkishDualPassageCard: React.FC = () => {
  return (
    <div className="mt-4 bg-slate-100/70 border border-slate-300 border-l-4 border-l-indigo-500 rounded-2xl p-5 space-y-4 font-sans shadow-xs animate-fadeIn">
      
      {/* Header - Turkish Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm sm:text-base">
          <Languages className="w-5 h-5 text-indigo-600 shrink-0" />
          <span>🇹🇷 Türkçe Strateji Köprüsü: Çift Metin (Dual Passages) Sorularını Çözme Mantığı</span>
        </div>
        
        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200">
          Türk Öğrenci Rehberi
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
        Digital SAT <strong>Cross-Text Connections (Çift Metin)</strong> sorularında en çok yapılan hata, Metin 1 ile Metin 2'nin görüşlerini karıştırmaktır. Aşağıdaki Türkçe örneklerle soru hazırlayıcıların kurduğu 2 temel tuzağı anında tespit edin:
      </p>

      {/* 2 Main Turkish Examples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        
        {/* Turkish Example 1 */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm">
              Tuzak 1: Doğru Metin, Yanlış Yazar
            </span>
            <span className="text-[11px] font-bold text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
              Soru: Yazar 2 ne der?
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-50 text-slate-700 text-xs italic border border-slate-200 leading-relaxed">
            <strong>Metin 1:</strong> "Mamutların nesli sadece insan avcılığı (Clovis) yüzünden tükendi."<br />
            <strong>Metin 2:</strong> "İklim değişikliğinin neden olduğu bitki örtüsü kaybı göz ardı edilemez."
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-950">
                <span>❌ Çeldirici Şık (Metin 1'in Fikri):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Yanlış Yazar Tuzağı</span>
              </div>
              <p className="text-rose-950 font-semibold">
                "Clovis mızrak başları mamutların neslini tek başına tükenme noktasına getirmiştir."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Neden Yanlış: Bu Metin 1'in iddiasıdır! Soru size Yazar 2'nin cevabını sormaktadır.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Doğru Şık (Yazar 2'nin Gözlüğü):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Tam İsabet</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Metin 1, iklimsel yaşam alanı yıkımını göz ardı ederek olayı aşırı basitleştirmektedir."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Neden Doğru: Yazar 2'nin zihniyle Metin 1'in eksik tarafını net şekilde ifade eder.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Turkish Example 2 */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-extrabold text-slate-900 text-sm">
              Tuzak 2: Aşırı Genel Tartışma Tuzağı
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Soru: Tartışma Noktası
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-50 text-slate-700 text-xs italic border border-slate-200 leading-relaxed">
            <strong>Metin 1:</strong> "Şehir içi ağaçlandırma sadece yazın gölge sağlamak içindir."<br />
            <strong>Metin 2:</strong> "Kışın toprak altındaki köklerin karbon tutma kapasitesi daha kritiktir."
          </div>

          <div className="space-y-2 text-xs">
            {/* Distractor */}
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 space-y-1">
              <div className="flex items-center justify-between font-bold text-rose-950">
                <span>❌ Çeldirici Şık (Aşırı Genel):</span>
                <span className="text-[10px] bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-bold">Genel Laçka Şık</span>
              </div>
              <p className="text-rose-950 font-semibold">
                "Yazar 2, şehirlerde ağaç dikilmesine ve çevre projelerine tamamen karşı çıkmaktadır."
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-0.5 flex items-center space-x-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Neden Yanlış: Saçma ve aşırı genel! Yazar 2 ağaca karşı değil, kış köklerine vurgu yapıyor.</span>
              </div>
            </div>

            {/* Correct */}
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 space-y-1">
              <div className="flex items-center justify-between font-bold text-emerald-950">
                <span>✅ Doğru Şık (Spesifik Çakışma):</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Spesifik Odak</span>
              </div>
              <p className="text-emerald-950 font-bold">
                "Yazar 2, ağaçların faydasının yaz mevsimindeki yaprak gölgesiyle sınırlı olmadığını savunur."
              </p>
              <div className="text-[11px] text-emerald-900 font-medium pt-0.5 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Neden Doğru: İki yazarın tam çakıştığı mevsimsel ve biyolojik noktaya nokta atışı yapar.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Gold Rule Box */}
      <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs sm:text-sm font-semibold flex items-center space-x-2">
        <ArrowRightLeft className="w-4 h-4 text-indigo-600 shrink-0" />
        <span> Altın Kural: Soruyu okur okumak "Şu an HANGİ YAZARIN avukatıyım?" diye kendinize sorun. Şıklarda karşı tarafın fikrini gördüğünüz an üstünü çizin!</span>
      </div>

    </div>
  );
};
