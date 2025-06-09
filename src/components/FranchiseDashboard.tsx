
import { t } from "@/utils/localization";

const FranchiseDashboard = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Visual */}
            <div className="animate-fade-up">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Master Dashboard</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-brand-400">12</div>
                      <div className="text-sm opacity-80">Active Outlets</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-success-400">₹5.2M</div>
                      <div className="text-sm opacity-80">Total Revenue</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>Mumbai Central</span>
                    <span className="text-success-400">●</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>Delhi CP</span>
                    <span className="text-success-400">●</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span>Bangalore MG Road</span>
                    <span className="text-yellow-400">●</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                {t("franchise.title")}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t("franchise.subtitle")}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time performance monitoring across all locations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                  <span className="text-gray-700">Centralized menu and pricing management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                  <span className="text-gray-700">Unified inventory and supply chain control</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                  <span className="text-gray-700">Comprehensive analytics and reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseDashboard;
