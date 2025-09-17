import { useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { setLanguage } from '@/utils/localization';
import SEO from './SEO';

// Add any new languages you support to this array
const supportedLanguages = ['en', 'fr', 'hi', 'bn', 'ta', 'te'];

const LanguageHandler = () => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && supportedLanguages.includes(lang)) {
      setLanguage(lang as 'en' | 'fr' | 'hi' | 'bn' | 'ta' | 'te');
    } else {
      // Default to English if the language in the URL is not supported
      // or if there's no language code.
      navigate('/en', { replace: true });
    }
  }, [lang, navigate]);

  // Render SEO for the page and then the child routes
  return (
    <>
      <SEO />
      <Outlet />
    </>
  );
};

export default LanguageHandler;
