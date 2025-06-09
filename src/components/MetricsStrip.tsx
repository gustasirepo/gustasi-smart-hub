
import { t } from "@/utils/localization";

const MetricsStrip = () => {
  const metrics = [
    { value: t("metrics.chefs"), icon: "👨‍🍳" },
    { value: t("metrics.cities"), icon: "🏙️" },
    { value: t("metrics.reports"), icon: "📊" },
    { value: t("metrics.savings"), icon: "🔒" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-brand-600 to-brand-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold mb-1">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
