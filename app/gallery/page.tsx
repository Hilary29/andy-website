'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

interface GalleryItem {
    id: number;
    title: string;
    year: string;
    medium: string;
    description: string;
    image: string;
    category?: string;
}

const allGalleryItems: GalleryItem[] = [
    {
        id: 1,
        title: '50 cent portrait',
        year: '2025',
        medium: 'Charcoal',
        description: 'Realistic charcoal portrait of 50 cent',
        image: '/images/1.jpg', 
    },
    {
        id: 2,
        title: 'Alex',
        year: '2025',
        medium: 'Graphite',
        description: 'Portrait study in graphite',
        image: '/images/2.jpg',
        
    },
    {
        id: 3,
        title: 'Nature Study',
        year: '2025',
        medium: 'Pencil',
        description: 'Detailed nature and landscape composition',
        image: '/images/3.jpg', 
    },
    {
        id: 4,
        title: 'Abstract Forms',
        year: '2025',
        medium: 'Mixed Media',
        description: 'Exploration of form and shadow',
        image: '/images/4.jpg', 
    },
    {
        id: 5,
        title: 'Portrait Series',
        year: '2025',
        medium: 'Charcoal',
        description: 'Contemporary portrait collection',
        image: '/images/5.jpg', 
    },
    {
        id: 6,
        title: 'Light and Shadow',
        year: '2025',
        medium: 'Graphite',
        description: 'Study of light and shadow interaction',
        image: '/images/6.jpg',
    },
    {
        id: 7,
        title: 'Urban Landscape',
        year: '2024',
        medium: 'Pencil',
        description: 'Contemporary urban scenery',
        image: '/images/7.jpg', 
    },
    {
        id: 8,
        title: 'Still Life',
        year: '2024',
        medium: 'Charcoal',
        description: 'Classical still life arrangement',
        image: '/images/10.jpg',
    },
    {
        id: 9,
        title: 'Portrait Detail',
        year: '2024',
        medium: 'Graphite',
        description: 'Close-up portrait study',
        image: '/images/22.jpg',
    },
    {
        id: 10,
        title: 'Composition Study',
        year: '2025',
        medium: 'Mixed Media',
        description: 'Composition and balance exploration',
        image: '/images/24.jpg', 
    },
    {
        id: 11,
        title: 'Expressive Sketch',
        year: '2024',
        medium: 'Charcoal',
        description: 'Expressive figure sketching',
        image: '/images/27.jpg', 
    },
    {
        id: 12,
        title: 'Mountain Peak',
        year: '2024',
        medium: 'Pencil',
        description: 'Mountain landscape study',
        image: '/images/28.jpg', 
    },
];

const categories = ['All', 'Portraits', 'Landscapes', 'Abstract', 'Still Life'];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = useMemo(() => {
        if (activeCategory === 'All') {
            return allGalleryItems;
        }
        return allGalleryItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="min-h-screen bg-black/85">
            {/* Page Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary-500 tracking-[0.2em] mb-6 uppercase">
                        Complete Gallery
                    </h1>
                    <div className="w-20 h-px bg-primary-900 mx-auto mb-8" />
                    <p className="text-primary-50 text-base md:text-lg tracking-wide max-w-2xl mx-auto">
                        A comprehensive collection of realistic pencil art and contemporary works
                    </p>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="sticky top-20 md:top-24 bg-black/35 backdrop-blur-md z-30 py-6 md:py-8 border-b border-primary-900/15">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 text-base md:text-sm tracking-wider uppercase font-light transition-all duration-300 border ${activeCategory === category
                                        ? 'bg-primary-900 text-white font-semibold border-primary-900'
                                        : 'bg-transparent text-primary-900 border-primary-900 hover:bg-primary-900 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="group transition-all duration-700 opacity-100 translate-y-0 animate-fadeIn"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden bg-gray-100 aspect-3/4 cursor-pointer mb-4">
                                    <Image
                                        alt={item.title}
                                        src={item.image || '/placeholder.svg'}
                                        fill
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-2 px-2">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-white text-sm font-light tracking-wide flex-1">
                                            <span className="font-semibold">{item.title}</span> 
                                        </h3>
                                    </div>
                                    <p className="text-primary-500 text-xs tracking-wider uppercase font-light">
                                        {item.year} · {item.medium}
                                    </p>
                                    <p className="text-primary-50 text-xs leading-relaxed italic">
                                        {item.description}
                                    </p>
             
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-[#5C4A3A] text-lg">No works found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="bg-primary-900 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-light mb-2">{allGalleryItems.length}+</p>
                            <p className="text-sm tracking-widest uppercase">Total Works</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-light mb-2">100%</p>
                            <p className="text-sm tracking-widest uppercase">realistic</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-light mb-2">{new Date().getFullYear()}</p>
                            <p className="text-sm tracking-widest uppercase">Latest Works</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 border-t border-primary-900/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-primary-900 tracking-[0.2em] mb-6 uppercase">
                        Commission Your Artwork
                    </h2>
                    <p className="text-primary-500 text-base mb-10 max-w-2xl mx-auto">
                        Interested in a custom realistic pencil portrait? Get in touch to discuss your vision and commission a unique piece.
                    </p>
                    <button className="px-12 py-3 rounded-full border border-primary-500 text-primary-500 text-sm font-semibold tracking-widest uppercase transition-all duration-500 hover:bg-primary-600 hover:text-white">
                        Start Commission
                    </button>
                </div>
            </section>

            {/* Styles */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        button:focus {
          outline: 2px solid #2C1810;
          outline-offset: 2px;
        }
      `}</style>
        </main>
    );
}
