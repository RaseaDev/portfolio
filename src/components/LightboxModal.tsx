import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '../data/galleryData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  isRtl: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
  isRtl
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06080D]/95 backdrop-blur-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-all shadow-xl"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-all shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 rtl:right-auto rtl:left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-all shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-[65vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Details Bar */}
          <div className="mt-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-2xl w-full text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold">
                {isRtl ? item.categoryLabelAr : item.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-100">
              {isRtl ? item.titleAr : item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              {isRtl ? item.descriptionAr : item.description}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
