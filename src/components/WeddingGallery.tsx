import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, ZoomIn, X, Camera, Upload, Sparkles } from 'lucide-react';
import { BotanicalBranch } from './BotanicalDecoration';

// Assets
import imgHero from '../assets/images/wedding_hero_cinematic_1790848020262.jpg';
import imgPortrait from '../assets/images/wedding_couple_portrait_1790847289808.jpg';
import imgFloral from '../assets/images/wedding_floral_detail_1790847302573.jpg';
import imgProposal from '../assets/images/wedding_love_proposal_1790848034643.jpg';
import imgVenue from '../assets/images/wedding_coastal_venue_1790848051165.jpg';
import imgThankYou from '../assets/images/wedding_thank_you_1790848062714.jpg';

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  aspect: string;
}

export const WeddingGallery: React.FC = () => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [photoMode, setPhotoMode] = useState<'editorial' | 'placeholder'>('editorial');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; caption: string } | null>(null);

  // Touch gesture support on mobile
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const galleryItems: GalleryPhoto[] = [
    {
      id: 'g-1',
      src: imgHero,
      title: 'Bình Minh & Hoàng Hôn Biển',
      subtitle: 'Phan Thiết, 2026',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'g-2',
      src: imgPortrait,
      title: 'Hồng Hải & Thanh Tú',
      subtitle: 'Khoảnh khắc trọn vẹn',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 'g-3',
      src: imgFloral,
      title: 'Hoa Cưới Tinh Khôi',
      subtitle: 'Hương thơm thuần khiết',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'g-4',
      src: imgProposal,
      title: 'Lời Hẹn Ước Trăm Năm',
      subtitle: 'Ánh nến & Trao nhẫn',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'g-5',
      src: imgVenue,
      title: 'Khách Sạn Bình Minh',
      subtitle: 'Không gian tiệc cưới ven biển',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'g-6',
      src: imgThankYou,
      title: 'Nụ Cười Hạnh Phúc',
      subtitle: 'Chung đôi trọn đời',
      aspect: 'aspect-[3/4]',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <BotanicalBranch position="top-left" size="lg" className="top-4 left-4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.28em] text-[#9E7D3B] font-semibold mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Wedding Photo Album</span>
            <Camera className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Khoảnh Khắc Kỷ Niệm
          </h2>
          <BotanicalBranch position="center-divider" className="my-2" />
          <p className="text-stone-600 text-sm leading-relaxed text-balance">
            Những giây phút thiêng liêng và ngọt ngào được ghi dấu trong hành trình yêu thương của chúng mình.
          </p>

          {/* Controls: View Mode & Placeholder Mode */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-1 bg-[#F0EAE1] rounded-full border border-[#DFD5C5]">
              <button
                onClick={() => setViewMode('carousel')}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === 'carousel'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Trình Chiếu (Vuốt)</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Lưới Ảnh (Toàn Bộ)</span>
              </button>
            </div>

            {/* Photo Mode Toggle */}
            <div className="inline-flex items-center p-1 bg-[#F0EAE1] rounded-full border border-[#DFD5C5]">
              <button
                onClick={() => setPhotoMode('editorial')}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  photoMode === 'editorial'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Ảnh Mẫu Nghệ Thuật
              </button>
              <button
                onClick={() => setPhotoMode('placeholder')}
                type="button"
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  photoMode === 'placeholder'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Khung Chờ Album (Placeholder)
              </button>
            </div>
          </div>
        </motion.div>

        {/* View Mode 1: Swipeable Carousel */}
        {viewMode === 'carousel' && (
          <div
            className="relative max-w-4xl mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Main Container */}
            <div className="overflow-hidden rounded-3xl bg-white p-3 sm:p-6 border border-[#E8DFC9] gold-shadow">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentIndex}-${photoMode}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    {photoMode === 'editorial' ? (
                      <>
                        <img
                          src={galleryItems[currentIndex].src}
                          alt={galleryItems[currentIndex].title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                          <span className="text-xs uppercase tracking-widest text-[#E8D4A8] font-medium">
                            {galleryItems[currentIndex].subtitle}
                          </span>
                          <h4 className="font-serif-luxury text-2xl sm:text-3xl mt-1">
                            {galleryItems[currentIndex].title}
                          </h4>
                        </div>
                        <button
                          onClick={() =>
                            setActiveLightboxImg({
                              src: galleryItems[currentIndex].src,
                              caption: galleryItems[currentIndex].title,
                            })
                          }
                          type="button"
                          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md backdrop-blur-sm transition-all"
                          title="Xem toàn màn hình"
                          aria-label="Xem ảnh phóng to"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <div className="w-full h-full border-2 border-dashed border-[#D5C7AD] bg-[#FAF8F5] flex flex-col items-center justify-center p-8 text-center">
                        <Camera className="w-10 h-10 text-[#9E7D3B] mb-2 opacity-60" />
                        <span className="font-display-luxury text-sm uppercase tracking-widest text-[#9E7D3B] font-semibold">
                          {galleryItems[currentIndex].title}
                        </span>
                        <p className="text-xs text-stone-400 mt-1 max-w-sm">
                          [Vị trí ảnh thứ {currentIndex + 1} trong album cưới. Chờ cặp đôi tải ảnh lên]
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Carousel Controls */}
                <button
                  onClick={prevSlide}
                  type="button"
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-stone-800 shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
                  aria-label="Ảnh trước"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  type="button"
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-stone-800 shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
                  aria-label="Ảnh kế tiếp"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Dot indicators */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {galleryItems.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-7 bg-[#9E7D3B]' : 'w-2 bg-[#D5C7AD]/60 hover:bg-[#9E7D3B]/60'
                    }`}
                    aria-label={`Xem ảnh ${idx + 1}`}
                  />
                ))}
              </div>
              <p className="text-center text-[11px] text-stone-400 mt-2 sm:hidden">
                (Vuốt ngang màn hình để xem ảnh kế tiếp)
              </p>
            </div>
          </div>
        )}

        {/* View Mode 2: Masonry Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="bg-white p-3 sm:p-4 rounded-3xl border border-[#E8DFC9] gold-shadow flex flex-col justify-between group cursor-pointer"
                onClick={() => {
                  if (photoMode === 'editorial') {
                    setActiveLightboxImg({ src: item.src, caption: item.title });
                  }
                }}
              >
                {photoMode === 'editorial' ? (
                  <div className={`relative ${item.aspect} rounded-2xl overflow-hidden bg-stone-100`}>
                    <img
                      src={item.src}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
                    </div>
                  </div>
                ) : (
                  <div className={`border-2 border-dashed border-[#D5C7AD] rounded-2xl ${item.aspect} bg-[#FAF8F5] flex flex-col items-center justify-center p-4 text-center`}>
                    <Camera className="w-6 h-6 text-[#9E7D3B] mb-1 opacity-60" />
                    <span className="text-xs font-serif-luxury font-medium text-stone-700">Khung ảnh #{idx + 1}</span>
                    <span className="text-[10px] text-stone-400 mt-0.5">[Placeholder]</span>
                  </div>
                )}

                <div className="pt-3 pb-1 text-center">
                  <h4 className="font-serif-luxury text-base font-semibold text-stone-900 group-hover:text-[#9E7D3B] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-stone-400 block mt-0.5">{item.subtitle}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveLightboxImg(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxImg(null)}
              type="button"
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 cursor-pointer"
              aria-label="Đóng ảnh"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeLightboxImg.src}
              alt={activeLightboxImg.caption}
              referrerPolicy="no-referrer"
              className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            <p className="text-white/85 text-sm mt-3 text-center font-serif-luxury italic">
              {activeLightboxImg.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
