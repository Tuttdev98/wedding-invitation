import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface InvitationEnvelopeProps {
  onOpenInvitation: () => void;
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({ onOpenInvitation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleOpen = () => {
    if (shouldReduceMotion) {
      setIsOpen(true);
      onOpenInvitation();
      return;
    }

    setIsOpening(true);
    setTimeout(() => {
      setIsOpen(true);
      onOpenInvitation();
    }, 1250);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141210]/85 backdrop-blur-md overflow-hidden"
      >
        {/* Ambient golden dust particles in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#E5C170] opacity-60 animate-dust"
              style={{
                left: `${(i * 11 + 5) % 96}%`,
                bottom: '-10px',
                animationDuration: `${7 + (i % 5) * 2}s`,
                animationDelay: `${(i * 0.8) % 6}s`,
              }}
            />
          ))}
        </div>

        {/* 3D Gatefold Card Container */}
        <div className="relative w-full max-w-lg perspective-1000">
          <div className="relative w-full aspect-[4/5] sm:aspect-[1/1.2] rounded-3xl bg-[#F7F3E9] border-2 border-[#D8C7A5] shadow-2xl overflow-hidden p-6 sm:p-10 flex flex-col items-center justify-between text-center">
            {/* Inner Card Background (revealed when flaps open) */}
            <div className="absolute inset-4 border border-[#E3D3B4] rounded-2xl flex flex-col items-center justify-between p-6 sm:p-8 bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF9] to-[#F5EFE4]">
              {/* Corner Ornaments */}
              <div className="w-full flex justify-between text-[#C8A359]/60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 2h8M2 2v8M6 6h4M6 6v4" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 2h-8M22 2v8M18 6h-4M18 6v4" />
                </svg>
              </div>

              <div className="my-auto space-y-3">
                <span className="font-display-luxury text-xs uppercase tracking-[0.3em] text-[#9E7D3B] font-semibold block">
                  Wedding Invitation
                </span>
                <p className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
                  Nguyễn Thị Hồng Hải
                </p>
                <div className="font-script-luxury text-3xl text-[#9E7D3B]">&</div>
                <p className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
                  Trương Thanh Tú
                </p>
                <div className="w-12 h-px bg-[#C8A359] mx-auto my-3" />
                <p className="text-xs text-stone-600 font-medium tracking-wider">
                  28.11.2026 · Phan Thiết
                </p>
              </div>

              <div className="w-full flex justify-between text-[#C8A359]/60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 22h8M2 22v-8M6 18h4M6 18v-4" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 22h-8M22 22v-8M18 18h-4M18 18v-4" />
                </svg>
              </div>
            </div>

            {/* Left Gatefold Flap (Swings open to the left in 3D) */}
            <motion.div
              initial={false}
              animate={
                isOpening
                  ? { rotateY: -110, opacity: [1, 0.9, 0] }
                  : { rotateY: 0, opacity: 1 }
              }
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#F2ECE0] to-[#FAF6EE] border-r border-[#D8C7A5]/80 shadow-md z-20 flex flex-col justify-between p-6 pointer-events-none"
            >
              <div className="w-full h-full border border-dashed border-[#D5C7AD] rounded-l-xl opacity-70" />
            </motion.div>

            {/* Right Gatefold Flap (Swings open to the right in 3D) */}
            <motion.div
              initial={false}
              animate={
                isOpening
                  ? { rotateY: 110, opacity: [1, 0.9, 0] }
                  : { rotateY: 0, opacity: 1 }
              }
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
              style={{ transformOrigin: 'right center' }}
              className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#F2ECE0] to-[#FAF6EE] border-l border-[#D8C7A5]/80 shadow-md z-20 flex flex-col justify-between p-6 pointer-events-none"
            >
              <div className="w-full h-full border border-dashed border-[#D5C7AD] rounded-r-xl opacity-70" />
            </motion.div>

            {/* Center Satin Ribbon with Wax Seal */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-auto">
              {/* Horizontal Gold Satin Ribbon */}
              <motion.div
                animate={isOpening ? { scaleX: [1, 1.1, 0], opacity: [1, 0.8, 0] } : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full h-10 bg-gradient-to-r from-[#D4AF37]/90 via-[#F3E5AB] to-[#D4AF37]/90 shadow-sm flex items-center justify-center border-y border-[#B89438]"
              >
                <div className="w-full h-px bg-white/50" />
              </motion.div>

              {/* Realistic Embossed Wax Seal */}
              <motion.button
                onClick={handleOpen}
                disabled={isOpening}
                animate={
                  isOpening
                    ? { scale: [1, 1.25, 0], rotate: [0, -10, 20, 0], opacity: [1, 1, 0] }
                    : { scale: [1, 1.03, 1] }
                }
                transition={
                  isOpening
                    ? { duration: 0.75, ease: 'easeInOut' }
                    : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
                }
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                type="button"
                className="relative z-40 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#8C1D1D] via-[#A82828] to-[#5C1010] p-1.5 shadow-2xl flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-4 focus:ring-[#C8A359]/50"
                aria-label="Mở thiệp cưới"
              >
                {/* Outer wax ring texture */}
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#F7D8A7]/70 flex flex-col items-center justify-center bg-[#7A1818] text-[#F9E8CE] shadow-inner">
                  <span className="font-serif-luxury text-2xl sm:text-3xl italic tracking-widest font-normal">
                    H & T
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#E8C28D] mt-0.5 font-medium">
                    28.11.2026
                  </span>
                </div>

                {/* Sparkling gold glow ring */}
                <div className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/60 pointer-events-none group-hover:animate-ping opacity-30" />
              </motion.button>

              {/* Invitation Open Action Prompt */}
              <motion.div
                animate={isOpening ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 sm:bottom-8 text-center"
              >
                <button
                  onClick={handleOpen}
                  disabled={isOpening}
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-[#9E7D3B] hover:bg-[#886a2e] text-white text-xs uppercase tracking-widest font-semibold shadow-md hover:shadow-xl transition-all flex items-center gap-2 mx-auto active:scale-95 group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FDE68A] group-hover:rotate-12 transition-transform" />
                  <span>{isOpening ? 'Đang mở thiệp...' : 'Chạm để mở thiệp'}</span>
                  <Heart className="w-3 h-3 fill-white" />
                </button>
                <span className="text-[11px] text-stone-500 mt-2 block tracking-wide">
                  Trân trọng kính gửi thiệp cưới
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
