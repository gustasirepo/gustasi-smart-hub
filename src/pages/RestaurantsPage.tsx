import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, Clock, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/utils/localization';

const RestaurantsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    cuisine: '',
    rating: 0,
    priceRange: '',
    openNow: false,
    delivery: false,
  });
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const cuisines = [
    'Italian', 'Indian', 'Chinese', 'Mexican', 'Japanese',
    'Thai', 'Mediterranean', 'American', 'French', 'Vegan'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', { searchQuery, filters });
  };

  const toggleFilter = (filter: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filter]: prev[filter as keyof typeof prev] === value ? '' : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-amber-50"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-slate-800">Find Restaurants</h1>
            <div className="w-6"></div> {/* For balance */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all duration-200"
              placeholder="Search for restaurants, cuisines, or dishes..."
            />
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg ${showFilters ? 'bg-amber-100 text-amber-700' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-xl shadow-md border border-slate-200 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-slate-800">Filters</h3>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cuisine</label>
                  <div className="flex flex-wrap gap-2">
                    {cuisines.slice(0, 5).map((cuisine) => (
                      <button
                        key={cuisine}
                        type="button"
                        onClick={() => toggleFilter('cuisine', cuisine.toLowerCase())}
                        className={`px-3 py-1.5 text-sm rounded-full ${filters.cuisine === cuisine.toLowerCase() 
                          ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                      >
                        {cuisine}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
                  <div className="flex items-center space-x-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => toggleFilter('rating', rating)}
                        className={`flex items-center px-3 py-1.5 rounded-full ${filters.rating === rating 
                          ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                      >
                        <Star className={`h-4 w-4 ${filters.rating === rating ? 'fill-amber-500' : 'fill-slate-300'} text-amber-500 mr-1`} />
                        {rating}+
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.openNow}
                      onChange={() => toggleFilter('openNow', !filters.openNow)}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
                    />
                    <span className="ml-2 text-sm text-slate-700">Open Now</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.delivery}
                      onChange={() => toggleFilter('delivery', !filters.delivery)}
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-slate-300 rounded"
                    />
                    <span className="ml-2 text-sm text-slate-700">Delivery Available</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Map View Toggle */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-amber-100 text-amber-800">
              List
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md">
              Map
            </button>
          </div>
        </div>

        {/* Restaurant List */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-slate-200 rounded-lg overflow-hidden">
                    {/* Restaurant image would go here */}
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-slate-900">Restaurant Name {item}</h3>
                      <div className="flex items-center bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">
                        <Star className="h-3 w-3 fill-amber-500 text-amber-500 mr-1" />
                        4.5
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 mt-1">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>123 Main St, City</span>
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      <span className="text-slate-700">$$</span>
                      <span className="mx-1 text-slate-300">•</span>
                      <span className="text-slate-600">Italian, Pizza</span>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-slate-500">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>Open until 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RestaurantsPage;
