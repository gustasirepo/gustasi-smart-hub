import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/utils/localization';
import { Search, MapPin, Star, Clock, Filter, ArrowLeft, ChevronDown, ChevronRight, ChevronLeft, ChevronUp, X, TrendingUp, Sparkles, ChefHat, Leaf, Cake, Users, Zap, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Add pulsing animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }
  @keyframes border-pulse {
    0%, 100% { border-color: rgba(245, 158, 11, 0.1); }
    50% { border-color: rgba(245, 158, 11, 0.3); }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-border-pulse {
    animation: border-pulse 3s ease-in-out infinite;
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;
document.head.appendChild(style);


interface Chef {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  isPro: boolean;
  isFavorite: boolean;
}

const ChefsPage = () => {
  useLanguage();
  const { city = 'Hyderabad' } = useParams<{ city: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'deliveryTime' | 'name'>('rating');
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup' | 'dine-in'>('delivery');
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCuisine, setActiveCuisine] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const scroll = (direction: 'left' | 'right' | number) => {
    if (!scrollContainerRef.current) return;
    if (typeof direction === 'number') {
      // Scroll to specific slide
      const slides = scrollContainerRef.current.querySelectorAll('.carousel-item');
      if (slides[direction]) {
        (slides[direction] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
      return;
    }
    
    // Handle left/right arrow navigation
    const scrollAmount = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftGradient(scrollLeft > 10);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Update current slide based on scroll position
      const scrollPosition = scrollLeft + clientWidth / 2;
      const slides = scrollContainerRef.current.querySelectorAll('.carousel-item');
      let currentIndex = 0;
      
      slides.forEach((slide, index) => {
        const slideLeft = (slide as HTMLElement).offsetLeft;
        const slideWidth = (slide as HTMLElement).offsetWidth;
        if (scrollPosition >= slideLeft && scrollPosition < slideLeft + slideWidth) {
          currentIndex = index;
        }
      });
      
      setCurrentSlide(currentIndex);
    }
  };

  // Add scrollbar styles to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      .hide-scrollbar {
        -ms-overflow-style: none !important;
        overflow: -moz-scrollbars-none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const experienceFilters = [
    { 
      id: 'top-rated',
      label: 'Top Rated',
      description: 'Highest rated restaurants by our community',
      icon: <Star className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-amber-600',
      iconColor: 'text-yellow-300'
    },
    { 
      id: 'trending',
      label: 'Trending',
      description: 'Popular choices in your area',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-red-600 to-orange-600',
      iconColor: 'text-red-200'
    },
    { 
      id: 'new',
      label: 'New',
      description: 'Recently added restaurants',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'from-blue-600 to-cyan-600',
      iconColor: 'text-blue-200'
    },
    { 
      id: 'chef-special',
      label: 'Chef Picks',
      description: 'Unique dishes from master chefs',
      icon: <ChefHat className="w-6 h-6" />,
      gradient: 'from-purple-600 to-pink-600',
      iconColor: 'text-purple-200'
    },
    { 
      id: 'healthy',
      label: 'Healthy',
      description: 'Nutritious and balanced meals',
      icon: <Leaf className="w-6 h-6" />,
      gradient: 'from-green-600 to-emerald-600',
      iconColor: 'text-green-200'
    },
    { 
      id: 'desserts',
      label: 'Desserts',
      description: 'Sweet treats and delights',
      icon: <Cake className="w-6 h-6" />,
      gradient: 'from-pink-600 to-rose-600',
      iconColor: 'text-pink-200'
    },
    { 
      id: 'family',
      label: 'Family Meals',
      description: 'Perfect for sharing with family',
      icon: <Users className="w-6 h-6" />,
      gradient: 'from-indigo-600 to-violet-600',
      iconColor: 'text-indigo-200'
    },
    { 
      id: 'quick',
      label: 'Quick Bites',
      description: 'Fast and delicious options',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-amber-600 to-yellow-600',
      iconColor: 'text-amber-200'
    }
  ];

  const sortOptions: { value: 'rating' | 'deliveryTime' | 'name', label: string }[] = [
    { value: 'rating', label: 'Rating' },
    { value: 'deliveryTime', label: 'Delivery Time' },
    { value: 'name', label: 'Name' },
  ];

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockChefs: Chef[] = [
      {
        id: '1',
        name: 'Spice Garden',
        cuisine: 'North Indian',
        rating: 4.5,
        deliveryTime: '25-35 min',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        isPro: true,
        isFavorite: false
      },
      {
        id: '2',
        name: 'Pasta Paradise',
        cuisine: 'Italian',
        rating: 4.7,
        deliveryTime: '30-40 min',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        isPro: true,
        isFavorite: true
      },
      {
        id: '3',
        name: 'Sushi Master',
        cuisine: 'Japanese',
        rating: 4.8,
        deliveryTime: '20-30 min',
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80',
        isPro: false,
        isFavorite: false
      },
      {
        id: '4',
        name: 'Burger House',
        cuisine: 'American',
        rating: 4.2,
        deliveryTime: '15-25 min',
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80',
        isPro: false,
        isFavorite: false
      },
      {
        id: '5',
        name: 'Taco Fiesta',
        cuisine: 'Mexican',
        rating: 4.4,
        deliveryTime: '20-35 min',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        isPro: true,
        isFavorite: false
      },
      {
        id: '6',
        name: 'Curry House',
        cuisine: 'Indian',
        rating: 4.6,
        deliveryTime: '25-40 min',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        isPro: false,
        isFavorite: true
      },
      {
        id: '7',
        name: 'Noodle Bar',
        cuisine: 'Chinese',
        rating: 4.3,
        deliveryTime: '20-30 min',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
        isPro: true,
        isFavorite: false
      },
      {
        id: '8',
        name: 'Pizza Palace',
        cuisine: 'Italian',
        rating: 4.5,
        deliveryTime: '15-25 min',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        isPro: true,
        isFavorite: true
      },
      {
        id: '9',
        name: 'Burger Joint',
        cuisine: 'American',
        rating: 4.1,
        deliveryTime: '10-20 min',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1599&q=80',
        isPro: false,
        isFavorite: false
      }
    ];
    
    // Simulate API delay
    const timer = setTimeout(() => {
      setChefs(mockChefs);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSortChange = (value: 'rating' | 'deliveryTime' | 'name') => {
    setSortBy(value);
  };

  const toggleFavorite = (id: string) => {
    setChefs(chefs.map(chef => 
      chef.id === id ? { ...chef, isFavorite: !chef.isFavorite } : chef
    ));
  };

  const filteredChefs = chefs.filter(chef => {
    const matchesSearch = chef.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        chef.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = !activeCuisine || activeCuisine === 'All' || 
                          chef.cuisine === activeCuisine;
    return matchesSearch && matchesCuisine;
  });

  const sortedChefs = [...filteredChefs].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'deliveryTime') {
      const aTime = parseInt(a.deliveryTime.split('-')[0]);
      const bTime = parseInt(b.deliveryTime.split('-')[0]);
      return aTime - bTime;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header with Location */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <Link to="/" className="flex items-center text-gray-700 hover:text-black mr-4">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="border-l border-gray-300 pl-4">
              <div className="text-sm text-gray-500">Delivery location</div>
              <div className="font-medium flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-gray-600" />
                <span className="font-semibold">{city}, Telangana</span>
                <ChevronDown className="w-4 h-4 ml-1 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="sticky top-0 z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 py-4">
          {/* Delivery/Pickup Toggle */}
          <div className="flex mb-3 space-x-2 overflow-x-auto pb-1 scrollbar-hide">
            {['Delivery', 'Pickup', 'Dine-in'].map((option) => {
              const isActive = deliveryOption === option.toLowerCase();
              return (
                <button
                  key={option}
                  onClick={() => setDeliveryOption(option.toLowerCase() as 'delivery' | 'pickup' | 'dine-in')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800/70 border border-slate-700/50 hover:border-slate-600/50'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Modern Search Bar with Glass Effect */}
          <div className="relative group w-full">
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-2xl -m-1 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-amber-500/5 via-slate-900/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 .895 2 2 2zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23f59e0b\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                backgroundSize: '100px 100px',
                backgroundRepeat: 'repeat'
              }}></div>
            </div>
            <div className="relative flex items-center bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/70 backdrop-blur-lg rounded-2xl border border-slate-700/50 group-hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-slate-900/30 group-hover:shadow-amber-500/10 border-amber-500/20 animate-border-pulse overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 15s ease infinite'
              }}></div>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-all duration-300 group-hover:scale-110" />
              </div>
              <input
                type="text"
                placeholder="Discover amazing food near you..."
                className="w-full pl-12 pr-12 py-4 bg-transparent text-white placeholder-slate-400/80 focus:outline-none text-base font-medium rounded-2xl transition-all duration-300 group-hover:placeholder-slate-400/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 p-1.5 rounded-full bg-slate-800/70 hover:bg-slate-700/70 text-slate-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : (
                <div className="absolute right-3 px-2 py-0.5 rounded-md bg-slate-800/50 text-xs font-medium text-slate-400 border border-slate-700/50 pointer-events-none">
                  ⌘K
                </div>
              )}
            </div>
            
            {/* Animated underline */}
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-[calc(100%-2rem)]"></div>
          </div>

          {/* Modern Experience Filters */}
          <div className="relative pt-8 pb-6 -mx-2 mb-8 group/carousel">
            {/* Arrow Buttons - Outside the content area */}
            <button 
              onClick={() => scroll('left')}
              className={`absolute -left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-16 flex items-center justify-center rounded-r-lg bg-slate-900/80 hover:bg-slate-800 text-white/90 hover:text-white transition-all duration-300 group ${!showLeftGradient ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 group-hover:scale-125 transition-transform" />
            </button>
            
            <div className="relative z-10 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 backdrop-blur-sm rounded-2xl p-2">
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-scroll pt-4 pb-4 snap-x snap-mandatory hide-scrollbar px-8 cursor-grab active:cursor-grabbing"
                style={{ WebkitOverflowScrolling: 'touch' }}
                onMouseDown={handleMouseDown}
                onMouseLeave={endDrag}
                onMouseUp={endDrag}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={endDrag}
                onTouchMove={handleTouchMove}
              >
                <div className="flex space-x-3 sm:space-x-4 px-3 sm:px-4">
                  {experienceFilters.map((filter) => {
                    const isActive = activeCuisine === filter.id;
                    return (
                      <div key={filter.id} className="carousel-item relative group flex-shrink-0 snap-start mx-0.5 sm:mx-1">
                        <button
                          onClick={() => setActiveCuisine(isActive ? null : filter.id)}
                          className={`relative px-6 sm:px-8 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-medium whitespace-nowrap transition-all duration-300 flex flex-col items-center space-y-2 sm:space-y-3 min-w-[110px] sm:min-w-[130px] backdrop-blur-lg border-2 ${
                            isActive 
                              ? `bg-gradient-to-br ${filter.gradient} text-white shadow-xl shadow-amber-500/20 border-transparent sm:hover:shadow-amber-500/30 transform -translate-y-1` 
                              : 'bg-slate-800/40 text-slate-200 border-slate-700/40 sm:hover:bg-slate-800/80 sm:hover:border-amber-500/40 sm:hover:text-white active:bg-slate-800/60 active:border-amber-500/30 active:translate-y-0 active:scale-[0.98]'
                          }`}
                        >
                          <span className={`text-3xl transition-all duration-300 ${isActive ? 'scale-125' : 'group-hover:scale-110 group-hover:brightness-125'} ${isActive ? 'text-white' : filter.iconColor}`}>
                            {React.cloneElement(filter.icon, {
                              className: `w-6 h-6 ${isActive ? 'text-white' : filter.iconColor}`
                            })}
                          </span>
                          <span className={`text-sm font-semibold ${isActive ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'} transition-all duration-200`}>
                            {filter.label}
                          </span>
                          {isActive && (
                            <span className="absolute -bottom-1.5 left-1/2 w-3 h-1.5 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_4px_rgba(251,191,36,0.3)]" />
                          )}
                        </button>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 text-xs font-medium bg-slate-900/90 text-slate-100 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-2xl border border-slate-700/50 backdrop-blur-sm transform -translate-y-1 scale-95 group-hover:scale-100 group-hover:-translate-y-0.5 z-30">
                          {filter.description}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900/90 rotate-45 border-b border-r border-slate-700/50"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scroll('right')}
              className={`absolute -right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-16 flex items-center justify-center rounded-l-lg bg-slate-900/80 hover:bg-slate-800 text-white/90 hover:text-white transition-all duration-300 group ${!showRightGradient ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 group-hover:scale-125 transition-transform" />
            </button>
            
            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
            <h2 className="text-lg font-semibold text-white">Available Chefs</h2>
            <div className="relative w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto flex items-center justify-between gap-2 bg-slate-800/60 hover:bg-slate-700/70 text-slate-200 border-slate-700/50 hover:border-amber-500/40 text-sm font-medium px-4 py-3 sm:py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-slate-900/20"
                onClick={() => setShowFilters(!showFilters)}
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <span>Sort & Filter</span>
                </div>
                {showFilters ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button>
              
              {/* Sort Options Dropdown */}
              <div className={`absolute z-20 w-full sm:w-64 mt-1 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 ease-in-out ${
                showFilters ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <div className="p-3">
                  <h3 className="font-medium text-slate-200 mb-3 text-sm uppercase tracking-wider">Sort By</h3>
                  <div className="space-y-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowFilters(false);
                        }}
                        className={`w-full px-4 py-3 rounded-lg text-sm font-medium text-left transition-all flex items-center justify-between ${
                          sortBy === option.value
                            ? 'bg-gradient-to-r from-amber-600/20 to-orange-600/20 text-amber-400 border border-amber-500/30'
                            : 'bg-slate-700/50 text-slate-300 border border-slate-600/30 hover:bg-slate-700/70'
                        }`}
                      >
                        {option.label}
                        {sortBy === option.value && (
                          <Check className="w-4 h-4 text-amber-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-2 pb-6 mt-4 sm:mt-6 relative z-0">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : sortedChefs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedChefs.map((chef) => (
              <div key={chef.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <div className="relative">
                  <img 
                    src={chef.image} 
                    alt={chef.name}
                    className="w-full h-48 object-cover"
                  />
                  {chef.isPro && (
                    <span className="absolute top-2 left-2 bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      PRO
                    </span>
                  )}
                  <button 
                    onClick={() => toggleFavorite(chef.id)}
                    className="absolute top-2 right-2 p-2 bg-white/90 rounded-full shadow-sm hover:bg-gray-100"
                  >
                    <svg 
                      className={`w-5 h-5 ${chef.isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-gray-900">{chef.name}</h3>
                    <div className="flex items-center bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {chef.rating}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{chef.cuisine}</p>
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {chef.deliveryTime} • 1.2 km away
                  </div>
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-2 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg border-none"
                  >
                    View Menu <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No chefs found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChefsPage;
