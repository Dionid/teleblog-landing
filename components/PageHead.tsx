import * as React from 'react'
import Head from 'next/head'

import * as config from '@/lib/config'
import * as types from '@/lib/types'
import { getSocialImageUrl } from '@/lib/get-social-image-url'

export const PageHead: React.FC<
  types.PageProps & {
    title?: string
    description?: string
    image?: string
    url?: string
  }
> = ({ site, title, description, pageId, image, url }) => {
  const rssFeedUrl = `${config.host}/feed`

  title = title ?? site?.name
  description = description ?? site?.description

  const socialImageUrl = image || getSocialImageUrl(pageId)

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />
      <meta
        name='keywords'
        content='telegram, blog, channel, social media, content management'
      />

      {site && (
        <>
          <meta property='og:site_name' content={site.name} />
          <meta property='twitter:domain' content={site.domain} />
        </>
      )}

      {config.twitter && (
        <meta name='twitter:creator' content={`@${config.twitter}`} />
      )}

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}

      {socialImageUrl ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={socialImageUrl} />
          <meta property='og:image' content={socialImageUrl} />
        </>
      ) : (
        <meta name='twitter:card' content='summary' />
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
          <meta property='twitter:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={site?.name}
      />

      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <title>{title}</title>

      <script type='application/ld+json'>
        {`{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "TeleBlog",
        "description": "Получите готовый сайт из вашего телеграм канала и новых подписчиков с помощью органического SEO трафика",
        "url": "https://teleblog.net",
        "applicationCategory": "WebApplication",
        "offers": {
          "@type": "Offer",
          "price": "10",
          "priceCurrency": "USD"
        },
        "creator": {
          "@type": "Organization",
          "name": "TeleBlog"
        }
      }`}
      </script>
    </Head>
  )
}
