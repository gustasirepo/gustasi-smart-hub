import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { t, useLanguage } from "@/utils/localization";
import { Play, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pb-16">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left Column - Modern Content Layout */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-8">
              
              {/* Main Headline */}
              <div className="space-y-6 animate-fade-up mt-16" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-r from-white via-white to-amber-100 bg-clip-text text-transparent">
                    {t("hero.mainTitle")}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                    {t("hero.subTitle")}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  {t("hero.description")}
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">+35%</div>
                    <div className="text-xs text-slate-400">{t("hero.orderGrowth")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">25%</div>
                    <div className="text-xs text-slate-400">{t("hero.fraudReduction")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-violet-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">50K+</div>
                    <div className="text-xs text-slate-400">{t("hero.restaurants")}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">4.9★</div>
                    <div className="text-xs text-slate-400">{t("hero.rating")}</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-300 shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 border-0">
                  {t("hero.cta")}
                  <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
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
