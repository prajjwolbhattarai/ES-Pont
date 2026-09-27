import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';

interface PhotoGalleryProps {
  initialOpenPhotoId?: string | null;
  onClearInitialPhoto?: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  initialOpenPhotoId,
  onClearInitialPhoto,
}) => {
  const { t, galleryPhotos } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: `${t.gallery.filterAll} (${galleryPhotos.length})` },
    { id: 'exterior', label: t.gallery.filterExterior },
    { id: 'interior', label: t.gallery.filterInterior },
    { id: 'bedrooms', label: t.gallery.filterBedrooms },
    { id: 'kitchen', label: t.gallery.filterKitchen },
    { id: 'surroundings', label: t.gallery.filterSurroundings }
  ];

  const categoryPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeCategory);

  const visiblePhotos = isExpanded ? categoryPhotos : categoryPhotos.slice(0, 12);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsZoomed(false);
    if (onClearInitialPhoto) onClearInitialPhoto();
  };

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryPhotos.length : 0));
    setIsZoomed(false);
  }, [lightboxIndex, galleryPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryPhotos.length) % galleryPhotos.length : 0
    );
    setIsZoomed(false);
  }, [lightboxIndex, galleryPhotos.length]);

  useEffect(() => {
    if (initialOpenPhotoId) {
      const idx = galleryPhotos.findIndex((p) => p.id === initialOpenPhotoId);
      if (idx !== -1) {
        setLightboxIndex(idx);
      }
    }
  }, [initialOpenPhotoId, galleryPhotos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] text-[#2D2825] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with GFS Didot Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.gallery.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-light tracking-tight text-[#2D2825]">
              {t.gallery.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#5C554E] mt-2 font-light max-w-2xl">
              {t.gallery.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openLightbox(0)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E8E2D8] bg-white hover:bg-[#F4EFEB] text-[#2D2825] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#C59B4D]" />
              <span>{t.gallery.openLightbox}</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setIsExpanded(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2D2825] text-white shadow-xs'
                  : 'bg-white hover:bg-[#F4EFEB] text-[#5C554E] border border-[#E8E2D8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Uniform Grid: Clean Images with Description Underneath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => {
            const originalIndex = galleryPhotos.findIndex((p) => p.id === photo.id);

            return (
              <div
                key={photo.id}
                className="group rounded-2xl bg-white border border-[#E8E2D8] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div
                  onClick={() => openLightbox(originalIndex !== -1 ? originalIndex : index)}
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#F4EFEB]"
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading={index < 6 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                  />

                  {/* Expand icon on hover */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#2D2825]/75 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Text Underneath: Only Description */}
                <div className="p-4 bg-white border-t border-[#F4EFEB] flex-1 flex flex-col justify-center">
                  <p className="text-xs sm:text-[13px] text-[#4A433D] font-light leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {categoryPhotos.length > 12 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#E8E2D8] bg-white hover:bg-[#F4EFEB] text-[#2D2825] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-sm cursor-pointer"
            >
              <span>
                {isExpanded
                  ? t.gallery.showPreview
                  : t.gallery.showAll}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal: Shows the full-size uncropped photo with high-res zoom */}
      {lightboxIndex !== null && galleryPhotos[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-[#151413]/95 backdrop-blur-md flex flex-col justify-between select-none animate-in fade-in duration-200">
          
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-stone-200 border-b border-stone-800">
            <div className="text-xs sm:text-sm font-medium tracking-wide">
              <span className="font-serif-luxury text-base text-stone-200 tracking-wider">
                ES PONT
              </span>
              <span className="mx-2 text-stone-600">·</span>
              <span className="text-[#D8B475] uppercase text-[11px] tracking-wider">
                Son Vida, Mallorca
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 text-xs transition-colors cursor-pointer"
                title="Toggle Full Resolution Zoom"
              >
                {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                <span>{isZoomed ? t.gallery.fitToScreen : t.gallery.fullSize}</span>
              </button>

              <button
                onClick={closeLightbox}
                className="p-2 rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close photo viewer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage: Full Size Photo */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto max-h-[78vh]">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-stone-900/85 hover:bg-stone-800 text-white border border-stone-700/60 shadow-lg transition-transform active:scale-95 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Photo in Full Original Proportions */}
            <div className="max-w-full max-h-full flex items-center justify-center">
              <img
                src={galleryPhotos[lightboxIndex].url}
                alt={galleryPhotos[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                className={`rounded-lg shadow-2xl transition-all duration-300 ${
                  isZoomed
                    ? 'max-h-none max-w-none scale-125 cursor-zoom-out'
                    : 'max-h-[74vh] max-w-[90vw] object-contain cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-stone-900/85 hover:bg-stone-800 text-white border border-stone-700/60 shadow-lg transition-transform active:scale-95 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption and Thumbnails */}
          <div className="px-4 sm:px-6 py-3.5 bg-stone-950/90 border-t border-stone-800/80 text-stone-300">
            <div className="text-center max-w-3xl mx-auto mb-2.5">
              <p className="text-xs sm:text-sm font-light text-stone-200 leading-relaxed">
                {galleryPhotos[lightboxIndex].caption}
              </p>
            </div>

            {/* Thumbnail Ribbon for all photos */}
            <div className="hidden sm:flex items-center justify-center gap-1.5 overflow-x-auto max-w-5xl mx-auto pb-1 no-scrollbar">
              {galleryPhotos.map((photo, i) => (
                <button
                  key={photo.id}
                  onClick={() => {
                    setLightboxIndex(i);
                    setIsZoomed(false);
                  }}
                  className={`relative w-12 h-9 rounded overflow-hidden shrink-0 transition-all cursor-pointer ${
                    lightboxIndex === i
                      ? 'ring-2 ring-[#D8B475] opacity-100 scale-105'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                  aria-label={`View photo ${i + 1}`}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
