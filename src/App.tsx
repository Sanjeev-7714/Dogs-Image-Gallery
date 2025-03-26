import React from 'react';
import { Dog } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&q=80",
    title: "Julie's Rabbit Ears"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&q=80",
    title: "The Innocent Look"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&q=80",
    title: "Big Eyed Buggy"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&q=80",
    title: "The Saint Doggo"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=500&q=80",
    title: "Happy Retriever"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&q=80",
    title: "Curious Husky"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80",
    title: "Dalmatian Smile"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500&q=80",
    title: "Sleepy Corgi"
  }
];

function App() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dog size={40} className="text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Dogs Image Gallery</h1>
          </div>
          <p className="text-gray-600 text-lg">A collection of adorable Friendly companions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-gray-700 font-medium mt-2">
                {image.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;