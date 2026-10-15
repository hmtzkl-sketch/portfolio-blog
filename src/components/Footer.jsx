import React from 'react';
import { authorProfile } from '../data/content';
import { Crosshair, ArrowUp, ShieldCheck, Scale } from 'lucide-react';
import { TwitterIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ onLegalClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800 relative font-mono text-xs text-slate-400">
      
      {/* Tekil Hukuki Mevzuat ve Güvence Bildirimi Bandı */}
      <div className="bg-[#080d1a] border-b border-slate-800/90 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-start sm:items-center gap-2.5 text-slate-300">
            <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-white uppercase tracking-wider font-bold">HUKUKİ MEVZUAT VE GÜVENCE BİLDİRİMİ:</strong> Sitemiz{' '}
              <span className="text-amber-300 font-semibold">657 Sayılı DMK</span> (m. 15, 28, 31),{' '}
              <span className="text-emerald-400 font-semibold">5237 Sayılı TCK</span> (m. 326-339) ve{' '}
              <span className="text-cyan-400 font-semibold">6136 Sayılı Kanun</span> hükümlerine %100 uyumludur. Hiçbir ticari gelir, silah satışı veya devlet sırrı niteliğinde bilgi içermez.
            </span>
          </div>

          <button
            onClick={onLegalClick}
            className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-bold shrink-0 transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Resmi Yasal Metni & Mevzuat Raporunu Aç</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <Crosshair className="w-4 h-4" />
          </div>
          <div>
            <span className="text-white font-bold tracking-wider">{authorProfile.name}</span>
            <span className="text-slate-500 ml-2">© {new Date().getFullYear()}</span>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Açık Kaynak (OSINT) Savunma Teknolojileri & Bilimsel İnceleme Portalı.
            </p>
          </div>
        </div>

        {/* Center / Security statement */}
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Halka Açık Veriler (Unclassified) • Kâr Amacı Gütmez</span>
        </div>

        {/* Right back to top & socials */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={authorProfile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 transition-colors shadow-sm"
              title="X / Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={authorProfile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 transition-colors shadow-sm"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-400 text-slate-300 hover:text-white transition-all text-xs cursor-pointer shadow-sm"
            title="Yukarı Çık"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Yukarı</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
