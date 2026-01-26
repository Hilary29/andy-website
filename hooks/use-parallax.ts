'use client';

import { useEffect, useRef, useState } from 'react';

export function useParallax(strength: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const windowHeight = window.innerHeight;

        // Only calculate parallax if element is in view
        if (elementTop < windowHeight && elementTop > -rect.height) {
          const distance = windowHeight - elementTop;
          const percentage = distance / (windowHeight + rect.height);
          setOffset(percentage * 100 * strength);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [strength]);

  return { ref, offset };
}
