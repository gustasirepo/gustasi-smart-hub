
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl lg:text-3xl font-bold gradient-text">
                Gustasi
              </div>
            </div>
          </div>

          {/* Right side - Login, Sign Up, Language */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
              >
                <span>{t("nav.language")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'en' ? 'bg-brand-50 text-brand-600' : 'text-gray-700'}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'fr' ? 'bg-brand-50 text-brand-600' : 'text-gray-700'}`}
                    >
                      FR
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            <Button variant="ghost" className="text-gray-700 hover:text-brand-600 font-medium">
              {t("nav.login")}
            </Button>

            {/* Sign Up Button */}
            <Button className="btn-primary hidden sm:inline-flex">
              {t("nav.signup")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
