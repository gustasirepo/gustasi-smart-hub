
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { t } from "@/utils/localization";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentText(t("hero.tagline"));
    };

    handleLanguageChange();
    window.addEventListener("languageChanged", handleLanguageChange);
    
    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden gradient-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up">
                  <span className="text-white">{t("hero.tagline")}</span>
                </h1>
                <p className="text-xl lg:text-2xl text-amber-100/90 mb-8 leading-relaxed animate-fade-up max-w-2xl" style={{ animationDelay: '0.2s' }}>
                  {t("hero.subtext")}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-10 py-5 text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-amber-500/20">
                  {t("hero.cta")}
                </Button>
                <Button variant="outline" className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-amber-100 font-semibold px-10 py-5 text-xl rounded-xl border border-amber-300/20 transition-all duration-300 hover:border-amber-200/40 shadow-lg hover:shadow-xl">
                  {t("cta.pricing")}
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm text-amber-200/80 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse-slow"></div>
                  <span className="text-lg">Trusted by 50,000+ restaurants</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse-slow"></div>
                  <span className="text-lg">4.9★ rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - POS Dashboard Screenshot */}
            <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Main Dashboard Screenshot */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl animate-glow"></div>
                  <div className="relative bg-white/95 rounded-3xl shadow-2xl p-3 transform rotate-1 hover:rotate-0 transition-transform duration-700 shadow-amber-500/20 hover:shadow-amber-500/40">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center" 
                      alt="Gustasi POS Dashboard - Order Management Interface" 
                      className="w-full h-auto rounded-2xl shadow-lg"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md border border-amber-200/30 rounded-2xl px-4 py-2 animate-bounce-gentle shadow-lg">
                  <div className="flex items-center gap-2 text-amber-700">
                    <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse-slow"></div>
                    <span className="font-semibold text-sm">Live Orders</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-amber-200/30 rounded-2xl p-4 animate-bounce-gentle shadow-lg" style={{ animationDelay: '1s' }}>
                  <div className="text-xs text-amber-600 mb-1">Revenue Today</div>
                  <div className="font-bold text-lg text-amber-800">₹2.4M</div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-md border border-orange-200/30 rounded-2xl px-3 py-2 animate-bounce-gentle shadow-lg" style={{ animationDelay: '1.5s' }}>
                  <div className="text-xs text-orange-600">+230%</div>
                  <div className="font-semibold text-sm text-orange-800">Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
