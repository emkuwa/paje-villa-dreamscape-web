
import React from 'react';
import { Wifi, Star, CircleCheck, MapPin, Phone, Image } from 'lucide-react';

const amenities = [
  {
    icon: <Wifi className="w-10 h-10 text-ocean-600" />,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary Wi-Fi available throughout the property."
  },
  {
    icon: <Star className="w-10 h-10 text-ocean-600" />,
    title: "Delicious Breakfast",
    description: "Start your day with our highly rated, varied breakfast included with your stay."
  },
  {
    icon: <CircleCheck className="w-10 h-10 text-ocean-600" />,
    title: "Swimming Pool",
    description: "Enjoy our refreshing swimming pool available at the Villa and Villa Boutique."
  },
  {
    icon: <MapPin className="w-10 h-10 text-ocean-600" />,
    title: "Prime Location",
    description: "Just a 2-minute walk to Paje Beach and central to local attractions and restaurants."
  },
  {
    icon: <Phone className="w-10 h-10 text-ocean-600" />,
    title: "Airport Shuttle",
    description: "Convenient airport transfer service available for an additional fee."
  },
  {
    icon: <Image className="w-10 h-10 text-ocean-600" />,
    title: "Shared Kitchen",
    description: "Access to fully equipped shared kitchen facilities for self-catering options."
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Amenities & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of amenities and services designed to make your stay comfortable, convenient, and memorable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-ocean-50 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Additional Amenities</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Air conditioning (select rooms)",
              "Family rooms",
              "Non-smoking rooms",
              "Terrace/Sun deck",
              "Garden",
              "Safe deposit boxes",
              "Pet-friendly (upon request)",
              "Mosquito nets",
              "Fans",
              "Luggage storage",
              "Daily housekeeping",
              "Laundry service"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-ocean-400 rounded-full"></div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
