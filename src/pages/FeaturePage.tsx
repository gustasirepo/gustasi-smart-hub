import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { t } from "@/utils/localization";

const FeaturePage = () => {
  const { featureId } = useParams<{ featureId: string }>();
  
  // This will be replaced with actual feature data from a service later
  const featureTitle = featureId ? featureId.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') : 'Feature';

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {featureTitle} {t("features.pageTitle")}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {t("features.pageDescription")}
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-8">
              <p className="text-gray-400">Feature content coming soon</p>
            </div>
            <p className="text-gray-600">
              Detailed information about {featureTitle} will be displayed here.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeaturePage;
