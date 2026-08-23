import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { skillCategoriesData } from '../data/experienceData';
import { 
  Smartphone, 
  Layers, 
  Database, 
  RefreshCw, 
  Code, 
  Globe, 
  FileCode, 
  Palette, 
  Server, 
  Zap, 
  Cpu, 
  Radio, 
  ShieldCheck, 
  HardDrive, 
  FileText, 
  Activity, 
  Bot, 
  Mic, 
  Monitor, 
  Printer 
} from 'lucide-react';
import { FigmaIcon } from './BrandIcons';

interface TechStackProps {
  isRtl: boolean;
}

const iconMap: Record<string, any> = {
  Smartphone,
  Layers,
  Database,
  RefreshCw,
  Code,
  Globe,
  FileCode,
  Palette,
  Figma: FigmaIcon,
  Server,
  Zap,
  Cpu,
  Radio,
  ShieldCheck,
  HardDrive,
  FileText,
  Activity,
  Bot,
  Mic,
  Monitor,
  Printer
};

/** Renders proficiency as filled / half / empty dots  ●●●○○ */
function ProficiencyDots({ pct }: { pct: number }) {
  // Map percentage to 0–5 dots (every 20%)
  const filled = Math.round(pct / 20);
  return (
    <span className="flex items-center gap-[3px]" aria-label={`${pct}% proficiency`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-1.5 h-1.5 rounded-full transition-colors ${
            i < filled
              ? 'bg-amber-400'
              : 'bg-slate-700'
          }`}
        />
      ))}
    </span>
  );
}

export const TechStack: React.FC<TechStackProps> = ({ isRtl }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: t('tech.tabs.all') },
    { id: 'mobile', label: t('tech.tabs.mobile') },
    { id: 'frontend', label: t('tech.tabs.frontend') },
    { id: 'backend', label: t('tech.tabs.backend') },
    { id: 'database', label: t('tech.tabs.database') },
    { id: 'ai', label: t('tech.tabs.ai') }
  ];

  const filteredCategories = activeTab === 'all'
    ? skillCategoriesData
    : skillCategoriesData.filter(cat => cat.id === activeTab);

  return (
    <section id="tech-stack" className="py-12 sm:py-16 relative overflow-hidden w-full max-w-full">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Header — numbered, no pill badge */}
        <div className="space-y-1">
          <p className="section-number">01 — Skills</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {t('tech.title')}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            {t('tech.subtitle')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-amber-400/10 border-amber-400/50 text-amber-300'
                  : 'border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-8 pt-2">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category label */}
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-4 flex items-center gap-3">
                <span>{isRtl ? category.categoryAr : category.category}</span>
                <span className="flex-1 h-px bg-slate-800/80" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {category.skills.map((skill, idx) => {
                  const IconComponent = iconMap[skill.iconName] || Code;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0C1019]/70 border border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/50 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-slate-800/80 text-slate-300 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-colors shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-200 truncate">{skill.name}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{skill.level}</p>
                      </div>
                      <ProficiencyDots pct={skill.levelPercentage} />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
