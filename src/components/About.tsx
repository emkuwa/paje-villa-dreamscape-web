
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
              Welcome to Mlango Paje House & Villa
            </h2>
            
            <p className="text-gray-600 mb-6">
              Nestled in the picturesque village of Paje on the eastern coast of Zanzibar, Mlango Paje offers an authentic and comfortable retreat for travelers seeking the perfect balance of relaxation, adventure, and local charm.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our carefully curated accommodations provide a peaceful sanctuary just moments away from the pristine white sands and crystal-clear turquoise waters of Paje Beach - one of Zanzibar's most coveted coastal destinations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-2">
                <Check className="text-ocean-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Just 2 minutes walk to beach</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-ocean-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Delicious breakfast included</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-ocean-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Friendly and attentive staff</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-ocean-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Heart of Paje village</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-ocean-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Clean, comfortable rooms</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-ocean-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Kitesurfing paradise</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop" 
                alt="Mlango Paje exterior view" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ocean-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sand-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
