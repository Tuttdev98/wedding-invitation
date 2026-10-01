import React from 'react';
import { motion } from 'motion/react';
import { Camera, Heart, Utensils, Music, Sparkles } from 'lucide-react';
import { WEDDING_TIMELINE } from '../data/weddingData';

export const TimelineSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5 fill-[#9E7D3B]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Music':
        return <Music className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Heart className="w-5 h-5" />;
    }
  };

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="font-display-luxury text-xs uppercase tracking-[0.25em] text-[#9E7D3B] font-medium mb-3">
            Lịch Trình Buổi Lễ
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Chương Trình Tiệc Cưới
          </h2>

          {/* Smooth Expanding Gold Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-[#C8A359] mx-auto mt-4 mb-4"
          />

          <p className="text-stone-600 text-sm leading-relaxed">
            Mỗi khoảnh khắc đều trở nên trọn vẹn hơn khi có sự chung vui của bạn.
          </p>
        </motion.div>

        {/* Timeline items with gold connecting line */}
        <div className="relative">
          {/* Vertical continuous line that draws smoothly on scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top center' }}
            className="absolute left-6 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-px bg-gradient-to-b from-[#E8DFC9] via-[#C8A359] to-[#E8DFC9]"
          />

          <div className="space-y-10 sm:space-y-12">
            {WEDDING_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.75, delay: idx * 0.12 }}
                  className={`relative flex items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'
                  } gap-6 sm:gap-10`}
                >
                  {/* Left / Right Card Content */}
                  <div
                    className={`ml-14 sm:ml-0 flex-1 sm:w-1/2 ${
                      isEven ? 'sm:text-left' : 'sm:text-right'
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8DFC9] gold-shadow transition-colors duration-300 hover:border-[#D1C3A5]"
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FAF3E5] text-[#9E7D3B] font-serif-luxury text-base font-semibold mb-2">
                        {item.time}
                      </span>
                      <h4 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-stone-900">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node Icon with Pulse */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FAF6EE] border-2 border-[#C8A359] flex items-center justify-center text-[#9E7D3B] shadow-md z-10 transition-transform cursor-pointer"
                  >
                    {getIcon(item.iconName)}
                  </motion.div>

                  {/* Empty spacer for the opposite side on desktop */}
                  <div className="hidden sm:block flex-1 sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
