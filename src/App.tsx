import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DirectBookingBanner } from './components/DirectBookingBanner';
import { PhotoGallery } from './components/PhotoGallery';
import { PropertyOverview } from './components/PropertyOverview';
import { AmenitiesSection } from './components/AmenitiesSection';
import { BedroomsSection } from './components/BedroomsSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { HouseRulesSection } from './components/HouseRulesSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { HostContactModal } from './components/HostContactModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleScrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans-clean antialiased">
      {/* Top Bar Navigation conforming to the 3-Zone contract */}
      <Header
        onOpenBooking={handleScrollToBooking}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleScrollToBooking}
          onOpenGallery={handleScrollToGallery}
        />

        {/* Direct Booking Advantage Banner */}
        <DirectBookingBanner onOpenBooking={handleScrollToBooking} />

        {/* Property Introduction & Specifications */}
        <PropertyOverview onOpenBooking={handleScrollToBooking} />

        {/* High-Resolution Photo Gallery & Lightbox */}
        <PhotoGallery />

        {/* Key Features & Amenities */}
        <AmenitiesSection />

        {/* Bedrooms & Sleeping Arrangements */}
        <BedroomsSection />

        {/* Integrated Smoobu Direct Booking Engine */}
        <BookingSection onOpenContact={() => setIsContactModalOpen(true)} />

        {/* Location & Surrounding Area */}
        <LocationSection />

        {/* House Policies & Details */}
        <HouseRulesSection />

        {/* Frequently Asked Questions */}
        <FAQSection onOpenContact={() => setIsContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleScrollToBooking}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Mobile Sticky Bar (<15% viewport height) */}
      <MobileStickyBar onOpenBooking={handleScrollToBooking} />

      {/* Host Direct Contact Modal */}
      <HostContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
