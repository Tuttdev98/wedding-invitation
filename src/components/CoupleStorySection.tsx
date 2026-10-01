import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, Upload, ZoomIn, X, Info, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

// Generated assets
import defaultCoupleImg from '../assets/images/wedding_couple_portrait_1790847289808.jpg';
import floralImg from '../assets/images/wedding_floral_detail_1790847302573.jpg';
import venueImg from '../assets/images/wedding_reception_venue_1790847312507.jpg';

export const CoupleStorySection: React.FC = () => {
  const [photoMode, setPhotoMode] = useState<'editorial' | 'placeholder'>('editorial');
  const [customCouplePhoto, setCustomCouplePhoto] = useState<string | null>(null);
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; caption: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomCouplePhoto(event.target.result as string);
          setPhotoMode('editorial');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentCoupleImg = customCouplePhoto || defaultCoupleImg;

  return (
    <section id="couple" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative ambient soft heart watermark in background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.035]" aria-hidden="true">
        <Heart className="w-[600px] h-[600px] text-[#9E7D3B] fill-current" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-display-luxury text-xs uppercase tracking-[0.25em] text-[#9E7D3B] font-medium mb-3">
            Tân Lang & Tân Nương
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Khoảnh Khắc Của Hạnh Phúc
          </h2>

          {/* Smooth Expanding Gold Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-[#C8A359] mx-auto mt-4 mb-4"
          />

          <p className="text-stone-600 text-sm leading-relaxed text-balance">
            “Gặp được người mình muốn cùng đi qua bão giông, cùng san sẻ những an yên của cuộc đời chính là may mắn lớn nhất.”
          </p>

          {/* Mode Switcher complying with user constraint */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 bg-[#F0EAE1] rounded-full border border-[#DFD5C5]">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setPhotoMode('editorial')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                photoMode === 'editorial'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ảnh Minh Họa Nghệ Thuật
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setPhotoMode('placeholder')}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                photoMode === 'placeholder'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Khung Ảnh Chờ (Placeholder)
            </motion.button>
          </div>
        </motion.div>

        {/* Notice about placeholder rule */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-2xl mx-auto bg-[#FFFDF9] border border-[#E8DFC9] rounded-2xl p-4 flex items-start gap-3 text-xs text-stone-600 shadow-xs"
        >
          <Info className="w-4 h-4 text-[#9E7D3B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-medium text-stone-800">
              Ghi chú về hình ảnh & thông tin gia đình:
            </span>
            <p className="text-stone-500 leading-relaxed">
              Các thông tin gia đình hai bên và hình ảnh cưới được đặt khung placeholder chuẩn mực để cặp đôi Hồng Hải & Thanh Tú có thể thay thế bằng ảnh cưới thực tế hoặc bổ sung họ tên phụ mẫu bất kỳ lúc nào.
            </p>
          </div>
        </motion.div>

        {/* Main Wedding Portrait Showcase with Soft Zoom-in Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-white p-4 sm:p-7 rounded-3xl border border-[#E8DFC9] gold-shadow relative overflow-hidden group hover:border-[#D1C3A5] transition-all duration-500">
            {photoMode === 'editorial' ? (
              <div className="relative aspect-[3/4] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src={currentCoupleImg}
                  alt="Ảnh cưới cô dâu Nguyễn Thị Hồng Hải và chú rể Trương Thanh Tú"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/65 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="font-script-luxury text-3xl sm:text-4xl text-[#EBD7A7]">
                    Together is our favorite place to be
                  </span>
                  <p className="font-serif-luxury text-lg sm:text-2xl mt-1 tracking-wide">
                    Nguyễn Thị Hồng Hải & Trương Thanh Tú
                  </p>
                  <span className="text-xs text-stone-300 font-light mt-0.5">
                    28 Tháng 11, 2026 · Khách sạn Bình Minh, Phan Thiết
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() =>
                      setActiveLightboxImg({
                        src: currentCoupleImg,
                        caption: 'Ảnh cưới Nguyễn Thị Hồng Hải & Trương Thanh Tú',
                      })
                    }
                    type="button"
                    className="p-2.5 rounded-full bg-white/85 hover:bg-white text-stone-800 shadow-md backdrop-blur-sm transition-colors"
                    title="Xem toàn màn hình"
                    aria-label="Xem ảnh phóng to"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/85 hover:bg-white text-stone-800 shadow-md backdrop-blur-sm text-xs font-medium transition-colors"
                    title="Tải ảnh thực tế của cặp đôi lên"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#9E7D3B]" />
                    <span className="hidden sm:inline">Thay ảnh của bạn</span>
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="aspect-[3/4] sm:aspect-[16/10] w-full rounded-2xl border-2 border-dashed border-[#D5C7AD] bg-[#FAF8F5] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full border border-[#D5C7AD] flex items-center justify-center bg-white mb-4 text-[#9E7D3B]">
                  <ImageIcon className="w-8 h-8 opacity-70" />
                </div>
                <span className="font-display-luxury text-sm uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold">
                  Khung Ảnh Cưới Chính Thức
                </span>
                <h4 className="font-serif-luxury text-2xl sm:text-3xl text-stone-800 mt-2">
                  Nguyễn Thị Hồng Hải & Trương Thanh Tú
                </h4>
                <p className="text-stone-500 text-xs sm:text-sm max-w-md mt-2 leading-relaxed">
                  [Vị trí hiển thị ảnh cưới cô dâu & chú rể. Nhấn nút bên dưới để chọn ảnh cưới thực tế của bạn]
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                    className="px-5 py-2.5 rounded-full bg-[#9E7D3B] text-white text-xs font-medium tracking-wide flex items-center gap-2 shadow-xs hover:bg-[#886a2e] transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Tải ảnh cưới lên ngay</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setPhotoMode('editorial')}
                    type="button"
                    className="px-5 py-2.5 rounded-full bg-white border border-[#D5C7AD] text-stone-700 text-xs font-medium tracking-wide hover:bg-stone-50 transition-colors"
                  >
                    Xem ảnh mẫu gợi ý
                  </motion.button>
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

        {/* Bride and Groom Profile Cards with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Groom: Trương Thanh Tú */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-white rounded-3xl p-8 border border-[#E8DFC9] gold-shadow flex flex-col items-center text-center relative overflow-hidden transition-colors duration-300 hover:border-[#D1C3A5]"
          >
            <div className="w-24 h-24 rounded-full border-2 border-[#D5C7AD] p-1 mb-5 bg-[#FAF8F5]">
              <div className="w-full h-full rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#9E7D3B]">
                <span className="font-serif-luxury text-3xl italic">T</span>
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold mb-1">
              {WEDDING_DATA.groom.role}
            </span>
            <h3 className="font-serif-luxury text-3xl font-semibold text-stone-900 mb-2">
              {WEDDING_DATA.groom.fullName}
            </h3>
            <div className="w-10 h-px bg-[#E5DAC1] my-3" />
            <div className="text-xs text-stone-500 space-y-1 mb-4">
              <span className="block font-medium text-stone-700">Đại diện Nhà Trai:</span>
              <p className="italic text-stone-400">
                [Họ tên Thân Phụ & Thân Mẫu Nhà Trai - Placeholder]
              </p>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
              {WEDDING_DATA.groom.descriptionPlaceholder}
            </p>
          </motion.div>

          {/* Bride: Nguyễn Thị Hồng Hải */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-white rounded-3xl p-8 border border-[#E8DFC9] gold-shadow flex flex-col items-center text-center relative overflow-hidden transition-colors duration-300 hover:border-[#D1C3A5]"
          >
            <div className="w-24 h-24 rounded-full border-2 border-[#D5C7AD] p-1 mb-5 bg-[#FAF8F5]">
              <div className="w-full h-full rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#9E7D3B]">
                <span className="font-serif-luxury text-3xl italic">H</span>
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold mb-1">
              {WEDDING_DATA.bride.role}
            </span>
            <h3 className="font-serif-luxury text-3xl font-semibold text-stone-900 mb-2">
              {WEDDING_DATA.bride.fullName}
            </h3>
            <div className="w-10 h-px bg-[#E5DAC1] my-3" />
            <div className="text-xs text-stone-500 space-y-1 mb-4">
              <span className="block font-medium text-stone-700">Đại diện Nhà Gái:</span>
              <p className="italic text-stone-400">
                [Họ tên Thân Phụ & Thân Mẫu Nhà Gái - Placeholder]
              </p>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
              {WEDDING_DATA.bride.descriptionPlaceholder}
            </p>
          </motion.div>
        </div>

        {/* Small Curated Wedding Aesthetic Vignettes with motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85 }}
        >
          <div className="text-center mb-8">
            <p className="font-display-luxury text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-medium">
              Không Gian & Khoảnh Khắc
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() =>
                setActiveLightboxImg({
                  src: floralImg,
                  caption: 'Hoa cưới tinh khôi biểu trưng cho tình yêu thuần khiết',
                })
              }
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8DFC9] p-3 gold-shadow transition-colors duration-300 hover:border-[#D1C3A5]"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-stone-100">
                <img
                  src={floralImg}
                  alt="Hoa cưới tinh khôi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
              </div>
              <div className="pt-3 pb-1 text-center">
                <p className="font-serif-luxury text-base text-stone-800">Hoa Cưới Tinh Khôi</p>
                <span className="text-[11px] text-stone-400">Thanh lịch & Nhẹ nhàng</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() =>
                setActiveLightboxImg({
                  src: venueImg,
                  caption: 'Sảnh tiệc Khách sạn Bình Minh, Phan Thiết',
                })
              }
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8DFC9] p-3 gold-shadow transition-colors duration-300 hover:border-[#D1C3A5]"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-stone-100">
                <img
                  src={venueImg}
                  alt="Sảnh tiệc cưới sang trọng"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
              </div>
              <div className="pt-3 pb-1 text-center">
                <p className="font-serif-luxury text-base text-stone-800">Sảnh Tiệc Ấm Cúng</p>
                <span className="text-[11px] text-stone-400">Khách sạn Bình Minh</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-2xl border-2 border-dashed border-[#D5C7AD] p-6 bg-white/70 flex flex-col items-center justify-center text-center transition-colors duration-300 hover:border-[#9E7D3B]"
            >
              <Camera className="w-8 h-8 text-[#9E7D3B] mb-2 opacity-80" />
              <p className="font-serif-luxury text-base text-stone-800">Album Cưới Cặp Đôi</p>
              <span className="text-xs text-stone-400 max-w-[200px] mt-1 leading-snug">
                [Khung chờ cập nhật thêm ảnh cưới của Tú & Hải]
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => fileInputRef.current?.click()}
                type="button"
                className="mt-3 text-xs text-[#9E7D3B] font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Tải ảnh lên</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
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
