import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

// const { POSTMARK_KEY, ALGOLIA_ADMIN_KEY } = serverRuntimeConfig
const {
  // EXCHANGE_RATE_API_KEY,
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_AUTH_TOKEN,
  SANITY_READ_TOKEN,
  // ALGOLIA_APP_ID,
  // ALGOLIA_SEARCH_KEY,
  // SENTRY_DSN,
// STOREFRONT_ENV,
// SHOPIFY_CHECKOUT_DOMAIN,
// SHOPIFY_SHOP_NAME,
  // FB_PIXEL_ID,
  // FB_PRDOUCT_CATALOG_ID,
  // SHOW_IN_STOCK_INDICATORS,
} = publicRuntimeConfig

// const ALGOLIA_API_KEY =
//   typeof window === 'undefined' ? ALGOLIA_ADMIN_KEY : ALGOLIA_SEARCH_KEY

// if (typeof window !== 'undefined' && ALGOLIA_ADMIN_KEY) {
//   throw new Error('You must not provide the browser with the algolia admin key')
// }
// if (typeof window !== 'undefined' && POSTMARK_KEY) {
//   throw new Error('You must not provide the browser with the postmark key')
// }

if (!SANITY_PROJECT_ID)
  throw new Error('You must include a SANITY_PROJECT_ID variable')
if (!SANITY_DATASET)
  throw new Error('You must include a SANITY_DATASET variable')
if (!SANITY_AUTH_TOKEN)
  throw new Error('You must include a SANITY_AUTH_TOKEN variable')
// if (!ALGOLIA_API_KEY) throw new Error('You must provide an algolia API Key')
// if (!ALGOLIA_APP_ID) throw new Error('You must provide an algolia app ID')
// if (!SENTRY_DSN) throw new Error('You must provide a sentry DSN')
// if (!STOREFRONT_ENV) throw new Error('You must provide a storefront ENV')
// if (!SHOPIFY_CHECKOUT_DOMAIN)
//   throw new Error('You must provide a storefront checkout domain')
// if (!FB_PIXEL_ID) throw new Error('You must provide a facbook pixel id')
// if (!FB_PRDOUCT_CATALOG_ID)
//   throw new Error('You must provide a facbook product catalog id')

// if (!EXCHANGE_RATE_API_KEY)
//   throw new Error('You must include a EXCHANGE_RATE_API_KEY variable')

const SHOPIFY_STOREFRONT_TOKEN = '$(SHOPIFY_STOREFRONT_TOKEN)'
const SHOPIFY_STOREFRONT_URL =
  '$(SHOPIFY_GRAPHQL_TOKEN)'
const NEW_SHOPIFY_STOREFRONT_URL =
  '$(SHOPIFY_GRAPHQL_TOKEN)'
const SANITY_GRAPHQL_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${SANITY_DATASET}/default`

export const config = {
  // EXCHANGE_RATE_API_KEY,
  // ALGOLIA_API_KEY,
  // ALGOLIA_APP_ID,
  // STOREFRONT_ENV,
  SHOPIFY_STOREFRONT_TOKEN,
  NEW_SHOPIFY_STOREFRONT_URL,
  SHOPIFY_STOREFRONT_URL,
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_AUTH_TOKEN,
  SANITY_READ_TOKEN,
  SANITY_GRAPHQL_URL,
  // SHOPIFY_SHOP_NAME,
  // POSTMARK_KEY,
  // SENTRY_DSN,
  // SHOPIFY_CHECKOUT_DOMAIN,
  // FB_PIXEL_ID,
  // FB_PRDOUCT_CATALOG_ID,
  // SHOW_IN_STOCK_INDICATORS,
}
