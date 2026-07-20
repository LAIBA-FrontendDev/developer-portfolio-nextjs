import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: ' https://my-portfolio-hsol-367dncwvt-laiba15.vercel.app/',
  }
}
