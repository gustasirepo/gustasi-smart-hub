import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/utils/localization';
import { Search, MapPin, Star, Clock, Filter, ArrowLeft, ChevronDown, ChevronRight, ChevronUp, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

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
  const [sortBy, setSortBy] = useState('rating');
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCuisine, setActiveCuisine] = useState<string | null>(null);

  const cuisines = [
    'All', 'North Indian', 'South Indian', 'Chinese', 'Italian', 'Mexican',
    'Thai', 'Desserts', 'Biryani', 'Street Food', 'Fast Food'
  ];

  const sortOptions = [
    { value: 'rating', label: 'Rating: High to Low' },
    { value: 'deliveryTime', label: 'Fastest Delivery' },
    { value: 'name', label: 'Name: A to Z' }
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
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm pt-4 pb-4 px-4 border-b border-gray-100 shadow-sm">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for restaurants and food"
              className="block w-full pl-12 pr-10 py-3.5 text-base bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white focus:shadow-lg transition-all duration-200 placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors active:scale-95"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Cuisine Filter Chips */}
          <div className="flex overflow-x-auto pb-2 -mx-1 scrollbar-hide">
            <div className="flex space-x-2 px-1">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setActiveCuisine(cuisine === activeCuisine ? null : cuisine)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    cuisine === activeCuisine
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-100'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Available Chefs</h2>
            <Button 
              variant="outline" 
              className="flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              <span>Sort & Filter</span>
              {showFilters ? (
                <ChevronUp className="w-4 h-4 ml-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-0.5" />
              )}
            </Button>
          </div>

          {/* Sort Options */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showFilters ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-3">
              <h3 className="font-medium text-gray-900 mb-2">Sort By</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all ${
                      sortBy === option.value
                        ? 'bg-orange-50 text-orange-700 border border-orange-200'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                    {sortBy === option.value && (
                      <span className="ml-2 text-orange-500">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
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
