import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { unwindEdges } from '@good-idea/unwind-edges'
import {
  ShopifyProduct,
  ShopifyProductOption,
  ShopifyProductOptionValue,
  ShopifySourceProductVariant,
  ShopifySourceImage,
  FilterConfiguration,
  Maybe,
  Scalars,
} from '../../types'
import { Heading, Span } from '../Text'
import { Image } from '../Image'
import { TagBadges } from './TagBadges'
import { ProductSwatches, IsDisplayingSwatches } from './ProductSwatches'
import { Price } from '../Price'
import {
  getProductUri,
  getVariantBySelectedOptions,
  optionMatchesVariant,
  getBestVariantByMatch,
  getBestVariantByFilterMatch,
  definitely,
  withTypenames,
  getBestVariantBySort,
} from '../../utils'
import { useInViewport } from '../../hooks'
import { useAnalytics } from '../../providers'
import { ImageWrapper, VideoWrapper, ProductInfo, ProductThumb } from './styled'
import { CloudinaryAnimation } from '../CloudinaryVideo'
import { variantFragment } from '../../graphql'
import styled, { css } from '@xstyled/styled-components'
import { Sort } from '../Filter'
import { useShopData } from '../../providers/ShopDataProvider'
import { sanityClient } from '../../services/sanity'

const { useEffect, useState, useMemo, useRef } = React

interface ProductThumbnailProps {
  product: ShopifyProduct
  displayPrice?: boolean
  displayTags?: boolean
  displaySwatches?: boolean
  preload?: boolean
  headingLevel?: number
  preferredVariantMatches?: Maybe<string>[] | null
  currentFilter?: FilterConfiguration | null
  currentSort?: Sort | null
  hideFilter?: boolean | null
  imageRatio?: number
  collectionId?: string | null
  carousel?: boolean
}

interface VariantAnimation {
  __typename: 'CloudinaryVideo'
  videoId?: Maybe<Scalars['String']>
}

interface WithCurrentlyInStock {
  currentlyInStock?: boolean
}

const TitleHeading = styled(Heading)<WithCurrentlyInStock>`
  ${({ currentlyInStock }) => css``}
`

const InStockDot = styled('span')`
  display: inline-block;
  background-color: #00d009;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  margin-top: 6px;
  margin-left: -18px;
  border: 1px solid #f5f3f3;
  @media screen and (max-width: 960px) {
    margin-top: 4px;
  }
`
const PriceWrapper = styled('span')`
  ${({ theme }) => css`
    display: inline-block;
    width: 38px;
    text-align: left;
    ${theme.mediaQueries.mobile} {
      width: 24px;
    }
  `}
`

const uniqueImages = (
  variants: ShopifySourceProductVariant[],
): ShopifySourceImage[] =>
  variants.reduce<ShopifySourceImage[]>((acc, variant) => {
    const { image } = variant
    if (!image) return acc
    if (acc.find((i) => i?.originalSrc === image.originalSrc)) {
      return acc
    }
    return [...acc, image]
  }, [])

export const ProductThumbnail = ({
  product,
  displayPrice,
  displayTags,
  displaySwatches,
  headingLevel,
  preferredVariantMatches,
  currentFilter,
  currentSort,
  hideFilter,
  imageRatio,
  collectionId,
  carousel,
}: ProductThumbnailProps) => {
  const { asPath } = useRouter()
  const { inquiryOnly } = product
  const containerRef = useRef<HTMLDivElement>(null)
  const { isInViewOnce } = useInViewport(containerRef)
  const { sendProductImpression, sendProductClick } = useAnalytics()
  const { productInfoSettings, productListingSettings } = useShopData()

  const productImages = product.sourceData?.images
    ? unwindEdges(product.sourceData.images)[0]
    : []
  const [variants] = unwindEdges(product?.sourceData?.variants)

  const mappedSelections = !product.initialVariantSelections
    ? false
    : product.initialVariantSelections.map((selection) => ({
        // @ts-ignore
        selectedCollection: selection?.selectedCollection?._ref,
        selectedVariant: selection?.selectedVariant,
      }))

  const initialVariantSelections = !mappedSelections
    ? false
    : mappedSelections
        .filter((selection) => {
          return selection.selectedCollection === collectionId
        })
        .map((s) => s.selectedVariant)

  const initialVariant = initialVariantSelections
    ? getBestVariantByMatch(variants, definitely(initialVariantSelections))
    : preferredVariantMatches
    ? getBestVariantByMatch(variants, definitely(preferredVariantMatches))
    : variants[0]

  const [currentVariant, setCurrentVariant] = useState<
    ShopifySourceProductVariant | undefined
  >(initialVariant)

  const [variantAnimation, setVariantAnimation] = useState<
    VariantAnimation | undefined
  >(undefined)

  const [playing, setPlaying] = useState(false)

  const [disableStockIndication, setDisableStockIndication] = useState(true)

  useEffect(() => {
    const initialSwatchValue = initialVariant?.selectedOptions?.filter(
      (o) => o?.name === 'Color',
    )[0]?.value

    const colorOption = product.options?.filter(
      (option) => option?.name == 'Color',
    )
    const initialColorOption = colorOption?.[0]?.values?.filter(
      (o) => o?.value == initialSwatchValue,
    )[0]

    if (initialColorOption?.animation) {
      const variantAnimation: VariantAnimation = {
        __typename: 'CloudinaryVideo',
        videoId: initialColorOption?.animation,
      }
      setVariantAnimation(variantAnimation)
    } else {
      setVariantAnimation(undefined)
    }
  }, [])

  useEffect(() => {
    const currentSwatchValue = currentVariant?.selectedOptions?.filter(
      (o) => o?.name === 'Color',
    )[0]?.value

    const colorOption = product.options?.filter(
      (option) => option?.name == 'Color',
    )
    const currentColorOption = colorOption?.[0]?.values?.filter(
      (o) => o?.value == currentSwatchValue,
    )[0]

    if (currentColorOption?.animation) {
      const variantAnimation: VariantAnimation = {
        __typename: 'CloudinaryVideo',
        videoId: currentColorOption?.animation,
      }
      setVariantAnimation(variantAnimation)
    } else {
      setVariantAnimation(undefined)
    }
  }, [currentVariant])

  const handleClick = () => {
    // @ts-ignore
    sendProductClick({ product, variant: currentVariant })
  }
  const allImages = useMemo(() => uniqueImages(variants), [variants])
  useEffect(() => {
    if (!isInViewOnce) return
    // @ts-ignore
    sendProductImpression({ product, variant: currentVariant })
  }, [isInViewOnce, currentVariant])

  const productImage = currentVariant?.image
    ? currentVariant.image
    : productImages.length
    ? productImages[0]
    : undefined

  const stopPropagation = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onSwatchHover =
    (option: ShopifyProductOption, value: ShopifyProductOptionValue) => () => {
      if (!value.value) return
      if (!currentVariant?.selectedOptions) return
      const currentOptions = currentVariant.selectedOptions
        .filter((v) => v?.name === 'Color' || v?.name === 'Carat')
        .map((v) => {
          if (v?.name === option.name) {
            return {
              name: option.name || 'foo',
              currentValue: value.value,
            }
          } else {
            return {
              name: v?.name || 'foo',
              currentValue: v?.value,
            }
          }
        })
      const newVariant = getVariantBySelectedOptions(variants, currentOptions)
      // console.log('newVariant', newVariant)
      if (newVariant) setCurrentVariant(newVariant)
    }

  const isSwatchActive = (
    option: ShopifyProductOption,
    value: ShopifyProductOptionValue,
  ): boolean => {
    if (!currentVariant) return false

    const matches = optionMatchesVariant(
      option.name || 'foo',
      value,
      currentVariant,
    )
    return matches
  }

  useEffect(() => {
    if (!currentFilter && !currentSort) return
    if (hideFilter) return

    interface FilterProps {
      name: string
      value: string | boolean
    }

    const minVariantPrice = product?.minVariantPrice || 0
    const maxVariantPrice = product?.maxVariantPrice || 0

    if (currentFilter) {
      // console.log('current productListingSettings', productListingSettings)
      const defaultPriceRangeFilter =
        productListingSettings?.newDefaultFilter?.find(
          (f) => f?.__typename == 'PriceRangeFilter',
        )
      //@ts-ignore
      const defaultMinPrice = defaultPriceRangeFilter?.minPrice
      //@ts-ignore
      const defaultMaxPrice = defaultPriceRangeFilter?.maxPrice
      // console.log('current defaultMinPrice', defaultMinPrice)
      // console.log('current defaultMaxPrice', defaultMaxPrice)
      // console.log('currentFilter that messes up initialVariant', currentFilter)
      const priceRangeFilter = currentFilter.find(
        (f) => f?.filterType == 'PRICE_RANGE_FILTER',
      )
      const inventoryFilter = currentFilter.find(
        (f) => f?.filterType == 'INVENTORY_FILTER',
      )
      const priceRangeFilterIsDefault =
        //@ts-ignore
        priceRangeFilter.minPrice == defaultMinPrice &&
        //@ts-ignore
        priceRangeFilter.maxPrice == defaultMaxPrice
          ? true
          : false
      // console.log(
      //   'current priceRangeFilterIsDefault',
      //   priceRangeFilterIsDefault,
      // )
      //@ts-ignore
      const inventoryFilterIsInactive = inventoryFilter?.applyFilter == false

      const isNotDefaultFilter = (filter) => {
        return Boolean(
          filter.filterType != 'PRICE_RANGE_FILTER' || 'INVENTORY_FILTER',
        )
      }

      const filtersAreDefault = currentFilter.some((f) => isNotDefaultFilter(f))

      if (
        priceRangeFilterIsDefault &&
        inventoryFilterIsInactive &&
        filtersAreDefault &&
        initialVariant
      ) {
        setCurrentVariant(initialVariant)
      } else {
        //@ts-ignore
        const filters: FilterProps[] = currentFilter
          .filter((filter) => filter.filterType !== 'PRICE_RANGE_FILTER')
          .map((filter, i) => {
            const { filterType } = filter
            if (
              filterType === 'FILTER_MATCH_GROUP' ||
              filterType === 'FILTER_SINGLE'
            ) {
              const { matches } = filter
              const newMatches = matches.map((matchGroup) => {
                const { type, match } = matchGroup
                if (typeof type == 'string' && typeof match == 'string')
                  return { name: type, value: match }
              })
              return newMatches
            } else if (filterType === 'INVENTORY_FILTER') {
              const newFilter = {
                name: 'inventory',
                value: filter.applyFilter,
              }
              return newFilter
            }
          })
          .flat()
          .reverse()

        const filteredVariant = getBestVariantByFilterMatch(
          variants,
          filters,
          currentSort,
          minVariantPrice,
          maxVariantPrice,
          initialVariant,
        )
        setCurrentVariant(filteredVariant)
      }
    } else if (currentSort) {
      const filteredVariant = getBestVariantBySort(
        variants,
        currentSort,
        minVariantPrice,
        maxVariantPrice,
        initialVariant,
      )
      setCurrentVariant(filteredVariant)
    }
  }, [currentFilter, currentSort])

  const stockedVariants = product.sourceData?.variants?.edges?.filter(
    (variant) => {
      return (
        variant?.node?.availableForSale === true &&
        variant?.node?.currentlyNotInStock === false &&
        !variant?.node?.selectedOptions?.find((o) => o?.name == 'Carat')
      )
    },
  )

  const sanityBooleanQuery = async <R = boolean,>(
    query: string,
    params?: Record<string, any>,
  ): Promise<R> => {
    const results = await sanityClient.fetch<R>(query, params || {})
    // @ts-ignore
    return withTypenames<R>(results)
  }

  useEffect(() => {
    const productIsExcluded = async (
      product: ShopifyProduct,
    ): Promise<boolean> => {
      const productIsExcluded = await sanityBooleanQuery(
        `*[_type == 'shopifyProduct' && handle == $handle][0].sourceData.metafields.edges[node.key == "excludeFromIndication"][0].node.value`,
        { handle: product?.handle },
      )
      return Boolean(productIsExcluded)
    }

    const isExcludedFromStockIndication = (product: ShopifyProduct) => {
      const excludedProducts = productInfoSettings?.excludeFromStockIndication
      const handle = product?.handle
      const isInExcludedList = excludedProducts?.find((product) => {
        return product?.handle === handle
      })
      if (!isInExcludedList) {
        setDisableStockIndication(false)
        return
      }
      productIsExcluded(product).then((res: boolean) => {
        setDisableStockIndication(res)
      })
    }

    isExcludedFromStockIndication(product)
  }, [
    productInfoSettings?.excludeFromStockIndication,
    product,
    disableStockIndication,
  ])

  const isProductCurrentlyInStock = (product: ShopifyProduct): boolean => {
    if (!product?.sourceData) return false

    const isInStock =
      stockedVariants && stockedVariants.length > 0 ? true : false
    return isInStock
  }

  const altText = [product?.title, currentVariant?.title]
    .filter(Boolean)
    .join(' - ')

  const linkAs = getProductUri(product, {
    variant: currentVariant,
    currentPath: asPath,
  })

  // console.log('variantAnimation', variantAnimation)
  // console.log('playing thumbnail', playing)

  return (
    <ProductThumb ref={containerRef}>
      <Link href="/products/[productSlug]" as={linkAs}>
        <a
          draggable="false"
          aria-label={'Link to ' + product.title}
          onClick={handleClick}
        >
          {variantAnimation ? (
            <VideoWrapper hide={!playing} carousel={carousel}>
              <CloudinaryAnimation
                video={variantAnimation}
                image={productImage}
                setPlaying={setPlaying}
                view={'list'}
              />
            </VideoWrapper>
          ) : null}
          <ImageWrapper hide={Boolean(variantAnimation)}>
            <Image
              image={productImage}
              ratio={imageRatio || 1}
              sizes="(min-width: 1200px) 30vw, (min-width: 1000px) 50vw, 90vw"
              preload
              altText={altText}
              preloadImages={allImages}
            />
          </ImageWrapper>
          <ProductInfo displayGrid={Boolean(displayTags || displaySwatches)}>
            {displayTags ? <TagBadges product={product} /> : <div />}
            {displayPrice && inquiryOnly != true ? (
              <TitleHeading
                level={headingLevel || 3}
                my={0}
                currentlyInStock={isProductCurrentlyInStock(product)}
              >
                {/* {isProductCurrentlyInStock(product) &&
                !IsDisplayingSwatches(product) &&
                disableStockIndication == false ? (
                  <InStockDot />
                ) : (
                  ''
                )} */}
                {product.title} |{' '}
                <PriceWrapper>
                  <Price
                    price={
                      currentVariant?.priceV2 ||
                      product?.sourceData?.priceRange?.minVariantPrice
                    }
                  />
                  <Span ml={2} color="body.6" textDecoration="line-through">
                    <Price price={currentVariant?.compareAtPriceV2} />
                  </Span>
                </PriceWrapper>
              </TitleHeading>
            ) : (
              <TitleHeading
                textAlign="center"
                my={0}
                level={headingLevel || 3}
                currentlyInStock={isProductCurrentlyInStock(product)}
              >
                {/* {isProductCurrentlyInStock(product) &&
                !IsDisplayingSwatches(product) &&
                disableStockIndication == false ? (
                  <InStockDot />
                ) : (
                  ''
                )} */}
                {product.title}
              </TitleHeading>
            )}
            {displaySwatches ? (
              <div onClick={stopPropagation}>
                <ProductSwatches
                  onSwatchHover={onSwatchHover}
                  isSwatchActive={isSwatchActive}
                  product={product}
                  stockedVariants={stockedVariants}
                  disableStockIndication={disableStockIndication}
                />
              </div>
            ) : (
              <div />
            )}
          </ProductInfo>
        </a>
      </Link>
    </ProductThumb>
  )
}

ProductThumbnail.defaultProps = {
  displayPrice: false,
  displayTags: true,
  displaySwatches: true,
}
