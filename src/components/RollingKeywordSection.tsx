
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { t } from "@/utils/localization";

const RollingKeywordSection = () => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const keywords = [
    t("rolling.restaurant"),
    t("rolling.cafe"),
    t("rolling.bar"),
    t("rolling.resort"),
    t("rolling.hotel"),
    t("rolling.chef")
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [keywords.length]);

  useEffect(() => {
    // Update keywords when language changes
    const handleLanguageChange = () => {
      // Keywords will update automatically due to t() function
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rolling Keyword Display */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-gray-700">{t("rolling.subtitle")} </span>
              <span className={`gradient-text transition-all duration-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                {keywords[currentKeywordIndex]}
              </span>
              <span className="text-gray-700"> {t("rolling.subtitle2")}</span>
            </h2>
          </div>

          {/* Feature Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="btn-secondary">
              {t("rolling.ai")}
            </Button>
            <Button variant="outline" className="btn-secondary">
              {t("rolling.reviews")}
            </Button>
            <Button variant="outline" className="btn-secondary">
              {t("rolling.booking")}
            </Button>
          </div>

          {/* CTA */}
          <div className="mb-12">
            <Button className="btn-primary text-lg px-8 py-4">
              {t("rolling.explore")}
            </Button>
          </div>

          {/* Metrics */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
              <span className="font-semibold">{t("rolling.restaurants")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
              <span className="font-semibold">{t("rolling.users")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-500 rounded-full"></div>
              <span className="font-semibold">{t("rolling.rating")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RollingKeywordSection;
