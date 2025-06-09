
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
    { name: "Facebook", icon: "📘" },
    { name: "Twitter", icon: "🐦" },
    { name: "Instagram", icon: "📸" },
    { name: "LinkedIn", icon: "💼" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold gradient-text mb-4">Gustasi</div>
              <p className="text-gray-400 mb-6 max-w-md">
                The ultimate all-in-one restaurant solution. Automate orders, manage stock, and drive profits with our intelligent POS platform.
              </p>
              <div className="flex gap-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
              <div className="space-y-3 text-gray-400">
                <div>📧 hello@gustasi.com</div>
                <div>📞 +91 98765 43210</div>
                <div>📍 Mumbai, India</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gustasi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
