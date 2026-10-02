import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Navigation, Car, Shirt, PhoneCall, Copy, Check, ZoomIn } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { BotanicalBranch } from './BotanicalDecoration';

// Asset
import venueCoastalImg from '../assets/images/image_wedding/AI0I7072.jpg';

interface EventDetailsSectionProps {
  onOpenMap: () => void;
}

export const EventDetailsSection: React.FC<EventDetailsSectionProps> = ({ onOpenMap }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(WEDDING_DATA.venue.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="details" className="py-20 sm:py-28 bg-[#FAF6EE]/60 border-t border-[#ECE5D8] relative overflow-hidden">
      <BotanicalBranch position="top-left" size="lg" className="top-4 left-4" />
      <BotanicalBranch position="bottom-right" size="lg" className="bottom-4 right-4" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="font-display-luxury text-xs uppercase tracking-[0.25em] text-[#9E7D3B] font-medium mb-3">
            Thời Gian & Địa Điểm
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Nơi Khoảnh Khắc Bắt Đầu
          </h2>

          <BotanicalBranch position="center-divider" className="my-2" />

          <p className="text-stone-600 text-sm leading-relaxed">
            Sự hiện diện của quý khách là niềm vinh hạnh và món quà ý nghĩa nhất đối với gia đình chúng mình.
          </p>
        </motion.div>

        {/* Wedding Photo Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85 }}
          className="rounded-3xl overflow-hidden mb-10 border border-[#E8DFC9] gold-shadow relative group aspect-[4/5] sm:aspect-[10/7]"
        >
          <img
            src={venueCoastalImg}
            alt="Ảnh cưới Hồng Hải & Thanh Tú bên biển"
            referrerPolicy="no-referrer"
            className="absolute inset-0 block w-full h-full max-w-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-900/25 to-transparent flex flex-col justify-end p-4 sm:p-8 text-white">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8D4A8] font-semibold">
              Venue & Ambiance
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl mt-1">
              Khách Sạn Bình Minh · Phan Thiết
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-lg font-light">
              Tọa lạc tại 211 Lê Lợi, gần bãi biển thơ mộng với không gian tiệc cưới ấm cúng, sang trọng.
            </p>
          </div>
        </motion.div>

        {/* Main Venue Card with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DAC1] gold-shadow mb-10 relative overflow-hidden transition-colors duration-300 hover:border-[#D1C3A5]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Venue details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">
                  Địa Điểm Tổ Chức Tiệc Cưới
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-stone-900 mt-1">
                  {WEDDING_DATA.venue.name}
                </h3>
              </div>

              <div className="space-y-3.5 text-stone-700 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#9E7D3B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">Địa chỉ chi tiết:</span>
                    <p className="text-stone-600 leading-relaxed mt-0.5">
                      {WEDDING_DATA.venue.address}, {WEDDING_DATA.venue.ward}, {WEDDING_DATA.venue.city}, {WEDDING_DATA.venue.province}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#9E7D3B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">Thời gian diễn ra:</span>
                    <p className="text-stone-600 mt-0.5">
                      Thứ Bảy, <strong>28 Tháng 11, 2026</strong> (Nhằm ngày 19/10 năm Bính Ngọ)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#9E7D3B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">Giờ tiệc chính:</span>
                    <p className="text-stone-600 mt-0.5">
                      <strong>18:00</strong> (Đón khách và chụp ảnh lưu niệm từ <strong>17:30</strong>)
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions with tactile feedback */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpenMap}
                  type="button"
                  className="px-5 py-2.5 rounded-full bg-[#9E7D3B] hover:bg-[#886a2e] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Xem Bản Đồ & Chỉ Đường</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCopyAddress}
                  type="button"
                  className="px-4 py-2.5 rounded-full bg-white border border-[#D5C7AD] hover:bg-stone-50 text-stone-700 text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer hover:border-[#9E7D3B]"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-500" />
                      <span>Sao chép địa chỉ</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Right: Map preview / visual representation */}
            <div className="bg-[#FAF8F5] border border-[#E2D7C2] rounded-2xl p-5 relative flex flex-col justify-between h-full min-h-[260px]">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBE3D3]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#9E7D3B]" />
                  <span className="text-xs font-medium text-stone-700">Bản đồ vị trí</span>
                </div>
                <span className="text-[11px] text-stone-500">TP. Phan Thiết</span>
              </div>

              {/* Stylized Map Viewport */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={onOpenMap}
                className="my-3 flex-1 rounded-xl bg-gradient-to-br from-amber-50/70 via-stone-100 to-amber-100/50 border border-stone-200/80 relative flex items-center justify-center p-6 text-center cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-px bg-stone-500 top-1/4 absolute" />
                  <div className="w-full h-px bg-stone-500 top-2/3 absolute" />
                  <div className="h-full w-px bg-stone-500 left-1/3 absolute" />
                  <div className="h-full w-px bg-stone-500 left-3/4 absolute" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#9E7D3B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 fill-white" />
                  </div>
                  <span className="font-serif-luxury text-base font-semibold text-stone-900 mt-2 block">
                    Khách sạn Bình Minh
                  </span>
                  <span className="text-xs text-stone-600 mt-0.5">
                    211 Lê Lợi, P. Hưng Long, Phan Thiết
                  </span>
                  <span className="mt-3 text-[11px] font-medium text-[#9E7D3B] group-hover:underline">
                    Nhấp để mở bản đồ chi tiết →
                  </span>
                </div>
              </motion.div>

              <div className="pt-2 text-center text-xs text-stone-500">
                Gần bãi biển Đồi Dương & trung tâm bờ biển TP. Phan Thiết
              </div>
            </div>
          </div>
        </motion.div>

        {/* Helpful Guest Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-white/90 rounded-2xl p-5 border border-[#E8DFC9] flex items-start gap-3.5 hover:border-[#C8A359] transition-colors shadow-2xs"
          >
            <div className="w-9 h-9 rounded-full bg-[#FAF6EE] text-[#9E7D3B] flex items-center justify-center shrink-0 mt-0.5">
              <Shirt className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif-luxury text-base font-semibold text-stone-900 block">
                Trang Phục Khuyến Nghị
              </span>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Trang phục lịch sự, khuyến khích tone màu thanh nhã: Trắng, Be, Kem hoặc Pastel.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-white/90 rounded-2xl p-5 border border-[#E8DFC9] flex items-start gap-3.5 hover:border-[#C8A359] transition-colors shadow-2xs"
          >
            <div className="w-9 h-9 rounded-full bg-[#FAF6EE] text-[#9E7D3B] flex items-center justify-center shrink-0 mt-0.5">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif-luxury text-base font-semibold text-stone-900 block">
                Bãi Đỗ Xe Tiện Lợi
              </span>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Khách sạn Bình Minh có khuôn viên đỗ xe ô tô và xe máy rộng rãi, có bảo vệ hỗ trợ.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-white/90 rounded-2xl p-5 border border-[#E8DFC9] flex items-start gap-3.5 hover:border-[#C8A359] transition-colors shadow-2xs"
          >
            <div className="w-9 h-9 rounded-full bg-[#FAF6EE] text-[#9E7D3B] flex items-center justify-center shrink-0 mt-0.5">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif-luxury text-base font-semibold text-stone-900 block">
                Hỗ Trợ Đón Tiếp
              </span>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Hotline hỗ trợ khách mời: <span className="text-stone-400 italic">[Placeholder: 09xx xxx xxx]</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
