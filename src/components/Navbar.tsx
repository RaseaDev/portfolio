import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Cpu, 
  Briefcase, 
  Image as GalleryIcon, 
  UserCheck, 
  Mail, 
  Globe, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isRtl: boolean;
  toggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  isRtl,
  toggleLanguage
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: t('nav.home'), icon: Home },
    { id: 'erp', label: t('nav.erp'), icon: Cpu },
    { id: 'projects', label: t('nav.projects'), icon: Briefcase },
    { id: 'gallery', label: t('nav.gallery'), icon: GalleryIcon },
    { id: 'experience', label: t('nav.experience'), icon: UserCheck },
    { id: 'contact', label: t('nav.contact'), icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* DESKTOP FLOATING ANIMATED SIDEBAR (lg and up) */}
      <motion.aside
        initial={false}
        animate={{ width: isHovered ? 280 : 80 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hidden lg:flex fixed top-6 bottom-6 z-50 flex-col bg-[#0C1019]/90 backdrop-blur-2xl border border-slate-700/70 rounded-[32px] p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden justify-between ${
          isRtl ? 'right-6' : 'left-6'
        }`}
      >
        {/* Top Header & Avatar */}
        <div className="flex flex-col items-center justify-center pt-1 pb-4 border-b border-slate-800/80 w-full">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="relative cursor-pointer shrink-0"
            onClick={() => handleNavClick('hero')}
          >
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-cyan-500 via-electric-500 to-violet-500 p-[2px] shadow-glow-cyan">
              <div className="w-full h-full bg-[#0A0D14] rounded-[14px] flex items-center justify-center font-extrabold text-lg tracking-wider text-cyan-400">
                BR
              </div>
            </div>
            {/* Status Indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0A0D14]"></span>
            </span>
          </motion.div>

          {/* Expanded Profile Info */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-3 text-center space-y-1 overflow-hidden whitespace-nowrap"
              >
                <h2 className="text-base font-bold text-slate-100 tracking-tight flex items-center justify-center gap-1.5">
                  {t('nav.brandName')}
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                </h2>
                <p className="text-[11px] text-cyan-400 font-medium">{t('nav.role')}</p>
                
                <div className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {t('nav.available')}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Center Nav Items Stack */}
        <nav className="my-auto py-2 space-y-3 w-full flex flex-col items-center justify-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <div key={item.id} className="relative w-full group flex justify-center">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative w-full flex items-center transition-all duration-300 ${
                    isHovered 
                      ? `px-2.5 py-2 rounded-2xl gap-3.5 ${
                          isActive 
                            ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/15 border border-cyan-500/40 text-cyan-300' 
                            : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-100'
                        }` 
                      : 'justify-center p-0 bg-transparent border-0'
                  }`}
                >
                  {/* Single Clean Squircle Icon Card */}
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                      isActive
                        ? 'bg-gradient-to-tr from-cyan-500 to-electric-600 text-white shadow-glow-cyan border border-cyan-300/60 ring-2 ring-cyan-500/30'
                        : 'bg-slate-850/90 text-slate-400 border border-slate-700/60 group-hover:text-cyan-300 group-hover:bg-slate-800 group-hover:border-cyan-500/50 shadow-sm'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Nav Label Text (Shown on Sidebar Hover) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="whitespace-nowrap font-semibold text-xs sm:text-sm text-slate-200"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {/* Floating Tooltip Pill (Shown when sidebar is collapsed) */}
                {!isHovered && (
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 z-50 px-3.5 py-1.5 rounded-xl bg-[#0F1420] text-cyan-300 text-xs font-semibold border border-cyan-500/40 shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap ${
                      isRtl ? 'right-full mr-4' : 'left-full ml-4'
                    }`}
                  >
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom Dock Footer */}
        <div className="pt-4 border-t border-slate-800/80 space-y-3 w-full flex flex-col items-center justify-center">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className={`w-full flex items-center transition-all ${
              isHovered
                ? 'px-2.5 py-2 rounded-2xl gap-3 bg-slate-850 hover:bg-slate-800 border border-slate-700/60'
                : 'justify-center p-0 bg-transparent border-0'
            }`}
            title={t('nav.langSwitch')}
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-850/90 border border-slate-700/60 hover:border-cyan-500/50 flex items-center justify-center shrink-0 text-cyan-400 hover:text-cyan-300 transition-all shadow-sm">
              <Globe className="w-5 h-5" />
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="whitespace-nowrap text-xs overflow-hidden font-semibold text-slate-200"
                >
                  {t('nav.langSwitch')}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-2 text-slate-400 w-full">
            <a
              href="https://github.com/baderrasea"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-12 h-12 rounded-2xl bg-slate-850/90 hover:bg-cyan-500/20 hover:text-cyan-400 border border-slate-700/60 flex items-center justify-center transition-all shrink-0 shadow-sm"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <a
                  href="mailto:Badraldeenrasea@gmail.com"
                  aria-label="Email Direct"
                  className="w-10 h-10 rounded-2xl bg-slate-850 hover:bg-cyan-500/20 hover:text-cyan-400 border border-slate-700/60 flex items-center justify-center transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/967773421179"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Direct"
                  className="w-10 h-10 rounded-2xl bg-slate-850 hover:bg-emerald-500/20 hover:text-emerald-400 border border-slate-700/60 flex items-center justify-center text-xs font-extrabold transition-all"
                >
                  WA
                </a>
              </motion.div>
            )}
          </div>
        </div>

        {/* Hover Arrow Cue */}
        <div className="absolute top-1/2 -translate-y-1/2 right-1 rtl:right-auto rtl:left-1 text-slate-600 pointer-events-none opacity-30">
          {isHovered ? (
            isRtl ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />
          ) : (
            isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />
          )}
        </div>
      </motion.aside>

      {/* MOBILE TOP BAR (lg and down) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0A0D14]/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 p-[1.5px]">
            <div className="w-full h-full bg-[#0A0D14] rounded-[10px] flex items-center justify-center font-bold text-sm text-cyan-400">
              BR
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-100">{t('nav.brandName')}</h2>
            <p className="text-[10px] text-cyan-400">{t('nav.role')}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-cyan-400 flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isRtl ? 'EN' : 'عربي'}</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-[57px] z-40 bg-[#0F1420]/95 backdrop-blur-2xl border-b border-slate-800 p-5 shadow-2xl space-y-2"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
