import * as React from 'react'
import { useMedusa } from '../MedusaProvider/MedusaProvider'

interface MedusaPriceContextValue {
  formatPrice: (amount: number) => string
  formatVariantPrice: (variant: any) => string
  currency: string
}

const MedusaPriceContext = React.createContext<MedusaPriceContextValue | undefined>(undefined)

export const useMedusaPrice = () => {
  const ctx = React.useContext(MedusaPriceContext)
  if (!ctx) {
    throw new Error('useMedusaPrice must be used within MedusaPriceProvider')
  }
  return ctx
}

export const MedusaPriceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart } = useMedusa()
  const currency = cart?.region?.currency_code || 'usd'

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount / 100)
  }

  const formatVariantPrice = (variant: any) => {
    if (!variant?.prices) return formatPrice(0)
    const price = variant.prices.find((p: any) => p.currency_code === currency)
    return formatPrice(price?.amount || 0)
  }

  const value = {
    formatPrice,
    formatVariantPrice,
    currency
  }

  return (
    <MedusaPriceContext.Provider value={value}>
      {children}
    </MedusaPriceContext.Provider>
  )
}
