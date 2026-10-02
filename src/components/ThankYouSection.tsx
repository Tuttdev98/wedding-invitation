import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { BotanicalBranch } from './BotanicalDecoration';

// Asset
import thankYouCoupleImg from '../assets/images/image_wedding/AI0I8071.jpg';

export const ThankYouSection: React.FC = () => {
  const [photoMode, setPhotoMode] = useState<'editorial' | 'placeholder'>('editorial');

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <BotanicalBranch position="top-right" size="lg" className="top-4 right-4" />
      <BotanicalBranch position="bottom-left" size="lg" className="bottom-4 left-4" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Monogram Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-full border border-[#D1C3A5] p-1.5 flex items-center justify-center bg-white shadow-md">
            <span className="font-serif-luxury text-2xl italic text-[#9E7D3B]">
              H & T
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2 mb-8"
        >
          <span className="font-display-luxury text-xs uppercase tracking-[0.3em] text-[#9E7D3B] font-semibold block">
            Thank You
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Lời Tri Ân Từ Đôi Uyên Ương
          </h2>
          <BotanicalBranch position="center-divider" className="my-2" />
        </motion.div>

        {/* Romantic Closing Couple Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-lg mx-auto mb-10"
        >
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#E8DFC9] gold-shadow relative overflow-hidden group">
            {photoMode === 'editorial' ? (
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src={thankYouCoupleImg}
                  alt="Lời cảm ơn từ Nguyễn Thị Hồng Hải & Trương Thanh Tú"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 block w-full h-full max-w-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 text-white text-left">
                  <span className="font-script-luxury text-2xl sm:text-3xl text-[#EBD7A7]">
                    Thank you for being part of our story
                  </span>
                  <span className="text-xs text-stone-300 font-light mt-0.5">
                    Hồng Hải & Thanh Tú
                  </span>
                </div>
              </div>
            ) : (
              <div className="aspect-[2/3] rounded-2xl border-2 border-dashed border-[#D5C7AD] bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center">
                <ImageIcon className="w-8 h-8 text-[#9E7D3B] mb-2 opacity-60" />
                <span className="font-display-luxury text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">
                  Ảnh Cảm Ơn Cuối Thiệp
                </span>
                <p className="text-[11px] text-stone-400 mt-1 max-w-xs">
                  [Vị trí ảnh đôi cảm ơn khách mời. Chờ cặp đôi tải ảnh lên]
                </p>
              </div>
            )}
          </div>

          {/* Mode Switcher */}
          <div className="mt-3 flex justify-center">
            <button
              onClick={() => setPhotoMode(photoMode === 'editorial' ? 'placeholder' : 'editorial')}
              type="button"
              className="text-[11px] text-[#9E7D3B] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>{photoMode === 'editorial' ? 'Chuyển sang khung chờ placeholder' : 'Xem ảnh mẫu nghệ thuật'}</span>
            </button>
          </div>
        </motion.div>

        {/* Heartfelt Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <p className="font-serif-luxury text-lg sm:text-xl italic text-stone-700 leading-relaxed font-normal text-balance">
            “Cảm ơn gia đình, thầy cô, bạn bè và tất cả những người thương yêu đã luôn đồng hành, che chở và là một phần tươi đẹp trong hành trình trưởng thành của chúng mình. Sự hiện diện và lời chúc phúc của quý khách trong ngày 28/11/2026 chính là món quà ý nghĩa nhất!”
          </p>

          <div className="pt-4 flex flex-col items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Trân trọng và biết ơn
            </span>
            <span className="font-script-luxury text-4xl text-[#9E7D3B] mt-1">
              Hồng Hải & Thanh Tú
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
