
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { t, setLanguage, getCurrentLanguage } from "@/utils/localization";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [language, setCurrentLanguage] = useState(getCurrentLanguage());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleLanguageChange = () => {
      setCurrentLanguage(getCurrentLanguage());
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("languageChanged", handleLanguageChange);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("languageChanged", handleLanguageChange);
    };
  }, []);

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-amber-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-3xl lg:text-4xl font-bold font-playfair">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Gustasi</span>
              </div>
            </div>
          </div>

          {/* Right side - Login, Sign Up, Language */}
          <div className="flex items-center space-x-6">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-amber-100 hover:text-amber-300 transition-colors duration-300 rounded-lg hover:bg-white/10"
              >
                <span>{t("nav.language")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-24 bg-white/90 backdrop-blur-md border border-amber-300/30 rounded-xl shadow-2xl z-50">
                  <div className="py-2">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 ${
                        language === 'en' 
                          ? 'bg-amber-500/20 text-amber-700' 
                          : 'text-slate-700 hover:bg-amber-50'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 ${
                        language === 'fr' 
                          ? 'bg-amber-500/20 text-amber-700' 
                          : 'text-slate-700 hover:bg-amber-50'
                      }`}
                    >
                      FR
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            <Button variant="ghost" className="text-amber-100 hover:text-amber-300 font-medium px-6 py-3 hover:bg-white/10 transition-all duration-300">
              {t("nav.login")}
            </Button>

            {/* Sign Up Button */}
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-amber-500/20 hidden sm:inline-flex">
              {t("nav.signup")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
