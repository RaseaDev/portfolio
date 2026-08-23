import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/projectsData';
import { 
  X, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Globe 
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isRtl: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isRtl }) => {
  const { t } = useTranslation();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06080D]/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#0F1420] border border-slate-700/80 rounded-3xl shadow-2xl overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-700/60 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1420] via-[#0F1420]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                  {isRtl ? project.statusAr : project.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-xs font-semibold uppercase">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 drop-shadow-md">
                {isRtl ? project.titleAr : project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Subtitle / Overview */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed border-b border-slate-800 pb-6">
              {isRtl ? project.subtitleAr : project.subtitle}
            </p>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-rose-500/20 space-y-3">
                <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{t('projects.modal.problemTitle')}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isRtl ? project.problemStatementAr : project.problemStatement}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/20 space-y-3">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t('projects.modal.solutionTitle')}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isRtl ? project.solutionArchitectureAr : project.solutionArchitecture}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>{t('projects.modal.keyFeaturesTitle')}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(isRtl ? project.keyCapabilitiesAr : project.keyCapabilities).map((cap, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-850 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-violet-400 uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>{t('projects.modal.techStackTitle')}</span>
              </h3>

              <div className="flex flex-wrap items-center gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-electric-600 hover:from-cyan-400 hover:to-electric-500 text-white font-semibold text-xs shadow-glow-cyan transition-all flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{t('projects.liveDemo')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>{t('projects.githubRepo')}</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/60 text-xs font-semibold transition-all"
              >
                {t('projects.modal.close')}
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
