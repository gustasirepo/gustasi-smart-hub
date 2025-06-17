import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImageUrl?: string;
  ogTwitterCard?: string;
  structuredData?: object;
}

export default function SEO({
  title = "Gustasi - Ultimate All-in-One Restaurant POS System",
  description = "Automate orders, manage stock, and drive profits with Gustasi's intelligent POS platform for restaurants, bars, cafes, and home chefs.",
  ogType = "website",
  ogImageUrl = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogTwitterCard = "summary_large_image",
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const siteUrl = "https://www.gustasi.com";
  const siteName = "Gustasi";
  const twitterHandle = "@gustasi";

  // Assumes path is /:lang/..., so pathname.substring(3) gives the path without language
  const pathWithoutLang = location.pathname.length > 3 ? location.pathname.substring(3) : '';
  const canonicalUrl = `${siteUrl}${location.pathname}`;


  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang tags for multilingual SEO */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${pathWithoutLang}`} />
      <link rel="alternate" hrefLang="fr" href={`${siteUrl}/fr${pathWithoutLang}`} />
      <link rel="alternate" hrefLang="hi" href={`${siteUrl}/hi${pathWithoutLang}`} />
      <link rel="alternate" hrefLang="bn" href={`${siteUrl}/bn${pathWithoutLang}`} />
      <link rel="alternate" hrefLang="ta" href={`${siteUrl}/ta${pathWithoutLang}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en${pathWithoutLang}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={ogTwitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
