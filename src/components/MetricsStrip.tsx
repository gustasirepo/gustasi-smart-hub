import { t, useLanguage } from "@/utils/localization";
import { ChefHat, Building2, BarChart2, ShieldCheck } from "lucide-react";

const MetricsStrip = () => {
  useLanguage(); // Ensures re-render on language change
  const metrics = [
    { value: t("metrics.chefs"), icon: <ChefHat className="w-8 h-8 text-amber-500 mx-auto" />, color: "from-amber-500 to-orange-500" },
    { value: t("metrics.cities"), icon: <Building2 className="w-8 h-8 text-blue-500 mx-auto" />, color: "from-orange-500 to-amber-600" },
    { value: t("metrics.reports"), icon: <BarChart2 className="w-8 h-8 text-green-500 mx-auto" />, color: "from-amber-600 to-orange-600" },
    { value: t("metrics.savings"), icon: <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto" />, color: "from-orange-600 to-amber-500" }
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 via-transparent to-orange-400/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center animate-fade-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white/10 backdrop-blur-md border border-amber-200/20 rounded-2xl shadow-xl p-5 md:p-6 shadow-amber-400/20 hover:shadow-2xl hover:shadow-amber-400/40 group-hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
                  <div className="text-4xl mb-3 md:mb-4 animate-bounce-gentle flex-shrink-0" style={{ animationDelay: `${index * 0.2}s` }}>
                    {metric.icon}
                  </div>
                  <div className={`text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent break-words min-h-[2.5rem] md:min-h-[3rem] px-1`}>
                    <div className="line-clamp-2 leading-tight">
                      {metric.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
