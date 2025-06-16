import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExploreRestaurants from "@/components/ExploreRestaurants";
import AggregatorIntegrations from "@/components/AggregatorIntegrations";
import FeatureGrid from "@/components/FeatureGrid";
import OperationsOverview from "@/components/OperationsOverview";
import SuccessStories from "@/components/SuccessStories";
import WhatsAppFlow from "@/components/WhatsAppFlow";
import IntegrationLogos from "@/components/IntegrationLogos";
import MetricsStrip from "@/components/MetricsStrip";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import StickyDemo from "@/components/StickyDemo";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  console.log('Rendering Index component...');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Index: Starting loading simulation');
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      console.log('Index: Loading complete');
      setIsLoading(false);
    }, 1000);

    return () => {
      console.log('Index: Cleaning up');
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    console.log('Index: Showing loading screen');
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      <HeroSection />
      <ExploreRestaurants />
      <AggregatorIntegrations />
      <FeatureGrid />
      <MetricsStrip />
      <OperationsOverview />
      <SuccessStories />
      <div className="py-16">
        <WhatsAppFlow />
      </div>
      <IntegrationLogos />
      <Footer />
      <ChatWidget />
      <StickyDemo />
    </div>
  );
};

export default Index;
