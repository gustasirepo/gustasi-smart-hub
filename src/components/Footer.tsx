import { t } from "@/utils/localization";
import { setLanguage, getCurrentLanguage } from "@/utils/localization";
import { useState } from "react";

const Footer = () => {
  const footerLinks = [
    { label: t("footer.home"), href: "#" },
    { label: t("footer.about"), href: "#" },
    { label: t("footer.features"), href: "#" },
    { label: t("footer.pricing"), href: "#" },
    { label: t("footer.contact"), href: "#" }
  ];

  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Language toggler - top right corner */}
            <div className="absolute top-8 right-8 z-10">
              <div className="flex gap-2 bg-white/10 rounded-full px-3 py-1 border border-amber-300/30">
                <button
                  onClick={() => { setLanguage('en'); setShowLanguageDropdown(false); }}
                  className={`text-sm font-semibold px-2 py-1 rounded transition-colors duration-200 ${getCurrentLanguage() === 'en' ? 'bg-amber-500/20 text-amber-200' : 'text-amber-100 hover:bg-amber-500/10'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => { setLanguage('fr'); setShowLanguageDropdown(false); }}
                  className={`text-sm font-semibold px-2 py-1 rounded transition-colors duration-200 ${getCurrentLanguage() === 'fr' ? 'bg-amber-500/20 text-amber-200' : 'text-amber-100 hover:bg-amber-500/10'}`}
                >
                  FR
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Logo & Description */}
              <div className="md:col-span-2">
                <img src="/lovable-uploads/mylogo.svg" alt="Gustasi Logo" className="h-16 mb-6" />
                <p className="text-amber-200/90 mb-8 max-w-md text-lg leading-relaxed">
                  The ultimate all-in-one restaurant solution. Automate orders, manage stock, and drive profits with our intelligent POS platform.
                </p>
                {/* Social Media Icons */}
                <div className="flex gap-4 mb-6">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-8 h-8 bg-white rounded-full p-1 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" className="w-8 h-8 bg-white rounded-full p-1 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-8 h-8 bg-white rounded-full p-1 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 bg-white rounded-full p-1 hover:scale-110 transition-transform" />
                  </a>
                </div>
                {/* App Download Badges */}
                <div className="flex gap-4">
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
                  </a>
                  <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12" />
                  </a>
                </div>
              </div>
              {/* Navigation */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-amber-100">Navigation</h3>
                <ul className="space-y-4">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-amber-300/80 hover:text-amber-100 transition-colors duration-300 text-lg hover:translate-x-2 transform inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-amber-100">{t("footer.contact")}</h3>
                <div className="space-y-4 text-amber-300/80">
                  <div className="flex items-center gap-3 text-lg">
                    <span>📧</span>
                    <span>hello@gustasi.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <span>📞</span>
                    <span>+91 6366 200 200</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <span>📍</span>
                    <span>91springboard, 74, 3rd Cross Rd, Koramangala 5th Block, Bengaluru, Karnataka 560034</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Bar */}
            <div className="border-t border-amber-400/20 pt-8 text-center">
              <p className="text-amber-300/80 text-lg">&copy; 2024 Gustasi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
