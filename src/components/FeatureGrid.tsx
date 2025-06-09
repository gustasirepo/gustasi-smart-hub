
import { t } from "@/utils/localization";
import { 
  Circle, 
  Users, 
  Image, 
  FileText, 
  Search, 
  List, 
  Plus, 
  Info 
} from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: Circle,
      title: t("features.fraud"),
      description: "Advanced AI-powered fraud detection and prevention"
    },
    {
      icon: Users,
      title: t("features.crm"),
      description: "Build lasting relationships with intelligent customer insights"
    },
    {
      icon: Image,
      title: t("features.table"),
      description: "Seamless digital table booking and management system"
    },
    {
      icon: FileText,
      title: t("features.supplier"),
      description: "Complete supplier management and inventory tracking"
    },
    {
      icon: Search,
      title: t("features.qr"),
      description: "Interactive QR menus with real-time updates"
    },
    {
      icon: List,
      title: t("features.kot"),
      description: "Multi-kitchen order tracking system"
    },
    {
      icon: Plus,
      title: t("features.billing"),
      description: "Unified billing system for seamless settlements"
    },
    {
      icon: Info,
      title: t("features.access"),
      description: "Role-based staff access and permissions"
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
              Everything you need to run a successful restaurant business in one powerful platform
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
