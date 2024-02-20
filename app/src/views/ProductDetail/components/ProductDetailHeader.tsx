import * as React from 'react'
import {
  Maybe,
  ShopifyMoneyV2,
  Product,
  ShopifyProductVariant,
  ShopifyStorefrontMoneyV2,
} from '../../../types'
import { TitleWrapper } from '../styled'
import { Heading, Span } from '../../../components/Text'
import { Price } from '../../../components/Price'
import { getVariantTitle } from '../../../utils'
import { useShopifyPrice, useCountry } from '../../../providers'
import styled, { css } from '@xstyled/styled-components'

const { useEffect, useState } = React

interface ProductDetailHeaderProps {
  product: Product
  currentVariant: ShopifyProductVariant
  disableStockIndication?: boolean
  mobile?: string
}

interface WithHide {
  hide: boolean
}

import { config } from '../../../config'

const { SHOW_IN_STOCK_INDICATORS } = config

const showInStockIndicators = SHOW_IN_STOCK_INDICATORS === 'true'

const StockedLabel = styled('div')<WithHide>`
  ${({ theme, hide }) => css`
    display: block;
    opacity: ${hide ? 0 : 1};
    transition: 250ms ease;
    em {
      font-size: 13px;
    }
    ${theme.mediaQueries.tablet} {
      display: none;
    }
  `}
`

const InStockDot = styled('span')`
  display: inline-block;
  background-color: #00d009;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  border-radius: 100%;
  border: 1px solid #f5f3f3;
`

export const ProductDetailHeader = ({
  product,
  currentVariant,
  disableStockIndication,
}: ProductDetailHeaderProps) => {
  const variantTitle = getVariantTitle(product, currentVariant)
  const { inquiryOnly } = product
  const variants = product.store?.variants
  const { compareAtPriceV2, priceV2, currentlyNotInStock } =
    currentVariant?.sourceData ?? {}

  const { getVariantPriceById } = useShopifyPrice()
  const { currentCountry } = useCountry()

  const [compareAtPrice, setCompareAtPrice] =
    useState<Maybe<ShopifyStorefrontMoneyV2>>(null)
  const [price, setPrice] = useState<Maybe<ShopifyStorefrontMoneyV2>>(null)

  useEffect(() => {
    let isSubscribed = true
    // declare the async data fetching function
    const fetchData = async () => {
      if (!product?.shopifyId || !currentVariant?.shopifyVariantID) return
      // get the data from the api
      const variantPrice = await getVariantPriceById(
        product.shopifyId,
        currentVariant?.shopifyVariantID,
      )
      console.log('ProductDetailHeader current variant pricing', variantPrice)
      // set state with the result if `isSubscribed` is true
      if (isSubscribed) {
        variantPrice?.priceV2 && setPrice(variantPrice?.priceV2)
        variantPrice?.compareAtPriceV2 &&
          setCompareAtPrice(variantPrice?.compareAtPriceV2)
      }
      console.log('price state:', price)
    }
    // call the function
    fetchData().catch(console.error)
    // cancel any future `setData`
    return () => {
      isSubscribed = false
    }
  }, [currentVariant, product, currentCountry])

  const slugify = (text?: Maybe<string>) => {
    if (!text) return ''
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }

  const variantsInStock =
    variants?.filter(
      (v) =>
        v?.sourceData?.currentlyNotInStock === false &&
        !v?.sourceData.selectedOptions?.find(
          (o) => o?.value == 'Not sure of my size',
        ),
    ) || []

  const stockedVariants = product.store?.variants?.filter((variant) => {
    return (
      variant?.sourceData?.availableForSale === true &&
      variant?.sourceData?.currentlyNotInStock === false &&
      !variant?.sourceData?.selectedOptions?.find(
        (o) => o?.value == 'Not sure of my size',
      ) &&
      !variant?.sourceData?.selectedOptions?.find((o) => o?.name == 'Carat')
    )
  })

  const keys = ['Size', 'Quantity', 'Length', 'Title']

  const stockedColorOptions = stockedVariants
    ?.map((variant) => {
      return variant?.sourceData?.selectedOptions?.find(
        (option) => option?.name === 'Color',
      )
    })
    .map((option) => slugify(option?.value))

  const isSwatchCurrentlyInStock = (
    currentVariant,
    stockedOptions,
    stockedVariants,
  ): boolean => {
    if (
      currentVariant.sourceData?.selectedOptions?.find(
        (option) => option.name === 'Color',
      ) !== undefined
    ) {
      const color = slugify(
        currentVariant.sourceData.selectedOptions.find(
          (option) => option.name === 'Color',
        ).value,
      )
      return stockedOptions.includes(color)
    } else {
      return Boolean(stockedVariants?.length > 0)
    }
  }

  return (
    <>
      <TitleWrapper product={product}>
        {variantsInStock?.length > 0 &&
        disableStockIndication !== true &&
        showInStockIndicators ? (
          <StockedLabel
            hide={
              !isSwatchCurrentlyInStock(
                currentVariant,
                stockedColorOptions,
                variantsInStock,
              )
            }
          >
            <Heading level={5} weight={1} as={'em'}>
              <InStockDot />
              {currentlyNotInStock !== true &&
              !currentVariant.title?.includes('Not sure of my size')
                ? 'In Stock'
                : 'In Stock in Select Sizes'}
            </Heading>
          </StockedLabel>
        ) : null}
        <Heading level={3} weight={2} mb={{ xs: 1, md: 2 }}>
          {variantTitle || product.title}
        </Heading>
        {inquiryOnly !== true ? (
          <Heading level={4} weight={1} mb={0} mt={{ xs: 1, md: 2 }}>
            <Price price={price != null ? price : priceV2} />
            {(compareAtPriceV2 || compareAtPrice) && (
              <Span ml={2} color="body.6" textDecoration="line-through">
                <Price
                  price={
                    compareAtPrice != null ? compareAtPrice : compareAtPriceV2
                  }
                />
              </Span>
            )}
          </Heading>
        ) : null}
      </TitleWrapper>
    </>
  )
}
