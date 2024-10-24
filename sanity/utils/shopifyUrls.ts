import {SHOPIFY_STORE_ID} from '../constants'

const storeUrl = `http://212.132.115.241:9000`

export const collectionUrl = (collectionId: number) => {
  if (!SHOPIFY_STORE_ID) {
    return null
  }
  return `${storeUrl}/collections/${collectionId}`
}

export const productUrl = (productId: number) => {
  if (!SHOPIFY_STORE_ID) {
    return null
  }
  return `${storeUrl}/products/${productId}`
}

export const productVariantUrl = (productId: number, productVariantId: number) => {
  if (!SHOPIFY_STORE_ID) {
    return null
  }
  return `${storeUrl}/products/${productId}/variants/${productVariantId}`
}
