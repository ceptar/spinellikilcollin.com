import * as React from 'react'
import { useRouter } from 'next/router'
import { useCountry } from '../CountryProvider'
import { useMedusa } from '../MedusaProvider/MedusaProvider'
import { useSearch } from '../SearchProvider'

interface PriceRange {
  minVariantPrice: {
    amount: string
    currencyCode: string
  }
  maxVariantPrice: {
    amount: string
    currencyCode: string
  }
}

interface Price {
  price: any
  compareAtPrice: any
}

interface ShopifyPriceContextValue {
  ready: boolean
  currentCollectionPrices: any
  currentSearchResultPrices: any
  getPriceRangeById: (id: string) => PriceRange | null
  getVariantPriceById: (productId: string, variantId: string) => Promise<Price | null>
  getVariantPriceByCollection: (collectionHandle: string, variantId: string) => Price | null
  getVariantPriceBySearchResults: (variantId: string) => Price | null
  getProductPriceById: (productId: string) => Promise<Price | null>
  clearSearchResultPrices: () => void
}

const ShopifyPriceContext = React.createContext<ShopifyPriceContextValue | undefined>(undefined)

export const useShopifyPrice = () => {
  const medusa = useMedusa()
  return {
    ready: true,
    currentCollectionPrices: null,
    currentSearchResultPrices: null,
    getPriceRangeById: () => null,
    getVariantPriceById: async () => ({
      price: medusa.cart?.region?.currency_code || 'USD',
      compareAtPrice: null
    }),
    getVariantPriceByCollection: () => null,
    getVariantPriceBySearchResults: () => null,
    getProductPriceById: async () => null,
    clearSearchResultPrices: () => null
  }
}

export const ShopifyPriceProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useShopifyPrice()

  return (
    <ShopifyPriceContext.Provider value={value}>
      {children}
    </ShopifyPriceContext.Provider>
  )
}