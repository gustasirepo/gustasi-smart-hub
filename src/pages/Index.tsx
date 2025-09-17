import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import SEO from "@/components/SEO";
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
import StickyDemo from "@/components/StickyDemo";
import LoadingScreen from "@/components/LoadingScreen";
import { MobilePOSSection } from "@/components/MobilePOSSection";

// Structured data for the homepage
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Gustasi - Ultimate All-in-One Restaurant POS System",
  "description": "Automate orders, manage stock, and drive profits with Gustasi's intelligent POS platform for restaurants, bars, cafes, and home chefs.",
  "publisher": {
    "@type": "Organization",
    "name": "Gustasi",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.gustasi.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.gustasi.com/"
  },
  "image": "https://lovable.dev/opengraph-image-p98pqg.png"
};

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
      <SEO 
        title="Gustasi - Ultimate All-in-One Restaurant POS System"
        description="Automate orders, manage stock, and drive profits with Gustasi's intelligent POS platform for restaurants, bars, cafes, and home chefs."
        keywords={["restaurant POS", "point of sale", "restaurant management", "POS system", "restaurant software", "restaurant technology"]}
        structuredData={structuredData}
      />
      <Helmet>
        <link rel="preload" href="/hero-image.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <MobilePOSSection />
      <ExploreRestaurants />
      <AggregatorIntegrations />
      <FeatureGrid />
      <MetricsStrip />
      <OperationsOverview />
      
      {/* Add schema markup for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Gustasi POS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gustasi is an all-in-one restaurant POS system that helps automate orders, manage inventory, and streamline operations for restaurants, bars, and cafes."
              }
            },
            {
              "@type": "Question",
              "name": "How can Gustasi help my restaurant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gustasi helps restaurants by providing tools for order management, inventory tracking, staff management, customer relationship management, and analytics to improve operations and increase profits."
              }
            }
          ]
        })}
      </script>
      <SuccessStories />
      <div className="py-16">
        <WhatsAppFlow />
      </div>
      <IntegrationLogos />
      <Footer />
      <StickyDemo />
    </div>
  );
}

export default Index;
