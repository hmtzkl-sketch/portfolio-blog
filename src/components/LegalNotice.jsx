import React from 'react';
import { detailedLegalNotice } from '../data/legalText';
import { ShieldCheck, Scale, X, CheckCircle2 } from 'lucide-react';

export default function LegalNotice({ isOpen, onOpenChange }) {
  if (!isOpen) return null;

  const handleClose = () => {
    if (onOpenChange) onOpenChange(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
      onClick={handleClose}
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
            onClick={handleClose}
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
            onClick={handleClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs cursor-pointer font-bold"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
