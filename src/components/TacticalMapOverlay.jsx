import React from 'react';

// Pre-defined military coordinates that appear across the map background
const tacticalCoords = [
  { top: '8%', left: '4%', label: 'GRID-39.92°N / 32.85°E', callsign: 'ANKARA-SEC' },
  { top: '14%', right: '6%', label: 'COORD-41.00°N / 28.97°E', callsign: 'BOSPHORUS-CTR' },
  { top: '22%', left: '12%', label: 'GRID-36.88°N / 30.70°E', callsign: 'MED-RADAR-01' },
  { top: '34%', right: '15%', label: 'SAT-MGRS: 36SYF 8412', callsign: 'EAST-SECTOR' },
  { top: '48%', left: '8%', label: 'COORD-37.06°N / 37.38°E', callsign: 'SOUTHERN-AXIS' },
  { top: '62%', right: '10%', label: 'SYS-GRID: 40.71°N / 74.00°W', callsign: 'NATO-LINK-16' },
  { top: '75%', left: '15%', label: 'DEF-AZIMUTH: 184° MIL-GRID', callsign: 'TACTICAL-NET' },
  { top: '88%', right: '18%', label: 'ELEV: +1042m / GRID-44', callsign: 'RADAR-ALPHA' },
];

export default function TacticalMapOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Tactical Crosshairs & Radar Reticle rings */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full border border-sky-400/10 pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] translate-x-[100px] translate-y-[100px] rounded-full border border-sky-400/10 pointer-events-none" />
      
      <div className="absolute top-[55%] right-[8%] w-[600px] h-[600px] rounded-full border border-rose-500/10 pointer-events-none" />
      <div className="absolute top-[55%] right-[8%] w-[380px] h-[380px] translate-x-[110px] translate-y-[110px] rounded-full border border-rose-500/10 pointer-events-none" />

      {/* Military Map Coordinates & Numbers Floating across the Grid */}
      {tacticalCoords.map((item, idx) => (
        <div
          key={idx}
          style={{ top: item.top, left: item.left, right: item.right }}
          className="absolute font-mono text-[10px] tracking-widest text-sky-300/35 flex flex-col gap-0.5"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400/40 animate-pulse" />
            <span className="font-semibold text-slate-400/50">{item.label}</span>
          </div>
          <span className="text-[9px] text-slate-500/45 pl-3">[{item.callsign}]</span>
        </div>
      ))}

      {/* Ruler scale markings on the edges */}
      <div className="absolute left-1 top-20 bottom-20 w-3 flex flex-col justify-between text-[8px] font-mono text-slate-500/30">
        <span>00°</span>
        <span>15°</span>
        <span>30°</span>
        <span>45°</span>
        <span>60°</span>
        <span>75°</span>
        <span>90°</span>
      </div>

      <div className="absolute right-1 top-20 bottom-20 w-3 flex flex-col justify-between text-[8px] font-mono text-slate-500/30 text-right">
        <span>100</span>
        <span>080</span>
        <span>060</span>
        <span>040</span>
        <span>020</span>
        <span>000</span>
      </div>
    </div>
  );
}
