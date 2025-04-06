
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    alt: "Villa exterior view",
    category: "exterior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8a?q=80&w=2021&auto=format&fit=crop",
    alt: "Swimming pool",
    category: "amenities"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
    alt: "Bedroom interior",
    category: "interior"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop",
    alt: "Beach view",
    category: "surroundings"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop",
    alt: "Bathroom",
    category: "interior"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1578898886225-c7c894047899?q=80&w=2070&auto=format&fit=crop",
    alt: "Breakfast spread",
    category: "food"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
    alt: "Villa garden",
    category: "exterior"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?q=80&w=2070&auto=format&fit=crop",
    alt: "Kitesurfing at Paje Beach",
    category: "activities"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Photo Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Take a visual tour of our property, accommodations, and the beautiful surroundings of Paje.
          </p>
          
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {['all', 'exterior', 'interior', 'amenities', 'surroundings', 'food', 'activities'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === category 
                    ? 'bg-ocean-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer hover-scale"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
