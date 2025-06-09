
import { t } from "@/utils/localization";

const Footer = () => {
  const footerLinks = [
    { label: t("footer.home"), href: "#" },
    { label: t("footer.about"), href: "#" },
    { label: t("footer.features"), href: "#" },
    { label: t("footer.pricing"), href: "#" },
    { label: t("footer.contact"), href: "#" }
  ];

  const socialIcons = [
    { name: "Facebook", icon: "📘", color: "hover:bg-luxury-600" },
    { name: "Twitter", icon: "🐦", color: "hover:bg-copper-600" },
    { name: "Instagram", icon: "📸", color: "hover:bg-luxury-600" },
    { name: "LinkedIn", icon: "💼", color: "hover:bg-copper-600" }
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-brand-900 to-charcoal-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Logo & Description */}
              <div className="md:col-span-2">
                <div className="text-4xl lg:text-5xl font-bold font-playfair gradient-text mb-6">
                  Gustasi
                </div>
                <p className="text-luxury-200 mb-8 max-w-md text-lg leading-relaxed">
                  The ultimate all-in-one restaurant solution. Automate orders, manage stock, and drive profits with our intelligent POS platform.
                </p>
                <div className="flex gap-4">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 glass-card rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 luxury-glow hover:scale-110`}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-luxury-100">Navigation</h3>
                <ul className="space-y-4">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-luxury-300 hover:text-luxury-100 transition-colors duration-300 text-lg hover:translate-x-2 transform inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-luxury-100">{t("footer.contact")}</h3>
                <div className="space-y-4 text-luxury-300">
                  <div className="flex items-center gap-3 text-lg">
                    <span>📧</span>
                    <span>hello@gustasi.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <span>📞</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <span>📍</span>
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-luxury-400/20 pt-8 text-center">
              <p className="text-luxury-300 text-lg">&copy; 2024 Gustasi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
