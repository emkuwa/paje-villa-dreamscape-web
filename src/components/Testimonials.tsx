
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "The staff were wonderful too. Accommodating, polite and very helpful.",
    author: "Donna",
    location: "United Kingdom",
    source: "Planet of Hotels"
  },
  {
    id: 2,
    quote: "I loved the breakfast and the environment. Visited on a solo trip and the safety I felt was like no other. LOVED it here. Clean, safe, spacious.",
    author: "Lawrence",
    location: "United States",
    source: "Planet of Hotels"
  },
  {
    id: 3,
    quote: "It was really nice, everything was clean and the breakfast was delicious. Staff was very attentive and flexible...",
    author: "Sarah",
    location: "Austria",
    source: "Planet of Hotels"
  },
  {
    id: 4,
    quote: "We loved everything about the place!!! The location is just 2mins walk from the beach, very private, superb breakfast, they also have heater in all the rooms and the staff are all lovely.",
    author: "Ruby",
    location: "Qatar",
    source: "Planet of Hotels"
  },
  {
    id: 5,
    quote: "Such a great place, it was stylish and really clean compare to other places that we stayed at on the island, such a nice atmosphere, delicious breakfast by the pool! Amazing staff - very helpful.",
    author: "Patryk",
    location: "Poland",
    source: "Planet of Hotels"
  },
  {
    id: 6,
    quote: "Great location and incredibly friendly staff! The breakfast was really good and we also really liked the possibility we had of cooking our own food. It is very close to the beach and in a place that feels very safe.",
    author: "Kajsa",
    location: "Sweden",
    source: "Booking.com"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-ocean-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">What Our Guests Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from travelers who have experienced the warmth and hospitality of Mlango Paje.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="inline-block w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 font-semibold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location} - {testimonial.source}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Import the Star component from lucide-react
import { Star } from 'lucide-react';

export default TestimonialsSection;
