import gql from 'graphql-tag'

export const moneyV2Fragment = gql`
  fragment MoneyV2Fragment on MoneyV2 {
    __typename
    amount
    currencyCode
  }
`
export const imageFragment = gql`
  fragment ImageFragment on Image {
    __typename
    altText
    id
    originalSrc
  }
`
export const shopifyImageFragment = gql`
  fragment ShopifyImageFragment on ShopifyImage {
    __typename
    _type
    altText
    height
    id
    src
    width
  }
`

export const shopifyVariantImageFragment = gql`
  fragment ShopifyVariantImageFragment on ShopifyVariantImage {
    __typename
    altText
    height
    id
    url
    width
  }
`

export const productWithoutVariantsFragment = gql`
  fragment ProductWithoutVariantsFragment on Product {
    __typename
    handle
    title
    options(first: 100) {
      __typename
      _type
      name
      values
    }
    store {
      availableForSale
      createdAt
      description
      descriptionHtml
      featuredImage {
        ...ShopifyImageFragment
      }
      gid
      id
      images {
        ...ShopifyImageFragment
      }
      priceRange {
        __typename
        maxVariantPrice
        minVariantPrice
      }
      productType
      publishedAt
      tags
      vendor
    }
  }
  ${imageFragment}
  ${shopifyImageFragment}
`

export const variantWithProductFragment = gql`
  fragment VariantWithProductFragment on ProductVariant {
    __typename
    id
    sku
    title
    weight
    weightUnit
    compareAtPriceV2 {
      ...MoneyV2Fragment
    }
    priceV2 {
      ...MoneyV2Fragment
    }
    product {
      ...ProductWithoutVariantsFragment
    }
    image {
      ...ImageFragment
    }
    availableForSale
    currentlyNotInStock
    requiresShipping
    selectedOptions {
      __typename
      name
      value
    }
  }
  ${moneyV2Fragment}
  ${productWithoutVariantsFragment}
  ${imageFragment}
`

export const variantFragment = gql`
  fragment VariantFragment on ShopifyProductVariant {
    __typename
    _type
    id
    isDeleted
    shopifyVariantId
    sourceData {
      __typename
      _type
      availableForSale
      currentlyNotInStock
      id
      sku
      title
      weight
      weightUnit
      compareAtPriceV2 {
        ...MoneyV2Fragment
      }
      priceV2 {
        ...MoneyV2Fragment
      }
      requiresShipping
      selectedOptions {
        __typename
        name
        value
      }
      image {
        ...ShopifyVariantImageFragment
      }
    }
    title
  }
  ${moneyV2Fragment}
  ${shopifyVariantImageFragment}
`

export const discountApplicationFragment = gql`
  fragment DiscountApplicationFragment on DiscountApplication {
    __typename
    allocationMethod
    targetSelection
    targetType
    ... on DiscountCodeApplication {
      __typename
      code
      applicable
    }
    value {
      ... on PricingPercentageValue {
        __typename
        percentage
      }
      ... on MoneyV2 {
        ...MoneyV2Fragment
      }
    }
  }
  ${moneyV2Fragment}
`

export const lineItemFragment = gql`
  fragment LineItemFragment on CheckoutLineItem {
    __typename
    id
    quantity
    title
    discountAllocations {
      __typename
      allocatedAmount {
        ...MoneyV2Fragment
      }
      discountApplication {
        ...DiscountApplicationFragment
      }
    }
    variant {
      ...VariantWithProductFragment
    }
  }
  ${discountApplicationFragment}
  ${variantWithProductFragment}
`

export const checkoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    __typename
    id
    paymentDueV2 {
      ...MoneyV2Fragment
    }
    webUrl
    completedAt
    shippingLine {
      __typename
      handle
      price {
        ...MoneyV2Fragment
      }
      title
    }
    email
    discountApplications(first: 100) {
      __typename
      pageInfo {
        __typename
        hasNextPage
        hasPreviousPage
      }
      edges {
        __typename
        cursor
        node {
          ...DiscountApplicationFragment
        }
      }
    }
    lineItems(first: 100) {
      __typename
      pageInfo {
        __typename
        hasNextPage
        hasPreviousPage
      }
      edges {
        __typename
        cursor
        node {
          ...LineItemFragment
        }
      }
    }
  }

  ${moneyV2Fragment}
  ${discountApplicationFragment}
  ${lineItemFragment}
`
