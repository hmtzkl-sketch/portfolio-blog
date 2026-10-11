import React from 'react';
import { authorProfile, breakingIntel } from '../data/content';
import { 
  ArrowRight, 
  Crosshair, 
  Radio, 
  BookOpen, 
  Globe2, 
  ShieldCheck, 
  Flame, 
  Zap, 
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ onExploreClick, onConflictsClick, onWeaponsClick, onSelectArticleById }) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Tactical Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-rose-600/10 via-amber-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-rose-500/5 blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Interactive Breaking Intel Ticker (High CTR Click Target) */}
        <div className="mb-6 rounded-xl bg-[#121a2e]/95 border border-rose-500/30 p-2 sm:p-2.5 shadow-xl shadow-black/30 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/15 border border-rose-500/40 text-[11px] font-mono text-rose-300 font-bold tracking-wider shrink-0 w-fit">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>SON DAKİKA İSTİHBARAT</span>
            </div>
            
            <div className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-2 text-xs font-mono py-0.5">
              {breakingIntel.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.target === 'article' && onSelectArticleById) {
                      onSelectArticleById(item.id);
                    } else {
                      onConflictsClick();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-rose-950/40 border border-slate-700/80 hover:border-rose-400 text-slate-300 hover:text-white transition-all whitespace-nowrap cursor-pointer text-left group"
                  title="Detaylı Analizi Oku"
                >
                  <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-semibold border border-amber-500/30">
                    {item.badge}
                  </span>
                  <span className="group-hover:underline underline-offset-2">
                    {item.title}
                  </span>
                  <ArrowRight className="w-3 h-3 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1e293b]/90 border border-slate-700 text-xs font-mono text-rose-300 shadow-lg shadow-black/20">
            <Radio className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span className="text-slate-400">Canlı Durum:</span>
            <span className="font-semibold text-slate-100">{authorProfile.status}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Askeri Silahlar, <br />
              <span className="bg-gradient-to-r from-rose-500 via-amber-400 to-rose-400 bg-clip-text text-transparent">
                Taktik Eğitimler
              </span> <br />
              & Milli Savunma Sistemleri.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              Merhaba, ben <span className="text-rose-400 font-bold">{authorProfile.name}</span>. 
              {authorProfile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button
                onClick={onWeaponsClick}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-mono text-sm font-bold shadow-lg shadow-rose-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Crosshair className="w-4 h-4" />
                Silah Envanterini İncele
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onConflictsClick}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1e293b] hover:bg-[#28354b] text-white hover:text-rose-300 border border-slate-700 hover:border-rose-400 font-mono text-sm font-semibold transition-all cursor-pointer shadow-sm hover:scale-105"
              >
                <Globe2 className="w-4 h-4 text-rose-400" />
                Sıcak Bölgeler Radarı
              </button>

              <button
                onClick={onExploreClick}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 font-mono text-sm transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                Eğitim & Makaleler
              </button>
            </div>

            {/* Trending Quick-Filter Pills (Boosts Clicks / Engagement) */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2 justify-center md:justify-start font-mono text-xs">
              <span className="text-slate-400 flex items-center gap-1 font-semibold text-[11px] mr-1">
                <Flame className="w-3.5 h-3.5 text-rose-500" />
                ÖNE ÇIKANLAR:
              </span>
              {[
                { label: "🎯 MPT-76 & KCR-556", action: onWeaponsClick },
                { label: "🚀 SİPER Ürün-2", action: () => onSelectArticleById && onSelectArticleById('siper-urun-2-balistik-onleme-testi') },
                { label: "✈️ KAAN MMU & AESA", action: () => onSelectArticleById && onSelectArticleById('kaan-5th-gen-fighter-supersonic-avionics') },
                { label: "🦅 KIZILELMA İt Dalaşı", action: () => onSelectArticleById && onSelectArticleById('kizilelma-insansiz-savas-ucagi-it-dalasi') },
                { label: "🛡️ Çelik Kubbe", action: () => onSelectArticleById && onSelectArticleById('celik-kubbe-integrated-air-defense') },
                { label: "📍 Donbas & Pokrovsk", action: onConflictsClick }
              ].map((pill, idx) => (
                <button
                  key={idx}
                  onClick={pill.action}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-rose-950/60 border border-slate-700/90 hover:border-rose-400/80 text-slate-300 hover:text-white transition-all cursor-pointer text-[11px]"
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Social Channels */}
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-center md:justify-start gap-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">
                Doğrulanmış Kanallar:
              </span>
              {[
                { name: 'X / Twitter', icon: TwitterIcon, href: authorProfile.socials.twitter, hover: 'hover:text-rose-400 hover:border-rose-400' },
                { name: 'LinkedIn', icon: LinkedinIcon, href: authorProfile.socials.linkedin, hover: 'hover:text-amber-400 hover:border-amber-400' },
                { name: 'GitHub', icon: GithubIcon, href: authorProfile.socials.github, hover: 'hover:text-white hover:border-slate-300' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 shadow-sm transition-all ${item.hover}`}
                    title={item.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Tactical Insignia (No personal photo as requested!) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-amber-500/20 rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition duration-500" />
              
              <div className="relative bg-[#1e293b]/95 border border-slate-700/90 rounded-2xl p-6 shadow-2xl shadow-black/50">
                {/* Telemetry Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-700 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-rose-400 font-bold">TACTICAL INTEL</span>
                  </div>
                  <span className="text-amber-400 font-semibold">CALLSIGN: OZKUL-01</span>
                </div>

                {/* Tactical Emblem / Insignia (No portrait photo) */}
                <div className="relative w-32 h-32 mx-auto mb-5 rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#1e293b] border-2 border-rose-500/50 flex flex-col items-center justify-center shadow-lg group-hover:border-rose-400 transition-colors">
                  <div className="w-16 h-16 rounded-full border border-rose-400/40 flex items-center justify-center bg-rose-500/10">
                    <Crosshair className="w-9 h-9 text-rose-400 group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold tracking-widest mt-1">
                    OZKUL-LAB
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-extrabold text-white font-mono tracking-wider">{authorProfile.name}</h3>
                  <p className="text-xs text-rose-400 font-mono mt-1 font-semibold">{authorProfile.title}</p>
                  <p className="text-xs text-slate-300 mt-2 font-mono flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Savunma Sanayii & Askeri Analiz</span>
                  </p>
                </div>

                {/* Tactical Capabilities */}
                <div className="mt-5 pt-4 border-t border-slate-700 flex flex-wrap gap-1.5 justify-center font-mono text-[11px]">
                  {["Piyade Tüfekleri", "Taktik Atış", "Milli Sanayi", "Optikler", "Anti-Drone"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid - High Contrast Tactical Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {authorProfile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#121a2e]/90 border border-slate-700/80 hover:border-rose-500/60 hover:bg-[#18233e] rounded-xl p-5 transition-all hover:-translate-y-1 group shadow-lg shadow-black/20"
            >
              <div className="font-mono text-3xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-slate-300 mt-1 font-medium font-mono">
                {stat.label}
              </div>
              <div className="mt-2 text-[11px] font-mono text-amber-400 font-semibold">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
