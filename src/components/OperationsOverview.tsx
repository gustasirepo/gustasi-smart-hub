import { Button } from "@/components/ui/button";
import { t, useLanguage } from "@/utils/localization";
import { ShoppingCart, Code, Database, MessageCircle, Calendar, Truck } from "lucide-react";

const OperationsOverview = () => {
  const currentLang = useLanguage();

  const operationModules = [
    {
      icon: ShoppingCart,
      title: t("features.order"),
      description: t("operations.orderDesc"),
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Code,
      title: t("features.menu"),
      description: t("operations.menuDesc"),
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Database,
      title: t("features.qr"),
      description: t("operations.qrDesc"),
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: MessageCircle,
      title: t("features.feedback"),
      description: t("operations.feedbackDesc"),
      color: "from-orange-600 to-amber-500"
    },
    {
      icon: Calendar,
      title: t("features.table"),
      description: t("operations.tableDesc"),
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Truck,
      title: t("features.supplier"),
      description: t("operations.supplierDesc"),
      color: "from-orange-500 to-amber-600"
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-fade-up">
              {t("operations.title")}
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {t("operations.description")}
            </p>
          </div>

          {/* Operations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {operationModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div 
                  key={index}
                  className="group animate-fade-up card-hover"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative h-full">
                    {/* Main Card */}
                    <div className="bg-white/80 backdrop-blur-md border border-amber-200/30 rounded-2xl shadow-xl p-8 h-full relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:shadow-amber-400/20">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Icon */}
                      <div className="relative mb-6 text-center">
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${module.color} p-5 shadow-lg shadow-amber-400/20 hover:shadow-2xl hover:shadow-amber-400/40 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative text-center">
                        <h3 className="text-xl lg:text-2xl font-bold mb-4 text-slate-800 group-hover:text-amber-700 transition-colors duration-300">
                          {module.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '1s' }}>
            <Button 
              onClick={() => window.location.href = 'https://www.gustasi.com/contactus'}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-12 py-6 text-xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-amber-500/20"
            >
              {t("cta.schedule")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsOverview;
