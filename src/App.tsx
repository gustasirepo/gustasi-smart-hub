import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const FeaturePage = lazy(() => import("@/pages/FeaturePage"));
const RestaurantsPage = lazy(() => import("@/pages/RestaurantsPage"));
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThemePreview from "./components/ThemePreview";
import LanguageHandler from './components/LanguageHandler';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />

            <Route path="/:lang" element={<LanguageHandler />}>
              <Route index element={<Index />} />
              <Route 
                path="features/:featureId" 
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <FeaturePage />
                  </Suspense>
                } 
              />
              <Route path="theme-preview" element={<ThemePreview />} />
              <Route 
                path="restaurants" 
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <RestaurantsPage />
                  </Suspense>
                } 
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
