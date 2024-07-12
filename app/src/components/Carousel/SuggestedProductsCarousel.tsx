import React, { useEffect, useState } from 'react'
import { gql } from 'graphql-tag'
import {
  Collection,
  Product,
  ShopifyProductVariant,
  ShopifySourceProductVariant,
} from '../../types'
import { Carousel } from './Carousel'
import { ProductThumbnail } from '../Product'
import { definitely, getVariantTitle, useViewportSize } from '../../utils'
import {
  useLazyRequest,
  shopifyImageFragment,
  shopifyVariantImageFragment,
} from '../../graphql'
import { Maybe } from 'yup'

//if collection then collection else prroducttype, then dollars within a range?
const queryByCollection = gql`
  query CarouselSuggestedProductsQuery($collectionId: ID!) {
    allCollection(where: { _id: { eq: $collectionId } }) {
      __typename
      _id
      _type
      _key
      title
      handle
      archived
      shopifyId
      products {
        __typename
        _id
        _key
        title
        hidden
        hideFromSearch
        handle
        archived
        shopifyId
        store {
          __typename
          id
          title
          handle
          tags
          productType
          variants {
            title
            __typename
            sourceData {
              __typename
              _key
              _type
              availableForSale
              currentlyNotInStock
              id
              title
              image {
                ...ShopifyVariantImageFragment
              }
              priceV2 {
                amount
              }
              selectedOptions {
                __typename
                name
                value
              }
              metafields {
                key
                value
              }
            }
          }
          images {
            ...ShopifyImageFragment
          }
        }
      }
    }
  }
  ${shopifyImageFragment}
  ${shopifyVariantImageFragment}
`

const queryByProductType = gql`
  query CarouselSuggestedProductsQuery($productType: ID!) {
    allProducts(where: { store: { productType: { eq: $productType } } }) {
      __typename
      _id
      _key
      title
      hidden
      hideFromSearch
      handle
      archived
      shopifyId
      store {
        __typename
        id
        title
        handle
        tags
        productType
        variants {
          title
          __typename
          sourceData {
            __typename
            _key
            _type
            availableForSale
            currentlyNotInStock
            id
            title
            image {
              ...ShopifyVariantImageFragment
            }
            priceV2 {
              amount
            }
            selectedOptions {
              __typename
              name
              value
            }
            metafields {
              key
              value
            }
          }
        }
        images {
          ...ShopifyImageFragment
        }
      }
    }
  }

  ${shopifyImageFragment}
  ${shopifyVariantImageFragment}
`

interface Response {
  allCollection: Collection[]
  allProducts: Collection[]
}
interface Variables {
  collectionId?: string | null | undefined
  productType?: string | null | undefined
}

interface SuggestedProductsCarouselProps {
  collection?: Collection | null
  product: Product
  currentVariant?: ShopifyProductVariant
}

export const SuggestedProductsCarousel = ({
  collection,
  currentVariant,
  product,
}: SuggestedProductsCarouselProps) => {
  const { width: viewportWidth } = useViewportSize()
  const [initialSlide, setInitalSlide] = useState<number>(0)

  const variables = collection?._id
    ? { collectionId: collection._id }
    : { productType: product?.store?.productType }

  const query = collection?._id ? queryByCollection : queryByProductType

  const [getCarousel, response] = useLazyRequest<Response, Variables>(
    query,
    variables,
  )
  const { data } = response

  useEffect(() => {
    setInitalSlide(viewportWidth < 650 ? 1 : 0)
  }, [viewportWidth])

  useEffect(() => {
    if (Boolean(data)) return
    if (!variables.collectionId) return
    getCarousel(variables)
  }, [data])

  const fetchedCollection: any = collection?._id
    ? data?.allCollection[0]?.products
    : data?.allProducts[0]

  const products = definitely(fetchedCollection)

  const [variants, setVariants] = useState<Maybe<ShopifyProductVariant>[]>([])

  const availableProducts =
    (products as Product[])?.filter((p) => p?.hideFromSearch !== true) || []

  useEffect(() => {
    function getNestedValue(obj, path) {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj)
    }

    function getUniqueEntries(array, path) {
      const seen = new Set()
      return array.filter((item) => {
        const value = getNestedValue(item, path)
        if (seen.has(value)) {
          return false
        } else {
          seen.add(value)
          return true
        }
      })
    }

    const variants = availableProducts
      ?.map((p: any) =>
        p?.store?.variants.map((v) => ({
          product: {
            title: p.title,
            handle: p.handle,
            store: {
              productType: p.store.productType,
            },
            variantsLength: p.store.variants.length,
          },
          ...v,
        })),
      )
      .flat()

    const availableForSale =
      variants?.filter((v) => v?.sourceData?.availableForSale === true) || []

    const unique = getUniqueEntries(availableForSale, 'sourceData.image.id')

    const sorted = unique.sort(
      (a, b) =>
        Math.abs(
          (a?.sourceData?.priceV2?.amount ?? 0) -
            (currentVariant?.sourceData?.priceV2?.amount ?? 0),
        ) -
        Math.abs(
          (b?.sourceData?.priceV2?.amount ?? 0) -
            (currentVariant?.sourceData?.priceV2?.amount ?? 0),
        ),
    )

    setVariants(sorted as Maybe<ShopifyProductVariant>[])
  }, [data, currentVariant])

  const filteredProducts = variants.flatMap((variant: any) =>
    availableProducts.filter(
      (product) => variant?.product?.title === product.title,
    ),
  )

  if (!variants?.length) return null

  const preferredVariantMatches = variants
    .flatMap(
      (variant) =>
        variant?.sourceData?.selectedOptions &&
        variant?.sourceData?.selectedOptions.filter(
          (v) =>
            v?.name === 'Color' ||
            v?.name === 'Carat' ||
            v?.name === 'Style' ||
            v?.name === 'Material' ||
            (v?.name === 'Size' &&
              variant?.sourceData?.selectedOptions &&
              variant?.sourceData?.selectedOptions.length === 1),
        ),
    )
    .map((v) => (v?.name === 'Size' ? null : v?.value))

  return (
    <Carousel key={currentVariant?._key || 'a-key'} initialSlide={initialSlide}>
      {definitely(filteredProducts)
        .filter(
          (product: any) =>
            product?.archived !== true &&
            product?.hidden !== true &&
            product?.hideFromSearch !== true,
        )
        .map((product: any, index) => {
          return (
            <ProductThumbnail
              key={product.shopifyId || 'some-key'}
              preload
              preferredVariantMatches={[preferredVariantMatches[index] || null]}
              product={product}
              displaySwatches={false}
              displayTags={false}
              headingLevel={5}
              carousel={true}
            />
          )
        })}
    </Carousel>
  )
}
