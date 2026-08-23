import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, animate } from 'framer-motion';
import { 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  Terminal, 
  FileText
} from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
  isRtl: boolean;
}

/** Count-up number animation — runs once when the element enters the viewport */
function CountUp({
  to,
  suffix = '',
  className,
}: {
  to: number | null;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || to === null || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        el.textContent = `${Math.round(value)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return (
    <span ref={ref} className={className}>
      {to !== null ? `0${suffix}` : ''}
    </span>
  );
}

export const Hero: React.FC<HeroProps> = ({ setActiveSection, isRtl }) => {
  const { t } = useTranslation();
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = t('hero.taglines', { returnObjects: true }) as string[];

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % (taglines.length || 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [taglines]);

  const stats = [
    {
      label: t('hero.stats.expYears'),
      numericValue: 2, suffix: '+',
      textValue: null,
      sub: 'Years Production',
      accent: 'border-amber-400/60',
      valueColor: 'text-amber-400',
    },
    {
      label: t('hero.stats.liveSystems'),
      numericValue: 10, suffix: '+',
      textValue: null,
      sub: 'Active Platforms',
      accent: 'border-cyan-400/60',
      valueColor: 'text-cyan-400',
    },
    {
      label: t('hero.stats.offlineSync'),
      numericValue: 100, suffix: '%',
      textValue: null,
      sub: 'Zero-Data Loss',
      accent: 'border-emerald-400/60',
      valueColor: 'text-emerald-400',
    },
    {
      label: t('hero.stats.ledgersHandled'),
      numericValue: null, suffix: '',
      textValue: 'Auditable',
      sub: 'Append-Only',
      accent: 'border-violet-400/60',
      valueColor: 'text-violet-400',
    },
  ];

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center pt-4 pb-12 overflow-hidden w-full max-w-full">
      {/* Dot grid texture — handcrafted design signature */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      {/* Fade edges of the dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14] via-transparent to-[#0A0D14] pointer-events-none opacity-70" />

      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-8">
        
        {/* Animated Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-850/90 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-semibold shadow-glow-cyan/10 max-w-full"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow shrink-0" />
          <span className="truncate">{t('hero.statusPill')}</span>
        </motion.div>

        {/* Headline & Typewriter Title */}
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 font-medium text-base sm:text-lg tracking-wide"
          >
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.15]"
          >
            <span className="text-gradient-cyan">{t('hero.name')}</span>
          </motion.h1>

          {/* Dynamic Tagline Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="min-h-[50px] flex items-center"
          >
            <motion.p
              key={taglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl md:text-3xl font-bold text-gradient-violet leading-tight"
            >
              {taglines[taglineIndex] || taglines[0]}
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-normal"
          >
            {t('hero.description')}
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              setActiveSection('projects');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-electric-600 hover:from-cyan-400 hover:to-electric-500 text-white font-semibold text-sm shadow-glow-cyan transition-all flex items-center justify-center gap-2"
          >
            <span>{t('hero.ctaProjects')}</span>
            <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>

          <button
            onClick={() => {
              setActiveSection('erp');
              document.getElementById('erp')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-violet-500/50 text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Cpu className="w-4 h-4 text-violet-400" />
            <span>{t('hero.ctaErp')}</span>
          </button>

          <a
            href="mailto:Badraldeenrasea@gmail.com?subject=Requesting%20CV%20/%20Resume%20-%20Badr%20Al-deen%20Rasea"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-850 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 text-sm font-semibold transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>{t('hero.ctaResume')}</span>
          </a>
        </motion.div>

        {/* Stats Counter Grid — numbers count up when entering view */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl bg-[#0C1019]/80 border border-slate-800/60 border-l-2 rtl:border-l-0 rtl:border-r-2 ${stat.accent} hover:bg-slate-900/60 transition-all text-left rtl:text-right`}
            >
              <p className={`text-2xl sm:text-4xl font-extrabold ${stat.valueColor}`}>
                {stat.numericValue !== null ? (
                  <CountUp to={stat.numericValue} suffix={stat.suffix} />
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + idx * 0.1 }}
                  >
                    {stat.textValue}
                  </motion.span>
                )}
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-slate-300 mt-1 line-clamp-1">{stat.label}</p>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-1">{stat.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Code Preview with scan line — live terminal feel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 rounded-2xl bg-[#090C12] border border-slate-800 text-[11px] sm:text-xs font-mono shadow-2xl overflow-hidden w-full max-w-full relative"
        >
          {/* Scan line sweeping top→bottom */}
          <div className="scan-line" />

          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-bold truncate">stock-ledger.service.ts</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
            </div>
            <pre className="mt-3 text-slate-300 overflow-x-auto leading-relaxed max-w-full">
              <code>
                <span className="text-violet-400">async</span> <span className="text-cyan-300">recordStockMovement</span>(
                <span className="text-emerald-300">payload</span>: StockPayload) {'{\n'}
                {'  '}<span className="text-slate-500">// Append-Only Immutable Stock Ledger Journaling</span>{'\n'}
                {'  '}<span className="text-violet-400">return await</span> <span className="text-cyan-400">this</span>.prisma.<span className="text-yellow-300">stockLedger</span>.<span className="text-cyan-300">create</span>{'{ \n'}
                {'    '}data: {'{ \n'}
                {'      '}itemUuid: payload.itemUuid, {'\n'}
                {'      '}movementType: payload.type, <span className="text-slate-500">// SALE, PURCHASE, RETURN, BOM_DEDUCT</span>{'\n'}
                {'      '}unitQtyDelta: payload.qty, {'\n'}
                {'      '}dualPriceCartonRatio: payload.conversionRatio, {'\n'}
                {'      '}signatureHash: <span className="text-cyan-400">this</span>.<span className="text-yellow-300">generateAuditHash</span>(payload){'\n'}
                {'    '}{'}\n'}
                {'  '}{'}'});{'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
