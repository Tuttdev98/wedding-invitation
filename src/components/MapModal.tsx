import React from 'react';
import { X, MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const encodedAddress = encodeURIComponent(WEDDING_DATA.venue.fullAddress);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DAC1] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors z-10"
          aria-label="Đóng bản đồ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5 pr-8">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold mb-1">
            <MapPin className="w-4 h-4" />
            <span>Địa Điểm Tổ Chức Tiệc Cưới</span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-stone-900">
            {WEDDING_DATA.venue.name}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {WEDDING_DATA.venue.fullAddress}
          </p>
        </div>

        {/* Embedded Map Frame */}
        <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 relative mb-5">
          <iframe
            title="Bản đồ Khách sạn Bình Minh Phan Thiết"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        {/* Directions & Navigation options */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-stone-100 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#9E7D3B] shrink-0" />
            <span>Tọa lạc trên đường Lê Lợi, gần trung tâm bờ biển TP. Phan Thiết</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={WEDDING_DATA.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#9E7D3B] text-white font-medium flex items-center gap-1.5 hover:bg-[#886a2e] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Mở Google Maps</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
