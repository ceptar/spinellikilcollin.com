import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import {
  useCheckout,
  UseCheckoutValues,
  UseCheckoutQueries,
  UseCheckoutConfig,
} from './useCheckout'
import { useAnalytics } from '../AnalyticsProvider'
import { QueryFunction } from './types'
import { config } from '../../config'
import { useRouter } from 'next/router'

const { SHOPIFY_CHECKOUT_DOMAIN: domain } = config
const { useState, useEffect } = React

export interface ShopifyContextValue extends UseCheckoutValues {
  goToCheckout: () => void
}

export const ShopifyContext = React.createContext<
  ShopifyContextValue | undefined
>(undefined)

export const ShopifyConsumer = ShopifyContext.Consumer

const storeCheckout = (checkout) => {
  const storage = globalThis?.sessionStorage
  if (!storage) return
  storage.setItem('checkout', checkout)
}

export const useShopify = () => {
  const ctx = React.useContext(ShopifyContext)
  if (!ctx)
    throw new Error('`useShopify` must be used within a ShopifyProvider')
  storeCheckout(JSON.stringify(ctx.checkout))
  return ctx
}

type CustomQueries = Partial<UseCheckoutQueries>

interface Props {
  children: React.ReactNode
  query: QueryFunction
  queries?: CustomQueries
  config?: {
    checkout: Partial<UseCheckoutConfig>
  }
}

const defaultConfig = {
  checkout: undefined,
}

export const ShopifyProvider = ({
  children,
  queries,
  query,
  config: userConfig,
}: Props) => {
  const { sendBeginCheckout } = useAnalytics()
  const config = {
    ...defaultConfig,
    ...userConfig,
  }
  const router = useRouter()

  const useCheckoutValues = useCheckout({
    queries,
    query,
    config: config.checkout ? config.checkout : undefined,
  })

  const goToCheckout = () => {
    const { checkout } = useCheckoutValues
    const [isOperated, setIsOperated] = useState(false)
    const [checkoutUrl, setCheckoutUrl] = useState('')
    if (!checkout) {
      throw new Error('No checkout has been initiated')
    }
    const [lineItems] = unwindEdges(checkout.lineItems)
    /* Send the analytics event */
    sendBeginCheckout(
      lineItems.map((li) => ({
        product: li.variant?.product,
        variant: li.variant,
        quantity: li.quantity,
      })),
    )

    const isOperatedByCallback = function (isOperated) {
      console.log('IsOperatedByGlobalE:', isOperated)
      setIsOperated(isOperated)
    }
    const getCheckoutUrlCallback = function (url) {
      console.log('GEM getCheckoutUrl: ', url)
      setCheckoutUrl(url)
    }
    const getCheckoutToken = () => {
      const storage = globalThis?.sessionStorage
      if (!storage) return
      const checkout = storage.getItem('checkout')
      if (checkout) return JSON.parse(checkout).id
    }

    const urlParams = {
      CartToken: getCheckoutToken(),
    }

    globalThis?.GEM_Components.ExternalMethodsComponent.IsOperatedByGlobalE(
      isOperatedByCallback,
    )
    globalThis?.GEM_Components.ExternalMethodsComponent.GetCheckoutUrl(
      urlParams,
      getCheckoutUrlCallback,
    )

    const { protocol, pathname, search } = new URL(checkout.webUrl)
    const redirect: string = `${protocol}//${domain}${pathname}${search}`

    if (isOperated == true) {
      console.log('is operated')
      router.push(checkoutUrl || '/intl-checkout')
    } else {
      console.log('is not operated')
      window.location.href = redirect
    }
  }

  const value = {
    ...useCheckoutValues,
    goToCheckout,
  }

  return (
    <ShopifyContext.Provider value={value}>{children}</ShopifyContext.Provider>
  )
}
