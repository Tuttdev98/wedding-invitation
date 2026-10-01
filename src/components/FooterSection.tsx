import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EFECE6] py-16 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Monogram Seal */}
        <div className="w-14 h-14 rounded-full border border-[#D5C7AD] p-1 mx-auto mb-6 flex items-center justify-center bg-white">
          <span className="font-serif-luxury text-xl italic text-[#9E7D3B]">
            H & T
          </span>
        </div>

        <h3 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 font-normal">
          {WEDDING_DATA.bride.shortName} & {WEDDING_DATA.groom.shortName}
        </h3>

        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#9E7D3B] my-3">
          <span>28.11.2026</span>
          <span aria-hidden="true">·</span>
          <span>Khách sạn Bình Minh, Phan Thiết</span>
        </div>

        <p className="font-serif-luxury text-lg italic text-stone-600 max-w-md mx-auto my-6 text-balance">
          “Cảm ơn bạn đã luôn đồng hành, yêu thương và là một phần trong câu chuyện hạnh phúc của chúng mình.”
        </p>

        <div className="flex items-center justify-center gap-2 my-6">
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E0D8C3] hover:border-[#9E7D3B] text-xs text-stone-600 hover:text-stone-900 shadow-2xs transition-all"
            aria-label="Về đầu trang"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#9E7D3B]" />
            <span>Về đầu trang</span>
          </button>
        </div>

        <div className="pt-6 border-t border-stone-200/60 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Nguyễn Thị Hồng Hải & Trương Thanh Tú. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#9E7D3B] fill-current" /> for a lifetime of love
          </p>
        </div>
      </div>
    </footer>
  );
};
