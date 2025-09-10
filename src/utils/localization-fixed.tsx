import React, { useState, useMemo, createContext, useContext } from 'react';

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
  // ... (keep all existing translations up to features.accessDesc)
  
  // Keep only one instance of features.accessDesc
  "features.accessDesc": {
    en: "Role-based access control for staff members",
    fr: "Contrôle d'accès basé sur les rôles pour le personnel",
    hi: "स्टाफ सदस्यों के लिए भूमिका-आधारित पहुंच नियंत्रण",
    bn: "স্টাফ সদস্যদের জন্য ভূমিকা-ভিত্তিক অ্যাক্সেস নিয়ন্ত্রণ",
    ta: "ஊழியர்களுக்கான பங்கு-சார்ந்த அணுகல் கட்டுப்பாடு",
    te: "సిబ్బంది సభ్యుల కోసం పాత్ర-ఆధారిత ప్రాప్యత నియంత్రణ"
  },
  
  // ... (keep all other existing translations after this point)
};

// Define the language context type
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState('en');
  const value = React.useMemo(() => ({
    language,
    setLanguage,
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): string => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context.language;
};

export const useSetLanguage = (): ((lang: string) => void) => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useSetLanguage must be used within a LanguageProvider');
  }
  return context.setLanguage;
};

export const t = (key: string, lang?: string) => {
  const language = lang || 'en';
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return the key if the path doesn't exist
    }
  }

  if (value && typeof value === 'object' && language in value) {
    return value[language];
  }

  return key; // Return the key if the language doesn't exist
};
