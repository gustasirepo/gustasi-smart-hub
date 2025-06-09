
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { t } from "@/utils/localization";

const StickyDemo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showAfter = 1000; // Show after scrolling 1000px
      setIsVisible(scrollPosition > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-slide-in-right">
      <Button className="btn-primary shadow-2xl">
        {t("cta.schedule")}
      </Button>
    </div>
  );
};

export default StickyDemo;
