import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeaponsShowcase from './components/WeaponsShowcase';
import ConflictTracker from './components/ConflictTracker';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ArticleModal from './components/ArticleModal';
import SearchModal from './components/SearchModal';
import LegalNotice from './components/LegalNotice';
import TacticalMapOverlay from './components/TacticalMapOverlay';
import { articles } from './data/content';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [likedArticleIds, setLikedArticleIds] = useState(() => {
    try {
      const saved = localStorage.getItem('tactical_liked_articles');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [activeSection, setActiveSection] = useState('kuresel-olaylar');

  useEffect(() => {
    try {
      localStorage.setItem('tactical_liked_articles', JSON.stringify([...likedArticleIds]));
    } catch (e) {
      console.error(e);
    }
  }, [likedArticleIds]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['kuresel-olaylar', 'silah-arsivi', 'yazilar', 'iletisim'];
      const scrollY = window.scrollY;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLike = (articleId) => {
    setLikedArticleIds((prev) => {
      const next = new Set(prev);
      if (next.has(articleId)) {
        next.delete(articleId);
      } else {
        next.add(articleId);
      }
      return next;
    });
  };

  const scrollTo = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b16] text-slate-200 cyber-grid relative selection:bg-rose-500 selection:text-white">
      
      {/* Tactical map coordinates, reticles and numbers */}
      <TacticalMapOverlay />

      {/* Tactical radar/threat ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[750px] h-[750px] bg-rose-500/08 rounded-full blur-[170px]" />
        <div className="absolute top-1/4 -right-20 w-[650px] h-[650px] bg-sky-500/08 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/10 w-[600px] h-[600px] bg-amber-500/06 rounded-full blur-[160px]" />
        <div className="absolute top-3/4 right-1/4 w-[700px] h-[700px] bg-rose-500/08 rounded-full blur-[170px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar 
          onSearchClick={() => setIsSearchOpen(true)}
          onLegalClick={() => setIsLegalOpen(true)}
          activeSection={activeSection}
          onNavigate={(sec) => setActiveSection(sec)}
        />

        {/* Hero Section */}
        <div id="hakkimda">
          <Hero 
            onWeaponsClick={() => scrollTo('silah-arsivi')}
            onConflictsClick={() => scrollTo('kuresel-olaylar')}
            onExploreClick={() => scrollTo('yazilar')}
            onSelectArticleById={(articleId) => {
              const art = articles.find((a) => a.id === articleId);
              if (art) {
                setSelectedArticle(art);
              } else {
                scrollTo('yazilar');
              }
            }}
          />
        </div>

        {/* 1. Canlı Sıcak Çatışma Alanları & Küresel Harp Radarı */}
        <ConflictTracker />

        {/* 2. İnteraktif Silah ve Balistik Laboratuvarı */}
        <WeaponsShowcase />

        {/* 3. Askeri Silahlar, Balistik ve Taktik Sistemler Kütüphanesi */}
        <BlogSection 
          onSelectArticle={(art) => setSelectedArticle(art)}
          likedArticleIds={likedArticleIds}
          onToggleLike={handleToggleLike}
        />

        {/* 4. İletişim & Geri Bildirim */}
        <ContactSection />

        {/* 8. Footer with Legal Notice */}
        <Footer />

        {/* Interactive Legal Notice Modal */}
        <LegalNotice isOpen={isLegalOpen} onOpenChange={setIsLegalOpen} />
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <ArticleModal 
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onLike={handleToggleLike}
          isLiked={likedArticleIds.has(selectedArticle.id)}
        />
      )}

      {/* Spotlight Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

    </div>
  );
}
