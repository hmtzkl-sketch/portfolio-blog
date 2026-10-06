import React, { useState } from 'react';
import { publications } from '../data/content';
import { 
  FileText, 
  ExternalLink, 
  Copy, 
  Check, 
  GraduationCap, 
  BookMarked,
  Quote
} from 'lucide-react';

export default function PublicationsSection() {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedBibtex, setSelectedBibtex] = useState(null);

  const handleCopyBibtex = (pub) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="yayinlar" className="py-20 relative bg-[#090b12]/60 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 uppercase tracking-widest mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Akademik Çalışmalar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Seçilmiş Yayınlar & Bildiriler
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-xl">
              Uluslararası hakemli konferanslarda ve bilimsel dergilerde yayımlanan otonom ajanlar ve dağıtık sistemler araştırmalarım.
            </p>
          </div>

          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono transition-all self-start md:self-auto"
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Google Scholar Profili</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {publications.map((pub) => {
            const isCopied = copiedId === pub.id;

            return (
              <div
                key={pub.id}
                className="bg-[#0f121e] border border-slate-800/90 hover:border-purple-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)] flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="max-w-3xl">
                  {/* Badge & Year & Citations */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 font-semibold">
                      {pub.badge}
                    </span>
                    <span className="text-slate-400 font-mono">
                      {pub.year}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-cyan-400 font-mono">
                      {pub.citations} Atıf
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  {/* Authors & Venue */}
                  <p className="text-xs text-slate-400 font-mono mt-2">
                    {pub.authors}
                  </p>
                  <p className="text-xs text-purple-400/90 font-mono mt-1 italic">
                    {pub.venue}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                  <button
                    onClick={() => handleCopyBibtex(pub)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-purple-300 text-xs font-mono transition-all"
                    title="BibTeX Alıntısını Kopyala"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Quote className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Kopyalandı' : 'BibTeX'}</span>
                  </button>

                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>DOI</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
