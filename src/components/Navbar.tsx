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
        <div className="flex flex-row items-center justify-between w-full h-20 relative">
          {/* Login Button (mobile only left) */}
          <div className="block sm:hidden">
            <a
              href="https://www.gustasi.com/Login"
              className="text-amber-100 hover:text-amber-300 font-medium px-3 py-2 text-sm hover:bg-white/10 transition-all duration-300 sm:px-6 sm:py-3 sm:text-base"
            >
              Login
            </a>
          </div>
          {/* Centered Logo */}
          <div className="flex justify-center w-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="/lovable-uploads/mylogo.svg" alt="Gustasi Logo" className="h-8 sm:h-16 w-auto" />
          </div>
          {/* Login/Signup (desktop), Signup (mobile right) */}
          <div className="flex flex-row items-center space-x-4 sm:space-x-6 ml-auto">
            {/* Login Button (desktop only) */}
            <div className="hidden sm:block">
              <a
                href="https://www.gustasi.com/Login"
                className="text-amber-100 hover:text-amber-300 font-medium px-6 py-3 text-base hover:bg-white/10 transition-all duration-300"
              >
                Login
              </a>
            </div>
            {/* Sign Up Button (always visible) */}
            <a
              href="https://www.gustasi.com/Signup"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-3 py-2 text-sm rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-amber-500/20 sm:px-6 sm:py-3 sm:text-base"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
