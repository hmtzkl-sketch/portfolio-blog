import React from 'react';
import { turkishDefenseIndustry } from '../data/weapons';
import { 
  ShieldCheck, 
  Award, 
  Flame, 
  ExternalLink, 
  Crosshair,
  Factory,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function TurkishDefenseSection() {
  return (
    <section id="turk-savunma-sanayii" className="py-20 relative bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-600 uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 font-bold">
            <span>🇹🇷</span>
            <span>Milli Güç & Yerli Üretim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Türk Silah & Savunma Sanayii
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base font-mono leading-relaxed">
            Türkiye'nin hafif silahlardan ağır makineli tüfeklere, keskin nişancı platformlarından uzaktan komutalı silah kulelerine uzanan yerli ve milli savunma sanayii devleri.
          </p>
        </div>

        {/* Defense Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {turkishDefenseIndustry.map((company, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 hover:border-rose-400 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
            >
              <div>
                {/* Badge & Role */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 font-bold">
                    {company.badge}
                  </span>
                  <Factory className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
                </div>

                {/* Company Name */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors font-mono mb-1">
                  {company.company}
                </h3>
                <span className="text-xs font-mono text-amber-700 block mb-4 font-semibold">
                  {company.role}
                </span>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  {company.description}
                </p>
              </div>

              {/* Flagship Products */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-medium">
                  Öne Çıkan Milli Platformlar:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {company.flagships.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1 font-medium"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Export & Reliability Highlight Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose-50 via-white to-amber-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 font-mono">
                NATO ve Küresel Pazarda Kanıtlanmış Güvenilirlik
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-mono mt-1">
                Türk hafif silahları ve kule sistemleri; ABD, Avrupa, Afrika ve Asya'da 80'den fazla ülkenin silahlı kuvvetleri ve emniyet birimleri tarafından aktif olarak kullanılmaktadır.
              </p>
            </div>
          </div>

          <a
            href="#silah-arsivi"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-mono text-xs whitespace-nowrap transition-all hover:scale-105 shadow-sm"
          >
            Silahları İncele →
          </a>
        </div>

      </div>
    </section>
  );
}
