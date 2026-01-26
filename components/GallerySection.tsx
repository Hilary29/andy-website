'use client';

import Image from 'next/image';
import Link from 'next/link';

interface GalleryItem {
  id: number;
  title: string;
  year: string;
  medium: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: '50 cent portrait',
    year: '2023',
    medium: 'Charcoal',
    description: 'Realistic charcoal portrait of 50 cent',
    image: '/images/10.jpg',
  },
  {
    id: 2,
    title: 'Alex',
    year: '2023',
    medium: 'Graphite',
    description: 'Portrait study in graphite',
    image: '/images/11.jpg',  
  },
  {
    id: 3,
    title: 'Nature Study',
    year: '2023',
    medium: 'Pencil',
    description: 'Detailed nature and landscape composition',
    image: '/images/32.jpg',
  },
  {
    id: 4,
    title: 'Abstract Forms',
    year: '2023',
    medium: 'Mixed Media',
    description: 'Exploration of form and shadow',
    image: '/images/23.jpg',
  },
  {
    id: 5,
    title: 'Portrait Series',
    year: '2023',
    medium: 'Charcoal',
    description: 'Contemporary portrait collection',
    image: '/images/24.jpg',
  },
  {
    id: 6,
    title: 'Light and Shadow',
    year: '2023',
    medium: 'Graphite',
    description: 'Study of light and shadow interaction',
    image: '/images/27.jpg',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative bg-white z-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-light text-[#2C1810] tracking-[0.3em] mb-6 uppercase">
            Gallery
          </h1>
          <div className="w-16 h-px bg-[#2C1810] mx-auto mb-6" />
          <p className="text-[#5C4A3A] text-sm tracking-wide italic">
            A curated collection of contemporary works
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="transition-all duration-700 opacity-100 translate-y-0"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-200 aspect-[3/4] cursor-pointer group mb-3">
                <Image
                  alt={item.title}
                  src={item.image || "/placeholder.svg"}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Text Content */}
              <div className="space-y-1 px-1">
                <p className="text-[#2C1810] text-xs tracking-wide font-light font-serif">
                  <span className="font-normal">{item.id}.</span> {item.title}
                </p>
                <p className="text-[#5C4A3A] text-[10px] tracking-wider uppercase font-serif">
                  {item.year} · {item.medium}
                </p>
                <p className="text-[#7A6A5A] text-[10px] leading-relaxed italic pt-1 font-serif">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <Link href="/gallery" className="flex justify-center mt-20">
          <button
            className="px-12 py-3 border border-primary-500 text-primary-500 text-sm font-light tracking-widest uppercase transition-all duration-500 cursor-pointer hover:text-primary-500"
            aria-label="Load more gallery items"
          >
            Load More
          </button>
        </Link>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        button:focus {
          outline: 2px solid #2C1810;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
