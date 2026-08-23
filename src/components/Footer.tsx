import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  isRtl: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isRtl }) => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-12 pb-8 text-xs text-slate-500">
      {/* SVG wave divider — replaces plain border-t */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 text-slate-800/50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C360,40 1080,0 1440,20 L1440,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-5 relative z-10">

        {/* Left — name + tagline */}
        <div className="text-center sm:text-left rtl:sm:text-right space-y-1">
          <p className="font-bold text-slate-300 text-sm tracking-tight">Badr Al-deen Rasea</p>
          <p className="text-slate-600 text-[11px]">
            Built from scratch with React, TypeScript & Tailwind.{' '}
            <span className="text-amber-500/70">No templates.</span>
          </p>
        </div>

        {/* Center — year */}
        <p className="text-slate-700 text-[10px] font-mono tracking-wider">
          © {new Date().getFullYear()}
        </p>

        {/* Right — back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-500 hover:text-slate-300 transition-all text-[11px] font-medium group"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          <span>Back to top</span>
        </button>

      </div>
    </footer>
  );
};
