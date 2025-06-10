import { t } from "@/utils/localization";
import { Building2, Users, TrendingUp, MapPin } from "lucide-react";

const FranchiseDashboard = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-glow">
              Franchise Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage multi-location outlets with a unified, modern franchise dashboard.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Modern Glass Card */}
            <div className="animate-fade-up">
              <div className="bg-white/30 backdrop-blur-lg border border-amber-100/40 rounded-3xl p-10 shadow-2xl relative overflow-hidden glass-card">
                {/* Glowing Accent */}
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-amber-400/30 to-orange-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-amber-700">
                    <Building2 className="w-8 h-8 text-amber-500" /> Franchise Dashboard
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-center bg-white/20 rounded-xl p-6 shadow-md">
                      <Users className="w-8 h-8 text-blue-500 mb-2" />
                      <div className="text-3xl font-bold text-amber-600">12</div>
                      <div className="text-sm text-gray-700 mt-1">Active Outlets</div>
                    </div>
                    <div className="flex flex-col items-center bg-white/20 rounded-xl p-6 shadow-md">
                      <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                      <div className="text-3xl font-bold text-green-600">₹5.2M</div>
                      <div className="text-sm text-gray-700 mt-1">Total Revenue</div>
                    </div>
                  </div>
                </div>
                {/* Outlet Locations */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-amber-700 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-400" /> Outlet Locations
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                      <span>Mumbai Central</span>
                      <span className="text-success-400">●</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                      <span>Delhi CP</span>
                      <span className="text-success-400">●</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                      <span>Bangalore MG Road</span>
                      <span className="text-yellow-400">●</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right - Description or Visual */}
            <div className="flex flex-col items-center justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-amber-100/60 to-orange-100/60 rounded-3xl p-10 shadow-xl flex flex-col items-center">
                <h4 className="text-2xl font-bold mb-4 text-amber-700">Why Choose Franchise Dashboard?</h4>
                <ul className="text-lg text-gray-700 space-y-3 text-left max-w-md">
                  <li>• Real-time performance tracking for all outlets</li>
                  <li>• Centralized revenue and staff management</li>
                  <li>• Easy onboarding for new franchisees</li>
                  <li>• Visualize outlet locations and status at a glance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseDashboard;
