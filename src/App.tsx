import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { ErpArchitecture } from './components/ErpArchitecture';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';

export function App() {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');
  const isRtl = i18n.language === 'ar';
  const ambientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    if (isRtl) {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [isRtl, i18n.language]);

  // Cursor-following ambient light — updates via direct DOM for perf (no React re-render)
  useEffect(() => {
    const el = ambientRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top  = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className={`min-h-screen bg-[#0A0D14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 overflow-x-hidden w-full max-w-full relative ${isRtl ? 'font-arabic' : 'font-sans'}`}>

      {/* ── Global animation layers ── */}

      {/* 1. Spring cursor (desktop only) */}
      <Cursor />

      {/* 2. Scroll progress bar */}
      <ScrollProgress />

      {/* 3. Cursor-following ambient light (desktop only, DOM-driven for perf) */}
      <div ref={ambientRef} className="cursor-ambient pointer-only" />

      {/* 4. Film grain overlay — animated noise texture */}
      {/* SVG feTurbulence filter source (invisible) */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%"
            colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68 0.72"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blended" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.08" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div className="grain-overlay" style={{ filter: 'url(#grain-filter)' }} />

      {/* 5. Aurora background blobs */}
      <div className="aurora-blob-1" />
      <div className="aurora-blob-2" />
      <div className="aurora-blob-3" />

      {/* ── Navigation ── */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isRtl={isRtl}
        toggleLanguage={toggleLanguage}
      />

      {/* ── Main content ── */}
      <main className={`w-full max-w-full transition-all duration-300 px-4 sm:px-8 lg:px-12 pt-20 lg:pt-8 ${
        isRtl ? 'lg:mr-28' : 'lg:ml-28'
      }`}>
        <Hero setActiveSection={setActiveSection} isRtl={isRtl} />
        <TechStack isRtl={isRtl} />
        <ErpArchitecture isRtl={isRtl} />
        <Projects isRtl={isRtl} />
        <Gallery isRtl={isRtl} />
        <Experience isRtl={isRtl} />
        <Contact isRtl={isRtl} />
        <Footer isRtl={isRtl} />
      </main>

    </div>
  );
}

export default App;
