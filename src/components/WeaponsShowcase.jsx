import React, { useState } from 'react';
import { weaponCategories, weaponsList } from '../data/weapons';
import { 
  Crosshair, 
  Search, 
  ShieldCheck, 
  Maximize2,
  X,
  Scale,
  Zap,
  Target,
  Swords,
  Gauge,
  SlidersHorizontal,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';

export default function WeaponsShowcase() {
  const [selectedCat, setSelectedCat] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [activeWeaponId, setActiveWeaponId] = useState(weaponsList[0]?.id || 'mpt-76');
  const [selectedImageModal, setSelectedImageModal] = useState(null);
  const [mode, setMode] = useState('inspect'); // 'inspect' | 'compare'
  
  // Side-by-side comparison weapon state
  const [compareWeaponAId, setCompareWeaponAId] = useState('mpt-76');
  const [compareWeaponBId, setCompareWeaponBId] = useState('hk-416');

  const filteredWeapons = weaponsList.filter((w) => {
    const matchCat = selectedCat === "Tümü" || w.category === selectedCat;
    const matchSearch = 
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.caliber.toLowerCase().includes(search.toLowerCase()) ||
      w.usedBy.toLowerCase().includes(search.toLowerCase()) ||
      w.origin.toLowerCase().includes(search.toLowerCase()) ||
      w.manufacturer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const activeWeapon = weaponsList.find((w) => w.id === activeWeaponId) || weaponsList[0];
  const weaponA = weaponsList.find((w) => w.id === compareWeaponAId) || weaponsList[0];
  const weaponB = weaponsList.find((w) => w.id === compareWeaponBId) || weaponsList[3];

  return (
    <section id="silah-arsivi" className="py-24 relative overflow-hidden bg-[#0a0f1d] border-b border-slate-800/80">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-400 uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 font-bold">
              <Crosshair className="w-3.5 h-3.5 text-rose-400" />
              <span>İNTERAKTİF SİLAH & BALİSTİK LABORATUVARI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Piyade Silahları, Özel Birlikler & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
                Balistik Karşılaştırma Terminali
              </span>
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-2xl font-mono leading-relaxed">
              TSK ve küresel orduların kullandığı orijinal platformlar, fabrika görselleri, etkili menzil, atım hızı ve 1'e 1 karşılaştırma simülatörü.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs shadow-inner">
              <button
                onClick={() => setMode('inspect')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  mode === 'inspect'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>Silah İnceleme HUD</span>
              </button>
              <button
                onClick={() => setMode('compare')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  mode === 'compare'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Swords className="w-3.5 h-3.5 text-amber-400" />
                <span>1'e 1 Karşılaştırma Laboratuvarı</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- MODE 1: INTERACTIVE WEAPONS HUD INSPECTOR --- */}
        {mode === 'inspect' && (
          <div>
            {/* Search and Category Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {weaponCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border cursor-pointer ${
                      selectedCat === cat
                        ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 font-bold shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Quick Search input */}
              <div className="relative shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Silah adı veya kalibre ara..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-rose-500 text-xs font-mono text-white placeholder:text-slate-500 w-full sm:w-64 transition-all"
                />
              </div>
            </div>

            {/* Main Interactive Deck */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Selector List (4 Cols) */}
              <div className="lg:col-span-4 space-y-2 max-h-[640px] overflow-y-auto pr-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest px-2 pb-1 flex items-center justify-between">
                  <span>Envanter ({filteredWeapons.length})</span>
                  <span className="text-amber-400">SEÇMEK İÇİN TIKLAYIN</span>
                </div>

                {filteredWeapons.map((w) => {
                  const isSelected = activeWeapon.id === w.id;
                  return (
                    <div
                      key={w.id}
                      onClick={() => setActiveWeaponId(w.id)}
                      className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-3 relative group ${
                        isSelected
                          ? 'bg-[#151f38] border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                          : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="w-14 h-14 rounded-lg bg-slate-800/80 border border-slate-700/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                        <img 
                          src={w.image} 
                          alt={w.name} 
                          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full items-center justify-center text-rose-500 text-[10px] font-mono">
                          HUD
                        </div>
                      </div>

                      {/* Text details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[10px] font-mono text-slate-400 truncate">
                            {w.originFlag} {w.manufacturer}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {w.caliber}
                          </span>
                        </div>
                        <h4 className={`text-xs sm:text-sm font-bold font-mono truncate transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-200 group-hover:text-rose-300'
                        }`}>
                          {w.name}
                        </h4>
                        <span className="text-[11px] font-mono text-amber-400/90 truncate block mt-0.5">
                          {w.specs.range}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Big Inspection Deck (8 Cols) */}
              <div className="lg:col-span-8 bg-[#11182c]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                
                {/* Top Specs Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{activeWeapon.originFlag}</span>
                    <span className="text-slate-300 font-bold">{activeWeapon.origin}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{activeWeapon.manufacturer}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold">
                      {activeWeapon.category}
                    </span>
                    <button
                      onClick={() => setSelectedImageModal(activeWeapon)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
                      title="Görseli Büyüt"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Main Visual Display */}
                <div className="relative w-full h-64 sm:h-72 rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 flex items-center justify-center p-4 mb-6 overflow-hidden group">
                  <img
                    src={activeWeapon.image}
                    alt={activeWeapon.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-slate-500 font-mono text-xs">
                    <Crosshair className="w-12 h-12 text-rose-500 mb-2" />
                    <span>Şematik HUD Önizleme</span>
                  </div>

                  {/* Highlight Pill */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-900/90 text-amber-300 border border-amber-500/30 font-semibold shadow-lg backdrop-blur-md">
                      ★ {activeWeapon.highlight}
                    </span>
                  </div>
                </div>

                {/* Weapon Header Details */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {activeWeapon.name}
                  </h3>
                  <div className="mt-2 text-xs font-mono text-slate-300 flex items-center gap-2 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Kullanıcı Birlikler:</strong> {activeWeapon.usedBy}</span>
                  </div>
                </div>

                {/* Technical Gauges / Stat Bars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-5 rounded-xl bg-slate-900/70 border border-slate-800 font-mono text-xs">
                  {/* Gauge 1: Range */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-400">Etkili Menzil:</span>
                      <span className="text-rose-400 font-bold">{activeWeapon.specs.range}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                        style={{ width: `${Math.min(100, ((activeWeapon.metrics?.range || 500) / 1200) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Gauge 2: Fire Rate */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-400">Atım Hızı / Kapasite:</span>
                      <span className="text-amber-400 font-bold">{activeWeapon.specs.fireRate || activeWeapon.specs.capacity}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-amber-400 rounded-full"
                        style={{ width: `${Math.min(100, ((activeWeapon.metrics?.fireRate || 650) / 950) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Gauge 3: Penetration Score */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-400">Zırh Delicilik & Kinetik Enerji:</span>
                      <span className="text-cyan-400 font-bold">%{activeWeapon.metrics?.penetration || 80}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full"
                        style={{ width: `${activeWeapon.metrics?.penetration || 80}%` }}
                      />
                    </div>
                  </div>

                  {/* Gauge 4: Modularity */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-400">Taktik Modülerlik (Ray / Optik):</span>
                      <span className="text-emerald-400 font-bold">%{activeWeapon.metrics?.modularity || 90}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full"
                        style={{ width: `${activeWeapon.metrics?.modularity || 90}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {activeWeapon.description}
                </p>

                {/* Quick specs footer */}
                <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block uppercase">Kalibre</span>
                    <span className="text-white font-bold block truncate">{activeWeapon.caliber}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block uppercase">Ağırlık</span>
                    <span className="text-white font-bold block truncate">{activeWeapon.specs.weight}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block uppercase">Namlu</span>
                    <span className="text-white font-bold block truncate">{activeWeapon.specs.barrel}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block uppercase">Geri Tepme</span>
                    <span className="text-white font-bold block truncate">%{activeWeapon.metrics?.recoilControl || 85} Kontrol</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* --- MODE 2: INTERACTIVE SIDE-BY-SIDE COMPARISON LAB --- */}
        {mode === 'compare' && (
          <div className="bg-[#11182c]/95 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            <div className="text-center max-w-xl mx-auto mb-8 font-mono">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest inline-block mb-2">
                1'e 1 Karşılaştırma Simülatörü
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                İki Silah Platformunu Yan Yana Kıyaslayın
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Aşağıdaki menülerden karşılaştırmak istediğiniz iki silahı seçerek menzil, atım hızı ve balistik üstünlüklerini inceleyin.
              </p>
            </div>

            {/* Weapon Selectors Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Weapon A selector */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-rose-500/40">
                <label className="block text-xs font-mono text-rose-400 font-bold mb-2 uppercase">
                  1. SİLAH PLATFORMU (A):
                </label>
                <select
                  value={compareWeaponAId}
                  onChange={(e) => setCompareWeaponAId(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white font-mono text-xs focus:border-rose-500 focus:outline-none"
                >
                  {weaponsList.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.originFlag} {w.name} ({w.caliber})
                    </option>
                  ))}
                </select>
              </div>

              {/* Weapon B selector */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40">
                <label className="block text-xs font-mono text-cyan-400 font-bold mb-2 uppercase">
                  2. SİLAH PLATFORMU (B):
                </label>
                <select
                  value={compareWeaponBId}
                  onChange={(e) => setCompareWeaponBId(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white font-mono text-xs focus:border-cyan-500 focus:outline-none"
                >
                  {weaponsList.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.originFlag} {w.name} ({w.caliber})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Visual Head-to-Head Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Card A */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-rose-500/30 flex flex-col items-center text-center">
                <span className="text-xs font-mono text-rose-400 font-bold mb-1">{weaponA.originFlag} {weaponA.origin}</span>
                <h4 className="text-xl font-extrabold text-white font-mono">{weaponA.name}</h4>
                <span className="text-xs font-mono text-slate-400 mb-4">{weaponA.caliber}</span>
                <div className="w-full h-44 bg-slate-950/80 rounded-xl p-3 flex items-center justify-center border border-slate-800 mb-4">
                  <img src={weaponA.image} alt={weaponA.name} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-slate-300 text-xs font-sans leading-relaxed">{weaponA.highlight}</p>
              </div>

              {/* Card B */}
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-cyan-500/30 flex flex-col items-center text-center">
                <span className="text-xs font-mono text-cyan-400 font-bold mb-1">{weaponB.originFlag} {weaponB.origin}</span>
                <h4 className="text-xl font-extrabold text-white font-mono">{weaponB.name}</h4>
                <span className="text-xs font-mono text-slate-400 mb-4">{weaponB.caliber}</span>
                <div className="w-full h-44 bg-slate-950/80 rounded-xl p-3 flex items-center justify-center border border-slate-800 mb-4">
                  <img src={weaponB.image} alt={weaponB.name} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-slate-300 text-xs font-sans leading-relaxed">{weaponB.highlight}</p>
              </div>
            </div>

            {/* Comparison Metrics Duel Table */}
            <div className="rounded-xl overflow-hidden border border-slate-800 font-mono text-xs">
              <div className="grid grid-cols-3 bg-slate-900 p-3 font-bold text-center border-b border-slate-800 text-slate-300">
                <span className="text-rose-400">{weaponA.name}</span>
                <span className="text-amber-400">METRİK / ÖZELLİK</span>
                <span className="text-cyan-400">{weaponB.name}</span>
              </div>

              {[
                { label: "Kalibre", a: weaponA.caliber, b: weaponB.caliber },
                { label: "Etkili Menzil", a: weaponA.specs.range, b: weaponB.specs.range },
                { label: "Atım Hızı", a: weaponA.specs.fireRate || weaponA.specs.capacity, b: weaponB.specs.fireRate || weaponB.specs.capacity },
                { label: "Ağırlık", a: weaponA.specs.weight, b: weaponB.specs.weight },
                { label: "Namlu Boyu", a: weaponA.specs.barrel, b: weaponB.specs.barrel },
                { label: "Zırh Delicilik Puanı", a: `%${weaponA.metrics?.penetration || 80}`, b: `%${weaponB.metrics?.penetration || 80}` },
                { label: "Modülerlik Puanı", a: `%${weaponA.metrics?.modularity || 85}`, b: `%${weaponB.metrics?.modularity || 85}` },
                { label: "Kullanan Birlikler", a: weaponA.usedBy, b: weaponB.usedBy }
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-3 p-3 text-center border-b border-slate-800/60 ${idx % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-900/60'}`}>
                  <span className="text-white font-semibold truncate px-2">{row.a}</span>
                  <span className="text-slate-400 font-medium px-2">{row.label}</span>
                  <span className="text-white font-semibold truncate px-2">{row.b}</span>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* Fullscreen High-Res Image Modal */}
      {selectedImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImageModal(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#11182c] border border-slate-700 rounded-2xl p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImageModal(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-300 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="text-xl font-extrabold text-white font-mono mb-2">
              {selectedImageModal.name} ({selectedImageModal.caliber})
            </h4>
            <span className="text-xs font-mono text-amber-400 block mb-6">
              {selectedImageModal.manufacturer} • {selectedImageModal.origin}
            </span>
            <div className="w-full h-96 flex items-center justify-center p-4 bg-slate-950/80 rounded-xl border border-slate-800">
              <img
                src={selectedImageModal.image}
                alt={selectedImageModal.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
              />
            </div>
            <p className="mt-4 text-xs font-mono text-slate-400">
              {selectedImageModal.highlight}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
