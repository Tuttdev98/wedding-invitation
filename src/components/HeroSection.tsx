import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Clock, MapPin, Heart, MessageSquareHeart, Navigation, Sparkles, Image as ImageIcon, ZoomIn, Upload } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { BotanicalBranch } from './BotanicalDecoration';

// Assets
import heroCinematicImg from '../assets/images/wedding_hero_cinematic_1790848020262.jpg';

interface HeroSectionProps {
  onOpenRsvp: () => void;
  onOpenMap: () => void;
  onScrollToWishes: () => void;
  onOpenGiftBox?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRsvp,
  onOpenMap,
  onScrollToWishes,
}) => {
  const [photoMode, setPhotoMode] = useState<'editorial' | 'placeholder'>('editorial');
  const [customHeroImg, setCustomHeroImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBgLeft = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yBgRight = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomHeroImg(event.target.result as string);
          setPhotoMode('editorial');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentHeroImg = customHeroImg || heroCinematicImg;

  return (
    <section
      ref={containerRef}
      id="invitation"
      className="relative pt-12 pb-20 md:pt-18 md:pb-28 overflow-hidden"
    >
      {/* Botanical Corner Accents */}
      <BotanicalBranch position="top-right" size="lg" className="top-2 right-2" />
      <BotanicalBranch position="top-left" size="lg" className="top-2 left-2" />

      {/* Decorative Parallax Circles */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <motion.div
          style={{ y: yBgLeft }}
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
          className="w-[650px] h-[650px] rounded-full border border-[#EFECE6]/90 -top-24 -left-24 absolute"
        />
        <motion.div
          style={{ y: yBgRight }}
          animate={{ rotate: -360 }}
          transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
          className="w-[550px] h-[550px] rounded-full border border-[#E8DFC9]/40 top-40 -right-24 absolute"
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Monogram Seal with Soft Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center mb-6"
        >
          <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full border border-[#D1C3A5] p-1.5 flex items-center justify-center bg-white/85 shadow-md backdrop-blur-sm animate-float-gentle">
            <div className="w-full h-full rounded-full border border-dashed border-[#B89E6C]/70 flex items-center justify-center bg-[#FAF6EE]/60">
              <span className="font-serif-luxury text-2xl sm:text-3xl italic text-[#9E7D3B] tracking-widest font-normal">
                H & T
              </span>
            </div>
          </div>
        </motion.div>

        {/* Header subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E5DAC1] backdrop-blur-xs shadow-2xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#9E7D3B]" />
            <span className="font-display-luxury text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#9E7D3B] font-semibold">
              Trân Trọng Báo Hỷ · Wedding Invitation
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#9E7D3B]" />
          </div>
        </motion.div>

        {/* Couple Names: Soft Slide-Up & Fade-In with Blur Settle */}
        <div className="space-y-1 mb-6 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal text-stone-900 tracking-tight text-balance leading-tight"
          >
            Nguyễn Thị Hồng Hải
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex items-center justify-center gap-4 my-2.5"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              style={{ transformOrigin: 'right center' }}
              className="h-px w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#C8A359] to-[#C8A359]"
            />
            <span className="font-script-luxury text-3xl sm:text-5xl text-[#9E7D3B] font-light">&</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              style={{ transformOrigin: 'left center' }}
              className="h-px w-14 sm:w-24 bg-gradient-to-r from-[#C8A359] via-[#C8A359] to-transparent"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal text-stone-900 tracking-tight text-balance leading-tight"
          >
            Trương Thanh Tú
          </motion.h2>
        </div>

        {/* Warm invitation quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="max-w-2xl mx-auto mb-10 px-4"
        >
          <div className="relative py-2">
            <p className="font-serif-luxury text-xl sm:text-2xl italic text-stone-700 font-normal leading-relaxed text-balance">
              “{WEDDING_DATA.invitationMessage}”
            </p>
            <div className="mt-3.5 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#9E7D3B]">
              <span>Tình yêu bắt đầu từ sự sẻ chia</span>
              <span aria-hidden="true">·</span>
              <span>Đơm hoa kết trái bằng sự gắn kết</span>
            </div>
          </div>
        </motion.div>

        {/* Large Editorial Cinematic Hero Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white p-3 sm:p-5 rounded-3xl border border-[#E8DFC9] gold-shadow relative overflow-hidden group">
            {photoMode === 'editorial' ? (
              <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src={currentHeroImg}
                  alt="Ảnh cưới cinematic Nguyễn Thị Hồng Hải & Trương Thanh Tú"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white text-left">
                  <span className="font-script-luxury text-2xl sm:text-4xl text-[#EBD7A7]">
                    Forever begins today
                  </span>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-200 mt-1">
                    <span>28.11.2026</span>
                    <span aria-hidden="true">·</span>
                    <span>18:00</span>
                    <span aria-hidden="true">·</span>
                    <span>Khách sạn Bình Minh, Phan Thiết</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 hover:bg-white text-stone-800 shadow-md backdrop-blur-sm text-xs font-medium transition-all"
                    title="Tải ảnh bìa của bạn"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#9E7D3B]" />
                    <span className="hidden sm:inline">Thay ảnh bìa</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl border-2 border-dashed border-[#D5C7AD] bg-[#FAF8F5] flex flex-col items-center justify-center p-8 text-center">
                <ImageIcon className="w-10 h-10 text-[#9E7D3B] mb-2 opacity-60" />
                <span className="font-display-luxury text-sm uppercase tracking-widest text-[#9E7D3B] font-semibold">
                  Ảnh Bìa Hero Toàn Cảnh
                </span>
                <p className="text-xs text-stone-400 mt-1 max-w-md">
                  [Vị trí ảnh bìa toàn màn hình cho thiệp cưới. Nhấn nút bên dưới để chọn ảnh của bạn]
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                    className="px-4 py-2 rounded-full bg-[#9E7D3B] text-white text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-xs"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Tải ảnh lên</span>
                  </button>
                  <button
                    onClick={() => setPhotoMode('editorial')}
                    type="button"
                    className="px-4 py-2 rounded-full bg-white border border-[#D5C7AD] text-stone-700 text-xs font-medium"
                  >
                    Xem ảnh mẫu gợi ý
                  </button>
                </div>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleCustomUpload}
            accept="image/*"
            className="hidden"
          />
        </motion.div>

        {/* Time & Venue highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          whileHover={{ y: -3, transition: { duration: 0.25 } }}
          className="inline-block w-full max-w-2xl bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#EAE3D2] gold-shadow mb-10 transition-colors duration-300 hover:border-[#D1C3A5]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
            {/* Date */}
            <div className="flex flex-col items-center pt-2 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-full bg-[#FAF6EE] text-[#9E7D3B] flex items-center justify-center mb-2.5 shadow-2xs">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-1">
                Ngày Cưới
              </span>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-stone-900">
                28 / 11 / 2026
              </span>
              <span className="text-xs text-stone-500 mt-0.5">
                Thứ Bảy · 19/10 Âm Lịch
              </span>
            </div>

            {/* Time */}
            <div className="flex flex-col items-center pt-4 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-full bg-[#FAF6EE] text-[#9E7D3B] flex items-center justify-center mb-2.5 shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-1">
                Thời Gian
              </span>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-stone-900">
                18:00
              </span>
              <span className="text-xs text-stone-500 mt-0.5">
                Đón khách từ 17:30
              </span>
            </div>

            {/* Venue */}
            <div className="flex flex-col items-center pt-4 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-full bg-[#FAF6EE] text-[#9E7D3B] flex items-center justify-center mb-2.5 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-stone-500 font-medium mb-1">
                Địa Điểm
              </span>
              <span className="font-serif-luxury text-xl font-semibold text-stone-900 text-balance text-center">
                Khách sạn Bình Minh
              </span>
              <span className="text-xs text-stone-500 mt-0.5 text-center">
                Phan Thiết, Bình Thuận
              </span>
            </div>
          </div>
        </motion.div>

        {/* 3 Core Interactive Buttons with tactile micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5"
        >
          {/* CTA: Subtle ambient pulse */}
          <motion.button
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.965 }}
            onClick={onOpenRsvp}
            type="button"
            className="px-7 py-3.5 rounded-full bg-[#9E7D3B] hover:bg-[#886a2e] text-white font-medium text-sm tracking-wide shadow-md hover:shadow-xl transition-colors flex items-center gap-2 animate-pulse-gold cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Xác nhận tham dự</span>
          </motion.button>

          {/* Map: Soft elevation */}
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.965 }}
            onClick={onOpenMap}
            type="button"
            className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-[#D5C7AD] font-medium text-sm tracking-wide shadow-xs hover:shadow-md transition-colors flex items-center gap-2 hover:border-[#9E7D3B] cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#9E7D3B]" />
            <span>Xem bản đồ</span>
          </motion.button>

          {/* Wishes: Soft elevation */}
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.965 }}
            onClick={onScrollToWishes}
            type="button"
            className="px-6 py-3.5 rounded-full bg-[#FAF6EE] hover:bg-[#F3ECE0] text-stone-800 border border-[#E4D7BE] font-medium text-sm tracking-wide transition-colors flex items-center gap-2 hover:border-[#C8A359] cursor-pointer"
          >
            <MessageSquareHeart className="w-4 h-4 text-[#9E7D3B]" />
            <span>Gửi lời chúc</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
