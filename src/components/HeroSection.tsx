
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { t } from "@/utils/localization";
import { ArrowRight, Play, CheckCircle, Zap, Shield, Users } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Content - Modern Typography */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 text-amber-300 text-sm font-medium animate-fade-up">
                <Zap className="w-4 h-4" />
                <span>Trusted by 50,000+ restaurants</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
                  <span className="text-white block">{t("hero.tagline")}</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  {t("hero.subtext")}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">35%</div>
                  <div className="text-slate-400 text-sm">Order Increase</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">25%</div>
                  <div className="text-slate-400 text-sm">Fraud Savings</div>
                </div>
                <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">4.9★</div>
                  <div className="text-slate-400 text-sm">User Rating</div>
                </div>
              </div>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Real-time Analytics</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Shield className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Fraud Protection</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Users className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Multi-location Support</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Instant Setup</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-amber-500/25">
                  {t("hero.cta")}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button variant="outline" className="group bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>

              {/* Integration Partners */}
              <div className="space-y-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <p className="text-slate-400 text-sm">Integrates seamlessly with:</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <span className="text-2xl">🍽️</span>
                    <span className="text-white font-medium">Zomato</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <span className="text-2xl">🛵</span>
                    <span className="text-white font-medium">Swiggy</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                    <span className="text-2xl">💬</span>
                    <span className="text-white font-medium">WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Modern Screenshots Layout */}
            <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Main Dashboard Screenshot */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/10 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
                    <img 
                      src="/lovable-uploads/f9e8d43c-d15b-47d7-8b89-9f24ba7bbfb8.png" 
                      alt="Gustasi Live Orders Dashboard" 
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                    <div className="absolute -top-2 -left-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Live Dashboard
                    </div>
                  </div>
                </div>

                {/* Secondary KDS Screenshot */}
                <div className="absolute -bottom-6 -right-6 w-64 group">
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 shadow-xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-1">
                    <img 
                      src="/lovable-uploads/57b44f31-6e79-49f3-a72a-cfd19fae5b6c.png" 
                      alt="Gustasi Kitchen Display System" 
                      className="w-full h-auto rounded-xl"
                    />
                    <div className="absolute -top-1 -left-1 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      KDS Live
                    </div>
                  </div>
                </div>
                
                {/* Floating Data Cards - Modern Design */}
                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-bounce-gentle">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-semibold text-white text-sm">New Order</div>
                      <div className="text-xs text-slate-300">₹683 - Swiggy</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-12 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                  <div className="text-xs text-slate-300 mb-1">Today&apos;s Revenue</div>
                  <div className="font-bold text-xl text-white">₹3,68,450</div>
                  <div className="text-xs text-green-400">+23% growth</div>
                </div>
                
                <div className="absolute top-1/2 -right-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-xl animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>
                  <div className="text-xs text-slate-300">Order #0003</div>
                  <div className="font-semibold text-sm text-white">₹735 - Ready</div>
                </div>

                <div className="absolute top-1/4 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-xl animate-bounce-gentle" style={{ animationDelay: '2s' }}>
                  <div className="text-xs text-slate-300">Zomato</div>
                  <div className="font-semibold text-sm text-white">₹368 - Cooking</div>
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
