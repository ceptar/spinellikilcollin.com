import { useRouter } from 'next/router'
import { useEffect, useReducer } from 'react'
import {
  ShopifyProduct,
  ShopifyProductVariant,
  ShopifySourceSelectedOption,
} from '../../types'
import { CheckoutLineItemInput } from '../ShopifyProvider/types'

const CLOSE = 'CLOSE'
const OPEN = 'OPEN'

export enum ModalName {
  RING_SIZER = 'RING_SIZER',
  SIZE_CONVERTER = 'SIZE_CONVERTER',
  CUSTOMIZATION = 'CUSTOMIZATION',
  CONTACT = 'CONTACT',
  DIAMOND = 'DIAMOND',
}

interface State {
  currentModal: ModalName | null
  currentProduct?: ShopifyProduct
  currentVariant?: ShopifyProductVariant
  currentDiamond?: ShopifySourceSelectedOption
  addLineItem?: (lineItem: CheckoutLineItemInput) => Promise<void>
  formtype?: string
}

interface CloseAction {
  type: typeof CLOSE
}

interface OpenFormAction {
  type: typeof OPEN
  currentModal: ModalName
  formtype?: string
  currentProduct?: ShopifyProduct
  currentVariant?: ShopifyProductVariant
  currentDiamond?: ShopifySourceSelectedOption
  addLineItem?: (lineItem: CheckoutLineItemInput) => Promise<void>
}

type Action = CloseAction | OpenFormAction

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case OPEN: {
      return {
        currentModal: action.currentModal,
        currentProduct: action.currentProduct,
        currentVariant: action.currentVariant,
        currentDiamond: action.currentDiamond,
        addLineItem: action.addLineItem,
        formtype: action.formtype,
      }
    }
    case CLOSE:
      return {
        currentModal: null,
        currentProduct: undefined,
        currentVariant: undefined,
        formtype: undefined,
      }
    default:
      // @ts-ignore
      throw new Error(`"${action.type} is not a valid action"`)
  }
}
const initialState = {
  currentModal: null,
}

export interface OpenModalArgs {
  currentProduct?: ShopifyProduct
  currentVariant?: ShopifyProductVariant
  currentDiamond?: ShopifySourceSelectedOption
  addLineItem?: (lineItem: CheckoutLineItemInput) => Promise<void>
  formtype?: string
}

export interface ContactModalArgs extends OpenModalArgs {
  formtype: string
}

export const useModalReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { asPath } = useRouter()

  const closeModal = () => dispatch({ type: CLOSE })

  const openRingSizerModal = (args?: OpenModalArgs) =>
    dispatch({
      type: OPEN,
      currentModal: ModalName.RING_SIZER,
      currentProduct: args?.currentProduct,
      currentVariant: args?.currentVariant,
    })

  const openSizeConverterModal = (args?: OpenModalArgs) =>
    dispatch({
      type: OPEN,
      currentModal: ModalName.SIZE_CONVERTER,
      currentProduct: args?.currentProduct,
      currentVariant: args?.currentVariant,
      addLineItem: args?.addLineItem,
    })

  const openCustomizationModal = (args?: OpenModalArgs) => {
    dispatch({
      type: OPEN,
      currentModal: ModalName.CUSTOMIZATION,
      currentProduct: args?.currentProduct,
      currentVariant: args?.currentVariant,
    })
  }

  const openDiamondModal = (args?: OpenModalArgs) => {
    dispatch({
      type: OPEN,
      currentModal: ModalName.DIAMOND,
      currentProduct: args?.currentProduct,
      currentVariant: args?.currentVariant,
      currentDiamond: args?.currentDiamond,
    })
  }

  const openContactModal = ({
    formtype,
    currentProduct,
    currentVariant,
  }: ContactModalArgs) =>
    dispatch({
      type: OPEN,
      currentModal: ModalName.CONTACT,
      formtype,
      currentProduct,
      currentVariant,
    })

  // Close all modals on route change
  useEffect(() => {
    closeModal()
  }, [asPath])

  return {
    state,
    closeModal,
    openRingSizerModal,
    openSizeConverterModal,
    openCustomizationModal,
    openContactModal,
    openDiamondModal,
  }
}
