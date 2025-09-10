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
              <Layout>
                <ContactUs defaultTab="demo" />
              </Layout>
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
