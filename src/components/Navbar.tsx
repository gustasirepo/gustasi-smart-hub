import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { t, getCurrentLanguage, useLanguage } from "@/utils/localization";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const currentLanguage = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (newLang: string) => {
    setShowLanguageDropdown(false);
    const pathParts = location.pathname.split('/');
    // path is /:lang/... so pathParts[1] is the lang code
    pathParts[1] = newLang;
    // Reconstruct the path. If on homepage, it will be just /<lang>
    const newPath = pathParts.length > 2 ? pathParts.join('/') : `/${newLang}`;
    navigate(newPath);
  };

  const getLanguageName = (lang: string) => t(`lang.${lang}`);

  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'Telugu' },
  ];

  // Check if current page is homepage
  const isHomePage = location.pathname === `/${currentLanguage}` || location.pathname === `/${currentLanguage}/`;
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-amber-400/20 text-white' 
        : isHomePage 
          ? 'bg-transparent text-white' 
          : 'bg-slate-900/95 backdrop-blur-xl text-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to={`/${currentLanguage}`} className="group relative">
              <img 
                src="/lovable-uploads/mylogo.svg" 
                alt="Gustasi Logo" 
                className="h-8 sm:h-16 w-auto transform transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
              />
              <span className="absolute -inset-1 bg-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 blur-md group-hover:animate-pulse-slow transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Right-aligned items */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center text-amber-100 hover:text-amber-300 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Change language"
              >
                <span className="hidden sm:inline">{getLanguageName(currentLanguage)}</span>
                <span className="sm:hidden text-sm">{currentLanguage.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-slate-800 rounded-lg shadow-xl z-50 border border-slate-700">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block w-full text-left px-4 py-2 text-sm text-amber-100 hover:bg-slate-700 hover:text-white"
                    >
                      {getLanguageName(lang.code)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Login/Signup */}
            <div className="hidden sm:flex items-center space-x-6">
              <a
                href="https://www.gustasi.com/Login"
                className="text-amber-100 hover:text-amber-300 font-medium text-base hover:bg-white/10 transition-all duration-300 px-6 py-3"
              >
                {t('nav.login')}
              </a>
              <a
                href="https://www.gustasi.com/Signup"
                className="hidden sm:block bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-amber-500/20 px-6 py-3 text-base"
              >
                {t('nav.signup')}
              </a>
            </div>
            
            {/* Mobile Auth Buttons */}
            <div className="flex items-center space-x-2 sm:hidden">
              <a
                href="https://www.gustasi.com/Login"
                className="text-amber-100 hover:text-amber-300 font-medium px-3 py-2 text-sm hover:bg-white/10 transition-all duration-300"
              >
                {t('nav.login')}
              </a>
              <a
                href="https://www.gustasi.com/Signup"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow hover:shadow-md border border-amber-500/20 px-3 py-2 text-sm"
              >
                {t('nav.signup')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
