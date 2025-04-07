
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    alt: "Villa exterior view",
    category: "exterior"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg",
    alt: "Swimming pool",
    category: "amenities"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    alt: "Bedroom interior",
    category: "interior"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1019980/pexels-photo-1019980.jpeg",
    alt: "Beach view",
    category: "surroundings"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
    alt: "Bathroom",
    category: "interior"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/2199190/pexels-photo-2199190.jpeg",
    alt: "Breakfast spread",
    category: "food"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/990432/pexels-photo-990432.jpeg",
    alt: "Villa garden",
    category: "exterior"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/3532492/pexels-photo-3532492.jpeg",
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
              className="overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => setSelectedImage(image.url)}
            >
              <AspectRatio ratio={1 / 1} className="bg-gray-100">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.url}`);
                    e.currentTarget.src = "https://via.placeholder.com/400?text=Image+Not+Available";
                  }}
                />
              </AspectRatio>
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
                onError={(e) => {
                  console.error(`Failed to load image in modal: ${selectedImage}`);
                  e.currentTarget.src = "https://via.placeholder.com/800x600?text=Image+Not+Available";
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
