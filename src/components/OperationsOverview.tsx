
import { Button } from "@/components/ui/button";
import { t } from "@/utils/localization";
import { ShoppingCart, Menu, QrCode, MessageSquare, Calendar, Package } from "lucide-react";

const OperationsOverview = () => {
  const operationModules = [
    {
      icon: ShoppingCart,
      title: "Order Management",
      description: "Real-time order tracking and kitchen operations",
      image: "/placeholder.svg",
      color: "from-luxury-500 to-copper-500"
    },
    {
      icon: Menu,
      title: "Menu Setup",
      description: "Dynamic menu management and pricing control",
      image: "/placeholder.svg",
      color: "from-copper-500 to-luxury-600"
    },
    {
      icon: QrCode,
      title: "QR Menu",
      description: "Contactless dining with smart QR menus",
      image: "/placeholder.svg",
      color: "from-luxury-600 to-copper-600"
    },
    {
      icon: MessageSquare,
      title: "Customer Feedback",
      description: "Real-time reviews and rating management",
      image: "/placeholder.svg",
      color: "from-copper-600 to-luxury-500"
    },
    {
      icon: Calendar,
      title: "Table Reservations",
      description: "Seamless booking and table management",
      image: "/placeholder.svg",
      color: "from-luxury-500 to-copper-500"
    },
    {
      icon: Package,
      title: "Inventory & Supplier Ledger",
      description: "Smart inventory tracking and supplier management",
      image: "/placeholder.svg",
      color: "from-copper-500 to-luxury-600"
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 luxury-gradient-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 gradient-text animate-fade-up">
              {t("operations.title")}
            </h2>
            <p className="text-xl lg:text-2xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
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
                    <div className="glass-card p-8 h-full relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} p-4 luxury-glow group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-xl lg:text-2xl font-bold mb-4 text-charcoal-800 group-hover:text-luxury-700 transition-colors duration-300">
                          {module.title}
                        </h3>
                        <p className="text-charcoal-600 mb-6 leading-relaxed">
                          {module.description}
                        </p>
                        
                        {/* Screenshot Preview */}
                        <div className="relative rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src={module.image} 
                            alt={`${module.title} Interface`}
                            className="w-full h-32 object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${module.color} opacity-20`}></div>
                        </div>
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
            <Button className="btn-primary text-xl px-12 py-6">
              {t("cta.schedule")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsOverview;
