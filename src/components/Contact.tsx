import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface ContactProps {
  isRtl: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isRtl }) => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom ERP / POS System',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06B6D4', '#3B82F6', '#8B5CF6']
    });

    const subject = encodeURIComponent(`Hey Badr — ${formData.service} inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Badr,\n\nMy name is ${formData.name} (${formData.email}).\n\nI'm reaching out about: ${formData.service}\n\n${formData.message}`
    );

    setTimeout(() => {
      window.open(`mailto:Badraldeenrasea@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-1">
          <p className="section-number">04 — Contact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Grid Layout: Direct Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl glass-panel border border-slate-800/80 space-y-5">
              <h3 className="text-base font-bold text-slate-100 pb-3 border-b border-slate-800">
                {t('contact.directChannels')}
              </h3>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href="mailto:Badraldeenrasea@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                      Badraldeenrasea@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/967773421179"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">WhatsApp</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors font-mono">
                      +967 773 421 179
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/baderrasea"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-violet-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">GitHub</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-violet-300 transition-colors">
                      github.com/baderrasea
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-850/50 border border-slate-800/50">
                  <div className="p-2.5 rounded-xl bg-slate-700/50 text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Based in</p>
                    <p className="text-sm font-semibold text-slate-300">
                      Sana'a, Yemen — open to remote
                    </p>
                  </div>
                </div>
              </div>

              {/* Honest, casual availability note */}
              <p className="text-xs text-slate-500 pt-1">
                I usually reply within a few hours. Feel free to reach out on WhatsApp if it's urgent.
              </p>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800/80 relative overflow-hidden shadow-2xl">
              <h3 className="text-lg font-bold text-slate-100 mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>{t('contact.formTitle')}</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">{t('contact.formSubtitle')}</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-14 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-100">
                      {t('contact.successTitle')}
                    </h4>
                    <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                      {t('contact.successMsg')}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-all mt-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400">
                          {t('contact.nameLabel')} <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t('contact.placeholders.name')}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400">
                          {t('contact.emailLabel')} <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t('contact.placeholders.email')}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* What are you looking for */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400">
                        {t('contact.serviceLabel')}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-sm text-slate-100 focus:outline-none focus:border-cyan-400/70 transition-all"
                      >
                        <option value="Custom ERP / POS System">{t('contact.services.erp')}</option>
                        <option value="React Native Mobile App">{t('contact.services.mobile')}</option>
                        <option value="Web Application / Next.js">{t('contact.services.web')}</option>
                        <option value="AI Integration / Search Engine">{t('contact.services.ai')}</option>
                        <option value="Technical Consulting">{t('contact.services.consulting')}</option>
                        <option value="Job / Full-time Role">{t('contact.services.job')}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-400">
                        {t('contact.messageLabel')} <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('contact.placeholders.message')}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-sm shadow-glow-cyan transition-all flex items-center justify-center gap-2 group"
                    >
                      <Send className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                      <span>{t('contact.sendBtn')}</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
