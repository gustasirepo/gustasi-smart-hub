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

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThemePreview from "./components/ThemePreview";
import LanguageHandler from './components/LanguageHandler';

const queryClient = new QueryClient();

// Component to handle scroll restoration and preloading
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Start preloading other components when route changes
    preloadComponents();
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initial load effect
  useEffect(() => {
    // Simulate initial loading if needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

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
                <FeaturePage />
              </Suspense>
            } 
          />
        </Route>
        <Route path="theme-preview" element={<ThemePreview />} />
        <Route 
          path="restaurants" 
          element={
            <Suspense fallback={<PageLoader />}>
              <RestaurantsPage />
            </Suspense>
          } 
        />
        <Route 
          path="contact" 
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactUs defaultTab="contact" />
            </Suspense>
          } 
        />
        <Route 
          path="schedule-demo" 
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactUs defaultTab="demo" />
            </Suspense>
          } 
        />
        <Route 
          path="fraud-prevention" 
          element={
            <Suspense fallback={<PageLoader />}>
              <FraudPrevention />
            </Suspense>
          } 
        />
        <Route path="*" element={<NotFound />} />
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
