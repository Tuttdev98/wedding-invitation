import React, { useState } from 'react';
import { X, CheckCircle2, Heart, Users, Utensils, Phone, User } from 'lucide-react';
import { RsvpSubmission } from '../types/wedding';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose }) => {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendance, setAttendance] = useState<'attending' | 'not_attending'>('attending');
  const [partySize, setPartySize] = useState<number>(1);
  const [dietary, setDietary] = useState<'standard' | 'vegetarian'>('standard');
  const [wishes, setWishes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const submission: RsvpSubmission = {
      id: `rsvp-${Date.now()}`,
      guestName: guestName.trim(),
      phone: phone.trim(),
      attendance,
      partySize: attendance === 'attending' ? partySize : 0,
      dietaryPreference: dietary,
      wishes: wishes.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('wedding_rsvps_hai_tu') || '[]');
    existing.push(submission);
    localStorage.setItem('wedding_rsvps_hai_tu', JSON.stringify(existing));

    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setGuestName('');
    setPhone('');
    setWishes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DAC1] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Đóng bảng xác nhận"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif-luxury text-3xl text-stone-900 font-semibold">
              Xác Nhận Thành Công!
            </h3>
            <p className="text-stone-600 text-sm max-w-sm mx-auto leading-relaxed">
              Cảm ơn bạn <strong>{guestName}</strong> đã gửi phản hồi.
              {attendance === 'attending'
                ? ' Chúng mình rất háo hức được đón tiếp bạn và chung vui trong ngày trọng đại 28/11/2026!'
                : ' Cảm ơn bạn vì tình cảm ấm áp dành cho Hồng Hải & Thanh Tú!'}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-[#9E7D3B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#886a2e] transition-all"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF3E5] text-[#9E7D3B] mb-2">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h3 className="font-serif-luxury text-3xl font-semibold text-stone-900">
                Xác Nhận Tham Dự
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Vui lòng phản hồi sớm để Hồng Hải & Thanh Tú chuẩn bị đón tiếp chu đáo nhất
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                  Họ và tên quý khách <span className="text-[#9E7D3B]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ tên của bạn..."
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E7D3B] bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                  Số điện thoại
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    placeholder="Số điện thoại liên hệ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E7D3B] bg-[#FAF8F5]"
                  />
                </div>
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1.5">
                  Bạn sẽ tham dự chứ?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`p-3 rounded-xl border text-xs font-medium transition-all text-center flex flex-col items-center justify-center gap-1 ${
                      attendance === 'attending'
                        ? 'border-[#9E7D3B] bg-[#FAF6EE] text-[#9E7D3B] font-semibold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>✓ Sẽ tham dự</span>
                    <span className="text-[10px] text-stone-400">Đến chung vui cùng bạn</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('not_attending')}
                    className={`p-3 rounded-xl border text-xs font-medium transition-all text-center flex flex-col items-center justify-center gap-1 ${
                      attendance === 'not_attending'
                        ? 'border-stone-400 bg-stone-100 text-stone-800 font-semibold'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <span>✕ Tiếc là không thể đến</span>
                    <span className="text-[10px] text-stone-400">Gửi lời chúc từ xa</span>
                  </button>
                </div>
              </div>

              {attendance === 'attending' && (
                <>
                  {/* Party size */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                      Số lượng người tham dự
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                      <select
                        value={partySize}
                        onChange={(e) => setPartySize(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E7D3B] bg-[#FAF8F5]"
                      >
                        <option value={1}>1 người (Chỉ mình tôi)</option>
                        <option value={2}>2 người (Tôi và người thương/bạn)</option>
                        <option value={3}>3 người</option>
                        <option value={4}>4 người (Gia đình)</option>
                      </select>
                    </div>
                  </div>

                  {/* Dietary */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                      Khẩu phần tiệc
                    </label>
                    <div className="relative">
                      <Utensils className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                      <select
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value as 'standard' | 'vegetarian')}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E7D3B] bg-[#FAF8F5]"
                      >
                        <option value="standard">Tiệc mặn tiêu chuẩn</option>
                        <option value="vegetarian">Tiệc chay thanh đạm</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                  Lời nhắn gửi cặp đôi (tùy chọn)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ghi chú về chỗ ngồi hoặc lời nhắn..."
                  value={wishes}
                  onChange={(e) => setWishes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E7D3B] bg-[#FAF8F5] resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#9E7D3B] hover:bg-[#886a2e] text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Gửi phản hồi tham dự</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
