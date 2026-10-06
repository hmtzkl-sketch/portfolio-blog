import React, { useState } from 'react';
import { detailedLegalNotice } from '../data/legalText';
import { ShieldCheck, Scale, FileText, X, AlertTriangle, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function LegalNotice({ isOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const showModal = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  return (
    <>
      {/* Persistent Legal Banner at Footer */}
      <div className="bg-slate-200/90 border-y border-slate-300 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-start sm:items-center gap-2.5 text-slate-800">
            <Scale className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-[11px] text-slate-700 leading-relaxed">
              <strong className="text-slate-900 uppercase tracking-wider font-bold">HUKUKİ MEVZUAT VE GÜVENCE BİLDİRİMİ:</strong> Sitemiz 
              <span className="text-amber-800 font-semibold"> 657 Sayılı DMK</span> (m. 15, 28, 31), 
              <span className="text-emerald-700 font-semibold"> 5237 Sayılı TCK</span> (m. 326-339) ve 
              <span className="text-cyan-800 font-semibold"> 6136 Sayılı Kanun</span> hükümlerine %100 uyumludur. Hiçbir ticari gelir, silah satışı veya devlet sırrı niteliğinde bilgi içermez.
            </span>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-bold shrink-0 transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Resmi Yasal Metni & Mevzuat Raporunu Aç</span>
          </button>
        </div>
      </div>

      {/* Comprehensive Legal Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <div 
            className="w-full max-w-3xl bg-[#090b14] border-2 border-amber-500/50 rounded-2xl shadow-2xl shadow-black relative max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-800 bg-[#0d0f1c] flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                      HUKUKİ MEVZUATA TAM UYUM
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Son Güncelleme: {detailedLegalNotice.lastUpdated}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-mono mt-1">
                    {detailedLegalNotice.header}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Legal Sections */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
              
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs font-mono">
                {detailedLegalNotice.subHeader}
              </div>

              {detailedLegalNotice.sections.map((section, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#0e111f] border border-slate-800/90">
                  <h4 className="font-mono font-bold text-amber-400 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{section.title}</span>
                  </h4>
                  <div className="text-slate-300 whitespace-pre-line text-xs sm:text-[13px] leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}

              {/* Concluding Binding Declaration */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                ✓ BİLDİRİM VE TAAHHÜT: Bu sitedeki yayınlar yazarın şahsi bilimsel merakı doğrultusunda halka açık kaynaklardan derlenmiş olup; devlet memuriyeti görevini aksatacak veya ulusal güvenliği tehdit edecek hiçbir unsur barındırmaz.
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-slate-800 bg-[#0c0e18] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 text-[11px]">
                İletişim: iletisim@ahmetozkul.com.tr
              </span>
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs cursor-pointer font-bold"
              >
                Kapat
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
