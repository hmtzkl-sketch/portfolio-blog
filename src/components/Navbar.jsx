import React, { useState, useEffect } from 'react';
import { 
  Crosshair, 
  BookOpen, 
  Globe2, 
  ShieldCheck, 
  Send, 
  Menu, 
  X, 
  Search
} from 'lucide-react';
import { authorProfile } from '../data/content';

export default function Navbar({ onSearchClick, activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Silah Laboratuvarı', href: '#silah-arsivi', icon: Crosshair },
    { name: 'Sıcak Kriz Radarı', href: '#kuresel-olaylar', icon: Globe2 },
    { name: 'Taktik Brifingler', href: '#yazilar', icon: BookOpen },
    { name: 'İletişim', href: '#iletisim', icon: Send }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) onNavigate(href.replace('#', ''));
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0f172a]/90 backdrop-blur-xl border-b border-slate-700/80 py-3 shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/15 via-amber-500/10 to-transparent border border-rose-400/40 flex items-center justify-center group-hover:border-rose-500 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all">
            <Crosshair className="w-5 h-5 text-rose-600 group-hover:rotate-45 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-wider font-bold text-white flex items-center gap-1.5">
              AHMET ÖZKUL
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-amber-400 font-semibold tracking-widest uppercase">
              DEFENSE & TACTICAL INTEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1e293b]/90 border border-slate-700/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-black/30">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all ${
                  isActive
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 font-semibold shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onSearchClick}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 text-xs font-mono transition-all cursor-pointer shadow-sm"
            title="Sitede arama yap (Silahlar, Makaleler, Krizler)"
          >
            <Search className="w-3.5 h-3.5 text-rose-500" />
            <span>Hızlı Arama</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-100 text-slate-600 rounded border border-slate-200 font-semibold">⌘K</kbd>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onSearchClick}
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm"
            title="Arama yap"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-rose-600 cursor-pointer shadow-sm"
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f172a]/98 border-b border-slate-800 backdrop-blur-2xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-mono text-slate-200 hover:text-rose-400 hover:bg-slate-800/80 border border-slate-800"
                >
                  <Icon className="w-4 h-4 text-rose-500" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
