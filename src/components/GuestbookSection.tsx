import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Heart, MessageSquareHeart, Sparkles } from 'lucide-react';
import { GuestWish } from '../types/wedding';
import { INITIAL_WISHES, PRESET_WISHES } from '../data/weddingData';

export const GuestbookSection: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>(() => {
    const saved = localStorage.getItem('wedding_wishes_hai_tu');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_WISHES;
      }
    }
    return INITIAL_WISHES;
  });

  const [likes, setLikes] = useState<Record<string, number>>(() => {
    return {
      'wish-1': 12,
      'wish-2': 18,
      'wish-3': 9,
    };
  });

  const [senderName, setSenderName] = useState('');
  const [relationship, setRelationship] = useState('Bạn bè');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('wedding_wishes_hai_tu', JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;

    const newWish: GuestWish = {
      id: `wish-${Date.now()}`,
      senderName: senderName.trim(),
      relationship,
      message: message.trim(),
      createdAt: 'Vừa xong',
    };

    setWishes([newWish, ...wishes]);
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleSelectPreset = (text: string) => {
    setMessage(text);
  };

  return (
    <section id="guestbook" className="py-20 sm:py-28 bg-[#FAF6EE]/50 border-t border-[#ECE5D8] relative overflow-hidden">
      {/* Decorative background hearts */}
      <div className="absolute top-1/3 -right-20 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <Heart className="w-96 h-96 text-[#9E7D3B] fill-current" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MessageSquareHeart className="w-4 h-4 text-[#9E7D3B]" />
            <span className="font-display-luxury text-xs uppercase tracking-[0.25em] text-[#9E7D3B] font-medium">
              Sổ Lưu Bút Kỷ Niệm
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
            Gửi Lời Chúc Đến Cặp Đôi
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
            Mỗi lời chúc phúc chân thành từ bạn là hành trang ấm áp cho cuộc sống hôn nhân của Tú & Hải.
          </p>
        </motion.div>

        {/* Wish Form Card with motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DAC1] gold-shadow mb-12 hover:border-[#D1C3A5] transition-colors duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5">
                  Tên của bạn <span className="text-[#9E7D3B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Minh Khang, Lan Anh..."
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#9E7D3B] text-sm text-stone-800 transition-colors bg-[#FAF8F5]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5">
                  Mối quan hệ
                </label>
                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#9E7D3B] text-sm text-stone-800 transition-colors bg-[#FAF8F5]"
                >
                  <option value="Bạn bè">Bạn bè</option>
                  <option value="Đồng nghiệp">Đồng nghiệp</option>
                  <option value="Họ hàng Nhà Trai">Họ hàng Nhà Trai</option>
                  <option value="Họ hàng Nhà Gái">Họ hàng Nhà Gái</option>
                  <option value="Người thân quý mến">Người thân quý mến</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-700">
                  Lời chúc gửi gắm <span className="text-[#9E7D3B]">*</span>
                </label>
                <span className="text-[11px] text-stone-400">Chọn câu mẫu bên dưới nếu muốn</span>
              </div>
              <textarea
                required
                rows={3}
                placeholder="Gửi lời chúc tốt đẹp nhất đến Hồng Hải & Thanh Tú..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#9E7D3B] text-sm text-stone-800 transition-colors bg-[#FAF8F5] resize-none"
              />
            </div>

            {/* Quick preset chips */}
            <div>
              <span className="text-[11px] text-stone-500 block mb-2 font-medium">
                Gợi ý lời chúc ngọt ngào:
              </span>
              <div className="flex flex-wrap gap-2">
                {PRESET_WISHES.map((preset, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className="text-xs text-left px-3 py-1.5 rounded-xl border border-[#E8DFC9] bg-[#FAF6EE] text-stone-700 hover:bg-[#F3ECE0] hover:border-[#C8A359] transition-colors line-clamp-1 max-w-full cursor-pointer"
                  >
                    “{preset.slice(0, 42)}...”
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Cảm ơn bạn! Lời chúc đã được gửi gắm thành công.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="px-6 py-3 rounded-full bg-[#9E7D3B] hover:bg-[#886a2e] text-white text-xs font-semibold uppercase tracking-wider shadow-sm flex items-center gap-2 transition-colors ml-auto hover:shadow-md cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi lời chúc phúc</span>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Wishes List with Motion */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E5DAC1]">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              Những Lời Chúc Gần Đây ({wishes.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishes.map((item, idx) => {
              const currentLikes = likes[item.id] || 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: (idx % 6) * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-5 border border-[#E8DFC9] shadow-2xs hover:border-[#C8A359] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="font-semibold text-stone-900">{item.senderName}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#9E7D3B] font-medium">{item.relationship}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-stone-400">{item.createdAt}</span>
                    </div>

                    <p className="text-stone-700 text-sm leading-relaxed italic">
                      “{item.message}”
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.88 }}
                      onClick={() => handleLike(item.id)}
                      type="button"
                      className="flex items-center gap-1.5 text-[#C8A359] hover:text-[#9E7D3B] transition-colors py-1 px-2 rounded-lg hover:bg-[#FAF6EE] cursor-pointer"
                      title="Gửi tim chúc phúc"
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[11px] font-medium">Trân quý ({currentLikes})</span>
                    </motion.button>
                    <span className="text-[11px]">Hồng Hải & Thanh Tú</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
