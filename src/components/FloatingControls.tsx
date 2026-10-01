import React from 'react';
import { motion } from 'motion/react';
import { Heart, Gift, Mail, Sparkles } from 'lucide-react';

interface FloatingControlsProps {
  onOpenRsvp: () => void;
  onOpenGiftBox: () => void;
  onReopenEnvelope: () => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  onOpenRsvp,
  onOpenGiftBox,
  onReopenEnvelope,
  petalsEnabled,
  onTogglePetals,
}) => {
  return (
    <>
      {/* Floating desktop/tablet quick pills in top right - quiet, elegant, non-intrusive */}
      <div className="fixed top-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={onReopenEnvelope}
          type="button"
          className="px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DFC9] text-stone-700 hover:border-[#9E7D3B] hover:text-[#9E7D3B] text-xs font-medium shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
          title="Xem lại bìa thiệp cưới"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Bìa thiệp</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          onClick={onTogglePetals}
          type="button"
          className={`p-2 rounded-full border shadow-sm transition-colors cursor-pointer ${
            petalsEnabled
              ? 'bg-[#FAF6EE]/95 border-[#E8DFC9] text-[#9E7D3B]'
              : 'bg-white/90 border-stone-200 text-stone-400 hover:text-stone-700'
          }`}
          title={petalsEnabled ? 'Tắt hiệu ứng cánh hoa' : 'Bật hiệu ứng cánh hoa'}
          aria-label="Bật tắt hiệu ứng cánh hoa"
        >
          <Sparkles className="w-3.5 h-3.5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpenGiftBox}
          type="button"
          className="px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DFC9] text-stone-700 hover:border-[#9E7D3B] text-xs font-medium shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Gift className="w-3.5 h-3.5 text-[#9E7D3B]" />
          <span>Mừng cưới</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.035 }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpenRsvp}
          type="button"
          className="px-4 py-2 rounded-full bg-[#9E7D3B] hover:bg-[#886a2e] text-white text-xs font-medium tracking-wide shadow-md transition-colors flex items-center gap-1.5 animate-pulse-gold cursor-pointer"
        >
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>Xác nhận tham dự</span>
        </motion.button>
      </div>
    </>
  );
};
