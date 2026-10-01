import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarPlus, HeartHandshake } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface DigitUnitProps {
  value: string;
  label: string;
  isAccent?: boolean;
}

const DigitUnit: React.FC<DigitUnitProps> = ({ value, label, isAccent = false }) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5DAC1] shadow-xs flex flex-col items-center hover:border-[#C8A359] hover:-translate-y-1 transition-all duration-300">
      <div className="h-12 sm:h-14 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: -14, opacity: 0, filter: 'blur(2px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: 14, opacity: 0, filter: 'blur(2px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`font-serif-luxury text-4xl sm:text-5xl font-semibold tabular-nums block ${
              isAccent ? 'text-[#9E7D3B]' : 'text-stone-900'
            }`}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[11px] uppercase tracking-widest text-stone-500 mt-1 font-medium">
        {label}
      </span>
    </div>
  );
};

export const CountdownSection: React.FC = () => {
  const targetDate = new Date(WEDDING_DATA.weddingDate).getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isFinished: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent('Đám cưới Nguyễn Thị Hồng Hải & Trương Thanh Tú');
    const details = encodeURIComponent(
      'Trân trọng kính mời bạn đến chung vui và chứng kiến khoảnh khắc đặc biệt của Nguyễn Thị Hồng Hải & Trương Thanh Tú. Địa điểm: Khách sạn Bình Minh, 211 Lê Lợi, Hưng Long, Phan Thiết, Bình Thuận.'
    );
    const location = encodeURIComponent(
      'Khách sạn Bình Minh, 211 Lê Lợi, phường Hưng Long, Phan Thiết, Bình Thuận'
    );
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261128T110000Z/20261128T150000Z&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F4EFE6]/60 border-y border-[#EAE3D2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <HeartHandshake className="w-4 h-4 text-[#9E7D3B]" />
            <span className="font-display-luxury text-xs uppercase tracking-[0.25em] text-[#9E7D3B] font-medium">
              Đếm Ngược Khoảnh Khắc Hạnh Phúc
            </span>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-stone-900 mb-8">
            Chỉ còn ít ngày nữa để cùng chúc phúc cho đôi uyên ương
          </h3>
        </motion.div>

        {/* Counter cards with smooth animated digit flip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto mb-8"
        >
          <DigitUnit value={String(timeLeft.days).padStart(2, '0')} label="Ngày" />
          <DigitUnit value={String(timeLeft.hours).padStart(2, '0')} label="Giờ" />
          <DigitUnit value={String(timeLeft.minutes).padStart(2, '0')} label="Phút" />
          <DigitUnit value={String(timeLeft.seconds).padStart(2, '0')} label="Giây" isAccent />
        </motion.div>

        {/* Add to Google Calendar Action with tactile micro-interaction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="inline-flex items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAddToCalendar}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D5C7AD] text-xs uppercase tracking-wider font-semibold text-stone-700 hover:text-stone-900 hover:border-[#9E7D3B] shadow-2xs hover:shadow-xs transition-all"
          >
            <CalendarPlus className="w-4 h-4 text-[#9E7D3B]" />
            <span>Thêm vào lịch cá nhân</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
