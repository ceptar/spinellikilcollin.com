import * as React from 'react'
import { createClient } from '../../../generated/runtime'

const medusaClient = createClient({
  url: process.env.NEXT_PUBLIC_MEDUSA_API_URL || 'http://212.132.115.241:4000/graphql'
})

interface MedusaCheckoutContextValue {
  checkout: any // Will be replaced with proper Medusa checkout type
  isLoading: boolean
  createCheckout: () => Promise<void>
  updateShippingAddress: (address: any) => Promise<void>
  updateBillingAddress: (address: any) => Promise<void>
  setShippingMethod: (methodId: string) => Promise<void>
  completeCheckout: () => Promise<void>
  setPaymentSession: (providerId: string) => Promise<void>
}

const MedusaCheckoutContext = React.createContext<MedusaCheckoutContextValue | undefined>(undefined)

export const useMedusaCheckout = () => {
  const ctx = React.useContext(MedusaCheckoutContext)
  if (!ctx) throw new Error('useMedusaCheckout must be used within MedusaCheckoutProvider')
  return ctx
}

export const MedusaCheckoutProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [checkout, setCheckout] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const createCheckout = async () => {
    setIsLoading(true)
    try {
      const { checkout: newCheckout } = await medusaClient.mutation({
        checkoutCreate: {
          checkout: true
        }
      })
      setCheckout(newCheckout)
      return newCheckout
    } finally {
      setIsLoading(false)
    }
  }

  const updateShippingAddress = async (address: any) => {
    setIsLoading(true)
    try {
      const { checkout: updatedCheckout } = await medusaClient.mutation({
        checkoutShippingAddressUpdate: {
          checkoutId: checkout.id,
          address
        }
      })
      setCheckout(updatedCheckout)
    } finally {
      setIsLoading(false)
    }
  }

  const updateBillingAddress = async (address: any) => {
    setIsLoading(true)
    try {
      const { checkout: updatedCheckout } = await medusaClient.mutation({
        checkoutBillingAddressUpdate: {
          checkoutId: checkout.id,
          address
        }
      })
      setCheckout(updatedCheckout)
    } finally {
      setIsLoading(false)
    }
  }

  const setShippingMethod = async (methodId: string) => {
    setIsLoading(true)
    try {
      const { checkout: updatedCheckout } = await medusaClient.mutation({
        checkoutShippingMethodUpdate: {
          checkoutId: checkout.id,
          shippingMethodId: methodId
        }
      })
      setCheckout(updatedCheckout)
    } finally {
      setIsLoading(false)
    }
  }

  const setPaymentSession = async (providerId: string) => {
    setIsLoading(true)
    try {
      const { checkout: updatedCheckout } = await medusaClient.mutation({
        checkoutPaymentSessionCreate: {
          checkoutId: checkout.id,
          providerId
        }
      })
      setCheckout(updatedCheckout)
    } finally {
      setIsLoading(false)
    }
  }

  const completeCheckout = async () => {
    setIsLoading(true)
    try {
      const { checkout: completedCheckout } = await medusaClient.mutation({
        checkoutComplete: {
          checkoutId: checkout.id
        }
      })
      setCheckout(completedCheckout)
      return completedCheckout
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    checkout,
    isLoading,
    createCheckout,
    updateShippingAddress,
    updateBillingAddress,
    setShippingMethod,
    setPaymentSession,
    completeCheckout
  }

  return (
    <MedusaCheckoutContext.Provider value={value}>
      {children}
    </MedusaCheckoutContext.Provider>
  )
}
