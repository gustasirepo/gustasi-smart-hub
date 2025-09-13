import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

interface City {
  id: string;
  name: string;
  icon: string;
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
  const scrollInterval = useRef<NodeJS.Timeout>();
  const currentIndex = useRef(0);
  const isSwiping = useRef(false);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || isSwiping.current) return;
    
    const container = scrollContainerRef.current;
    const itemWidth = 180; // Slightly larger fixed width for better spacing
    const scrollAmount = itemWidth * 1.5;
    
    // Get current scroll position
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (direction === 'left') {
      // If at the start and scrolling left, jump to near the end
      if (currentScroll <= 10) {
        container.scrollTo({
          left: maxScroll - itemWidth,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      }
    } else {
      // If near the end and scrolling right, jump to near the start
      if (currentScroll >= maxScroll - 10) {
        container.scrollTo({
          left: itemWidth,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  }, [isSwiping]);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    
    scrollInterval.current = setInterval(() => {
      scroll('right');
    }, 3000);
    
    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isPaused]);

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, []);

  // Initialize scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Start in the middle of the repeated items
      const itemWidth = 180;
      container.scrollLeft = itemWidth * cities.length;
    }
  }, []);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isMobile) scroll('right');
    },
    onSwipedRight: () => {
      if (isMobile) scroll('left');
    },
    onSwipeStart: () => {
      isSwiping.current = true;
      setIsPaused(true);
    },
    onSwiped: () => {
      isSwiping.current = false;
      setTimeout(() => setIsPaused(false), 1000);
    },
    trackMouse: false,
    trackTouch: true,
    delta: 10 // Minimal distance for a swipe to be detected
  });

  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-4 md:py-6">
      <div className="absolute inset-y-0 left-0 flex items-center z-10">
        <button
          onClick={() => scroll('left')}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg hover:bg-amber-100 hover:scale-110 transition-all duration-300 -ml-1 z-20 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center z-10">
        <button
          onClick={() => scroll('right')}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg hover:bg-amber-100 hover:scale-110 transition-all duration-300 -mr-1 z-20 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      <div
        {...swipeHandlers}
        ref={scrollContainerRef}
        className="flex space-x-4 px-3 overflow-x-auto py-3 no-scrollbar touch-auto"
        style={{
          scrollBehavior: 'smooth',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x',
          WebkitTapHighlightColor: 'transparent',
          scrollSnapType: isMobile ? 'x mandatory' : 'none',
          scrollPadding: '0 16px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          cursor: 'grab',
        }}
      >
        {[...cities, ...cities, ...cities].map((city, index) => (
          <div
            key={`${city.id}-${index}`}
            className="group relative flex flex-col items-center justify-center w-36 h-32 sm:w-40 sm:h-36 md:w-44 md:h-40 rounded-xl p-3 sm:p-4 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0 mx-1 sm:mx-1.5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50/50 to-amber-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {city.icon}
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base text-center group-hover:text-amber-300 transition-colors duration-300">
                {city.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-amber-200/80 text-center font-medium group-hover:text-amber-100 transition-colors duration-300">
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
