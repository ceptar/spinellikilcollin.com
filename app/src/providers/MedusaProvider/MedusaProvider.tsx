import * as React from 'react'
import { createClient } from '../../../generated/runtime'

const medusaClient = createClient({
    url: process.env.NEXT_PUBLIC_MEDUSA_API_URL || 'http://212.132.115.241:4000/graphql'
  })

interface MedusaContextValue {
  client: typeof medusaClient
  cart: any // Replace with proper Medusa cart type
  isLoading: boolean
  createCart: () => Promise<void>
  addLineItem: (variantId: string, quantity: number) => Promise<void>
  removeLineItem: (lineId: string) => Promise<void>
  updateLineItem: (lineId: string, quantity: number) => Promise<void>
}

const MedusaContext = React.createContext<MedusaContextValue | undefined>(undefined)

export const useMedusa = () => {
  const ctx = React.useContext(MedusaContext)
  if (!ctx) throw new Error('useMedusa must be used within MedusaProvider')
  return ctx
}

export const MedusaProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [cart, setCart] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const createCart = async () => {
    setIsLoading(true)
    try {
      const { cart: newCart } = await medusaClient.mutation({
        cartCreate: {
          cart: true
        }
      })
      setCart(newCart)
    } finally {
      setIsLoading(false)
    }
  }

  const addLineItem = async (variantId: string, quantity: number) => {
    setIsLoading(true)
    try {
      const { cart: updatedCart } = await medusaClient.mutation({
        cartLinesAdd: {
          cartId: cart.id,
          lineItems: [{
            variantId,
            quantity
          }]
        }
      })
      setCart(updatedCart)
    } finally {
      setIsLoading(false)
    }
  }

  // Add other cart operations here

  const value = {
    client: medusaClient,
    cart,
    isLoading,
    createCart,
    addLineItem,
    removeLineItem: async () => {}, // Implement
    updateLineItem: async () => {}, // Implement
  }

  const removeLineItem = async (lineId: string) => {
    setIsLoading(true)
    try {
      const { cart: updatedCart } = await medusaClient.mutation({
        cartLinesRemove: {
          cartId: cart.id,
          lineIds: [lineId]
        }
      })
      setCart(updatedCart)
    } finally {
      setIsLoading(false)
    }
  }
  
  const updateLineItem = async (lineId: string, quantity: number) => {
    setIsLoading(true)
    try {
      const { cart: updatedCart } = await medusaClient.mutation({
        cartLinesUpdate: {
          cartId: cart.id,
          lineItems: [{
            lineId,
            quantity
          }]
        }
      })
      setCart(updatedCart)
    } finally {
      setIsLoading(false)
    }
  }
  

  return (
    <MedusaContext.Provider value={value}>
      {children}
    </MedusaContext.Provider>
  )
}