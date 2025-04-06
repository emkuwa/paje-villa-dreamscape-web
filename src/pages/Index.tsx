
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/About';
import AccommodationsSection from '@/components/Accommodations';
import AmenitiesSection from '@/components/Amenities';
import TestimonialsSection from '@/components/Testimonials';
import GallerySection from '@/components/Gallery';
import LocationSection from '@/components/Location';
import BookingSection from '@/components/Booking';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <AccommodationsSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
