import React, { useState } from 'react';
import { weaponCategories, weaponsList } from '../data/weapons';
import { 
  Crosshair, 
  Search, 
  ShieldCheck, 
  Flame, 
  Zap, 
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function WeaponsShowcase() {
  const [selectedCat, setSelectedCat] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [selectedImageModal, setSelectedImageModal] = useState(null);

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

  return (
    <section id="silah-arsivi" className="py-20 relative bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-600 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Orijinal Silah ve Sistem Envanteri</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Piyade Tüfekleri, Özel Birlik Silahları & Tabancalar
            </h2>
            <p className="text-slate-600 mt-2 text-sm max-w-2xl font-mono">
              Türk Silahlı Kuvvetleri, Emniyet Teşkilatı ve dünya ordularının kullandığı orijinal platformlar, fabrika görselleri ve resmi teknik balistik verileri.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Silah adı, kalibre veya üretici ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-rose-500 text-xs font-mono text-slate-800 placeholder:text-slate-400 w-64 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {weaponCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border cursor-pointer ${
                selectedCat === cat
                  ? 'bg-rose-50 border-rose-400 text-rose-600 font-bold shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Weapons List Grid */}
        {filteredWeapons.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 font-mono text-sm text-slate-600 shadow-sm">
            Aradığınız kriterde silah bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWeapons.map((weapon) => (
              <div
                key={weapon.id}
                className="bg-white border border-slate-200 hover:border-rose-400 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Weapon Visual Container (Full weapon display with padding & object-contain) */}
                  <div className="relative h-60 sm:h-72 w-full bg-gradient-to-b from-slate-50 to-slate-100 p-4 flex items-center justify-center border-b border-slate-200 overflow-hidden">
                    <img
                      src={weapon.image}
                      alt={weapon.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/weapons/mpt-76.png';
                      }}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Top Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                        <span>{weapon.originFlag}</span>
                        <span>{weapon.origin}</span>
                      </span>

                      <span className="px-3 py-1 rounded-lg bg-rose-50 backdrop-blur-md border border-rose-200 text-rose-600 font-mono text-xs font-semibold">
                        {weapon.caliber}
                      </span>
                    </div>

                    {/* Fullscreen view trigger */}
                    <button
                      onClick={() => setSelectedImageModal(weapon)}
                      className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/80 hover:bg-rose-500 hover:text-white text-slate-700 transition-colors cursor-pointer border border-slate-200 shadow-sm"
                      title="Büyük Görseli İncele"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Bottom Highlight and Copyright badge */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                        ★ {weapon.highlight}
                      </span>
                      <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white/80 text-slate-500 border border-slate-200" title="5846 SK. Telifsiz Açık Kaynak / Kamu Malı Görsel">
                        Kamu Malı / CC
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                        {weapon.manufacturer} • {weapon.subCategory}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors font-mono">
                      {weapon.name}
                    </h3>

                    {/* Used by */}
                    <div className="mt-2 text-xs font-mono text-slate-700 flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate"><strong className="text-slate-500 font-normal">Kullanan:</strong> {weapon.usedBy}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed font-sans">
                      {weapon.description}
                    </p>
                  </div>
                </div>

                {/* Technical Specifications Grid Footer */}
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-4 border-t border-slate-200 font-mono text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Etkili Menzil</span>
                      <span className="text-slate-900 font-bold text-[11px] truncate block mt-0.5">{weapon.specs.range}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">
                        {weapon.specs.fireRate ? 'Atım Hızı' : 'Kapasite'}
                      </span>
                      <span className="text-slate-900 font-bold text-[11px] truncate block mt-0.5">
                        {weapon.specs.fireRate || weapon.specs.capacity || weapon.specs.accuracy}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Ağırlık</span>
                      <span className="text-slate-900 font-bold text-[11px] truncate block mt-0.5">{weapon.specs.weight}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Namlu</span>
                      <span className="text-slate-900 font-bold text-[11px] truncate block mt-0.5">{weapon.specs.barrel}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal for Large High-Res Weapon View */}
      {selectedImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImageModal(null)}
        >
          <div
            className="w-full max-w-4xl bg-[#0b0d16] border border-rose-500/50 rounded-2xl overflow-hidden p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div>
                <h3 className="font-mono font-bold text-white text-lg">{selectedImageModal.name}</h3>
                <p className="text-xs font-mono text-slate-400">{selectedImageModal.manufacturer} • {selectedImageModal.caliber}</p>
              </div>
              <button
                onClick={() => setSelectedImageModal(null)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs cursor-pointer"
              >
                Kapat
              </button>
            </div>

            <div className="h-[55vh] flex items-center justify-center bg-black/50 rounded-xl p-4">
              <img
                src={selectedImageModal.image}
                alt={selectedImageModal.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
