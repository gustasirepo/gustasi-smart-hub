import React, { useState, useEffect } from 'react';

export interface Translations {
  [key: string]: {
    en: string | string[];
    fr: string | string[];
    hi?: string | string[];
    bn?: string | string[];
    ta?: string | string[];
  };
}

export const translations: Translations = {
  // Navbar
  "rolling.venuePlural": {
    en: "Restaurants",
    fr: "Restaurants",
    hi: "रेस्टोरेंट्स",
    bn: "রেস্টুরেন্ট",
    ta: "உணவகங்கள்"
  },
  "rolling.discoverAmazing": {
    en: "Discover Amazing",
    fr: "Découvrez Incroyable",
    hi: "शानदार खोजें",
    bn: "অবিশ্বাস্য আবিষ্কার করুন",
    ta: "அற்புதங்களை கண்டறியவும்"
  },
  "rolling.nearYou": {
    en: "Near You",
    fr: "Près de chez vous",
    hi: "आपके पास",
    bn: "আপনার কাছে",
    ta: "உங்களுக்கு அருகில்"
  },
  "rolling.description": {
    en: "Find the best places to eat, drink, and relax around you.",
    fr: "Trouvez les meilleurs endroits pour manger, boire et vous détendre autour de vous.",
    hi: "अपने आस-पास खाने, पीने और आराम करने के लिए सबसे अच्छी जगहें खोजें।",
    bn: "আপনার আশেপাশে খাওয়া, পান এবং বিশ্রাম করার জন্য সেরা স্থানগুলি খুঁজুন।",
    ta: "உங்கள் அருகில் சாப்பிட, குடிக்க மற்றும் ஓய்வெடுக்க சிறந்த இடங்களை கண்டறியவும்."
  },
  "rolling.topRated": {
    en: "Top Rated",
    fr: "Les mieux notés",
    hi: "शीर्ष रेटेड",
    bn: "শীর্ষ রেটেড",
    ta: "சிறந்த மதிப்பீடு"
  },
  "rolling.openNow": {
    en: "Open Now",
    fr: "Ouvert maintenant",
    hi: "अभी खुला है",
    bn: "এখন খোলা",
    ta: "இப்போது திறந்துள்ளது"
  },
  "nav.login": { en: "Login", fr: "Connexion", hi: "लॉगिन", bn: "লগইন", ta: "உள்நுழை" },
  "nav.signup": { en: "Sign Up", fr: "S'inscrire", hi: "साइन अप", bn: "সাইন আপ", ta: "பதிவு" },
  "nav.language": { en: "EN", fr: "FR", hi: "HI", bn: "BN", ta: "TA" },
  
  // Hero Section
  "hero.tagline": { en: "The Ultimate All-in-One Restaurant Solution", fr: "La Solution Restaurant Tout-en-Un Ultime", hi: "सर्वश्रेष्ठ ऑल-इन-वन रेस्टोरेंट समाधान", bn: "সেরা অল-ইন-ওয়ান রেস্টুরেন্ট সমাধান", ta: "சிறந்த அனைத்தும் ஒன்றாக உள்ள உணவகம் தீர்வு" },
  "hero.subtext": { en: "Automate orders, manage stock, and drive profits with one intelligent POS platform", fr: "Automatisez les commandes, gérez les stocks et augmentez les profits avec une plateforme POS intelligente", hi: "आदेशों को स्वचालित करें, स्टॉक प्रबंधित करें, और एक बुद्धिमान पीओएस प्लेटफ़ॉर्म के साथ लाभ बढ़ाएं", bn: "অর্ডার স্বয়ংক্রিয় করুন, স্টক পরিচালনা করুন এবং একটি বুদ্ধিমান POS প্ল্যাটফর্ম দিয়ে লাভ বাড়ান", ta: "ஆணைகளை தானாகச் செய்யுங்கள், பங்குகளை நிர்வகியுங்கள், மற்றும் ஒரு புத்திசாலி POS தளத்துடன் லாபங்களை அதிகரியுங்கள்" },
  "hero.cta": { en: "Book a Demo", fr: "Réserver une Démo", hi: "डेमो बुक करें", bn: "একটি ডেমো বুক করুন", ta: "டெமோவை பதிவு செய்யவும்" },
  

  // Hero Section Additional
  "hero.mainTitle": { en: "The Ultimate", fr: "L'Ultime", hi: "सर्वश्रेष्ठ", bn: "সেরা", ta: "சிறந்த" },
  "hero.subTitle": { en: "Restaurant Solution", fr: "Solution Restaurant", hi: "रेस्टोरेंट समाधान", bn: "রেস্টুরেন্ট সমাধান", ta: "உணவகம் தீர்வு" },
  "hero.description": { en: "Transform your restaurant with intelligent automation, real-time analytics, and seamless multi-platform integration.", fr: "Transformez votre restaurant avec l'automatisation intelligente, l'analyse en temps réel et l'intégration transparente multi-plateformes.", hi: "अपने रेस्तरां को बुद्धिमान स्वचालन, रीयल-टाइम एनालिटिक्स और निर्बाध मल्टी-प्लेटफॉर्म एकीकरण के साथ बदलें।", bn: "আপনার রেস্টুরেন্টকে বুদ্ধিমান অটোমেশন, রিয়েল-টাইম বিশ্লেষণ এবং নির্বিঘ্ন মাল্টি-প্ল্যাটফর্ম ইন্টিগ্রেশনের সাথে রূপান্তর করুন।", ta: "உங்கள் உணவகத்தை புத்திசாலி தானியங்கி, நேரடி பகுப்பாய்வு மற்றும் தடையற்ற பல தள ஒருங்கிணைப்புடன் மாற்றுங்கள்." },
  "hero.orderGrowth": { en: "Order Growth", fr: "Croissance des Commandes", hi: "आदेश वृद्धि", bn: "অর্ডার বৃদ্ধি", ta: "ஆணை வளர்ச்சி" },
  "hero.fraudReduction": { en: "Fraud Reduction", fr: "Réduction de la Fraude", hi: "धोखाधड़ी में कमी", bn: "প্রতারণা হ্রাস", ta: "மோசடி குறைப்பு" },
  "hero.restaurants": { en: "Restaurants", fr: "Restaurants", hi: "रेस्टोरेंट्स", bn: "রেস্টুরেন্ট", ta: "உணவகங்கள்" },
  "hero.rating": { en: "Rating", fr: "Note", hi: "रेटिंग", bn: "রেটিং", ta: "மதிப்பீடு" },
  "hero.liveDashboard": { en: "Live Dashboard", fr: "Tableau de Bord en Direct", hi: "लाइव डैशबोर्ड", bn: "লাইভ ড্যাশবোর্ড", ta: "நேரடி டாஷ்போர்டு" },
  "hero.realTimeUpdates": { en: "Real-time Updates", fr: "Mises à Jour en Temps Réel", hi: "रीयल-टाइम अपडेट्स", bn: "রিয়েল-টাইম আপডেট", ta: "நேரடி புதுப்பிப்புகள்" },
  "hero.avgOrderValue": { en: "Avg. Order Value", fr: "Valeur Moyenne Commande", hi: "औसत आदेश मूल्य", bn: "গড় অর্ডার মূল্য", ta: "சராசரி ஆணை மதிப்பு" },
  "hero.todaysGrowth": { en: "Today's Growth", fr: "Croissance Aujourd'hui", hi: "आज की वृद्धि", bn: "আজকের বৃদ্ধি", ta: "இன்றைய வளர்ச்சி" },
  "hero.activeOrders": { en: "Active Orders", fr: "Commandes Actives", hi: "सक्रिय आदेश", bn: "সক্রিয় অর্ডার", ta: "செயலில் உள்ள ஆணைகள்" },
  "hero.newOrder": { en: "New Order!", fr: "Nouvelle Commande!", hi: "नया आदेश!", bn: "নতুন অর্ডার!", ta: "புதிய ஆணை!" },
  "hero.orderReady": { en: "Order Ready!", fr: "Commande Prête!", hi: "आदेश तैयार है!", bn: "অর্ডার প্রস্তুত!", ta: "ஆணை தயாராக உள்ளது!" },

  
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
  "rolling.exploreNow": { en: "Explore Now", fr: "Explorer Maintenant", hi: "अब एक्सप्लोर करें", bn: "এখনই এক্সপ্লোর করুন", ta: "இப்போது ஆராயுங்கள்" },
  "rolling.cities": { en: "New York • London • Paris", fr: "New York • Londres • Paris", hi: "न्यूयॉर्क • लंदन • पेरिस", bn: "নিউ ইয়র্ক • লন্ডন • প্যারিস", ta: "நியூயார்க் • லண்டன் • பாரிஸ்" },
  "rolling.restaurants": { en: "50,000+ Restaurants", fr: "50 000+ Restaurants" },
  "rolling.users": {
    en: "Users",
    fr: "Utilisateurs",
    hi: "उपयोगकर्ता",
    bn: "ব্যবহারকারী",
    ta: "பயனர்கள்"
  },
  "rolling.rating": {
    en: "Rating",
    fr: "Note",
    hi: "रेटिंग",
    bn: "রেটিং",
    ta: "மதிப்பீடு"
  },
  
  // Features Section
  "features.title": { en: "Everything You Need in One Place", fr: "Tout Ce Dont Vous Avez Besoin au Même Endroit", hi: "एक ही स्थान पर आपकी सभी ज़रूरतें", bn: "এক জায়গায় আপনার সমস্ত চাহিদা", ta: "ஒரே இடத்தில் உங்கள் அனைத்து தேவைகளும்" },
  "features.subtitle": { en: "Powerful features designed to help your business grow", fr: "Des fonctionnalités puissantes conçues pour développer votre entreprise", hi: "आपके व्यवसाय को बढ़ाने के लिए डिज़ाइन की गई शक्तिशाली विशेषताएँ", bn: "আপনার ব্যবসা বাড়ানোর জন্য ডিজাইন করা শক্তিশালী বৈশিষ্ট্যগুলি", ta: "உங்கள் வணிக வளர்ச்சிக்காக வடிவமைக்கப்பட்ட சக்திவாய்ந்த அம்சங்கள்" },
  "features.pageTitle": { en: "Feature", fr: "Fonctionnalité", hi: "विशेषता", bn: "বৈশিষ্ট্য", ta: "அம்சம்" },
  "features.pageDescription": { en: "Discover how this feature can transform your restaurant operations", fr: "Découvrez comment cette fonctionnalité peut transformer vos opérations de restauration", hi: "जानिए यह विशेषता आपके रेस्तरां संचालन को कैसे बदल सकती है", bn: "জানুন কিভাবে এই বৈশিষ্ট্যটি আপনার রেস্টুরেন্ট পরিচালনাকে রূপান্তরিত করতে পারে", ta: "இந்த அம்சம் உங்கள் உணவக செயல்பாடுகளை எவ்வாறு மாற்றும் என்பதை கண்டறியவும்" },
  "features.fraud": { en: "Fraud Prevention", fr: "Prévention Fraude", hi: "धोखाधड़ी रोकथाम", bn: "প্রতারণা প্রতিরোধ", ta: "மோசடி தடுப்பு" },
  "features.crm": { en: "CRM & Customer Retention", fr: "CRM & Fidélisation", hi: "सीआरएम और ग्राहक प्रतिधारण", bn: "সিআরএম ও গ্রাহক ধরে রাখা", ta: "CRM மற்றும் வாடிக்கையாளர் தக்கவைப்பு" },
  "features.table": { en: "Digital Table Management", fr: "Gestion Tables Digitale", hi: "डिजिटल टेबल प्रबंधन", bn: "ডিজিটাল টেবিল ব্যবস্থাপনা", ta: "டிஜிட்டல் மேசை மேலாண்மை" },
  "features.supplier": { en: "Supplier Ledger & Inventory", fr: "Grand Livre Fournisseur & Inventaire", hi: "आपूर्तिकर्ता खाता और सूची", bn: "সরবরাহকারী খাতা ও ইনভেন্টরি", ta: "வழங்குநர் கணக்கு மற்றும் சாமான்கள்" },
  "features.qr": { en: "Smart QR Menu", fr: "Menu QR Intelligent", hi: "स्मार्ट क्यूआर मेनू", bn: "স্মার্ট QR মেনু", ta: "ஸ்மார்ட் QR மெனு" },
  "features.kot": { en: "Multi-KOT Support", fr: "Support Multi-KOT", hi: "मल्टी-KOT समर्थन", bn: "মাল্টি-KOT সাপোর্ট", ta: "பல KOT ஆதரவு" },
  "features.billing": { en: "One-Bill Settlement", fr: "Règlement Une Facture", hi: "एक-बिल निपटान", bn: "এক-বিল নিষ্পত্তি", ta: "ஒரே பில் தீர்வு" },
  "features.access": { en: "Staff Access Control", fr: "Contrôle Accès Personnel", hi: "कर्मचारी अभिगम नियंत्रण", bn: "স্টাফ প্রবেশাধিকার নিয়ন্ত্রণ", ta: "பணியாளர் அணுகல் கட்டுப்பாடு" },
  "features.order": { en: "Order Management", fr: "Gestion des Commandes", hi: "ऑर्डर प्रबंधन", bn: "অর্ডার ব্যবস্থাপনা", ta: "ஆர்டர் மேலாண்மை" },
  "features.menu": { en: "Menu Setup", fr: "Configuration Menu", hi: "मेनू सेटअप", bn: "মেনু সেটআপ", ta: "மெனு அமைப்பு" },
  "features.feedback": { en: "Customer Feedback", fr: "Commentaires Clients", hi: "ग्राहक प्रतिक्रिया", bn: "গ্রাহক প্রতিক্রিয়া", ta: "வாடிக்கையாளர் கருத்து" },
  
  // Feature Grid Additional
  "features.gridSubtitle": { en: "Everything you need to run a successful restaurant business in one powerful platform", fr: "Tout ce dont vous avez besoin pour gérer une entreprise de restauration réussie dans une plateforme puissante", hi: "एक ही शक्तिशाली प्लेटफ़ॉर्म में सफल रेस्तरां व्यवसाय चलाने के लिए आपको जो कुछ भी चाहिए", bn: "একটি শক্তিশালী প্ল্যাটফর্মে সফল রেস্টুরেন্ট ব্যবসা চালানোর জন্য আপনার যা কিছু দরকার", ta: "ஒரே சக்திவாய்ந்த தளத்தில் வெற்றிகரமான உணவக வணிகம் நடத்த தேவையான அனைத்தும்" },
  "features.fraudDesc": { en: "Advanced AI-powered fraud detection and prevention", fr: "Détection et prévention de la fraude avancée basée sur l'IA", hi: "एआई-संचालित उन्नत धोखाधड़ी पहचान और रोकथाम", bn: "উন্নত এআই-চালিত প্রতারণা সনাক্তকরণ ও প্রতিরোধ", ta: "AI இயக்கும் மேம்பட்ட மோசடி கண்டறிதல் மற்றும் தடுப்பு" },
  "features.crmDesc": { en: "Build lasting relationships with intelligent customer insights", fr: "Construisez des relations durables avec des insights clients intelligents", hi: "बुद्धिमान ग्राहक इनसाइट्स के साथ स्थायी संबंध बनाएं", bn: "বুদ্ধিমান গ্রাহক অন্তর্দৃষ্টির মাধ্যমে স্থায়ী সম্পর্ক গড়ে তুলুন", ta: "புத்திசாலி வாடிக்கையாளர் உள்ளடக்கங்களுடன் நீடித்த உறவுகளை உருவாக்குங்கள்" },
  "features.tableDesc": { en: "Seamless digital table booking and management system", fr: "Système de réservation et de gestion de tables numérique fluide", hi: "सीमलेस डिजिटल टेबल बुकिंग और प्रबंधन प्रणाली", bn: "নিরবচ্ছিন্ন ডিজিটাল টেবিল বুকিং ও ব্যবস্থাপনা ব্যবস্থা", ta: "முரண்பாடற்ற டிஜிட்டல் மேசை முன்பதிவு மற்றும் மேலாண்மை அமைப்பு" },
  "features.supplierDesc": { en: "Complete supplier management and inventory tracking", fr: "Gestion complète des fournisseurs et suivi des stocks", hi: "पूर्ण आपूर्तिकर्ता प्रबंधन और सूची ट्रैकिंग", bn: "সম্পূর্ণ সরবরাহকারী ব্যবস্থাপনা ও ইনভেন্টরি ট্র্যাকিং", ta: "முழுமையான வழங்குநர் மேலாண்மை மற்றும் சாமான்கள் கண்காணிப்பு" },
  "features.qrDesc": { en: "Interactive QR menus with real-time updates", fr: "Menus QR interactifs avec mises à jour en temps réel", hi: "रीयल-टाइम अपडेट्स के साथ इंटरएक्टिव क्यूआर मेनू", bn: "রিয়েল-টাইম আপডেট সহ ইন্টারেক্টিভ QR মেনু", ta: "நேரடி புதுப்பிப்புகளுடன் தொடர்பாடும் QR மெனுக்கள்" },
  "features.kotDesc": { en: "Multi-kitchen order tracking system", fr: "Système de suivi des commandes multi-cuisines", hi: "मल्टी-किचन ऑर्डर ट्रैकिंग सिस्टम", bn: "মাল্টি-কিচেন অর্ডার ট্র্যাকিং সিস্টেম", ta: "பல சமையலறை ஆர்டர் கண்காணிப்பு அமைப்பு" },
  "features.billingDesc": { en: "Unified billing system for seamless settlements", fr: "Système de facturation unifié pour des règlements fluides", hi: "सीमलेस सेटलमेंट्स के लिए एकीकृत बिलिंग सिस्टम", bn: "নিরবচ্ছিন্ন নিষ্পত্তির জন্য একীভূত বিলিং সিস্টেম", ta: "முரண்பாடற்ற தீர்வுகளுக்கான ஒருங்கிணைந்த பில்லிங் அமைப்பு" },
  "features.accessDesc": { en: "Role-based staff access and permissions", fr: "Accès et permissions du personnel basés sur les rôles", hi: "भूमिका-आधारित स्टाफ अभिगम और अनुमतियाँ", bn: "ভূমিকা-ভিত্তিক স্টাফ প্রবেশাধিকার ও অনুমতি", ta: "பங்கு அடிப்படையிலான பணியாளர் அணுகல் மற்றும் அனுமதிகள்" },

  // FeatureGrid Learn More CTA
  "features.learnMore": {
    en: "Learn more",
    fr: "En savoir plus",
    hi: "और जानें",
    bn: "আরও জানুন",
    ta: "மேலும் அறிக"
  },

  // ExploreRestaurants Discover & Savor
  "explore.discoverSavor": {
    en: "Discover & Savor",
    fr: "Découvrir & Savourer",
    hi: "खोजें और स्वाद लें",
    bn: "আবিষ্কার করুন ও আস্বাদন করুন",
    ta: "கண்டறிந்து ரசிக்கவும்"
  },

  // CTA Sign Up Now
  "cta.signupNow": {
    en: "Sign Up Now",
    fr: "Inscrivez-vous maintenant",
    hi: "अभी साइन अप करें",
    bn: "এখনই সাইন আপ করুন",
    ta: "இப்போது பதிவு செய்யவும்"
  },

  // Success Story Company Names
  "success.company.restaurantB": {
    en: "Restaurant B",
    fr: "Restaurant B",
    hi: "रेस्टोरेंट B",
    bn: "রেস্টুরেন্ট B",
    ta: "உணவகம் B"
  },
  "success.company.cafeCentral": {
    en: "Cafe Central",
    fr: "Café Central",
    hi: "कैफे सेंट्रल",
    bn: "ক্যাফে সেন্ট্রাল",
    ta: "கஃபே சென்ட்ரல்"
  },
  "success.company.hotelPlaza": {
    en: "Hotel Plaza",
    fr: "Hôtel Plaza",
    hi: "होटल प्लाज़ा",
    bn: "হোটেল প্লাজা",
    ta: "ஹோட்டல் பிளாசா"
  },

  // Language Names (localized)
  "lang.en": {
    en: "English",
    fr: "Anglais",
    hi: "अंग्रेज़ी",
    bn: "ইংরেজি",
    ta: "ஆங்கிலம்"
  },
  "lang.fr": {
    en: "French",
    fr: "Français",
    hi: "फ्रेंच",
    bn: "ফরাসি",
    ta: "பிரஞ்சு"
  },
  "lang.hi": {
    en: "Hindi",
    fr: "Hindi",
    hi: "हिन्दी",
    bn: "হিন্দি",
    ta: "இந்தி"
  },
  "lang.bn": {
    en: "Bengali",
    fr: "Bengali",
    hi: "बंगाली",
    bn: "বাংলা",
    ta: "பெங்காலி"
  },
  "lang.ta": {
    en: "Tamil",
    fr: "Tamoul",
    hi: "तमिल",
    bn: "তামিল",
    ta: "தமிழ்"
  },
  
  // Operations
  "operations.title": { en: "360° Operations Overview", fr: "Vue d'Ensemble Opérations 360°", hi: "360° संचालन अवलोकन", bn: "৩৬০° অপারেশনস ওভারভিউ", ta: "360° செயல்பாட்டு மேற்பார்வை" },
  "operations.description": { en: "Complete visibility and control over every aspect of your restaurant business", fr: "Visibilité et contrôle complets sur tous les aspects de votre entreprise de restauration", hi: "आपके रेस्तरां व्यवसाय के हर पहलू पर पूरी दृश्यता और नियंत्रण", bn: "আপনার রেস্টুরেন্ট ব্যবসার প্রতিটি দিকের সম্পূর্ণ দৃশ্যমানতা এবং নিয়ন্ত্রণ", ta: "உங்கள் உணவக வணிகத்தின் அனைத்து அம்சங்களிலும் முழுமையான பார்வையும் கட்டுப்பாடும்" },
  "operations.orderDesc": { en: "Real-time order tracking and kitchen operations", fr: "Suivi des commandes en temps réel et opérations de cuisine", hi: "रीयल-टाइम ऑर्डर ट्रैकिंग और किचन संचालन", bn: "রিয়েল-টাইম অর্ডার ট্র্যাকিং এবং রান্নাঘর পরিচালনা", ta: "நேரடி ஆர்டர் கண்காணிப்பு மற்றும் சமையலறை செயல்பாடுகள்" },
  "operations.menuDesc": { en: "Dynamic menu management and pricing control", fr: "Gestion dynamique des menus et contrôle des prix", hi: "डायनामिक मेनू प्रबंधन और मूल्य निर्धारण नियंत्रण", bn: "ডায়নামিক মেনু ম্যানেজমেন্ট এবং মূল্য নিয়ন্ত্রণ", ta: "இயங்கும் மெனு மேலாண்மை மற்றும் விலை கட்டுப்பாடு" },
  "operations.qrDesc": { en: "Contactless dining with smart QR menus", fr: "Restaurant sans contact avec menus QR intelligents", hi: "स्मार्ट क्यूआर मेनू के साथ संपर्क रहित भोजन", bn: "স্মার্ট কিউআর মেনুর সাথে কন্টাক্টলেস ডাইনিং", ta: "ஸ்மார்ட் QR மெனுக்களுடன் தொடுதலில்லா உணவு" },
  "operations.feedbackDesc": { en: "Real-time reviews and rating management", fr: "Gestion des avis et des notes en temps réel", hi: "रीयल-टाइम समीक्षाएँ और रेटिंग प्रबंधन", bn: "রিয়েল-টাইম রিভিউ এবং রেটিং ম্যানেজমেন্ট", ta: "நேரடி விமர்சனங்கள் மற்றும் மதிப்பீடு மேலாண்மை" },
  "operations.tableDesc": { en: "Seamless booking and table management", fr: "Réservation et gestion des tables fluides", hi: "सीमलेस बुकिंग और टेबल प्रबंधन", bn: "নিরবচ্ছিন্ন বুকিং এবং টেবিল ম্যানেজমেন্ট", ta: "முரண்பாடற்ற முன்பதிவு மற்றும் மேசை மேலாண்மை" },
  "operations.supplierDesc": { en: "Smart inventory tracking and supplier management", fr: "Suivi intelligent des stocks et gestion des fournisseurs", hi: "स्मार्ट इन्वेंटरी ट्रैकिंग और आपूर्तिकर्ता प्रबंधन", bn: "স্মার্ট ইনভেন্টরি ট্র্যাকিং এবং সাপ্লায়ার ম্যানেজমেন্ট", ta: "ஸ்மார்ட் சரக்கு கண்காணிப்பு மற்றும் சப்ளையர் மேலாண்மை" },
  
  // Success Stories
  "success.title": { en: "Success Stories", fr: "Histoires de Succès", hi: "सफलता की कहानियाँ", bn: "সাফল্যের গল্প", ta: "வெற்றிக் கதைகள்" },
  "success.subtitle": { en: "Real results from real restaurants using Gustasi", fr: "Résultats réels de vrais restaurants utilisant Gustasi", hi: "गुस्तासी का उपयोग करने वाले असली रेस्तरां से वास्तविक परिणाम", bn: "গুস্তাসি ব্যবহার করে প্রকৃত রেস্টুরেন্ট থেকে প্রকৃত ফলাফল", ta: "குஸ்தாசி பயன்படுத்தும் உணவகங்களில் இருந்து உண்மையான முடிவுகள்" },
  "success.growth": { en: "Restaurant B saw 230% revenue growth", fr: "Restaurant B a vu une croissance de 230% du chiffre d'affaires", hi: "रेस्तरां B ने 230% राजस्व वृद्धि देखी", bn: "রেস্টুরেন্ট বি ২৩% রাজস্ব বৃদ্ধি দেখেছে", ta: "உணவகம் B 230% வருமான வளர்ச்சியை கண்டது" },
  "success.time": { en: "Save 800 hrs/year on accounting", fr: "Économisez 800h/an sur la comptabilité", hi: "लेखांकन पर प्रति वर्ष 800 घंटे बचाएं", bn: "হিসাবরক্ষণে প্রতি বছর ৮০০ ঘন্টা সাশ্রয় করুন", ta: "கணக்கில் ஆண்டுக்கு 800 மணி நேரம் சேமிக்கவும்" },
  "success.reports": { en: "Track 25+ real-time reports", fr: "Suivez 25+ rapports en temps réel", hi: "25+ रीयल-टाइम रिपोर्ट्स को ट्रैक करें", bn: "২৫+ রিয়েল-টাইম রিপোর্ট ট্র্যাক করুন", ta: "25+ நேரடி அறிக்கைகளை கண்காணிக்கவும்" },
  
  // WhatsApp Flow
  "whatsapp.title": { en: "WhatsApp Menu Flow", fr: "Flux Menu WhatsApp", hi: "व्हाट्सएप मेनू फ्लो", bn: "হোয়াটসঅ্যাপ মেনু ফ্লো", ta: "வாட்ஸ்அப் மெனு ஓட்டம்" },
  "whatsapp.subtitle": { en: "Seamless customer journey from QR scan to order completion", fr: "Parcours client fluide du scan QR à la finalisation de la commande", hi: "क्यूआर स्कैन से ऑर्डर पूर्णता तक सहज ग्राहक यात्रा", bn: "QR স্ক্যান থেকে অর্ডার সম্পূর্ণ হওয়া পর্যন্ত নিরবচ্ছিন্ন গ্রাহক যাত্রা", ta: "QR ஸ்கேன் முதல் ஆணை முடிவடையும் வரை தடையற்ற வாடிக்கையாளர் பயணம்" },
  "whatsapp.scan": { en: "QR Scan", fr: "Scan QR", hi: "क्यूआर स्कैन", bn: "QR স্ক্যান", ta: "QR ஸ்கேன்" },
  "whatsapp.verification": { en: "WhatsApp Verification", fr: "Vérification WhatsApp", hi: "व्हाट्सएप सत्यापन", bn: "হোয়াটসঅ্যাপ যাচাইকরণ", ta: "வாட்ஸ்அப் சரிபார்ப்பு" },
  "whatsapp.menu": { en: "Menu", fr: "Menu", hi: "मेनू", bn: "মেনু", ta: "மெனு" },
  "whatsapp.capture": { en: "Lead Capture", fr: "Capture de Prospects", hi: "लीड कैप्चर", bn: "লিড ক্যাপচার", ta: "வழிகாட்டி பிடிப்பு" },
  "whatsapp.note": { en: "Data saved to dashboard for future targeting", fr: "Données sauvegardées au tableau de bord pour le ciblage futur", hi: "भविष्य के टार्गेटिंग के लिए डैशबोर्ड में डेटा सहेजा गया", bn: "ভবিষ্যতের লক্ষ্যকরণের জন্য ড্যাশবোর্ডে ডেটা সংরক্ষিত হয়েছে", ta: "எதிர்கால இலக்கீட்டிற்காக தரவு டாஷ்போர்டில் சேமிக்கப்பட்டது" },
  
  // Franchise
  "franchise.title": { en: "Franchise Dashboard", fr: "Tableau de Bord Franchise", hi: "फ्रेंचाइज़ी डैशबोर्ड", bn: "ফ্র্যাঞ্চাইজি ড্যাশবোর্ড", ta: "கிளை டாஷ்போர்டு" },
  "franchise.subtitle": { en: "Manage multi-location outlets with a unified, modern franchise dashboard.", fr: "Gérez les points de vente multi-emplacements avec un tableau de bord franchise unifié et moderne.", hi: "एकीकृत, आधुनिक फ्रेंचाइज़ी डैशबोर्ड के साथ मल्टी-लोकेशन आउटलेट्स प्रबंधित करें।", bn: "একীভূত, আধুনিক ফ্র্যাঞ্চাইজি ড্যাশবোর্ড দিয়ে মাল্টি-লোকেশন আউটলেট পরিচালনা করুন।", ta: "ஒருங்கிணைந்த, நவீன கிளை டாஷ்போர்டுடன் பல இடங்களில் உள்ள கிளைகளை நிர்வகிக்கவும்." },
  "franchise.activeOutlets": { en: "Active Outlets", fr: "Points de Vente Actifs", hi: "सक्रिय आउटलेट्स", bn: "সক্রিয় আউটলেট", ta: "செயலில் உள்ள கிளைகள்" },
  "franchise.totalRevenue": { en: "Total Revenue", fr: "Revenu Total", hi: "कुल राजस्व", bn: "মোট রাজস্ব", ta: "மொத்த வருமானம்" },
  "franchise.outletLocations": { en: "Outlet Locations", fr: "Emplacements des Points de Vente", hi: "आउटलेट स्थान", bn: "আউটলেট অবস্থান", ta: "கிளை இடங்கள்" },
  "franchise.whyChoose": { en: "Why Choose Franchise Dashboard?", fr: "Pourquoi Choisir le Tableau de Bord Franchise ?", hi: "फ्रेंचाइज़ी डैशबोर्ड क्यों चुनें?", bn: "ফ্র্যাঞ্চাইজি ড্যাশবোর্ড কেন বেছে নেবেন?", ta: "கிளை டாஷ்போர்டை ஏன் தேர்வு செய்ய வேண்டும்?" },
  "franchise.benefit1": { en: "Real-time performance tracking for all outlets", fr: "Suivi des performances en temps réel pour tous les points de vente", hi: "सभी आउटलेट्स के लिए रीयल-टाइम प्रदर्शन ट्रैकिंग", bn: "সমস্ত আউটলেটের জন্য রিয়েল-টাইম পারফরম্যান্স ট্র্যাকিং", ta: "அனைத்து கிளைகளுக்கும் நேரடி செயல்திறன் கண்காணிப்பு" },
  "franchise.benefit2": { en: "Centralized revenue and staff management", fr: "Gestion centralisée des revenus et du personnel", hi: "केंद्रीकृत राजस्व और स्टाफ प्रबंधन", bn: "কেন্দ্রীভূত রাজস্ব এবং স্টাফ ম্যানেজমেন্ট", ta: "மையப்படுத்தப்பட்ட வருமானம் மற்றும் ஊழியர் மேலாண்மை" },
  "franchise.benefit3": { en: "Easy onboarding for new franchisees", fr: "Intégration facile des nouveaux franchisés", hi: "नए फ्रेंचाइज़ी के लिए आसान ऑनबोर्डिंग", bn: "নতুন ফ্র্যাঞ্চাইজিদের জন্য সহজ অনবোর্ডিং", ta: "புதிய கிளைதாரர்களுக்கான எளிதான இணைப்பு" },
  "franchise.benefit4": { en: "Visualize outlet locations and status at a glance", fr: "Visualisez les emplacements et le statut des points de vente en un coup d'œil", hi: "आउटलेट स्थानों और स्थिति को एक नज़र में देखें", bn: "এক নজরে আউটলেট অবস্থান এবং অবস্থা দেখুন", ta: "கிளை இடங்கள் மற்றும் நிலையை ஒரு பார்வையில் காண்க" },
  
  // Metrics
  "metrics.chefs": { en: "7000+ Chefs", fr: "7000+ Chefs", hi: "7000+ शेफ", bn: "৭০০০+ শেফ", ta: "7000+ சமையலர்கள்" },
  "metrics.cities": { en: "50+ Cities", fr: "50+ Villes", hi: "50+ शहर", bn: "৫০+ শহর", ta: "50+ நகரங்கள்" },
  "metrics.reports": { en: "25+ Reports", fr: "25+ Rapports", hi: "25+ रिपोर्ट्स", bn: "২৫+ রিপোর্ট", ta: "25+ அறிக்கைகள்" },
  "metrics.savings": { en: "20–25% Fraud Savings", fr: "20–25% Économies Fraude", hi: "20–25% धोखाधड़ी बचत", bn: "২০–২৫% প্রতারণা সাশ্রয়", ta: "20–25% மோசடி சேமிப்பு" },
  
  // CTAs
  "cta.schedule": { en: "Schedule Demo", fr: "Planifier Démo", hi: "डेमो शेड्यूल करें", bn: "ডেমো নির্ধারণ করুন", ta: "டெமோவை திட்டமிடவும்" },
  "cta.pricing": { en: "Explore Pricing", fr: "Explorer Prix", hi: "मूल्य निर्धारण देखें", bn: "মূল্য নির্ধারণ দেখুন", ta: "விலை நிர்ணயத்தை ஆராயவும்" },
  "cta.chefs": { en: "Find Chefs Near You", fr: "Trouver Chefs Près de Vous", hi: "अपने पास शेफ खोजें", bn: "আপনার কাছাকাছি শেফ খুঁজুন", ta: "உங்களுக்கருகில் சமையலர்களை கண்டறியவும்" },
  
  // Footer
  "footer.home": { en: "Home", fr: "Accueil", hi: "होम", bn: "হোম", ta: "முகப்பு" },
  "footer.about": { en: "About", fr: "À Propos", hi: "के बारे में", bn: "সম্পর্কে", ta: "பற்றி" },
  "footer.features": { en: "Features", fr: "Fonctionnalités", hi: "विशेषताएँ", bn: "বৈশিষ্ট্যাবলী", ta: "அம்சங்கள்" },
  "footer.pricing": { en: "Pricing", fr: "Tarification", hi: "मूल्य निर्धारण", bn: "মূল্য নির্ধারণ", ta: "விலை நிர்ணயம்" },
  "footer.contact": { en: "Contact", fr: "Contact", hi: "संपर्क करें", bn: "যোগাযোগ", ta: "தொடர்பு" },
  "footer.description": { en: "The ultimate all-in-one restaurant solution. Automate orders, manage stock, and drive profits with our intelligent POS platform.", fr: "La solution tout-en-un ultime pour restaurants. Automatisez les commandes, gérez les stocks et augmentez les profits avec notre plateforme POS intelligente.", hi: "सर्वश्रेष्ठ ऑल-इन-वन रेस्टोरेंट समाधान। आदेशों को स्वचालित करें, स्टॉक प्रबंधित करें, और हमारे बुद्धिमान पीओएस प्लेटफ़ॉर्म के साथ लाभ बढ़ाएं।", bn: "সেরা অল-ইন-ওয়ান রেস্টুরেন্ট সমাধান। অর্ডার স্বয়ংক্রিয় করুন, স্টক পরিচালনা করুন এবং আমাদের বুদ্ধিমান POS প্ল্যাটফর্ম দিয়ে লাভ বাড়ান।", ta: "சிறந்த அனைத்தும் ஒன்றாக உள்ள உணவகம் தீர்வு. ஆணைகளை தானாகச் செய்யுங்கள், பங்குகளை நிர்வகியுங்கள், மற்றும் எங்கள் புத்திசாலி POS தளத்துடன் லாபங்களை அதிகரியுங்கள்." },
  "footer.navigation": { en: "Navigation", fr: "Navigation", hi: "नेविगेशन", bn: "নেভিগেশন", ta: "வழிசெலுத்தல்" },
  "footer.copyright": { en: " 2024 Gustasi. All rights reserved.", fr: " 2024 Gustasi. Tous droits réservés.", hi: " 2024 Gustasi. सर्वाधिकार सुरक्षित।", bn: " 2024 Gustasi. সর্বস্বত্ব সংরক্ষিত।", ta: " 2024 Gustasi. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
  
  // Chat
  "chat.help": { en: "Need Help?", fr: "Besoin d'Aide?", hi: "मदद चाहिए?", bn: "সাহায্য দরকার?", ta: "உதவி வேண்டுமா?" },
  
  // Aggregator
  "aggregator.title": { en: "Now you can view all your aggregator orders in one place with Gustasi.", fr: "Maintenant, vous pouvez voir toutes vos commandes d'agrégateurs en un seul endroit avec Gustasi.", hi: "अब आप अपने सभी एग्रीगेटर ऑर्डर को एक ही जगह पर Gustasi के साथ देख सकते हैं।", bn: "এখন আপনি Gustasi দিয়ে আপনার সমস্ত অ্যাগ্রিগেটর অর্ডার এক জায়গায় দেখতে পারেন।", ta: "இப்போது நீங்கள் உங்கள் அனைத்து அகரிகேட்டர் ஆணைகளையும் ஒரே இடத்தில் Gustasi உடன் பார்க்கலாம்." },
  // Mobile POS Section
  "pos.nowAvailable": { en: "Now Available on Mobile", fr: "Disponible sur Mobile", hi: "अब मोबाइल पर उपलब्ध", bn: "এখন মোবাইলে উপলব্ধ", ta: "இப்போது மொபைலில் கிடைக்கிறது" },
  "pos.noHardwareRequired": { en: "NO HARDWARE REQUIRED", fr: "AUCUN MATÉRIEL REQUIS", hi: "कोई हार्डवेयर आवश्यक नहीं", bn: "কোনো হার্ডওয়্যার প্রয়োজন নেই", ta: "யாதொரு ஹார்ட்வேரும் தேவையில்லை" },
  "pos.description": { en: "Mobile POS system for restaurants to manage orders, track inventory, and grow business from anywhere.", fr: "Système POS mobile pour les restaurants afin de gérer les commandes, suivre les stocks et développer l'entreprise de n'importe où.", hi: "रेस्तरां के लिए मोबाइल POS सिस्टम, ऑर्डर प्रबंधित करें, इन्वेंट्री ट्रैक करें, और कहीं से भी व्यवसाय बढ़ाएं।", bn: "রেস্টুরেন্টের জন্য মোবাইল POS সিস্টেম, অর্ডার পরিচালনা করুন, ইনভেন্টরি ট্র্যাক করুন এবং যেকোনো স্থান থেকে ব্যবসা বাড়ান।", ta: "உணவகங்களுக்கு மொபைல் POS அமைப்பு, ஆர்டர்களை நிர்வகிக்கவும், சரக்குகளை கண்காணிக்கவும், எங்கிருந்தும் வணிகத்தை வளர்க்கவும்." },
  "pos.headline.main": { en: "The Future of Restaurant Management", fr: "L'avenir de la gestion de restaurant", hi: "रेस्तरां प्रबंधन का भविष्य", bn: "রেস্টুরেন্ট ব্যবস্থাপনার ভবিষ্যৎ", ta: "உணவக மேலாண்மையின் எதிர்காலம்" },
  "pos.headline.sub": { en: "Is in Your Hands", fr: "Est entre vos mains", hi: "आपके हाथ में है", bn: "আপনার হাতে", ta: "உங்கள் கையில் உள்ளது" },
  "pos.body": { en: "Transform your smartphone into a powerful Point of Sale (POS) system. Manage orders, track inventory, and grow your business—all from the palm of your hand. Gustasi POS Mobile helps restaurant owners streamline operations and increase efficiency with our intuitive mobile solution.", fr: "Transformez votre smartphone en un puissant système de point de vente (POS). Gérez les commandes, suivez les stocks et développez votre entreprise — tout cela depuis la paume de votre main. Gustasi POS Mobile aide les restaurateurs à rationaliser les opérations et à augmenter l'efficacité grâce à notre solution mobile intuitive.", hi: "अपने स्मार्टफोन को एक शक्तिशाली पॉइंट ऑफ़ सेल (POS) सिस्टम में बदलें। ऑर्डर प्रबंधित करें, इन्वेंट्री ट्रैक करें, और अपने व्यवसाय को बढ़ाएं—सिर्फ अपने हाथ की हथेली से। Gustasi POS Mobile रेस्तरां मालिकों को हमारे सहज मोबाइल समाधान के साथ संचालन को सुव्यवस्थित करने और दक्षता बढ़ाने में मदद करता है।", bn: "আপনার স্মার্টফোনকে একটি শক্তিশালী পয়েন্ট অফ সেল (POS) সিস্টেমে রূপান্তর করুন। অর্ডার পরিচালনা করুন, ইনভেন্টরি ট্র্যাক করুন এবং আপনার ব্যবসা বাড়ান—সবই আপনার হাতের তালু থেকে। Gustasi POS Mobile রেস্টুরেন্ট মালিকদের আমাদের স্বজ্ঞাত মোবাইল সমাধানের মাধ্যমে অপারেশন সহজতর করতে এবং দক্ষতা বাড়াতে সহায়তা করে।", ta: "உங்கள் ஸ்மார்ட்போனை ஒரு சக்திவாய்ந்த பாயிண்ட் ஆஃப் சேல் (POS) அமைப்பாக மாற்றுங்கள். ஆர்டர்களை நிர்வகிக்கவும், சரக்குகளை கண்காணிக்கவும், உங்கள் வணிகத்தை வளர்க்கவும்—அனைத்தையும் உங்கள் கையிலிருந்து செய்யுங்கள். Gustasi POS Mobile, உணவக உரிமையாளர்கள் செயல்பாடுகளை எளிதாக்கவும், எங்கள் உள்ளுணர்வு மொபைல் தீர்வுடன் செயல்திறனை அதிகரிக்கவும் உதவுகிறது." },
  "pos.feature.swiggyZomato": { en: "Accept Swiggy & Zomato Orders from Mobile", fr: "Acceptez les commandes Swiggy & Zomato depuis le mobile", hi: "मोबाइल से स्विग्गी और जोमैटो ऑर्डर स्वीकार करें", bn: "মোবাইল থেকে সুইগি ও জমাটো অর্ডার গ্রহণ করুন", ta: "மொபைலில் இருந்து ஸ்விகி மற்றும் ஸோமாடோ ஆர்டர்களை ஏற்கவும்" },
  "pos.feature.gustasiOrders": { en: "Receive Online Orders via Gustasi", fr: "Recevez des commandes en ligne via Gustasi", hi: "गुस्तासी के माध्यम से ऑनलाइन ऑर्डर प्राप्त करें", bn: "গুস্তাসি-এর মাধ্যমে অনলাইন অর্ডার গ্রহণ করুন", ta: "Gustasi மூலம் ஆன்லைன் ஆர்டர்களை பெறவும்" },
  "pos.feature.bluetoothPrinter": { en: "Print Bills & KOTs via Bluetooth Printer", fr: "Imprimez les factures et KOT via une imprimante Bluetooth", hi: "ब्लूटूथ प्रिंटर से बिल और KOT प्रिंट करें", bn: "ব্লুটুথ প্রিন্টার দিয়ে বিল ও KOT প্রিন্ট করুন", ta: "ப்ளூடூத் பிரிண்டரில் பில்கள் மற்றும் KOT களை அச்சிடவும்" },
  "pos.feature.menuBilling": { en: "Manage Menu, Orders & Billing — Anytime, Anywhere", fr: "Gérez le menu, les commandes et la facturation — à tout moment, n'importe où", hi: "मेनू, ऑर्डर और बिलिंग प्रबंधित करें — कभी भी, कहीं भी", bn: "মেনু, অর্ডার ও বিলিং পরিচালনা করুন — যেকোনো সময়, যেকোনো জায়গায়", ta: "மெனு, ஆர்டர் மற்றும் பில்லிங்கை நிர்வகிக்கவும் — எப்போது வேண்டுமானாலும், எங்கே வேண்டுமானாலும்" },

  // WhatsApp Flow
  "wa.title": { en: "Digital Ordering System", fr: "Système de commande numérique", hi: "डिजिटल ऑर्डरिंग सिस्टम", bn: "ডিজিটাল অর্ডারিং সিস্টেম", ta: "டிஜிட்டல் ஆர்டரிங் சிஸ்டம்" },
  "wa.subtitle": { en: "For Restaurant Owners", fr: "Pour les restaurateurs", hi: "रेस्तरां मालिकों के लिए", bn: "রেস্টুরেন্ট মালিকদের জন্য", ta: "உணவக உரிமையாளர்களுக்காக" },
  "wa.scan": { en: "Customer Scans QR", fr: "Le client scanne le QR", hi: "ग्राहक QR स्कैन करता है", bn: "গ্রাহক QR স্ক্যান করেন", ta: "வாடிக்கையாளர் QR ஐ ஸ்கேன் செய்கிறார்" },
  "wa.scanDesc": { en: "QR code at table or takeaway", fr: "QR code à la table ou à emporter", hi: "टेबल या टेकअवे पर QR कोड", bn: "টেবিল বা টেকঅ্যাওয়েতে QR কোড", ta: "மேசை அல்லது எடுத்துச் செல்ல QR குறியீடு" },
  "wa.menu": { en: "Menu Sent via WhatsApp", fr: "Menu envoyé via WhatsApp", hi: "WhatsApp के माध्यम से मेनू भेजा गया", bn: "WhatsApp এর মাধ্যমে মেনু পাঠানো হয়েছে", ta: "WhatsApp மூலம் மெனு அனுப்பப்பட்டது" },
  "wa.menuDesc": { en: "Interactive menu in chat", fr: "Menu interactif dans le chat", hi: "चैट में इंटरएक्टिव मेनू", bn: "চ্যাটে ইন্টারেক্টিভ মেনু", ta: "அரட்டையில் இடைமுக மெனு" },
  "wa.order": { en: "Order Placed", fr: "Commande passée", hi: "ऑर्डर दिया गया", bn: "অর্ডার দেওয়া হয়েছে", ta: "ஆர்டர் வைக்கப்பட்டது" },
  "wa.orderDesc": { en: "Customer completes order", fr: "Le client termine la commande", hi: "ग्राहक ने ऑर्डर पूरा किया", bn: "গ্রাহক অর্ডার সম্পন্ন করেছেন", ta: "வாடிக்கையாளர் ஆர்டரை முடிக்கிறார்" },
  "wa.process": { en: "Order Processing", fr: "Traitement de la commande", hi: "ऑर्डर प्रोसेसिंग", bn: "অর্ডার প্রক্রিয়াকরণ", ta: "ஆர்டர் செயலாக்கம்" },
  "wa.processDesc": { en: "Kitchen receives order", fr: "La cuisine reçoit la commande", hi: "रसोई को ऑर्डर प्राप्त होता है", bn: "রান্নাঘর অর্ডার পায়", ta: "சமையலறை ஆர்டரை பெறுகிறது" },
  "wa.customer": { en: "Customer Data Captured", fr: "Données client capturées", hi: "ग्राहक डेटा कैप्चर किया गया", bn: "গ্রাহকের তথ্য সংগ্রহ করা হয়েছে", ta: "வாடிக்கையாளர் தரவு பிடிக்கப்பட்டது" },
  "wa.customerDesc": { en: "For future engagement", fr: "Pour un engagement futur", hi: "भविष्य की सहभागिता के लिए", bn: "ভবিষ্যতের সম্পৃক্ততার জন্য", ta: "எதிர்கால ஈடுபாட்டிற்காக" },
  "wa.analytics": { en: "Business Insights", fr: "Aperçus commerciaux", hi: "व्यावसायिक अंतर्दृष्टि", bn: "ব্যবসায়িক অন্তর্দৃষ্টি", ta: "வணிக உள்ளடக்கங்கள்" },
  "wa.analyticsDesc": { en: "Track customer behavior", fr: "Suivre le comportement des clients", hi: "ग्राहक व्यवहार को ट्रैक करें", bn: "গ্রাহকের আচরণ ট্র্যাক করুন", ta: "வாடிக்கையாளர் நடத்தை கண்காணிக்கவும்" },
  "wa.scanHeadline": { en: "Scan to Start", fr: "Scannez pour commencer", hi: "शुरू करने के लिए स्कैन करें", bn: "শুরু করতে স্ক্যান করুন", ta: "தொடங்க ஸ்கேன் செய்யவும்" },
  "wa.scanBody": { en: "Point your camera at the QR code to open our menu in WhatsApp", fr: "Pointez votre caméra sur le QR code pour ouvrir notre menu dans WhatsApp", hi: "WhatsApp में हमारा मेनू खोलने के लिए अपने कैमरे को QR कोड पर रखें", bn: "WhatsApp-এ আমাদের মেনু খুলতে ক্যামেরা QR কোডে নির্দেশ করুন", ta: "WhatsApp இல் எங்கள் மெனுவைத் திறக்க உங்கள் கேமராவை QR குறியீட்டில் நோக்கவும்" },
  "wa.previous": { en: "Previous", fr: "Précédent", hi: "पिछला", bn: "পূর্ববর্তী", ta: "முந்தையது" },
  "wa.next": { en: "Next", fr: "Suivant", hi: "अगला", bn: "পরবর্তী", ta: "அடுத்தது" },
  "wa.finish": { en: "Finish", fr: "Terminer", hi: "समाप्त करें", bn: "শেষ", ta: "முடிக்கவும்" },
  "wa.exportReport": { en: "Export Report", fr: "Exporter le rapport", hi: "रिपोर्ट निर्यात करें", bn: "রিপোর্ট রপ্তানি করুন", ta: "அறிக்கையை ஏற்றுமதி செய்யவும்" },
  "wa.viewDetailedAnalytics": { en: "View Detailed Analytics", fr: "Voir les analyses détaillées", hi: "विस्तृत विश्लेषण देखें", bn: "বিস্তারিত বিশ্লেষণ দেখুন", ta: "விரிவான பகுப்பாய்வைக் காண்க" },
};

export type SupportedLanguage = 'en' | 'fr' | 'hi' | 'bn' | 'ta';
let currentLanguage: SupportedLanguage = 'en';

// Add default translations for the contact and demo pages
translations['contact.pageTitle'] = {
  en: "Contact Us | Gustasi POS",
  fr: "Contactez-nous | Gustasi POS",
  hi: "हमसे संपर्क करें | गुस्तासी पीओएस",
  bn: "আমাদের সাথে যোগাযোগ করুন | গুস্তাসি পিওএস",
  ta: "எங்களைத் தொடர்பு கொள்ள | கஸ்தாசி பிஓஎஸ்"
};

translations['demo.pageTitle'] = {
  en: "Schedule a Demo | Gustasi POS",
  fr: "Planifier une démo | Gustasi POS",
  hi: "डेमो शेड्यूल करें | गुस्तासी पीओएस",
  bn: "একটি ডেমো শিডিউল করুন | গুস্তাসি পিওএস",
  ta: "ஒரு டெமோவை திட்டமிடவும் | கஸ்தாசி பிஓஎஸ்"
};

translations['contact.hero.title'] = {
  en: "Let's Talk – We're Here to Help",
  fr: "Parlons – Nous sommes là pour vous aider",
  hi: "बात करते हैं – हम यहाँ आपकी मदद के लिए हैं",
  bn: "চলুন কথা বলি – আমরা আপনাকে সাহায্য করতে এখানে আছি",
  ta: "பேசலாம் – உங்களுக்கு உதவ நாங்கள் இங்கே இருக்கிறோம்"
};

translations['contact.hero.subtitle'] = {
  en: "Have questions? Send us a message and we'll get back to you soon.",
  fr: "Des questions ? Envoyez-nous un message et nous vous répondrons dès que possible.",
  hi: "प्रश्न हैं? हमें एक संदेश भेजें और हम आपको जल्द ही जवाब देंगे।",
  bn: "প্রশ্ন আছে? আমাদের একটি বার্তা পাঠান এবং আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
  ta: "கேள்விகள் உள்ளதா? எங்களுக்கு ஒரு செய்தியை அனுப்பவும், நாங்கள் உங்களுக்கு விரைவில் பதிலளிப்போம்."
};

translations['demo.hero.title'] = {
  en: "Schedule a Live Demo",
  fr: "Planifier une démonstration en direct",
  hi: "लाइव डेमो शेड्यूल करें",
  bn: "একটি লাইভ ডেমো শিডিউল করুন",
  ta: "நேரடி டெமோவை திட்டமிடவும்"
};

translations['demo.hero.subtitle'] = {
  en: "Book a personalized demo to see how Gustasi can transform your restaurant operations.",
  fr: "Réservez une démonstration personnalisée pour voir comment Gustasi peut transformer les opérations de votre restaurant.",
  hi: "एक व्यक्तिगत डेमो बुक करें और देखें कि गुस्तासी आपके रेस्तरां के संचालन को कैसे बदल सकता है।",
  bn: "একটি ব্যক্তিগতকৃত ডেমো বুক করুন এবং দেখুন কিভাবে গুস্তাসি আপনার রেস্তোরাঁর অপারেশনগুলিকে রূপান্তর করতে পারে।",
  ta: "உங்கள் உணவக செயல்பாடுகளை கஸ்தாசி எவ்வாறு மாற்ற முடியும் என்பதைக் காண தனிப்பயனாக்கப்பட்ட டெமோவைப் புத்தகம் செய்யவும்."
};

// Form field translations
translations['form.name'] = {
  en: "Name",
  fr: "Nom",
  hi: "नाम",
  bn: "নাম",
  ta: "பெயர்"
};

translations['form.email'] = {
  en: "Email",
  fr: "E-mail",
  hi: "ईमेल",
  bn: "ইমেইল",
  ta: "மின்னஞ்சல்"
};

translations['form.phone'] = {
  en: "Phone",
  fr: "Téléphone",
  hi: "फ़ोन",
  bn: "ফোন",
  ta: "தொலைபேசி"
};

translations['form.interest'] = {
  en: "I'm interested in...",
  fr: "Je suis intéressé par...",
  hi: "मुझे इसमें दिलचस्पी है...",
  bn: "আমি আগ্রহী...",
  ta: "நான் ஆர்வமாக உள்ளேன்..."
};

translations['form.message'] = {
  en: "Message / Requirements",
  fr: "Message / Exigences",
  hi: "संदेश / आवश्यकताएं",
  bn: "বার্তা / প্রয়োজনীয়তা",
  ta: "செய்தி / தேவைகள்"
};

translations['form.sendMessage'] = {
  en: "Send Message",
  fr: "Envoyer le message",
  hi: "संदेश भेजें",
  bn: "বার্তা পাঠান",
  ta: "செய்தியை அனுப்பவும்"
};

translations['form.fullName'] = {
  en: "Full Name",
  fr: "Nom complet",
  hi: "पूरा नाम",
  bn: "পুরো নাম",
  ta: "முழு பெயர்"
};

translations['form.preferredTime'] = {
  en: "Preferred Time",
  fr: "Heure préférée",
  hi: "पसंदीदा समय",
  bn: "পছন্দের সময়",
  ta: "விருப்பமான நேரம்"
};

translations['form.selectDate'] = {
  en: "Select a Date",
  fr: "Sélectionner une date",
  hi: "एक तारीख चुनें",
  bn: "একটি তারিখ নির্বাচন করুন",
  ta: "ஒரு தேதியைத் தேர்ந்தெடுக்கவும்"
};

translations['form.additionalNotes'] = {
  en: "Additional Notes",
  fr: "Notes supplémentaires",
  hi: "अतिरिक्त नोट्स",
  bn: "অতিরিক্ত নোট",
  ta: "கூடுதல் குறிப்புகள்"
};

translations['form.confirmDemo'] = {
  en: "Confirm Demo Booking",
  fr: "Confirmer la réservation de démo",
  hi: "डेमो बुकिंग की पुष्टि करें",
  bn: "ডেমো বুকিং নিশ্চিত করুন",
  ta: "டெமோ பதிவை உறுதிப்படுத்தவும்"
};

// Form field placeholders and labels
translations['form.yourName'] = {
  en: "Your name",
  fr: "Votre nom",
  hi: "आपका नाम",
  bn: "আপনার নাম",
  ta: "உங்கள் பெயர்"
};

translations['form.yourEmail'] = {
  en: "your.email@example.com",
  fr: "votre.email@exemple.com",
  hi: "आपका.ईमेल@उदाहरण.कॉम",
  bn: "আপনার.ইমেইল@উদাহরণ.কম",
  ta: "உங்கள்.மின்னஞ்சல்@எடுத்துக்காட்டு.காம்"
};

translations['form.phonePlaceholder'] = {
  en: "+1 (___) ___-____",
  fr: "+33 _ __ __ __ __",
  hi: "+91 ________",
  bn: "+88 ________",
  ta: "+91 ________"
};

translations['form.tellUsMore'] = {
  en: "Tell us how we can help you...",
  fr: "Dites-nous comment nous pouvons vous aider...",
  hi: "हमें बताएं कि हम आपकी कैसे मदद कर सकते हैं...",
  bn: "আমাদের বলুন আমরা আপনাকে কীভাবে সাহায্য করতে পারি...",
  ta: "உங்களுக்கு எப்படி உதவ முடியும் என்று எங்களிடம் சொல்லுங்கள்..."
};

translations['form.selectTime'] = {
  en: "Select a time",
  fr: "Sélectionnez une heure",
  hi: "समय चुनें",
  bn: "একটি সময় নির্বাচন করুন",
  ta: "ஒரு நேரத்தைத் தேர்ந்தெடுக்கவும்"
};

translations['form.pickDate'] = {
  en: "Pick a date",
  fr: "Choisir une date",
  hi: "एक तिथि चुनें",
  bn: "একটি তারিখ নির্বাচন করুন",
  ta: "ஒரு தேதியைத் தேர்ந்தெடுக்கவும்"
};

translations['form.demoFocus'] = {
  en: "Tell us what you'd like to focus on during the demo...",
  fr: "Dites-nous sur quoi vous souhaitez vous concentrer pendant la démo...",
  hi: "हमें बताएं कि आप डेमो के दौरान किस पर ध्यान केंद्रित करना चाहेंगे...",
  bn: "আমাদের বলুন আপনি ডেমোর সময় কোন বিষয়ে ফোকাস করতে চান...",
  ta: "டெமோவின் போது நீங்கள் எதில் கவனம் செலுத்த விரும்புகிறீர்கள் என்று எங்களிடம் சொல்லுங்கள்..."
};

// Messages
translations['messages.thankYou'] = {
  en: "Thank You!",
  fr: "Merci !",
  hi: "धन्यवाद!",
  bn: "ধন্যবাদ!",
  ta: "நன்றி!"
};

translations['messages.messageReceived'] = {
  en: "We've received your message and will get back to you soon.",
  fr: "Nous avons bien reçu votre message et vous répondrons bientôt.",
  hi: "हमें आपका संदेश मिल गया है और हम जल्द ही आपको जवाब देंगे।",
  bn: "আমরা আপনার বার্তা পেয়েছি এবং শীঘ্রই আপনার সাথে যোগাযোগ করব।",
  ta: "உங்கள் செய்தியைப் பெற்றுள்ளோம், விரைவில் உங்களுடன் தொடர்பு கொள்கிறோம்."
};

translations['messages.demoBooked'] = {
  en: "Demo Booked Successfully!",
  fr: "Démo réservée avec succès !",
  hi: "डेमो सफलतापूर्वक बुक किया गया!",
  bn: "ডেমো সফলভাবে বুক করা হয়েছে!",
  ta: "டெமோ வெற்றிகரமாக பதிவு செய்யப்பட்டது!"
};

translations['messages.demoConfirmation'] = {
  en: "We've sent a confirmation to your email with the meeting details.",
  fr: "Nous avons envoyé une confirmation à votre adresse e-mail avec les détails de la réunion.",
  hi: "हमने मीटिंग के विवरण के साथ आपके ईमेल पर एक पुष्टिकरण भेज दिया है।",
  bn: "আমরা মিটিংয়ের বিবরণ সহ আপনার ইমেল ঠিকানায় একটি নিশ্চিতকরণ পাঠিয়েছি।",
  ta: "கூட்டத்தின் விவரங்களுடன் உங்கள் மின்னஞ்சலுக்கு ஒரு உறுதிப்படுத்தலை அனுப்பியுள்ளோம்."
};

// Actions
translations['actions.sendAnother'] = {
  en: "Send Another Message",
  fr: "Envoyer un autre message",
  hi: "एक और संदेश भेजें",
  bn: "আরেকটি বার্তা পাঠান",
  ta: "மற்றொரு செய்தியை அனுப்பவும்"
};

translations['actions.backToContact'] = {
  en: "Back to Contact",
  fr: "Retour au contact",
  hi: "संपर्क पर वापस जाएं",
  bn: "যোগাযোগে ফিরে যান",
  ta: "தொடர்புக்குத் திரும்பு"
};

// Tabs
translations['tabs.contactUs'] = {
  en: "Contact Us",
  fr: "Contactez-nous",
  hi: "हमसे संपर्क करें",
  bn: "আমাদের সাথে যোগাযোগ করুন",
  ta: "எங்களைத் தொடர்பு கொள்ள"
};

translations['tabs.bookDemo'] = {
  en: "Book Demo",
  fr: "Réserver une démo",
  hi: "डेमो बुक करें",
  bn: "ডেমো বুক করুন",
  ta: "டெமோவை பதிவு செய்க"
};

// Options
translations['options.posSystem'] = {
  en: "POS System",
  fr: "Système de caisse",
  hi: "पीओएस सिस्टम",
  bn: "পিওএস সিস্টেম",
  ta: "பிஓஎஸ் அமைப்பு"
};

translations['options.onlineOrders'] = {
  en: "Online Orders",
  fr: "Commandes en ligne",
  hi: "ऑनलाइन ऑर्डर",
  bn: "অনলাইন অর্ডার",
  ta: "ஆன்லைன் ஆர்டர்கள்"
};

translations['options.inventory'] = {
  en: "Inventory Management",
  fr: "Gestion des stocks",
  hi: "इन्वेंटरी प्रबंधन",
  bn: "ইনভেন্টরি ব্যবস্থাপনা",
  ta: "இருப்பு மேலாண்மை"
};

translations['options.feedback'] = {
  en: "Feedback",
  fr: "Retour d'information",
  hi: "प्रतिक्रिया",
  bn: "মতামত",
  ta: "கருத்து"
};

translations['options.allServices'] = {
  en: "All Services",
  fr: "Tous les services",
  hi: "सभी सेवाएं",
  bn: "সমস্ত পরিষেবা",
  ta: "அனைத்து சேவைகளும்"
};

// Time Slots
translations['timeSlots.nineAM'] = { en: "09:00 AM", fr: "09:00", hi: "09:00 पूर्वाह्न", bn: "09:00 AM", ta: "காலை 9:00" };
translations['timeSlots.tenAM'] = { en: "10:00 AM", fr: "10:00", hi: "10:00 पूर्वाह्न", bn: "10:00 AM", ta: "காலை 10:00" };
translations['timeSlots.elevenAM'] = { en: "11:00 AM", fr: "11:00", hi: "11:00 पूर्वाह्न", bn: "11:00 AM", ta: "காலை 11:00" };
translations['timeSlots.twelvePM'] = { en: "12:00 PM", fr: "12:00", hi: "12:00 अपराह्न", bn: "12:00 PM", ta: "மதியம் 12:00" };
translations['timeSlots.onePM'] = { en: "01:00 PM", fr: "13:00", hi: "01:00 अपराह्न", bn: "01:00 PM", ta: "மாலை 1:00" };
translations['timeSlots.twoPM'] = { en: "02:00 PM", fr: "14:00", hi: "02:00 अपराह्न", bn: "02:00 PM", ta: "மாலை 2:00" };
translations['timeSlots.threePM'] = { en: "03:00 PM", fr: "15:00", hi: "03:00 अपराह्न", bn: "03:00 PM", ta: "மாலை 3:00" };
translations['timeSlots.fourPM'] = { en: "04:00 PM", fr: "16:00", hi: "04:00 अपराह्न", bn: "04:00 PM", ta: "மாலை 4:00" };

export function t(key: string): string {
  const translation = translations[key]?.[currentLanguage];
  if (Array.isArray(translation)) {
    return translation[0]; // Return first item if it's an array
  }
  return translation || translations[key]?.en as string || key;
}

export const tArray = (key: string): string[] => {
  const translation = translations[key]?.[currentLanguage];
  if (Array.isArray(translation)) {
    return translation;
  }
  const fallback = translations[key]?.en;
  return [
    typeof fallback === 'string' ? fallback : 
    Array.isArray(fallback) ? fallback[0] : 
    key
  ];
};

export const setLanguage = (lang: SupportedLanguage) => {
  if (['en', 'fr', 'hi', 'bn', 'ta'].includes(lang)) {
    currentLanguage = lang as SupportedLanguage;
    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
    // Trigger a re-render by dispatching a custom event
    window.dispatchEvent(new CustomEvent('languageChanged'));
  } else {
    console.warn(`Unsupported language: ${lang}. Falling back to English.`);
    currentLanguage = 'en';
  }
};

export const getCurrentLanguage = () => currentLanguage;

export const useLanguage = () => {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    // Initialize from localStorage if available, otherwise use browser language or default to 'en'
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferredLanguage');
      const browserLang = navigator.language.split('-')[0];
      return (savedLang || (['en', 'fr', 'hi', 'bn', 'ta'].includes(browserLang) ? browserLang : 'en')) as SupportedLanguage;
    }
    return 'en';
  });

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(getCurrentLanguage());
    };

    // Set initial language
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
      setLanguage(savedLang as SupportedLanguage);
    }

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  return currentLang;
};
