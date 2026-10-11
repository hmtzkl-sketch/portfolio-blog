import React, { useState } from 'react';
import { 
  categories, 
  articles as initialArticles 
} from '../data/content';
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  Heart, 
  Crosshair,
  BookOpen,
  Sparkles
} from 'lucide-react';

export default function BlogSection({ onSelectArticle, likedArticleIds, onToggleLike }) {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date"); // 'date' | 'likes'

  const filteredArticles = initialArticles
    .filter((art) => {
      const matchCategory = selectedCategory === "Tümü" || art.category === selectedCategory;
      const matchSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'likes') {
        const aLikes = a.likes + (likedArticleIds.has(a.id) ? 1 : 0);
        const bLikes = b.likes + (likedArticleIds.has(b.id) ? 1 : 0);
        return bLikes - aLikes;
      }
      return 0; // maintain default order
    });

  return (
    <section id="yazilar" className="py-24 relative overflow-hidden bg-[#090d18] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-400 uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 font-bold">
              <BookOpen className="w-3.5 h-3.5 text-rose-400" />
              <span>TEKNİK BRİFİNGLER & HARP ANALİZLERİ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Silah, Balistik & Taktik Sistemler <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
                Araştırma Kütüphanesi
              </span>
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-2xl font-mono leading-relaxed">
              Milli platformlar, hipersonik önleme doktrinleri, fiber-optik İHA harp alanı devrimi ve mühimmat balistiği üzerine açık kaynaklı derinlemesine teknik incelemeler.
            </p>
          </div>

          {/* Search & Sort Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Konu, mühimmat veya taktik ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-rose-500 focus:outline-none text-xs font-mono text-white placeholder:text-slate-500 w-56 sm:w-64 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-xl p-1 text-xs font-mono">
              <button
                onClick={() => setSortBy('date')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  sortBy === 'date' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                En Yeni
              </button>
              <button
                onClick={() => setSortBy('likes')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  sortBy === 'likes' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                En Çok Okunan
              </button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-rose-500/15 border-rose-500/50 text-rose-300 font-bold shadow-[0_0_15px_rgba(244,63,94,0.25)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-[#11182c]/80 rounded-2xl border border-slate-800 shadow-sm">
            <p className="text-slate-400 font-mono text-sm">
              "{searchQuery}" araması veya "{selectedCategory}" kategorisinde sonuç bulunamadı.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("Tümü"); }}
              className="mt-4 px-4 py-2 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-mono hover:bg-rose-500/30 border border-rose-500/40 font-semibold cursor-pointer"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => {
              const isLiked = likedArticleIds.has(article.id);
              const totalLikes = article.likes + (isLiked ? 1 : 0);

              return (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="group relative bg-[#11182c]/90 border border-slate-800 hover:border-rose-500/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-950/20 cursor-pointer text-left"
                >
                  <div>
                    {/* Top Row: Category + Read Time */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-rose-500/15 text-rose-300 border border-rose-500/30 font-bold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {article.date}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors leading-snug mb-3 font-mono">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 font-sans">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Bottom Footer: Tags & Like Button */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-slate-800 px-2.5 py-0.5 rounded font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="text-[10px] font-mono text-slate-500 self-center">
                          +{article.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLike(article.id);
                        }}
                        className={`flex items-center gap-1 text-xs font-mono transition-colors px-2 py-1 rounded-md border cursor-pointer ${
                          isLiked 
                            ? 'text-rose-400 bg-rose-500/20 border-rose-500/40' 
                            : 'text-slate-400 hover:text-white bg-slate-800/60 border-slate-700'
                        }`}
                        title="Faydalı Buldum"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-rose-500' : ''}`} />
                        <span>{totalLikes}</span>
                      </button>

                      <div className="px-3 py-1.5 rounded-lg bg-slate-800 group-hover:bg-rose-600 group-hover:text-white flex items-center gap-1 transition-all text-xs font-mono font-semibold text-slate-200">
                        <span>İncele</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
