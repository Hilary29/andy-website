'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface GalleryItem {
    id: number;
    title: string;
    year: string;
    medium: string;
    description?: string;
    image: string;
    category?: string;
}

const allGalleryItems: GalleryItem[] = [
    {
        id: 1,
        title: 'Denise',
        year: '2024',
        medium: 'Charcoal',
        image: '/images/10.jpg',
        category: 'Commissions',
    },
    {
        id: 2,
        title: 'Happiness',
        year: '2020',
        medium: 'Pencil',
        image: '/images/24.jpg',
        category: 'Original Works',
    },
    {
        id: 3,
        title: 'Baudoin',
        year: '2025',
        medium: 'charcoal',
        image: '/images/11.jpg',
        category: 'Commissions',
    },
    {
        id: 4,
        title: 'Ruth',
        year: '2025',
        medium: 'charcoal, colored pencils',
        image: '/images/6.jpg',
        category: 'Commissions',
    },
    {
        id: 5,
        title: 'Marie',
        year: '2025',
        medium: 'Pencil',
        description: 'Contemporary portrait collection',
        image: '/images/1.jpg',
        category: 'Commissions',
    },
    {
        id: 6,
        title: 'Manuela',
        year: '2026',
        medium: 'Charcoal',
        image: '/images/32.jpg',
        category: 'Commissions',
    },
    {
        id: 7,
        title: 'Zendaya',
        year: '2025, In progress',
        medium: 'Charcoal',
        image: '/images/13.jpg',
        category: 'Original Works',
    },
    {
        id: 8,
        title: 'Y\'a Levis',
        year: '2023',
        medium: 'Charcoal',
        image: '/images/3.jpg',
        category: 'Original Works',
    },
    {
        id: 9,
        title: 'Sara',
        year: '2025',
        medium: 'charcoal, Pencil',
        image: '/images/22.jpg',
        category: 'Commissions',
    },
    {
        id: 10,
        title: 'Flow',
        year: '2022',
        medium: 'charcoal',
        image: '/images/2.jpg',
        category: 'Original Works',
    },
    {
        id: 11,
        title: 'Océane',
        year: '2025',
        medium: 'Charcoal',
        image: '/images/27.jpg',
        category: 'Commissions',
    },
    {
        id: 12,
        title: 'Fearless',
        year: '2024',
        medium: 'charcoal, Pencil',
        image: '/images/28.jpg',
        category: 'Original Works',
    },
    {
        id: 13,
        title: 'Mountain Peak',
        year: '2024',
        medium: 'pencil, charcoal',
        description: 'Mountain landscape study',
        image: '/images/33.jpeg',
        category: 'Commissions',
    },
    {
        id: 14,
        title: 'Order',
        year: '2024',
        medium: 'Pencil',
        description: 'Mountain landscape study',
        image: '/images/31.jpg',
        category: 'Commissions',
    },
    {
        id: 15,
        title: 'Order',
        year: '2024',
        medium: 'Pencil',
        description: 'Mountain landscape study',
        image: '/images/35.jpeg',
        category: 'Commissions',
    },
    {
        id: 16,
        title: 'Strengthless',
        year: '2021',
        medium: 'Charcoal',
        image: '/images/23.jpg',
        category: 'Original Works',
    },
    {
        id: 17,
        title: 'Framed order',
        year: '2025',
        medium: 'Pencil',
        description: 'Mountain landscape study',
        image: '/images/4.jpg',
        category: 'Commissions',
    },
    {
        id: 18,
        title: 'Order',
        year: '2025',
        medium: 'Charcoal, Pencil',
        image: '/images/34.jpeg',
        category: 'Commissions',
    },
    {
        id: 19,
        title: 'Framed order',
        year: '2025',
        medium: 'Charcoal',
        image: '/images/5.jpg',
        category: 'Commissions',
    },
];

const categories = ['All', 'Commissions', 'Original Works'];

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
                        A comprehensive collection of realistic pencil art and modern works
                    </p>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className=" top-20 md:top-24 bg-black/35 backdrop-blur-md z-30 py-6 md:py-8 border-b border-primary-900/15">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 text-base md:text-sm tracking-wider uppercase font-light transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-primary-900 text-white font-semibold border-primary-900'
                                    : 'bg-transparent text-primary-600 border-primary-600 hover:bg-primary-900 hover:text-white'
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
                                        <h3 className="text-white text-lg font-light tracking-wide flex-1">
                                            <span className="font-semibold">{item.title}</span>
                                        </h3>
                                        <Badge className='bg-primary-500/10 text-gray-300'>{item.category}</Badge>
                                    </div>
                                    <p className="text-primary-500 text-base tracking-wider ">
                                        {item.year} · <span className='uppercase font-light'>{item.medium}</span>
                                    </p>


                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-primary-50 text-lg">No works found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="bg-primary-900 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div>
                            {/* <p className="text-4xl md:text-5xl font-light mb-2">{allGalleryItems.length}+</p> */}
                            <p className="text-4xl md:text-5xl font-light mb-2">20+</p>
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
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary-900 tracking-[0.2em] mb-6 uppercase">
                        Commission Your Artwork
                    </h2>
                    <p className="text-primary-500 text-base mb-10 max-w-2xl mx-auto">
                        Interested in a custom realistic pencil portrait? Get in touch to discuss your vision and commission a unique piece.
                    </p>
                    <button className="px-12 py-3 rounded-full border border-primary-500 text-primary-500 text-sm font-semibold tracking-widest uppercase transition-all duration-500 hover:bg-white/10 ">
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
