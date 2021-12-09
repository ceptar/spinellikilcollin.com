import {
  ShopifyProduct,
  ShopifyProductVariant,
  ShopifySourceProduct,
  ShopifySourceProductVariant,
  Maybe,
} from '../../types'
import {
  ShopifyStorefrontProduct as Product,
  ShopifyStorefrontCheckoutLineItem as CheckoutLineItem,
  ShopifyStorefrontProductVariant as Variant,
} from '../../types/generated-shopify'
import { SelectedProduct, EcommerceObject } from './types'
import { getProductIdFromStorefrontId } from '../../utils'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable'

const getVariantSourceData = (
  variant: ShopifyProductVariant | ShopifySourceProductVariant | Variant,
): ShopifySourceProductVariant | Variant => {
  if (
    '__typename' in variant &&
    variant.__typename === 'ShopifySourceProductVariant'
  ) {
    return variant
  }

  if (
    '__typename' in variant &&
    variant.__typename === 'ShopifyProductVariant'
  ) {
    const sourceData = variant?.sourceData
    if (!sourceData) throw new Error('No product source data was provided')
    return sourceData
  }

  return variant
}

const getProductSourceData = (
  product: ShopifyProduct | ShopifySourceProduct | Product | CheckoutLineItem,
): ShopifySourceProduct | Product | CheckoutLineItem => {
  if (product.__typename === 'CheckoutLineItem') return product
  if (product.__typename === 'ShopifySourceProduct') return product
  if (product.__typename === 'Product') return product
  if (product.__typename === 'ShopifyProduct') {
    // @ts-ignore
    const sourceData = product?.sourceData
    if (!sourceData) throw new Error('No product source data was provided')
    return sourceData
  }

  console.error(product)
  throw new Error('Could not get product data')
}

interface ProductExtras {
  list?: string
  position?: number
}

const assertExists = <T>(item: Maybe<T> | undefined, label: string): T => {
  if (!item) throw new Error(`Property "${label}" was not supplied`)
  return item
}

export const parseProduct = (
  selectedProduct: SelectedProduct,
  { position, list }: ProductExtras,
): EcommerceObject => {
  const quantity = selectedProduct.quantity || 1
  const product = selectedProduct.product
    ? getProductSourceData(selectedProduct.product)
    : selectedProduct?.variant?.__typename === 'ProductVariant'
    ? selectedProduct.variant.product
    : undefined

  const decodedProductId = product?.id
    ? getProductIdFromStorefrontId(product.id)
    : undefined

  const variant = selectedProduct.variant
    ? getVariantSourceData(selectedProduct.variant)
    : undefined

  const formattedPrice = variant?.priceV2?.amount
    ? Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        .format(parseFloat(variant.priceV2.amount.toString()))
        .replace(/^\$/, '')
    : undefined

  const productType =
    product && 'productType' in product ? product.productType : undefined
  const values: EcommerceObject = {
    name: product?.title,
    id: decodedProductId,
    price: formattedPrice ? assertExists(formattedPrice, 'price') : undefined,
    category: productType ?? undefined,
    variant: variant ? assertExists(variant.title, 'variant') : undefined,
    quantity,
    position,
    list,
  }
  return values
}
