
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const accommodations = [
  {
    id: 1,
    name: "Mlango Paje Villa",
    description: "A luxurious villa featuring 7 rooms with a beautiful swimming pool, perfect for families and groups seeking comfort and privacy.",
    features: ["Swimming pool", "7 rooms", "Air conditioning", "Garden view", "Shared kitchen"],
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=2070&auto=format&fit=crop",
    price: "From $120/night"
  },
  {
    id: 2,
    name: "Mlango Paje Villa Boutique",
    description: "Experience our boutique villa offering with garden, year-round outdoor swimming pool, and elegantly designed spaces for a sophisticated stay.",
    features: ["Outdoor pool", "Garden", "Free WiFi", "Terrace", "Breakfast included"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
    price: "From $95/night"
  },
  {
    id: 3,
    name: "Mlango Paje House II",
    description: "Close to the beach with shared kitchen and various room types including private and shared bathrooms, ideal for budget-conscious travelers.",
    features: ["Shared kitchen", "Multiple room types", "Beach proximity", "Budget-friendly", "Common area"],
    image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1935&auto=format&fit=crop",
    price: "From $45/night"
  }
];

const AccommodationsSection = () => {
  return (
    <section id="accommodations" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Our Accommodations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of thoughtfully designed accommodations, each offering a unique experience while maintaining our signature comfort and hospitality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="overflow-hidden hover-scale">
              <div className="h-56 overflow-hidden">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{accommodation.name}</CardTitle>
                <CardDescription>{accommodation.price}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{accommodation.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {accommodation.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-ocean-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full bg-ocean-600 hover:bg-ocean-700 text-white"
                  onClick={() => window.location.href = '#booking'}
                >
                  Check Availability
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
