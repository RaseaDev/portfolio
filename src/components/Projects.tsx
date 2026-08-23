import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, Project } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Eye } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface ProjectsProps {
  isRtl: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isRtl }) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'erp' | 'aiMobile' | 'websites'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterButtons = [
    { id: 'all', label: t('projects.filters.all') },
    { id: 'erp', label: t('projects.filters.erp') },
    { id: 'aiMobile', label: t('projects.filters.aiMobile') },
    { id: 'websites', label: t('projects.filters.websites') }
  ];

  // Top-border accent per category — breaks identical-card monotony
  const categoryAccent: Record<string, string> = {
    erp: 'border-t-cyan-500/70',
    aiMobile: 'border-t-amber-400/70',
    websites: 'border-t-violet-500/70',
  };

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 sm:py-16 relative overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header — numbered */}
        <div className="space-y-1">
          <p className="section-number">02 — Work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Category Filter — loose pills, not a contained box */}
        <div className="flex flex-wrap items-center gap-2">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                filter === btn.id
                  ? 'bg-amber-400/10 border-amber-400/50 text-amber-300'
                  : 'border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, clipPath: 'inset(20px 0px 0px 0px)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0px 0px 0px 0px)' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group p-5 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between space-y-5 border border-slate-800/80 border-t-2 ${categoryAccent[project.category] ?? 'border-t-slate-700/60'}`}
              >
                <div className="space-y-4">
                  {/* Aspect 16:9 Image Banner with zoom effect */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[11px] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {isRtl ? project.statusAr : project.status}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-slate-300 uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {isRtl ? project.titleAr : project.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {isRtl ? project.subtitleAr : project.subtitle}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-850 border border-slate-800 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-850 text-[10px] text-cyan-400 font-mono">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-all flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t('projects.viewModal')}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-850 hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 border border-slate-800 transition-all"
                        aria-label="Visit Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-850 hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 border border-slate-800 transition-all"
                        aria-label="View Github"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Render Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isRtl={isRtl}
        />

      </div>
    </section>
  );
};
