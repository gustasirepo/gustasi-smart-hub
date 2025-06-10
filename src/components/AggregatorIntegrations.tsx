import React from "react";
import { t, useLanguage } from "@/utils/localization";

const aggregators = [
  { name: "Zomato", icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png", color: "from-red-500/20 to-pink-500/20" },
  { name: "Swiggy", icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png", color: "from-orange-500/20 to-yellow-500/20" },
  { name: "Magicpin", icon: "https://assets.magicpin.com/images/mp_logo_new.png", color: "from-purple-500/20 to-blue-500/20" }
];

const AggregatorIntegrations = () => {
  const currentLang = useLanguage();
  
  return (
    <section className="w-full py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">{t("aggregator.title")}</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {aggregators.map((platform, index) => (
              <div key={index} className={`flex items-center gap-2 bg-gradient-to-r ${platform.color} backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}>
                <img src={platform.icon} alt={platform.name + " logo"} className="h-8 w-8 object-contain" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/32x32?text=?'; }} />
                <span className="text-white font-medium text-lg">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AggregatorIntegrations; 