
import React from 'react';
import { MapPin, Phone, Wifi } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Our Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perfectly positioned in the heart of Paje village, just a 2-minute walk from the stunning beach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0510539380646!2d39.53661207406095!3d-6.267088761551586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d356b4a74a6b7%3A0x4cbbcf57de6e4df2!2sPaje%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1712432384486!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mlango Paje Location Map"
            ></iframe>
          </div>
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-ocean-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">Mlango Paje House & Villa</p>
                    <p className="text-gray-600">Paje Village, Zanzibar</p>
                    <p className="text-gray-600">Tanzania</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-ocean-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+255 777 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Wifi className="w-5 h-5 text-ocean-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">info@mlangopaje.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-ocean-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Nearby Attractions</h3>
              
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3"></span>
                  <span className="text-gray-700">Paje Beach (2 min walk)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3"></span>
                  <span className="text-gray-700">Airborne Kite Centre (200m)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3"></span>
                  <span className="text-gray-700">Local restaurants and cafes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3"></span>
                  <span className="text-gray-700">Supermarkets and shops</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3"></span>
                  <span className="text-gray-700">ATMs</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ocean-400 rounded-full mr-3"></span>
                  <span className="text-gray-700">Jozani Forest (30 min drive)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
