import { t, useLanguage } from "@/utils/localization";

const Footer = () => {
  // This ensures the component re-renders when language changes
  useLanguage();

  const footerLinks = [
    { label: t("footer.home"), href: "#", target: "_self" as const, rel: "noopener" as const },
    { label: t("footer.about"), href: "https://www.gustasi.com/AboutUs", target: "_blank" as const, rel: "noopener" as const },
    { label: t("footer.features"), href: "#", target: "_self" as const, rel: "noopener" as const },
    { label: t("footer.pricing"), href: "#", target: "_self" as const, rel: "noopener" as const },
    { label: t("footer.contact"), href: "/en/schedule-demo", target: "_self" as const, rel: "noopener" as const }
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
                <ul className="space-y-4">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
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
              <p className="text-amber-300/80 text-lg">{t("footer.copyright")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
