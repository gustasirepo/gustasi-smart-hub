import { t, useLanguage, getCurrentLanguage } from "@/utils/localization";
import { Link } from "react-router-dom";

const Footer = () => {
  // This ensures the component re-renders when language changes
  useLanguage();

  const currentLanguage = getCurrentLanguage();
  const footerLinks = [
    { label: t("footer.home"), href: `/${currentLanguage}`, target: "_self", rel: "noopener" },
    { label: t("footer.about"), href: "https://www.gustasi.com/AboutUs", target: "_self", rel: "noopener" },
    { label: t("footer.features"), href: `/${currentLanguage}/#features`, target: "_self", rel: "noopener" },
    { label: t("footer.contact"), href: `/${currentLanguage}/schedule-demo`, target: "_self", rel: "noopener" }
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Logo & Description */}
              <div className="md:col-span-2">
                <img src="/lovable-uploads/Logo.png" alt="Gustasi Logo" className="h-16 mb-6" />
                <p className="text-amber-200/90 mb-8 max-w-md text-lg leading-relaxed">
                  {t("footer.description")}
                </p>
                {/* Social Media Icons */}
                <div className="flex gap-4 mb-6">
                  <a href="https://www.facebook.com/gustasiinc" target="_self" rel="noopener">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-8 h-8 bg-white rounded-full p-1 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://x.com/Gustasi_inc" target="_self" rel="noopener">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X (Twitter)" className="w-8 h-8 bg-white rounded-full p-1 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.instagram.com/gustasi_inc/" target="_self" rel="noopener">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-8 h-8 bg-white rounded-full p-1 hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
              {/* Navigation */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-amber-100">{t("footer.navigation")}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {footerLinks.map((link, index) => (
                    link.href.startsWith('http') ? (
                      <a 
                        key={index}
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        className="text-amber-300/80 hover:text-amber-100 transition-colors duration-300 text-base sm:text-lg hover:translate-x-1 sm:hover:translate-x-2 transform inline-block py-1.5"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={link.href}
                        className="text-amber-300/80 hover:text-amber-100 transition-colors duration-300 text-base sm:text-lg hover:translate-x-1 sm:hover:translate-x-2 transform inline-block py-1.5"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-amber-100">Contact Us</h3>
                <a 
                  href="mailto:contact@gustasi.com" 
                  className="inline-flex items-center gap-2 text-amber-300/80 hover:text-amber-100 transition-colors duration-300 group"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors">
                    ✉️
                  </span>
                  contact@gustasi.com
                </a>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="border-t border-amber-400/20 pt-8 text-center">
            <p className="text-amber-300/80 text-lg">{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
