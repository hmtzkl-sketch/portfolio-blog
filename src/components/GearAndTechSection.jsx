import React from 'react';
import { tacticalGearReviews } from '../data/content';
import { 
  Crosshair, 
  ShieldCheck, 
  Target, 
  Layers, 
  Star, 
  ExternalLink,
  Flame,
  Zap
} from 'lucide-react';

export default function GearAndTechSection() {
  return (
    <section id="teknolojiler" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-700 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Saha Testleri & Donanım Değerlendirmeleri</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Silah Platformları & Taktik Aksesuarlar
            </h2>
            <p className="text-slate-600 mt-2 text-sm max-w-xl font-mono">
              En zorlu arazi koşullarında test edilen piyade tüfekleri, LPVO/Holografik optikler ve elektronik savunma teçhizatları.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Askeri Standart (Mil-Spec) İncelemeler</span>
          </div>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tacticalGearReviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm group"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-amber-600 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-500 block mb-1 font-medium">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-mono mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              {/* Technical specs line */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-[11px] font-mono text-slate-800 bg-slate-100 px-2.5 py-1.5 rounded-lg border border-slate-200 block truncate font-medium">
                  ⚡ {item.specs}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
