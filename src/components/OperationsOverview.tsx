
import { Button } from "@/components/ui/button";
import { t } from "@/utils/localization";

const OperationsOverview = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              {t("operations.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("operations.description")}
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Sales Overview */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-white text-lg font-semibold mb-4">Sales Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-white/80">
                      <span>Today</span>
                      <span className="text-success-400">₹45,230</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>This Week</span>
                      <span className="text-brand-400">₹2,87,650</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>This Month</span>
                      <span className="text-purple-400">₹12,45,890</span>
                    </div>
                  </div>
                </div>

                {/* Live Orders */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-white text-lg font-semibold mb-4">Live Orders</h3>
                  <div className="space-y-3">
                    {[
                      { table: "Table 5", status: "Preparing", time: "5 min" },
                      { table: "Table 12", status: "Ready", time: "Now" },
                      { table: "Table 3", status: "Served", time: "Done" }
                    ].map((order, index) => (
                      <div key={index} className="flex justify-between items-center text-white/80">
                        <span>{order.table}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Ready' ? 'bg-success-500' :
                          order.status === 'Preparing' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inventory Alert */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-white text-lg font-semibold mb-4">Inventory Alerts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-white/80">
                      <span>Tomatoes</span>
                      <span className="text-red-400">Low Stock</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Chicken</span>
                      <span className="text-yellow-400">Medium</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Rice</span>
                      <span className="text-success-400">Good</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="border-t border-white/20 pt-6">
                <h3 className="text-white text-lg font-semibold mb-4">Restaurant Timeline</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Orders Management",
                    "Inventory Tracking", 
                    "Staff Scheduling",
                    "Customer Analytics",
                    "Financial Reports",
                    "Menu Optimization"
                  ].map((item, index) => (
                    <div key={index} className="bg-brand-500/20 text-brand-300 px-3 py-2 rounded-lg text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsOverview;
