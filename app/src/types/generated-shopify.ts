export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type ShopifyStorefrontAddCountryInput = {
  country_code: Scalars['String']['input']
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontAddCurrencyCodeInput = {
  code?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontAddLineItemInput = {
  id: Scalars['ID']['input']
  metadata?: InputMaybe<Scalars['String']['input']>
  quantity: Scalars['Int']['input']
  variant_id: Scalars['ID']['input']
}

export type ShopifyStorefrontAddShippingAddressInput = {
  address_1: Scalars['String']['input']
  address_2?: InputMaybe<Scalars['String']['input']>
  city: Scalars['String']['input']
  company?: InputMaybe<Scalars['String']['input']>
  country_code: Scalars['String']['input']
  first_name: Scalars['String']['input']
  last_name: Scalars['String']['input']
  metadata?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  postal_code: Scalars['String']['input']
  province?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontAddShippingMethodInput = {
  data?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  option_id: Scalars['ID']['input']
}

export type ShopifyStorefrontAdditionalItemsInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>
  variant_id?: InputMaybe<Scalars['ID']['input']>
}

export interface ShopifyStorefrontAddress {
  __typename: 'Address'
  address_1?: Maybe<Scalars['String']['output']>
  address_2?: Maybe<Scalars['String']['output']>
  city?: Maybe<Scalars['String']['output']>
  company?: Maybe<Scalars['String']['output']>
  country_code?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['String']['output']>
  customer_id?: Maybe<Scalars['ID']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  last_name?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  phone?: Maybe<Scalars['String']['output']>
  postal_code?: Maybe<Scalars['String']['output']>
  province?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
}

export type ShopifyStorefrontAddressInput = {
  address_1?: InputMaybe<Scalars['String']['input']>
  address_2?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  company?: InputMaybe<Scalars['String']['input']>
  country_code?: InputMaybe<Scalars['String']['input']>
  created_at?: InputMaybe<Scalars['String']['input']>
  customer_id?: InputMaybe<Scalars['ID']['input']>
  deleted_at?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  province?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<Scalars['String']['input']>
}

export enum ShopifyStorefrontAllocationType {
  Item = 'ITEM',
  Total = 'TOTAL',
}

export interface ShopifyStorefrontCart {
  __typename: 'Cart'
  billing_address?: Maybe<ShopifyStorefrontAddress>
  billing_address_id?: Maybe<Scalars['ID']['output']>
  completed_at?: Maybe<Scalars['String']['output']>
  context?: Maybe<Scalars['String']['output']>
  customer?: Maybe<ShopifyStorefrontCustomer>
  customer_id?: Maybe<Scalars['ID']['output']>
  discount_total?: Maybe<Scalars['Float']['output']>
  discounts: Array<ShopifyStorefrontDiscount>
  email?: Maybe<Scalars['String']['output']>
  gift_card_tax_total?: Maybe<Scalars['Float']['output']>
  gift_card_total?: Maybe<Scalars['Float']['output']>
  gift_cards: Array<ShopifyStorefrontGiftCard>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  item_tax_total?: Maybe<Scalars['Float']['output']>
  items: Array<ShopifyStorefrontLineItem>
  metadata?: Maybe<Scalars['String']['output']>
  payment?: Maybe<ShopifyStorefrontPayment>
  payment_authorized_at?: Maybe<Scalars['String']['output']>
  payment_id?: Maybe<Scalars['ID']['output']>
  payment_session?: Maybe<ShopifyStorefrontPaymentSession>
  payment_sessions: Array<ShopifyStorefrontPaymentSession>
  refundable_amount?: Maybe<Scalars['Float']['output']>
  refunded_total?: Maybe<Scalars['Float']['output']>
  region?: Maybe<ShopifyStorefrontRegion>
  region_id?: Maybe<Scalars['ID']['output']>
  sales_channel?: Maybe<ShopifyStorefrontSalesChannel>
  sales_channel_id?: Maybe<Scalars['ID']['output']>
  shipping_addess_id?: Maybe<Scalars['ID']['output']>
  shipping_address?: Maybe<ShopifyStorefrontAddress>
  shipping_methods: Array<ShopifyStorefrontShippingMethod>
  shipping_tax_total?: Maybe<Scalars['Float']['output']>
  shipping_total?: Maybe<Scalars['Float']['output']>
  subtotal?: Maybe<Scalars['Float']['output']>
  tax_total?: Maybe<Scalars['Float']['output']>
  total?: Maybe<Scalars['Float']['output']>
  type?: Maybe<ShopifyStorefrontCartType>
}

export enum ShopifyStorefrontCartType {
  Claim = 'CLAIM',
  Default = 'DEFAULT',
  Draftorder = 'DRAFTORDER',
  Paymentlink = 'PAYMENTLINK',
  Swap = 'SWAP',
}

export enum ShopifyStorefrontClaimFulfillmentStatus {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  Notfulfilled = 'NOTFULFILLED',
  Partiallyfulfilled = 'PARTIALLYFULFILLED',
  Partiallyreturned = 'PARTIALLYRETURNED',
  Partiallyshipped = 'PARTIALLYSHIPPED',
  Requiresaction = 'REQUIRESACTION',
  Returned = 'RETURNED',
  Shipped = 'SHIPPED',
}

export interface ShopifyStorefrontClaimImage {
  __typename: 'ClaimImage'
  claim_item?: Maybe<ShopifyStorefrontClaimItem>
  claim_item_id: Scalars['ID']['output']
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
}

export interface ShopifyStorefrontClaimItem {
  __typename: 'ClaimItem'
  claim_order?: Maybe<ShopifyStorefrontClaimOrder>
  claim_order_id: Scalars['ID']['output']
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  images: Array<ShopifyStorefrontClaimImage>
  item?: Maybe<ShopifyStorefrontLineItem>
  item_id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  note?: Maybe<Scalars['String']['output']>
  quantity: Scalars['Int']['output']
  reason: ShopifyStorefrontClaimReason
  tags: Array<ShopifyStorefrontClaimTag>
  updated_at?: Maybe<Scalars['String']['output']>
  variant?: Maybe<ShopifyStorefrontProductVariant>
  variant_id: Scalars['ID']['output']
}

export interface ShopifyStorefrontClaimOrder {
  __typename: 'ClaimOrder'
  additional_items: Array<ShopifyStorefrontLineItem>
  canceled_at?: Maybe<Scalars['String']['output']>
  claim_items: Array<ShopifyStorefrontClaimItem>
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  fulfillment_status?: Maybe<ShopifyStorefrontClaimFulfillmentStatus>
  fulfillments: Array<ShopifyStorefrontFulfillment>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  no_notification?: Maybe<Scalars['Boolean']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id: Scalars['ID']['output']
  payment_status?: Maybe<ShopifyStorefrontClaimPaymentStatus>
  refund_amount?: Maybe<Scalars['Float']['output']>
  return_order?: Maybe<ShopifyStorefrontReturn>
  shipping_address?: Maybe<ShopifyStorefrontAddress>
  shipping_address_id?: Maybe<Scalars['ID']['output']>
  shipping_methods: Array<ShopifyStorefrontShippingMethod>
  type: ShopifyStorefrontClaimType
  updated_at?: Maybe<Scalars['String']['output']>
}

export enum ShopifyStorefrontClaimPaymentStatus {
  Na = 'NA',
  Notrefunded = 'NOTREFUNDED',
  Refunded = 'REFUNDED',
}

export enum ShopifyStorefrontClaimReason {
  Missingitem = 'MISSINGITEM',
  Other = 'OTHER',
  Productionfailure = 'PRODUCTIONFAILURE',
  Wrongitem = 'WRONGITEM',
}

export interface ShopifyStorefrontClaimTag {
  __typename: 'ClaimTag'
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
  value: Scalars['String']['output']
}

export enum ShopifyStorefrontClaimType {
  Refund = 'REFUND',
  Replace = 'REPLACE',
}

export type ShopifyStorefrontCompleteCartInput = {
  id: Scalars['ID']['input']
}

export interface ShopifyStorefrontCompleteCartResponse {
  __typename: 'CompleteCartResponse'
  data?: Maybe<Scalars['String']['output']>
  type?: Maybe<ShopifyStorefrontCompleteCartType>
}

export enum ShopifyStorefrontCompleteCartType {
  Cart = 'CART',
  Order = 'ORDER',
  Swap = 'SWAP',
}

export type ShopifyStorefrontCompleteOrderEditInput = {
  id: Scalars['ID']['input']
}

export interface ShopifyStorefrontCountry {
  __typename: 'Country'
  display_name?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  iso_2?: Maybe<Scalars['String']['output']>
  iso_3?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  num_code?: Maybe<Scalars['String']['output']>
  region?: Maybe<ShopifyStorefrontRegion>
  region_id?: Maybe<Scalars['ID']['output']>
}

export type ShopifyStorefrontCreateCartInput = {
  context?: InputMaybe<Scalars['String']['input']>
  country_code?: InputMaybe<Scalars['String']['input']>
  items?: InputMaybe<Array<ShopifyStorefrontCreateCartItemsInput>>
  region_id?: InputMaybe<Scalars['ID']['input']>
  sales_channel_id?: InputMaybe<Scalars['ID']['input']>
}

export type ShopifyStorefrontCreateCartItemsInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>
  variant_id?: InputMaybe<Scalars['ID']['input']>
}

export type ShopifyStorefrontCreateCustomerInput = {
  email: Scalars['String']['input']
  first_name: Scalars['String']['input']
  last_name: Scalars['String']['input']
  password: Scalars['String']['input']
  phone?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontCreatePaymentSessionsInput = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontCreateReturnInput = {
  items: Array<ShopifyStorefrontCreateReturnItemsInput>
  order_id: Scalars['ID']['input']
  return_shipping?: InputMaybe<ShopifyStorefrontCreateReturnReturnShippingInput>
}

export type ShopifyStorefrontCreateReturnItemsInput = {
  item_id: Scalars['ID']['input']
  note?: InputMaybe<Scalars['String']['input']>
  quantity: Scalars['Int']['input']
  reason_id?: InputMaybe<Scalars['ID']['input']>
}

export type ShopifyStorefrontCreateReturnReasonInput = {
  description: Scalars['String']['input']
  label: Scalars['String']['input']
  metadata?: InputMaybe<Scalars['String']['input']>
  parent_return_reason_id?: InputMaybe<Scalars['ID']['input']>
  value: Scalars['String']['input']
}

export type ShopifyStorefrontCreateReturnReturnShippingInput = {
  option_id: Scalars['ID']['input']
}

export type ShopifyStorefrontCreateSwapInput = {
  additional_items: Array<ShopifyStorefrontAdditionalItemsInput>
  order_id: Scalars['ID']['input']
  return_items: Array<ShopifyStorefrontReturnItemsInput>
  return_shipping_option?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontCreateUserInput = {
  email: Scalars['String']['input']
  first_name?: InputMaybe<Scalars['String']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  role?: InputMaybe<ShopifyStorefrontUserRole>
}

export interface ShopifyStorefrontCurrency {
  __typename: 'Currency'
  code?: Maybe<Scalars['String']['output']>
  includes_tax?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  symbol?: Maybe<Scalars['String']['output']>
  symbol_native?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontCustomer {
  __typename: 'Customer'
  billing_address?: Maybe<ShopifyStorefrontAddress>
  billing_address_id?: Maybe<Scalars['ID']['output']>
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  email: Scalars['String']['output']
  first_name: Scalars['String']['output']
  groups: Array<ShopifyStorefrontCustomerGroup>
  has_account?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  last_name: Scalars['String']['output']
  metadata?: Maybe<Scalars['String']['output']>
  orders: Array<ShopifyStorefrontOrder>
  phone?: Maybe<Scalars['String']['output']>
  shipping_addresses: Array<ShopifyStorefrontAddress>
  updated_at?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontCustomerGroup {
  __typename: 'CustomerGroup'
  created_at?: Maybe<Scalars['String']['output']>
  customers: Array<ShopifyStorefrontCustomer>
  deleted_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  price_lists: Array<ShopifyStorefrontPriceList>
  updated_at?: Maybe<Scalars['String']['output']>
}

export type ShopifyStorefrontDateComparison = {
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontDeclineOrderEditInput = {
  declined_reason?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontDeleteCurrencyCodeInput = {
  code?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontDeleteLineItemInput = {
  id: Scalars['ID']['input']
  line_id: Scalars['ID']['input']
}

export type ShopifyStorefrontDeletePaymentSessionInput = {
  id: Scalars['ID']['input']
  provider_id: Scalars['ID']['input']
}

export type ShopifyStorefrontDeleteReturnReasonInput = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontDeleteShippingAddressInput = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontDeleteUserInput = {
  id: Scalars['ID']['input']
}

export interface ShopifyStorefrontDeletionResponse {
  __typename: 'DeletionResponse'
  deleted?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['ID']['output']>
  object?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontDiscount {
  __typename: 'Discount'
  code?: Maybe<Scalars['String']['output']>
  ends_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  is_disabled?: Maybe<Scalars['Boolean']['output']>
  is_dynamic?: Maybe<Scalars['Boolean']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  parent_discount?: Maybe<ShopifyStorefrontDiscount>
  parent_discount_id?: Maybe<Scalars['ID']['output']>
  regions: Array<ShopifyStorefrontRegion>
  rule?: Maybe<ShopifyStorefrontDiscountRule>
  rule_id?: Maybe<Scalars['ID']['output']>
  starts_at?: Maybe<Scalars['String']['output']>
  usage_count?: Maybe<Scalars['Int']['output']>
  usage_limit?: Maybe<Scalars['Int']['output']>
  valid_duration?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontDiscountCondition {
  __typename: 'DiscountCondition'
  customer_groups: Array<ShopifyStorefrontCustomerGroup>
  discount_rule?: Maybe<ShopifyStorefrontDiscountRule>
  discount_rule_id?: Maybe<Scalars['ID']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  operator?: Maybe<ShopifyStorefrontDiscountConditionOperator>
  product_collections: Array<ShopifyStorefrontProductCollection>
  product_tags: Array<ShopifyStorefrontProductTag>
  product_types: Array<ShopifyStorefrontProductType>
  products: Array<ShopifyStorefrontProduct>
  type?: Maybe<ShopifyStorefrontDiscountConditionType>
}

export enum ShopifyStorefrontDiscountConditionOperator {
  In = 'IN',
  Notin = 'NOTIN',
}

export enum ShopifyStorefrontDiscountConditionType {
  Customergroups = 'CUSTOMERGROUPS',
  Productcollections = 'PRODUCTCOLLECTIONS',
  Products = 'PRODUCTS',
  Producttags = 'PRODUCTTAGS',
  Producttypes = 'PRODUCTTYPES',
}

export interface ShopifyStorefrontDiscountRule {
  __typename: 'DiscountRule'
  allocation?: Maybe<ShopifyStorefrontAllocationType>
  conditions: Array<ShopifyStorefrontDiscountCondition>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  type?: Maybe<ShopifyStorefrontDiscountRuleType>
  value?: Maybe<Scalars['Float']['output']>
}

export enum ShopifyStorefrontDiscountRuleType {
  Fixed = 'FIXED',
  Freeshipping = 'FREESHIPPING',
  Percentage = 'PERCENTAGE',
}

export interface ShopifyStorefrontDraftOrder {
  __typename: 'DraftOrder'
  canceled_at?: Maybe<Scalars['String']['output']>
  cart?: Maybe<ShopifyStorefrontCart>
  cart_id?: Maybe<Scalars['ID']['output']>
  completed_at?: Maybe<Scalars['String']['output']>
  display_id?: Maybe<Scalars['ID']['output']>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  no_notification_order?: Maybe<Scalars['Boolean']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id?: Maybe<Scalars['ID']['output']>
  status?: Maybe<ShopifyStorefrontDraftOrderStatus>
}

export enum ShopifyStorefrontDraftOrderStatus {
  Completed = 'COMPLETED',
  Open = 'OPEN',
}

export interface ShopifyStorefrontExists {
  __typename: 'Exists'
  exists?: Maybe<Scalars['Boolean']['output']>
}

export interface ShopifyStorefrontFulfillment {
  __typename: 'Fulfillment'
  canceled_at?: Maybe<Scalars['String']['output']>
  claim_order?: Maybe<ShopifyStorefrontClaimOrder>
  claim_order_id?: Maybe<Scalars['ID']['output']>
  data?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  items: Array<ShopifyStorefrontFulfillmentItem>
  metadata?: Maybe<Scalars['String']['output']>
  no_notification?: Maybe<Scalars['Boolean']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id?: Maybe<Scalars['ID']['output']>
  provider?: Maybe<ShopifyStorefrontFulfillmentProvider>
  provider_id: Scalars['ID']['output']
  shipped_at?: Maybe<Scalars['String']['output']>
  swap?: Maybe<ShopifyStorefrontSwap>
  swap_id?: Maybe<Scalars['ID']['output']>
  tracking_links: Array<ShopifyStorefrontTrackingLink>
  tracking_numbers: Array<Scalars['String']['output']>
}

export interface ShopifyStorefrontFulfillmentItem {
  __typename: 'FulfillmentItem'
  fulfillment?: Maybe<ShopifyStorefrontFulfillment>
  fulfillment_id: Scalars['ID']['output']
  item?: Maybe<ShopifyStorefrontLineItem>
  item_id: Scalars['ID']['output']
  quantity: Scalars['Int']['output']
}

export interface ShopifyStorefrontFulfillmentProvider {
  __typename: 'FulfillmentProvider'
  id?: Maybe<Scalars['ID']['output']>
  is_installed?: Maybe<Scalars['Boolean']['output']>
}

export enum ShopifyStorefrontFulfillmentStatus {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  Notfulfilled = 'NOTFULFILLED',
  Partiallyfulfilled = 'PARTIALLYFULFILLED',
  Partiallyreturned = 'PARTIALLYRETURNED',
  Partiallyshipped = 'PARTIALLYSHIPPED',
  Requiresaction = 'REQUIRESACTION',
  Returned = 'RETURNED',
  Shipped = 'SHIPPED',
}

export type ShopifyStorefrontGetByCartIdInput = {
  cart_id: Scalars['ID']['input']
}

export interface ShopifyStorefrontGiftCard {
  __typename: 'GiftCard'
  balance: Scalars['Int']['output']
  code: Scalars['String']['output']
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  ends_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  is_disabled?: Maybe<Scalars['Boolean']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id?: Maybe<Scalars['ID']['output']>
  region?: Maybe<ShopifyStorefrontRegion>
  region_id?: Maybe<Scalars['ID']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
  value: Scalars['Int']['output']
}

export interface ShopifyStorefrontGiftCardTransaction {
  __typename: 'GiftCardTransaction'
  amount: Scalars['Float']['output']
  created_at?: Maybe<Scalars['String']['output']>
  gift_card?: Maybe<ShopifyStorefrontGiftCard>
  gift_card_id: Scalars['ID']['output']
  id: Scalars['ID']['output']
  is_taxable?: Maybe<Scalars['Boolean']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id?: Maybe<Scalars['ID']['output']>
  tax_rate?: Maybe<Scalars['Float']['output']>
}

export interface ShopifyStorefrontIdempotencyKey {
  __typename: 'IdempotencyKey'
  created_at?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  idempotency_key?: Maybe<Scalars['String']['output']>
  locked_at?: Maybe<Scalars['String']['output']>
  recovery_point?: Maybe<Scalars['String']['output']>
  request_method?: Maybe<Scalars['String']['output']>
  request_params?: Maybe<Scalars['String']['output']>
  request_path?: Maybe<Scalars['String']['output']>
  response_body?: Maybe<Scalars['String']['output']>
  response_code?: Maybe<Scalars['Int']['output']>
}

export interface ShopifyStorefrontImage {
  __typename: 'Image'
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
}

export interface ShopifyStorefrontLineItem {
  __typename: 'LineItem'
  adjustments: Array<ShopifyStorefrontLineItemAdjustment>
  allow_discounts?: Maybe<Scalars['Boolean']['output']>
  cart?: Maybe<ShopifyStorefrontCart>
  cart_id?: Maybe<Scalars['ID']['output']>
  claim_order?: Maybe<ShopifyStorefrontClaimOrder>
  claim_order_id?: Maybe<Scalars['ID']['output']>
  description?: Maybe<Scalars['String']['output']>
  discount_total?: Maybe<Scalars['Float']['output']>
  fulfilled_quantity?: Maybe<Scalars['Int']['output']>
  gift_card_total?: Maybe<Scalars['Float']['output']>
  has_shipping?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  includes_tax?: Maybe<Scalars['Boolean']['output']>
  is_giftcard?: Maybe<Scalars['Boolean']['output']>
  is_return?: Maybe<Scalars['Boolean']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_edit?: Maybe<ShopifyStorefrontOrderEdit>
  order_edit_id?: Maybe<Scalars['ID']['output']>
  order_id?: Maybe<Scalars['ID']['output']>
  original_item_id?: Maybe<Scalars['ID']['output']>
  original_tax_total?: Maybe<Scalars['Float']['output']>
  original_total?: Maybe<Scalars['Float']['output']>
  quantity: Scalars['Int']['output']
  refundable?: Maybe<Scalars['Boolean']['output']>
  returned_quantity?: Maybe<Scalars['Int']['output']>
  shipped_quantity?: Maybe<Scalars['Int']['output']>
  should_merge?: Maybe<Scalars['Boolean']['output']>
  subtotal?: Maybe<Scalars['Float']['output']>
  swap?: Maybe<ShopifyStorefrontSwap>
  swap_id?: Maybe<Scalars['ID']['output']>
  tax_lines: Array<ShopifyStorefrontLineItemTaxLine>
  tax_total?: Maybe<Scalars['Float']['output']>
  thumbnail?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  total?: Maybe<Scalars['Float']['output']>
  unit_price: Scalars['Float']['output']
  variant?: Maybe<ShopifyStorefrontProductVariant>
  variant_id?: Maybe<Scalars['ID']['output']>
}

export interface ShopifyStorefrontLineItemAdjustment {
  __typename: 'LineItemAdjustment'
  amount: Scalars['Float']['output']
  description: Scalars['String']['output']
  discount?: Maybe<ShopifyStorefrontDiscount>
  discount_id?: Maybe<Scalars['ID']['output']>
  id: Scalars['ID']['output']
  item?: Maybe<ShopifyStorefrontLineItem>
  item_id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontLineItemTaxLine {
  __typename: 'LineItemTaxLine'
  code?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  item?: Maybe<ShopifyStorefrontLineItem>
  item_id?: Maybe<Scalars['ID']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  rate: Scalars['Float']['output']
}

export interface ShopifyStorefrontListCollection {
  __typename: 'ListCollection'
  collections: Array<ShopifyStorefrontProductCollection>
  count?: Maybe<Scalars['Int']['output']>
  limit?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
}

export interface ShopifyStorefrontListOrdersResponse {
  __typename: 'ListOrdersResponse'
  count?: Maybe<Scalars['Int']['output']>
  limit?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  orders: Array<ShopifyStorefrontOrder>
}

export interface ShopifyStorefrontListProductsResponse {
  __typename: 'ListProductsResponse'
  limit?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  products: Array<ShopifyStorefrontProduct>
}

export interface ShopifyStorefrontMoneyAmount {
  __typename: 'MoneyAmount'
  amount?: Maybe<Scalars['Float']['output']>
  currency?: Maybe<ShopifyStorefrontCurrency>
  currency_code?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  max_quantity?: Maybe<Scalars['Int']['output']>
  min_quantity?: Maybe<Scalars['Int']['output']>
  price_list?: Maybe<ShopifyStorefrontPriceList>
  price_list_id?: Maybe<Scalars['ID']['output']>
  region?: Maybe<ShopifyStorefrontRegion>
  region_id?: Maybe<Scalars['ID']['output']>
  variant?: Maybe<ShopifyStorefrontProductVariant>
  variant_id?: Maybe<Scalars['ID']['output']>
}

export interface ShopifyStorefrontMutation {
  __typename: 'Mutation'
  addCountry?: Maybe<ShopifyStorefrontRegion>
  addCurrencyCode?: Maybe<ShopifyStorefrontStore>
  addLineItem?: Maybe<ShopifyStorefrontCart>
  addShippingAddress?: Maybe<ShopifyStorefrontCustomer>
  addShippingMethod?: Maybe<ShopifyStorefrontCart>
  adminResetPassword?: Maybe<ShopifyStorefrontUser>
  adminResetPasswordToken?: Maybe<ShopifyStorefrontNoContentResponse>
  calculateCartTaxes?: Maybe<ShopifyStorefrontCart>
  completeCart?: Maybe<ShopifyStorefrontCompleteCartResponse>
  completeOrderEdit?: Maybe<ShopifyStorefrontOrderEdit>
  createCart?: Maybe<ShopifyStorefrontCart>
  createCustomer?: Maybe<ShopifyStorefrontCustomer>
  createPaymentSessions?: Maybe<ShopifyStorefrontCart>
  createReturn?: Maybe<ShopifyStorefrontReturn>
  createReturnReason?: Maybe<ShopifyStorefrontReturnReason>
  createSwap?: Maybe<ShopifyStorefrontSwap>
  createUser?: Maybe<ShopifyStorefrontUser>
  declineOrderEdit?: Maybe<ShopifyStorefrontOrderEdit>
  deleteCurrencyCode?: Maybe<ShopifyStorefrontStore>
  deleteLineItem?: Maybe<ShopifyStorefrontCart>
  deletePaymentSession?: Maybe<ShopifyStorefrontCart>
  deleteReturnReason?: Maybe<ShopifyStorefrontDeletionResponse>
  deleteShippingAddress?: Maybe<ShopifyStorefrontCustomer>
  deleteUser?: Maybe<ShopifyStorefrontDeletionResponse>
  refreshPaymentSession?: Maybe<ShopifyStorefrontCart>
  removeDiscount?: Maybe<ShopifyStorefrontCart>
  requestPasswordReset?: Maybe<ShopifyStorefrontNoContentResponse>
  resetPassword?: Maybe<ShopifyStorefrontCustomer>
  selectPaymentSession?: Maybe<ShopifyStorefrontCart>
  updateCart?: Maybe<ShopifyStorefrontCart>
  updateCustomer?: Maybe<ShopifyStorefrontCustomer>
  updateLineItem?: Maybe<ShopifyStorefrontCart>
  updatePaymentSession?: Maybe<ShopifyStorefrontCart>
  updateReturnReason?: Maybe<ShopifyStorefrontReturnReason>
  updateShippingAddress?: Maybe<ShopifyStorefrontCustomer>
  updateStore?: Maybe<ShopifyStorefrontStore>
  updateUser?: Maybe<ShopifyStorefrontUser>
}

export type ShopifyStorefrontMutationAddCountryArgs = {
  input?: InputMaybe<ShopifyStorefrontAddCountryInput>
}

export type ShopifyStorefrontMutationAddCurrencyCodeArgs = {
  input?: InputMaybe<ShopifyStorefrontAddCurrencyCodeInput>
}

export type ShopifyStorefrontMutationAddLineItemArgs = {
  input?: InputMaybe<ShopifyStorefrontAddLineItemInput>
}

export type ShopifyStorefrontMutationAddShippingAddressArgs = {
  input?: InputMaybe<ShopifyStorefrontAddShippingAddressInput>
}

export type ShopifyStorefrontMutationAddShippingMethodArgs = {
  input?: InputMaybe<ShopifyStorefrontAddShippingMethodInput>
}

export type ShopifyStorefrontMutationAdminResetPasswordArgs = {
  input?: InputMaybe<ShopifyStorefrontResetPasswordInput>
}

export type ShopifyStorefrontMutationAdminResetPasswordTokenArgs = {
  input?: InputMaybe<ShopifyStorefrontRequestPasswordResetInput>
}

export type ShopifyStorefrontMutationCalculateCartTaxesArgs = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontMutationCompleteCartArgs = {
  input?: InputMaybe<ShopifyStorefrontCompleteCartInput>
}

export type ShopifyStorefrontMutationCompleteOrderEditArgs = {
  input?: InputMaybe<ShopifyStorefrontCompleteOrderEditInput>
}

export type ShopifyStorefrontMutationCreateCartArgs = {
  input?: InputMaybe<ShopifyStorefrontCreateCartInput>
}

export type ShopifyStorefrontMutationCreateCustomerArgs = {
  input?: InputMaybe<ShopifyStorefrontCreateCustomerInput>
}

export type ShopifyStorefrontMutationCreatePaymentSessionsArgs = {
  input?: InputMaybe<ShopifyStorefrontCreatePaymentSessionsInput>
}

export type ShopifyStorefrontMutationCreateReturnArgs = {
  input?: InputMaybe<ShopifyStorefrontCreateReturnInput>
}

export type ShopifyStorefrontMutationCreateReturnReasonArgs = {
  input?: InputMaybe<ShopifyStorefrontCreateReturnReasonInput>
}

export type ShopifyStorefrontMutationCreateSwapArgs = {
  input?: InputMaybe<ShopifyStorefrontCreateSwapInput>
}

export type ShopifyStorefrontMutationCreateUserArgs = {
  input?: InputMaybe<ShopifyStorefrontCreateUserInput>
}

export type ShopifyStorefrontMutationDeclineOrderEditArgs = {
  input?: InputMaybe<ShopifyStorefrontDeclineOrderEditInput>
}

export type ShopifyStorefrontMutationDeleteCurrencyCodeArgs = {
  input?: InputMaybe<ShopifyStorefrontDeleteCurrencyCodeInput>
}

export type ShopifyStorefrontMutationDeleteLineItemArgs = {
  input?: InputMaybe<ShopifyStorefrontDeleteLineItemInput>
}

export type ShopifyStorefrontMutationDeletePaymentSessionArgs = {
  input?: InputMaybe<ShopifyStorefrontDeletePaymentSessionInput>
}

export type ShopifyStorefrontMutationDeleteReturnReasonArgs = {
  input?: InputMaybe<ShopifyStorefrontDeleteReturnReasonInput>
}

export type ShopifyStorefrontMutationDeleteShippingAddressArgs = {
  input?: InputMaybe<ShopifyStorefrontDeleteShippingAddressInput>
}

export type ShopifyStorefrontMutationDeleteUserArgs = {
  input?: InputMaybe<ShopifyStorefrontDeleteUserInput>
}

export type ShopifyStorefrontMutationRefreshPaymentSessionArgs = {
  input?: InputMaybe<ShopifyStorefrontRefreshPaymentSessionInput>
}

export type ShopifyStorefrontMutationRemoveDiscountArgs = {
  input?: InputMaybe<ShopifyStorefrontRemoveDiscountInput>
}

export type ShopifyStorefrontMutationRequestPasswordResetArgs = {
  input?: InputMaybe<ShopifyStorefrontResetPasswordTokenInput>
}

export type ShopifyStorefrontMutationResetPasswordArgs = {
  input?: InputMaybe<ShopifyStorefrontResetPasswordInput>
}

export type ShopifyStorefrontMutationSelectPaymentSessionArgs = {
  input?: InputMaybe<ShopifyStorefrontSelectPaymentSessionInput>
}

export type ShopifyStorefrontMutationUpdateCartArgs = {
  input?: InputMaybe<ShopifyStorefrontUpdateCartInput>
}

export type ShopifyStorefrontMutationUpdateCustomerArgs = {
  input?: InputMaybe<ShopifyStorefrontUpdateCustomerInput>
}

export type ShopifyStorefrontMutationUpdateLineItemArgs = {
  input?: InputMaybe<ShopifyStorefrontUpdateLineItemInput>
}

export type ShopifyStorefrontMutationUpdatePaymentSessionArgs = {
  input?: InputMaybe<ShopifyStorefrontUpdatePaymentSessionInput>
}

export type ShopifyStorefrontMutationUpdateReturnReasonArgs = {
  input?: InputMaybe<ShopifyStorefrontUpdateReturnReasonInput>
}

export type ShopifyStorefrontMutationUpdateShippingAddressArgs = {
  input?: InputMaybe<ShopifyStorefrontUpdateShippingAddressInput>
}

export type ShopifyStorefrontMutationUpdateStoreArgs = {
  input?: InputMaybe<ShopifyStorefrontUpdateStoreInput>
}

export type ShopifyStorefrontMutationUpdateUserArgs = {
  input?: InputMaybe<ShopifyStorefrontUpdateUserInput>
}

export interface ShopifyStorefrontNoContentResponse {
  __typename: 'NoContentResponse'
  success?: Maybe<Scalars['Boolean']['output']>
}

export interface ShopifyStorefrontNotificationProvider {
  __typename: 'NotificationProvider'
  id?: Maybe<Scalars['ID']['output']>
  is_installed?: Maybe<Scalars['Boolean']['output']>
}

export interface ShopifyStorefrontOauth {
  __typename: 'Oauth'
  application_name?: Maybe<Scalars['String']['output']>
  data?: Maybe<Scalars['String']['output']>
  display_name?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  install_url?: Maybe<Scalars['String']['output']>
  uninstall_url?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontOrder {
  __typename: 'Order'
  billing_address?: Maybe<ShopifyStorefrontAddress>
  billing_address_id?: Maybe<Scalars['ID']['output']>
  canceled_at?: Maybe<Scalars['String']['output']>
  cart?: Maybe<ShopifyStorefrontCart>
  cart_id?: Maybe<Scalars['ID']['output']>
  claims: Array<ShopifyStorefrontClaimOrder>
  currency?: Maybe<ShopifyStorefrontCurrency>
  currency_code: Scalars['String']['output']
  customer?: Maybe<ShopifyStorefrontCustomer>
  customer_id: Scalars['ID']['output']
  discount_total?: Maybe<Scalars['Float']['output']>
  discounts: Array<ShopifyStorefrontDiscount>
  display_id?: Maybe<Scalars['ID']['output']>
  draft_order?: Maybe<ShopifyStorefrontDraftOrder>
  draft_order_id?: Maybe<Scalars['ID']['output']>
  edits: Array<ShopifyStorefrontOrderEdit>
  email: Scalars['String']['output']
  external_id?: Maybe<Scalars['String']['output']>
  fulfillment_status?: Maybe<ShopifyStorefrontFulfillmentStatus>
  fulfillments: Array<ShopifyStorefrontFulfillment>
  gift_card_tax_total?: Maybe<Scalars['Float']['output']>
  gift_card_total?: Maybe<Scalars['Float']['output']>
  gift_card_transactions: Array<ShopifyStorefrontGiftCardTransaction>
  gift_cards: Array<ShopifyStorefrontGiftCard>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  items: Array<ShopifyStorefrontLineItem>
  metadata?: Maybe<Scalars['String']['output']>
  no_notification?: Maybe<Scalars['Boolean']['output']>
  paid_total?: Maybe<Scalars['Float']['output']>
  payment_status?: Maybe<ShopifyStorefrontPaymentStatus>
  payments: Array<ShopifyStorefrontPayment>
  refundable_amount?: Maybe<Scalars['Float']['output']>
  refunded_total?: Maybe<Scalars['Float']['output']>
  refunds: Array<ShopifyStorefrontRefund>
  region?: Maybe<ShopifyStorefrontRegion>
  region_id: Scalars['ID']['output']
  returns: Array<ShopifyStorefrontReturn>
  sales_channel?: Maybe<ShopifyStorefrontSalesChannel>
  sales_channel_id?: Maybe<Scalars['ID']['output']>
  shipping_address?: Maybe<ShopifyStorefrontAddress>
  shipping_address_id?: Maybe<Scalars['ID']['output']>
  shipping_methods: Array<ShopifyStorefrontShippingMethod>
  shipping_total?: Maybe<Scalars['Float']['output']>
  status?: Maybe<ShopifyStorefrontOrderStatus>
  subtotal?: Maybe<Scalars['Float']['output']>
  swaps: Array<ShopifyStorefrontSwap>
  tax_rate?: Maybe<Scalars['Float']['output']>
  tax_total?: Maybe<Scalars['Float']['output']>
  total?: Maybe<Scalars['Float']['output']>
}

export interface ShopifyStorefrontOrderEdit {
  __typename: 'OrderEdit'
  canceled_at?: Maybe<Scalars['String']['output']>
  canceled_by?: Maybe<Scalars['String']['output']>
  changes: Array<ShopifyStorefrontOrderItemChange>
  confirmed_at?: Maybe<Scalars['String']['output']>
  confirmed_by?: Maybe<Scalars['String']['output']>
  created_by: Scalars['String']['output']
  declined_at?: Maybe<Scalars['String']['output']>
  declined_by?: Maybe<Scalars['String']['output']>
  declined_reason?: Maybe<Scalars['String']['output']>
  difference_due?: Maybe<Scalars['Float']['output']>
  discount_total?: Maybe<Scalars['Float']['output']>
  gift_card_tax_total?: Maybe<Scalars['Float']['output']>
  gift_card_total?: Maybe<Scalars['Float']['output']>
  id: Scalars['ID']['output']
  internal_note?: Maybe<Scalars['String']['output']>
  items: Array<ShopifyStorefrontLineItem>
  order: ShopifyStorefrontOrder
  order_id: Scalars['ID']['output']
  payment_collection?: Maybe<ShopifyStorefrontPaymentCollection>
  payment_collection_id?: Maybe<Scalars['ID']['output']>
  requested_at?: Maybe<Scalars['String']['output']>
  requested_by?: Maybe<Scalars['String']['output']>
  shipping_total?: Maybe<Scalars['Float']['output']>
  status?: Maybe<ShopifyStorefrontOrderEditStatus>
  subtotal?: Maybe<Scalars['Float']['output']>
  tax_total?: Maybe<Scalars['Float']['output']>
  total?: Maybe<Scalars['Float']['output']>
}

export enum ShopifyStorefrontOrderEditItemChangeType {
  Itemadd = 'ITEMADD',
  Itemremove = 'ITEMREMOVE',
  Itemupdate = 'ITEMUPDATE',
}

export enum ShopifyStorefrontOrderEditStatus {
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  Created = 'CREATED',
  Declined = 'DECLINED',
  Requested = 'REQUESTED',
}

export interface ShopifyStorefrontOrderItemChange {
  __typename: 'OrderItemChange'
  id: Scalars['ID']['output']
  line_item?: Maybe<ShopifyStorefrontLineItem>
  line_item_id?: Maybe<Scalars['ID']['output']>
  order_edit?: Maybe<ShopifyStorefrontOrderEdit>
  order_edit_id: Scalars['ID']['output']
  original_line_item?: Maybe<ShopifyStorefrontLineItem>
  original_line_item_id?: Maybe<Scalars['ID']['output']>
  type: ShopifyStorefrontOrderEditItemChangeType
}

export enum ShopifyStorefrontOrderStatus {
  Archived = 'ARCHIVED',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  RequiresAction = 'REQUIRES_ACTION',
}

export interface ShopifyStorefrontPayment {
  __typename: 'Payment'
  amount: Scalars['Float']['output']
  amount_refunded?: Maybe<Scalars['Float']['output']>
  canceled_at?: Maybe<Scalars['String']['output']>
  captured_at?: Maybe<Scalars['String']['output']>
  cart?: Maybe<ShopifyStorefrontCart>
  cart_id?: Maybe<Scalars['ID']['output']>
  currency?: Maybe<ShopifyStorefrontCurrency>
  currency_code: Scalars['String']['output']
  data?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id?: Maybe<Scalars['ID']['output']>
  provider_id: Scalars['ID']['output']
  swap?: Maybe<ShopifyStorefrontSwap>
  swap_id?: Maybe<Scalars['ID']['output']>
}

export interface ShopifyStorefrontPaymentCollection {
  __typename: 'PaymentCollection'
  amount?: Maybe<Scalars['Float']['output']>
  authorized_amount?: Maybe<Scalars['Float']['output']>
  captured_amount?: Maybe<Scalars['Float']['output']>
  created_by?: Maybe<Scalars['String']['output']>
  currency?: Maybe<ShopifyStorefrontCurrency>
  currency_code?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  payment_sessions: Array<ShopifyStorefrontPaymentSession>
  payments: Array<ShopifyStorefrontPayment>
  refunded_amount?: Maybe<Scalars['Float']['output']>
  region?: Maybe<ShopifyStorefrontRegion>
  region_id?: Maybe<Scalars['ID']['output']>
  status?: Maybe<ShopifyStorefrontPaymentCollectionStatus>
  type?: Maybe<ShopifyStorefrontPaymentCollectionType>
}

export enum ShopifyStorefrontPaymentCollectionStatus {
  Authorized = 'AUTHORIZED',
  Awaiting = 'AWAITING',
  Canceled = 'CANCELED',
  Captured = 'CAPTURED',
  Notpaid = 'NOTPAID',
  Partiallyauthorized = 'PARTIALLYAUTHORIZED',
  Partiallycaptured = 'PARTIALLYCAPTURED',
  Partiallyrefunded = 'PARTIALLYREFUNDED',
  Refunded = 'REFUNDED',
  Requiresaction = 'REQUIRESACTION',
}

export enum ShopifyStorefrontPaymentCollectionType {
  Orderedit = 'ORDEREDIT',
}

export interface ShopifyStorefrontPaymentMethodsResponse {
  __typename: 'PaymentMethodsResponse'
  data?: Maybe<Scalars['String']['output']>
  provider_id?: Maybe<Scalars['ID']['output']>
}

export interface ShopifyStorefrontPaymentProvider {
  __typename: 'PaymentProvider'
  id?: Maybe<Scalars['ID']['output']>
  is_installed?: Maybe<Scalars['Boolean']['output']>
}

export interface ShopifyStorefrontPaymentSession {
  __typename: 'PaymentSession'
  amount?: Maybe<Scalars['Float']['output']>
  cart?: Maybe<ShopifyStorefrontCart>
  cart_id: Scalars['ID']['output']
  data?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  is_selected?: Maybe<Scalars['Boolean']['output']>
  payment_authorized_at?: Maybe<Scalars['String']['output']>
  provider_id: Scalars['ID']['output']
  status: Scalars['String']['output']
}

export enum ShopifyStorefrontPaymentSessionStatus {
  Authorized = 'AUTHORIZED',
  Canceled = 'CANCELED',
  Error = 'ERROR',
  Pending = 'PENDING',
  Requiresmore = 'REQUIRESMORE',
}

export enum ShopifyStorefrontPaymentStatus {
  Awaiting = 'AWAITING',
  Canceled = 'CANCELED',
  Captured = 'CAPTURED',
  Notpaid = 'NOTPAID',
  Partiallyrefunded = 'PARTIALLYREFUNDED',
  Refunded = 'REFUNDED',
  Requiresaction = 'REQUIRESACTION',
}

export interface ShopifyStorefrontPriceList {
  __typename: 'PriceList'
  customer_groups: Array<ShopifyStorefrontCustomerGroup>
  description?: Maybe<Scalars['String']['output']>
  ends_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  includes_tax?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  prices: Array<ShopifyStorefrontMoneyAmount>
  starts_at?: Maybe<Scalars['String']['output']>
  status?: Maybe<ShopifyStorefrontPriceListStatus>
  type?: Maybe<ShopifyStorefrontPriceListType>
}

export enum ShopifyStorefrontPriceListStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
}

export enum ShopifyStorefrontPriceListType {
  Override = 'OVERRIDE',
  Sale = 'SALE',
}

export interface ShopifyStorefrontProduct {
  __typename: 'Product'
  collection?: Maybe<ShopifyStorefrontProductCollection>
  collection_id?: Maybe<Scalars['ID']['output']>
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  discountable?: Maybe<Scalars['Boolean']['output']>
  external_id?: Maybe<Scalars['String']['output']>
  handle?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Float']['output']>
  hs_code?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  images: Array<ShopifyStorefrontImage>
  is_giftcard?: Maybe<Scalars['Boolean']['output']>
  length?: Maybe<Scalars['Float']['output']>
  material?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  mid_code?: Maybe<Scalars['String']['output']>
  options: Array<ShopifyStorefrontProductOption>
  origin_country?: Maybe<Scalars['String']['output']>
  profile?: Maybe<ShopifyStorefrontShippingProfile>
  profile_id?: Maybe<Scalars['ID']['output']>
  sales_channels?: Maybe<Array<ShopifyStorefrontSalesChannel>>
  status?: Maybe<ShopifyStorefrontProductStatus>
  subtitle?: Maybe<Scalars['String']['output']>
  tags: Array<ShopifyStorefrontProductTag>
  thumbnail?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  type?: Maybe<ShopifyStorefrontProductType>
  type_id?: Maybe<Scalars['ID']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
  variants: Array<ShopifyStorefrontProductVariant>
  weight?: Maybe<Scalars['Float']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export interface ShopifyStorefrontProductCollection {
  __typename: 'ProductCollection'
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  handle?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  products: Array<ShopifyStorefrontProduct>
  title: Scalars['String']['output']
  updated_at?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontProductOption {
  __typename: 'ProductOption'
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  product?: Maybe<ShopifyStorefrontProduct>
  product_id?: Maybe<Scalars['ID']['output']>
  title?: Maybe<Scalars['String']['output']>
  values: Array<ShopifyStorefrontProductOptionValue>
}

export interface ShopifyStorefrontProductOptionValue {
  __typename: 'ProductOptionValue'
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  option?: Maybe<ShopifyStorefrontProductOption>
  option_id?: Maybe<Scalars['ID']['output']>
  value?: Maybe<Scalars['String']['output']>
  variant?: Maybe<ShopifyStorefrontProductVariant>
  variant_id?: Maybe<Scalars['ID']['output']>
}

export enum ShopifyStorefrontProductStatus {
  Draft = 'DRAFT',
  Proposed = 'PROPOSED',
  Published = 'PUBLISHED',
  Rejected = 'REJECTED',
}

export interface ShopifyStorefrontProductTag {
  __typename: 'ProductTag'
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontProductType {
  __typename: 'ProductType'
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
  value?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontProductVariant {
  __typename: 'ProductVariant'
  allow_backorder?: Maybe<Scalars['Boolean']['output']>
  barcode?: Maybe<Scalars['String']['output']>
  calculated_price?: Maybe<Scalars['Float']['output']>
  calculated_price_incl_tax?: Maybe<Scalars['Float']['output']>
  calculated_tax?: Maybe<Scalars['Float']['output']>
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  ean?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Float']['output']>
  hs_code?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  inventory_quantity?: Maybe<Scalars['Int']['output']>
  length?: Maybe<Scalars['Float']['output']>
  manage_inventory?: Maybe<Scalars['Boolean']['output']>
  material?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  mid_code?: Maybe<Scalars['String']['output']>
  options?: Maybe<Array<Maybe<ShopifyStorefrontProductOptionValue>>>
  origin_country?: Maybe<Scalars['String']['output']>
  original_price?: Maybe<Scalars['Float']['output']>
  original_price_incl_tax?: Maybe<Scalars['Float']['output']>
  original_tax?: Maybe<Scalars['Float']['output']>
  prices: Array<ShopifyStorefrontMoneyAmount>
  product?: Maybe<ShopifyStorefrontProduct>
  product_id?: Maybe<Scalars['ID']['output']>
  sku?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  upc?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
  variant_rank?: Maybe<Scalars['Int']['output']>
  weight?: Maybe<Scalars['Float']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export interface ShopifyStorefrontQuery {
  __typename: 'Query'
  doesEmailExist?: Maybe<ShopifyStorefrontExists>
  getByCartId?: Maybe<ShopifyStorefrontSwap>
  getCart?: Maybe<ShopifyStorefrontCart>
  getCollection?: Maybe<ShopifyStorefrontProductCollection>
  getCurrentCustomer?: Maybe<ShopifyStorefrontCustomer>
  getGitCardByCode?: Maybe<ShopifyStorefrontGiftCard>
  getOrder?: Maybe<ShopifyStorefrontOrder>
  getOrderByCartId?: Maybe<ShopifyStorefrontOrder>
  getOrderEdit?: Maybe<ShopifyStorefrontOrderEdit>
  getPaymentMethods: Array<ShopifyStorefrontPaymentMethodsResponse>
  getProduct?: Maybe<ShopifyStorefrontProduct>
  getProductVariant?: Maybe<ShopifyStorefrontProductVariant>
  getRegion?: Maybe<ShopifyStorefrontRegion>
  getReturnReason?: Maybe<ShopifyStorefrontReturnReason>
  getStore?: Maybe<ShopifyStorefrontStore>
  getUser?: Maybe<ShopifyStorefrontUser>
  listCollections?: Maybe<ShopifyStorefrontListCollection>
  listCurrencies: Array<ShopifyStorefrontCurrency>
  listOrders: Array<ShopifyStorefrontListOrdersResponse>
  listPaymentProviders: Array<ShopifyStorefrontPaymentProvider>
  listProductVariants?: Maybe<Scalars['String']['output']>
  listProducts?: Maybe<ShopifyStorefrontListProductsResponse>
  listRegions: Array<ShopifyStorefrontRegion>
  listReturnReasons: Array<Maybe<ShopifyStorefrontReturnReason>>
  listShippingOptions: Array<ShopifyStorefrontShippingOption>
  listShippingOptionsForCart: Array<ShopifyStorefrontShippingOption>
  listTaxProviders: Array<ShopifyStorefrontTaxProvider>
  listUsers: Array<ShopifyStorefrontUser>
  lookupOrder?: Maybe<ShopifyStorefrontOrder>
  searchProducts?: Maybe<ShopifyStorefrontSearchProductsResponse>
}

export type ShopifyStorefrontQueryDoesEmailExistArgs = {
  email: Scalars['String']['input']
}

export type ShopifyStorefrontQueryGetByCartIdArgs = {
  input?: InputMaybe<ShopifyStorefrontGetByCartIdInput>
}

export type ShopifyStorefrontQueryGetCartArgs = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryGetCollectionArgs = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryGetGitCardByCodeArgs = {
  code: Scalars['String']['input']
}

export type ShopifyStorefrontQueryGetOrderArgs = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryGetOrderByCartIdArgs = {
  cart_id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryGetOrderEditArgs = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryGetProductArgs = {
  cart_id?: InputMaybe<Scalars['ID']['input']>
  currency_code?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  region_id?: InputMaybe<Scalars['ID']['input']>
}

export type ShopifyStorefrontQueryGetProductVariantArgs = {
  cart_id?: InputMaybe<Scalars['ID']['input']>
  currency_code?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  region_id?: InputMaybe<Scalars['ID']['input']>
}

export type ShopifyStorefrontQueryGetRegionArgs = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryGetReturnReasonArgs = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryGetUserArgs = {
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryListCollectionsArgs = {
  created_at?: InputMaybe<ShopifyStorefrontDateComparison>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  updated_at?: InputMaybe<ShopifyStorefrontDateComparison>
}

export type ShopifyStorefrontQueryListCurrenciesArgs = {
  code?: InputMaybe<Scalars['String']['input']>
  includes_tax?: InputMaybe<Scalars['Boolean']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontQueryListOrdersArgs = {
  canceled_at?: InputMaybe<ShopifyStorefrontDateComparison>
  cart_id?: InputMaybe<Scalars['ID']['input']>
  created_at?: InputMaybe<ShopifyStorefrontDateComparison>
  currency_code?: InputMaybe<Scalars['String']['input']>
  display_id?: InputMaybe<Scalars['ID']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  expand?: InputMaybe<Scalars['String']['input']>
  fields?: InputMaybe<Scalars['String']['input']>
  fulfillment_status?: InputMaybe<Array<Scalars['String']['input']>>
  id?: InputMaybe<Scalars['ID']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  payment_status?: InputMaybe<Array<Scalars['String']['input']>>
  q?: InputMaybe<Scalars['String']['input']>
  region_id?: InputMaybe<Scalars['ID']['input']>
  status?: InputMaybe<Array<Scalars['String']['input']>>
  tax_rate?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<ShopifyStorefrontDateComparison>
}

export type ShopifyStorefrontQueryListProductVariantsArgs = {
  expand?: InputMaybe<Scalars['String']['input']>
  ids?: InputMaybe<Scalars['String']['input']>
  inventory_quantity?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontQueryListProductsArgs = {
  collection_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  created_at?: InputMaybe<ShopifyStorefrontDateComparison>
  description?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  is_giftcard?: InputMaybe<Scalars['Boolean']['input']>
  q?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  updated_at?: InputMaybe<ShopifyStorefrontDateComparison>
}

export type ShopifyStorefrontQueryListRegionsArgs = {
  created_at?: InputMaybe<ShopifyStorefrontDateComparison>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  updated_at?: InputMaybe<ShopifyStorefrontDateComparison>
}

export type ShopifyStorefrontQueryListShippingOptionsArgs = {
  is_return?: InputMaybe<Scalars['Boolean']['input']>
  product_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  region_id?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontQueryListShippingOptionsForCartArgs = {
  cart_id: Scalars['ID']['input']
}

export type ShopifyStorefrontQueryLookupOrderArgs = {
  display_id: Scalars['Int']['input']
  email: Scalars['String']['input']
  shipping_address?: InputMaybe<ShopifyStorefrontShippingAddressQuery>
}

export type ShopifyStorefrontQuerySearchProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  q: Scalars['String']['input']
}

export type ShopifyStorefrontRefreshPaymentSessionInput = {
  id: Scalars['ID']['input']
  provider_id: Scalars['ID']['input']
}

export interface ShopifyStorefrontRefund {
  __typename: 'Refund'
  amount: Scalars['Float']['output']
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  note?: Maybe<Scalars['String']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id: Scalars['ID']['output']
  payment?: Maybe<ShopifyStorefrontPayment>
  payment_id?: Maybe<Scalars['ID']['output']>
  reason?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontRegion {
  __typename: 'Region'
  automatic_taxes?: Maybe<Scalars['Boolean']['output']>
  countries?: Maybe<Array<Maybe<ShopifyStorefrontCountry>>>
  created_at?: Maybe<Scalars['String']['output']>
  currency_code?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  fulfillment_providers?: Maybe<
    Array<Maybe<ShopifyStorefrontFulfillmentProvider>>
  >
  gift_cards_taxable?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  includes_tax?: Maybe<Scalars['Boolean']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  payment_providers?: Maybe<Array<Maybe<ShopifyStorefrontPaymentProvider>>>
  tax_code?: Maybe<Scalars['String']['output']>
  tax_provider_id?: Maybe<Scalars['ID']['output']>
  tax_rate?: Maybe<Scalars['Int']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
}

export type ShopifyStorefrontRemoveDiscountInput = {
  code: Scalars['String']['input']
  id: Scalars['ID']['input']
}

export type ShopifyStorefrontRequestPasswordResetInput = {
  email: Scalars['String']['input']
}

export enum ShopifyStorefrontRequirementType {
  Maxsubtotal = 'MAXSUBTOTAL',
  Minsubtotal = 'MINSUBTOTAL',
}

export type ShopifyStorefrontResetPasswordInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  token: Scalars['String']['input']
}

export type ShopifyStorefrontResetPasswordTokenInput = {
  email: Scalars['String']['input']
}

export interface ShopifyStorefrontReturn {
  __typename: 'Return'
  claim_order?: Maybe<ShopifyStorefrontClaimOrder>
  claim_order_id?: Maybe<Scalars['ID']['output']>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  items: Array<ShopifyStorefrontReturnItem>
  metadata?: Maybe<Scalars['String']['output']>
  no_notification?: Maybe<Scalars['Boolean']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id?: Maybe<Scalars['ID']['output']>
  received_at?: Maybe<Scalars['String']['output']>
  refund_amount: Scalars['Float']['output']
  shipping_data?: Maybe<Scalars['String']['output']>
  shipping_method?: Maybe<ShopifyStorefrontShippingMethod>
  status?: Maybe<ShopifyStorefrontReturnStatus>
  swap?: Maybe<ShopifyStorefrontSwap>
  swap_id?: Maybe<Scalars['ID']['output']>
}

export interface ShopifyStorefrontReturnItem {
  __typename: 'ReturnItem'
  is_requested?: Maybe<Scalars['Boolean']['output']>
  item?: Maybe<ShopifyStorefrontLineItem>
  item_id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  note?: Maybe<Scalars['String']['output']>
  quantity?: Maybe<Scalars['Int']['output']>
  reason?: Maybe<ShopifyStorefrontReturnReason>
  reason_id?: Maybe<Scalars['ID']['output']>
  received_quantity?: Maybe<Scalars['Int']['output']>
  requested_quantity?: Maybe<Scalars['Int']['output']>
  return_id: Scalars['ID']['output']
  return_order?: Maybe<ShopifyStorefrontReturn>
}

export type ShopifyStorefrontReturnItemsInput = {
  item_id: Scalars['ID']['input']
  note?: InputMaybe<Scalars['String']['input']>
  quantity: Scalars['Int']['input']
  reason_id?: InputMaybe<Scalars['ID']['input']>
}

export interface ShopifyStorefrontReturnReason {
  __typename: 'ReturnReason'
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  label?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  parent_return_reason?: Maybe<ShopifyStorefrontReturnReason>
  parent_return_reason_id?: Maybe<Scalars['ID']['output']>
  return_reason_children: Array<ShopifyStorefrontReturnReason>
  updated_at?: Maybe<Scalars['String']['output']>
  value?: Maybe<Scalars['String']['output']>
}

export enum ShopifyStorefrontReturnStatus {
  Canceled = 'CANCELED',
  Received = 'RECEIVED',
  Requested = 'REQUESTED',
  Requiresaction = 'REQUIRESACTION',
}

export interface ShopifyStorefrontSalesChannel {
  __typename: 'SalesChannel'
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  is_disabled?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontSearchProductsResponse {
  __typename: 'SearchProductsResponse'
  hits?: Maybe<Scalars['String']['output']>
}

export type ShopifyStorefrontSelectPaymentSessionInput = {
  id: Scalars['ID']['input']
  provider_id: Scalars['ID']['input']
}

export type ShopifyStorefrontShippingAddressQuery = {
  postal_code?: InputMaybe<Scalars['String']['input']>
}

export interface ShopifyStorefrontShippingMethod {
  __typename: 'ShippingMethod'
  cart?: Maybe<ShopifyStorefrontCart>
  cart_id?: Maybe<Scalars['ID']['output']>
  claim_order?: Maybe<ShopifyStorefrontClaimOrder>
  claim_order_id?: Maybe<Scalars['ID']['output']>
  data?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  includes_tax?: Maybe<Scalars['Boolean']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id?: Maybe<Scalars['ID']['output']>
  price: Scalars['Float']['output']
  return_id?: Maybe<Scalars['ID']['output']>
  return_order?: Maybe<ShopifyStorefrontReturn>
  shipping_option?: Maybe<ShopifyStorefrontShippingOption>
  shipping_option_id: Scalars['ID']['output']
  subtotal?: Maybe<Scalars['Float']['output']>
  swap?: Maybe<ShopifyStorefrontSwap>
  swap_id?: Maybe<Scalars['ID']['output']>
  tax_lines: Array<ShopifyStorefrontShippingMethodTaxLine>
  tax_total?: Maybe<Scalars['Float']['output']>
  total?: Maybe<Scalars['Float']['output']>
}

export interface ShopifyStorefrontShippingMethodTaxLine {
  __typename: 'ShippingMethodTaxLine'
  code?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  rate: Scalars['Float']['output']
  shipping_method?: Maybe<ShopifyStorefrontShippingMethod>
  shipping_method_id: Scalars['ID']['output']
}

export interface ShopifyStorefrontShippingOption {
  __typename: 'ShippingOption'
  admin_only?: Maybe<Scalars['Boolean']['output']>
  amount?: Maybe<Scalars['Float']['output']>
  data?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  includes_tax?: Maybe<Scalars['Boolean']['output']>
  is_return?: Maybe<Scalars['Boolean']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  price_type: ShopifyStorefrontShippingOptionPriceType
  profile?: Maybe<ShopifyStorefrontShippingProfile>
  profile_id: Scalars['ID']['output']
  provider?: Maybe<ShopifyStorefrontFulfillmentProvider>
  provider_id: Scalars['ID']['output']
  region?: Maybe<ShopifyStorefrontRegion>
  region_id: Scalars['ID']['output']
  requirements: Array<ShopifyStorefrontShippingOptionRequirement>
}

export enum ShopifyStorefrontShippingOptionPriceType {
  Calculated = 'CALCULATED',
  Flatrate = 'FLATRATE',
}

export interface ShopifyStorefrontShippingOptionRequirement {
  __typename: 'ShippingOptionRequirement'
  amount: Scalars['Float']['output']
  deleted_at?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  shipping_option?: Maybe<ShopifyStorefrontShippingOption>
  shipping_option_id: Scalars['ID']['output']
  type: ShopifyStorefrontRequirementType
}

export interface ShopifyStorefrontShippingProfile {
  __typename: 'ShippingProfile'
  id: Scalars['ID']['output']
  metadata?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  products: Array<ShopifyStorefrontProduct>
  shipping_options: Array<ShopifyStorefrontShippingOption>
  type: ShopifyStorefrontShippingProfileType
}

export enum ShopifyStorefrontShippingProfileType {
  Custom = 'CUSTOM',
  Default = 'DEFAULT',
  Giftcard = 'GIFTCARD',
}

export interface ShopifyStorefrontStore {
  __typename: 'Store'
  created_at?: Maybe<Scalars['String']['output']>
  currencies: Array<ShopifyStorefrontCurrency>
  default_currency?: Maybe<ShopifyStorefrontCurrency>
  default_currency_code?: Maybe<Scalars['String']['output']>
  default_sales_channel?: Maybe<ShopifyStorefrontSalesChannel>
  default_sales_channel_id?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  invite_link_template?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  payment_link_template?: Maybe<Scalars['String']['output']>
  swap_link_template?: Maybe<Scalars['String']['output']>
  updated_at?: Maybe<Scalars['String']['output']>
}

export interface ShopifyStorefrontSwap {
  __typename: 'Swap'
  additional_items?: Maybe<Array<Maybe<ShopifyStorefrontLineItem>>>
  allow_backorder?: Maybe<Scalars['Boolean']['output']>
  canceled_at?: Maybe<Scalars['String']['output']>
  cart?: Maybe<ShopifyStorefrontCart>
  cart_id?: Maybe<Scalars['ID']['output']>
  confirmed_at?: Maybe<Scalars['String']['output']>
  difference_due?: Maybe<Scalars['Float']['output']>
  fulfillment_status: ShopifyStorefrontSwapFulfillmentStatus
  fulfillments: Array<ShopifyStorefrontFulfillment>
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  no_notification?: Maybe<Scalars['Boolean']['output']>
  order?: Maybe<ShopifyStorefrontOrder>
  order_id: Scalars['ID']['output']
  payment?: Maybe<ShopifyStorefrontPayment>
  payment_status: ShopifyStorefrontSwapPaymentStatus
  return_order?: Maybe<ShopifyStorefrontReturn>
  shipping_address?: Maybe<ShopifyStorefrontAddress>
  shipping_address_id?: Maybe<Scalars['ID']['output']>
  shipping_methods: Array<ShopifyStorefrontShippingMethod>
}

export enum ShopifyStorefrontSwapFulfillmentStatus {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  Notfulfilled = 'NOTFULFILLED',
  Partiallyshipped = 'PARTIALLYSHIPPED',
  Requiresaction = 'REQUIRESACTION',
  Shipped = 'SHIPPED',
}

export enum ShopifyStorefrontSwapPaymentStatus {
  Awaiting = 'AWAITING',
  Canceled = 'CANCELED',
  Captured = 'CAPTURED',
  Confirmed = 'CONFIRMED',
  Differencerefunded = 'DIFFERENCEREFUNDED',
  Notpaid = 'NOTPAID',
  Partiallyrefunded = 'PARTIALLYREFUNDED',
  Refunded = 'REFUNDED',
  Requiresaction = 'REQUIRESACTION',
}

export interface ShopifyStorefrontTaxProvider {
  __typename: 'TaxProvider'
  id?: Maybe<Scalars['ID']['output']>
  is_installed?: Maybe<Scalars['Boolean']['output']>
}

export interface ShopifyStorefrontTaxRate {
  __typename: 'TaxRate'
  code?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  rate?: Maybe<Scalars['Float']['output']>
}

export interface ShopifyStorefrontTrackingLink {
  __typename: 'TrackingLink'
  fulfillment_id: Scalars['ID']['output']
  id: Scalars['ID']['output']
  idempotency_key?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  tracking_number: Scalars['String']['output']
  url?: Maybe<Scalars['String']['output']>
}

export type ShopifyStorefrontUpdateCartInput = {
  billing_address?: InputMaybe<ShopifyStorefrontAddressInput>
  context?: InputMaybe<Scalars['String']['input']>
  country_code?: InputMaybe<Scalars['String']['input']>
  customer_id?: InputMaybe<Scalars['ID']['input']>
  discounts?: InputMaybe<Array<Scalars['String']['input']>>
  email?: InputMaybe<Scalars['String']['input']>
  gift_cards?: InputMaybe<Array<Scalars['String']['input']>>
  id: Scalars['ID']['input']
  region_id?: InputMaybe<Scalars['ID']['input']>
  sales_channel_id?: InputMaybe<Scalars['ID']['input']>
  shipping_address?: InputMaybe<ShopifyStorefrontAddressInput>
}

export type ShopifyStorefrontUpdateCustomerBillingAddressInput = {
  address_1?: InputMaybe<Scalars['String']['input']>
  address_2?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  company?: InputMaybe<Scalars['String']['input']>
  country_code?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  province?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontUpdateCustomerInput = {
  billing_address?: InputMaybe<ShopifyStorefrontUpdateCustomerBillingAddressInput>
  email?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontUpdateLineItemInput = {
  id: Scalars['ID']['input']
  line_id: Scalars['ID']['input']
  quantity: Scalars['Int']['input']
}

export type ShopifyStorefrontUpdatePaymentSessionInput = {
  data: Scalars['String']['input']
  id: Scalars['ID']['input']
  provider_id: Scalars['ID']['input']
}

export type ShopifyStorefrontUpdateReturnReasonInput = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  label?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontUpdateShippingAddressInput = {
  address_1?: InputMaybe<Scalars['String']['input']>
  address_2?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  company?: InputMaybe<Scalars['String']['input']>
  country_code?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  last_name?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  province?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontUpdateStoreInput = {
  currencies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  default_currency_code?: InputMaybe<Scalars['String']['input']>
  invite_link_template?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  payment_link_template?: InputMaybe<Scalars['String']['input']>
  swap_link_template?: InputMaybe<Scalars['String']['input']>
}

export type ShopifyStorefrontUpdateUserInput = {
  api_token?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  last_name?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<ShopifyStorefrontUserRole>
}

export interface ShopifyStorefrontUser {
  __typename: 'User'
  api_token?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['String']['output']>
  deleted_at?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  last_name?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['String']['output']>
  role?: Maybe<ShopifyStorefrontUserRole>
  updated_at?: Maybe<Scalars['String']['output']>
}

export enum ShopifyStorefrontUserRole {
  Admin = 'ADMIN',
  Developer = 'DEVELOPER',
  Member = 'MEMBER',
}
