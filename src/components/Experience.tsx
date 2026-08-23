import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { workExperienceData, educationData } from '../data/experienceData';
import { 
  Briefcase,
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Building2,
  FileText
} from 'lucide-react';

interface ExperienceProps {
  isRtl: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isRtl }) => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="section-number">03 — Experience</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              {t('experience.title')}
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              {t('experience.subtitle')}
            </p>
          </div>

          <a
            href="/files/Badr_Al-deen_Rasea_CV-sumi-final.pdf"
            download="Badr_Al-deen_Rasea_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 self-start sm:self-auto px-4 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold transition-all flex items-center gap-2 shadow-sm"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>{t('experience.downloadCv')}</span>
          </a>
        </div>

        {/* WORK EXPERIENCE TIMELINE */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 pb-2 border-b border-slate-800">
            <Building2 className="w-5 h-5 text-cyan-400" />
            <span>{t('experience.timelineTitle')}</span>
          </h3>

          <div className="relative border-l-2 border-slate-800/80 rtl:border-r-2 rtl:border-l-0 space-y-10 pl-6 rtl:pl-0 rtl:pr-6 ml-3 rtl:ml-0 rtl:mr-3">
            {workExperienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24, clipPath: 'inset(30px 0px 0px 0px)' }}
                whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0px 0px 0px 0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group"
              >
                {/* Node Bullet Glow */}
                <div className="absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0A0D14] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-glow-cyan" />

                <div className="p-6 rounded-3xl glass-panel border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-4">
                  {/* Company & Role Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="px-2.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[11px] font-semibold">
                        {isRtl ? exp.typeAr : exp.type}
                      </span>
                      <h4 className="text-xl font-bold text-slate-100 mt-1">
                        {isRtl ? exp.roleAr : exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                        {isRtl ? exp.companyAr : exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col items-end rtl:items-start text-xs text-slate-400 space-y-1">
                      <span className="flex items-center gap-1 font-mono bg-slate-850 px-3 py-1 rounded-full border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {isRtl ? exp.periodAr : exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {isRtl ? exp.locationAr : exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {isRtl ? exp.summaryAr : exp.summary}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Engineering Output:</h5>
                    <div className="space-y-2">
                      {(isRtl ? exp.deliverablesAr : exp.deliverables).map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3">
                    {exp.techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-850 border border-slate-700/60 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 pb-2 border-b border-slate-800">
            <GraduationCap className="w-5 h-5 text-violet-400" />
            <span>{t('experience.educationTitle')}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-3xl glass-panel border border-slate-800/80 space-y-3 hover:border-violet-500/40 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-850 px-3 py-1 rounded-full border border-slate-800">
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-100">
                    {isRtl ? edu.degreeAr : edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-violet-400 mt-0.5">
                    {isRtl ? edu.institutionAr : edu.institution} — {edu.location}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {isRtl ? edu.detailsAr : edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
