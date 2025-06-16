import React, { useState, useEffect } from 'react';

export interface Translations {
  [key: string]: {
    en: string | string[];
    fr: string | string[];
  };
}

export const translations: Translations = {
  // Navbar
  "nav.login": { en: "Login", fr: "Connexion" },
  "nav.signup": { en: "Sign Up", fr: "S'inscrire" },
  "nav.language": { en: "EN", fr: "FR" },
  
  // Hero Section
  "hero.tagline": { en: "The Ultimate All-in-One Restaurant Solution", fr: "La Solution Restaurant Tout-en-Un Ultime" },
  "hero.subtext": { en: "Automate orders, manage stock, and drive profits with one intelligent POS platform", fr: "Automatisez les commandes, gérez les stocks et augmentez les profits avec une plateforme POS intelligente" },
  "hero.cta": { en: "Book a Demo", fr: "Réserver une Démo" },
  
  // Hero Section Additional
  "hero.mainTitle": { en: "The Ultimate", fr: "L'Ultime" },
  "hero.subTitle": { en: "Restaurant Solution", fr: "Solution Restaurant" },
  "hero.description": { en: "Transform your restaurant with intelligent automation, real-time analytics, and seamless multi-platform integration.", fr: "Transformez votre restaurant avec l'automatisation intelligente, l'analyse en temps réel et l'intégration transparente multi-plateformes." },
  "hero.orderGrowth": { en: "Order Growth", fr: "Croissance des Commandes" },
  "hero.fraudReduction": { en: "Fraud Reduction", fr: "Réduction de la Fraude" },
  "hero.restaurants": { en: "Restaurants", fr: "Restaurants" },
  "hero.rating": { en: "Rating", fr: "Note" },
  "hero.liveDashboard": { en: "Live Dashboard", fr: "Tableau de Bord en Direct" },
  "hero.realTimeUpdates": { en: "Real-time Updates", fr: "Mises à Jour en Temps Réel" },
  "hero.avgOrderValue": { en: "Avg. Order Value", fr: "Valeur Moyenne Commande" },
  "hero.todaysGrowth": { en: "Today's Growth", fr: "Croissance Aujourd'hui" },
  "hero.activeOrders": { en: "Active Orders", fr: "Commandes Actives" },
  "hero.newOrder": { en: "New Order!", fr: "Nouvelle Commande!" },
  "hero.orderReady": { en: "Order Ready!", fr: "Commande Prête!" },
  
  // Rolling Keywords - Used in the hero section
  "rolling.restaurant": { en: "Restaurant", fr: "Restaurant" },
  "rolling.cafe": { en: "Cafe", fr: "Café" },
  "rolling.bar": { en: "Bar", fr: "Bar" },
  "rolling.resort": { en: "Resort", fr: "Station" },
  "rolling.hotel": { en: "Hotel", fr: "Hôtel" },
  "rolling.chef": { en: "Chef", fr: "Chef" },
  "rolling.subtitle": { en: "Discover & Savor", fr: "Découvrez & Savourez" },
  "rolling.subtitle2": { en: "Near You", fr: "Près de Vous" },
  "rolling.ai": { en: "AI Recommendations", fr: "Recommandations IA" },
  "rolling.reviews": { en: "Real-time Reviews", fr: "Avis en Temps Réel" },
  "rolling.booking": { en: "Instant Booking", fr: "Réservation Instantanée" },
  "rolling.explore": { en: "Explore Now", fr: "Explorer Maintenant" },
  "rolling.restaurants": { en: "50,000+ Restaurants", fr: "50 000+ Restaurants" },
  "rolling.users": { en: "1M+ Users", fr: "1M+ Utilisateurs" },
  "rolling.rating": { en: "4.9★ Rating", fr: "4,9★ Note" },
  
  // Features Section
  "features.title": { en: "Everything You Need in One Place", fr: "Tout Ce Dont Vous Avez Besoin au Même Endroit" },
  "features.subtitle": { en: "Powerful features designed to help your business grow", fr: "Des fonctionnalités puissantes conçues pour développer votre entreprise" },
  "features.pageTitle": { en: "Feature", fr: "Fonctionnalité" },
  "features.pageDescription": { en: "Discover how this feature can transform your restaurant operations", fr: "Découvrez comment cette fonctionnalité peut transformer vos opérations de restauration" },
  "features.fraud": { en: "Fraud Prevention", fr: "Prévention Fraude" },
  "features.crm": { en: "CRM & Customer Retention", fr: "CRM & Fidélisation" },
  "features.table": { en: "Digital Table Management", fr: "Gestion Tables Digitale" },
  "features.supplier": { en: "Supplier Ledger & Inventory", fr: "Grand Livre Fournisseur & Inventaire" },
  "features.qr": { en: "Smart QR Menu", fr: "Menu QR Intelligent" },
  "features.kot": { en: "Multi-KOT Support", fr: "Support Multi-KOT" },
  "features.billing": { en: "One-Bill Settlement", fr: "Règlement Une Facture" },
  "features.access": { en: "Staff Access Control", fr: "Contrôle Accès Personnel" },
  "features.order": { en: "Order Management", fr: "Gestion des Commandes" },
  "features.menu": { en: "Menu Setup", fr: "Configuration Menu" },
  "features.feedback": { en: "Customer Feedback", fr: "Commentaires Clients" },
  
  // Feature Grid Additional
  "features.gridSubtitle": { en: "Everything you need to run a successful restaurant business in one powerful platform", fr: "Tout ce dont vous avez besoin pour gérer une entreprise de restauration réussie dans une plateforme puissante" },
  "features.fraudDesc": { en: "Advanced AI-powered fraud detection and prevention", fr: "Détection et prévention de la fraude avancée basée sur l'IA" },
  "features.crmDesc": { en: "Build lasting relationships with intelligent customer insights", fr: "Construisez des relations durables avec des insights clients intelligents" },
  "features.tableDesc": { en: "Seamless digital table booking and management system", fr: "Système de réservation et de gestion de tables numérique fluide" },
  "features.supplierDesc": { en: "Complete supplier management and inventory tracking", fr: "Gestion complète des fournisseurs et suivi des stocks" },
  "features.qrDesc": { en: "Interactive QR menus with real-time updates", fr: "Menus QR interactifs avec mises à jour en temps réel" },
  "features.kotDesc": { en: "Multi-kitchen order tracking system", fr: "Système de suivi des commandes multi-cuisines" },
  "features.billingDesc": { en: "Unified billing system for seamless settlements", fr: "Système de facturation unifié pour des règlements fluides" },
  "features.accessDesc": { en: "Role-based staff access and permissions", fr: "Accès et permissions du personnel basés sur les rôles" },
  
  // Operations
  "operations.title": { en: "360° Operations Overview", fr: "Vue d'Ensemble Opérations 360°" },
  "operations.description": { en: "Complete visibility and control over every aspect of your restaurant business", fr: "Visibilité et contrôle complets sur tous les aspects de votre entreprise de restauration" },
  "operations.orderDesc": { en: "Real-time order tracking and kitchen operations", fr: "Suivi des commandes en temps réel et opérations de cuisine" },
  "operations.menuDesc": { en: "Dynamic menu management and pricing control", fr: "Gestion dynamique des menus et contrôle des prix" },
  "operations.qrDesc": { en: "Contactless dining with smart QR menus", fr: "Restaurant sans contact avec menus QR intelligents" },
  "operations.feedbackDesc": { en: "Real-time reviews and rating management", fr: "Gestion des avis et des notes en temps réel" },
  "operations.tableDesc": { en: "Seamless booking and table management", fr: "Réservation et gestion des tables fluides" },
  "operations.supplierDesc": { en: "Smart inventory tracking and supplier management", fr: "Suivi intelligent des stocks et gestion des fournisseurs" },
  
  // Success Stories
  "success.title": { en: "Success Stories", fr: "Histoires de Succès" },
  "success.subtitle": { en: "Real results from real restaurants using Gustasi", fr: "Résultats réels de vrais restaurants utilisant Gustasi" },
  "success.growth": { en: "Restaurant B saw 230% revenue growth", fr: "Restaurant B a vu une croissance de 230% du chiffre d'affaires" },
  "success.time": { en: "Save 800 hrs/year on accounting", fr: "Économisez 800h/an sur la comptabilité" },
  "success.reports": { en: "Track 25+ real-time reports", fr: "Suivez 25+ rapports en temps réel" },
  
  // WhatsApp Flow
  "whatsapp.title": { en: "WhatsApp Menu Flow", fr: "Flux Menu WhatsApp" },
  "whatsapp.subtitle": { en: "Seamless customer journey from QR scan to order completion", fr: "Parcours client fluide du scan QR à la finalisation de la commande" },
  "whatsapp.scan": { en: "QR Scan", fr: "Scan QR" },
  "whatsapp.verification": { en: "WhatsApp Verification", fr: "Vérification WhatsApp" },
  "whatsapp.menu": { en: "Menu", fr: "Menu" },
  "whatsapp.capture": { en: "Lead Capture", fr: "Capture de Prospects" },
  "whatsapp.note": { en: "Data saved to dashboard for future targeting", fr: "Données sauvegardées au tableau de bord pour le ciblage futur" },
  
  // Franchise
  "franchise.title": { en: "Franchise Dashboard", fr: "Tableau de Bord Franchise" },
  "franchise.subtitle": { en: "Manage multi-location outlets with a unified, modern franchise dashboard.", fr: "Gérez les points de vente multi-emplacements avec un tableau de bord franchise unifié et moderne." },
  "franchise.activeOutlets": { en: "Active Outlets", fr: "Points de Vente Actifs" },
  "franchise.totalRevenue": { en: "Total Revenue", fr: "Revenu Total" },
  "franchise.outletLocations": { en: "Outlet Locations", fr: "Emplacements des Points de Vente" },
  "franchise.whyChoose": { en: "Why Choose Franchise Dashboard?", fr: "Pourquoi Choisir le Tableau de Bord Franchise ?" },
  "franchise.benefit1": { en: "Real-time performance tracking for all outlets", fr: "Suivi des performances en temps réel pour tous les points de vente" },
  "franchise.benefit2": { en: "Centralized revenue and staff management", fr: "Gestion centralisée des revenus et du personnel" },
  "franchise.benefit3": { en: "Easy onboarding for new franchisees", fr: "Intégration facile des nouveaux franchisés" },
  "franchise.benefit4": { en: "Visualize outlet locations and status at a glance", fr: "Visualisez les emplacements et le statut des points de vente en un coup d'œil" },
  
  // Metrics
  "metrics.chefs": { en: "7000+ Chefs", fr: "7000+ Chefs" },
  "metrics.cities": { en: "50+ Cities", fr: "50+ Villes" },
  "metrics.reports": { en: "25+ Reports", fr: "25+ Rapports" },
  "metrics.savings": { en: "20–25% Fraud Savings", fr: "20–25% Économies Fraude" },
  
  // CTAs
  "cta.schedule": { en: "Schedule Demo", fr: "Planifier Démo" },
  "cta.pricing": { en: "Explore Pricing", fr: "Explorer Prix" },
  "cta.chefs": { en: "Find Chefs Near You", fr: "Trouver Chefs Près de Vous" },
  
  // Footer
  "footer.home": { en: "Home", fr: "Accueil" },
  "footer.about": { en: "About", fr: "À Propos" },
  "footer.features": { en: "Features", fr: "Fonctionnalités" },
  "footer.pricing": { en: "Pricing", fr: "Tarification" },
  "footer.contact": { en: "Contact", fr: "Contact" },
  "footer.description": { en: "The ultimate all-in-one restaurant solution. Automate orders, manage stock, and drive profits with our intelligent POS platform.", fr: "La solution tout-en-un ultime pour restaurants. Automatisez les commandes, gérez les stocks et augmentez les profits avec notre plateforme POS intelligente." },
  "footer.navigation": { en: "Navigation", fr: "Navigation" },
  "footer.copyright": { en: "© 2024 Gustasi. All rights reserved.", fr: "© 2024 Gustasi. Tous droits réservés." },
  
  // Chat
  "chat.help": { en: "Need Help?", fr: "Besoin d'Aide?" },
  
  // Aggregator
  "aggregator.title": { en: "Now you can view all your aggregator orders in one place with Gustasi.", fr: "Maintenant, vous pouvez voir toutes vos commandes d'agrégateurs en un seul endroit avec Gustasi." }
};

let currentLanguage: 'en' | 'fr' = 'en';

export function t(key: string): string {
  const translation = translations[key]?.[currentLanguage];
  if (Array.isArray(translation)) {
    return translation[0]; // Return first item if it's an array
  }
  return translation || key;
}

export const tArray = (key: string): string[] => {
  const translation = translations[key]?.[currentLanguage];
  if (Array.isArray(translation)) {
    return translation;
  }
  return [translation || key];
};

export const setLanguage = (lang: 'en' | 'fr') => {
  currentLanguage = lang;
  // Trigger a re-render by dispatching a custom event
  window.dispatchEvent(new CustomEvent('languageChanged'));
};

export const getCurrentLanguage = () => currentLanguage;

export const useLanguage = () => {
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(getCurrentLanguage());
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  return currentLang;
};
