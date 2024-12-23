// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotEnv = require('dotenv')
// const bundleAnalyzer = require('@next/bundle-analyzer')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSourceMaps = require('@zeit/next-source-maps')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const redirectsJson = require('./src/data/redirects.json')

dotEnv.config()

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// })

const SENTRY_DSN = process.env.SENTRY_DSN
const SENTRY_ORG = process.env.SENTRY_ORG
const SENTRY_PROJECT = process.env.SENTRY_PROJECT
const SENTRY_AUTH_TOKEN = process.env.SENTRY_AUTH_TOKEN
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID
const ALGOLIA_SEARCH_KEY = process.env.ALGOLIA_SEARCH_KEY
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY
const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID
const SANITY_DATASET = process.env.SANITY_DATASET
const SANITY_AUTH_TOKEN = process.env.SANITY_AUTH_TOKEN
const SANITY_READ_TOKEN = process.env.SANITY_READ_TOKEN
const POSTMARK_KEY = process.env.POSTMARK_KEY
const STOREFRONT_ENV = process.env.STOREFRONT_ENV
const EXCHANGE_RATE_API_KEY = process.env.EXCHANGE_RATE_API_KEY
const SHOPIFY_SHOP_NAME = process.env.SHOPIFY_SHOP_NAME
const SHOPIFY_CHECKOUT_DOMAIN = process.env.SHOPIFY_CHECKOUT_DOMAIN
const FB_PIXEL_ID = process.env.FB_PIXEL_ID
const FB_PRDOUCT_CATALOG_ID = process.env.FB_PRDOUCT_CATALOG_ID
const SHOW_IN_STOCK_INDICATORS = process.env.SHOW_IN_STOCK_INDICATORS
const SKIP_BUILD_STATIC_GENERATION = process.env.SKIP_BUILD_STATIC_GENERATION
const VERCEL_GITHUB_COMMIT_SHA = process.env.VERCEL_GITHUB_COMMIT_SHA
const VERCEL_URL = process.env.VERCEL_URL

const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN
const SHOPIFY_STOREFRONT_URL = process.env.SHOPIFY_STOREFRONT_URL
const SHOPIFY_GRAPHQL_URL = process.env.SHOPIFY_GRAPHQL_URL

module.exports = withSourceMaps({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['discobabes.store'],
  },
  experimental: {
    scrollRestoration: true,
  },
  // webpack5: false,
  publicRuntimeConfig: {
    EXCHANGE_RATE_API_KEY,
    SANITY_PROJECT_ID,
    SANITY_DATASET,
    SANITY_READ_TOKEN,
    SANITY_AUTH_TOKEN,
    SENTRY_DSN,
    ALGOLIA_APP_ID,
    ALGOLIA_SEARCH_KEY,
    STOREFRONT_ENV,
    SHOPIFY_CHECKOUT_DOMAIN,
    SHOPIFY_SHOP_NAME,
    FB_PIXEL_ID,
    FB_PRDOUCT_CATALOG_ID,
    SHOW_IN_STOCK_INDICATORS,
    SKIP_BUILD_STATIC_GENERATION,

SHOPIFY_STOREFRONT_TOKEN,
SHOPIFY_STOREFRONT_URL,
SHOPIFY_GRAPHQL_URL,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
    ALGOLIA_ADMIN_KEY,
    POSTMARK_KEY,
  },
  redirects: async function redirects() {
    const redirectRules = redirectsJson.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: false,
    }))
    return [
      ...redirectRules,
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-vercel-ip-country',
            value: 'KR',
          },
        ],
        permanent: false,
        destination: 'https://discobabes.store',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/api/revalidateAction',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'Origin, Content-Type, Authorization, X-Auth-Token, X-Requested-With',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|woff2|otf|woff|)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ]
  },
  webpack: (config, { isServer, buildId }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
      }),
    )

    const release = VERCEL_GITHUB_COMMIT_SHA || VERCEL_URL

    if (
      release &&
      SENTRY_DSN &&
      SENTRY_ORG &&
      SENTRY_PROJECT &&
      SENTRY_AUTH_TOKEN
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          include: '.next',
          ignore: ['node_modules'],
          urlPrefix: '~/_next',
          release,
        }),
      )
    }

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    return config
  },
})
