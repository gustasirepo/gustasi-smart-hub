import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { t, useLanguage } from "@/utils/localization";
import { Play, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const currentLang = useLanguage();

  const images = [
    {
      src: '/lovable-uploads/kdsscreen.PNG',
      alt: 'KDS Screen'
    },
    {
      src: '/lovable-uploads/3e29469b-faef-4245-8a1a-9d015faab115.png',
      alt: 'KDS Screen'
    }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0F0E16] via-[#191B24] to-[#0F0E16] pb-16 pt-28 md:pt-32"
      lang={currentLang}
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#D8C7AA]/20 to-[#B59469]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#B59469]/15 to-[#D8C7AA]/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D8C7AA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Column - Modern Content Layout */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-8">
              
              {/* Main Headline */}
              <div className="space-y-6 animate-fade-up mt-16" style={{ animationDelay: '0.1s' }}>
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${currentLang === 'hi' ? 'font-sans' : ''}`}>
                  <span className="block bg-gradient-to-r from-white via-white to-[#F5F2ED] bg-clip-text text-transparent mb-2">
                    {t("hero.mainTitle")}
                  </span>
                  <span className="block bg-gradient-to-r from-[#D8C7AA] via-[#C9B48C] to-[#B59469] bg-clip-text text-transparent mt-2">
                    {t("hero.subTitle")}
                  </span>
                </h1>
                <p className={`text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl ${currentLang === 'hi' ? 'font-sans' : ''}`}>
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
                    <div className="font-semibold text-white">+35%</div>
                    <div className="text-xs text-slate-400">{t("hero.orderGrowth")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#191B24]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">25%</div>
                    <div className="text-xs text-slate-400">{t("hero.fraudReduction")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#191B24]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">50K+</div>
                    <div className="text-xs text-slate-400">{t("hero.restaurants")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#2D2A3D] hover:border-[#D8C7AA]/30 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D8C7AA] to-[#B59469] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#191B24]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">4.9★</div>
                    <div className="text-xs text-slate-400">{t("hero.rating")}</div>
                  </div>
                </div>
              </div>
              
              {/* Single CTA Button - Centered */}
              <div className="w-full flex justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Button 
                  onClick={() => {
                    const lang = window.location.pathname.split('/')[1] || 'en';
                    navigate(`/${lang}/schedule-demo`);
                  }}
                  className="mx-auto bg-gradient-to-r from-[#D8C7AA] to-[#B59469] hover:from-[#C9B48C] hover:to-[#A6865E] text-[#191B24] text-lg px-10 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(216,199,170,0.3)] group"
                >
                  {t("hero.cta")}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Right Column - Dashboard Showcase */}
            <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-3xl blur-3xl animate-pulse-slow"></div>
                
                {/* Main Dashboard Container */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 hover:scale-[1.02]">
                    
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
                    
                    {/* Bottom Stats */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">₹1,943</div>
                        <div className="text-xs text-slate-400">{t("hero.avgOrderValue")}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">+23%</div>
                        <div className="text-xs text-slate-400">{t("hero.todaysGrowth")}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">8</div>
                        <div className="text-xs text-slate-400">{t("hero.activeOrders")}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg animate-bounce-gentle">
                  {t("hero.newOrder")} ₹683
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}>
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
