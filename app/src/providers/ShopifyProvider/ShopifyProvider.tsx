import * as React from 'react'
import { useMedusa } from '../MedusaProvider/MedusaProvider'
import { useMedusaCheckout } from '../MedusaProvider/MedusaCheckoutProvider'
import { useAnalytics } from '../AnalyticsProvider'

export interface ShopifyContextValue {
  cart: any
  checkout: any
  goToCheckout: () => void
  addLineItem: (variantId: string, quantity: number) => Promise<void>
  removeLineItem: (lineId: string) => Promise<void>
}

export const ShopifyContext = React.createContext<ShopifyContextValue | undefined>(undefined)

export const ShopifyConsumer = ShopifyContext.Consumer

export const useShopify = () => {
  const ctx = React.useContext(ShopifyContext)
  if (!ctx) return useMedusa() // Fallback to Medusa context if Shopify context is not available
  return ctx
}

interface Props {
  children: React.ReactNode
}

export const ShopifyProvider = ({ children }: Props) => {
  const { sendBeginCheckout } = useAnalytics()
  const { cart, addLineItem, removeLineItem } = useMedusa()
  const { checkout, createCheckout } = useMedusaCheckout()

  const goToCheckout = async () => {
    if (!checkout) {
      await createCheckout()
    }
    
    // Send analytics event
    if (cart?.items) {
      sendBeginCheckout(
        cart.items.map((item: any) => ({
          product: item.variant?.product,
          variant: item.variant,
          quantity: item.quantity,
        }))
      )
    }

    // Redirect to Medusa checkout
    window.location.href = checkout?.url || '/checkout'
  }

  const value = {
    cart,
    checkout,
    goToCheckout,
    addLineItem,
    removeLineItem,
  }

  return (
    <ShopifyContext.Provider value={value}>
      {children}
    </ShopifyContext.Provider>
  )
}
