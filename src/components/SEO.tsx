import { Helmet } from 'react-helmet-async';

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
  canonicalUrl = "https://yourdomain.com",
  ogType = "website",
  ogImageUrl = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogTwitterCard = "summary_large_image",
  structuredData,
}: SEOProps) {
  const siteName = "Gustasi";
  const siteUrl = "https://yourdomain.com";
  const twitterHandle = "@gustasi";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
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
