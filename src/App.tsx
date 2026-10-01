import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { CoupleStorySection } from './components/CoupleStorySection';
import { LoveStorySection } from './components/LoveStorySection';
import { WeddingGallery } from './components/WeddingGallery';
import { EventDetailsSection } from './components/EventDetailsSection';
import { TimelineSection } from './components/TimelineSection';
import { GuestbookSection } from './components/GuestbookSection';
import { ThankYouSection } from './components/ThankYouSection';
import { FooterSection } from './components/FooterSection';
import { RsvpModal } from './components/RsvpModal';
import { MapModal } from './components/MapModal';
import { GiftBoxModal } from './components/GiftBoxModal';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalEffect } from './components/PetalEffect';
import { ClickSparkleEffect } from './components/ClickSparkleEffect';
import { InvitationEnvelope } from './components/InvitationEnvelope';
import { FloatingControls } from './components/FloatingControls';
import { Heart, Navigation, Gift, Mail, Camera } from 'lucide-react';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isGiftBoxOpen, setIsGiftBoxOpen] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [showEnvelope, setShowEnvelope] = useState(true);

  const scrollToWishes = () => {
    const el = document.getElementById('guestbook');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col relative selection:bg-[#E8DFC9] selection:text-stone-900 pb-16 md:pb-0">
      {/* Interactive 3D Gatefold Wax Seal Opening Ceremony */}
      {showEnvelope && (
        <InvitationEnvelope onOpenInvitation={() => setShowEnvelope(false)} />
      )}

      {/* Floating Petals & Golden Dust Particles */}
      <PetalEffect enabled={petalsEnabled} />

      {/* Interactive Cursor Click Sparkle Particle Burst */}
      <ClickSparkleEffect />

      {/* Floating Quick Action Controls (Replaces Static Top Header) */}
      <FloatingControls
        onOpenRsvp={() => setIsRsvpOpen(true)}
        onOpenGiftBox={() => setIsGiftBoxOpen(true)}
        onReopenEnvelope={() => setShowEnvelope(true)}
        petalsEnabled={petalsEnabled}
        onTogglePetals={() => setPetalsEnabled((prev) => !prev)}
      />

      {/* Main Content Sections with Motion Effects */}
      <main className="flex-1">
        {/* Section 1: Hero Invitation & Large Cinematic Banner */}
        <HeroSection
          onOpenRsvp={() => setIsRsvpOpen(true)}
          onOpenMap={() => setIsMapOpen(true)}
          onScrollToWishes={scrollToWishes}
          onOpenGiftBox={() => setIsGiftBoxOpen(true)}
        />

        {/* Section 2: Realtime Live Countdown with Digit Rolling */}
        <CountdownSection />

        {/* Section 3: Bride & Groom, Wedding Portrait & Placeholders */}
        <CoupleStorySection />

        {/* Section 4: Our Love Story Timeline (4 Milestones with Photos) */}
        <LoveStorySection />

        {/* Section 5: Wedding Photo Gallery (Swipeable Touch Carousel & Grid) */}
        <WeddingGallery />

        {/* Section 6: Event Date, Time & Venue in Phan Thiết */}
        <EventDetailsSection onOpenMap={() => setIsMapOpen(true)} />

        {/* Section 7: Wedding Timeline / Schedule */}
        <TimelineSection />

        {/* Section 8: Guestbook / Sending Wishes */}
        <GuestbookSection />

        {/* Section 9: Closing Romantic Thank You Portrait */}
        <ThankYouSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Modals */}
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <GiftBoxModal isOpen={isGiftBoxOpen} onClose={() => setIsGiftBoxOpen(false)} />

      {/* Ambient Romantic Music Controller (Fixed Bottom Right) */}
      <AudioPlayer />

      {/* Compact Mobile Floating Action Bar (within 15% mobile sticky budget) */}
      <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-[#E8DFC9] px-4 py-2.5 flex items-center justify-between shadow-lg">
        <button
          onClick={() => setShowEnvelope(true)}
          type="button"
          className="flex flex-col items-center justify-center text-[10px] text-stone-600 font-medium px-1 py-0.5"
          title="Bìa thiệp"
        >
          <Mail className="w-4 h-4 text-[#9E7D3B] mb-0.5" />
          <span>Bìa thiệp</span>
        </button>

        <button
          onClick={scrollToGallery}
          type="button"
          className="flex flex-col items-center justify-center text-[10px] text-stone-600 font-medium px-1 py-0.5"
          title="Album ảnh"
        >
          <Camera className="w-4 h-4 text-[#9E7D3B] mb-0.5" />
          <span>Album</span>
        </button>

        <button
          onClick={() => setIsMapOpen(true)}
          type="button"
          className="flex flex-col items-center justify-center text-[10px] text-stone-600 font-medium px-1 py-0.5"
        >
          <Navigation className="w-4 h-4 text-[#9E7D3B] mb-0.5" />
          <span>Bản đồ</span>
        </button>

        <button
          onClick={() => setIsGiftBoxOpen(true)}
          type="button"
          className="flex flex-col items-center justify-center text-[10px] text-stone-600 font-medium px-1 py-0.5"
        >
          <Gift className="w-4 h-4 text-[#9E7D3B] mb-0.5" />
          <span>Mừng cưới</span>
        </button>

        <button
          onClick={() => setIsRsvpOpen(true)}
          type="button"
          className="flex-1 ml-2 px-3 py-2 rounded-full bg-[#9E7D3B] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm active:scale-98 transition-all"
        >
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>Xác nhận</span>
        </button>
      </div>
    </div>
  );
}
