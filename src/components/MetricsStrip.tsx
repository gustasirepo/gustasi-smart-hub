
import { t } from "@/utils/localization";

const MetricsStrip = () => {
  const metrics = [
    { value: t("metrics.chefs"), icon: "👨‍🍳", color: "from-amber-500 to-orange-500" },
    { value: t("metrics.cities"), icon: "🏙️", color: "from-orange-500 to-amber-600" },
    { value: t("metrics.reports"), icon: "📊", color: "from-amber-600 to-orange-600" },
    { value: t("metrics.savings"), icon: "🔒", color: "from-orange-600 to-amber-500" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 via-transparent to-orange-400/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center animate-fade-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white/10 backdrop-blur-md border border-amber-200/20 rounded-2xl shadow-xl p-8 shadow-amber-400/20 hover:shadow-2xl hover:shadow-amber-400/40 group-hover:scale-105 transition-all duration-500">
                  <div className="text-4xl lg:text-5xl mb-4 animate-bounce-gentle" style={{ animationDelay: `${index * 0.2}s` }}>
                    {metric.icon}
                  </div>
                  <div className={`text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.value}
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
