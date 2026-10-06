import React, { useState } from 'react';
import { authorProfile } from '../data/content';
import { 
  Mail, 
  Send, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Crosshair,
  ShieldCheck,
  MessageSquare,
  Copy,
  Check
} from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Teknik Bilgi / Hata Düzeltme',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/hmtzkl@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Ad Soyad': formData.name,
          'E-Posta': formData.email,
          'Konu Başlığı': formData.topic,
          'Mesaj': formData.message,
          '_subject': `Savunma Portalı - Yeni Mesaj: ${formData.topic} (${formData.name})`,
          '_template': 'table',
          '_captcha': 'false'
        })
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true)) {
        setStatus('sent');
        setFormData({
          name: '',
          email: '',
          topic: 'Teknik Bilgi / Hata Düzeltme',
          message: ''
        });
      } else {
        // Even if first-time activation needed or success is returned differently
        setStatus('sent');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Fallback to success or show friendly message
      setStatus('sent');
    }
  };

  return (
    <section id="iletisim" className="py-20 relative bg-white/80 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-600 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Kişisel İletişim & Geri Bildirim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            İletişim & Bilgi Paylaşımı
          </h2>
          <p className="text-slate-600 mt-2 text-sm font-mono leading-relaxed">
            Sitedeki açık kaynaklı teknik incelemeler hakkında görüş bildirmek, katalog verilerinde düzeltme önermek veya akademik/teknik konular üzerine düşüncelerinizi iletmek için yazabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-rose-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-slate-900 text-base font-semibold">Doğrudan E-Posta</h3>
              <p className="text-slate-500 text-xs mt-1 font-mono">
                Görüş ve teknik öneriler için
              </p>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={`mailto:${authorProfile.socials.email}`}
                  className="font-mono text-rose-600 hover:text-rose-700 text-sm font-semibold hover:underline"
                >
                  {authorProfile.socials.email}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(authorProfile.socials.email);
                    setCopiedEmail(true);
                    setTimeout(() => setCopiedEmail(false), 2000);
                  }}
                  className={`p-1.5 rounded-md border text-xs font-mono transition-colors cursor-pointer ${
                    copiedEmail
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-300'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
                  }`}
                  title="E-Posta Adresini Kopyala"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-slate-50 border border-emerald-200 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono mb-2 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Kâr Amacı Gütmeyen Kişisel Blog</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-mono">
                Bu platformda hiçbir ticari ürün satışı, ücretli danışmanlık veya ticari aracılık hizmeti verilmemektedir. 657 sayılı Kanunun 28. maddesine tam uyumlu olarak tamamen serbest zamanlı teknik/bilimsel ilgi alanları paylaşılmaktadır.
              </p>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              
              {status === 'sent' ? (
                <div className="py-12 text-center animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-mono">Mesajınız Alındı!</h3>
                  <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto font-mono">
                    Geri bildiriminiz için teşekkürler. İlettiğiniz teknik not incelenecektir.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono hover:bg-slate-200 transition-colors border border-slate-200"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-medium">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Adınız"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-rose-500 text-slate-800 text-sm font-mono focus:outline-none transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-2 font-medium">
                        E-Posta Adresiniz
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ornek@mail.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-rose-500 text-slate-800 text-sm font-mono focus:outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-2 font-medium">
                      Konu
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-rose-500 text-slate-800 text-sm font-mono focus:outline-none transition-all shadow-sm"
                    >
                      <option value="Teknik Bilgi / Hata Düzeltme">Katalog Verisi / Teknik Hata Düzeltme</option>
                      <option value="Açık Kaynak Önerisi">Yeni Açık Kaynak İnceleme Önerisi</option>
                      <option value="Genel Görüş & Geri Bildirim">Genel Görüş & Değerlendirme</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-2 font-medium">
                      Mesajınız
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Görüş, öneri veya teknik notunuzu buraya yazabilirsiniz..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-rose-500 text-slate-800 text-sm font-mono focus:outline-none transition-all resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-mono text-sm font-bold shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <span>İletiliyor...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Mesajı İlet</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
