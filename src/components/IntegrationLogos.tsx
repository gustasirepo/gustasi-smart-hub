
import { Code, Database, Globe, Smartphone, Cloud } from "lucide-react";

const IntegrationLogos = () => {
  const integrations = [
    { name: "Zomato API", logo: "🍽️", tech: "REST API", icon: Globe },
    { name: "Swiggy Integration", logo: "🛵", tech: "Java SDK", icon: Code },
    { name: "WhatsApp Business", logo: "💬", tech: "HTML5", icon: Smartphone },
    { name: "Payment Gateway", logo: "💳", tech: "Java Backend", icon: Database },
    { name: "Cloud Storage", logo: "☁️", tech: "HTML Dashboard", icon: Cloud }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Seamlessly Integrates With Your Tech Stack
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Built with Java and HTML5 for maximum compatibility and performance
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <div 
                  key={index}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white/80 backdrop-blur-md border border-amber-200/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 h-full group-hover:border-amber-300/50">
                    {/* Tech Badge */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <IconComponent className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-semibold text-amber-700 bg-amber-100/80 px-2 py-1 rounded-full">
                        {integration.tech}
                      </span>
                    </div>
                    
                    {/* Logo */}
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {integration.logo}
                    </div>
                    
                    {/* Name */}
                    <div className="font-semibold text-slate-700 group-hover:text-amber-700 transition-colors duration-300">
                      {integration.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Performance Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime Guarantee</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.9s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">&lt;100ms</div>
              <div className="text-slate-600">Response Time</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '1s' }}>
              <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-slate-600">Tech Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationLogos;
