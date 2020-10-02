import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Button } from '../Button'
import { useAnalytics, useCart, useShopify } from '../../providers'
import { Form, Field } from '../Forms'
import { Heading } from '../Text'
import { Hamburger } from '../Hamburger'
import {
  CartSidebar,
  CloseButtonWrapper,
  CartBottom,
  CartInner,
  CartHeading,
  SubtotalWrapper,
} from './styled'
import { CheckoutProduct } from './CheckoutProduct'
import { Affirm } from '../Affirm'
import { Price } from '../Price'

/**
 * Main Checkout view
 */

interface FormValues {
  note?: string
}

export const Checkout = () => {
  const { sendBeginCheckout } = useAnalytics()
  /* State */
  const { message, open: cartOpen, closeCart } = useCart()
  const { checkout, loading, addNote } = useShopify()

  const lineItems =
    checkout && checkout.lineItems ? unwindEdges(checkout.lineItems)[0] : []

  const title = message || 'Your Cart'

  const handleSubmit = async (values: FormValues) => {
    if (!checkout) throw new Error('There is no checkout')
    const { note } = values
    if (note) await addNote(note)

    sendBeginCheckout(
      lineItems.map((li) => ({
        product: li,
        variant: li.variant,
        quantity: li.quantity,
      })),
    )
    // @ts-ignore
    window.location = checkout.webUrl
  }

  return (
    <CartSidebar open={cartOpen}>
      <CartHeading>
        <CloseButtonWrapper>
          <Hamburger open={true} onClick={closeCart} />
        </CloseButtonWrapper>

        <Heading my={0} level={3} color="dark" textAlign="center">
          {title}
        </Heading>
      </CartHeading>
      {lineItems.length === 0 ? (
        <CartInner center>
          <Heading
            fontStyle="italic"
            textAlign="center"
            color="body.6"
            my={6}
            level={4}
          >
            Your cart is empty
          </Heading>
          <Button level={2} mx="auto" onClick={closeCart}>
            Continue Shopping
          </Button>
        </CartInner>
      ) : (
        <>
          <CartInner isLoading={loading}>
            {lineItems.map((lineItem) => {
              return <CheckoutProduct key={lineItem.id} lineItem={lineItem} />
            })}
          </CartInner>

          <CartBottom>
            {checkout && checkout?.paymentDueV2?.amount ? (
              <SubtotalWrapper>
                <Heading level={4} weight={2}>
                  Total:
                </Heading>
                <div>
                  <Heading level={4} textTransform="uppercase" weight={2}>
                    {/* @ts-ignore */}
                    <Price price={checkout.paymentDueV2} />
                  </Heading>
                  <Affirm price={checkout.paymentDueV2} />
                </div>
              </SubtotalWrapper>
            ) : null}
            <Form<FormValues> onSubmit={handleSubmit} initialValues={{}}>
              <Heading level={5} textAlign="center">
                Please leave special instructions below
              </Heading>
              <Field type="textarea" name="notes" />
              <Button
                type="submit"
                mt={4}
                mb={0}
                width="100%"
                level={1}
                disabled={loading}
              >
                Checkout
              </Button>

              <Heading my={3} level={6} textAlign="center">
                Shipping and discount codes are added at checkout.
              </Heading>
            </Form>
          </CartBottom>
        </>
      )}
    </CartSidebar>
  )
}
