import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  Check, 
  Clock, 
  Calendar, 
  Copy, 
  Crosshair,
  BookOpen,
  Share2
} from 'lucide-react';
import { authorProfile } from '../data/content';

export default function ArticleModal({ article, onClose, onLike, isLiked }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0d1222] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-600 via-amber-500 to-rose-700" />

        {/* Modal Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0a0f1d]">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold">
            <Crosshair className="w-4 h-4 text-rose-500" />
            <span>TAKTIK ANALİZ & BRİFİNG PROTOKOLÜ</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 border border-slate-700 cursor-pointer shadow-sm"
              title="Bağlantıyı Kopyala"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Kopyalandı' : 'Bağlantı'}</span>
            </button>

            <button
              onClick={() => onLike(article.id)}
              className={`p-2 rounded-lg border transition-all text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm ${
                isLiked 
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-300' 
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-rose-500' : ''}`} />
              <span>{article.likes + (isLiked ? 1 : 0)}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-rose-600 border border-slate-700 text-slate-300 hover:text-white transition-all ml-1 cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto">
          
          {/* Category & Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-4">
            <span className="px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-6 font-mono">
            {article.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-slate-800">
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700 px-2.5 py-1 rounded font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Formatted Content */}
          <div className="space-y-6 text-slate-200 text-base leading-relaxed font-sans">
            {article.content.trim().split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-rose-400 pt-4 font-mono flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-rose-500" />
                    <span>{paragraph.replace('### ', '')}</span>
                  </h3>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```[a-z]*/g, '').trim();
                return (
                  <div key={index} className="my-5 rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs sm:text-sm overflow-x-auto text-amber-300 shadow-inner">
                    <pre><code>{codeContent}</code></pre>
                  </div>
                );
              }
              if (paragraph.startsWith('* ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="list-disc list-inside space-y-1.5 text-slate-300 font-sans">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace('* ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-slate-200 leading-relaxed font-sans">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Footer in modal */}
          <div className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Crosshair className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white font-mono">{authorProfile.name}</p>
                <p className="text-xs text-slate-400 font-mono">{authorProfile.title}</p>
              </div>
            </div>
            <button
              onClick={() => onLike(article.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-mono transition-all cursor-pointer font-semibold shadow-sm"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-rose-500' : ''}`} />
              <span>Raporu Beğen</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
