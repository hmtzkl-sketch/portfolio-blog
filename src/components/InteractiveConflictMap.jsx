import React, { useState } from 'react';
import { 
  Globe2, 
  Crosshair, 
  Radio, 
  Flame, 
  MapPin, 
  Maximize2, 
  Info, 
  ChevronRight,
  ShieldAlert,
  Compass,
  Activity
} from 'lucide-react';

export const mapHotspots = [
  {
    id: "rusya-ukrayna-savasi",
    name: "Donbas, Pokrovsk & Kursk",
    region: "Doğu Avrupa",
    x: 580,
    y: 125,
    threat: "%98 KRİTİK",
    color: "#f43f5e",
    status: "Pokrovsk Kentsel Kuşatması & Fiber-Optik FPV Dron Harbi"
  },
  {
    id: "iran-israil-balistik-fuze-ve-bolgesel-tirmantis",
    name: "İran - İsrail Füze Düellosu",
    region: "Orta Doğu / Basra",
    x: 622,
    y: 185,
    threat: "%95 BALİSTİK",
    color: "#f43f5e",
    status: "THAAD / Arrow-3 Kalkanı vs. Fettah Hipersonik Füzeler"
  },
  {
    id: "israil-gazze-lubnan-catismasi",
    name: "Güney Lübnan (Litani) & Gazze",
    region: "Orta Doğu",
    x: 588,
    y: 180,
    threat: "%92 KARA HARBİ",
    color: "#f43f5e",
    status: "Litani Tampon Bölge Harekâtı & Tanksavar Pusuları"
  },
  {
    id: "suriye-ic-savasi-bolgesel-dinamikler",
    name: "Suriye & İdlib Hattı",
    region: "Orta Doğu",
    x: 598,
    y: 166,
    threat: "%84 BÖLGESEL",
    color: "#f59e0b",
    status: "Nokta SİHA Harekâtları & Topçu Düelloları"
  },
  {
    id: "kizildeniz-yemen-deniz-krizi",
    name: "Kızıldeniz & Babülmendep",
    region: "Kızıldeniz",
    x: 605,
    y: 236,
    threat: "%88 DENİZ ABLUKASI",
    color: "#f59e0b",
    status: "Husiler Gemisavar Balistik Füze (ASBM) & Kamikaze Botlar"
  },
  {
    id: "sudan-ic-savasi",
    name: "Sudan & El Faşir Kuşatması",
    region: "Afrika",
    x: 565,
    y: 238,
    threat: "%90 İÇ SAVAŞ",
    color: "#f43f5e",
    status: "El Faşir Kuşatması & Modifiye Dron Saldırıları"
  },
  {
    id: "myanmar-ic-savasi",
    name: "Myanmar & Shan Eyaleti",
    region: "Güneydoğu Asya",
    x: 748,
    y: 212,
    threat: "%85 DİRENİŞ",
    color: "#f59e0b",
    status: "Cunta Karargahlarının Düşüşü & 3D Dron Sürüleri"
  },
  {
    id: "kore-yarimadasi-dmz-gerilimi",
    name: "Kore DMZ & Sarı Deniz",
    region: "Doğu Asya",
    x: 828,
    y: 165,
    threat: "%82 NÜKLEER ALARM",
    color: "#06b6d4",
    status: "Sınır Yollarının Dinamitlenmesi & Hwasong-19 ICBM"
  },
  {
    id: "tayvan-bogazi-guney-cin-denizi",
    name: "Tayvan Boğazı & Abluka Kalkanı",
    region: "Pasifik",
    x: 808,
    y: 206,
    threat: "%80 A2/AD ABLUKA",
    color: "#06b6d4",
    status: "Joint Sword Ada Kuşatması & Kirpi Savunması"
  }
];

export default function InteractiveConflictMap({ activeConflictId, onSelectConflict }) {
  const [hoveredHotspot, setHoveredHotspot] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const activeMarker = mapHotspots.find(m => m.id === activeConflictId) || mapHotspots[0];
  const displayedHotspot = hoveredHotspot || activeMarker;

  const filteredMarkers = activeFilter === 'ALL'
    ? mapHotspots
    : mapHotspots.filter(m => {
        if (activeFilter === 'EUR') return m.region.includes('Avrupa');
        if (activeFilter === 'ME') return m.region.includes('Orta Doğu') || m.region.includes('Kızıldeniz');
        if (activeFilter === 'AFR') return m.region.includes('Afrika');
        if (activeFilter === 'ASIA') return m.region.includes('Asya') || m.region.includes('Pasifik');
        return true;
      });

  return (
    <div className="mb-12 rounded-2xl bg-[#090e1b] border border-slate-700/80 p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      
      {/* Top Header & Telemetry Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
          <span className="text-white font-bold tracking-wider flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-rose-400" />
            CANLI KÜRESEL ÇATIŞMA VE SICAK BÖLGELER HARİTASI
          </span>
          <span className="hidden md:inline px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">
            WGS84 TEKNİK RADAR
          </span>
        </div>

        {/* Region View Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
          {[
            { id: 'ALL', label: 'Tüm Dünya' },
            { id: 'ME', label: 'Orta Doğu' },
            { id: 'EUR', label: 'Doğu Avrupa' },
            { id: 'ASIA', label: 'Asya & Pasifik' },
            { id: 'AFR', label: 'Afrika' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === btn.id
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 font-bold shadow-[0_0_10px_rgba(244,63,94,0.3)]'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Interactive Cyber Radar Canvas */}
      <div className="relative w-full aspect-[2/1] sm:aspect-[2.2/1] bg-[#070b16] rounded-xl border border-slate-800/90 overflow-hidden shadow-inner group select-none">
        
        {/* Radar Ambient Glow Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-500/5 via-slate-900/0 to-transparent" />

        {/* Tactical Crosshair Watermark */}
        <div className="absolute top-3 left-4 font-mono text-[10px] text-slate-400 pointer-events-none flex items-center gap-3">
          <span>SCAN: REAL-TIME OSINT SATELLITE</span>
          <span className="text-cyan-400">AKTİF SICAK NOKTA: {filteredMarkers.length} BÖLGE</span>
        </div>

        <svg 
          viewBox="0 0 1000 500" 
          className="w-full h-full object-cover"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="tacticalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.25)" strokeWidth="0.75" />
            </pattern>

            {/* Glowing Radar Beacon Filter */}
            <filter id="glowBeacon" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Cyber Coordinate Grid Background */}
          <rect width="1000" height="500" fill="url(#tacticalGrid)" />

          {/* Latitude & Longitude Reference Lines */}
          <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(244, 63, 94, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="125" x2="1000" y2="125" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="0.75" strokeDasharray="2 4" />
          <line x1="0" y1="375" x2="1000" y2="375" stroke="rgba(51, 65, 85, 0.3)" strokeWidth="0.75" strokeDasharray="2 4" />

          {/* Stylized Tactical World Continents (Accurate Equirectangular Geometry) */}
          <g fill="rgba(30, 41, 59, 0.65)" stroke="rgba(71, 85, 105, 0.6)" strokeWidth="1.2">
            {/* North America */}
            <path d="M 120,60 L 190,50 L 250,65 L 290,110 L 250,150 L 270,180 L 250,210 L 210,230 L 180,210 L 150,160 L 110,130 L 90,80 Z" />
            {/* Greenland */}
            <path d="M 330,40 L 400,35 L 410,75 L 360,95 L 330,65 Z" />
            {/* South America */}
            <path d="M 270,250 L 330,260 L 375,310 L 350,380 L 310,440 L 280,445 L 260,370 L 250,300 Z" />
            {/* Europe */}
            <path d="M 460,80 L 530,70 L 580,75 L 590,120 L 540,155 L 480,155 L 450,120 Z" />
            {/* Scandinavia */}
            <path d="M 510,45 L 540,40 L 550,75 L 515,80 Z" />
            {/* United Kingdom & Ireland */}
            <path d="M 445,95 L 465,95 L 460,120 L 440,115 Z" />
            {/* Africa */}
            <path d="M 460,170 L 580,165 L 615,220 L 580,340 L 530,380 L 490,320 L 455,220 Z" />
            {/* Madagascar */}
            <path d="M 620,320 L 635,325 L 625,370 L 615,360 Z" />
            {/* Asia (Russia, China, Middle East, India, SE Asia) */}
            <path d="M 590,75 L 750,60 L 890,65 L 910,110 L 860,160 L 880,210 L 830,225 L 780,240 L 730,285 L 680,240 L 630,210 L 590,160 Z" />
            {/* Japan */}
            <path d="M 885,140 L 905,150 L 890,185 L 875,175 Z" />
            {/* Australia */}
            <path d="M 780,320 L 890,315 L 905,375 L 850,420 L 785,395 L 770,350 Z" />
            {/* New Zealand */}
            <path d="M 920,400 L 935,410 L 920,440 L 910,430 Z" />
          </g>

          {/* Interactive Radar Hotspots */}
          {filteredMarkers.map((spot) => {
            const isSelected = activeConflictId === spot.id;
            const isHovered = hoveredHotspot?.id === spot.id;

            return (
              <g 
                key={spot.id}
                className="cursor-pointer transition-transform"
                onClick={() => {
                  onSelectConflict(spot.id);
                  const el = document.getElementById('kuresel-olaylar');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredHotspot(spot)}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                {/* Expanding Radar Wave Ring */}
                <circle
                  cx={spot.x}
                  cy={spot.y}
                  r={isSelected ? "18" : "12"}
                  fill="none"
                  stroke={spot.color}
                  strokeWidth="1.5"
                  opacity={isSelected ? "0.8" : "0.4"}
                  className="animate-ping origin-center"
                  style={{ animationDuration: isSelected ? '1.8s' : '3s' }}
                />

                {/* Outer Ring */}
                <circle
                  cx={spot.x}
                  cy={spot.y}
                  r={isSelected ? "10" : "6"}
                  fill={isSelected ? "rgba(244,63,94,0.3)" : "rgba(15,23,42,0.6)"}
                  stroke={spot.color}
                  strokeWidth={isSelected ? "2.5" : "1.5"}
                  filter="url(#glowBeacon)"
                />

                {/* Center Core Dot */}
                <circle
                  cx={spot.x}
                  cy={spot.y}
                  r={isSelected ? "4.5" : "3"}
                  fill={spot.color}
                  className="animate-pulse"
                />

                {/* Active Reticle Lines if selected */}
                {(isSelected || isHovered) && (
                  <g stroke={spot.color} strokeWidth="1.2" opacity="0.9">
                    <line x1={spot.x - 14} y1={spot.y} x2={spot.x - 7} y2={spot.y} />
                    <line x1={spot.x + 7} y1={spot.y} x2={spot.x + 14} y2={spot.y} />
                    <line x1={spot.x} y1={spot.y - 14} x2={spot.x} y2={spot.y - 7} />
                    <line x1={spot.x} y1={spot.y + 7} x2={spot.x} y2={spot.y + 14} />
                  </g>
                )}

                {/* Permanent or Hover Title Tag */}
                <text
                  x={spot.x}
                  y={spot.y - (isSelected ? 16 : 12)}
                  textAnchor="middle"
                  fill={isSelected ? "#ffffff" : "#cbd5e1"}
                  fontSize={isSelected ? "11" : "9"}
                  fontFamily="monospace"
                  fontWeight={isSelected ? "bold" : "600"}
                  className="pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                >
                  {spot.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Real-Time HUD Target Card */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md p-3 sm:p-4 rounded-xl bg-slate-900/95 border border-rose-500/50 shadow-2xl backdrop-blur-xl font-mono text-xs z-20 animate-in fade-in">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] text-rose-400 font-bold flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              SEÇİLİ HEDEF: {displayedHotspot.region}
            </span>
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-extrabold border border-rose-500/40">
              {displayedHotspot.threat}
            </span>
          </div>

          <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
            {displayedHotspot.name}
          </h4>

          <p className="text-[11px] text-amber-400 mt-1 truncate">
            ⚡ {displayedHotspot.status}
          </p>

          <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Haritada noktaya tıklayarak istihbaratı açın</span>
            <span className="text-cyan-400 font-bold flex items-center gap-0.5 group-hover:translate-x-1">
              Raporu Gör <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>

      {/* Hotspots Quick Click Navigation Pills */}
      <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-mono text-xs">
        <span className="text-slate-500 text-[11px] shrink-0 font-bold uppercase tracking-wider flex items-center gap-1 mr-1">
          <Crosshair className="w-3.5 h-3.5 text-rose-500" />
          HIZLI HEDEF:
        </span>
        {mapHotspots.map((spot) => {
          const isSelected = activeConflictId === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => onSelectConflict(spot.id)}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 text-xs ${
                isSelected
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 font-bold shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                  : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              <span 
                className="w-1.5 h-1.5 rounded-full" 
                style={{ backgroundColor: spot.color }} 
              />
              <span>{spot.name}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
