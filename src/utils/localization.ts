
export interface Translations {
  [key: string]: {
    en: string;
    fr: string;
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
  
  // Rolling Keywords
  "rolling.restaurant": { en: "Restaurant", fr: "Restaurant" },
  "rolling.cafe": { en: "Cafe", fr: "Café" },
  "rolling.bar": { en: "Bar", fr: "Bar" },
  "rolling.resort": { en: "Resort", fr: "Station" },
  "rolling.hotel": { en: "Hotel", fr: "Hôtel" },
  "rolling.chef": { en: "Chef", fr: "Chef" },
  "rolling.subtitle": { en: "Explore", fr: "Explorer" },
  "rolling.subtitle2": { en: "Near You", fr: "Près de Vous" },
  "rolling.ai": { en: "AI Recommendations", fr: "Recommandations IA" },
  "rolling.reviews": { en: "Real-time Reviews", fr: "Avis en Temps Réel" },
  "rolling.booking": { en: "Instant Booking", fr: "Réservation Instantanée" },
  "rolling.explore": { en: "Explore Now", fr: "Explorer Maintenant" },
  "rolling.restaurants": { en: "50,000+ Restaurants", fr: "50 000+ Restaurants" },
  "rolling.users": { en: "1M+ Users", fr: "1M+ Utilisateurs" },
  "rolling.rating": { en: "4.9★ Rating", fr: "4,9★ Note" },
  
  // Features
  "features.title": { en: "Complete Restaurant Management", fr: "Gestion Complète de Restaurant" },
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
  
  // Operations
  "operations.title": { en: "360° Operations Overview", fr: "Vue d'Ensemble Opérations 360°" },
  "operations.description": { en: "Complete visibility and control over every aspect of your restaurant business", fr: "Visibilité et contrôle complets sur tous les aspects de votre entreprise de restauration" },
  
  // Success Stories
  "success.title": { en: "Success Stories", fr: "Histoires de Succès" },
  "success.growth": { en: "Restaurant B saw 230% revenue growth", fr: "Restaurant B a vu une croissance de 230% du chiffre d'affaires" },
  "success.time": { en: "Save 800 hrs/year on accounting", fr: "Économisez 800h/an sur la comptabilité" },
  "success.reports": { en: "Track 25+ real-time reports", fr: "Suivez 25+ rapports en temps réel" },
  
  // WhatsApp Flow
  "whatsapp.title": { en: "WhatsApp Menu Flow", fr: "Flux Menu WhatsApp" },
  "whatsapp.scan": { en: "QR Scan", fr: "Scan QR" },
  "whatsapp.verification": { en: "WhatsApp Verification", fr: "Vérification WhatsApp" },
  "whatsapp.menu": { en: "Menu", fr: "Menu" },
  "whatsapp.capture": { en: "Lead Capture", fr: "Capture de Prospects" },
  "whatsapp.note": { en: "Data saved to dashboard for future targeting", fr: "Données sauvegardées au tableau de bord pour le ciblage futur" },
  
  // Franchise
  "franchise.title": { en: "Manage Multi-Location Outlets with a Master Account", fr: "Gérez les Points de Vente Multi-Emplacements avec un Compte Maître" },
  "franchise.subtitle": { en: "Live reporting, unified control panel", fr: "Rapports en direct, panneau de contrôle unifié" },
  
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
  "footer.pricing": { en: "Pricing", fr: "Prix" },
  "footer.contact": { en: "Contact", fr: "Contact" },
  
  // Chat
  "chat.help": { en: "Need Help?", fr: "Besoin d'Aide?" },
};

let currentLanguage: 'en' | 'fr' = 'en';

export const t = (key: string): string => {
  return translations[key]?.[currentLanguage] || key;
};

export const setLanguage = (lang: 'en' | 'fr') => {
  currentLanguage = lang;
  // Trigger a re-render by dispatching a custom event
  window.dispatchEvent(new CustomEvent('languageChanged'));
};

export const getCurrentLanguage = () => currentLanguage;
