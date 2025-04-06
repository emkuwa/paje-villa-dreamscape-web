
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BookingSection = () => {
  return (
    <section id="booking" className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
                  Book Your Stay at Mlango Paje
                </h2>
                <p className="text-gray-600">
                  Reserve your perfect accommodation in paradise and experience the magic of Paje, Zanzibar.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Book Directly</h3>
                  <p className="text-gray-600 mb-4">
                    Contact us directly for the best rates and special offers.
                  </p>
                  <Button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white">
                    Email Us to Book
                  </Button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Book on Platforms</h3>
                  <p className="text-gray-600 mb-4">
                    Find us on your favorite booking platforms.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-ocean-600 text-ocean-600 hover:bg-ocean-50">
                      Booking.com
                    </Button>
                    <Button variant="outline" className="border-ocean-600 text-ocean-600 hover:bg-ocean-50">
                      Airbnb
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-ocean-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Special Offers</h3>
                <p className="text-gray-600 mb-4">
                  Get 15% off for stays of 7 nights or more when booking directly with us!
                </p>
                <Button className="bg-ocean-600 hover:bg-ocean-700 text-white px-8">
                  Claim This Offer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
