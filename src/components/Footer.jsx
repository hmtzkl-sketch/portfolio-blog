import React from 'react';
import { authorProfile } from '../data/content';
import { Crosshair, ArrowUp, ShieldCheck } from 'lucide-react';
import { TwitterIcon, LinkedinIcon } from './SocialIcons';
import LegalNotice from './LegalNotice';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 relative font-mono text-xs text-slate-600">
      
      {/* Legal & 657 / National Security Disclaimer Banner */}
      <LegalNotice />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
            <Crosshair className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-900 font-bold tracking-wider">{authorProfile.name}</span>
            <span className="text-slate-500 ml-2">© {new Date().getFullYear()}</span>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Açık Kaynak (OSINT) Savunma Teknolojileri & Bilimsel İnceleme Blogu.
            </p>
          </div>
        </div>

        {/* Center / Security statement */}
        <div className="flex items-center gap-1.5 text-slate-700 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Halka Açık Veriler (Unclassified) • Kâr Amacı Gütmez</span>
        </div>

        {/* Right back to top & socials */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={authorProfile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-rose-600 transition-colors shadow-sm"
              title="X / Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={authorProfile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-amber-600 transition-colors shadow-sm"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-rose-400 text-slate-700 hover:text-rose-600 transition-all text-xs cursor-pointer shadow-sm"
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
