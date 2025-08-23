import { t, useLanguage } from "@/utils/localization";

const Footer = () => {
  // This ensures the component re-renders when language changes
  useLanguage();

  const footerLinks = [
    { label: t("footer.home"), href: "#", target: "_self", rel: "noopener" },
    { label: t("footer.about"), href: "https://www.gustasi.com/AboutUs", target: "_blank", rel: "noopener noreferrer" },
    { label: t("footer.features"), href: "#features", target: "_self", rel: "noopener" },
    { label: t("footer.pricing"), href: "#pricing", target: "_self", rel: "noopener" },
    { label: t("footer.contact"), href: "/en/schedule-demo", target: "_self", rel: "noopener" }
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
                <img src="/lovable-uploads/mylogo.svg" alt="Gustasi Logo" className="h-16 mb-6" />
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
                {/* App Download Badges */}
                <div className="flex gap-4">
                  <a href="https://play.google.com/store/apps/details?id=com.gustasi.app" target="_self" rel="noopener">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
                  </a>
                  <a href="https://apps.apple.com/us/app/gustasi/id1375283296" target="_self" rel="noopener">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12" />
                  </a>
                </div>
              </div>
              {/* Navigation */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-amber-100">{t("footer.navigation")}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {footerLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className="text-amber-300/80 hover:text-amber-100 transition-colors duration-300 text-base sm:text-lg hover:translate-x-1 sm:hover:translate-x-2 transform inline-block py-1.5"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              {/* Contact */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-amber-100">Contact Us Today</h3>
                  <a 
                    href="mailto:contact@gustasi.com" 
                    className="inline-flex items-center gap-2 text-lg text-amber-300/90 hover:text-amber-100 transition-colors group"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors">
                      ✉️
                    </span>
                    contact@gustasi.com
                  </a>
                </div>

                <div className="space-y-6 w-full">
                  {/* India - Head Office */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 w-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-amber-400">🇮🇳</span>
                      <h4 className="text-lg font-semibold text-amber-100">India - Head Office</h4>
                    </div>
                    <div className="pl-2 border-l-2 border-amber-500/30">
                      <p className="text-sm text-amber-200/80 leading-relaxed">
                        Ashritha Enclave H NO 12-13-559/Flat No 103,<br/>
                        Road No 2, Tarnaka,<br/>
                        Hyderabad, Telangana 500017
                      </p>
                    </div>
                  </div>

                  {/* Canada Office */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 w-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-amber-400">🇨🇦</span>
                      <h4 className="text-lg font-semibold text-amber-100">Canada</h4>
                    </div>
                    <div className="pl-2 border-l-2 border-amber-500/30">
                      <p className="text-sm text-amber-200/80 leading-relaxed">
                        400-6500 TransCanadaian Highway,<br/>
                        Pointe-Claire, Québec,<br/>
                        Montreal, QC, H9R0A5
                      </p>
                    </div>
                  </div>
                </div>
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
