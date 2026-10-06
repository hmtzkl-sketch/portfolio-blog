import React, { useState, useEffect } from 'react';
import { 
  X, 
  Heart, 
  Share2, 
  Check, 
  Clock, 
  Calendar, 
  Copy, 
  Crosshair,
  BookOpen
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-600 via-amber-500 to-rose-700" />

        {/* Modal Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-600 font-bold">
            <Crosshair className="w-4 h-4" />
            <span>TAKTIK ANALİZ & BRİFİNG MODU</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-rose-600 transition-all text-xs font-mono flex items-center gap-1.5 border border-slate-200 cursor-pointer shadow-sm"
              title="Bağlantıyı Kopyala"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Kopyalandı' : 'Bağlantı'}</span>
            </button>

            <button
              onClick={() => onLike(article.id)}
              className={`p-2 rounded-lg border transition-all text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm ${
                isLiked 
                  ? 'bg-rose-50 border-rose-300 text-rose-600' 
                  : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700 hover:text-rose-600'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-rose-600' : ''}`} />
              <span>{article.likes + (isLiked ? 1 : 0)}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-700 hover:text-rose-600 transition-all ml-1 cursor-pointer shadow-sm"
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
            <span className="px-2.5 py-1 rounded-md bg-rose-50 border border-rose-200 text-rose-600 font-bold">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-6">
            {article.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-slate-200">
            {article.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Formatted Content */}
          <div className="space-y-6 text-slate-700 text-base leading-relaxed font-sans">
            {article.content.trim().split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-rose-600 pt-4 font-mono flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-rose-500" />
                    <span>{paragraph.replace('### ', '')}</span>
                  </h3>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```[a-z]*/g, '').trim();
                return (
                  <div key={index} className="my-5 rounded-xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs sm:text-sm overflow-x-auto text-amber-300 shadow-inner">
                    <pre><code>{codeContent}</code></pre>
                  </div>
                );
              }
              if (paragraph.startsWith('* ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="list-disc list-inside space-y-1.5 text-slate-700 font-sans">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace('* ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-slate-700 leading-relaxed font-sans">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Footer in modal - Insignia icon without personal photo */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                <Crosshair className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 font-mono">{authorProfile.name}</p>
                <p className="text-xs text-slate-500 font-mono">{authorProfile.title}</p>
              </div>
            </div>
            <button
              onClick={() => onLike(article.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-mono transition-all cursor-pointer font-semibold shadow-sm"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-rose-600' : ''}`} />
              <span>Raporu Beğen</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
