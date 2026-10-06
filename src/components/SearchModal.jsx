import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Globe2, Crosshair, ArrowRight } from 'lucide-react';
import { articles, globalConflicts, tacticalGearReviews } from '../data/content';

export default function SearchModal({ isOpen, onClose, onSelectArticle, onSelectConflict }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = articles.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredConflicts = globalConflicts.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.region.toLowerCase().includes(query.toLowerCase()) ||
    c.keyTech.some(k => k.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredGear = tacticalGearReviews.filter(g =>
    g.title.toLowerCase().includes(query.toLowerCase()) ||
    g.category.toLowerCase().includes(query.toLowerCase()) ||
    g.specs.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = filteredArticles.length + filteredConflicts.length + filteredGear.length;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#0c0d16] border border-rose-500/40 rounded-2xl shadow-2xl shadow-rose-950/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800 bg-[#0e101a]">
          <Crosshair className="w-5 h-5 text-rose-500" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Silah, balistik, optik, çatışma bölgesi veya teknoloji ara..."
            className="w-full bg-transparent text-white placeholder:text-slate-500 font-mono text-sm focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-500 font-mono text-xs">
              Aramak için terim yazın (ör: "6.8mm", "FPV", "Jammer", "EOTech", "Kızıldeniz")
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-slate-500 font-mono text-xs">
              "{query}" için eşleşen kayıt bulunamadı.
            </div>
          ) : (
            <>
              {/* Articles */}
              {filteredArticles.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-mono text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 px-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Makaleler & Raporlar ({filteredArticles.length})</span>
                  </h4>
                  <div className="space-y-1">
                    {filteredArticles.map(a => (
                      <div
                        key={a.id}
                        onClick={() => {
                          onSelectArticle(a);
                          onClose();
                        }}
                        className="p-3 rounded-xl hover:bg-slate-850 hover:border-rose-500/30 border border-transparent cursor-pointer transition-all flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-rose-300 font-mono">
                            {a.title}
                          </p>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {a.category} • {a.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Conflicts */}
              {filteredConflicts.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 px-2">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>Sıcak Bölgeler & Olaylar ({filteredConflicts.length})</span>
                  </h4>
                  <div className="space-y-1">
                    {filteredConflicts.map(c => (
                      <div
                        key={c.id}
                        onClick={() => {
                          onClose();
                          const el = document.getElementById('kuresel-olaylar');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-amber-500/30 cursor-pointer"
                      >
                        <p className="text-sm font-medium text-slate-200 font-mono">
                          {c.title}
                        </p>
                        <p className="text-[11px] text-amber-400/90 font-mono mt-0.5">
                          {c.region} • {c.threatLevel}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

        </div>

        {/* Footer shortcuts info */}
        <div className="px-5 py-3 border-t border-slate-800 bg-[#08090f] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Kapatmak için ESC</span>
          <span>Taktik Arama: ⌘K</span>
        </div>
      </div>
    </div>
  );
}
