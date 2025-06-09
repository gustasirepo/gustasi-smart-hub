
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { t } from "@/utils/localization";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const handleLanguageChange = () => {
      // Force re-render when language changes
      setCurrentText(t("hero.tagline"));
    };

    handleLanguageChange(); // Initial load
    window.addEventListener("languageChanged", handleLanguageChange);
    
    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-100"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-300/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
                  <span className="gradient-text">{t("hero.tagline")}</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  {t("hero.subtext")}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button className="btn-primary text-lg px-8 py-4">
                  {t("hero.cta")}
                </Button>
                <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                  {t("cta.pricing")}
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>Trusted by 50,000+ restaurants</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  <span>4.9★ rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Dashboard Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Gustasi Dashboard</h3>
                      <div className="w-3 h-3 bg-success-400 rounded-full animate-pulse-slow"></div>
                    </div>
                    
                    {/* Mock Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold">₹2.4M</div>
                        <div className="text-sm opacity-80">Revenue Today</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold">1,247</div>
                        <div className="text-sm opacity-80">Orders</div>
                      </div>
                    </div>
                    
                    {/* Mock Chart */}
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-end justify-between h-16 gap-1">
                        {[40, 70, 45, 80, 60, 90, 75].map((height, index) => (
                          <div 
                            key={index}
                            className="bg-white/40 rounded-sm flex-1 animate-bounce-gentle"
                            style={{ 
                              height: `${height}%`,
                              animationDelay: `${index * 0.1}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-success-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce-gentle">
                  Live
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-3 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                  <div className="text-xs text-gray-500">New Order</div>
                  <div className="font-semibold">Table #12</div>
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
