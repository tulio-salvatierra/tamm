import { Helmet } from "react-helmet-async";

type SEOMetaTagsProps = {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
};

const SEOMetaTags: React.FC<SEOMetaTagsProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}

        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
    </>
  );
};

export default SEOMetaTags;
