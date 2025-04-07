
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image Container with fixed positioning and z-index */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543355468-3fff89c3a3c2?q=80&w=1974&auto=format&fit=crop"
          alt="Hero background" 
          className="w-full h-full object-cover"
          loading="eager"
          crossOrigin="anonymous"
        />
      </div>
      
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 max-w-4xl animate-fade-in">
          Tropical Paradise Just Steps from Paje Beach
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Experience the perfect blend of comfort and tranquility at our luxury villa and guesthouse in the heart of Zanzibar
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = '#booking'}
          >
            Book Your Stay
          </Button>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-white/10 text-white border-white hover:text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = '#accommodations'}
          >
            Explore Accommodations
          </Button>
        </div>
        
        <div className="absolute bottom-10 flex space-x-8 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <p className="text-sm">Beach</p>
            <p className="font-semibold">2 min walk</p>
          </div>
          <div className="text-center">
            <p className="text-sm">Kitesurfing</p>
            <p className="font-semibold">200m away</p>
          </div>
          <div className="text-center">
            <p className="text-sm">Village</p>
            <p className="font-semibold">Central location</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
