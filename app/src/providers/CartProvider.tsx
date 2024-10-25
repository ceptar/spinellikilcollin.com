import * as React from 'react'
import { useReducer } from 'react'
import { useMedusa } from './MedusaProvider/MedusaProvider'
import { useMedusaCheckout } from './MedusaProvider/MedusaCheckoutProvider'

interface CartState {
  open: boolean
  message?: string
}

const OPEN_CART = 'OPEN_CART'
const CLOSE_CART = 'CLOSE_CART'

interface OpenAction {
  type: typeof OPEN_CART
  message?: string
}

interface CloseAction {
  type: typeof CLOSE_CART
}

type Action = OpenAction | CloseAction

interface CartProviderContextValue {
  open: boolean
  message?: string
  openCart: (message?: string) => void
  closeCart: () => void
  cart: any
  checkout: any
  addLineItem: (variantId: string, quantity: number) => Promise<void>
  removeLineItem: (lineId: string) => Promise<void>
  handleCheckout: () => Promise<void>
}

const CartProviderContext = React.createContext<CartProviderContextValue | undefined>(undefined)

export const useCart = () => {
  const ctx = React.useContext(CartProviderContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...state,
        open: true,
        message: action.message,
      }
    case CLOSE_CART:
      return {
        ...state,
        open: false,
      }
    default:
      const _exhaustiveCheck: never = action
      throw new Error(`Unhandled action type: ${_exhaustiveCheck}`)
  }
}
const initialState: CartState = {
  open: false,
  message: undefined,
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const { cart, addLineItem, removeLineItem } = useMedusa()
  const { createCheckout, checkout } = useMedusaCheckout()

  const { message, open } = state
  
  const openCart = (message?: string) => dispatch({ type: OPEN_CART, message })
  const closeCart = () => dispatch({ type: CLOSE_CART })

  const handleCheckout = async () => {
    if (cart && !checkout) {
      await createCheckout()
    }
    // Redirect to checkout page or open checkout modal
  }

  const value = {
    open,
    message,
    openCart,
    closeCart,
    cart,
    checkout,
    addLineItem,
    removeLineItem,
    handleCheckout
  }

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  )
}
