import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Define feature metadata
const featureMetadata: Record<string, { title: string; description: string }> = {
  'inventory-management': {
    title: 'Inventory Management | Gustasi POS',
    description: 'Streamline your restaurant inventory with real-time tracking, automated reordering, and waste reduction tools.'
  },
  'order-management': {
    title: 'Order Management | Gustasi POS',
    description: 'Efficiently manage dine-in, takeout, and delivery orders from a single, intuitive dashboard.'
  },
  'analytics': {
    title: 'Analytics & Reporting | Gustasi POS',
    description: 'Gain valuable insights into your restaurant performance with comprehensive analytics and reporting tools.'
  },
  'staff-management': {
    title: 'Staff Management | Gustasi POS',
    description: 'Simplify staff scheduling, permissions, and performance tracking with our management tools.'
  },
  // Add more features as needed
};

export default function FeaturePage() {
  const { feature } = useParams();
  const [isClient, setIsClient] = useState(false);
  
  const featureSlug = feature || '';
  const featureData = featureSlug && featureMetadata[featureSlug] 
    ? featureMetadata[featureSlug] 
    : { 
        title: 'Feature | Gustasi POS',
        description: 'Discover how Gustasi POS can transform your restaurant operations with our powerful features.'
      };
  
  const featureTitle = featureSlug 
    ? featureSlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
    : "Feature";

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": featureData.title,
    "description": featureData.description,
    "url": `https://yourdomain.com/features/${featureSlug}`,
    "publisher": {
      "@type": "Organization",
      "name": "Gustasi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/logo.png"
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gradient-bg flex flex-col">
      <SEO 
        title={featureData.title}
        description={featureData.description}
        canonicalUrl={`https://yourdomain.com/features/${featureSlug}`}
        ogType="article"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-amber-600 mb-8">{featureTitle}</h1>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <p className="text-lg text-slate-700 mb-6">{featureData.description}</p>
              
              {/* Feature content sections */}
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Benefit 1 related to {featureTitle}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Benefit 2 related to {featureTitle}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Benefit 3 related to {featureTitle}</span>
                  </li>
                </ul>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <p className="text-slate-700">
                  Detailed explanation of how {featureTitle} works and how it benefits your restaurant operations.
                  Include relevant images, diagrams, or videos here to enhance the user experience.
                </p>
              </section>

              <section className="mt-12 bg-amber-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-amber-800">Ready to get started?</h2>
                <p className="text-amber-700 mb-4">
                  Experience the power of {featureTitle} with a free demo today.
                </p>
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                  Schedule a Demo
                </button>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}