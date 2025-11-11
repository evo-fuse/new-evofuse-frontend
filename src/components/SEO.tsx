import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  noindex?: boolean
  nofollow?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title = "EvoFuse - Earn Games Online | Best Crypto Games with Real Rewards | 2048 & More",
  description = "Play the best crypto games online and earn real rewards! EvoFuse offers top blockchain games including 2048, Sudoku, and more. Start earning cryptocurrency while playing today.",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://www.evofuse.xyz/logo.png",
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage = "https://www.evofuse.xyz/logo.png",
  noindex = false,
  nofollow = false
}) => {
  // Build robots content
  const robotsContent = []
  if (noindex) robotsContent.push('noindex')
  if (nofollow) robotsContent.push('nofollow')
  if (!noindex && !nofollow) robotsContent.push('index', 'follow')
  
  const robots = robotsContent.length > 0 ? robotsContent.join(', ') : 'index, follow'

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="EvoFuse Logo" />
      <meta property="og:site_name" content="EvoFuse" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  )
}

export default SEO
