import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import PageLoader from "./components/PageLoader";

// Preload components for better performance
const preloadComponents = () => {
  // Start preloading other components in the background
  import("@/pages/FeaturePage");
  import("@/pages/RestaurantsPage");
  import("@/pages/FraudPrevention");
  import("@/pages/ContactUs");
};

// Use React.lazy with preload for better performance
const FeaturePage = lazy(() => import("@/pages/FeaturePage").then(module => {
  preloadComponents();
  return module;
}));

const RestaurantsPage = lazy(() => import("@/pages/RestaurantsPage"));
const FraudPrevention = lazy(() => import("@/pages/FraudPrevention"));
const ContactUs = lazy(() => import("@/pages/ContactUs"));
const ChefsPage = lazy(() => import("@/pages/chefs"));

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThemePreview from "./components/ThemePreview";
import LanguageHandler from './components/LanguageHandler';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const ScheduleDemoRedirect = lazy(() => import("@/components/ScheduleDemoRedirect"));

const queryClient = new QueryClient();

// Component to handle scroll restoration and preloading
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element with that ID
    if (hash) {
      // Use setTimeout to ensure the element is in the DOM
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '#features') {
          // If we're on a different page and the element isn't found,
          // wait for the home page to load and then scroll
          const checkElement = setInterval(() => {
            const el = document.getElementById('features');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              clearInterval(checkElement);
            }
          }, 100);
        }
      }, 0);
      return () => clearTimeout(timer);
    }
    // Otherwise scroll to top
    window.scrollTo(0, 0);
    // Start preloading other components when route changes
    preloadComponents();
  }, [pathname, hash, key]); // Add key to re-run effect when navigation occurs

  return null;
};

// Layout component that includes the Navbar and wraps all pages
const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log('Rendering Layout component');
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Simple test button component
const TestButton = () => {
  return (
    <button 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      onClick={() => window.open('https://tawk.to/chat/5f644095f0e7167d00117318/1j4vgptkl', 'tawkto')}
    >
      Test Chat
    </button>
  );
};

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang" element={<LanguageHandler />}>
        <Route index element={<Index />} />
        <Route path="features">
          <Route 
            path=":featureId" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Layout>
                  <FeaturePage />
                </Layout>
              </Suspense>
            } 
          />
        </Route>
        <Route path="theme-preview" element={
          <Suspense fallback={<PageLoader />}>
            <Layout>
              <ThemePreview />
            </Layout>
          </Suspense>
        } />
        <Route 
          path="restaurants" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Layout>
                <RestaurantsPage />
              </Layout>
            </Suspense>
          } 
        />
        <Route 
          path="contact" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Layout>
                <ContactUs defaultTab="contact" />
              </Layout>
            </Suspense>
          } 
        />
        <Route 
          path="schedule-demo" 
          element={
            <Suspense fallback={<PageLoader />}>
              <ScheduleDemoRedirect />
            </Suspense>
          } 
        />
        <Route 
          path="demo" 
          element={
            <Suspense fallback={<PageLoader />}>
              <ScheduleDemoRedirect />
            </Suspense>
          } 
        />
        <Route 
          path="fraud-prevention" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Layout>
                <FraudPrevention />
              </Layout>
            </Suspense>
          } 
        />
        <Route 
          path="chefs/:city?" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Layout>
                <ChefsPage />
              </Layout>
            </Suspense>
          } 
        />
        <Route path="*" element={
          <Layout>
            <NotFound />
          </Layout>
        } />
      </Route>
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
