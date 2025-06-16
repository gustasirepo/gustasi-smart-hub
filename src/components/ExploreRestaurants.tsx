
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { t } from "@/utils/localization";
import { Search, MapPin, Star, Clock, Utensils, Coffee, Martini, Hotel, ChefHat, ArrowRight } from "lucide-react";

const ExploreRestaurants = () => {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate('/restaurants');
  };
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const venueTypes = [
    { name: t("rolling.restaurant"), icon: <Utensils className="w-5 h-5" /> },
    { name: t("rolling.cafe"), icon: <Coffee className="w-5 h-5" /> },
    { name: t("rolling.bar"), icon: <Martini className="w-5 h-5" /> },
    { name: t("rolling.resort"), icon: <Hotel className="w-5 h-5" /> },
    { name: t("rolling.chef"), icon: <ChefHat className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentKeywordIndex((prev) => (prev + 1) % venueTypes.length);
          setIsVisible(true);
        }, 300);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, venueTypes.length]);

  // Get current venue type with icon
  const currentVenue = venueTypes[currentKeywordIndex];

  return (
    <section className="py-16 lg:py-28 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-800 bg-amber-100 rounded-full mb-4">
              {t("rolling.subtitle")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Discover Amazing {currentVenue.name} <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className={`relative z-10 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-2'}`}>
                  Near You
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-100/60 -z-0 transform -translate-y-1"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Find the best dining experiences, from cozy cafes to fine dining restaurants, all in one place.
            </p>
            
            {/* Large CTA Button */}
            <Button 
              onClick={handleExploreClick}
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("rolling.explore")} Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="text-sm text-slate-500 flex items-center bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-100">
                <MapPin className="w-4 h-4 mr-1.5 text-amber-600" />
                New York • London • Paris
              </span>
              <span className="text-sm text-slate-500 flex items-center bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-100">
                <Star className="w-4 h-4 mr-1.5 text-amber-600" />
                Top Rated
              </span>
              <span className="text-sm text-slate-500 flex items-center bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-100">
                <Clock className="w-4 h-4 mr-1.5 text-amber-600" />
                Open Now
              </span>
            </div>
          </div>

          {/* Venue Type Selector */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {venueTypes.map((venue, index) => (
              <button
                key={venue.name}
                onClick={() => {
                  setCurrentKeywordIndex(index);
                  setIsVisible(true);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
                  currentKeywordIndex === index
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200 hover:border-amber-200'
                }`}
              >
                {React.cloneElement(venue.icon, {
                  className: `w-5 h-5 ${currentKeywordIndex === index ? 'text-white' : 'text-amber-600'}`
                })}
                <span className="font-medium">{venue.name}s</span>
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-amber-50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">50,000+</div>
              <div className="text-sm text-slate-600">{t("rolling.restaurants")}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">1M+</div>
              <div className="text-sm text-slate-600">{t("rolling.users")}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">4.9</span>
              </div>
              <div className="text-sm text-slate-600">{t("rolling.rating")}</div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}} />
    </section>
  );
};

export default ExploreRestaurants;
