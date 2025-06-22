
import React, { useState, useEffect, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { t, useLanguage } from "@/utils/localization";
import { Search, MapPin, Star, Clock, Utensils, Coffee, Martini, Hotel, ChefHat, ArrowRight } from "lucide-react";

interface VenueType {
  name: string;
  icon: ReactElement;
  translatedName?: string;
}

const ExploreRestaurants = () => {
  // This ensures the component re-renders when language changes
  useLanguage();
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate('/restaurants');
  };
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const venueTypes: VenueType[] = [
    { name: "explore.restaurant", icon: <Utensils className="w-5 h-5 text-amber-400" /> },
    { name: "explore.cafe", icon: <Coffee className="w-5 h-5 text-amber-400" /> },
    { name: "explore.bar", icon: <Martini className="w-5 h-5 text-amber-400" /> },
    { name: "explore.resort", icon: <Hotel className="w-5 h-5 text-amber-400" /> },
    { name: "explore.chef", icon: <ChefHat className="w-5 h-5 text-amber-400" /> }
  ];
  
  // Get translated venue types
  const translatedVenueTypes: VenueType[] = venueTypes.map(venue => ({
    ...venue,
    translatedName: t(venue.name)
  }));

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
  const currentVenue = translatedVenueTypes[currentKeywordIndex];

  return (
    <section className="py-16 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#0F0E16] via-[#191B24] to-[#0F0E16] relative">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D8C7AA]/20 to-[#B59469]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#B59469]/15 to-[#D8C7AA]/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8C7AA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-white to-[#F5F2ED] bg-clip-text text-transparent">
                {t('explore.discoverAmazing')}
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className={`relative z-10 bg-gradient-to-r from-[#D8C7AA] via-[#C9B48C] to-[#B59469] bg-clip-text text-transparent transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-2'}`}>
                  {t('explore.nearYou')}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-900/30 -z-0 transform -translate-y-1 rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              {t('explore.description')}
            </p>
            
            {/* Large CTA Button */}
            <Button 
              onClick={handleExploreClick}
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-amber-500/20 relative overflow-hidden group"
            >
              <span className="relative z-10">
                {t("explore.exploreNow")}
                <span className={`ml-2.5 transition-transform duration-200 ${currentKeywordIndex === 0 ? 'scale-110' : ''}`}>
                  <ArrowRight className="h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-white/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="text-sm text-gray-200 flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full border border-amber-800/40 hover:border-amber-600/60 transition-all duration-200">
                <MapPin className="w-4.5 h-4.5 mr-2.5 text-amber-400/90" />
                {t("explore.cities")}
              </span>
              <span className="text-sm text-gray-200 flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full border border-amber-800/40 hover:border-amber-600/60 transition-all duration-200">
                <Star className="w-4.5 h-4.5 mr-2.5 text-amber-400/90" />
                {t('explore.topRated')}
              </span>
              <span className="text-sm text-gray-200 flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full border border-amber-800/40 hover:border-amber-600/60 transition-all duration-200">
                <Clock className="w-4.5 h-4.5 mr-2.5 text-amber-400/90" />
                {t('explore.openNow')}
              </span>
            </div>
          </div>

          {/* Venue Type Selector */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {translatedVenueTypes.map((venue, index) => (
              <button
                key={venue.name}
                onClick={() => {
                  setCurrentKeywordIndex(index);
                  setIsVisible(true);
                }}
                className={`flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      currentKeywordIndex === index
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/20 border border-amber-500/40'
                        : 'bg-white/5 text-gray-200 hover:bg-white/10 border border-white/5 hover:border-amber-600/40'
                    }`}
              >
                {React.cloneElement(venue.icon, {
                  className: `w-5 h-5 mr-2 ${currentKeywordIndex === index ? 'text-white' : 'text-amber-600'}`
                })}
                <span className="font-medium">{venue.translatedName}</span>
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-amber-50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">50,000+</div>
              <div className="text-sm text-slate-600">{<>50,000+ {t('rolling.venuePlural')}</>}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">1M+</div>
              <div className="text-sm text-slate-600">{t('rolling.users')}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">4.9★</div>
              <div className="text-sm text-slate-600">{t('rolling.rating')}</div>
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
