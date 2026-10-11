import React, { useState } from 'react';
import { globalConflicts, lastRadarUpdate } from '../data/content';
import { 
  Globe2, 
  AlertTriangle, 
  Radio, 
  Cpu, 
  Flame,
  Calendar,
  Clock,
  MapPin,
  Users2,
  ShieldAlert,
  Compass,
  Crosshair,
  Layers,
  Share2,
  Check,
  ChevronRight,
  Eye,
  Activity,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';
import InteractiveConflictMap from './InteractiveConflictMap';

export default function ConflictTracker() {
  const [selectedRegion, setSelectedRegion] = useState('Tümü');
  const [activeConflictId, setActiveConflictId] = useState(globalConflicts[0]?.id || '');
  const [activeTab, setActiveTab] = useState('durum'); // 'durum' | 'teknoloji' | 'osint' | 'taraflar'
  const [viewMode, setViewMode] = useState('console'); // 'console' (War Room) | 'list' (Compact Feed)
  const [copiedId, setCopiedId] = useState(null);

  const regions = ['Tümü', 'Doğu Avrupa', 'Orta Doğu', 'Afrika', 'Asya & Pasifik'];

  const filteredConflicts = selectedRegion === 'Tümü'
    ? globalConflicts
    : globalConflicts.filter(item => {
        if (selectedRegion === 'Afrika') return item.region.includes('Afrika');
        if (selectedRegion === 'Orta Doğu') return item.region.includes('Orta Doğu') || item.region.includes('Kızıldeniz');
        if (selectedRegion === 'Asya & Pasifik') return item.region.includes('Asya') || item.region.includes('Pasifik') || item.region.includes('Tayvan') || item.region.includes('Kore');
        return item.region.includes(selectedRegion);
      });

  const activeConflict = globalConflicts.find(c => c.id === activeConflictId) || filteredConflicts[0] || globalConflicts[0];

  const handleCopyIntel = (item) => {
    const text = `[OSINT BRİFİNGİ] ${item.title} - Konum: ${item.location} (${item.coordinates}) | Durum: ${item.frontlineStatus} | Rapor: https://ahmetozkul.com.tr/#kuresel-olaylar`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getThreatColor = (intensity) => {
    if (intensity >= 90) return 'text-rose-400 bg-rose-500/10 border-rose-500/40';
    if (intensity >= 85) return 'text-amber-400 bg-amber-500/10 border-amber-500/40';
    return 'text-sky-400 bg-sky-500/10 border-sky-500/40';
  };

  return (
    <section id="kuresel-olaylar" className="py-24 relative overflow-hidden bg-[#0a0f1d] border-y border-slate-800/80">
      {/* Background Reticle & Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-400 uppercase tracking-widest px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 font-bold">
                <Radio className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>CANLI ASKERİ İSTİHBARAT & SICAK KRİZ KOMUTA MERKEZİ</span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                OTOMATİK GÜNCELLEME: {lastRadarUpdate}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Sıcak Çatışma Alanları & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
                Küresel Harp Radarı
              </span>
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-2xl font-mono leading-relaxed">
              Dünyada aktif silahlı çatışmaların sürdüğü coğrafyalar, uydu koordinatları, taktik cephe durumları ve sahada kullanılan asimetrik harp teknolojileri.
            </p>
          </div>

          {/* View Mode & Live Telemetry Stats */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs shadow-inner">
              <button
                onClick={() => setViewMode('console')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'console'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Crosshair className="w-3.5 h-3.5" />
                <span>Taktik Komuta Ekranı</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Liste Görünümü</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Vector World Map with Pulsing Hotspot Beacons */}
        <InteractiveConflictMap 
          activeConflictId={activeConflict.id}
          onSelectConflict={(id) => {
            setActiveConflictId(id);
            // Optionally update region if outside current filter
            const conflict = globalConflicts.find(c => c.id === id);
            if (conflict && selectedRegion !== 'Tümü') {
              if (selectedRegion === 'Afrika' && !conflict.region.includes('Afrika')) setSelectedRegion('Tümü');
              if (selectedRegion === 'Orta Doğu' && !conflict.region.includes('Orta Doğu') && !conflict.region.includes('Kızıldeniz')) setSelectedRegion('Tümü');
              if (selectedRegion === 'Doğu Avrupa' && !conflict.region.includes('Avrupa')) setSelectedRegion('Tümü');
              if (selectedRegion === 'Asya & Pasifik' && !conflict.region.includes('Asya') && !conflict.region.includes('Pasifik')) setSelectedRegion('Tümü');
            }
          }}
        />

        {/* Region Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {regions.map((region) => {
            const count = region === 'Tümü' 
              ? globalConflicts.length 
              : globalConflicts.filter(c => {
                  if (region === 'Afrika') return c.region.includes('Afrika');
                  if (region === 'Orta Doğu') return c.region.includes('Orta Doğu') || c.region.includes('Kızıldeniz');
                  if (region === 'Asya & Pasifik') return c.region.includes('Asya') || c.region.includes('Pasifik') || c.region.includes('Tayvan') || c.region.includes('Kore');
                  return c.region.includes(region);
                }).length;

            return (
              <button
                key={region}
                onClick={() => {
                  setSelectedRegion(region);
                  const firstMatch = globalConflicts.find(c => {
                    if (region === 'Tümü') return true;
                    if (region === 'Afrika') return c.region.includes('Afrika');
                    if (region === 'Orta Doğu') return c.region.includes('Orta Doğu') || c.region.includes('Kızıldeniz');
                    if (region === 'Asya & Pasifik') return c.region.includes('Asya') || c.region.includes('Pasifik') || c.region.includes('Tayvan') || c.region.includes('Kore');
                    return c.region.includes(region);
                  });
                  if (firstMatch) setActiveConflictId(firstMatch.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wide whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedRegion === region
                    ? 'bg-rose-500/15 border-rose-500/50 text-rose-300 font-bold shadow-[0_0_15px_rgba(244,63,94,0.25)]'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-rose-400" />
                <span>{region}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-slate-300 font-semibold border border-slate-700">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- VIEW MODE 1: INTERACTIVE COMMAND CONSOLE (WAR ROOM) --- */}
        {viewMode === 'console' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Conflict Hotspots Selector Panel (5 Cols) */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest px-2 pb-1 flex items-center justify-between">
                <span>Aktif Sıcak Noktalar ({filteredConflicts.length})</span>
                <span className="text-rose-400 flex items-center gap-1 font-bold">
                  <Activity className="w-3 h-3 animate-pulse" /> CANLI VERİ
                </span>
              </div>

              {filteredConflicts.map((item) => {
                const isSelected = activeConflict.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveConflictId(item.id)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group ${
                      isSelected
                        ? 'bg-[#151f38] border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                    }`}
                  >
                    {/* Active Reticle Indicator Strip */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rose-500 via-amber-400 to-rose-600" />
                    )}

                    <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px]">
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                        <span className="truncate max-w-[140px]">{item.region}</span>
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${getThreatColor(item.intensity)}`}>
                          %{item.intensity} TEHDİT
                        </span>
                      </div>
                    </div>

                    <h4 className={`text-sm sm:text-base font-bold font-mono transition-colors leading-snug ${
                      isSelected ? 'text-white' : 'text-slate-200 group-hover:text-rose-300'
                    }`}>
                      {item.title}
                    </h4>

                    <div className="mt-2 text-xs font-mono text-amber-400/90 truncate flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{item.frontlineStatus}</span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{item.duration}</span>
                      <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                        İstihbarat Ekranı <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Tactical Situation Screen (7 Cols) */}
            <div className="lg:col-span-7 bg-[#11182c]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Tactical Watermark HUD */}
              <div className="absolute top-4 right-4 flex items-center gap-3 font-mono text-[10px] text-slate-400 pointer-events-none">
                <span>COORD: {activeConflict.coordinates}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Header Info */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    {activeConflict.threatLevel}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Başlangıç: {activeConflict.startDate}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-400" />
                    {activeConflict.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono leading-tight">
                  {activeConflict.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 font-mono flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span><strong>Operasyon Sahası:</strong> {activeConflict.location}</span>
                </p>
              </div>

              {/* Threat Intensity Metric Bar */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className="text-slate-300 font-bold flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-rose-500 animate-pulse" />
                    Çatışma Şiddeti & Angajman Yoğunluk Endeksi
                  </span>
                  <span className="text-rose-400 font-extrabold">%{activeConflict.intensity} KRİTİK</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-rose-600 rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(244,63,94,0.6)]"
                    style={{ width: `${activeConflict.intensity}%` }}
                  />
                </div>
              </div>

              {/* Interactive Tactical Tabs */}
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto scrollbar-none font-mono text-xs">
                {[
                  { id: 'durum', label: '1. Güncel Cephe Durumu', icon: Flame },
                  { id: 'teknoloji', label: '2. Sahadaki Harp Teknolojileri', icon: Cpu },
                  { id: 'osint', label: '3. OSINT Uydu Analizi', icon: Eye },
                  { id: 'taraflar', label: '4. Muharip Taraflar', icon: Users2 }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Contents */}
              <div className="min-h-[220px]">
                {activeTab === 'durum' && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                        ⚡ Stratejik Özet:
                      </span>
                      <p className="text-slate-300 text-sm leading-relaxed font-sans">
                        {activeConflict.summary}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30">
                      <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                        Ekim 2026 Taktik Durum & Sahadaki Son Gelişmeler:
                      </span>
                      <p className="text-slate-200 text-sm leading-relaxed font-sans">
                        {activeConflict.currentSituation}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'teknoloji' && (
                  <div className="space-y-3 animate-in fade-in">
                    <span className="text-xs font-mono text-slate-400 block mb-2">
                      Bu çatışma sahasında aktif kullanılan yeni nesil silah, savunma ve elektronik harp donanımları:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeConflict.keyTech.map((tech, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 text-xs font-mono text-slate-200 hover:border-cyan-500/50 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'osint' && (
                  <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                        <Eye className="w-4 h-4" /> AÇIK KAYNAK İSTİHBARAT (OSINT) RAPORU
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                        DOĞRULANMIŞ VERİ
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans">
                      {activeConflict.osintNote || activeConflict.currentSituation}
                    </p>
                    <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                      <span>Uydu Kaynakları: Sentinel-2, Maxar WorldView, FIRMS Yangın Radarları</span>
                    </div>
                  </div>
                )}

                {activeTab === 'taraflar' && (
                  <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-4 animate-in fade-in">
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Muharip Güçler & Koalisyonlar:
                      </span>
                      <p className="text-white text-sm font-mono font-bold leading-relaxed">
                        {activeConflict.parties}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Bölge: {activeConflict.region}</span>
                      <span>Koordinatlar: {activeConflict.coordinates}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions Bar */}
              <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => handleCopyIntel(activeConflict)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-mono text-xs transition-all cursor-pointer"
                >
                  {copiedId === activeConflict.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>İstihbarat Notu Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-rose-400" />
                      <span>Brifingi Kopyala / Paylaş</span>
                    </>
                  )}
                </button>

                <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Son İstihbarat Güncellemesi: Ekim 2026</span>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* --- VIEW MODE 2: COMPACT FEED (LIST) --- */
          <div className="space-y-4">
            {filteredConflicts.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#11182c]/90 border border-slate-800 hover:border-slate-700 transition-all text-left shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 font-mono text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item.region}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded border text-[11px] font-bold ${getThreatColor(item.intensity)}`}>
                      %{item.intensity} TEHDİT
                    </span>
                    <span className="text-slate-400">Başlangıç: {item.startDate}</span>
                  </div>

                  <span className="text-cyan-400 font-mono text-[11px]">
                    {item.coordinates}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-mono mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm font-sans mb-4 leading-relaxed">
                  {item.currentSituation}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {item.keyTech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-slate-800/70 border border-slate-700 text-slate-300 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
