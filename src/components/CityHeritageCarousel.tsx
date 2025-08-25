import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface City {
  id: string;
  name: string;
  icon: React.ReactNode;
  heritage: string;
}

const cities: City[] = [
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    icon: '🏰',
    heritage: 'City of Pearls',
  },
  {
    id: 'delhi',
    name: 'Delhi',
    icon: '🏛️',
    heritage: 'Capital City',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    icon: '🌉',
    heritage: 'City of Dreams',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    icon: '💻',
    heritage: 'Silicon Valley',
  },
  {
    id: 'chennai',
    name: 'Chennai',
    icon: '🏛️',
    heritage: 'Cultural Capital',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    icon: '🕌',
    heritage: 'Pink City',
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    icon: '🌉',
    heritage: 'City of Joy',
  },
];

const CityHeritageCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollAmount = 2;
  const scrollSpeed = isMobile ? 0.8 : 1.2; // Much slower speed
  const lastScrollTime = useRef(0);
  const scrollPosition = useRef(0);
  const animationId = useRef<number>();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const lastFrameTime = useRef(0);
  const targetScroll = useRef(0);
  const ease = 0.05; // Smoother easing

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Update target scroll position with easing
    targetScroll.current = direction === 'left' 
      ? Math.max(0, currentScroll - (container.clientWidth * 0.8))
      : Math.min(maxScroll, currentScroll + (container.clientWidth * 0.8));
  };

  const autoScroll = (timestamp: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const now = performance.now();
    const deltaTime = now - lastFrameTime.current;
    lastFrameTime.current = now;
    
    if (isPaused) {
      animationId.current = requestAnimationFrame(autoScroll);
      return;
    }
    
    // Smooth scroll using requestAnimationFrame timing
    const currentScroll = container.scrollLeft;
    targetScroll.current = (targetScroll.current + scrollSpeed) % maxScroll;
    
    // Use smooth easing for the scroll with dynamic easing
    const distance = targetScroll.current - currentScroll;
    const velocity = distance * ease;
    
    // Apply the scroll with dynamic easing
    container.scrollLeft = currentScroll + velocity;
    
    // Reset position when near the end for infinite scroll
    if (currentScroll >= maxScroll - 5) {
      targetScroll.current = 0;
      container.scrollLeft = 0;
    }
    
    animationId.current = requestAnimationFrame(autoScroll);
  };

  // Use Intersection Observer to pause when not in view
  // Handle mobile detection and resize
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start auto-scrolling
    animationId.current = requestAnimationFrame(autoScroll);
    
    // Pause when tab is not visible
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Pause on hover
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    
    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      setIsPaused(true);
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!container) return;
      e.preventDefault();
      const diff = e.touches[0].clientX;
      container.scrollLeft += diff;
    };
    
    const handleTouchEnd = () => {
      // Resume auto-scroll after a short delay
      setTimeout(() => setIsPaused(false), isMobile ? 1500 : 1000);
    };
    
    // Add event listeners
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isPaused]);

  // Hide scrollbar for all browsers
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      @supports (-webkit-touch-callout: none) {
        /* CSS specific to iOS devices */
        .no-scrollbar {
          -webkit-overflow-scrolling: touch;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-4 md:py-6">
      <div className="absolute inset-y-0 left-0 flex items-center z-10">
        <button
          onClick={() => scroll('left')}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="h-10 w-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg hover:bg-amber-100 hover:scale-110 transition-all duration-300 -ml-1 z-20 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center z-10">
        <button
          onClick={() => scroll('right')}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="h-10 w-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg hover:bg-amber-100 hover:scale-110 transition-all duration-300 -mr-1 z-20 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex space-x-3 px-3 overflow-x-auto py-3 no-scrollbar touch-auto will-change-transform"
        style={{
          scrollBehavior: 'smooth',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          touchAction: 'pan-y',
          transform: 'translateZ(0)',
          WebkitTapHighlightColor: 'transparent',
          scrollSnapType: isMobile ? 'x mandatory' : 'none',
          scrollPadding: '0 16px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {[...cities, ...cities].map((city, index) => (
          <div
            key={`${city.id}-${index}`}
            className={`flex-shrink-0 w-32 h-40 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/10 p-4 flex flex-col items-center justify-center space-y-2 
                     hover:bg-white/20 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/20 
                     transition-all duration-200 ease-linear cursor-pointer group relative overflow-hidden
                     transform hover:-translate-y-1 active:scale-95 touch-manipulation
                     ${isMobile ? 'scroll-snap-align: start' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/20 to-slate-950/80 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="text-4xl mb-2 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {city.icon}
              </div>
              <h3 className="font-bold text-white text-sm text-center group-hover:text-amber-200 transition-colors duration-300">
                {city.name}
              </h3>
              <p className="text-xs text-amber-300/80 text-center font-medium group-hover:text-amber-200 transition-colors duration-300">
                {city.heritage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityHeritageCarousel;
