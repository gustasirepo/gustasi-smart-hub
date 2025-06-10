import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RollingKeywordSection from "@/components/RollingKeywordSection";
import AggregatorIntegrations from "@/components/AggregatorIntegrations";
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
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      <HeroSection />
      <RollingKeywordSection />
      <AggregatorIntegrations />
      <FeatureGrid />
      <MetricsStrip />
      <OperationsOverview />
      <SuccessStories />
      <WhatsAppFlow />
      <IntegrationLogos />
      <FranchiseDashboard />
      <Footer />
      <ChatWidget />
      <StickyDemo />
    </div>
  );
};

export default Index;
