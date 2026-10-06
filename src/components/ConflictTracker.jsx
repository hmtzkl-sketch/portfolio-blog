import React, { useState } from 'react';
import { globalConflicts } from '../data/content';
import { 
  Globe2, 
  AlertTriangle, 
  ShieldAlert, 
  Crosshair, 
  ChevronDown, 
  ChevronUp, 
  Radio, 
  Cpu, 
  Flame,
  Calendar,
  Clock,
  MapPin,
  Users2,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function ConflictTracker() {
  const [selectedRegion, setSelectedRegion] = useState('Tümü');
  const [expandedId, setExpandedId] = useState(globalConflicts[0]?.id || null);

  const regions = ['Tümü', 'Doğu Avrupa', 'Orta Doğu', 'Afrika', 'Asya & Pasifik'];

  const filteredConflicts = selectedRegion === 'Tümü'
    ? globalConflicts
    : globalConflicts.filter(item => {
        if (selectedRegion === 'Afrika') {
          return item.region.includes('Afrika');
        }
        if (selectedRegion === 'Orta Doğu') {
          return item.region.includes('Orta Doğu') || item.region.includes('Kızıldeniz');
        }
        if (selectedRegion === 'Asya & Pasifik') {
          return item.region.includes('Asya') || item.region.includes('Pasifik') || item.region.includes('Tayvan') || item.region.includes('Kore');
        }
        return item.region.includes(selectedRegion);
      });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getBadgeStyle = (level) => {
    if (level.includes('AKTİF') || level.includes('ŞİDDETLİ') || level.includes('AĞIR')) {
      return 'bg-rose-500/15 text-rose-400 border-rose-500/40 shadow-[0_0_12px_rgba(244,63,94,0.25)]';
    }
    if (level.includes('DENİZ') || level.includes('BÖLGESEL')) {
      return 'bg-amber-500/15 text-amber-400 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]';
    }
    return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]';
  };

  return (
    <section id="kuresel-olaylar" className="py-20 relative bg-white/90 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-600 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 font-bold">
              <Radio className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>Sıcak Bölgeler & Canlı Tehdit Radarı</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Savaş Devam Eden Bölgeler & Sıcak Çatışma Alanları
            </h2>
            <p className="text-slate-600 mt-2 text-sm max-w-2xl font-mono">
              Dünyada şu anda aktif silahlı çatışmaların sürdüğü coğrafyalar, savaşların başlangıç tarihleri, devam süreleri ve cephe hatlarındaki güncel taktik durumlar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-600">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              Aktif Konvansiyonel Cephe
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Asimetrik & Deniz Krizleri
            </span>
          </div>
        </div>

        {/* Region Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {regions.map((region) => {
            const count = region === 'Tümü' 
              ? globalConflicts.length 
              : globalConflicts.filter(c => {
                  if (region === 'Afrika') return c.region.includes('Afrika');
                  if (region === 'Orta Doğu') return c.region.includes('Orta Doğu') || c.region.includes('Kızıldeniz');
                  return c.region.includes(region);
                }).length;

            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wide whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  selectedRegion === region
                    ? 'bg-rose-50 border-rose-400 text-rose-600 font-bold shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{region}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] text-slate-600 font-bold border border-slate-200">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Conflicts List */}
        <div className="space-y-4">
          {filteredConflicts.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'border-rose-400 shadow-lg bg-white' 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-4 select-none"
                >
                  <div className="flex-1">
                    {/* Top Badges: Region, Threat, Start Date, Duration */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3 font-mono text-xs">
                      <span className="text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1.5 font-medium">
                        <Globe2 className="w-3.5 h-3.5 text-cyan-600" />
                        {item.region}
                      </span>
                      
                      <span className={`px-2.5 py-1 rounded-md border text-[11px] font-semibold ${getBadgeStyle(item.threatLevel)}`}>
                        {item.threatLevel}
                      </span>

                      {/* Start Date */}
                      <span className="text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md flex items-center gap-1.5 text-[11px] font-medium">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>Başlangıç: {item.startDate}</span>
                      </span>

                      {/* Duration */}
                      <span className="text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-md flex items-center gap-1.5 text-[11px] font-medium">
                        <Clock className="w-3.5 h-3.5 text-rose-500" />
                        <span>Süre: {item.duration}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Location & Parties preview */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-mono text-slate-600">
                      <span className="flex items-center gap-1.5 text-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>Konum: {item.location}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Users2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Taraflar: {item.parties}</span>
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-600 text-xs sm:text-sm mt-3 font-sans leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Expand / Collapse Button */}
                  <div className="flex items-center gap-3 self-end md:self-start shrink-0 pt-1">
                    <button
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                        isExpanded
                          ? 'bg-rose-50 text-rose-600 border border-rose-300 shadow-sm font-semibold'
                          : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      <span>{isExpanded ? 'Raporu Daralt' : 'Şu Anki Durum & Taktik Rapor'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Tactical Intel */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-3 border-t border-slate-200 bg-slate-50/70 animate-in fade-in">
                    
                    {/* Şu Anki Durum Box */}
                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-rose-200 mb-5 relative overflow-hidden shadow-sm">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rose-500 via-amber-500 to-rose-600" />
                      
                      <div className="flex items-center justify-between mb-2.5">
                        <h4 className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider flex items-center gap-2">
                          <Flame className="w-4 h-4 text-rose-500 animate-pulse" />
                          <span>Şu Anki Durum (Güncel Cephe & Taktik Analiz)</span>
                        </h4>
                        <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Güncel Kaynak
                        </span>
                      </div>

                      <p className="text-slate-800 text-sm leading-relaxed font-sans pl-2">
                        {item.currentSituation}
                      </p>
                    </div>

                    {/* Key technologies in use */}
                    <div>
                      <span className="text-[11px] font-mono text-slate-600 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5 font-medium">
                        <Cpu className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Bölgede Aktif Kullanılan Askeri Teknolojiler ve Taktikler:</span>
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.keyTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-xs flex items-center gap-2 shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
