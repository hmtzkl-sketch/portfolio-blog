import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { 
  Globe2, 
  Crosshair, 
  Radio, 
  ShieldAlert, 
  Layers, 
  Compass, 
  ChevronRight, 
  Navigation,
  Satellite,
  Flame,
  Activity,
  LocateFixed,
  ArrowDown
} from 'lucide-react';

import { globalConflicts } from '../data/content';

const parseCoordinates = (coordStr) => {
  if (!coordStr) return [30, 40];
  const parts = coordStr.split(',');
  if (parts.length < 2) return [30, 40];
  const lat = parseFloat(parts[0].replace(/[^0-9.-]/g, '')) * (parts[0].includes('S') ? -1 : 1);
  const lng = parseFloat(parts[1].replace(/[^0-9.-]/g, '')) * (parts[1].includes('W') ? -1 : 1);
  return [isNaN(lat) ? 30 : lat, isNaN(lng) ? 40 : lng];
};

export const mapHotspots = globalConflicts.map((c) => {
  const [lat, lng] = parseCoordinates(c.coordinates);
  const isCritical = c.intensity >= 90;
  const isMedium = c.intensity >= 84;
  const color = isCritical ? '#f43f5e' : (isMedium ? '#f59e0b' : '#06b6d4');

  return {
    id: c.id,
    name: c.title.split('(')[0].trim(),
    region: c.region,
    lat,
    lng,
    threat: `%${c.intensity} ${c.threatLevel ? c.threatLevel.split(' ')[0] : 'ALARM'}`,
    color,
    intensity: c.intensity,
    status: c.frontlineStatus,
    tech: Array.isArray(c.keyTech) ? c.keyTech.slice(0, 4).join(', ') : ''
  };
});

const REGION_PRESETS = [
  { id: 'GLOBAL', label: 'Tüm Dünya', center: [26, 45], zoom: 3 },
  { id: 'MED', label: 'Doğu Akdeniz & Mavi Vatan', center: [34.5, 27], zoom: 6 },
  { id: 'ME', label: 'Orta Doğu & Levant', center: [31.5, 38], zoom: 5 },
  { id: 'EUR', label: 'Doğu Avrupa / Donbas', center: [48.5, 37.5], zoom: 6 },
  { id: 'RED_SEA', label: 'Kızıldeniz & Babülmendep', center: [14.5, 43], zoom: 6 },
  { id: 'ASIA', label: 'Doğu Asya & Pasifik', center: [28, 115], zoom: 4 },
  { id: 'AFR', label: 'Afrika / Sudan', center: [15, 30], zoom: 5 }
];

export default function InteractiveConflictMap({ activeConflictId, onSelectConflict }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const activeLayerGroupRef = useRef(null);

  const [mapLayer, setMapLayer] = useState('dark'); // 'dark' | 'satellite'
  const [selectedHotspotId, setSelectedHotspotId] = useState(activeConflictId || mapHotspots[0].id);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);
  const [activePreset, setActivePreset] = useState('GLOBAL');
  const [mouseCoords, setMouseCoords] = useState({ lat: '32.00°N', lng: '35.00°E' });

  const activeSpot = mapHotspots.find(s => s.id === (hoveredHotspot?.id || selectedHotspotId)) || mapHotspots[0];

  // Build Free Watermark-Free Esri Map Layer Groups
  const createMapLayers = (type) => {
    if (type === 'satellite') {
      const sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; High-Res Satellite',
        maxZoom: 18
      });
      const borders = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18
      });
      return L.layerGroup([sat, borders]);
    } else {
      // Tactical Dark Gray Canvas with Crisp Borders
      const darkBase = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Dark Tactical WGS84',
        maxZoom: 16
      });
      const darkLabels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 16
      });
      return L.layerGroup([darkBase, darkLabels]);
    }
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [28, 45],
      zoom: 3,
      minZoom: 2,
      maxZoom: 14,
      zoomControl: false,
      attributionControl: true,
      worldCopyJump: true
    });

    // Custom tactical zoom control on bottom-right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Initial Dark Tile Layer Group (Esri Dark Gray - No API key needed, no watermark)
    const initialLayers = createMapLayers('dark');
    initialLayers.addTo(map);
    activeLayerGroupRef.current = initialLayers;
    mapInstanceRef.current = map;

    // Mouse coordinates tracker
    map.on('mousemove', (e) => {
      const lat = e.latlng.lat.toFixed(2);
      const lng = e.latlng.lng.toFixed(2);
      setMouseCoords({
        lat: `${Math.abs(lat)}°${lat >= 0 ? 'N' : 'S'}`,
        lng: `${Math.abs(lng)}°${lng >= 0 ? 'E' : 'W'}`
      });
    });

    // Add markers
    renderMarkers(map, selectedHotspotId);

    // Invalidate size to ensure crisp tiles on initial mount
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 300);

    const handleResize = () => {
      map.invalidateSize();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Handle Layer Switch (Esri Dark Gray vs Esri High-Res Satellite)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeLayerGroupRef.current) return;

    map.removeLayer(activeLayerGroupRef.current);
    const newLayerGroup = createMapLayers(mapLayer);
    newLayerGroup.addTo(map);
    activeLayerGroupRef.current = newLayerGroup;
  }, [mapLayer]);

  // Sync external activeConflictId change (e.g. from bottom War Room tabs)
  useEffect(() => {
    if (activeConflictId && activeConflictId !== selectedHotspotId) {
      setSelectedHotspotId(activeConflictId);
      const spot = mapHotspots.find(s => s.id === activeConflictId);
      if (spot && mapInstanceRef.current) {
        mapInstanceRef.current.flyTo([spot.lat, spot.lng], Math.max(mapInstanceRef.current.getZoom(), 5), {
          duration: 1.2
        });
      }
    }
  }, [activeConflictId]);

  // Update marker visual styles when selectedHotspotId changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      renderMarkers(mapInstanceRef.current, selectedHotspotId);
    }
  }, [selectedHotspotId]);

  // Clean, non-colliding military radar markers
  const createTacticalIcon = (spot, isSelected) => {
    const color = spot.color || '#f43f5e';
    const isRed = color === '#f43f5e';
    const glowClass = isRed ? 'shadow-[0_0_24px_rgba(244,63,94,0.9)]' : 'shadow-[0_0_24px_rgba(6,182,212,0.9)]';

    const html = `
      <div class="relative flex items-center justify-center group pointer-events-auto" style="width: 44px; height: 44px;">
        <!-- Pulsing sonar radar beacon wave -->
        <span class="absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping pointer-events-none"
              style="background-color: ${color}; animation-duration: ${isSelected ? '1.4s' : '3.2s'};"></span>

        <!-- Outer Tactical Reticle -->
        <div class="relative flex items-center justify-center rounded-full transition-all duration-300 ${
          isSelected 
            ? 'w-10 h-10 border-2 border-white bg-slate-950/90 ' + glowClass
            : 'w-6 h-6 border border-white/80 bg-slate-950/80 shadow-[0_0_10px_rgba(0,0,0,0.8)]'
        }">
          
          <!-- Crosshair target lock ticks when selected -->
          ${isSelected ? `
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span class="w-12 h-[1.5px] bg-rose-400 absolute"></span>
              <span class="h-12 w-[1.5px] bg-rose-400 absolute"></span>
            </div>
          ` : ''}

          <!-- Central Pulsing Core Dot -->
          <span class="rounded-full ${isSelected ? 'w-4 h-4' : 'w-2.5 h-2.5'} animate-pulse"
                style="background-color: ${color}; box-shadow: 0 0 12px ${color};"></span>
        </div>

        <!-- Smart Tactical Callout Badge: Appears when SELECTED or on HOVER (Zero Clutter at Low Zoom) -->
        <div class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded font-mono text-[10px] font-bold whitespace-nowrap pointer-events-none transition-all duration-200 z-50 ${
          isSelected
            ? 'opacity-100 bg-rose-950/95 text-white border border-rose-500 shadow-xl scale-105'
            : 'opacity-0 group-hover:opacity-100 bg-slate-950/95 text-slate-200 border border-slate-700 shadow-lg'
        }">
          <span class="flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full" style="background-color: ${color};"></span>
            ${spot.name.split(',')[0]}
          </span>
        </div>
      </div>
    `;

    return L.divIcon({
      html,
      className: 'tactical-div-icon',
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });
  };

  const renderMarkers = (map, activeId) => {
    // Remove existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    mapHotspots.forEach(spot => {
      const isSelected = spot.id === activeId;
      const icon = createTacticalIcon(spot, isSelected);

      const marker = L.marker([spot.lat, spot.lng], {
        icon,
        zIndexOffset: isSelected ? 1000 : 100
      }).addTo(map);

      // Event handlers
      marker.on('click', () => {
        map.flyTo([spot.lat, spot.lng], Math.max(map.getZoom(), 5), { duration: 0.8 });
        scrollToBriefing(spot.id);
      });

      marker.on('mouseover', () => {
        setHoveredHotspot(spot);
      });

      marker.on('mouseout', () => {
        setHoveredHotspot(null);
      });

      markersRef.current[spot.id] = marker;
    });
  };

  const handleSelectPreset = (preset) => {
    setActivePreset(preset.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(preset.center, preset.zoom, { duration: 1.4 });
    }
  };

  const scrollToBriefing = (spotId) => {
    setSelectedHotspotId(spotId);
    if (onSelectConflict) onSelectConflict(spotId);

    // Harita bölgesine tıklanınca doğrudan aşağıdaki brifing bölümüne yumuşak kaydır
    setTimeout(() => {
      const el = document.getElementById('taktik-brifing-konsolu');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const handleHotspotClick = (spot) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([spot.lat, spot.lng], 6, { duration: 0.8 });
    }
    scrollToBriefing(spot.id);
  };

  const handleScrollToBriefing = () => {
    scrollToBriefing(activeSpot.id);
  };

  return (
    <div className="mb-12 rounded-2xl bg-[#070b16] border border-slate-700/90 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      
      {/* Top Tactical Command HUD Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 p-4 sm:p-5 border-b border-slate-800 bg-[#050811] font-mono text-xs">
        
        {/* Left: Status & Telemetry */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <span className="text-white font-extrabold tracking-wider flex items-center gap-1.5 text-sm">
              <Crosshair className="w-4 h-4 text-rose-400" />
              CANLI ASKERİ ÇATIŞMA RADARI (WGS84)
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-400">
              ESRI SATELLITE & TACTICAL FEED
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
              GPS: {mouseCoords.lat}, {mouseCoords.lng}
            </span>
          </div>
        </div>

        {/* Right: Map Layer Switcher & Preset Zoom Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Layer Toggle */}
          <div className="inline-flex p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
            <button
              onClick={() => setMapLayer('dark')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                mapLayer === 'dark'
                  ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-3 h-3" />
              <span>Taktik Vektör</span>
            </button>
            <button
              onClick={() => setMapLayer('satellite')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                mapLayer === 'satellite'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Satellite className="w-3 h-3" />
              <span>Askeri Uydu</span>
            </button>
          </div>
        </div>

      </div>

      {/* Region Jump Presets Bar */}
      <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none font-mono text-[11px]">
        <span className="text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1 mr-1 shrink-0">
          <Navigation className="w-3 h-3 text-rose-400" />
          BÖLGE ODAKLAN:
        </span>
        {REGION_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => handleSelectPreset(preset)}
            className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
              activePreset === preset.id
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/60 font-bold shadow-[0_0_10px_rgba(244,63,94,0.3)]'
                : 'bg-slate-900/60 text-slate-400 border-slate-800/80 hover:text-white hover:border-slate-700'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Map Viewport Container */}
      <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] bg-[#070b16] select-none">
        
        {/* Real Leaflet Map */}
        <div ref={mapContainerRef} className="w-full h-full z-0" />

        {/* Ambient Tactical Grid Scan Lines Overlay (Does not block clicks) */}
        <div className="absolute inset-0 pointer-events-none border border-slate-800/40 shadow-inner z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(5,8,17,0.5)_100%)]" />
        </div>

        {/* Top-Left Telemetry Watermark Overlay */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none font-mono text-[10px] text-slate-400 space-y-1 hidden sm:block bg-slate-950/85 backdrop-blur-md p-2.5 rounded-lg border border-slate-800">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <Activity className="w-3 h-3 animate-pulse" />
            <span>GLOBAL THREAT MATRIX: LEVEL DEFCON-2</span>
          </div>
          <div>HEDEF: 9 AKTİF JEOPOLİTİK KRİZ ODAĞI</div>
          <div className="text-slate-500">PROJEKSİYON: WGS84 EQUIRECTANGULAR / MERCATOR</div>
        </div>

        {/* Floating Real-Time Target Intel HUD (Bottom Center/Left) */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-4 rounded-xl bg-slate-950/95 border border-rose-500/60 shadow-2xl backdrop-blur-xl font-mono text-xs z-20 animate-in fade-in transition-all">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] text-rose-400 font-extrabold flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              KİLİTLENEN HEDEF: {activeSpot.region}
            </span>
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-extrabold border border-rose-500/40">
              {activeSpot.threat}
            </span>
          </div>

          <h4 className="text-base sm:text-lg font-extrabold text-white leading-tight">
            {activeSpot.name}
          </h4>

          <div className="text-[11px] text-amber-300 mt-1.5 font-semibold flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{activeSpot.status}</span>
          </div>

          <div className="mt-2 text-[10px] text-slate-400 bg-slate-900/80 p-2 rounded border border-slate-800">
            <span className="text-cyan-400 font-bold block mb-0.5">KRİTİK TEKNOLOJİ / HARP UNSURLARI:</span>
            <span className="text-slate-300">{activeSpot.tech}</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[10px] text-slate-400">
              📍 {activeSpot.lat}°N, {activeSpot.lng}°E
            </span>
            <button
              onClick={handleScrollToBriefing}
              className="px-3 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all shadow-[0_0_12px_rgba(244,63,94,0.4)] hover:scale-105 active:scale-95"
            >
              <span>Aşağıdaki Brifinge İn</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>

      </div>

      {/* Hotspots Quick Action Carousel Pills (Bottom Bar) */}
      <div className="p-3 sm:p-4 bg-[#050811] border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none font-mono text-xs">
        <span className="text-slate-500 text-[11px] shrink-0 font-bold uppercase tracking-wider flex items-center gap-1 mr-1">
          <LocateFixed className="w-3.5 h-3.5 text-rose-500" />
          HEDEFE KİLİTLEN:
        </span>
        {mapHotspots.map((spot) => {
          const isSelected = selectedHotspotId === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => handleHotspotClick(spot)}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 text-xs ${
                isSelected
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500 font-bold shadow-[0_0_12px_rgba(244,63,94,0.35)]'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              <span 
                className="w-2 h-2 rounded-full" 
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
