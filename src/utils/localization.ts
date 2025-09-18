import React, { useState, useEffect } from 'react';

export interface Translations {
  [key: string]: {
    en: string | string[];
    fr: string | string[];
    hi?: string | string[];
    bn?: string | string[];
    ta?: string | string[];
    te?: string | string[];
  };
}

// Base translations object
export const translations: Translations = {
  // Hero Section
  // Navbar
  "rolling.discoverAmazing": {
    en: "Discover Amazing",
    fr: "Découvrez Incroyable",
    hi: "शानदार खोजें",
    bn: "অবিশ্বাস্য আবিষ্কার করুন",
    ta: "அற்புதங்களை கண்டறியவும்",
    te: "అద్భుతమైనవి కనుగొనండి"
  },
  "rolling.nearYou": {
    en: "Near You",
    fr: "Près de chez vous",
    hi: "आपके पास",
    bn: "আপনার কাছে",
    ta: "உங்களுக்கு அருகில்",
    te: "మీ దగ్గర"
  },
  "rolling.description": {
    en: "Find the best places to eat, drink, and relax around you.",
    fr: "Trouvez les meilleurs endroits pour manger, boire et vous détendre autour de vous.",
    hi: "अपने आस-पास खाने, पीने और आराम करने के लिए सबसे अच्छी जगहें खोजें।",
    bn: "আপনার আশেপাশে খাওয়া, পান এবং বিশ্রাম করার জন্য সেরা স্থানগুলি খুঁজুন।",
    ta: "உங்கள் அருகில் சாப்பிட, குடிக்க மற்றும் ஓய்வெடுக்க சிறந்த இடங்களை கண்டறியவும்.",
    te: "మీ చుట్టూ తినడానికి, త్రాగడానికి మరియు విశ్రాంతి తీసుకోవడానికి ఉత్తమ ప్రదేశాలను కనుగొనండి."
  },

  // Success Stories
  "success.growth": {
    en: "Increase in monthly revenue",
    fr: "Augmentation du revenu mensuel",
    hi: "मासिक राजस्व में वृद्धि",
    bn: "মাসিক আয় বৃদ্ধি",
    ta: "மாதாந்திர வருவாய் அதிகரிப்பு",
    te: "నెలవారీ ఆదాయంలో పెరుగుదల"
  },
  "success.time": {
    en: "Save 800 hrs/year on accounting",
    fr: "Économisez 800h/an sur la comptabilité",
    hi: "लेखांकन पर प्रति वर्ष 800 घंटे बचाएं",
    bn: "হিসাবরক্ষণে প্রতি বছর ৮০০ ঘন্টা সাশ্রয় করুন",
    ta: "கணக்கில் ஆண்டுக்கு 800 மணி நேரம் சேமிக்கவும்",
    te: "అకౌంటింగ్‌లో సంవత్సరానికి 800 గంటలు ఆదా చేయండి"
  },
  "success.reports": {
    en: "Track 25+ real-time reports",
    fr: "Suivez 25+ rapports en temps réel",
    hi: "25+ रीयल-टाइम रिपोर्ट्स को ट्रैक करें",
    bn: "২৫+ রিয়েল-টাইম রিপোর্ট ট্র্যাক করুন",
    ta: "25+ நேரடி அறிக்கைகளை கண்காணிக்கவும்",
    te: "25+ రియల్-టైమ్ నివేదికలను ట్రాక్ చేయండి"
  },
  // Success Stories - Company Names
  "success.company.restaurantB": {
    en: "Restaurant B",
    fr: "Restaurant B",
    hi: "रेस्टोरेंट B",
    bn: "রেস্টুরেন্ট B",
    ta: "உணவகம் B",
    te: "రెస్టారెంట్ B"
  },
  "success.company.cafeCentral": {
    en: "Cafe Central",
    fr: "Café Central",
    hi: "कैफे सेंट्रल",
    bn: "ক্যাফে সেন্ট্রাল",
    ta: "கஃபே சென்ட்ரல்",
    te: "కెఫే సెంట్రల్"
  },
  "success.company.hotelPlaza": {
    en: "Hotel Plaza",
    fr: "Hôtel Plaza",
    hi: "होटल प्लाज़ा",
    bn: "হোটেল প্লাজা",
    ta: "ஹோட்டல் பிளாசா",
    te: "హోటల్ ప్లాజా"
  },
  "rolling.venuePlural": {
    en: "Venues",
    fr: "Lieux",
    hi: "स्थान",
    bn: "ভেন্যু",
    ta: "இடங்கள்",
    te: "వేదికలు"
  },
  "rolling.users": {
    en: "Users",
    fr: "Utilisateurs",
    hi: "उपयोगकर्ता",
    bn: "ব্যবহারকারী",
    ta: "பயனர்கள்",
    te: "వినియోగదారులు"
  },
  "rolling.rating": {
    en: "Rating",
    fr: "Note",
    hi: "रेटिंग",
    bn: "রেটিং",
    ta: "மதிப்பீடு",
    te: "రేటింగ్"
  },
  "rolling.topRated": {
    en: "Top Rated",
    fr: "Les mieux notés",
    hi: "शीर्ष रेटेड",
    bn: "শীর্ষ রেটেড",
    ta: "சிறந்த மதிப்பீடு",
    te: "టాప్ రేటెడ్"
  },
  "rolling.openNow": {
    en: "Open Now",
    fr: "Ouvert maintenant",
    hi: "अभी खुला है",
    bn: "এখন খোলা",
    ta: "இப்போது திறந்துள்ளது",
    te: "ఇప్పుడు తెరవండి"
  },
  "nav.login": { en: "Login", fr: "Connexion", hi: "लॉगिन", bn: "লগইন", ta: "உள்நுழை", te: "లాగిన్" },
  "nav.signup": { en: "Sign Up", fr: "S'inscrire", hi: "साइन अप", bn: "সাইন আপ", ta: "பதிவு", te: "నమోదు చేసుకోండి" },
  "nav.language": { en: "EN", fr: "FR", hi: "HI", bn: "BN", ta: "TA", te: "TE" },
  
  // Hero Section
  "hero.tagline": { en: "The Ultimate All-in-One Restaurant Solution", fr: "La Solution Restaurant Tout-en-Un Ultime", hi: "सर्वश्रेष्ठ ऑल-इन-वन रेस्टोरेंट समाधान", bn: "সেরা অল-ইন-ওয়ান রেস্টুরেন্ট সমাধান", ta: "சிறந்த அனைத்தும் ஒன்றாக உள்ள உணவகம் தீர்வு" },
  "hero.subtext": { en: "Automate orders, manage stock, and drive profits with one intelligent POS platform", fr: "Automatisez les commandes, gérez les stocks et augmentez les profits avec une plateforme POS intelligente", hi: "आदेशों को स्वचालित करें, स्टॉक प्रबंधित करें, और एक बुद्धिमान पीओएस प्लेटफ़ॉर्म के साथ लाभ बढ़ाएं", bn: "অর্ডার স্বয়ংক্রিয় করুন, স্টক পরিচালনা করুন এবং একটি বুদ্ধিমান POS প্ল্যাটফর্ম দিয়ে লাভ বাড়ান", ta: "ஆணைகளை தானாகச் செய்யுங்கள், பங்குகளை நிர்வகியுங்கள், மற்றும் ஒரு புத்திசாலி POS தளத்துடன் லாபங்களை அதிகரியுங்கள்", te: "ఆర్డర్లను ఆటోమేట్ చేయండి, స్టాక్ నిర్వహించండి మరియు ఒక తెలివైన POS ప్లాట్‌ఫారమ్‌తో లాభాలను పెంచుకోండి" },
  "hero.cta": { en: "Book a Demo", fr: "Réserver une Démo", hi: "डेमो बुक करें", bn: "একটি ডেমো বুক করুন", ta: "டெமோவை பதிவு செய்யவும்", te: "డెమో బుక్ చేయండి" },

  // Hero Section Additional
  "hero.mainTitle": { en: "The Ultimate", fr: "L'Ultime", hi: "सर्वश्रेष्ठ", bn: "সেরা", ta: "சிறந்த", te: "అత్యుత్తమ" },
  "hero.subTitle": { en: "Restaurant Solution", fr: "Solution Restaurant", hi: "रेस्टोरेंट समाधान", bn: "রেস্টুরেন্ট সমাধান", ta: "உணவகம் தீர்வு", te: "రెస్టారెంట్ పరిష్కారం" },
  "hero.description": { 
    en: "Transform your restaurant with intelligent automation, real-time analytics, and seamless multi-platform integration.", 
    fr: "Transformez votre restaurant avec l'automatisation intelligente, l'analyse en temps réel et l'intégration transparente multi-plateformes.", 
    hi: "अपने रेस्तरां को बुद्धिमान स्वचालन, रीयल-टाइम एनालिटिक्स और निर्बाध मल्टी-प्लेटफॉर्म एकीकरण के साथ बदलें।", 
    bn: "আপনার রেস্টুরেন্টকে বুদ্ধিমান অটোমেশন, রিয়েল-টাইম বিশ্লেষণ এবং নির্বিঘ্ন মাল্টি-প্ল্যাটফর্ম ইন্টিগ্রেশনের সাথে রূপান্তর করুন।", 
    ta: "உங்கள் உணவகத்தை புத்திசாலி தானியங்கி, நேரடி பகுப்பாய்வு மற்றும் தடையற்ற பல தள ஒருங்கிணைப்புடன் மாற்றுங்கள்.",
    te: "మీ రెస్టారెంట్‌ను ఇంటెలిజెంట్ ఆటోమేషన్, రియల్-టైమ్ అనలిటిక్స్ మరియు సీమ్‌లెస్ మల్టీ-ప్లాట్‌ఫారమ్ ఇంటిగ్రేషన్‌తో రూపాంతరం చెందండి."
  },
  "hero.cta": { 
    en: "Schedule a Demo", 
    fr: "Planifier une démo", 
    hi: "डेमो शेड्यूल करें", 
    bn: "ডেমো শিডিউল করুন", 
    ta: "டெமோவை திட்டமிடவும்", 
    te: "డెమోని షెడ్యూల్ చేయండి" 
  },
  "hero.orderGrowth": { en: "Order Growth", fr: "Croissance des Commandes", hi: "आदेश वृद्धि", bn: "অর্ডার বৃদ্ধি", ta: "ஆணை வளர்ச்சி", te: "ఆర్డర్ వృద్ధి" },
  "hero.fraudReduction": { en: "Fraud Reduction", fr: "Réduction de la Fraude", hi: "धोखाधड़ी में कमी", bn: "প্রতারণা হ্রাস", ta: "மோசடி குறைப்பு", te: "మోసం తగ్గింపు" },
  "hero.restaurants": { en: "Restaurants", fr: "Restaurants", hi: "रेस्टोरेंट्स", bn: "রেস্টুরেন্ট", ta: "உணவகங்கள்", te: "రెస్టారెంట్లు" },
  "hero.rating": { en: "Rating", fr: "Note", hi: "रेटिंग", bn: "রেটিং", ta: "மதிப்பீடு", te: "రేటింగ్" },
  "hero.ratingValue": { en: "4.9★", fr: "4,9★", hi: "४.९★", bn: "৪.৯★", ta: "௪.௯★", te: "౪.౯★" },
  "hero.orderGrowthValue": { en: "+35%", fr: "+35%", hi: "+३५%", bn: "+৩৫%", ta: "+௩௫%", te: "+౩౫%" },
  "hero.fraudReductionValue": { en: "25%", fr: "25%", hi: "२५%", bn: "২৫%", ta: "௨௫%", te: "౨౫%" },
  "hero.restaurantsValue": { en: "50K+", fr: "50K+", hi: "५०K+", bn: "৫০K+", ta: "௫0K+", te: "50K+" },
  "pos.nowAvailable": { en: "Now Available", fr: "Disponible Maintenant", hi: "अभी उपलब्ध", bn: "এখনই উপলব্ধ", ta: "இப்போது கிடைக்கிறது", te: "ఇప్పుడు అందుబాటులో ఉంది" },
  "pos.headline.main": { en: "Mobile POS", fr: "Caisse Mobile", hi: "मोबाइल पीओएस", bn: "মোবাইল পিওএস", ta: "மொபைல் POS", te: "మొబైల్ POS" },
  "pos.headline.sub": { en: "for Modern Restaurants", fr: "pour Restaurants Modernes", hi: "आधुनिक रेस्तरां के लिए", bn: "আধুনিক রেস্তোঁরাগুলির জন্য", ta: "நவீன உணவகங்களுக்கு", te: "ఆధునిక రెస్టారెంట్ల కోసం" },
  "pos.body": { en: "Transform your restaurant operations with our mobile POS solution. Take orders tableside, manage inventory, and process payments - all from your smartphone or tablet.", fr: "Transformez les opérations de votre restaurant avec notre solution de caisse mobile. Prenez les commandes à table, gérez les stocks et traitez les paiements - le tout depuis votre smartphone ou tablette.", hi: "हमारे मोबाइल पीओएस समाधान के साथ अपने रेस्तरां के संचालन को बदलें। टेबल साइड ऑर्डर लें, इन्वेंट्री प्रबंधित करें, और भुगतान संसाधित करें - सभी अपने स्मार्टफोन या टैबलेट से।", bn: "আমাদের মোবাইল পিওএস সমাধান দিয়ে আপনার রেস্তোরাঁর অপারেশন রূপান্তর করুন। টেবিলে অর্ডার নিন, ইনভেন্টরি পরিচালনা করুন এবং অর্থপ্রদান প্রক্রিয়া করুন - সবই আপনার স্মার্টফোন বা ট্যাবলেট থেকে।", ta: "எங்கள் மொபைல் POS தீர்வுடன் உங்கள் உணவக செயல்பாடுகளை மாற்றவும். டேபிள் சைட் ஆர்டர்களை எடுத்து, இன்வென்டரியை நிர்வகித்து, கட்டணங்களை செயல்படுத்தவும் - அனைத்தும் உங்கள் ஸ்மார்ட்போன் அல்லது டேப்லெட்டில் இருந்து.", te: "మా మొబైల్ POS పరిష్కారంతో మీ రెస్టారెంట్ ఆపరేషన్లను రూపాంతరపరచండి. టేబుల్ సైడ్ ఆర్డర్లు తీసుకోండి, ఇన్వెంటరీని నిర్వహించండి మరియు చెల్లింపులను ప్రాసెస్ చేయండి - అన్నీ మీ స్మార్ట్ఫోన్ లేదా టాబ్లెట్ నుండి." },
  "pos.noHardwareRequired": {
    en: "No additional hardware required",
    fr: "Aucun matériel supplémentaire requis",
    hi: "कोई अतिरिक्त हार्डवेयर आवश्यक नहीं",
    bn: "কোনও অতিরিক্ত হার্ডওয়্যার প্রয়োজন নেই",
    ta: "கூடுதல் வன்பொருள் தேவையில்லை",
    te: "అదనపు హార్డ్‌వేర్ అవసరం లేదు"
  },
  "pos.feature.swiggyZomato": {
    en: "Swiggy & Zomato orders directly in your POS",
    fr: "Commandes Swiggy et Zomato directement dans votre caisse",
    hi: "स्विगी और ज़ोमैटो ऑर्डर सीधे आपके पीओएस में",
    bn: "সুইগি এবং জোমাটো অর্ডার সরাসরি আপনার পিওএসে",
    ta: "ஸ்விகி & ஜோமாட்டோ ஆர்டர்கள் நேரடியாக உங்கள் POS இல்",
    te: "స్విగ్గీ & జోమాటో ఆర్డర్లు నేరుగా మీ POSలో"
  },
  "pos.feature.gustasiOrders": {
    en: "Gustasi orders sync in real-time",
    fr: "Commandes Gustasi synchronisées en temps réel",
    hi: "गुस्तासी ऑर्डर रीयल-टाइम में सिंक होते हैं",
    bn: "গুস্তাসি অর্ডার রিয়েল-টাইমে সিঙ্ক হয়",
    ta: "கஸ்தாசி ஆணைகள் நேரடி நேரத்தில் ஒத்திசைக்கப்படுகின்றன",
    te: "గస్తాసీ ఆర్డర్లు రియల్-టైమ్‌లో సింక్ అవుతాయి"
  },
  "pos.feature.bluetoothPrinter": {
    en: "Bluetooth printer support for kitchen tickets",
    fr: "Support d'imprimante Bluetooth pour les tickets de cuisine",
    hi: "किचन टिकटों के लिए ब्लूटूथ प्रिंटर सपोर्ट",
    bn: "রান্নাঘরের টিকিটের জন্য ব্লুটুথ প্রিন্টার সমর্থন",
    ta: "சமையலறை டிக்கெட்டுகளுக்கான புளூடூத் பிரிண்டர் ஆதரவு",
    te: "కిచన్ టిక్కెట్ల కోసం బ్లూటూత్ ప్రింటర్ మద్దతు"
  },
  "pos.feature.menuBilling": {
    en: "Menu & billing at your fingertips",
    fr: "Menu et facturation à portée de main",
    hi: "आपकी उंगलियों पर मेनू और बिलिंग",
    bn: "আপনার আঙুলের ডগায় মেনু এবং বিলিং",
    ta: "உங்கள் விரல்நுனியில் மெனு & பில்லிங்",
    te: "మీ వేళ్లతో మెను & బిల్లింగ్"
  },

  // WhatsApp Flow
  'wa.scan': { en: 'Scan QR', fr: 'Scanner QR', hi: 'क्यूआर स्कैन करें', bn: 'QR স্ক্যান করুন', ta: 'QRஐ ஸ்கேன் செய்யவும்', te: 'QR స్కాన్ చేయండి' },
  'wa.scanDesc': { en: 'Customer scans QR code', fr: 'Le client scanne le code QR', hi: 'ग्राहक क्यूआर कोड स्कैन करता है', bn: 'গ্রাহক QR কোড স্ক্যান করে', ta: 'வாடிக்கையாளர் QR குறியீட்டை ஸ்கேன் செய்கிறார்', te: 'కస్టమర్ QR కోడ్ స్కాన్ చేస్తారు' },
  'wa.scanHeadline': { en: 'Scan the QR Code', fr: 'Scannez le code QR', hi: 'क्यूआर कोड स्कैन करें', bn: 'QR কোড স্ক্যান করুন', ta: 'QR குறியீட்டை ஸ்கேன் செய்யவும்', te: 'QR కోడ్ స్కాన్ చేయండి' },
  'wa.scanBody': { en: 'Point your camera at the QR code on your table to begin.', fr: 'Commencez en pointant votre appareil photo vers le code QR sur votre table.', hi: 'शुरू करने के लिए अपनी मेज पर क्यूआर कोड पर अपना कैमरा इंगित करें।', bn: 'শুরু করতে আপনার টেবিলের QR কোডে আপনার ক্যামেরা নির্দেশ করুন।', ta: 'தொடங்க, உங்கள் மேசையில் உள்ள QR குறியீட்டை உங்கள் கேமராவால் காட்டவும்.', te: 'ప్రారంభించడానికి మీ టేబుల్‌పై ఉన్న QR కోడ్‌పై మీ కెమెరాను పాయింట్ చేయండి.' },
  'wa.chat': { en: 'Chat on WhatsApp', fr: 'Discuter sur WhatsApp', hi: 'व्हाट्सएप पर चैट करें', bn: 'হোয়াটসঅ্যাপে চ্যাট করুন', ta: 'வாட்ஸ்அப்பில் அரட்டையடிக்கவும்', te: 'మమ్మల్ని సంప్రదించండి' },
  'wa.chatDesc': { en: 'Start conversation', fr: 'Démarrer la conversation', hi: 'बातचीत शुरू करें', bn: 'কথোপকথন শুরু করুন', ta: 'உரையாடலைத் தொடங்குங்கள்', te: 'సంభాషణ ప్రారంభించండి' },
  'wa.chatHeadline': { en: 'Connect on WhatsApp', fr: 'Connectez-vous sur WhatsApp', hi: 'व्हाट्सएप पर जुड़ें', bn: 'হোয়াটসঅ্যাপে সংযোগ করুন', ta: 'வாட்ஸ்அப்பில் இணையுங்கள்', te: 'వాట్సాప్‌లో కనెక్ట్ అవ్వండి' },
  'wa.chatBody': { en: 'Tap the button below to start a conversation with the restaurant.', fr: 'Appuyez sur le bouton ci-dessous pour démarrer une conversation avec le restaurant.', hi: 'रेस्टोरेंट के साथ बातचीत शुरू करने के लिए नीचे दिए गए बटन पर टैप करें।', bn: 'রেস্টুরেন্টের সাথে কথোপকথন শুরু করতে নীচের বোতামটি আলতো চাপুন।', ta: 'உணவகத்துடன் உரையாடலைத் தொடங்க கீழே உள்ள பொத்தானைத் தட்டவும்.', te: 'రెస్టారెంట్‌తో సంభాషణ ప్రారంభించడానికి దిగువ బటన్‌ను నొక్కండి.' },
  'wa.openWhatsApp': { en: 'Open WhatsApp', fr: 'Ouvrir WhatsApp', hi: 'व्हाट्सएप खोलें', bn: 'হোয়াটসঅ্যাপ খুলুন', ta: 'வாட்ஸ்அப்பைத் திறக்கவும்', te: 'వాట్సాప్ తెరవండి' },
  'wa.menu': { en: 'Browse Menu', fr: 'Parcourir le menu', hi: 'मेनू ब्राउज़ करें', bn: 'মেনু ব্রাউজ করুন', ta: 'மெனுவைப் பார்க்கவும்', te: 'మెనుని బ్రౌజ్ చేయండి' },
  'wa.menuDesc': { en: 'Explore food options', fr: 'Explorer les options de restauration', hi: 'भोजन के विकल्प देखें', bn: 'খাবারের বিকল্পগুলি অন্বেষণ করুন', ta: 'உணவு விருப்பங்களை ஆராயுங்கள்', te: 'ఆహార ఎంపికలను అన్వేషించండి' },
  'wa.menuHeadline': { en: 'Digital Menu', fr: 'Menu numérique', hi: 'डिजिटल मेनू', bn: 'ডিজিটাল মেনু', ta: 'டிஜிட்டல் மெனு', te: 'డిజిటల్ మెను' },
  'wa.menuCat.appetizers': { en: 'Appetizers', fr: 'Entrées', hi: 'ऐपिटाइज़र', bn: 'অ্যাপেটাইজার', ta: 'பலகாரங்கள்', te: 'అపెటిజర్లు' },
  'wa.menuCat.mainCourse': { en: 'Main Course', fr: 'Plat principal', hi: 'मुख्य पाठ्यक्रम', bn: 'প্রধান কোর্স', ta: 'முதன்மையான உணவு', te: 'ప్రధాన కోర్సు' },
  'wa.menuCat.desserts': { en: 'Desserts', fr: 'Desserts', hi: 'डेसर्ट', bn: 'ডেজার্ট', ta: 'இனிப்புகள்', te: 'డెజర్ట్‌లు' },
  'wa.menuCat.drinks': { en: 'Drinks', fr: 'Boissons', hi: 'पेय', bn: 'পানীয়', ta: 'பானங்கள்', te: 'పానీయాలు' },
  'wa.order': { en: 'Place Order', fr: 'Passer la commande', hi: 'आदेश दें', bn: 'অর্ডার দিন', ta: 'ஆர்டர் செய்யுங்கள்', te: 'ఆర్డర్ చేయండి' },
  'wa.orderDesc': { en: 'Confirm your choices', fr: 'Confirmez vos choix', hi: 'अपनी पसंद की पुष्टि करें', bn: 'আপনার পছন্দ নিশ্চিত করুন', ta: 'உங்கள் தேர்வுகளை உறுதிப்படுத்தவும்', te: 'మీ ఎంపికలను నిర్ధారించండి' },
  'wa.orderPlaced': { en: 'Order Placed Successfully', fr: 'Commande passée avec succès', hi: 'आदेश सफलतापूर्वक दिया गया', bn: 'অর্ডার সফলভাবে দেওয়া হয়েছে', ta: 'ஆர்டர் வெற்றிகரமாக செய்யப்பட்டது', te: 'ఆర్డర్ విజయవంతంగా ఉంచబడింది' },
  'wa.orderPlacedBody': { en: 'Your order has been sent to the kitchen. You can track its progress on WhatsApp.', fr: 'Votre commande a été envoyée à la cuisine. Vous pouvez suivre sa progression sur WhatsApp.', hi: 'आपका आदेश रसोई में भेज दिया गया है। आप व्हाट्सएप पर इसकी प्रगति को ट्रैक कर सकते हैं।', bn: 'আপনার অর্ডার রান্নাঘরে পাঠানো হয়েছে। আপনি হোয়াটসঅ্যাপে এর অগ্রগতি ট্র্যাক করতে পারেন।', ta: 'உங்கள் ஆர்டர் சமையலறைக்கு அனுப்பப்பட்டது. அதன் முன்னேற்றத்தை நீங்கள் வாட்ஸ்அப்பில் கண்காணிக்கலாம்.', te: 'మీ ఆర్డర్ వంటగదికి పంపబడింది. మీరు దాని పురోగతిని వాట్సాప్‌లో ట్రాక్ చేయవచ్చు.' },
  'wa.track': { en: 'Track on WhatsApp', fr: 'Suivre sur WhatsApp', hi: 'व्हाट्सएप पर ट्रैक करें', bn: 'হোয়াটসঅ্যাপে ট্র্যাক করুন', ta: 'வாட்ஸ்அப்பில் கண்காணிக்கவும்', te: 'వాట్సాప్‌లో ట్రాక్ చేయండి' },
  'wa.trackDesc': { en: 'Real-time updates', fr: 'Mises à jour en temps réel', hi: 'वास्तविक समय अपडेट', bn: 'রিয়েল-টাইম আপডেট', ta: 'நிகழ்நேர அறிவிப்புகள்', te: 'రియల్-టైమ్ అప్‌డేట్‌లు' },
  'wa.trackHeadline': { en: 'Live Order Tracking', fr: 'Suivi de commande en direct', hi: 'लाइव ऑर्डर ट्रैकिंग', bn: 'লাইভ অর্ডার ট্র্যাকিং', ta: 'நேரடி ஆர்டர் கண்காணிப்பு', te: 'లైవ్ ఆర్డర్ ట్రాకింగ్' },
  'wa.trackStatus.placed': { en: 'Order Placed', fr: 'Commande passée', hi: 'आदेश दिया गया', bn: 'অর্ডার দেওয়া হয়েছে', ta: 'ஆர்டர் செய்யப்பட்டது', te: 'ఆర్డర్ ఉంచబడింది' },
  'wa.trackStatus.preparing': { en: 'Preparing', fr: 'En préparation', hi: 'तैयार हो रहा है', bn: 'প্রস্তুত হচ্ছে', ta: 'தயாராகிறது', te: 'తయారుచేస్తోంది' },
  'wa.trackStatus.ready': { en: 'Ready for Pickup', fr: 'Prêt pour le ramassage', hi: 'पिकअप के लिए तैयार', bn: 'পিকআপের জন্য প্রস্তুত', ta: 'எடுக்கத் தயார்', te: 'పికప్ కోసం సిద్ధంగా ఉంది' },
  'wa.trackStatus.onWay': { en: 'On its way', fr: 'En route', hi: 'रास्ते में है', bn: 'পথে আছে', ta: 'வழியில் உள்ளது', te: 'మార్గంలో ఉంది' },
  'wa.trackStatus.delivered': { en: 'Delivered', fr: 'Livré', hi: 'वितरित', bn: 'বিতরণ করা হয়েছে', ta: 'வழங்கப்பட்டது', te: 'డెలివరీ చేయబడింది' },
  'wa.trackTime.justNow': { en: 'Just now', fr: 'À l\'instant', hi: 'अभी-अभी', bn: 'এইমাত্র', ta: 'இப்போதுதான்', te: 'ఇప్పుడే' },
  'wa.trackTime.eta10': { en: 'ETA: 10 mins', fr: 'ETA : 10 min', hi: 'ETA: 10 मिनट', bn: 'ETA: 10 মিনিট', ta: 'ETA: 10 நிமிடங்கள்', te: 'ETA: 10 నిమిషాలు' },
  'wa.trackTime.eta25': { en: 'ETA: 25 mins', fr: 'ETA : 25 min', hi: 'ETA: 25 मिनट', bn: 'ETA: 25 মিনিট', ta: 'ETA: 25 நிமிடங்கள்', te: 'ETA: 25 నిమిషాలు' },
  'wa.trackTime.eta40': { en: 'ETA: 40 mins', fr: 'ETA : 40 min', hi: 'ETA: 40 मिनट', bn: 'ETA: 40 মিনিট', ta: 'ETA: 40 நிமிடங்கள்', te: 'ETA: 40 నిమిషాలు' },
  'wa.trackTime.eta50': { en: 'ETA: 50 mins', fr: 'ETA : 50 min', hi: 'ETA: 50 मिनट', bn: 'ETA: 50 মিনিট', ta: 'ETA: 50 நிமிடங்கள்', te: 'ETA: 50 నిమిషాలు' },
  'wa.previous': { en: 'Previous', fr: 'Précédent', hi: 'पिछला', bn: 'পূর্ববর্তী', ta: 'முந்தையது', te: 'మునుపటి' },
  'wa.next': { en: 'Next', fr: 'Suivant', hi: 'अगला', bn: 'পরবর্তী', ta: 'அடுத்தது', te: 'తర్వాత' },
  'wa.finish': { en: 'Finish', fr: 'Terminer', hi: 'समाप्त करें', bn: 'শেষ', ta: 'முடிக்கவும்', te: 'ముగించు' },

  "hero.avgOrderValueValue": {
    en: "₹1,943",
    fr: "1 943 ₹",
    hi: "₹1,943",
    bn: "₹১,৯৪৩",
    ta: "₹1,943",
    te: "₹1,943"
  },
  "hero.avgOrderValue": {
    en: "Avg. Order Value",
    fr: "Valeur moyenne de commande",
    hi: "औसत ऑर्डर मूल्य",
    bn: "গড় অর্ডার মূল্য",
    ta: "சராசரி ஆர்டர் மதிப்பு",
    te: "సగటు ఆర్డర్ విలువ"
  },
  "hero.todaysGrowthValue": {
    en: "+23%",
    fr: "+23 %",
    hi: "+23%",
    bn: "+২৩%",
    ta: "+23%",
    te: "+23%"
  },
  "hero.todaysGrowth": {
    en: "Today's Growth",
    fr: "Croissance du jour",
    hi: "आज की वृद्धि",
    bn: "আজকের বৃদ্ধি",
    ta: "இன்றைய வளர்ச்சி",
    te: "నేటి వృద్ధి"
  },
  "hero.activeOrdersValue": {
    en: "8",
    fr: "8",
    hi: "8",
    bn: "৮",
    ta: "8",
    te: "8"
  },
  "hero.activeOrders": {
    en: "Active Orders",
    fr: "Commandes actives",
    hi: "सक्रिय ऑर्डर",
    bn: "সক্রিয় অর্ডার",
    ta: "செயலில் உள்ள ஆர்டர்கள்",
    te: "సక్రియ ఆర్డర్లు"
  },
  "hero.liveDashboard": {
    en: "Live Dashboard",
    fr: "Tableau de Bord en Direct",
    hi: "लाइव डैशबोर्ड",
    bn: "লাইভ ড্যাশবোর্ড",
    ta: "நேரடி டாஷ்போர்டு",
    te: "లైవ్ డాష్‌బోర్డ్"
  },
  "hero.realTimeUpdates": { en: "Real-time Updates", fr: "Mises à Jour en Temps Réel", hi: "రియల్ టైమ్ నవీకరణలు", bn: "রিয়েল-টাইম আপডেট", ta: "நேரடி புதுப்பிப்புகள்", te: "రియల్ టైమ్ నవీకరణలు" },
  // Explore Section
  "explore.discoverSavor": { en: "Discover & Savor", fr: "Découvrir et Savourer", hi: "खोजें और आनंद लें", bn: "আবিষ্কার করুন এবং উপভোগ করুন", ta: "கண்டுபிடித்து சுவைக்கவும்", te: "కనుగొని ఆస్వాదించండి" },
  "explore.exploreNow": { en: "Explore Now", fr: "Explorer Maintenant", hi: "अभी एक्सप्लोर करें", bn: "এখনই এক্সপ্লোর করুন", ta: "இப்போது ஆராயவும்", te: "ఇప్పుడు అన్వేషించండి" },
  "explore.restaurant": { en: "Restaurants", fr: "Restaurants", hi: "रेस्टोरेंट", bn: "রেস্তোরা", ta: "உணவகங்கள்", te: "రెస్టారెంట్లు" },
  "explore.cafe": { en: "Cafés", fr: "Cafés", hi: "कैफे", bn: "ক্যাফে", ta: "கஃபே", te: "కెఫేలు" },
  "explore.bar": { en: "Bars", fr: "Bars", hi: "बार", bn: "বার", ta: "பார்கள்", te: "బార్లు" },
  "explore.resort": { en: "Resorts", fr: "Résidences", hi: "रिसॉर्ट", bn: "রিসর্ট", ta: "விடுதிகள்", te: "రిసార్ట్‌లు" },
  "explore.chef": { en: "Chefs", fr: "Chefs", hi: "शेफ", bn: "শেফরা", ta: "சமையல்காரர்கள்", te: "శెఫ్లు" },
  
  // Call to Action
  "cta.signupNow": { 
    en: "Sign Up Now", 
    fr: "Inscrivez-vous maintenant", 
    hi: "अभी साइन अप करें", 
    bn: "এখনই সাইন আপ করুন", 
    ta: "இப்போதே பதிவு செய்யவும்", 
    te: "ఇప్పుడే నమోదు చేసుకోండి" 
  },

  // Features Section
  "features.title": { en: "Everything You Need to Succeed", fr: "Tout ce dont vous avez besoin pour réussir", hi: "सफल होने के लिए आपको जो कुछ भी चाहिए", bn: "সফল হওয়ার জন্য আপনার যা কিছু দরকার", ta: "வெற்றிபெற உங்களுக்குத் தேவையான அனைத்தும்", te: "విజయవంతం కావడానికి మీకు అవసరమైన ప్రతిదీ" },
  "features.subtitle": { en: "Powerful features to help you manage your restaurant business efficiently", fr: "Des fonctionnalités puissantes pour vous aider à gérer efficacement votre entreprise de restauration", hi: "अपने रेस्तरां व्यवसाय को कुशलतापूर्वक प्रबंधित करने में आपकी मदद करने के लिए शक्तिशाली सुविधाएं", bn: "আপনার রেস্তোরাঁর ব্যবসা দক্ষতার সাথে পরিচালনা করতে সাহায্য করার জন্য শক্তিশালী বৈশিষ্ট্য", ta: "உங்கள் உணவக வணிகத்தை திறம்பட நிர்வகிக்க உதவும் சக்திவாய்ந்த அம்சங்கள்", te: "మీ రెస్టారెంట్ వ్యాపారాన్ని సమర్థవంతంగా నిర్వహించడంలో మీకు సహాయపడే శక్తివంతమైన లక్షణాలు" },
  "features.fraud": { en: "Fraud Prevention", fr: "Prévention de la Fraude", hi: "धोखाधड़ी रोकथाम", bn: "জালিয়াতি প্রতিরোধ", ta: "மோசடி தடுப்பு", te: "మోసం నివారణ" },
  "features.fraudDesc": { en: "Advanced algorithms to detect and prevent fraudulent activities", fr: "Algorithmes avancés pour détecter et prévenir les activités frauduleuses", hi: "धोखाधड़ी वाली गतिविधियों का पता लगाने और रोकने के लिए उन्नत एल्गोरिदम", bn: "জালিয়াতিমূলক কার্যকলাপ সনাক্ত করতে এবং প্রতিরোধ করতে উন্নত অ্যালগরিদম", ta: "மோசடி நடவடிக்கைகளைக் கண்டறிந்து தடுக்க மேம்படுத்தப்பட்ட வழிமுறைகள்", te: "మోసపూరిత కార్యకలాపాలను గుర్తించడానికి మరియు నిరోధించడానికి అధునాతన అల్గోరిథంలు" },
  "features.crm": { en: "CRM", fr: "CRM", hi: "सीआरएम", bn: "সিআরএম", ta: "CRM", te: "CRM" },
  "features.crmDesc": { en: "Manage customer relationships and loyalty programs", fr: "Gérez les relations clients et les programmes de fidélité", hi: "ग्राहक संबंध और लॉयल्टी कार्यक्रम प्रबंधित करें", bn: "গ্রাহক সম্পর্ক এবং লয়্যালটি প্রোগ্রাম পরিচালনা করুন", ta: "வாடிக்கையாளர் உறவுகள் மற்றும் விசுவாசத் திட்டங்களை நிர்வகிக்கவும்", te: "కస్టమర్ సంబంధాలు మరియు లాయల్టీ ప్రోగ్రామ్‌లను నిర్వహించండి" },
  "features.table": { en: "Table Management", fr: "Gestion des Tables", hi: "टेबल प्रबंधन", bn: "টেবিল ব্যবস্থাপনা", ta: "டேபிள் மேலாண்மை", te: "టేబుల్ నిర్వహణ" },
  "features.tableDesc": { en: "Efficient table management and reservation system", fr: "Système de gestion de table et de réservation efficace", hi: "कुशल टेबल प्रबंधन और आरक्षण प्रणाली", bn: "দক্ষ টেবিল ব্যবস্থাপনা এবং রিজার্ভেশন সিস্টেম", ta: "திறமையான அட்டவணை மேலாண்மை மற்றும் முன்பதிவு அமைப்பு", te: "సమర్థవంతమైన టేబుల్ నిర్వహణ మరియు రిజర్వేషన్ సిస్టమ్" },
  "features.supplier": { en: "Supplier Management", fr: "Gestion des Fournisseurs", hi: "सप्लायर प्रबंधन", bn: "সরবরাহকারী ব্যবস্থাপনা", ta: "அங்காடி மேலாண்மை", te: "సప్లయిదారు నిర్వహణ" },
  "features.supplierDesc": { en: "Streamline your supply chain and inventory", fr: "Rationalisez votre chaîne d'approvisionnement et votre inventaire", hi: "अपनी आपूर्ति श्रृंखला और इन्वेंट्री को सुव्यवस्थित करें", bn: "আপনার সরবরাহ শৃঙ্খল এবং ইনভেন্টরি স্ট্রীমলাইন করুন", ta: "உங்கள் விநியோக சங்கிலி மற்றும் இருப்பு மேலாண்மையை எளிதாக்கவும்", te: "మీ సరఫరా గొలుసు మరియు ఇన్వెంటరీని సులభతరం చేయండి" },
  "features.qr": { en: "QR Code Menu", fr: "Menu QR Code", hi: "क्यूआर कोड मेनू", bn: "কিউআর কোড মেনু", ta: "QR குறியீடு மெனு", te: "QR కోడ్ మెను" },
  "features.qrDesc": { en: "Contactless digital menus with QR codes", fr: "Menus numériques sans contact avec codes QR", hi: "क्यूआर कोड के साथ संपर्क रहित डिजिटल मेनू", bn: "QR কোড সহ কন্টাক্টলেস ডিজিটাল মেনু", ta: "QR குறியீடுகளுடன் தொடர்பில்லா டிஜிட்டல் மெனுக்கள்", te: "QR కోడ్‌లతో కాంటాక్ట్‌లేని డిజిటల్ మెనులు" },
  "features.kot": { en: "KOT Management", fr: "Gestion KOT", hi: "केओटी प्रबंधन", bn: "KOT ব্যবস্থাপনা", ta: "KOT மேலாண்மை", te: "KOT నిర్వహణ" },
  "features.kotDesc": { en: "Kitchen Order Ticket system for smooth operations", fr: "Système de bons de commande de cuisine pour des opérations fluides", hi: "सुचारू संचालन के लिए किचन ऑर्डर टिकट सिस्टम", bn: "সহজ অপারেশনের জন্য কিচেন অর্ডার টিকিট সিস্টেম", ta: "மென்மையான செயல்பாடுகளுக்கான சமையலறை ஆணை டிக்கெட் அமைப்பு", te: "సున్నితమైన కార్యకలాపాల కోసం కిచన్ ఆర్డర్ టికెట్ సిస్టమ్" },
  "features.billing": { en: "Billing & Invoicing", fr: "Facturation", hi: "बिलिंग और इनवॉइसिंग", bn: "বিলিং এবং ইনভয়েসিং", ta: "பில்லிங் & இன்வாய்சிங்", te: "బిల్లింగ్ & ఇన్వాయిసింగ్" },
  "features.billingDesc": { en: "Generate and manage bills and invoices", fr: "Générez et gérez des factures", hi: "बिल और चालान जनरेट और प्रबंधित करें", bn: "বিল এবং চালান তৈরি এবং পরিচালনা করুন", ta: "பில்கள் மற்றும் இன்வாய்ச்களை உருவாக்கி நிர்வகிக்கவும்", te: "బిల్లులు మరియు ఇన్వాయిస్‌లను రూపొందించండి మరియు నిర్వహించండి" },
  "features.access": { en: "Access Control", fr: "Contrôle d'Accès", hi: "एक्सेस कंट्रोल", bn: "অ্যাক্সেস কন্ট্রোল", ta: "அணுகல் கட்டுப்பாடு", te: "యాక్సెస్ కంట్రోల్" },
  "features.accessDesc": { en: "Role-based access control for staff", fr: "Contrôle d'accès basé sur les rôles pour le personnel", hi: "स्टाफ के लिए भूमिका-आधारित एक्सेस कंट्रोल", bn: "স্টাফের জন্য ভূমিকা-ভিত্তিক অ্যাক্সেস কন্ট্রোল", ta: "ஊழியர்களுக்கான பங்கு சார்ந்த அணுகல் கட்டுப்பாடு", te: "సిబ్బంది కోసం పాత్ర-ఆధారిత యాక్సెస్ కంట్రోల్" },
  
  // Hero Section
  "hero.newOrder": { en: "New Order!", fr: "Nouvelle Commande!", hi: "नया ऑर्डर!", bn: "নতুন অর্ডার!", ta: "புதிய ஆணை!", te: "కొత్త ఆర్డర్!" },
  "hero.orderReady": { en: "Order Ready!", fr: "Commande Prête!", hi: "आदेश तैयार है!", bn: "অর্ডার প্রস্তুত!", ta: "ஆணை தயாராக உள்ளது!", te: "ఆర్డర్ సిద్ధంగా ఉంది!" },
  "digitalOrderingSystem": {
    en: "Digital Ordering System",
    fr: "Système de commande numérique",
    hi: "डिजिटल ऑर्डरिंग सिस्टम",
    bn: "ডিজিটাল অর্ডারিং সিস্টেম",
    ta: "டிஜிட்டல் ஆர்டரிங் அமைப்பு",
    te: "డిజిటల్ ఆర్డరింగ్ సిస్టమ్"
  },

  "wa.customerScansTitle": {
    en: "Customer Scans QR Code",
    fr: "Le client scanne le code QR",
    hi: "ग्राहक QR कोड स्कैन करता है",
    bn: "গ্রাহক QR কোড স্ক্যান করে",
    ta: "வாடிக்கையாளர் QR குறியீட்டை ஸ்கேன் செய்கிறார்",
    te: "కస్టమర్ QR కోడ్‌ని స్కాన్ చేస్తారు"
  },
  "wa.customerScansDesc": {
    en: "Customers can scan from their table or your takeaway counter to start ordering",
    fr: "Les clients peuvent scanner depuis leur table ou votre comptoir à emporter pour commencer à commander",
    hi: "ग्राहक ऑर्डर देने के लिए अपनी टेबल या आपके टेकअवे काउंटर से स्कैन कर सकते हैं",
    bn: "গ্রাহকরা অর্ডার দেওয়া শুরু করতে তাদের টেবিল বা আপনার টেকঅ্যাওয়ে কাউন্টার থেকে স্ক্যান করতে পারেন",
    ta: "ஆர்டர் செய்ய தொடங்க வாடிக்கையாளர்கள் தங்கள் அட்டவணை அல்லது உங்கள் டேக்அவே கவுண்டரில் இருந்து ஸ்கேன் செய்யலாம்",
    te: "కస్టమర్లు ఆర్డర్ చేయడం ప్రారంభించడానికి వారి టేబుల్ నుండి లేదా మీ టేకావే కౌంటర్ నుండి స్కాన్ చేయవచ్చు"
  },
  "wa.dineIn": {
    en: "Dine-in",
    fr: "Sur place",
    hi: "डाइन-इन",
    bn: "ডাইন-ইন",
    ta: "உணவகத்தில் உண்ணல்",
    te: "డైన్-ఇన్"
  },
  "wa.takeaway": {
    en: "Takeaway",
    fr: "À emporter",
    hi: "पैरा लेना",
    bn: "টেকঅ্যাওয়ে",
    ta: "எடுத்துச்செல்",
    te: "టేకావే"
  },
  "wa.interactiveMenuTitle": {
    en: "Interactive Menu Sent",
    fr: "Menu interactif envoyé",
    hi: "इंटरैक्टिव मेनू भेजा गया",
    bn: "ইন্টারেক্টিভ মেনু পাঠানো হয়েছে",
    ta: "ஊடாடும் மெனு அனுப்பப்பட்டது",
    te: "ఇంటరాక్టివ్ మెనూ పంపబడింది"
  },
  "wa.interactiveMenuDesc": {
    en: "Customers receive your digital menu directly in WhatsApp",
    fr: "Les clients reçoivent votre menu numérique directement sur WhatsApp",
    hi: "ग्राहकों को आपका डिजिटल मेनू सीधे WhatsApp पर प्राप्त होता है",
    bn: "গ্রাহকরা সরাসরি WhatsApp-এ আপনার ডিজিটাল মেনু পান",
    ta: "வாடிக்கையாளர்கள் உங்கள் டிஜிட்டல் மெனுவை வாட்ஸ்அப்பில் நேரடியாகப் பெறுகிறார்கள்",
    te: "కస్టమర్లు మీ డిజిటల్ మెనూ వాట్సాప్‌లో నేరుగా అందుకుంటారు"
  },
  "wa.realTimeMenu": {
    en: "Real-time menu updates",
    fr: "Mises à jour du menu en temps réel",
    hi: "रीयल-टाइम मेनू अपडेट",
    bn: "রিয়েল-টাইম মেনু আপডেট",
    ta: "நிகழ்நேர மெனு புதுப்பிப்புகள்",
    te: "నిజ-సమయ మెనూ నవీకరణలు"
  },
  "wa.foodImages": {
    en: "High-quality food images",
    fr: "Images d'aliments de haute qualité",
    hi: "उच्च गुणवत्ता वाले भोजन की छवियां",
    bn: "উচ্চ-মানের খাবারের ছবি",
    ta: "உயர்தர உணவு படங்கள்",
    te: "ఉత్తమ నాణ్యత గల ఆహార చిత్రాలు"
  },
  "wa.customCategories": {
    en: "Custom categories and items",
    fr: "Catégories et articles personnalisés",
    hi: "कस्टम श्रेणियां और आइटम",
    bn: "কাস্টম বিভাগ এবং আইটেম",
    ta: "தனிப்பயன் வகைகள் மற்றும் உருப்படிகள்",
    te: "కస్టమ్ వర్గాలు మరియు అంశాలు"
  },
  "wa.stepIndicator": {
    en: "Step {current} of {total}",
    fr: "Étape {current} sur {total}",
    hi: "चरण {current} / {total}",
    bn: "ধাপ {current} এর {total}",
    ta: "படி {current} / {total}",
    te: "దశ {current} / {total}"
  },
  "wa.goToStep": {
    en: "Go to step {step}",
    fr: "Aller à l'étape {step}",
    hi: "चरण {step} पर जाएं",
    bn: "{step} ধাপে যান",
    ta: "{step} படிக்குச் செல்லவும்",
    te: "{step} దశకు వెళ్ళండి"
  },
  
  // Success Stories - Companies (duplicates removed)
  // Language Names
  "lang.en": {
    en: "English",
    fr: "Anglais",
    hi: "अंग्रेज़ी",
    bn: "ইংরেজি",
    ta: "ஆங்கிலம்",
    te: "ఆంగ్లం"
  },
  "lang.fr": {
    en: "French",
    fr: "Français",
    hi: "फ्रेंच",
    bn: "ফরাসি",
    ta: "பிரஞ்சு",
    te: "ఫ్రెంచ్"
  },
  "lang.hi": {
    en: "Hindi",
    fr: "Hindi",
    hi: "हिन्दी",
    bn: "হিন্দি",
    ta: "இந்தி",
    te: "హిందీ"
  },
  "lang.bn": {
    en: "Bengali",
    fr: "Bengali",
    hi: "बंगाली",
    bn: "বাংলা",
    ta: "பெங்காலி",
    te: "బెంగాలీ"
  },
  "lang.ta": {
    en: "Tamil",
    fr: "Tamoul",
    hi: "तमिल",
    bn: "তামিল",
    ta: "தமிழ்",
    te: "தமிழ்"
  },
  "lang.te": {
    en: "Telugu",
    fr: "Télougou",
    hi: "तेलुगु",
    bn: "তেলুগু",
    ta: "தெலுங்கு",
    te: "తెలుగు"
  },
  
  // Operations
  "operations.title": { en: "360° Operations Overview", fr: "Vue d'Ensemble Opérations 360°", hi: "360° संचालन अवलोकन", bn: "৩৬০° অপারেশনস ওভারভিউ", ta: "360° செயல்பாட்டு மேற்பார்வை", te: "360° ఆపరేషన్స్ అవలోకనం" },
  "operations.description": { en: "Complete visibility and control over every aspect of your restaurant business", fr: "Visibilité et contrôle complets sur tous les aspects de votre entreprise de restauration", hi: "आपके रेस्तरां व्यवसाय के हर पहलू पर पूरी दृश्यता और नियंत्रण", bn: "আপনার রেস্টুরেন্ট ব্যবসার প্রতিটি দিকের সম্পূর্ণ দৃশ্যমানতা এবং নিয়ন্ত্রণ", ta: "உங்கள் உணவக வணிகத்தின் அனைத்து அம்சங்களிலும் முழுமையான பார்வையும் கட்டுப்பாடும்", te: "మీ రెస్టారెంట్ వ్యాపారంలోని ప్రతి అంశంపై సంపూర్ణ దృశ్యమానత మరియు నియంత్రణ" },
  "operations.orderDesc": { en: "Real-time order tracking and kitchen operations", fr: "Suivi des commandes en temps réel et opérations de cuisine", hi: "रीयल-टाइम ऑर्डर ट्रैकिंग और किचन संचालन", bn: "রিয়েল-টাইম অর্ডার ট্র্যাকিং এবং রান্নাঘর পরিচালনা", ta: "நேரடி ஆர்டர் கண்காணிப்பு மற்றும் சமையலறை செயல்பாடுகள்", te: "రియల్-టైమ్ ఆర్డర్ ట్రాకింగ్ మరియు కిచన్ ఆపరేషన్స్" },
  "operations.menuDesc": { en: "Dynamic menu management and pricing control", fr: "Gestion dynamique des menus et contrôle des prix", hi: "डायनामिक मेनू प्रबंधन और मूल्य निर्धारण नियंत्रण", bn: "ডায়নামিক মেনু ম্যানেজমেন্ট এবং মূল্য নিয়ন্ত্রণ", ta: "இயங்கும் மெனு மேலாண்மை மற்றும் விலை கட்டுப்பாடு", te: "డైనమిక్ మెనూ నిర్వహణ మరియు ధర నియంత్రణ" },
  "operations.qrDesc": { en: "Contactless dining with smart QR menus", fr: "Restaurant sans contact avec menus QR intelligents", hi: "स्मार्ट क्यूआर मेनू के साथ संपर्क रहित भोजन", bn: "স্মার্ট কিউআর মেনুর সাথে কন্টাক্টলেস ডাইনিং", ta: "ஸ்மார்ட் QR மெனுக்களுடன் தொடுதலில்லா உணவு", te: "స్మార్ట్ QR మెనూలతో కాంటాక్ట్‌లెస్ డైనింగ్" },
  "operations.feedbackDesc": { en: "Real-time reviews and rating management", fr: "Gestion des avis et des notes en temps réel", hi: "रीयल-टाइम समीक्षाएँ और रेटिंग प्रबंधन", bn: "রিয়েল-টাইম রিভিউ এবং রেটিং ম্যানেজমেন্ট", ta: "நேரடி விமர்சனங்கள் மற்றும் மதிப்பீடு மேலாண்மை", te: "రియల్-టైమ్ సమీక్షలు మరియు రేటింగ్ నిర్వహణ" },
  "operations.tableDesc": { en: "Seamless booking and table management", fr: "Réservation et gestion des tables fluides", hi: "सीमलेस बुकिंग और टेबल प्रबंधन", bn: "নিরবচ্ছিন্ন বুকিং এবং টেবিল ম্যানেজমেন্ট", ta: "முரண்பாடற்ற முன்பதிவு மற்றும் மேசை மேலாண்மை", te: "సీమ్‌లెస్ బుకింగ్ మరియు టేబుల్ నిర్వహణ" },
  "operations.supplierDesc": { en: "Smart inventory tracking and supplier management", fr: "Suivi intelligent des stocks et gestion des fournisseurs", hi: "स्मार्ट इन्वेंटरी ट्रैकिंग और आपूर्तिकर्ता प्रबंधन", bn: "স্মার্ট ইনভেন্টরি ট্র্যাকিং এবং সাপ্লায়ার ম্যানেজমেন্ট", ta: "ஸ்மார்ட் சரக்கு கண்காணிப்பு மற்றும் சப்ளையர் மேலாண்மை", te: "స్మార్ట్ ఇన్వెంటరీ ట్రాకింగ్ మరియు సరఫరాదారు నిర్వహణ" },
  
  // Success Stories
  "success.title": { 
    en: "Success Stories", 
    fr: "Histoires de Succès", 
    hi: "सफलता की कहानियाँ", 
    bn: "সাফল্যের গল্প", 
    ta: "வெற்றிக் கதைகள்", 
    te: "విజయ కథనాలు" 
  },
  "success.subtitle": { 
    en: "Real results from real restaurants using Gustasi", 
    fr: "Résultats réels de vrais restaurants utilisant Gustasi", 
    hi: "गुस्तासी का उपयोग करने वाले असली रेस्तरां से वास्तविक परिणाम", 
    bn: "গুস্তাসি ব্যবহার করে প্রকৃত রেস্টুরেন্ট থেকে প্রকৃত ফলাফল", 
    ta: "குஸ்தாசி பயன்படுத்தும் உணவகங்களில் இருந்து உண்மையான முடிவுகள்", 
    te: "గుస్తాసిని ఉపయోగించి నిజమైన రెస్టారెంట్ల నుండి నిజమైన ఫలితాలు" 
  },

  
  // WhatsApp Flow
  "whatsapp.title": { en: "WhatsApp Menu Flow", fr: "Flux Menu WhatsApp", hi: "व्हाट्सएप मेनू फ्लो", bn: "হোয়াটসঅ্যাপ মেনু ফ্লো", ta: "வாட்ஸ்அப் மெனு ஓட்டம்", te: "WhatsApp మెను ఫ్లో" },
  "whatsapp.subtitle": { en: "Seamless customer journey from QR scan to order completion", fr: "Parcours client fluide du scan QR à la finalisation de la commande", hi: "क्यूआर स्कैन से ऑर्डर पूर्णता तक सहज ग्राहक यात्रा", bn: "QR স্ক্যান থেকে অর্ডার সম্পূর্ণ হওয়া পর্যন্ত নিরবচ্ছিন্ন গ্রাহক যাত্রা", ta: "QR ஸ்கேன் முதல் ஆணை முடிவடையும் வரை தடையற்ற வாடிக்கையாளர் பயணம்", te: "QR స్కాన్ నుండి ఆర్డర్ పూర్తి వరకు నిరంతర కస్టమర్ జర్నీ" },
  "whatsapp.scan": { en: "QR Scan", fr: "Scan QR", hi: "क्यूआर स्कैन", bn: "QR স্ক্যান", ta: "QR ஸ்கேன்", te: "QR స్కాన్" },
  "whatsapp.verification": { en: "WhatsApp Verification", fr: "Vérification WhatsApp", hi: "व्हाट्सएप सत्यापन", bn: "হোয়াটসঅ্যাপ যাচাইকরণ", ta: "వాట్సాప్ ధృవీకరణ", te: "వాట్సాప్ ధృవీకరణ" },
  "whatsapp.menu": { en: "Menu", fr: "Menu", hi: "मेनू", bn: "মেনু", ta: "மெனு", te: "మెను" },
  "whatsapp.capture": { en: "Lead Capture", fr: "Capture de Prospects", hi: "लीड कैप्चर", bn: "লিড ক্যাপচার", ta: "வழிகாட்டி பிடிப்பு", te: "లీడ్ క్యాప్చర్" },
  "whatsapp.note": { en: "Data saved to dashboard for future targeting", fr: "Données sauvegardées au tableau de bord pour le ciblage futur", hi: "भविष्य के टार्गेटिंग के लिए डैशबोर्ड में डेटा सहेजा गया", bn: "ভবিষ্যতের লক্ষ্যকরণের জন্য ড্যাশবোর্ডে ডেটা সংরক্ষিত হয়েছে", ta: "எதிர்கால இலக்கீட்டிற்காக தரவு டாஷ்போர்டில் சேமிக்கப்பட்டது", te: "భవిష్యత్ లక్ష్యంతో డాష్‌బోర్డ్‌కు డేటా సేవ్ చేయబడింది" },
  "whatsapp.modalTitle": { en: "Chat with us on WhatsApp", fr: "Discutez avec nous sur WhatsApp", hi: "व्हाट्सएप पर हमसे चैट करें", bn: "WhatsApp-এ আমাদের সাথে চ্যাট করুন", ta: "எங்களுடன் WhatsApp-ல் அரட்டையிடவும்", te: "మాతో WhatsAppలో చాట్ చేయండి" },
  "whatsapp.modalDescription": { en: "Our team is ready to help you with any questions. Click the button below to start a conversation.", fr: "Notre équipe est prête à vous aider pour toute question. Cliquez sur le bouton ci-dessous pour démarrer une conversation.", hi: "हमारी टीम किसी भी सवाल में आपकी मदद के लिए तैयार है। बातचीत शुरू करने के लिए नीचे दिए गए बटन पर क्लिक करें।", bn: "আমাদের টিম যে কোনও প্রশ্নে আপনাকে সাহায্য করতে প্রস্তুত। কথোপকথন শুরু করতে নীচের বোতামে ক্লিক করুন।", ta: "எங்கள் குழு எந்தவொரு கேள்விகளுக்கும் உங்களுக்கு உதவ தயாராக உள்ளது. உரையாடலைத் தொடங்க கீழே உள்ள பொத்தானைக் கிளிக் செய்க.", te: "మా బృందం ఏవైనా ప్రశ్నలకు మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది. సంభాషణ ప్రారంభించడానికి దిగువ బటన్ పై క్లిక్ చేయండి." },
  "whatsapp.openChat": { en: "Open WhatsApp Chat", fr: "Ouvrir le chat WhatsApp", hi: "व्हाट्सएप चैट खोलें", bn: "WhatsApp চ্যাট খুলুন", ta: "WhatsApp அரட்டையைத் திறக்கவும்", te: "WhatsApp చాట్ తెరవండి" },
  
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
  "metrics.chefs": { en: "7000+ Chefs", fr: "7000+ Chefs", hi: "7000+ शेफ", bn: "৭০০০+ শেফ", ta: "7000+ சமையலர்கள்", te: "7000+ వంటమనుషులు" },
  "metrics.cities": { en: "50+ Cities", fr: "50+ Villes", hi: "50+ शहर", bn: "৫০+ শহর", ta: "50+ நகரங்கள்", te: "50+ నగరాలు" },
  "metrics.reports": { en: "25+ Reports", fr: "25+ Rapports", hi: "25+ रिपోर्ट्स", bn: "২৫+ রিপোর্ট", ta: "25+ அறிக்கைகள்", te: "25+ నివేదికలు" },
  "metrics.savings": { en: "20–25% Fraud Savings", fr: "20–25% Économies Fraude", hi: "20–25% धोखाधड़ी बचत", bn: "২০–২৫% প্রতারণা সাশ্রয়", ta: "20–25% மோசடி சேமிப்பு", te: "20–25% మోసం పొదుపులు" },
  
  // CTAs
  "cta.schedule": { en: "Schedule Demo", fr: "Planifier Démo", hi: "डेमो शेड्यूल करें", bn: "ডেমো নির্ধারণ করুন", ta: "டெமோவை திட்டமிடவும்", te: "డెమోని షెడ్యూల్ చేయండి" },
  "cta.pricing": { en: "Explore Pricing", fr: "Explorer Prix", hi: "मूल्य निर्धारण देखें", bn: "মূল্য নির্ধারণ দেখুন", ta: "விலை நிர்ணயத்தை ஆராயவும்" },
  "cta.chefs": { en: "Find Chefs Near You", fr: "Trouver Chefs Près de Vous", hi: "अपने पास शेफ खोजें", bn: "আপনার কাছাকাছি শেফ খুঁজুন", ta: "உங்களுக்கருகில் சமையலர்களை கண்டறியவும்" },
  
  // Footer
  "footer.home": { en: "Home", fr: "Accueil", hi: "होम", bn: "হোম", ta: "முகப்பு" },
  "footer.about": { en: "About", fr: "À Propos", hi: "के बारे में", bn: "সম্পর্কে", ta: "பற்றி" },
  "footer.features": { en: "Features", fr: "Fonctionnalités", hi: "विशेषताएँ", bn: "বৈশিষ্ট্যাবলী", ta: "அம்சங்கள்" },
  "footer.pricing": { en: "Pricing", fr: "Tarification", hi: "मूल्य निर्धारण", bn: "মূল্য নির্ধারণ", ta: "விலை நிர்ணயம்" },
  "footer.contact": { en: "Contact", fr: "Contact", hi: "संपर्क करें", bn: "যোগাযোগ", ta: "தொடர்பு" },
  "footer.description": { en: "The ultimate all-in-one restaurant solution. Automate orders, manage stock, and drive profits with our intelligent POS platform.", fr: "La solution tout-en-un ultime pour restaurants. Automatisez les commandes, gérez les stocks et augmentez les profits avec notre plateforme POS intelligente.", hi: "सर्वश्रेष्ठ ऑल-इन-वन रेस्टोरेंट समाधान। आदेशों को स्वचालित करें, स्टॉक प्रबंधित करें, और हमारे बुद्धिमान पीओएस प्लेटफ़ॉर्म के साथ लाभ बढ़ाएं।", bn: "সেরা অল-ইন-ওয়ান রেস্টুরেন্ট সমাধান। অর্ডার স্বয়ংক্রিয় করুন, স্টক পরিচালনা করুন এবং আমাদের বুদ্ধিমান POS প্ল্যাটফর্ম দিয়ে লাভ বাড়ান।", ta: "சிறந்த அனைத்தும் ஒன்றாக உள்ள உணவக தீர்வு. ஆணைகளை தானாகச் செய்யுங்கள், பங்குகளை நிர்வகியுங்கள், மற்றும் எங்கள் புத்திசாலி POS தளத்துடன் லாபங்களை அதிகரியுங்கள்." },
  "footer.navigation": { en: "Navigation", fr: "Navigation", hi: "नेविगेशन", bn: "নেভিগেশন", ta: "வழிசெலுத்தல்" },
  "footer.copyright": { en: " 2025 Gustasi. All rights reserved.", fr: " 2025 Gustasi. Tous droits réservés.", hi: " 2025 Gustasi. सर्वाधिकार सुरक्षित।", bn: " 2025 Gustasi. সর্বস্বত্ব সংরক্ষিত।", ta: " 2025 Gustasi. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
  
  // Common
  "common.close": { 
    en: "Close", 
    fr: "Fermer", 
    hi: "बंद करें", 
    bn: "বন্ধ করুন", 
    ta: "மூடு", 
    te: "మూసివేయి" 
  },

  // Chat
  "chat.help": { en: "Need Help?", fr: "Besoin d'Aide?", hi: "मदद चाहिए?", bn: "সাহায্য দরকার?", ta: "உதவி வேண்டுமா?", te: "సహాయం కావాలా?" },
  
  // Aggregator
  "aggregator.title": { en: "Now you can view all your aggregator orders in one place with Gustasi.", fr: "Maintenant, vous pouvez voir toutes vos commandes d'agrégateurs en un seul endroit avec Gustasi.", hi: "अब आप अपने सभी एग्रीगेटर ऑर्डर को एक ही जगह पर Gustasi के साथ देख सकते हैं।", bn: "এখন আপনি Gustasi দিয়ে আপনার সমস্ত অ্যাগ্রিগেটর অর্ডার এক জায়গায় দেখতে পারেন।", ta: "இப்போது நீங்கள் உங்கள் அனைத்து அகரிகேட்டர் ஆணைகளையும் ஒரே இடத்தில் Gustasi உடன் பார்க்கலாம்.", te: "ఇప్పుడు మీరు మీ అన్ని అగ్రిగేటర్ ఆర్డర్లను Gustasiతో ఒకే చోట చూడవచ్చు." },



};

export type SupportedLanguage = 'en' | 'fr' | 'hi' | 'bn' | 'ta' | 'te';
let currentLanguage: SupportedLanguage = 'en';

// Add default translations for the contact and demo pages
translations['contact.pageTitle'] = {
  en: "Contact Us | Gustasi POS",
  fr: "Contactez-nous | Gustasi POS",
  hi: "हमसे संपर्क करें | गुस्तासी पीओएस",
  bn: "আমাদের সাথে যোগাযোগ করুন | গুস্তাসি পিওএস",
  ta: "எங்களைத் தொடர்பு கொள்ள | கஸ்தாசி பிஓஎஸ்",
  te: "మమ్మల్ని సంప్రదించండి | గుస్తాసీ POS"
};

translations['demo.pageTitle'] = {
  en: "Schedule a Demo | Gustasi POS",
  fr: "Planifier une démo | Gustasi POS",
  hi: "डेमो शेड्यूल करें | गुस्तासी पीओएस",
  bn: "একটি ডেমো শিডিউল করুন | গুস্তাসি পিওএস",
  ta: "ஒரு டெமோவை திட்டமிடவும் | கஸ்தாசி பிஓஎஸ்",
  te: "డెమోని షెడ్యూల్ చేయండి | గుస్తాసీ POS"
};

translations['contact.hero.title'] = {
  en: "Let's Talk – We're Here to Help",
  fr: "Parlons – Nous sommes là pour vous aider",
  hi: "बात करते हैं – हम यहाँ आपकी मदद के लिए हैं",
  bn: "চলুন কথা বলি – আমরা আপনাকে সাহায্য করতে এখানে আছি",
  ta: "பேசலாம் – உங்களுக்கு உதவ நாங்கள் இங்கே இருக்கிறோம்",
  te: "మాట్లాడుకుందాం – మేము మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాము"
};

translations['contact.hero.subtitle'] = {
  en: "Have questions? Send us a message and we'll get back to you soon.",
  fr: "Des questions ? Envoyez-nous un message et nous vous répondrons dès que possible.",
  hi: "प्रश्न हैं? हमें एक संदेश भेजें और हम आपको जल्द ही जवाब देंगे।",
  bn: "প্রশ্ন আছে? আমাদের একটি বার্তা পাঠান এবং আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
  ta: "கேள்விகள் உள்ளதா? எங்களுக்கு ஒரு செய்தியை அனுப்பவும், நாங்கள் உங்களுக்கு விரைவில் பதிலளிப்போம்.",
  te: "ప్రశ్నలు ఉన్నాయా? మాకు ఒక సందేశం పంపండి మరియు మేము త్వరలోనే మీకు తిరిగి స్పందిస్తాము."
};

translations['demo.hero.title'] = {
  en: "Schedule a Live Demo",
  fr: "Planifier une démonstration en direct",
  hi: "लाइव डेमो शेड्यूल करें",
  bn: "একটি লাইভ ডেমো শিডিউল করুন",
  ta: "நேரடி டெமோவை திட்டமிடவும்",
  te: "ప్రత్యక్ష డెమోని షెడ్యూల్ చేయండి"
};

translations['demo.hero.subtitle'] = {
  en: "Book a personalized demo to see how Gustasi can transform your restaurant operations.",
  fr: "Réservez une démonstration personnalisée pour voir comment Gustasi peut transformer les opérations de votre restaurant.",
  hi: "एक व्यक्तिगत डेमो बुक करें और देखें कि गुस्तासी आपके रेस्तरां के संचालन को कैसे बदल सकता है।",
  bn: "একটি ব্যক্তিগতকৃত ডেমো বুক করুন এবং দেখুন কিভাবে গুস্তাসি আপনার রেস্তোরাঁর অপারেশনগুলিকে রূপান্তর করতে পারে।",
  ta: "உங்கள் உணவக செயல்பாடுகளை கஸ்தாசி எவ்வாறு மாற்ற முடியும் என்பதைக் காண தனிப்பயனாக்கப்பட்ட டெமோவைப் புத்தகம் செய்யவும்.",
  te: "గుస్తాసి మీ రెస్టారెంట్ కార్యకలాపాలను ఎలా మార్చగలదో చూడటానికి ఒక వ్యక్తిగత డెమోని బుక్ చేయండి."
};

// Form field translations
translations['form.name'] = {
  en: "Name",
  fr: "Nom",
  hi: "नाम",
  bn: "নাম",
  ta: "பெயர்",
  te: "పేరు"
};

translations['form.email'] = {
  en: "Email",
  fr: "E-mail",
  hi: "ईमेल",
  bn: "ইমেইল",
  ta: "மின்னஞ்சல்",
  te: "ఇమెయిల్"
};

translations['form.phone'] = {
  en: "Phone",
  fr: "Téléphone",
  hi: "फ़ोन",
  bn: "ফোন",
  ta: "தொலைபேசி",
  te: "ఫోన్"
};

translations['form.interest'] = {
  en: "I'm interested in...",
  fr: "Je suis intéressé par...",
  hi: "मुझे इसमें दिलचस्पी है...",
  bn: "আমি আগ্রহী...",
  ta: "நான் ஆர்வமாக உள்ளேன்...",
  te: "నాకు ఆసక్తి ఉంది..."
};

translations['form.message'] = {
  en: "Message / Requirements",
  fr: "Message / Exigences",
  hi: "संदेश / आवश्यकताएं",
  bn: "বার্তা / প্রয়োজনীয়তা",
  ta: "செய்தி / தேவைகள்",
  te: "సందేశం / అవసరాలు"
};

translations['form.sendMessage'] = {
  en: "Send Message",
  fr: "Envoyer le message",
  hi: "संदेश भेजें",
  bn: "বার্তা পাঠান",
  ta: "செய்தியை அனுப்பவும்",
  te: "సందేశం పంపండి"
};

translations['form.fullName'] = {
  en: "Full Name",
  fr: "Nom complet",
  hi: "पूरा नाम",
  bn: "পুরো নাম",
  ta: "முழு பெயர்",
  te: "పూర్తి పేరు"
};

translations['form.preferredTime'] = {
  en: "Preferred Time",
  fr: "Heure préférée",
  hi: "पसंदीदा समय",
  bn: "পছন্দের সময়",
  ta: "விருப்பமான நேரம்",
  te: "ఇష్టపడే సమయం"
};

translations['form.selectDate'] = {
  en: "Select a Date",
  fr: "Sélectionner une date",
  hi: "एक तारीख चुनें",
  bn: "একটি তারিখ নির্বাচন করুন",
  ta: "ஒரு தேதியைத் தேர்ந்தெடுக்கவும்",
  te: "తేదీని ఎంచుకోండి"
};

translations['form.additionalNotes'] = {
  en: "Additional Notes",
  fr: "Notes supplémentaires",
  hi: "अतिरिक्त नोट्स",
  bn: "অতিরিক্ত নোট",
  ta: "கூடுதல் குறிப்புகள்",
  te: "అదనపు గమనికలు"
};

translations['form.confirmDemo'] = {
  en: "Confirm Demo Booking",
  fr: "Confirmer la réservation de démo",
  hi: "डेमो बुकिंग की पुष्टि करें",
  bn: "ডেমো বুকিং নিশ্চিত করুন",
  ta: "டெமோ பதிவை உறுதிப்படுத்தவும்",
  te: "డెమో బుకింగ్‌ని నిర్ధారించండి"
};

// Form field placeholders and labels
translations['form.yourName'] = {
  en: "Your name",
  fr: "Votre nom",
  hi: "आपका नाम",
  bn: "আপনার নাম",
  ta: "உங்கள் பெயர்",
  te: "మీ పేరు"
};

translations['form.yourEmail'] = {
  en: "your.email@example.com",
  fr: "votre.email@exemple.com",
  hi: "आपका.ईमेल@उदाहरण.कॉम",
  bn: "আপনার.ইমেইল@উदাহরণ.কম",
  ta: "உங்கள்.மின்னஞ்சல்@எடுத்துக்காட்டு.காம்",
  te: "మీ.ఇమెయిల్@ఉదాహరణ.కామ్"
};

translations['form.phonePlaceholder'] = {
  en: "+1 (___) ___-____",
  fr: "+33 _ __ __ __ __",
  hi: "+91 ________",
  bn: "+88 ________",
  ta: "+91 ________",
  te: "+91 ________"
};

translations['form.tellUsMore'] = {
  en: "Tell us how we can help you...",
  fr: "Dites-nous comment nous pouvons vous aider...",
  hi: "हमें बताएं कि हम आपकी कैसे मदद कर सकते हैं...",
  bn: "আমাদের বলুন আমরা আপনাকে কীভাবে সাহায্য করতে পারি...",
  ta: "உங்களுக்கு எப்படி உதவ முடியும் என்று எங்களிடம் சொல்லுங்கள்...",
  te: "మేము మీకు ఎలా సహాయం చేయగలమో మాకు తెలియజేయండి..."
};

translations['form.selectTime'] = {
  en: "Select a time",
  fr: "Sélectionnez une heure",
  hi: "समय चुनें",
  bn: "একটি সময় নির্বাচন করুন",
  ta: "ஒரு நேரத்தைத் தேர்ந்தெடுக்கவும்",
  te: "సమయాన్ని ఎంచుకోండి"
};

translations['form.pickDate'] = {
  en: "Pick a date",
  fr: "Choisir une date",
  hi: "एक तिथि चुनें",
  bn: "একটি তারিখ নির্বাচন করুন",
  ta: "ஒரு தேதியைத் தேர்ந்தெடுக்கவும்",
  te: "తేదీని ఎంచుకోండి"
};

translations['form.demoFocus'] = {
  en: "Tell us what you'd like to focus on during the demo...",
  fr: "Dites-nous sur quoi vous souhaitez vous concentrer pendant la démo...",
  hi: "हमें बताएं कि आप डेमो के दौरान किस पर ध्यान केंद्रित करना चाहेंगे...",
  bn: "আমাদের বলুন আপনি ডেমোর সময় কোন বিষয়ে ফোকাস করতে চান...",
  ta: "டெமோவின் போது நீங்கள் எதில் கவனம் செலுத்த விரும்புகிறீர்கள் என்று எங்களிடம் சொல்லுங்கள்...",
  te: "డెమో సమయంలో మీరు దేనిపై దృష్టి పెట్టాలనుకుంటున్నారో మాకు తెలియజేయండి..."
};

// Messages
translations['messages.thankYou'] = {
  en: "Thank You!",
  fr: "Merci !",
  hi: "धन्यवाद!",
  bn: "ধন্যবাদ!",
  ta: "நன்றி!",
  te: "ధన్యవాదాలు!"
};

translations['messages.messageReceived'] = {
  en: "We've received your message and will get back to you soon.",
  fr: "Nous avons bien reçu votre message et vous répondrons bientôt.",
  hi: "हमें आपका संदेश मिल गया है और हम जल्द ही आपको जवाब देंगे।",
  bn: "আমরা আপনার বার্তা পেয়েছি এবং শীঘ্রই আপনার সাথে যোগাযোগ করব।",
  ta: "உங்கள் செய்தியைப் பெற்றுள்ளோம், விரைவில் உங்களுடன் தொடர்பு கொள்கிறோம்.",
  te: "మేము మీ సందేశాన్ని స్వీకరించాము మరియు త్వరలోనే మీకు తిరిగి స్పందిస్తాము."
};


translations['messages.demoBooked'] = {
  en: "Demo Booked Successfully!",
  fr: "Démo réservée avec succès !",
  hi: "डेमो सफलतापूर्वक बुक किया गया!",
  bn: "ডেমো সফলভাবে বুক করা হয়েছে!",
  ta: "டெமோ வெற்றிகரமாக பதிவு செய்யப்பட்டது!",
  te: "డెమో విజయవంతంగా బుక్ చేయబడింది!"
};

translations['messages.demoConfirmation'] = {
  en: "We've sent a confirmation to your email with the meeting details.",
  fr: "Nous avons envoyé une confirmation à votre adresse e-mail avec les détails de la réunion.",
  hi: "हमने मीटिंग के विवरण के साथ आपके ईमेल पर एक पुष्टिकरण भेज दिया है।",
  bn: "আমরা মিটিংয়ের বিবরণ সহ আপনার ইমেল ঠিকানায় একটি নিশ্চিতকরণ পাঠিয়েছি।",
  ta: "கூட்டத்தின் விவரங்களுடன் உங்கள் மின்னஞ்சலுக்கு ஒரு உறுதிப்படுத்தலை அனுப்பியுள்ளோம்.",
  te: "మీరు ఇమెయిల్‌కు సమావేశ వివరాలతో ఒక ధృవీకరణను పంపాము."
};

// Actions
translations['actions.sendAnother'] = {
  en: "Send Another Message",
  fr: "Envoyer un autre message",
  hi: "एक और संदेश भेजें",
  bn: "আরেকটি বার্তা পাঠান",
  ta: "மற்றொரு செய்தியை அனுப்பவும்",
  te: "మరొక సందేశం పంపండి"
};

translations['actions.backToContact'] = {
  en: "Back to Contact",
  fr: "Retour au contact",
  hi: "संपर्क पर वापस जाएं",
  bn: "যোগাযোগে ফিরে যান",
  ta: "தொடர்புக்குத் திரும்பு",
  te: "సంప్రదించడానికి తిరిగి వెళ్ళు"
};

// Tabs
translations['tabs.contactUs'] = {
  en: "Contact Us",
  fr: "Contactez-nous",
  hi: "हमसे संपर्क करें",
  bn: "আমাদের সাথে যোগাযোগ করুন",
  ta: "எங்களைத் தொடர்பு கொள்ள",
  te: "మమ్మల్ని సంప్రదించండి"
};

translations['tabs.bookDemo'] = {
  en: "Book Demo",
  fr: "Réserver une démo",
  hi: "डेमो बुक करें",
  bn: "ডেমো বুক করুন",
  ta: "டெமோவை பதிவு செய்க",
  te: "డెమో బుక్ చేయండి"
};

// Options
translations['options.posSystem'] = {
  en: "POS System",
  fr: "Système de caisse",
  hi: "पीओएस सिस्टम",
  bn: "পিওএস সিস্টেম",
  ta: "பிஓஎஸ் அமைப்பு",
  te: "POS సిస్టమ్"
};

translations['options.onlineOrders'] = {
  en: "Online Orders",
  fr: "Commandes en ligne",
  hi: "ऑनलाइन ऑर्डर",
  bn: "অনলাইন অর্ডার",
  ta: "ஆன்லைன் ஆர்டர்கள்",
  te: "ఆన్‌లైన్ ఆర్డర్లు"
};

translations['options.inventory'] = {
  en: "Inventory Management",
  fr: "Gestion des stocks",
  hi: "इन्वेंटरी प्रबंधन",
  bn: "ইনভেন্টরি ব্যবস্থাপনা",
  ta: "இருப்பு மேலாண்மை",
  te: "ఇన్వెంటరీ నిర్వహణ"
};

translations['options.feedback'] = {
  en: "Feedback",
  fr: "Retour d'information",
  hi: "प्रतिक्रिया",
  bn: "মতামত",
  ta: "கருத்து",
  te: "ఫీడ్‌బ్యాక్"
};

// Schedule Demo CTA
translations['cta.scheduleDemo'] = {
  en: "Schedule a Demo",
  fr: "Planifier une démo",
  hi: "डेमो शेड्यूल करें",
  bn: "ডেমো শিডিউল করুন",
  ta: "ஒரு டெமோவை திட்டமிடவும்",
  te: "డెమోని షెడ్యూల్ చేయండి"
};

translations['cta.demoDescription'] = {
  en: "See how our POS system can transform your business. Book a personalized demo today!",
  fr: "Découvrez comment notre système de caisse peut transformer votre entreprise. Réservez une démo personnalisée dès aujourd'hui !",
  hi: "देखें कि हमारा पीओएस सिस्टम आपके व्यवसाय को कैसे बदल सकता है। आज ही एक निजीकृत डेमो बुक करें!",
  bn: "দেখুন কিভাবে আমাদের পিওএস সিস্টেম আপনার ব্যবসাকে রূপান্তর করতে পারে। আজই একটি ব্যক্তিগতকৃত ডেমো বুক করুন!",
  ta: "எங்கள் POS அமைப்பு உங்கள் வணிகத்தை எவ்வாறு மாற்றும் என்பதைப் பாருங்கள். இன்றே ஒரு தனிப்பயனாக்கப்பட்ட டெமோவைப் பதிவு செய்யவும்!",
  te: "మా POS సిస్టమ్ మీ వ్యాపారాన్ని ఎలా మార్చగలదో చూడండి. ఈరోజే ఒక వ్యక్తిగతీకరించిన డెమోని బుక్ చేసుకోండి!"
};

// WhatsApp Modal - Moved to main translations object above

// WhatsApp Flow additions
translations['digitalOrderingSystem'] = { en: "Digital Ordering System", fr: "Système de commande numérique", hi: "डिजिटल ऑर्डरिंग सिस्टम", bn: "ডিজিটাল অর্ডারিং সিস্টেম", ta: "டிஜிட்டல் ஆர்டர் சிஸ்டம்", te: "డిజిటల్ ఆర్డరింగ్ సిస్టమ్" };
translations['wa.subtitle'] = { en: "For Restaurant Owners", fr: "Pour les restaurateurs", hi: "रेस्टोरेंट मालिकों के लिए", bn: "রেস্তোরাঁর মালিকদের জন্য", ta: "உணவக உரிமையாளர்களுக்காக", te: "రెస్టారెంట్ యజమానుల కోసం" };

// Explore Section
translations['explore.restaurant'] = { en: "Restaurants", fr: "Restaurants", hi: "रेस्टोरेंट", bn: "রেস্তোরাঁ", ta: "உணவகங்கள்", te: "రెస్టారెంట్లు" };
translations['explore.cafe'] = { en: "Cafes", fr: "Cafés", hi: "कैफे", bn: "ক্যাফে", ta: "கஃபேக்கள்", te: "కేఫ్‌లు" };
translations['explore.bar'] = { en: "Bars", fr: "Bars", hi: "बार", bn: "বার", ta: "பார்கள்", te: "బార్లు" };
translations['explore.resort'] = { en: "Resorts", fr: "Complexes hôteliers", hi: "रिसॉर्ट्स", bn: "রিসোর্ট", ta: "ரிசார்ட்ஸ்", te: "రిసార్ట్‌లు" };
translations['explore.chef'] = { en: "Chefs", fr: "Chefs", hi: "शेफ", bn: "শেফ", ta: "சமையல்காரர்கள்", te: "చెఫ్‌లు" };
translations['explore.discoverSavor'] = { en: "Discover & Savor", fr: "Découvrir & Savourer", hi: "खोजें और स्वाद लें", bn: "আবিষ্কার করুন এবং স্বাদ নিন", ta: "கண்டுபிடித்து சுவைக்கவும்", te: "కనుగొనండి & రుచి చూడండి" };
translations['explore.discoverAmazing'] = { en: "Discover Amazing", fr: "Découvrez l'incroyable", hi: "अद्भुत खोजें", bn: "আশ্চর্যজনক আবিষ্কার করুন", ta: "அற்புதமானவற்றைக் கண்டறியுங்கள்", te: "అద్భుతమైనదాన్ని కనుగొనండి" };
translations['explore.nearYou'] = { en: "Near You", fr: "Près de chez vous", hi: "आपके पास", bn: "আপনার কাছে", ta: "உங்களுக்கு அருகில்", te: "మీకు దగ్గరలో" };
translations['explore.description'] = { en: "Find the best places to eat, drink, and relax around you.", fr: "Trouvez les meilleurs endroits pour manger, boire et vous détendre autour de vous.", hi: "अपने आस-पास खाने, पीने और आराम करने के लिए सबसे अच्छी जगहें खोजें।", bn: "আপনার চারপাশে খাওয়া, পান করা এবং বিশ্রাম নেওয়ার জন্য সেরা জায়গাগুলি খুঁজুন।", ta: "உங்களைச் சுற்றி சாப்பிட, குடிக்க மற்றும் ஓய்வெடுக்க சிறந்த இடங்களைக் கண்டறியவும்.", te: "మీ చుట్టూ తినడానికి, త్రాగడానికి మరియు విశ్రాంతి తీసుకోవడానికి ఉత్తమ స్థలాలను కనుగొనండి." };
translations['explore.exploreNow'] = { en: "Explore Now", fr: "Explorer maintenant", hi: "अभी अन्वेषण करें", bn: "এখনই অন্বেষণ করুন", ta: "இப்போது ஆராயுங்கள்", te: "ఇప్పుడే అన్వేషించండి" };
translations['explore.cities'] = { en: "100+ Cities", fr: "100+ Villes", hi: "100+ शहर", bn: "১০০+ শহর", ta: "100+ நகரங்கள்", te: "100+ నగరాలు" };
translations['explore.topRated'] = { en: "Top Rated", fr: "Les mieux notés", hi: "टॉप रेटेड", bn: "শীর্ষ রেট", ta: "சிறந்த மதிப்பிடப்பட்டது", te: "టాప్ రేటెడ్" };
translations['explore.openNow'] = { en: "Open Now", fr: "Ouvert maintenant", hi: "अभी खुला है", bn: "এখন খোলা", ta: "இப்போது திற", te: "ఇప్పుడు తెరువు" };

// Operations
translations["operations.title"] = {
    en: "Streamline Your Operations",
    fr: "Rationalisez Vos Opérations",
    hi: "अपने संचालन को सुव्यवस्थित करें",
    bn: "আপনার অপারেশন স্ট্রীমলাইন করুন",
    ta: "உங்கள் செயல்பாடுகளை ஒழுங்குபடுத்துங்கள்",
    te: "మీ కార్యకలాపాలను క్రమబద్ధీకరించండి"
  };
  translations["operations.description"] = {
    en: "A comprehensive suite of tools to manage every aspect of your restaurant, from orders to suppliers.",
    fr: "Une suite complète d'outils pour gérer chaque aspect de votre restaurant, des commandes aux fournisseurs.",
    hi: "आपके रेस्तरां के हर पहलू को प्रबंधित करने के लिए उपकरणों का एक व्यापक सूट, ऑर्डर से लेकर आपूर्तिकर्ताओं तक।",
    bn: "অর্ডার থেকে সরবরাহকারী পর্যন্ত আপনার রেস্তোরাঁর প্রতিটি দিক পরিচালনা করার জন্য সরঞ্জামগুলির একটি বিস্তৃত স্যুট।",
    ta: "உங்கள் உணவகத்தின் ஒவ்வொரு அம்சத்தையும், ஆர்டர்கள் முதல் சப்ளையர்கள் வரை நிர்வகிக்க ஒரு விரிவான கருவிகள்.",
    te: "మీ రెస్టారెంట్ యొక్క ప్రతి అంశాన్ని, ఆర్డర్‌ల నుండి సరఫరాదారుల వరకు నిర్వహించడానికి సాధనాల యొక్క సమగ్ర సూట్."
  };
  translations["operations.orderDesc"] = {
    en: "Manage incoming orders from all platforms in one place.",
    fr: "Gérez les commandes entrantes de toutes les plateformes en un seul endroit.",
    hi: "सभी प्लेटफार्मों से आने वाले ऑर्डर को एक ही स्थान पर प्रबंधित करें।",
    bn: "সমস্ত প্ল্যাটফর্ম থেকে আগত অর্ডারগুলি এক জায়গায় পরিচালনা করুন।",
    ta: "அனைத்து தளங்களிலிருந்தும் உள்வரும் ஆர்டர்களை ஒரே இடத்தில் நிர்வகிக்கவும்.",
    te: "అన్ని ప్లాట్‌ఫారమ్‌ల నుండి ఇన్‌కమింగ్ ఆర్డర్‌లను ఒకే చోట నిర్వహించండి."
  };
  translations["operations.menuDesc"] = {
    en: "Create, customize, and manage your digital menu with ease.",
    fr: "Créez, personnalisez et gérez facilement votre menu numérique.",
    hi: "आसानी से अपना डिजिटल मेनू बनाएं, अनुकूलित करें और प्रबंधित करें।",
    bn: "সহজে আপনার ডিজিটাল মেনু তৈরি, কাস্টমাইজ এবং পরিচালনা করুন।",
    ta: "உங்கள் டிஜிட்டல் மெனுவை எளிதாக உருவாக்கவும், தனிப்பயனாக்கவும் மற்றும் நிர்வகிக்கவும்.",
    te: "మీ డిజిటల్ మెనుని సులభంగా సృష్టించండి, అనుకూలీకరించండి మరియు నిర్వహించండి."
  };
  translations["operations.qrDesc"] = {
    en: "Generate QR codes for contactless ordering and payments.",
    fr: "Générez des codes QR pour les commandes et les paiements sans contact.",
    hi: "संपर्क रहित ऑर्डर और भुगतान के लिए क्यूआर कोड उत्पन्न करें।",
    bn: "যোগাযোগহীন অর্ডারিং এবং অর্থপ্রদানের জন্য QR কোড তৈরি করুন।",
    ta: "தொடர்பு இல்லாத ஆர்டர் மற்றும் கொடுப்பனவுகளுக்கு QR குறியீடுகளை உருவாக்கவும்.",
    te: "కాంటాక్ట్‌లెస్ ఆర్డరింగ్ మరియు చెల్లింపుల కోసం QR కోడ్‌లను రూపొందించండి."
  };
  translations["operations.feedbackDesc"] = {
    en: "Collect and analyze customer feedback to improve your service.",
    fr: "Recueillez et analysez les commentaires des clients pour améliorer votre service.",
    hi: "अपनी सेवा को बेहतर बनाने के लिए ग्राहकों की प्रतिक्रिया एकत्र करें और उसका विश्लेषण करें।",
    bn: "আপনার পরিষেবা উন্নত করতে গ্রাহকের প্রতিক্রিয়া সংগ্রহ এবং বিশ্লেষণ করুন।",
    ta: "உங்கள் சேவையை மேம்படுத்த வாடிக்கையாளர் கருத்துக்களை சேகரித்து பகுப்பாய்வு செய்யுங்கள்.",
    te: "మీ సేవను మెరుగుపరచడానికి కస్టమర్ అభిప్రాయాన్ని సేకరించి విశ్లేషించండి."
  };
  translations["operations.tableDesc"] = {
    en: "Efficiently manage table reservations and seating.",
    fr: "Gérez efficacement les réservations de table et les places assises.",
    hi: "टेबल आरक्षण और बैठने की व्यवस्था को कुशलतापूर्वक प्रबंधित करें।",
    bn: "দক্ষতার সাথে টেবিল রিজার্ভেশন এবং বসার ব্যবস্থা পরিচালনা করুন।",
    ta: "டேபிள் முன்பதிவு மற்றும் இருக்கைகளை திறமையாக நிர்வகிக்கவும்.",
    te: "టేబుల్ రిజర్వేషన్‌లు మరియు సీటింగ్‌ను సమర్ధవంతంగా నిర్వహించండి."
  };
  translations["operations.supplierDesc"] = {
    en: "Streamline your supply chain and manage vendor relationships.",
    fr: "Rationalisez votre chaîne d'approvisionnement et gérez les relations avec les fournisseurs.",
    hi: "अपनी आपूर्ति श्रृंखला को सुव्यवस्थित करें और विक्रेता संबंधों का प्रबंधन करें।",
    bn: "আপনার সরবরাহ শৃঙ্খলকে স্ট্রীমলাইন করুন এবং বিক্রেতার সম্পর্ক পরিচালনা করুন।",
    ta: "உங்கள் விநியோகச் சங்கிலியை ஒழுங்குபடுத்துங்கள் மற்றும் விற்பனையாளர் உறவுகளை நிர்வகிக்கவும்.",
    te: "మీ సరఫరా గొలుసును క్రమబద్ధీకరించండి మరియు విక్రేత సంబంధాలను నిర్వహించండి."
  };

// Features Section
translations["features.title"] = { en: "Powerful Features for Your Success", fr: "Des fonctionnalités puissantes pour votre succès", hi: "आपकी सफलता के लिए शक्तिशाली सुविधाएँ", bn: "আপনার সাফল্যের জন্য শক্তিশালী বৈশিষ্ট্য", ta: "உங்கள் வெற்றிக்கான சக்திவாய்ந்த அம்சங்கள்", te: "మీ విజయానికి శక్తివంతమైన ఫీచర్లు" };
translations["features.subtitle"] = { en: "Everything you need to manage your restaurant efficiently and grow your business.", fr: "Tout ce dont vous avez besoin pour gérer efficacement votre restaurant et développer votre activité.", hi: "अपने रेस्तरां को कुशलतापूर्वक प्रबंधित करने और अपने व्यवसाय को बढ़ाने के लिए आपको जो कुछ भी चाहिए।", bn: "আপনার রেস্তোরাঁ দক্ষতার সাথে পরিচালনা করতে এবং আপনার ব্যবসা বাড়াতে আপনার যা কিছু প্রয়োজন।", ta: "உங்கள் உணவகத்தை திறமையாக நிர்வகிக்கவும், உங்கள் வணிகத்தை வளர்க்கவும் தேவையான அனைத்தும்.", te: "మీ రెస్టారెంట్‌ను సమర్ధవంతంగా నిర్వహించడానికి మరియు మీ వ్యాపారాన్ని పెంచుకోవడానికి కావలసినవన్నీ." };
translations["features.learnMore"] = { en: "Learn More", fr: "En savoir plus", hi: " और जानें", bn: "আরও জানুন", ta: "மேலும் அறிக", te: "మరింత తెలుసుకోండి" };
translations["features.order"] = {
    en: "Order Management",
    fr: "Gestion des Commandes",
    hi: "आदेश प्रबंधन",
    bn: "অর্ডার ম্যানেজমেন্ট",
    ta: "ஆர்டர் மேலாண்மை",
    te: "ఆర్డర్ నిర్వహణ"
  };
  translations["features.menu"] = {
    en: "Menu Engineering",
    fr: "Ingénierie de Menu",
    hi: "मेनू इंजीनियरिंग",
    bn: "মেনু ইঞ্জিনিয়ারিং",
    ta: "மெனு இன்ஜினியரிங்",
    te: "మెనూ ఇంజనీరింగ్"
  };
  translations["features.feedback"] = {
    en: "Customer Feedback",
    fr: "Commentaires des clients",
    hi: "ग्राहक प्रतिक्रिया",
    bn: "গ্রাহকের প্রতিক্রিয়া",
    ta: "வாடிக்கையாளர் கருத்து",
    te: "కస్టమర్ అభిప్రాయం"
  };

// Footer
translations["footer.home"] = { en: "Home", fr: "Accueil", hi: "होम", bn: "হোম", ta: "முகப்பு", te: "హోమ్" };
translations["footer.about"] = { en: "About", fr: "À propos", hi: "हमारे बारे में", bn: "সম্পর্কে", ta: "பற்றி", te: "గురించి" };
translations["footer.features"] = { en: "Features", fr: "Fonctionnalités", hi: "विशेषताएँ", bn: "বৈশিষ্ট্য", ta: "அம்சங்கள்", te: "ఫీచర్లు" };
translations["footer.pricing"] = { en: "Pricing", fr: "Tarifs", hi: "मूल्य निर्धारण", bn: "মূল্য নির্ধারণ", ta: "விலை", te: "ధర" };
translations["footer.contact"] = { en: "Contact", fr: "Contact", hi: "संपर्क", bn: "যোগাযোগ", ta: "தொடர்பு", te: "సంప్రదించండి" };
translations["footer.description"] = { en: "Transform your restaurant with intelligent automation, real-time analytics, and seamless multi-platform integration.", fr: "Transformez votre restaurant avec une automatisation intelligente, des analyses en temps réel et une intégration multiplateforme transparente.", hi: "बुद्धिमान स्वचालन, वास्तविक समय के विश्लेषण और निर्बाध मल्टी-प्लेटफ़ॉर्म एकीकरण के साथ अपने रेस्तरां को बदलें।", bn: "বুদ্ধিমান অটোমেশন, রিয়েল-টাইম অ্যানালিটিক্স এবং বিজোড় মাল্টি-প্ল্যাটফর্ম ইন্টিগ্রেশন দিয়ে আপনার রেস্তোরাঁকে রূপান্তর করুন।", ta: "நுண்ணறிவு ஆட்டோமேஷன், நிகழ்நேர பகுப்பாய்வு மற்றும் தடையற்ற பல-தளம் ஒருங்கிணைப்பு மூலம் உங்கள் உணவகத்தை மாற்றவும்.", te: "తెలివైన ఆటోమేషన్, నిజ-సమయ విశ్లేషణలు మరియు అతుకులు లేని బహుళ-ప్లాట్‌ఫారమ్ ఇంటిగ్రేషన్‌తో మీ రెస్టారెంట్‌ను మార్చండి." };
translations["footer.navigation"] = { en: "Navigation", fr: "Navigation", hi: "नेविगेशन", bn: "নেভিগেশন", ta: "வழிசெலுத்தல்", te: "నావిగేషన్" };
translations["footer.copyright"] = { en: " 2025 Gustasi. All rights reserved.", fr: " 2025 Gustasi. Tous droits réservés.", hi: " 2025 गुस्तासी। सर्वाधिकार सुरक्षित।", bn: " 2025 গুস্তাসি। সর্বস্বত্ব সংরক্ষিত।", ta: " 2025 குஸ்தாசி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", te: " 2025 గుస్తాసి. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి." };

// Features
translations['features.fraud'] = { en: "Fraud Prevention", fr: "Prévention de la fraude", hi: "धोखाधड़ी की रोकथाम", bn: "জালিয়াতি প্রতিরোধ", ta: "மோசடி தடுப்பு", te: "మోసం నివారణ" };
translations['features.fraudDesc'] = { en: "Protect your business with advanced fraud detection and prevention tools.", fr: "Protégez votre entreprise avec des outils avancés de détection et de prévention de la fraude.", hi: "उन्नत धोखाधड़ी का पता लगाने और रोकथाम उपकरणों के साथ अपने व्यवसाय की रक्षा करें।", bn: "উন্নত জালিয়াতি সনাক্তকরণ এবং প্রতিরোধ সরঞ্জামগুলির সাথে আপনার ব্যবসাকে রক্ষা করুন।", ta: "மேம்பட்ட மோசடி கண்டறிதல் மற்றும் தடுப்பு கருவிகள் மூலம் உங்கள் வணிகத்தைப் பாதுகாக்கவும்.", te: "అధునాతన మోసం గుర్తింపు మరియు నివారణ సాధనాలతో మీ వ్యాపారాన్ని రక్షించుకోండి." };
translations['features.crm'] = { en: "CRM & Loyalty", fr: "CRM & Fidélité", hi: "सीआरएम और वफादारी", bn: "সিআরএম এবং আনুগত্য", ta: "சிஆர்எம் & லாயல்டி", te: "CRM & లాయల్టీ" };
translations['features.table'] = { en: "Table Management", fr: "Gestion des tables", hi: "टेबल प्रबंधन", bn: "টেবিল ম্যানেজমেন্ট", ta: "டேபிள் மேலாண்மை", te: "టేబుల్ నిర్వహణ" };
translations['features.tableDesc'] = { en: "Efficiently manage your tables, reservations, and waitlists in real-time.", fr: "Gérez efficacement vos tables, réservations et listes d'attente en temps réel.", hi: "वास्तविक समय में अपनी तालिकाओं, आरक्षणों और प्रतीक्षा सूचियों का कुशलतापूर्वक प्रबंधन करें।", bn: "রিয়েল-টাইমে আপনার টেবিল, রিজার্ভেশন এবং ওয়েটলিস্টগুলি দক্ষতার সাথে পরিচালনা করুন।", ta: "உங்கள் அட்டவணைகள், முன்பதிவுகள் மற்றும் காத்திருப்புப் பட்டியல்களை நிகழ்நேரத்தில் திறமையாக நிர்வகிக்கவும்.", te: "నిజ సమయంలో మీ టేబుల్స్, రిజర్వేషన్లు మరియు వెయిట్‌లిస్ట్‌లను సమర్ధవంతంగా నిర్వహించండి." };
translations['features.supplier'] = { en: "Supplier Management", fr: "Gestion des fournisseurs", hi: "आपूर्तिकर्ता प्रबंधन", bn: "সরবরাহকারী ব্যবস্থাপনা", ta: "சப்ளையர் மேலாண்மை", te: "సరఫరాదారు నిర్వహణ" };
translations['features.supplierDesc'] = { en: "Streamline your procurement process and manage supplier relationships with ease.", fr: "Rationalisez votre processus d'approvisionnement et gérez facilement les relations avec les fournisseurs.", hi: "अपनी खरीद प्रक्रिया को सुव्यवस्थित करें और आपूर्तिकर्ता संबंधों को आसानी से प्रबंधित करें।", bn: "আপনার সংগ্রহ প্রক্রিয়াটিকে সহজ করুন এবং সরবরাহকারী সম্পর্কগুলি সহজেই পরিচালনা করুন।", ta: "உங்கள் கொள்முதல் செயல்முறையை நெறிப்படுத்துங்கள் மற்றும் சப்ளையர் உறவுகளை எளிதாக நிர்வகிக்கவும்.", te: "మీ సేకరణ ప్రక్రియను క్రమబద్ధీకరించండి మరియు సరఫరాదారు సంబంధాలను సులభంగా నిర్వహించండి." };
translations['features.qr'] = { en: "QR Code Ordering", fr: "Commande par code QR", hi: "क्यूआर कोड ऑर्डरिंग", bn: "কিউআর কোড অর্ডারিং", ta: "QR குறியீடு ஆர்டர்", te: "QR కోడ్ ఆర్డరింగ్" };
translations['features.qrDesc'] = { en: "Enable contactless ordering for your customers with dynamic QR codes.", fr: "Activez la commande sans contact pour vos clients avec des codes QR dynamiques.", hi: "गतिशील क्यूआर कोड के साथ अपने ग्राहकों के लिए संपर्क रहित ऑर्डरिंग सक्षम करें।", bn: "গতিশীল QR কোডগুলির সাথে আপনার গ্রাহকদের জন্য যোগাযোগহীন অর্ডারিং সক্ষম করুন।", ta: "டைனமிக் QR குறியீடுகள் மூலம் உங்கள் வாடிக்கையாளர்களுக்கு தொடர்பு இல்லாத ஆர்டரை இயக்கவும்.", te: "డైనమిక్ QR కోడ్‌లతో మీ కస్టమర్‌ల కోసం కాంటాక్ట్‌లెస్ ఆర్డరింగ్‌ను ప్రారంభించండి." };
translations['features.kot'] = { en: "KOT Management", fr: "Gestion KOT", hi: "KOT प्रबंधन", bn: "KOT ম্যানেজমেন্ট", ta: "KOT மேலாண்மை", te: "KOT నిర్వహణ" };
translations['features.kotDesc'] = { en: "Automate your kitchen order tickets and reduce manual errors.", fr: "Automatisez vos tickets de commande de cuisine et réduisez les erreurs manuelles.", hi: "अपने किचन ऑर्डर टिकट को स्वचालित करें और मैन्युअल त्रुटियों को कम करें।", bn: "আপনার রান্নাঘরের অর্ডার টিকিট স্বয়ংক্রিয় করুন এবং ম্যানুয়াল ত্রুটিগুলি হ্রাস করুন।", ta: "உங்கள் சமையலறை ஆர்டர் டிக்கெட்டுகளை தானியக்கமாக்குங்கள் மற்றும் கைமுறை பிழைகளைக் குறைக்கவும்.", te: "మీ కిచెన్ ఆర్డర్ టిక్కెట్‌లను ఆటోమేట్ చేయండి మరియు మాన్యువల్ లోపాలను తగ్గించండి." };
translations['features.billing'] = { en: "Billing & Payments", fr: "Facturation & Paiements", hi: "बिलिंग और भुगतान", bn: "বিলিং এবং পেমেন্ট", ta: "பில்லிங் & கொடுப்பனவுகள்", te: "బిల్లింగ్ & చెల్లింపులు" };
translations['features.billingDesc'] = { en: "Simplify your billing process with multiple payment options and integrations.", fr: "Simplifiez votre processus de facturation avec plusieurs options de paiement et intégrations.", hi: "कई भुगतान विकल्पों और एकीकरणों के साथ अपनी बिलिंग प्रक्रिया को सरल बनाएं।", bn: "একাধিক অর্থপ্রদানের বিকল্প এবং ইন্টিগ্রেশন সহ আপনার বিলিং প্রক্রিয়াটিকে সহজ করুন।", ta: "பல கட்டண விருப்பங்கள் மற்றும் ஒருங்கிணைப்புகளுடன் உங்கள் பில்லிங் செயல்முறையை எளிதாக்குங்கள்.", te: "బహుళ చెల్లింపు ఎంపికలు మరియు ఇంటిగ్రేషన్‌లతో మీ బిల్లింగ్ ప్రక్రియను సులభతరం చేయండి." };
translations['features.access'] = { en: "Role-Based Access", fr: "Accès basé sur les rôles", hi: "भूमिका-आधारित पहुंच", bn: "ভূমিকা-ভিত্তিক অ্যাক্সেস", ta: "பங்கு அடிப்படையிலான அணுகல்", te: "పాత్ర-ఆధారిత యాక్సెస్" };
translations['features.accessDesc'] = { en: "Control user permissions and secure your data with role-based access control.", fr: "Contrôlez les autorisations des utilisateurs et sécurisez vos données avec un contrôle d'accès basé sur les rôles.", hi: "उपयोगकर्ता अनुमतियों को नियंत्रित करें और भूमिका-आधारित अभिगम नियंत्रण के साथ अपने डेटा को सुरक्षित करें।", bn: "ব্যবহারকারীর অনুমতি নিয়ন্ত্রণ করুন এবং ভূমিকা-ভিত্তিক অ্যাক্সেস নিয়ন্ত্রণের সাথে আপনার ডেটা সুরক্ষিত করুন।", ta: "பயனர் அனுமதிகளைக் கட்டுப்படுத்தவும் மற்றும் பங்கு அடிப்படையிலான அணுகல் கட்டுப்பாட்டுடன் உங்கள் தரவைப் பாதுகாக்கவும்.", te: "పాత్ర-ఆధారిత యాక్సెస్ నియంత్రణతో వినియోగదారు అనుమతులను నియంత్రించండి మరియు మీ డేటాను సురక్షితం చేయండి." };

// Fraud Prevention Page
translations['fraud.hero.title'] = { en: "Secure Your Restaurant with Gustasi's Advanced Fraud Prevention", fr: "Sécurisez votre restaurant avec la prévention avancée de la fraude de Gustasi", hi: "गुस्तासी के उन्नत धोखाधड़ी रोकथाम के साथ अपने रेस्तरां को सुरक्षित करें", bn: "গুস্তাসির উন্নত জালিয়াতি প্রতিরোধের মাধ্যমে আপনার রেস্তোরাঁকে সুরক্ষিত করুন", ta: "குஸ்தாசியின் மேம்பட்ட மோசடி தடுப்பு மூலம் உங்கள் உணவகத்தைப் பாதுகாக்கவும்", te: "గుస్తాసి యొక్క అధునాతన మోసం నివారణతో మీ రెస్టారెంట్‌ను సురక్షితం చేసుకోండి" };
translations['fraud.hero.subtitle'] = { en: "Identify and eliminate revenue leaks with our intelligent, real-time monitoring and alert system.", fr: "Identifiez et éliminez les fuites de revenus avec notre système intelligent de surveillance et d'alerte en temps réel.", hi: "हमारे बुद्धिमान, वास्तविक समय की निगरानी और चेतावनी प्रणाली के साथ राजस्व लीक को पहचानें और समाप्त करें।", bn: "আমাদের বুদ্ধিমান, রিয়েল-টাইম মনিটরিং এবং সতর্কতা সিস্টেমের সাথে রাজস্ব ফাঁস সনাক্ত করুন এবং নির্মূল করুন।", ta: "எங்கள் அறிவார்ந்த, நிகழ்நேர கண்காணிப்பு மற்றும் எச்சரிக்கை அமைப்பு மூலம் வருவாய் கசிவுகளைக் கண்டறிந்து அகற்றவும்.", te: "మా తెలివైన, నిజ-సమయ పర్యవేక్షణ మరియు హెచ్చరిక వ్యవస్థతో ఆదాయ లీక్‌లను గుర్తించండి మరియు తొలగించండి." };
translations['fraud.hero.cta'] = { en: "Get Started for Free", fr: "Commencez gratuitement", hi: "मुफ्त में शुरू करें", bn: "বিনামূল্যে শুরু করুন", ta: "இலவசமாகத் தொடங்குங்கள்", te: "ఉచితంగా ప్రారంభించండి" };
translations['fraud.hero.demo'] = { en: "Request a Demo", fr: "Demander une démo", hi: "डेमो का अनुरोध करें", bn: "একটি ডেমো অনুরোধ করুন", ta: "டெமோவைக் கோருங்கள்", te: "డెమోను అభ్యర్థించండి" };
translations['fraud.types.title'] = { en: "Common Types of Restaurant Fraud We Tackle", fr: "Types courants de fraude dans les restaurants que nous combattons", hi: "हम जिन सामान्य प्रकार के रेस्तरां धोखाधड़ी से निपटते हैं", bn: "আমরা যে ধরনের সাধারণ রেস্তোরাঁর জালিয়াতির মোকাবিলা করি", ta: "நாங்கள் சமாளிக்கும் பொதுவான உணவக மோசடி வகைகள்", te: "మేము పరిష్కరించే సాధారణ రకాల రెస్టారెంట్ మోసాలు" };
translations['fraud.types.orderTampering'] = { en: "Order Tampering", fr: "Manipulation de commande", hi: "ऑर्डर से छेड़छाड़", bn: "অর্ডার টেম্পারিং", ta: "ஆர்டர் சேதம்", te: "ఆర్డర్ ట్యాంపరింగ్" };
translations['fraud.types.orderTamperingDesc'] = { en: "Bills altered after payment or before kitchen punch", fr: "Factures modifiées après paiement ou avant le pointage en cuisine", hi: "भुगतान के बाद या किचन पंच से पहले बिल में बदलाव", bn: "অর্থপ্রদানের পরে বা রান্নাঘরের পাঞ্চের আগে বিল পরিবর্তন করা হয়েছে", ta: "பணம் செலுத்திய తర్వాత அல்லது சமையலறை பஞ்சிற்கு முன் பில்கள் மாற்றப்பட்டன", te: "చెల్లింపు తర్వాత లేదా కిచెన్ పంచ్ ముందు బిల్లులు మార్చబడ్డాయి" };
translations['fraud.types.fakeDiscounts'] = { en: "Fake Discounts/Voids", fr: "Faux rabais/annulations", hi: "नकली छूट/शून्य", bn: "নকল ডিসকাউন্ট/ভয়েড", ta: "போலி தள்ளுபடிகள்/வெற்றிடங்கள்", te: "నకిలీ డిస్కౌంట్లు/వాయిడ్లు" };
translations['fraud.types.fakeDiscountsDesc'] = { en: "Unauthorized reductions to steal money", fr: "Réductions non autorisées pour voler de l'argent", hi: "पैसे चुराने के लिए अनधिकृत कटौती", bn: "টাকা চুরির জন্য অননুমোদিত হ্রাস", ta: "பணத்தைத் திருட அங்கீகரிக்கப்படாத குறைப்புகள்", te: "డబ్బు దొంగిలించడానికి అనధికార తగ్గింపులు" };
translations['fraud.types.inventoryManipulation'] = { en: "Inventory Manipulation", fr: "Manipulation des stocks", hi: "इन्वेंटरी में हेरफेर", bn: "ইনভেন্টরি ম্যানিপুলেশন", ta: "சரக்கு கையாளுதல்", te: "ఇన్వెంటరీ మానిప్యులేషన్" };
translations['fraud.types.inventoryManipulationDesc'] = { en: "Falsified consumption or wastage entries", fr: "Fausses écritures de consommation ou de gaspillage", hi: "गलत खपत या बर्बादी की प्रविष्टियाँ", bn: "মিথ্যা খরচ বা অপচয়ের এন্ট্রি", ta: "தவறான நுகர்வு அல்லது விரயம் பதிவுகள்", te: "తప్పుడు వినియోగం లేదా వ్యర్థాల నమోదులు" };
translations['fraud.types.unauthorizedRefunds'] = { en: "Unauthorized Refunds", fr: "Remboursements non autorisés", hi: "अनधिकृत रिफंड", bn: "অননুমোদিত ফেরত", ta: "அங்கீகரிக்கப்படாத பணத்தைத் திரும்பப்பெறுதல்", te: "అనధికార వాపసులు" };
translations['fraud.types.unauthorizedRefundsDesc'] = { en: "Refunding to friends or dummy customers", fr: "Remboursement à des amis ou à de faux clients", hi: "दोस्तों या डमी ग्राहकों को रिफंड करना", bn: "বন্ধু বা ডামি গ্রাহকদের ফেরত দেওয়া", ta: "நண்பர்கள் அல்லது போலி வாடிக்கையாளர்களுக்குப் பணத்தைத் திரும்பப் பெறுதல்", te: "స్నేహితులు లేదా డమ్మీ కస్టమర్లకు వాపసు ఇవ్వడం" };
translations['fraud.types.parallelBilling'] = { en: "Parallel Billing", fr: "Facturation parallèle", hi: "समानांतर बिलिंग", bn: "সমান্তরাল বিলিং", ta: "இணை பில்லிங்", te: "సమాంతర బిల్లింగ్" };
translations['fraud.types.parallelBillingDesc'] = { en: "Duplicate bills or ghost orders", fr: "Factures en double ou commandes fantômes", hi: "डुप्लीकेट बिल या घोस्ट ऑर्डर", bn: "ডুপ্লিকেট বিল বা ভূত অর্ডার", ta: "நகல் பில்கள் அல்லது பேய் ஆர்டர்கள்", te: "నకిలీ బిల్లులు లేదా ఘోస్ట్ ఆర్డర్‌లు" };
translations['fraud.types.shiftIdAbuse'] = { en: "Shift ID Abuse", fr: "Abus d'ID de quart", hi: "शिफ्ट आईडी का दुरुपयोग", bn: "শিফট আইডি অপব্যবহার", ta: "ஷிப்ட் ஐடி துஷ்பிரயோகம்", te: "షిఫ్ట్ ID దుర్వినియోగం" };
translations['fraud.types.shiftIdAbuseDesc'] = { en: "Using another staff's credentials to hide identity", fr: "Utilisation des informations d'identification d'un autre membre du personnel pour cacher son identité", hi: "पहचान छिपाने के लिए दूसरे स्टाफ के क्रेडेंशियल्स का उपयोग करना", bn: "পরিচয় গোপন করতে অন্য কর্মীদের শংসাপত্র ব্যবহার করা", ta: "அடையாளத்தை மறைக்க மற்றொரு ஊழியரின் நற்சான்றிதழைப் பயன்படுத்துதல்", te: "గుర్తింపును దాచడానికి మరొక సిబ్బంది ఆధారాలను ఉపయోగించడం" };
translations['fraud.features.title'] = { en: "Our Proactive Fraud Prevention Features", fr: "Nos fonctionnalités proactives de prévention de la fraude", hi: "हमारी सक्रिय धोखाधड़ी रोकथाम सुविधाएँ", bn: "আমাদের সক্রিয় জালিয়াতি প্রতিরোধ বৈশিষ্ট্য", ta: "எங்கள் செயலூக்கமான மோசடி தடுப்பு அம்சங்கள்", te: "మా చురుకైన మోసం నివారణ ఫీచర్లు" };
translations['fraud.features.staffAccounts'] = { en: "Staff Accounts & Permissions", fr: "Comptes et autorisations du personnel", hi: "कर्मचारी खाते और अनुमतियाँ", bn: "কর্মী অ্যাকাউন্ট এবং অনুমতি", ta: "ஊழியர் கணக்குகள் & அனுமதிகள்", te: "సిబ్బంది ఖాతాలు & అనుమతులు" };
translations['fraud.features.staffAccountsDesc'] = { en: "Role-based access control for all sensitive actions", fr: "Contrôle d'accès basé sur les rôles pour toutes les actions sensibles", hi: "सभी संवेदनशील कार्यों के लिए भूमिका-आधारित अभिगम नियंत्रण", bn: "সমস্ত সংবেদনশীল কর্মের জন্য ভূমিকা-ভিত্তিক অ্যাক্সেস নিয়ন্ত্রণ", ta: "அனைத்து முக்கியமான செயல்களுக்கும் பங்கு அடிப்படையிலான அணுகல் கட்டுப்பாடு", te: "అన్ని సున్నితమైన చర్యల కోసం పాత్ర-ఆధారిత యాక్సెస్ నియంత్రణ" };
translations['fraud.features.dashboard'] = { en: "Fraud Debugging Dashboard", fr: "Tableau de bord de débogage de la fraude", hi: "धोखाधड़ी डिबगिंग डैशबोर्ड", bn: "জালিয়াতি ডিবাগিং ড্যাশবোর্ড", ta: "மோசடி பிழைத்திருத்த டாஷ்போர்டு", te: "మోసం డీబగ్గింగ్ డాష్‌బోర్డ్" };
translations['fraud.features.dashboardDesc'] = { en: "Complete audit trail of all system activities", fr: "Piste d'audit complète de toutes les activités du système", hi: "सभी सिस्टम गतिविधियों का पूरा ऑडिट ट्रेल", bn: "সমস্ত সিস্টেম কার্যকলাপের সম্পূর্ণ অডিট ট্রেল", ta: "அனைத்து கணினி செயல்பாடுகளின் முழுமையான தணிக்கை தடம்", te: "అన్ని సిస్టమ్ కార్యకలాపాల పూర్తి ఆడిట్ ట్రయల్" };
translations['fraud.features.realTimeAlerts'] = { en: "Real-Time Alerts", fr: "Alertes en temps réel", hi: "वास्तविक समय अलर्ट", bn: "রিয়েল-টাইম সতর্কতা", ta: "நிகழ்நேர எச்சரிக்கைகள்", te: "నిజ-సమయ హెచ్చరికలు" };
translations['fraud.features.realTimeAlertsDesc'] = { en: "Instant notifications for suspicious activities", fr: "Notifications instantanées pour les activités suspectes", hi: "संदिग्ध गतिविधियों के लिए तत्काल सूचनाएं", bn: "সন্দেহজনক কার্যকলাপের জন্য তাত্ক্ষণিক বিজ্ঞপ্তি", ta: "சந்தேகத்திற்கிடமான செயல்பாடுகளுக்கு உடனடி அறிவிப்புகள்", te: "అనుమానాస్పద కార్యకలాపాలకు తక్షణ నోటిఫికేషన్‌లు" };
translations['fraud.howItWorks.title'] = { en: "How Gustasi Protects Your Business", fr: "Comment Gustasi protège votre entreprise", hi: "गुस्तासी आपके व्यवसाय की सुरक्षा कैसे करता है", bn: "গুস্তাসি কীভাবে আপনার ব্যবসাকে রক্ষা করে", ta: "குஸ்தாசி உங்கள் வணிகத்தை எவ்வாறு பாதுகாக்கிறது", te: "గుస్తాసి మీ వ్యాపారాన్ని ఎలా కాపాడుతుంది" };
translations['fraud.howItWorks.step1'] = { en: "Monitor Transactions", fr: "Surveiller les transactions", hi: "लेन-देन की निगरानी करें", bn: "লেনদেন নিরীক্ষণ করুন", ta: "பரிவர்த்தனைகளைக் கண்காணிக்கவும்", te: "లావాదేవీలను పర్యవేక్షించండి" };
translations['fraud.howItWorks.step1Desc'] = { en: "Our AI-powered system analyzes every transaction in real-time.", fr: "Notre système alimenté par l'IA analyse chaque transaction en temps réel.", hi: "हमारा एआई-संचालित सिस्टम वास्तविक समय में हर लेनदेन का विश्लेषण करता है।", bn: "আমাদের এআই-চালিত সিস্টেম রিয়েল-টাইমে প্রতিটি লেনদেন বিশ্লেষণ করে।", ta: "எங்கள் AI- శక్తిமிக்க அமைப்பு ஒவ்வொரு பரிவர்த்தனையையும் நிகழ்நேரத்தில் பகுப்பாய்வு செய்கிறது.", te: "మా AI- ఆధారిత సిస్టమ్ ప్రతి లావాదేవీని నిజ సమయంలో విశ్లేషిస్తుంది." };
translations['fraud.howItWorks.step2'] = { en: "Detect Anomalies", fr: "Détecter les anomalies", hi: "विसंगतियों का पता लगाएं", bn: "অসঙ্গতি সনাক্ত করুন", ta: "முரண்பாடுகளைக் கண்டறியவும்", te: "అసాధారణతలను గుర్తించండి" };
translations['fraud.howItWorks.step2Desc'] = { en: "Suspicious patterns and deviations from the norm are flagged instantly.", fr: "Les schémas suspects et les écarts par rapport à la norme sont signalés instantanément.", hi: "संदिग्ध पैटर्न और सामान्य से विचलन तुरंत चिह्नित किए जाते हैं।", bn: "সন্দেহজনক নিদর্শন এবং আদর্শ থেকে বিচ্যুতি অবিলম্বে পতাকাঙ্কিত হয়।", ta: "சந்தேகத்திற்கிடமான வடிவங்கள் மற்றும் விதிமுறைகளிலிருந்து விலகல்கள் உடனடியாகக் கொடியிடப்படுகின்றன.", te: "అనుమానాస్పద నమూనాలు మరియు ప్రమాణం నుండి విచలనాలు తక్షణమే ఫ్లాగ్ చేయబడతాయి." };
translations['fraud.howItWorks.step3'] = { en: "Alert & Report", fr: "Alerter et signaler", hi: "अलर्ट और रिपोर्ट", bn: "সতর্কতা এবং প্রতিবেদন", ta: "எச்சரிக்கை & அறிக்கை", te: "హెచ్చరిక & నివేదిక" };
translations['fraud.howItWorks.step3Desc'] = { en: "Receive detailed alerts and reports to take immediate action.", fr: "Recevez des alertes et des rapports détaillés pour prendre des mesures immédiates.", hi: "तत्काल कार्रवाई करने के लिए विस्तृत अलर्ट और रिपोर्ट प्राप्त करें।", bn: "অবিলম্বে ব্যবস্থা নিতে বিস্তারিত সতর্কতা এবং প্রতিবেদন গ্রহণ করুন।", ta: "உடனடி நடவடிக்கை எடுக்க விரிவான எச்சரிக்கைகள் மற்றும் அறிக்கைகளைப் பெறுங்கள்.", te: "తక్షణ చర్య తీసుకోవడానికి వివరణాత్మక హెచ్చరికలు మరియు నివేదికలను స్వీకరించండి." };
translations['fraud.cta.title'] = { en: "Ready to Eliminate Fraud?", fr: "Prêt à éliminer la fraude ?", hi: "धोखाधड़ी को खत्म करने के लिए तैयार हैं?", bn: "জালিয়াতি নির্মূল করতে প্রস্তুত?", ta: "மோசடியை அகற்றத் தயாரா?", te: "మోసాన్ని తొలగించడానికి సిద్ధంగా ఉన్నారా?" };
translations['fraud.cta.subtitle'] = { en: "Join thousands of restaurants that trust our system to safeguard their business and boost their bottom line.", fr: "Rejoignez des milliers de restaurants qui font confiance à notre système pour protéger leur entreprise et augmenter leurs bénéfices.", hi: "उन हजारों रेस्तरां में शामिल हों जो अपने व्यवसाय की सुरक्षा और अपनी निचली रेखा को बढ़ावा देने के लिए हमारे सिस्टम पर भरोसा करते हैं।", bn: "হাজার হাজার রেস্তোরাঁর সাথে যোগ দিন যারা তাদের ব্যবসাকে সুরক্ষিত রাখতে এবং তাদের নীচের লাইনকে বাড়িয়ে তুলতে আমাদের সিস্টেমকে বিশ্বাস করে।", ta: "தங்கள் வணிகத்தைப் பாதுகாக்கவும், தங்கள் லாபத்தை அதிகரிக்கவும் எங்கள் அமைப்பை நம்பும் ஆயிரக்கணக்கான உணவகங்களுடன் சேருங்கள்.", te: "వారి వ్యాపారాన్ని కాపాడుకోవడానికి మరియు వారి బాటమ్ లైన్‌ను పెంచడానికి మా సిస్టమ్‌ను విశ్వసించే వేలాది రెస్టారెంట్‌లతో చేరండి." };
translations['fraud.cta.scheduleDemo'] = { en: "Schedule a Demo", fr: "Planifier une démo", hi: "डेमो शेड्यूल करें", bn: "একটি ডেমো সময়সূচী", ta: "டெமோவைத் திட்டமிடுங்கள்", te: "డెమోను షెడ్యూల్ చేయండి" };
translations['fraud.cta.contactSales'] = { en: "Contact Sales", fr: "Contacter les ventes", hi: "बिक्री से संपर्क करें", bn: "বিক্রয় যোগাযোগ করুন", ta: "விற்பனையைத் தொடர்பு கொள்ளுங்கள்", te: "అమ్మకాలను సంప్రదించండి" };
translations['fraud.cta.TOS'] = { en: "No credit card required • 14-day free trial • Cancel anytime", fr: "Aucune carte de crédit requise • Essai gratuit de 14 jours • Annulez à tout moment", hi: "कोई क्रेडिट कार्ड आवश्यक नहीं • 14-दिन का निःशुल्क परीक्षण • कभी भी रद्द करें", bn: "কোন ক্রেডিট কার্ডের প্রয়োজন নেই • ১৪ দিনের বিনামূল্যে ট্রায়াল • যে কোন সময় বাতিল করুন", ta: "கிரெடிட் கார்டு தேவையில்லை • 14-நாள் இலவச சோதனை • எப்போது வேண்டுமானாலும் ரத்துசெய்யலாம்", te: "క్రెడిట్ కార్డ్ అవసరం లేదు • 14-రోజుల ఉచిత ట్రయల్ • ఎప్పుడైనా రద్దు చేయండి" };

// Testimonial Section
translations['fraud.testimonial.quote'] = { en: "Gustasi's fraud detection saved us over ₹50,000 in the first month alone. It's an essential tool for any serious restaurant owner.", fr: "La détection de fraude de Gustasi nous a permis d'économiser plus de 50 000 ₹ dès le premier mois. C'est un outil essentiel pour tout propriétaire de restaurant sérieux.", hi: "गुस्तासी की धोखाधड़ी का पता लगाने वाली प्रणाली ने हमें पहले महीने में ही ₹50,000 से अधिक की बचत कराई। यह किसी भी गंभीर रेस्तरां मालिक के लिए एक आवश्यक उपकरण है।", bn: "গুস্তাসির জালিয়াতি সনাক্তকরণ আমাদের প্রথম মাসেই ₹৫০,০০০ এর বেশি বাঁচিয়েছে। এটি যেকোনো গুরুতর রেস্তোরাঁর মালিকের জন্য একটি অপরিহার্য হাতিয়ার।", ta: "குஸ்தாசியின் மோசடி கண்டறிதல் முதல் மாதத்திலேயே எங்களுக்கு ₹50,000க்கு மேல் சேமித்தது. இது எந்தவொரு தீவிர உணவக உரிமையாளருக்கும் ஒரு அத்தியாவசிய கருவியாகும்.", te: "గుస్తాసి యొక్క మోసం గుర్తింపు మాకు మొదటి నెలలోనే ₹50,000 కంటే ఎక్కువ ఆదా చేసింది. ఇది ఏ తీవ్రమైన రెస్టారెంట్ యజమానికైనా అవసరమైన సాధనం." };
translations['fraud.testimonial.author'] = { en: "- Prakash Rao, Owner of Deccan Spice", fr: "- Prakash Rao, propriétaire de Deccan Spice", hi: "- प्रकाश राव, डेक्कन स्पाइस के मालिक", bn: "- প্রকাশ রাও, ডেকান স্পাইসের মালিক", ta: "- பிரகாஷ் ராவ், டெக்கான் ஸ்பைஸின் உரிமையாளர்", te: "- ప్రకాష్ రావు, డెక్కన్ స్పైస్ యజమాని" };

// Detailed Features Section
translations['fraud.detailedFeatures.auditTrail.title'] = { en: "Real-time Audit Trail", fr: "Piste d'audit en temps réel", hi: "वास्तविक समय ऑडिट ट्रेल", bn: "রিয়েল-টাইম অডিট ট্রেল", ta: "நிகழ்நேர தணிக்கை தடம்", te: "నిజ-సమయ ఆడిట్ ట్రయల్" };
translations['fraud.detailedFeatures.auditTrail.description'] = { en: "Track every action, from order creation to payment, with a tamper-proof log. Filter by staff, time, or action type to pinpoint issues instantly.", fr: "Suivez chaque action, de la création de la commande au paiement, avec un journal inviolable. Filtrez par personnel, heure ou type d'action pour identifier instantanément les problèmes.", hi: "ऑर्डर बनाने से लेकर भुगतान तक हर कार्रवाई को एक छेड़छाड़-प्रूफ लॉग के साथ ट्रैक करें। समस्याओं को तुरंत इंगित करने के लिए कर्मचारियों, समय या कार्रवाई के प्रकार के अनुसार फ़िल्टर करें।", bn: "অর্ডার তৈরি থেকে শুরু করে অর্থপ্রদান পর্যন্ত প্রতিটি কাজ একটি টেম্পার-প্রুফ লগের মাধ্যমে ট্র্যাক করুন। সমস্যাগুলি অবিলম্বে চিহ্নিত করতে স্টাফ, সময় বা কর্মের ধরন অনুসারে ফিল্টার করুন।", ta: "ஆர்டர் உருவாக்கம் முதல் பணம் செலுத்துதல் வரை ஒவ்வொரு செயலையும் சேதப்படுத்த முடியாத பதிவு மூலம் கண்காணிக்கவும். சிக்கல்களை உடனடியாகக் கண்டறிய ஊழியர்கள், நேரம் அல்லது செயலின் வகைப்படி வடிகட்டவும்.", te: "ఆర్డర్ సృష్టి నుండి చెల్లింపు వరకు ప్రతి చర్యను ట్యాంపర్ ప్రూఫ్ లాగ్‌తో ట్రాక్ చేయండి. సమస్యలను తక్షణమే గుర్తించడానికి సిబ్బంది, సమయం లేదా చర్య రకం ద్వారా ఫిల్టర్ చేయండి." };
translations['fraud.detailedFeatures.auditTrail.item1'] = { en: "Void/Discount tracking with reason codes.", fr: "Suivi des annulations/remises avec codes de motif.", hi: "कारण कोड के साथ शून्य/छूट ट्रैकिंग।", bn: "কারণ কোড সহ বাতিল/ডিসকাউন্ট ট্র্যাকিং।", ta: "காரணக் குறியீடுகளுடன் செல்லாத/தள்ளுபடி கண்காணிப்பு.", te: "కారణ కోడ్‌లతో వాయిడ్/డిస్కౌంట్ ట్రాకింగ్." };
translations['fraud.detailedFeatures.auditTrail.item2'] = { en: "KOT (Kitchen Order Ticket) reprint monitoring.", fr: "Surveillance de la réimpression des KOT (tickets de commande de cuisine).", hi: "KOT (किचन ऑर्डर टिकट) पुनर्मुद्रण की निगरानी।", bn: "KOT (কিচেন অর্ডার টিকেট) পুনঃমুদ্রণ পর্যবেক্ষণ।", ta: "KOT (சமையலறை ஆர்டர் டிக்கெட்) மறுபதிப்பு கண்காணிப்பு.", te: "KOT (కిచెన్ ఆర్డర్ టికెట్) పునర్ముద్రణ పర్యవేక్షణ." };
translations['fraud.detailedFeatures.auditTrail.item3'] = { en: "Login/logout and shift change history.", fr: "Historique de connexion/déconnexion et de changement de quart.", hi: "लॉगिन/लॉगआउट और शिफ्ट परिवर्तन का इतिहास।", bn: "লগইন/লগআউট এবং শিফট পরিবর্তনের ইতিহাস।", ta: "உள்நுழைவு/வெளியேறுதல் மற்றும் ஷிப்ட் மாற்ற வரலாறு.", te: "లాగిన్/లాగ్అవుట్ మరియు షిఫ్ట్ మార్పు చరిత్ర." };
translations['fraud.detailedFeatures.visibility.title'] = { en: "Unmatched Visibility", fr: "Visibilité inégalée", hi: "अद्वितीय दृश्यता", bn: " অতুলনীয় দৃশ্যমানতা", ta: "ஈடு இணையற்ற தெரிவுநிலை", te: "సాటిలేని దృశ్యమానత" };
translations['fraud.detailedFeatures.visibility.description'] = { en: "Our dashboard doesn't just show you data; it gives you actionable insights. Understand your restaurant's operational patterns and spot deviations that could indicate fraud.", fr: "Notre tableau de bord ne se contente pas de vous montrer des données ; il vous donne des informations exploitables. Comprenez les schémas opérationnels de votre restaurant et repérez les écarts qui pourraient indiquer une fraude.", hi: "हमारा डैशबोर्ड आपको केवल डेटा नहीं दिखाता है; यह आपको कार्रवाई योग्य अंतर्दृष्टि देता है। अपने रेस्तरां के परिचालन पैटर्न को समझें और उन विचलनों को पहचानें जो धोखाधड़ी का संकेत दे सकते हैं।", bn: "আমাদের ড্যাশবোর্ড আপনাকে শুধু ডেটা দেখায় না; এটি আপনাকে কার্যকরী অন্তর্দৃষ্টি দেয়। আপনার রেস্তোরাঁর অপারেশনাল প্যাটার্ন বুঝুন এবং জালিয়াতির ইঙ্গিত দিতে পারে এমন বিচ্যুতিগুলি চিহ্নিত করুন।", ta: "எங்கள் டாஷ்போர்டு உங்களுக்கு தரவைக் காண்பிப்பது மட்டுமல்லாமல்; இது உங்களுக்கு செயல்படக்கூடிய நுண்ணறிவுகளை வழங்குகிறது. உங்கள் உணவகத்தின் செயல்பாட்டு முறைகளைப் புரிந்துகொண்டு, மோசடியைக் குறிக்கக்கூடிய விலகல்களைக் கண்டறியவும்.", te: "మా డాష్‌బోర్డ్ మీకు డేటాను చూపడమే కాదు; ఇది మీకు చర్య తీసుకోదగిన అంతర్దృష్టులను అందిస్తుంది. మీ రెస్టారెంట్ యొక్క కార్యాచరణ నమూనాలను అర్థం చేసుకోండి మరియు మోసాన్ని సూచించే విచలనాలను గుర్తించండి." };
translations['fraud.detailedFeatures.visibility.cta'] = { en: "Learn More About Analytics", fr: "En savoir plus sur les analyses", hi: "एनालिटिक्स के बारे में और जानें", bn: "অ্যানালিটিক্স সম্পর্কে আরও জানুন", ta: "பகுப்பாய்வு பற்றி மேலும் அறிக", te: "విశ్లేషణల గురించి మరింత తెలుసుకోండి" };

// Time Slots
translations['timeSlots.nineAM'] = { en: "09:00 AM", fr: "09:00", hi: "09:00 पूर्वाह्न", bn: "09:00 AM", ta: "காலை 9:00", te: "ఉదయం 9:00" };
translations['timeSlots.tenAM'] = { en: "10:00 AM", fr: "10:00", hi: "10:00 पूर्वाह्न", bn: "10:00 AM", ta: "காலை 10:00", te: "ఉదయం 10:00" };
translations['timeSlots.elevenAM'] = { en: "11:00 AM", fr: "11:00", hi: "11:00 पूर्वाह्न", bn: "11:00 AM", ta: "காலை 11:00", te: "ఉదయం 11:00" };
translations['timeSlots.twelvePM'] = { en: "12:00 PM", fr: "12:00", hi: "12:00 अपराह्न", bn: "12:00 PM", ta: "மதியம் 12:00", te: "మధ్యాహ్నం 12:00" };
translations['timeSlots.onePM'] = { en: "01:00 PM", fr: "13:00", hi: "01:00 अपराह्न", bn: "01:00 PM", ta: "மாலை 1:00", te: "మధ్యాహ్నం 1:00" };
translations['timeSlots.twoPM'] = { en: "02:00 PM", fr: "14:00", hi: "02:00 अपराह्न", bn: "02:00 PM", ta: "மாலை 2:00", te: "మధ్యాహ్నం 2:00" };
translations['timeSlots.threePM'] = { en: "03:00 PM", fr: "15:00", hi: "03:00 अपराह्न", bn: "03:00 PM", ta: "மாலை 3:00", te: "మధ్యాహ్నం 3:00" };
translations['timeSlots.fourPM'] = { en: "04:00 PM", fr: "16:00", hi: "04:00 अपराह्न", bn: "04:00 PM", ta: "மாலை 4:00", te: "మధ్యాహ్నం 4:00" };

export function t(key: string, replacements?: { [key: string]: string | number }): string {
  const rawTranslation = translations[key]?.[currentLanguage] || translations[key]?.en;
  
  let translationString = Array.isArray(rawTranslation) 
    ? rawTranslation[0] 
    : rawTranslation as string;

  if (!translationString) {
    return key;
  }

  if (replacements) {
    Object.keys(replacements).forEach(placeholder => {
      translationString = translationString.replace(
        new RegExp(`{${placeholder}}`, 'g'), 
        String(replacements[placeholder])
      );
    });
  }

  return translationString;
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
  if (['en', 'fr', 'hi', 'bn', 'ta', 'te'].includes(lang)) {
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
      return (savedLang || (['en', 'fr', 'hi', 'bn', 'ta', 'te'].includes(browserLang) ? browserLang : 'en')) as SupportedLanguage;
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
