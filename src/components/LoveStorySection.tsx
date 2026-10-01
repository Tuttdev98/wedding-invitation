import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, Sparkles, Image as ImageIcon, ZoomIn, X } from 'lucide-react';
import { BotanicalBranch } from './BotanicalDecoration';

// Assets
import firstMeetImg from '../assets/images/wedding_hero_cinematic_1790848020262.jpg';
import memorableTripImg from '../assets/images/wedding_coastal_venue_1790848051165.jpg';
import proposalImg from '../assets/images/wedding_love_proposal_1790848034643.jpg';
import weddingDayImg from '../assets/images/wedding_couple_portrait_1790847289808.jpg';

interface Milestone {
  id: string;
  year: string;
  date: string;
  title: string;
  description: string;
  image: string;
  caption: string;
}

export const LoveStorySection: React.FC = () => {
  const [photoMode, setPhotoMode] = useState<'editorial' | 'placeholder'>('editorial');
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; caption: string } | null>(null);

  const milestones: Milestone[] = [
    {
      id: 'story-1',
      year: '2021',
      date: 'Tháng 10, 2021',
      title: 'Lần Đầu Gặp Gỡ',
      description: 'Một buổi chiều thu nhẹ nhàng, hai ánh mắt vô tình chạm nhau tại góc quán quen. Từ những câu chuyện vu vơ, một sự gắn kết kỳ diệu đã bắt đầu.',
      image: firstMeetImg,
      caption: 'Ánh nhìn đầu tiên khởi đầu cho một hành trình',
    },
    {
      id: 'story-2',
      year: '2023',
      date: 'Tháng 04, 2023',
      title: 'Chuyến Đi Đáng Nhớ',
      description: 'Chuyến du lịch cùng nhau ngắm hoàng hôn biển Phan Thiết. Dưới tiếng sóng vỗ rì rào và gió biển mặn nồng, chúng mình nhận ra đối phương là người mình muốn đồng hành suốt đời.',
      image: memorableTripImg,
      caption: 'Hoàng hôn biển Phan Thiết gắn liền với kỷ niệm của hai đứa',
    },
    {
      id: 'story-3',
      year: '2025',
      date: 'Tháng 12, 2025',
      title: 'Khoảnh Khắc Cầu Hôn',
      description: 'Dưới ánh nến lung linh và giai điệu bài hát yêu thích, anh đã ngỏ lời: “Hãy làm vợ anh nhé!”. Nụ cười và cái gật đầu trong nước mắt hạnh phúc của em là món quà vô giá.',
      image: proposalImg,
      caption: 'Khoảnh khắc “Em đồng ý” dưới ánh nến ấm áp',
    },
    {
      id: 'story-4',
      year: '2026',
      date: '28 Tháng 11, 2026',
      title: 'Ngày Chung Đôi',
      description: 'Khoảnh khắc thiêng liêng khi cả hai chính thức trao nhau nhẫn cưới trước sự chứng kiến và chúc phúc của gia đình, người thân và bạn bè quý mến.',
      image: weddingDayImg,
      caption: 'Nguyễn Thị Hồng Hải & Trương Thanh Tú · Ngày hạnh phúc',
    },
  ];

  return (
    <section id="our-story" className="py-20 sm:py-28 bg-[#FAF6EE]/50 border-t border-[#ECE5D8] relative overflow-hidden">
      {/* Botanical Corner accents */}
      <BotanicalBranch position="top-right" size="lg" className="top-2 right-2" />
      <BotanicalBranch position="bottom-left" size="lg" className="bottom-2 left-2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.28em] text-[#9E7D3B] font-semibold mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Our Love Story</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Câu Chuyện Tình Yêu
          </h2>
          <BotanicalBranch position="center-divider" className="my-2" />
          <p className="text-stone-600 text-sm leading-relaxed text-balance">
            Từng chặng đường đi qua là từng mảnh ghép yêu thương đong đầy, dẫn lối chúng mình về chung một mái nhà.
          </p>

          {/* Mode Switcher */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 bg-[#F0EAE1] rounded-full border border-[#DFD5C5]">
            <button
              onClick={() => setPhotoMode('editorial')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                photoMode === 'editorial'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ảnh Minh Họa Chuyện Tình
            </button>
            <button
              onClick={() => setPhotoMode('placeholder')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                photoMode === 'placeholder'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Khung Chờ Kỷ Niệm (Placeholder)
            </button>
          </div>
        </motion.div>

        {/* Milestones Alternating List */}
        <div className="space-y-16 sm:space-y-24">
          {milestones.map((item, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: idx * 0.1 }}
                className={`flex flex-col ${
                  isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-8 sm:gap-14`}
              >
                {/* Photo Side with Polaroid/Fine Art Frame */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: isReversed ? -1 : 1, transition: { duration: 0.3 } }}
                    className="bg-white p-3.5 sm:p-5 rounded-3xl border border-[#E8DFC9] gold-shadow relative overflow-hidden group"
                  >
                    {photoMode === 'editorial' ? (
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
                          <span className="text-xs font-serif-luxury italic drop-shadow-sm">{item.caption}</span>
                          <button
                            onClick={() => setActiveLightboxImg({ src: item.image, caption: item.caption })}
                            type="button"
                            className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 transition-colors shadow-xs"
                            title="Xem ảnh phóng to"
                            aria-label="Xem ảnh phóng to"
                          >
                            <ZoomIn className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-[#D5C7AD] bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center">
                        <ImageIcon className="w-8 h-8 text-[#9E7D3B] mb-2 opacity-60" />
                        <span className="font-display-luxury text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">
                          Ảnh Kỷ Niệm: {item.title}
                        </span>
                        <p className="text-[11px] text-stone-400 mt-1 max-w-xs">
                          [Khung placeholder chờ cặp đôi cập nhật ảnh kỷ niệm {item.year}]
                        </p>
                      </div>
                    )}

                    {/* Polaroid-style caption underneath */}
                    <div className="pt-3 pb-1 flex items-center justify-between text-xs text-stone-500 border-t border-stone-100/70 mt-3">
                      <span className="font-script-luxury text-xl text-[#9E7D3B] font-light">
                        {item.title}
                      </span>
                      <span className="font-medium text-stone-400 tracking-wider text-[11px]">
                        {item.date}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-3.5 sm:px-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF3E5] border border-[#E8DFC9] text-[#9E7D3B]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold tracking-wider">{item.date}</span>
                  </div>

                  <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
                    {item.title}
                  </h3>

                  <div className="w-12 h-px bg-[#C8A359]" />

                  <p className="text-stone-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs text-[#9E7D3B]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-serif-luxury italic text-sm">Khoảnh khắc đáng nhớ trong tim</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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
