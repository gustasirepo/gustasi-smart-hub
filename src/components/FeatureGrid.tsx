import { t, useLanguage } from "@/utils/localization";
import {
  ShieldCheck,
  Users,
  Table,
  Boxes,
  QrCode,
  UtensilsCrossed,
  Receipt,
  KeyRound,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const FeatureGrid = () => {
  const currentLang = useLanguage();

  const features = [
    {
      icon: ShieldCheck,
      color: "from-green-400 to-emerald-500",
      title: t("features.fraud"),
      description: t("features.fraudDesc")
    },
    {
      icon: Users,
      color: "from-blue-400 to-cyan-500",
      title: t("features.crm"),
      description: t("features.crmDesc")
    },
    {
      icon: Table,
      color: "from-purple-400 to-violet-500",
      title: t("features.table"),
      description: t("features.tableDesc")
    },
    {
      icon: Boxes,
      color: "from-amber-400 to-orange-500",
      title: t("features.supplier"),
      description: t("features.supplierDesc")
    },
    {
      icon: QrCode,
      color: "from-pink-400 to-rose-500",
      title: t("features.qr"),
      description: t("features.qrDesc")
    },
    {
      icon: UtensilsCrossed,
      color: "from-teal-400 to-green-500",
      title: t("features.kot"),
      description: t("features.kotDesc")
    },
    {
      icon: Receipt,
      color: "from-indigo-400 to-blue-500",
      title: t("features.billing"),
      description: t("features.billingDesc")
    },
    {
      icon: KeyRound,
      color: "from-amber-500 to-yellow-400",
      title: t("features.access"),
      description: t("features.accessDesc")
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              {t("features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Link 
                to={`/features/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                key={index}
                className="block group"
              >
                <div 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-hover animate-fade-up h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 animate-bounce-gentle`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100 text-amber-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">{t('features.learnMore')}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
