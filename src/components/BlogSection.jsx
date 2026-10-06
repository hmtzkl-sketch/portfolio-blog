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
  Flame
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
    <section id="yazilar" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-rose-600 uppercase tracking-widest mb-2 font-bold">
              <Crosshair className="w-4 h-4" />
              <span>Teknik Analizler & Eğitim Dokümanları</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Silah, Balistik & Taktik Sistemler Kütüphanesi
            </h2>
            <p className="text-slate-600 mt-2 text-sm max-w-xl font-mono">
              Piyade silahları, nişangah optikleri, atış prosedürleri ve çağımızın asimetrik harp teknolojileri üzerine saha incelemeleri.
            </p>
          </div>

          {/* Search & Sort Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Silah, optik veya taktik ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-300 focus:border-rose-500 focus:outline-none text-xs font-mono text-slate-900 placeholder:text-slate-400 w-56 sm:w-64 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 text-xs font-mono shadow-sm">
              <button
                onClick={() => setSortBy('date')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  sortBy === 'date' ? 'bg-rose-50 text-rose-600 border border-rose-300 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                En Yeni
              </button>
              <button
                onClick={() => setSortBy('likes')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  sortBy === 'likes' ? 'bg-rose-50 text-rose-600 border border-rose-300 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
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
              className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-rose-50 border-rose-400 text-rose-600 font-bold shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-600 font-mono text-sm">
              "{searchQuery}" araması veya "{selectedCategory}" kategorisinde sonuç bulunamadı.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("Tümü"); }}
              className="mt-4 px-4 py-2 rounded-lg bg-rose-50 text-rose-600 text-xs font-mono hover:bg-rose-100 border border-rose-200 font-semibold"
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
                  className="group relative bg-white border border-slate-200 hover:border-rose-400 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 cursor-pointer shadow-sm"
                >
                  <div>
                    {/* Top Row: Category + Read Time */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-500 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 font-bold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px] text-slate-500">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-slate-500">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {article.date}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-snug mb-3">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Bottom Footer: Tags & Like Button */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-[10px] font-mono text-slate-500 self-center">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLike(article.id);
                        }}
                        className={`flex items-center gap-1 text-xs font-mono transition-colors ${
                          isLiked ? 'text-rose-600' : 'text-slate-500 hover:text-rose-600'
                        }`}
                        title="Faydalı Buldum"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-rose-600' : ''}`} />
                        <span>{totalLikes}</span>
                      </button>

                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-rose-500 group-hover:text-white flex items-center justify-center transition-all text-slate-600">
                        <ArrowUpRight className="w-4 h-4" />
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
