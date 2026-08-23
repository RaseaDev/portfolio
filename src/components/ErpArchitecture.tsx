import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { erpArchitectureData } from '../data/erpData';
import { 
  Cpu, 
  Layers, 
  RefreshCw, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Printer, 
  Server,
  FileCheck,
  Truck
} from 'lucide-react';

interface ErpArchitectureProps {
  isRtl: boolean;
}

export const ErpArchitecture: React.FC<ErpArchitectureProps> = ({ isRtl }) => {
  const { t } = useTranslation();
  const [activeErp, setActiveErp] = useState<'pos' | 'factory'>('pos');

  const currentErp = erpArchitectureData[activeErp];

  return (
    <section id="erp" className="py-12 sm:py-16 relative overflow-hidden w-full max-w-full">
      {/* Background Radial Glow */}
      <div className={`radial-blur-violet top-1/4 ${isRtl ? 'right-0' : 'left-0'}`} />

      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
            <Cpu className="w-4 h-4 text-violet-400" />
            <span>Specialized Engineering Highlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            <span className="text-gradient-violet">{t('erp.title')}</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {t('erp.subtitle')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 max-w-xl mx-auto">
          <button
            onClick={() => setActiveErp('pos')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeErp === 'pos'
                ? 'bg-gradient-to-r from-cyan-500 to-electric-600 text-white shadow-glow-cyan/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>{t('erp.posTab')}</span>
          </button>

          <button
            onClick={() => setActiveErp('factory')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeErp === 'factory'
                ? 'bg-gradient-to-r from-violet-600 to-electric-600 text-white shadow-glow-violet/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>{t('erp.factoryTab')}</span>
          </button>
        </div>

        {/* Active ERP Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeErp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800/90 space-y-8 shadow-2xl"
          >
            {/* Top Overview */}
            <div className="space-y-4 pb-6 border-b border-slate-800">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                {isRtl ? currentErp.badgeAr : currentErp.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                {isRtl ? currentErp.headlineAr : currentErp.headline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {isRtl ? currentErp.descriptionAr : currentErp.description}
              </p>
            </div>

            {/* Pipeline Step Diagrams */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>{t('erp.diagramTitle')}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentErp.pipelineSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative p-5 rounded-2xl bg-slate-850/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                          STAGE {step.stepNumber}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{step.techTag}</span>
                      </div>
                      <h5 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {isRtl ? step.titleAr : step.title}
                      </h5>
                      <p className="text-xs text-slate-400 mt-1">
                        {isRtl ? step.subtitleAr : step.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                      {(isRtl ? step.detailsAr : step.details).map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Ledger Mechanics Highlights */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-violet-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>{t('erp.featuresTitle')}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentErp.ledgerHighlights.map((hl, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                    <h5 className="text-sm font-bold text-slate-200">{isRtl ? hl.titleAr : hl.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{isRtl ? hl.descAr : hl.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <span className="text-xs text-slate-500 font-semibold">{t('erp.architectureChips')}:</span>
              {currentErp.architectureChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
