import React, { useState } from 'react';
import { X, Gift, QrCode, Copy, Check, Info } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface GiftBoxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GiftBoxModal: React.FC<GiftBoxModalProps> = ({ isOpen, onClose }) => {
  const [copiedGroom, setCopiedGroom] = useState(false);
  const [copiedBride, setCopiedBride] = useState(false);

  if (!isOpen) return null;

  const handleCopyGroom = () => {
    navigator.clipboard.writeText('0988888888');
    setCopiedGroom(true);
    setTimeout(() => setCopiedGroom(false), 2000);
  };

  const handleCopyBride = () => {
    navigator.clipboard.writeText('0999999999');
    setCopiedBride(true);
    setTimeout(() => setCopiedBride(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DAC1] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Đóng hộp mừng cưới"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF3E5] text-[#9E7D3B] mb-2">
            <Gift className="w-5 h-5" />
          </div>
          <h3 className="font-serif-luxury text-3xl font-semibold text-stone-900">
            Hộp Mừng Cưới
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-md mx-auto leading-relaxed">
            Dành cho bạn bè và người thân ở xa muốn gửi lời chúc phúc cùng món quà ý nghĩa đến cặp đôi
          </p>
        </div>

        {/* Notice about placeholder rule */}
        <div className="mb-6 bg-[#FFFDF9] border border-[#E8DFC9] rounded-xl p-3 flex items-start gap-2.5 text-xs text-stone-600">
          <Info className="w-4 h-4 text-[#9E7D3B] shrink-0 mt-0.5" />
          <p>
            <strong>Lưu ý:</strong> Thông tin tài khoản ngân hàng bên dưới đang để định dạng <em>placeholder chờ cập nhật số tài khoản chính thức</em> từ cô dâu và chú rể.
          </p>
        </div>

        {/* Bank cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Groom Account Card */}
          <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8DFC9] flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold mb-1">
              Mừng cưới Chú rể
            </span>
            <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
              {WEDDING_DATA.groom.fullName}
            </h4>

            {/* QR Placeholder */}
            <div className="w-36 h-36 bg-white rounded-xl border border-dashed border-[#D5C7AD] p-2 my-4 flex flex-col items-center justify-center">
              <QrCode className="w-16 h-16 text-stone-300 mb-1" />
              <span className="text-[10px] text-stone-400 italic">
                [Khung mã QR Chú Rể]
              </span>
            </div>

            <div className="w-full text-left space-y-1 text-xs text-stone-700 bg-white p-3 rounded-xl border border-stone-100 mb-3">
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Ngân hàng</span>
                <span className="font-medium">[Tên Ngân Hàng - Placeholder]</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Số tài khoản</span>
                <span className="font-mono font-medium">[Số TK Chú Rể - Chờ cập nhật]</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Chủ tài khoản</span>
                <span className="font-medium uppercase">{WEDDING_DATA.groom.fullName}</span>
              </div>
            </div>

            <button
              onClick={handleCopyGroom}
              type="button"
              className="w-full py-2 rounded-xl bg-white border border-[#D5C7AD] hover:bg-stone-50 text-stone-700 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
            >
              {copiedGroom ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Đã sao chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>Sao chép STK Chú Rể</span>
                </>
              )}
            </button>
          </div>

          {/* Bride Account Card */}
          <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8DFC9] flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold mb-1">
              Mừng cưới Cô dâu
            </span>
            <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
              {WEDDING_DATA.bride.fullName}
            </h4>

            {/* QR Placeholder */}
            <div className="w-36 h-36 bg-white rounded-xl border border-dashed border-[#D5C7AD] p-2 my-4 flex flex-col items-center justify-center">
              <QrCode className="w-16 h-16 text-stone-300 mb-1" />
              <span className="text-[10px] text-stone-400 italic">
                [Khung mã QR Cô Dâu]
              </span>
            </div>

            <div className="w-full text-left space-y-1 text-xs text-stone-700 bg-white p-3 rounded-xl border border-stone-100 mb-3">
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Ngân hàng</span>
                <span className="font-medium">[Tên Ngân Hàng - Placeholder]</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Số tài khoản</span>
                <span className="font-mono font-medium">[Số TK Cô Dâu - Chờ cập nhật]</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">Chủ tài khoản</span>
                <span className="font-medium uppercase">{WEDDING_DATA.bride.fullName}</span>
              </div>
            </div>

            <button
              onClick={handleCopyBride}
              type="button"
              className="w-full py-2 rounded-xl bg-white border border-[#D5C7AD] hover:bg-stone-50 text-stone-700 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
            >
              {copiedBride ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Đã sao chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>Sao chép STK Cô Dâu</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="text-center pt-6 text-xs text-stone-500">
          Chân thành cảm ơn tình cảm và sự chúc phúc quý báu của bạn!
        </div>
      </div>
    </div>
  );
};
