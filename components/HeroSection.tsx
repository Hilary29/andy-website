'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/use-parallax';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: parallaxRef, offset } = useParallax(0.3);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const images = [
    { alt: 'Artwork 1', src: '/images/11.jpg' },
    { alt: 'Artwork 2', src: '/images/2.jpg' },
    { alt: 'Artwork 3', src: '/images/3.jpg' },
    { alt: 'Artwork 4', src: '/images/24.jpg' },
    { alt: 'Artwork 5', src: '/images/6.jpg' },
    { alt: 'Artwork 6', src: '/images/23.jpg' },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradients and Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000">
        <div className="absolute inset-0  mix-blend-soft-light" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transition-all duration-2000 opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl transition-all duration-2000 opacity-35" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl transition-all duration-2000 opacity-30" />
      </div>

      {/* Image Grid Container */}
      <div
        ref={parallaxRef}
        className="fixed inset-0 z-10 w-full h-full transition-all duration-[2s] ease-out pointer-events-none"
        style={{
          transform: `translateY(${offset}px)`,
          willChange: 'transform',
        }}
      >
        {/* Mobile Grid (3 cols, 6 rows) */}
        <div className="md:hidden w-full h-full grid grid-cols-3 grid-rows-6 gap-1 p-2">
          {/* Image 1 - 2x3 */}
          <div className="col-span-2 row-span-3 relative overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-105">
            <Image
              alt={images[0].alt}
              src={images[0].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-90 brightness-105 contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>

          {/* Image 2 - 1x2 */}
          <div className="col-span-1 row-span-2 relative overflow-hidden shadow-md transform transition-transform duration-700 hover:scale-105">
            <Image
              alt={images[1].alt}
              src={images[1].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-85 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
          </div>

          {/* Image 3 - 1x3 */}
          <div className="col-span-1 row-span-3 relative overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-105">
            <Image
              alt={images[2].alt}
              src={images[2].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-90 brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />
          </div>

          {/* Image 4 - 2x2 */}
          <div className="col-span-2 row-span-2 relative overflow-hidden shadow-md transform transition-transform duration-700 hover:scale-105">
            <Image
              alt={images[3].alt}
              src={images[3].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-80 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Image 5 - 1x2 */}
          <div className="col-span-1 row-span-2 relative overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-105">
            <Image
              alt={images[4].alt}
              src={images[4].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-90 brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-black/30 to-transparent" />
          </div>

          {/* Image 6 - 2x1 */}
          <div className="col-span-2 row-span-1 relative overflow-hidden shadow-md transform transition-transform duration-700 hover:scale-105">
            <Image
              alt={images[5].alt}
              src={images[5].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-85 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/15 to-transparent" />
          </div>

          {/* Filler - 1x1 */}
          <div className="col-span-1 row-span-1 relative overflow-hidden shadow-sm transform transition-transform duration-700 hover:scale-105">
            <Image
              alt="Artwork 7"
              src={images[1].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-75 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
          </div>
        </div>

        {/* Desktop Grid (12 cols, 6 rows) */}
        <div className="hidden md:grid w-full h-full grid-cols-12 grid-rows-6 gap-3 p-6 lg:gap-4 lg:p-8">
          {/* Image 1 - 4x6 (main) */}
          <div className="col-span-4 row-span-6 relative overflow-hidden shadow-xl transform transition-transform duration-1000 hover:scale-[1.02]">
            <Image
              alt={images[0].alt}
              src={images[0].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-90 brightness-105 contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
          </div>

          {/* Image 2 - 3x3 */}
          <div className="col-span-3 row-span-3 relative overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-[1.03]">
            <Image
              alt={images[1].alt}
              src={images[1].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-85 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent" />
          </div>

          {/* Image 3 - 5x2 */}
          <div className="col-span-5 row-span-2 relative overflow-hidden shadow-md transform transition-transform duration-1000 hover:scale-[1.03]">
            <Image
              alt={images[2].alt}
              src={images[2].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-80 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
          </div>

          {/* Image 4 - 5x4 */}
          <div className="col-span-5 row-span-4 relative overflow-hidden shadow-xl transform transition-transform duration-1000 hover:scale-[1.02]">
            <Image
              alt={images[3].alt}
              src={images[3].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-90 brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          {/* Image 5 - 3x3 */}
          <div className="col-span-3 row-span-3 relative overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-[1.04]">
            <Image
              alt={images[4].alt}
              src={images[4].src || "/placeholder.svg"}
              fill
              className="object-cover opacity-85 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/15 to-transparent" />
          </div>
        </div>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Video Background */}
      <div className="fixed inset-0 z-5 w-full h-full bg-black transition-all duration-[2s] ease-out opacity-0 scale-105 pointer-events-none">
        <div className="md:hidden w-full h-full flex items-center justify-center relative">
          <video
            src="/assets/herobackground.mp4"
            autoPlay
            playsInline
            preload="auto"
            muted
            className="w-full h-full object-cover brightness-105 contrast-110"
          />
        </div>
        <div className="hidden md:flex w-full h-full items-center justify-center relative">
          <video
            src="/assets/herobackground.mp4"
            autoPlay
            playsInline
            preload="auto"
            muted
            className="h-[85vh] w-auto object-contain brightness-110 contrast-115 saturate-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-15 w-full h-full flex items-center justify-center">
        <div
          className="text-center px-6 md:px-12 space-y-8 max-w-4xl"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'opacity 1.2s ease-out, transform 1.5s ease-out',
          }}
        >
          {/* Main Title */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-widest leading-tight mb-4 transition-all duration-1000 flex flex-col items-center text-white drop-shadow-2xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0px)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.2s, transform 1.4s ease-out 0.2s',
              textShadow:
                'rgba(255, 255, 255, 0.3) 0px 0px 30px, rgba(255, 255, 255, 0.2) 0px 0px 60px',
              letterSpacing: '0.2em',
            }}
          >
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              ANDY
            </span>
            <span className="text-primary-500 mt-2">DONFACK</span>
          </h1>

          {/* Divider */}
          <div
            className="w-32 h-0.5 mx-auto transition-all duration-1000 bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-lg shadow-white/50"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'opacity 0.8s ease-out 0.4s, transform 1s ease-out 0.4s',
              transformOrigin: 'center center',
            }}
          />

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl md:text-xl lg:text-2xl font-light leading-relaxed transition-all duration-1000 text-white drop-shadow-lg"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0px)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.6s, transform 1.4s ease-out 0.6s',
              textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 10px',
            }}
          >
            WHERE LIGHT AND SHADOW DANCE ON PAPER, BREATHING LIFE INTO STILLNESS
          </p>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg font-bold tracking-wide transition-all duration-1000 text-white/95 drop-shadow-md"
            style={{
              opacity: isLoaded ? 0.9 : 0,
              transform: isLoaded ? 'translateY(0px)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.8s, transform 1.4s ease-out 0.8s',
              textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 5px',
            }}
          >
            HYPERREALISTIC PENCIL ART · TIMELESS COMMISSIONS
          </p>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-96 h-96 bg-white/5 rounded-full blur-3xl transition-all duration-3000 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
