import React, { useState } from 'react';
import { newsletterStats } from '../data/content';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Radio } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <section id="bulten" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-[#14121a] to-[#0a0a12] border border-rose-500/30 p-8 sm:p-12 overflow-hidden shadow-[0_0_50px_-15px_rgba(244,63,94,0.2)]">
          
          {/* Subtle Background Glow circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 mb-6">
              <Radio className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>Haftalık Taktik & İstihbarat Brifingi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {newsletterStats.title}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-mono">
              {newsletterStats.subtitle}
            </p>

            {/* Form */}
            {status === 'success' ? (
              <div className="mt-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-sm flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Kaydınız tamamlandı. İlk brifing pazartesi sabahı gelen kutunuzda olacak.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <div className="relative flex-1 max-w-md">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="ornek@alanadi.com"
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900/90 border text-slate-200 placeholder:text-slate-500 text-sm font-mono focus:outline-none transition-all ${
                      status === 'error'
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-800 focus:border-rose-500/60'
                    }`}
                  />
                  {status === 'error' && (
                    <p className="absolute -bottom-6 left-2 text-[11px] font-mono text-rose-400">
                      Lütfen geçerli bir e-posta adresi girin.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-mono text-sm font-bold shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <span>Kaydediliyor...</span>
                  ) : (
                    <>
                      <span>Abone Ol</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Proof Info */}
            <div className="mt-8 flex items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                {newsletterStats.subscribers}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Güvenli & Spam İçermez
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
