import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData, GalleryItem } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';
import { Image as GalleryIcon, Maximize2, Sparkles } from 'lucide-react';

interface GalleryProps {
  isRtl: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ isRtl }) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'pos' | 'erp' | 'mobile' | 'web'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: t('gallery.categories.all') },
    { id: 'pos', label: t('gallery.categories.pos') },
    { id: 'erp', label: t('gallery.categories.erp') },
    { id: 'mobile', label: t('gallery.categories.mobile') },
    { id: 'web', label: t('gallery.categories.web') }
  ];

  const filteredItems = filter === 'all'
    ? galleryData
    : galleryData.filter(g => g.category === filter);

  return (
    <section id="gallery" className="py-16 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
            <GalleryIcon className="w-4 h-4 text-violet-400" />
            <span>UI/UX & Screenshots Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            <span className="text-gradient-violet">{t('gallery.title')}</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
          <p className="text-xs text-cyan-400 font-mono flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('gallery.zoomHint')}</span>
          </p>
        </div>

        {/* Filter Bar — horizontal scrollable pills, never wraps onto second line */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide justify-center flex-wrap sm:flex-nowrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-violet-500/10 border-violet-400/50 text-violet-300'
                  : 'border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveItem(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-slate-800 bg-slate-900 glass-panel-hover"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Card Text Content */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold border border-cyan-500/30">
                    {isRtl ? item.categoryLabelAr : item.categoryLabel}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-100 line-clamp-1 group-hover:text-cyan-300 transition-colors">
                    {isRtl ? item.titleAr : item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={activeItem}
          items={filteredItems}
          onClose={() => setActiveItem(null)}
          onSelect={(itm) => setActiveItem(itm)}
          isRtl={isRtl}
        />

      </div>
    </section>
  );
};
