/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sms2lead.de',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
    '/404',
    '/500',
    '/api/*',
    '/_*',
  ],
  transform: async (config, path) => {
    // Custom transform function for URLs
    const priorities = {
      '/': 1.0,
      '/preis': 0.9,
      '/kontakt': 0.8,
      '/impressum': 0.3,
      '/datenschutz': 0.3,
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://sms2lead.de${path}`,
          hreflang: 'de-de',
        },
      ],
    }
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://sms2lead.de/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/404',
          '/500',
          '/api/*',
          '/_*',
          '/cdn-cgi/*',
          '/*.json$',
          '/*.js$',
          '/*.css$',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
        disallow: ['/api/*'],
      },
    ],
    additionalPaths: async (config) => [
      await config.transform(config, '/preis'),
      await config.transform(config, '/kontakt'),
    ],
  },
}
