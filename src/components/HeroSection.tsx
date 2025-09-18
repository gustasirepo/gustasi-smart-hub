import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { t, useLanguage } from "@/utils/localization";

// Helper function to format numbers in English while preserving percentage signs
const formatNumber = (value: string) => {
  // Check if the value contains a percentage sign
  const hasPercentage = value.includes('%');
  
  // Replace all non-ASCII digits with their English equivalents
  const asciiValue = value
    .replace(/[\u0660-\u0669]/g, d => (d.charCodeAt(0) - 0x0660).toString())  // Arabic-Indic
    .replace(/[\u06F0-\u06F9]/g, d => (d.charCodeAt(0) - 0x06F0).toString())  // Persian
    .replace(/[\u0966-\u096F]/g, d => (d.charCodeAt(0) - 0x0966).toString())  // Devanagari
    .replace(/[\u09E6-\u09EF]/g, d => (d.charCodeAt(0) - 0x09E6).toString())  // Bengali
    .replace(/[\u0A66-\u0A6F]/g, d => (d.charCodeAt(0) - 0x0A66).toString())  // Gurmukhi
    .replace(/[\u0AE6-\u0AEF]/g, d => (d.charCodeAt(0) - 0x0AE6).toString())  // Gujarati
    .replace(/[\u0B66-\u0B6F]/g, d => (d.charCodeAt(0) - 0x0B66).toString())  // Oriya
    .replace(/[\u0BE6-\u0BEF]/g, d => (d.charCodeAt(0) - 0x0BE6).toString())  // Tamil
    .replace(/[\u0C66-\u0C6F]/g, d => (d.charCodeAt(0) - 0x0C66).toString())  // Telugu
    .replace(/[\u0CE6-\u0CEF]/g, d => (d.charCodeAt(0) - 0x0CE6).toString())  // Kannada
    .replace(/[\u0E50-\u0E59]/g, d => (d.charCodeAt(0) - 0x0E50).toString())  // Thai
    .replace(/[\u0ED0-\u0ED9]/g, d => (d.charCodeAt(0) - 0x0ED0).toString()); // Lao
  
  // Extract the numeric part
  const numMatch = asciiValue.match(/[0-9.,]+/);
  if (!numMatch) return value;
  
  const num = parseFloat(numMatch[0].replace(/,/g, ''));
  if (isNaN(num)) return value;
  
  // Format the number and add back the percentage sign if it was present
  const formattedNum = num.toLocaleString('en-US');
  return hasPercentage ? `${formattedNum}%` : formattedNum;
};
import { Play, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const currentLang = useLanguage();

  const images = [
    {
      src: './lovable-uploads/kdsscreen.PNG',
      alt: 'KDS Screen'
    },
    {
      src: './lovable-uploads/3e29469b-faef-4245-8a1a-9d015faab115.png',
      alt: 'KDS Screen'
    }
  ];

  return (
    <section 
      className="relative min-h-screen w-full flex items-center overflow-x-hidden bg-gradient-to-br from-[#0F0E16] via-[#191B24] to-[#0F0E16] pb-16 pt-28 md:pt-32"
      lang={currentLang}
      style={{ isolation: 'isolate' }}
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D8C7AA]/20 to-[#B59469]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#B59469]/15 to-[#D8C7AA]/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8C7AA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Column - Modern Content Layout */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-8 relative z-20">
              
              {/* Main Headline */}
              <div className="space-y-6 animate-fade-up mt-16" style={{ animationDelay: '0.1s' }}>
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight ${currentLang === 'hi' ? 'font-sans' : ''} pt-3`}>
                  <span className="block bg-gradient-to-r from-white via-white to-[#F5F2ED] bg-clip-text text-transparent mb-2 pb-1">
                    {t("hero.mainTitle")}
                  </span>
                  <span className="block bg-gradient-to-r from-[#D8C7AA] via-[#C9B48C] to-[#B59469] bg-clip-text text-transparent mt-4 pt-1 pb-1">
                    {t("hero.subTitle")}
                  </span>
                </h1>
                <p className={`text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mt-4 ${currentLang === 'hi' ? 'font-sans' : ''}`}>
                  {t("hero.description")}
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#191B24]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {formatNumber(t("hero.orderGrowthValue"))}
                    </div>
                    <div className="text-xs text-slate-400">{t("hero.orderGrowth")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#191B24]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {formatNumber(t("hero.fraudReductionValue"))}
                    </div>
                    <div className="text-xs text-slate-400">{t("hero.fraudReduction")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#191B24]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {formatNumber(t("hero.restaurantsValue"))}
                    </div>
                    <div className="text-xs text-slate-400">{t("hero.restaurants")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#191B24]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {formatNumber(t("hero.ratingValue"))}
                    </div>
                    <div className="text-xs text-slate-400">{t("hero.rating")}</div>
                  </div>
                </div>
              </div>
              
              {/* Single CTA Button - Centered */}
              <div className="w-full flex justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://tawk.to/chat/5f644095f0e7167d00117318/1ij8sc0vj';
                  }}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-amber-500/20 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {t("hero.cta")}
                    <span className="ml-2.5 transition-transform duration-200 group-hover:translate-x-1">
                      <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Column - Dashboard Showcase */}
            <div className="lg:col-span-6 relative animate-fade-up z-10">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-3xl blur-3xl animate-pulse-slow z-0"></div>
                
                {/* Main Dashboard Container */}
                <div className="relative group z-10" style={{ isolation: 'isolate' }}>
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 hover:scale-[1.02] relative z-10 overflow-hidden">
                    
                    {/* Header Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-3 py-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-xs font-medium">{t("hero.liveDashboard")}</span>
                      </div>
                      <div className="text-xs text-slate-400">{t("hero.realTimeUpdates")}</div>
                    </div>
                    
                    {/* Dashboard Image Slider */}
                    <div className="embla mx-auto max-w-3xl w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                      <EmblaCarousel images={images} />
                    </div>
                    
                    {/* Bottom Stats - Ensure they stay within the container */}
                    <div className="relative z-10 bg-transparent">
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                        <div className="text-center flex-1">
                          <div className="text-lg font-bold text-white">{t("hero.avgOrderValueValue")}</div>
                          <div className="text-xs text-slate-400">{t("hero.avgOrderValue")}</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-lg font-bold text-green-400">{t("hero.todaysGrowthValue")}</div>
                          <div className="text-xs text-slate-400">{t("hero.todaysGrowth")}</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-lg font-bold text-blue-400">{t("hero.activeOrdersValue")}</div>
                          <div className="text-xs text-slate-400">{t("hero.activeOrders")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg animate-bounce-gentle z-20 pointer-events-none">
                  {t("hero.newOrder")} ₹683
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg animate-bounce-gentle z-20 pointer-events-none">
                  {t("hero.orderReady")} Table 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function EmblaCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    if (!emblaApi) return;
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 2500);
    return () => clearInterval(autoplayRef.current);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden w-full h-full" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((img, idx) => (
          <div className="min-w-full flex-[0_0_100%] h-full flex items-center justify-center" key={idx}>
            <img
              src={img.src}
              alt={img.alt}
              className="object-contain w-full h-full transition-transform duration-500 hover:scale-110"
              style={{ filter: 'brightness(1.1) contrast(1.1) saturate(1.1)' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
