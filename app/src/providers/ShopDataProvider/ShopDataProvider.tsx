import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SHOP_DATA_QUERY, ShopDataResponse } from './shopDataQuery'
import {
  Menu,
  ShopifyProduct,
  ProductInfo,
  ProductInfoSettings,
  SiteSettings,
} from '../../types'
import { definitely, getPageLinkUrl, LinkInfo } from '../../utils'

const { useContext } = React

interface ShopDataContextValue {
  ready: boolean
  menu?: Menu
  getProductInfoBlocks: (product: ShopifyProduct) => ProductInfo[]
  siteSettings?: SiteSettings
  productInfoSettings?: ProductInfoSettings
  getLinkByRef: (ref: string) => LinkInfo | null
}

const ShopDataContext = React.createContext<ShopDataContextValue | undefined>(
  undefined,
)

export const ShopDataConsumer = ShopDataContext.Consumer

export const useShopData = () => {
  const ctx = useContext(ShopDataContext)
  if (!ctx)
    throw new Error('useShopDataContext must be used within a ShopDataProvider')
  return ctx
}

interface Props {
  children: React.ReactNode
}

interface Person {
  name: string
}

export const ShopDataProvider = ({ children }: Props) => {
  const response = useQuery<ShopDataResponse>(SHOP_DATA_QUERY)

  const ready = Boolean(response.data && !response.loading)
  const menu = response?.data?.Menu
  const siteSettings = response?.data?.SiteSettings
  const productInfoSettings = response?.data?.ProductInfoSettings
  const productInfoBlocks = response?.data?.ProductInfoSettings
  const allPages = response?.data?.allPage || []

  const getLinkByRef = (ref: string): LinkInfo | null => {
    if (!ref) return null
    if (ref === 'customize') return getPageLinkUrl({ __typename: 'Customize' })
    if (ref === 'journalPage') {
      return getPageLinkUrl({ __typename: 'JournalPage' })
    }
    if (ref === 'magazine') return getPageLinkUrl({ __typename: 'Magazine' })
    if (ref === 'contact') return getPageLinkUrl({ __typename: 'Contact' })
    const page = allPages.find((page) => page._id === ref)
    if (page) return getPageLinkUrl({ __typename: 'Page', slug: page.slug })
    return null
  }

  const getProductInfoBlocks = (product: ShopifyProduct): ProductInfo[] => {
    const productBlocks = definitely(product.info)
    if (!productInfoBlocks) return productBlocks
    const { globalInfo, infoByType, infoByTag } = productInfoBlocks
    const globalBlocks = globalInfo ? definitely(globalInfo) : []
    const sourceTags = product?.sourceData?.tags
    const productType = product?.sourceData?.productType
    const productTags = sourceTags
      ? sourceTags.map((t) => (t ? t.toLowerCase() : ''))
      : []

    const tagBlocks =
      infoByTag && productTags
        ? infoByTag.reduce<ProductInfo[]>((acc, current) => {
            if (!current) return acc
            if (
              current.tag &&
              productTags.includes(current.tag.toLowerCase())
            ) {
              const { info } = current
              if (info) {
                const infos = definitely(info)
                return [...acc, ...infos]
              }
            }
            return acc
          }, [])
        : []

    const typeBlocks =
      infoByType && productType
        ? infoByType.reduce<ProductInfo[]>((acc, current) => {
            if (!current) return acc
            if (
              current.type &&
              productType.toLowerCase() === current.type.toLowerCase()
            ) {
              const { info } = current
              if (info) {
                const infos = definitely(info)
                return [...acc, ...infos]
              }
            }
            return acc
          }, [])
        : []

    const allBlocks: ProductInfo[] = [
      ...productBlocks,
      ...globalBlocks,
      ...tagBlocks,
      ...typeBlocks,
    ]
    return allBlocks
  }

  const value = {
    ready,
    menu,
    siteSettings,
    productInfoSettings,
    getProductInfoBlocks,
    getLinkByRef,
  }

  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  )
}
