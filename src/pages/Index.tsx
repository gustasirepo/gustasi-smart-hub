
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RollingKeywordSection from "@/components/RollingKeywordSection";
import FeatureGrid from "@/components/FeatureGrid";
import OperationsOverview from "@/components/OperationsOverview";
import SuccessStories from "@/components/SuccessStories";
import WhatsAppFlow from "@/components/WhatsAppFlow";
import IntegrationLogos from "@/components/IntegrationLogos";
import FranchiseDashboard from "@/components/FranchiseDashboard";
import MetricsStrip from "@/components/MetricsStrip";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import StickyDemo from "@/components/StickyDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      <HeroSection />
      <RollingKeywordSection />
      <FeatureGrid />
      <OperationsOverview />
      <SuccessStories />
      <WhatsAppFlow />
      <IntegrationLogos />
      <FranchiseDashboard />
      <MetricsStrip />
      <Footer />
      <ChatWidget />
      <StickyDemo />
    </div>
  );
};

export default Index;
