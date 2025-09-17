import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  ogType?: string;
  ogImageUrl?: string;
  ogTwitterCard?: string;
  structuredData?: object;
  keywords?: string[];
  robots?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  product?: {
    name: string;
    image: string;
    description: string;
    brand: string;
    sku?: string;
    offers: {
      price: string;
      priceCurrency: string;
      availability: 'InStock' | 'OutOfStock' | 'PreOrder';
    };
  };
}

export default function EnhancedSEO({
  title = "Gustasi - Ultimate All-in-One Restaurant POS System",
  description = "Automate orders, manage stock, and drive profits with Gustasi's intelligent POS platform for restaurants, bars, cafes, and home chefs.",
  ogType = "website",
  ogImageUrl = "https://www.gustasi.com/og-image.jpg",
  ogTwitterCard = "summary_large_image",
  structuredData,
  keywords = ["restaurant POS", "point of sale", "restaurant management", "POS system", "restaurant software"],
  robots = "index, follow",
  article,
  faqs = [],
  product
}: SEOProps) {
  const location = useLocation();
  const siteUrl = "https://www.gustasi.com";
  const siteName = "Gustasi";
  const twitterHandle = "@gustasi";

  // Get path without language prefix
  const pathWithoutLang = location.pathname.replace(/^\/(en|fr|hi|bn|ta)/, '');
  const canonicalUrl = `${siteUrl}${pathWithoutLang || '/'}`;
  const currentLang = location.pathname.match(/^\/(en|fr|hi|bn|ta)/)?.[1] || 'en';

  // Default structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteUrl,
    "inLanguage": currentLang,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // FAQ Schema
  const faqStructuredData = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Product Schema
  const productStructuredData = product ? {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "sku": product.sku || "",
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": product.offers.priceCurrency,
      "price": product.offers.price,
      "availability": `https://schema.org/${product.offers.availability}`,
      "itemCondition": "https://schema.org/NewCondition"
    }
  } : null;

  // Language configuration
  const languages: { code: string; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'ta', name: 'தமிழ்' },
  ];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : `${currentLang}_${currentLang.toUpperCase()}`} />

      {/* Twitter */}
      <meta name="twitter:card" content={ogTwitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Article specific meta tags */}
      {article?.publishedTime && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags?.map((tag, index) => (
            <meta property="article:tag" content={tag} key={`tag-${index}`} />
          ))}
        </>
      )}

      {/* Language Alternatives */}
      {languages.map((lang) => (
        <link 
          key={lang.code} 
          rel="alternate" 
          hrefLang={lang.code} 
          href={`${siteUrl}${lang.code === 'en' ? '' : `/${lang.code}`}${pathWithoutLang}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${pathWithoutLang}`} />

      {/* Viewport & Theme Color */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />

      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* FAQ Schema */}
      {faqStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      )}

      {/* Product Schema */}
      {productStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      )}

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteName,
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          sameAs: [
            `https://twitter.com/${twitterHandle}`,
            'https://www.linkedin.com/company/gustasi',
            'https://www.facebook.com/gustasi',
            'https://www.instagram.com/gustasi'
          ]
        })}
      </script>

      {/* Breadcrumb structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteUrl
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: title,
              item: canonicalUrl
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
