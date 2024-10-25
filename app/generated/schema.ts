// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    String: string,
    Int: number,
    Float: number,
    Boolean: boolean,
}

export interface Address {
    id: Scalars['ID']
    address_1: (Scalars['String'] | null)
    address_2: (Scalars['String'] | null)
    city: (Scalars['String'] | null)
    company: (Scalars['String'] | null)
    country_code: (Scalars['String'] | null)
    created_at: (Scalars['String'] | null)
    customer_id: (Scalars['ID'] | null)
    deleted_at: (Scalars['String'] | null)
    first_name: (Scalars['String'] | null)
    last_name: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    phone: (Scalars['String'] | null)
    postal_code: (Scalars['String'] | null)
    province: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    __typename: 'Address'
}

export type CartType = 'CLAIM' | 'DEFAULT' | 'DRAFTORDER' | 'PAYMENTLINK' | 'SWAP'

export type CompleteCartType = 'CART' | 'ORDER' | 'SWAP'

export interface Cart {
    id: Scalars['ID']
    billing_address_id: (Scalars['ID'] | null)
    billing_address: (Address | null)
    completed_at: (Scalars['String'] | null)
    context: (Scalars['String'] | null)
    customer_id: (Scalars['ID'] | null)
    customer: (Customer | null)
    discount_total: (Scalars['Float'] | null)
    discounts: Discount[]
    email: (Scalars['String'] | null)
    gift_card_tax_total: (Scalars['Float'] | null)
    gift_card_total: (Scalars['Float'] | null)
    gift_cards: GiftCard[]
    idempotency_key: (Scalars['String'] | null)
    items: LineItem[]
    item_tax_total: (Scalars['Float'] | null)
    metadata: (Scalars['String'] | null)
    payment_authorized_at: (Scalars['String'] | null)
    payment_id: (Scalars['ID'] | null)
    payment: (Payment | null)
    payment_session: (PaymentSession | null)
    payment_sessions: PaymentSession[]
    region_id: (Scalars['ID'] | null)
    region: (Region | null)
    refundable_amount: (Scalars['Float'] | null)
    refunded_total: (Scalars['Float'] | null)
    sales_channel: (SalesChannel | null)
    sales_channel_id: (Scalars['ID'] | null)
    shipping_addess_id: (Scalars['ID'] | null)
    shipping_address: (Address | null)
    shipping_methods: ShippingMethod[]
    shipping_tax_total: (Scalars['Float'] | null)
    shipping_total: (Scalars['Float'] | null)
    subtotal: (Scalars['Float'] | null)
    tax_total: (Scalars['Float'] | null)
    total: (Scalars['Float'] | null)
    type: (CartType | null)
    __typename: 'Cart'
}

export interface CompleteCartResponse {
    type: (CompleteCartType | null)
    data: (Scalars['String'] | null)
    __typename: 'CompleteCartResponse'
}

export interface Mutation {
    addLineItem: (Cart | null)
    addShippingMethod: (Cart | null)
    calculateCartTaxes: (Cart | null)
    completeCart: (CompleteCartResponse | null)
    createCart: (Cart | null)
    createPaymentSessions: (Cart | null)
    deleteLineItem: (Cart | null)
    deletePaymentSession: (Cart | null)
    refreshPaymentSession: (Cart | null)
    removeDiscount: (Cart | null)
    selectPaymentSession: (Cart | null)
    updateCart: (Cart | null)
    updateLineItem: (Cart | null)
    updatePaymentSession: (Cart | null)
    createCustomer: (Customer | null)
    addShippingAddress: (Customer | null)
    deleteShippingAddress: (Customer | null)
    resetPassword: (Customer | null)
    requestPasswordReset: (NoContentResponse | null)
    updateCustomer: (Customer | null)
    updateShippingAddress: (Customer | null)
    completeOrderEdit: (OrderEdit | null)
    declineOrderEdit: (OrderEdit | null)
    addCountry: (Region | null)
    createReturnReason: (ReturnReason | null)
    deleteReturnReason: (DeletionResponse | null)
    updateReturnReason: (ReturnReason | null)
    createReturn: (Return | null)
    addCurrencyCode: (Store | null)
    deleteCurrencyCode: (Store | null)
    updateStore: (Store | null)
    createSwap: (Swap | null)
    createUser: (User | null)
    deleteUser: (DeletionResponse | null)
    adminResetPassword: (User | null)
    adminResetPasswordToken: (NoContentResponse | null)
    updateUser: (User | null)
    __typename: 'Mutation'
}

export interface Query {
    getCart: (Cart | null)
    listCurrencies: Currency[]
    getCurrentCustomer: (Customer | null)
    getPaymentMethods: PaymentMethodsResponse[]
    listOrders: ListOrdersResponse[]
    getGitCardByCode: (GiftCard | null)
    doesEmailExist: (Exists | null)
    getOrderEdit: (OrderEdit | null)
    getOrder: (Order | null)
    getOrderByCartId: (Order | null)
    lookupOrder: (Order | null)
    getCollection: (ProductCollection | null)
    listCollections: (ListCollection | null)
    getProductVariant: (ProductVariant | null)
    listProductVariants: (Scalars['String'] | null)
    getProduct: (Product | null)
    listProducts: (ListProductsResponse | null)
    searchProducts: (SearchProductsResponse | null)
    getRegion: (Region | null)
    listRegions: Region[]
    getReturnReason: (ReturnReason | null)
    listReturnReasons: (ReturnReason | null)[]
    listShippingOptions: ShippingOption[]
    listShippingOptionsForCart: ShippingOption[]
    getStore: (Store | null)
    listPaymentProviders: PaymentProvider[]
    listTaxProviders: TaxProvider[]
    getByCartId: (Swap | null)
    getUser: (User | null)
    listUsers: User[]
    __typename: 'Query'
}

export interface ClaimImage {
    id: Scalars['ID']
    claim_item_id: Scalars['ID']
    claim_item: (ClaimItem | null)
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    url: Scalars['String']
    __typename: 'ClaimImage'
}

export type ClaimReason = 'MISSINGITEM' | 'WRONGITEM' | 'PRODUCTIONFAILURE' | 'OTHER'

export interface ClaimItem {
    id: Scalars['ID']
    claim_order_id: Scalars['ID']
    claim_order: (ClaimOrder | null)
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    images: ClaimImage[]
    item_id: Scalars['ID']
    item: (LineItem | null)
    metadata: (Scalars['String'] | null)
    note: (Scalars['String'] | null)
    quantity: Scalars['Int']
    reason: ClaimReason
    tags: ClaimTag[]
    updated_at: (Scalars['String'] | null)
    variant_id: Scalars['ID']
    variant: (ProductVariant | null)
    __typename: 'ClaimItem'
}

export type ClaimFulfillmentStatus = 'NOTFULFILLED' | 'PARTIALLYFULFILLED' | 'FULFILLED' | 'PARTIALLYSHIPPED' | 'SHIPPED' | 'PARTIALLYRETURNED' | 'RETURNED' | 'CANCELED' | 'REQUIRESACTION'

export type ClaimPaymentStatus = 'NA' | 'NOTREFUNDED' | 'REFUNDED'

export type ClaimType = 'REFUND' | 'REPLACE'

export interface ClaimOrder {
    id: Scalars['ID']
    additional_items: LineItem[]
    canceled_at: (Scalars['String'] | null)
    claim_items: ClaimItem[]
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    fulfillments: Fulfillment[]
    fulfillment_status: (ClaimFulfillmentStatus | null)
    idempotency_key: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    no_notification: (Scalars['Boolean'] | null)
    order_id: Scalars['ID']
    order: (Order | null)
    payment_status: (ClaimPaymentStatus | null)
    refund_amount: (Scalars['Float'] | null)
    return_order: (Return | null)
    shipping_address_id: (Scalars['ID'] | null)
    shipping_address: (Address | null)
    shipping_methods: ShippingMethod[]
    type: ClaimType
    updated_at: (Scalars['String'] | null)
    __typename: 'ClaimOrder'
}

export interface ClaimTag {
    id: Scalars['ID']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    value: Scalars['String']
    __typename: 'ClaimTag'
}

export interface DeletionResponse {
    id: (Scalars['ID'] | null)
    deleted: (Scalars['Boolean'] | null)
    object: (Scalars['String'] | null)
    __typename: 'DeletionResponse'
}

export interface NoContentResponse {
    success: (Scalars['Boolean'] | null)
    __typename: 'NoContentResponse'
}

export interface Country {
    id: (Scalars['ID'] | null)
    display_name: (Scalars['String'] | null)
    iso_2: (Scalars['String'] | null)
    iso_3: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    num_code: (Scalars['String'] | null)
    region_id: (Scalars['ID'] | null)
    region: (Region | null)
    __typename: 'Country'
}

export interface Currency {
    code: (Scalars['String'] | null)
    includes_tax: (Scalars['Boolean'] | null)
    name: (Scalars['String'] | null)
    symbol: (Scalars['String'] | null)
    symbol_native: (Scalars['String'] | null)
    __typename: 'Currency'
}

export interface CustomerGroup {
    id: Scalars['ID']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    customers: Customer[]
    metadata: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    price_lists: PriceList[]
    updated_at: (Scalars['String'] | null)
    __typename: 'CustomerGroup'
}

export interface Customer {
    id: Scalars['ID']
    billing_address_id: (Scalars['ID'] | null)
    billing_address: (Address | null)
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    email: Scalars['String']
    first_name: Scalars['String']
    groups: CustomerGroup[]
    has_account: (Scalars['Boolean'] | null)
    last_name: Scalars['String']
    metadata: (Scalars['String'] | null)
    orders: Order[]
    phone: (Scalars['String'] | null)
    shipping_addresses: Address[]
    updated_at: (Scalars['String'] | null)
    __typename: 'Customer'
}

export interface Exists {
    exists: (Scalars['Boolean'] | null)
    __typename: 'Exists'
}

export interface PaymentMethodsResponse {
    provider_id: (Scalars['ID'] | null)
    data: (Scalars['String'] | null)
    __typename: 'PaymentMethodsResponse'
}

export interface ListOrdersResponse {
    count: (Scalars['Int'] | null)
    limit: (Scalars['Int'] | null)
    offset: (Scalars['Int'] | null)
    orders: Order[]
    __typename: 'ListOrdersResponse'
}

export type DiscountConditionOperator = 'IN' | 'NOTIN'

export type DiscountConditionType = 'CUSTOMERGROUPS' | 'PRODUCTCOLLECTIONS' | 'PRODUCTS' | 'PRODUCTTAGS' | 'PRODUCTTYPES'

export interface DiscountCondition {
    id: Scalars['ID']
    customer_groups: CustomerGroup[]
    discount_rule: (DiscountRule | null)
    discount_rule_id: (Scalars['ID'] | null)
    metadata: (Scalars['String'] | null)
    operator: (DiscountConditionOperator | null)
    products: Product[]
    product_collections: ProductCollection[]
    product_tags: ProductTag[]
    product_types: ProductType[]
    type: (DiscountConditionType | null)
    __typename: 'DiscountCondition'
}

export type AllocationType = 'ITEM' | 'TOTAL'

export type DiscountRuleType = 'FIXED' | 'FREESHIPPING' | 'PERCENTAGE'

export interface DiscountRule {
    id: Scalars['ID']
    allocation: (AllocationType | null)
    conditions: DiscountCondition[]
    description: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    type: (DiscountRuleType | null)
    value: (Scalars['Float'] | null)
    __typename: 'DiscountRule'
}

export interface Discount {
    id: Scalars['ID']
    code: (Scalars['String'] | null)
    ends_at: (Scalars['String'] | null)
    is_disabled: (Scalars['Boolean'] | null)
    is_dynamic: (Scalars['Boolean'] | null)
    metadata: (Scalars['String'] | null)
    parent_discount: (Discount | null)
    parent_discount_id: (Scalars['ID'] | null)
    regions: Region[]
    rule: (DiscountRule | null)
    rule_id: (Scalars['ID'] | null)
    starts_at: (Scalars['String'] | null)
    usage_count: (Scalars['Int'] | null)
    usage_limit: (Scalars['Int'] | null)
    valid_duration: (Scalars['String'] | null)
    __typename: 'Discount'
}

export type DraftOrderStatus = 'COMPLETED' | 'OPEN'

export interface DraftOrder {
    id: Scalars['ID']
    canceled_at: (Scalars['String'] | null)
    cart_id: (Scalars['ID'] | null)
    cart: (Cart | null)
    completed_at: (Scalars['String'] | null)
    display_id: (Scalars['ID'] | null)
    idempotency_key: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    no_notification_order: (Scalars['Boolean'] | null)
    order_id: (Scalars['ID'] | null)
    order: (Order | null)
    status: (DraftOrderStatus | null)
    __typename: 'DraftOrder'
}

export interface FulfillmentItem {
    fulfillment_id: Scalars['ID']
    fulfillment: (Fulfillment | null)
    item_id: Scalars['ID']
    item: (LineItem | null)
    quantity: Scalars['Int']
    __typename: 'FulfillmentItem'
}

export interface FulfillmentProvider {
    id: (Scalars['ID'] | null)
    is_installed: (Scalars['Boolean'] | null)
    __typename: 'FulfillmentProvider'
}

export interface Fulfillment {
    id: Scalars['ID']
    canceled_at: (Scalars['String'] | null)
    claim_order_id: (Scalars['ID'] | null)
    claim_order: (ClaimOrder | null)
    data: (Scalars['String'] | null)
    idempotency_key: (Scalars['String'] | null)
    items: FulfillmentItem[]
    metadata: (Scalars['String'] | null)
    no_notification: (Scalars['Boolean'] | null)
    order_id: (Scalars['ID'] | null)
    order: (Order | null)
    provider_id: Scalars['ID']
    provider: (FulfillmentProvider | null)
    shipped_at: (Scalars['String'] | null)
    swap_id: (Scalars['ID'] | null)
    swap: (Swap | null)
    tracking_links: TrackingLink[]
    tracking_numbers: Scalars['String'][]
    __typename: 'Fulfillment'
}

export interface GiftCardTransaction {
    id: Scalars['ID']
    amount: Scalars['Float']
    created_at: (Scalars['String'] | null)
    gift_card_id: Scalars['ID']
    gift_card: (GiftCard | null)
    is_taxable: (Scalars['Boolean'] | null)
    order_id: (Scalars['ID'] | null)
    order: (Order | null)
    tax_rate: (Scalars['Float'] | null)
    __typename: 'GiftCardTransaction'
}

export interface GiftCard {
    id: Scalars['ID']
    balance: Scalars['Int']
    code: Scalars['String']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    ends_at: (Scalars['String'] | null)
    is_disabled: (Scalars['Boolean'] | null)
    metadata: (Scalars['String'] | null)
    order_id: (Scalars['ID'] | null)
    order: (Order | null)
    value: Scalars['Int']
    region_id: (Scalars['ID'] | null)
    region: (Region | null)
    updated_at: (Scalars['String'] | null)
    __typename: 'GiftCard'
}

export interface IdempotencyKey {
    id: (Scalars['ID'] | null)
    created_at: (Scalars['String'] | null)
    idempotency_key: (Scalars['String'] | null)
    locked_at: (Scalars['String'] | null)
    recovery_point: (Scalars['String'] | null)
    response_body: (Scalars['String'] | null)
    response_code: (Scalars['Int'] | null)
    request_method: (Scalars['String'] | null)
    request_params: (Scalars['String'] | null)
    request_path: (Scalars['String'] | null)
    __typename: 'IdempotencyKey'
}

export interface Image {
    id: Scalars['ID']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    url: Scalars['String']
    __typename: 'Image'
}

export interface LineItemAdjustment {
    id: Scalars['ID']
    amount: Scalars['Float']
    description: Scalars['String']
    discount_id: (Scalars['ID'] | null)
    discount: (Discount | null)
    item_id: Scalars['ID']
    item: (LineItem | null)
    metadata: (Scalars['String'] | null)
    __typename: 'LineItemAdjustment'
}

export interface LineItemTaxLine {
    id: Scalars['ID']
    code: (Scalars['String'] | null)
    item_id: (Scalars['ID'] | null)
    item: (LineItem | null)
    metadata: (Scalars['String'] | null)
    name: Scalars['String']
    rate: Scalars['Float']
    __typename: 'LineItemTaxLine'
}

export interface LineItem {
    id: Scalars['ID']
    adjustments: LineItemAdjustment[]
    allow_discounts: (Scalars['Boolean'] | null)
    cart_id: (Scalars['ID'] | null)
    cart: (Cart | null)
    claim_order_id: (Scalars['ID'] | null)
    claim_order: (ClaimOrder | null)
    description: (Scalars['String'] | null)
    discount_total: (Scalars['Float'] | null)
    fulfilled_quantity: (Scalars['Int'] | null)
    gift_card_total: (Scalars['Float'] | null)
    has_shipping: (Scalars['Boolean'] | null)
    includes_tax: (Scalars['Boolean'] | null)
    is_giftcard: (Scalars['Boolean'] | null)
    is_return: (Scalars['Boolean'] | null)
    metadata: (Scalars['String'] | null)
    order_id: (Scalars['ID'] | null)
    order: (Order | null)
    order_edit_id: (Scalars['ID'] | null)
    order_edit: (OrderEdit | null)
    original_item_id: (Scalars['ID'] | null)
    original_tax_total: (Scalars['Float'] | null)
    original_total: (Scalars['Float'] | null)
    quantity: Scalars['Int']
    refundable: (Scalars['Boolean'] | null)
    returned_quantity: (Scalars['Int'] | null)
    shipped_quantity: (Scalars['Int'] | null)
    should_merge: (Scalars['Boolean'] | null)
    subtotal: (Scalars['Float'] | null)
    swap_id: (Scalars['ID'] | null)
    swap: (Swap | null)
    tax_lines: LineItemTaxLine[]
    tax_total: (Scalars['Float'] | null)
    title: Scalars['String']
    thumbnail: (Scalars['String'] | null)
    total: (Scalars['Float'] | null)
    unit_price: Scalars['Float']
    variant_id: (Scalars['ID'] | null)
    variant: (ProductVariant | null)
    __typename: 'LineItem'
}

export interface MoneyAmount {
    id: Scalars['ID']
    amount: (Scalars['Float'] | null)
    currency: (Currency | null)
    currency_code: (Scalars['String'] | null)
    min_quantity: (Scalars['Int'] | null)
    max_quantity: (Scalars['Int'] | null)
    price_list: (PriceList | null)
    price_list_id: (Scalars['ID'] | null)
    region: (Region | null)
    region_id: (Scalars['ID'] | null)
    variant: (ProductVariant | null)
    variant_id: (Scalars['ID'] | null)
    __typename: 'MoneyAmount'
}

export interface NotificationProvider {
    id: (Scalars['ID'] | null)
    is_installed: (Scalars['Boolean'] | null)
    __typename: 'NotificationProvider'
}

export interface Oauth {
    id: (Scalars['ID'] | null)
    application_name: (Scalars['String'] | null)
    data: (Scalars['String'] | null)
    display_name: (Scalars['String'] | null)
    install_url: (Scalars['String'] | null)
    uninstall_url: (Scalars['String'] | null)
    __typename: 'Oauth'
}

export type OrderEditStatus = 'CANCELED' | 'CONFIRMED' | 'CREATED' | 'DECLINED' | 'REQUESTED'

export interface OrderEdit {
    id: Scalars['ID']
    canceled_at: (Scalars['String'] | null)
    canceled_by: (Scalars['String'] | null)
    changes: OrderItemChange[]
    confirmed_at: (Scalars['String'] | null)
    confirmed_by: (Scalars['String'] | null)
    created_by: Scalars['String']
    declined_at: (Scalars['String'] | null)
    declined_by: (Scalars['String'] | null)
    declined_reason: (Scalars['String'] | null)
    difference_due: (Scalars['Float'] | null)
    discount_total: (Scalars['Float'] | null)
    gift_card_tax_total: (Scalars['Float'] | null)
    gift_card_total: (Scalars['Float'] | null)
    internal_note: (Scalars['String'] | null)
    items: LineItem[]
    order_id: Scalars['ID']
    order: Order
    payment_collection: (PaymentCollection | null)
    payment_collection_id: (Scalars['ID'] | null)
    requested_at: (Scalars['String'] | null)
    requested_by: (Scalars['String'] | null)
    shipping_total: (Scalars['Float'] | null)
    status: (OrderEditStatus | null)
    subtotal: (Scalars['Float'] | null)
    tax_total: (Scalars['Float'] | null)
    total: (Scalars['Float'] | null)
    __typename: 'OrderEdit'
}

export type OrderEditItemChangeType = 'ITEMADD' | 'ITEMREMOVE' | 'ITEMUPDATE'

export interface OrderItemChange {
    id: Scalars['ID']
    line_item_id: (Scalars['ID'] | null)
    line_item: (LineItem | null)
    order_edit_id: Scalars['ID']
    order_edit: (OrderEdit | null)
    original_line_item_id: (Scalars['ID'] | null)
    original_line_item: (LineItem | null)
    type: OrderEditItemChangeType
    __typename: 'OrderItemChange'
}

export type FulfillmentStatus = 'CANCELED' | 'FULFILLED' | 'NOTFULFILLED' | 'PARTIALLYFULFILLED' | 'PARTIALLYRETURNED' | 'PARTIALLYSHIPPED' | 'RETURNED' | 'REQUIRESACTION' | 'SHIPPED'

export type OrderStatus = 'ARCHIVED' | 'CANCELED' | 'COMPLETED' | 'PENDING' | 'REQUIRES_ACTION'

export type PaymentStatus = 'AWAITING' | 'CANCELED' | 'CAPTURED' | 'NOTPAID' | 'PARTIALLYREFUNDED' | 'REFUNDED' | 'REQUIRESACTION'

export interface Order {
    id: Scalars['ID']
    billing_address_id: (Scalars['ID'] | null)
    billing_address: (Address | null)
    canceled_at: (Scalars['String'] | null)
    cart_id: (Scalars['ID'] | null)
    cart: (Cart | null)
    claims: ClaimOrder[]
    currency_code: Scalars['String']
    currency: (Currency | null)
    customer_id: Scalars['ID']
    customer: (Customer | null)
    discounts: Discount[]
    discount_total: (Scalars['Float'] | null)
    display_id: (Scalars['ID'] | null)
    draft_order_id: (Scalars['ID'] | null)
    draft_order: (DraftOrder | null)
    edits: OrderEdit[]
    email: Scalars['String']
    external_id: (Scalars['String'] | null)
    fulfillments: Fulfillment[]
    fulfillment_status: (FulfillmentStatus | null)
    gift_cards: GiftCard[]
    gift_card_tax_total: (Scalars['Float'] | null)
    gift_card_total: (Scalars['Float'] | null)
    gift_card_transactions: GiftCardTransaction[]
    idempotency_key: (Scalars['String'] | null)
    items: LineItem[]
    metadata: (Scalars['String'] | null)
    no_notification: (Scalars['Boolean'] | null)
    paid_total: (Scalars['Float'] | null)
    payments: Payment[]
    payment_status: (PaymentStatus | null)
    region_id: Scalars['ID']
    region: (Region | null)
    refundable_amount: (Scalars['Float'] | null)
    refunded_total: (Scalars['Float'] | null)
    refunds: Refund[]
    returns: Return[]
    sales_channel_id: (Scalars['ID'] | null)
    sales_channel: (SalesChannel | null)
    shipping_address_id: (Scalars['ID'] | null)
    shipping_address: (Address | null)
    shipping_methods: ShippingMethod[]
    shipping_total: (Scalars['Float'] | null)
    status: (OrderStatus | null)
    subtotal: (Scalars['Float'] | null)
    swaps: Swap[]
    tax_rate: (Scalars['Float'] | null)
    tax_total: (Scalars['Float'] | null)
    total: (Scalars['Float'] | null)
    __typename: 'Order'
}

export type PaymentCollectionStatus = 'AUTHORIZED' | 'AWAITING' | 'CANCELED' | 'CAPTURED' | 'NOTPAID' | 'PARTIALLYAUTHORIZED' | 'PARTIALLYCAPTURED' | 'PARTIALLYREFUNDED' | 'REFUNDED' | 'REQUIRESACTION'

export type PaymentCollectionType = 'ORDEREDIT'

export interface PaymentCollection {
    id: Scalars['ID']
    amount: (Scalars['Float'] | null)
    authorized_amount: (Scalars['Float'] | null)
    captured_amount: (Scalars['Float'] | null)
    created_by: (Scalars['String'] | null)
    currency_code: (Scalars['String'] | null)
    currency: (Currency | null)
    description: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    payments: Payment[]
    payment_sessions: PaymentSession[]
    refunded_amount: (Scalars['Float'] | null)
    region_id: (Scalars['ID'] | null)
    region: (Region | null)
    status: (PaymentCollectionStatus | null)
    type: (PaymentCollectionType | null)
    __typename: 'PaymentCollection'
}

export interface PaymentProvider {
    id: (Scalars['ID'] | null)
    is_installed: (Scalars['Boolean'] | null)
    __typename: 'PaymentProvider'
}

export type PaymentSessionStatus = 'AUTHORIZED' | 'CANCELED' | 'ERROR' | 'PENDING' | 'REQUIRESMORE'

export interface PaymentSession {
    id: Scalars['ID']
    amount: (Scalars['Float'] | null)
    cart_id: Scalars['ID']
    cart: (Cart | null)
    data: (Scalars['String'] | null)
    idempotency_key: (Scalars['String'] | null)
    is_selected: (Scalars['Boolean'] | null)
    payment_authorized_at: (Scalars['String'] | null)
    provider_id: Scalars['ID']
    status: Scalars['String']
    __typename: 'PaymentSession'
}

export interface Payment {
    id: Scalars['ID']
    amount: Scalars['Float']
    amount_refunded: (Scalars['Float'] | null)
    canceled_at: (Scalars['String'] | null)
    captured_at: (Scalars['String'] | null)
    cart_id: (Scalars['ID'] | null)
    cart: (Cart | null)
    currency_code: Scalars['String']
    currency: (Currency | null)
    data: (Scalars['String'] | null)
    idempotency_key: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    order_id: (Scalars['ID'] | null)
    order: (Order | null)
    provider_id: Scalars['ID']
    swap_id: (Scalars['ID'] | null)
    swap: (Swap | null)
    __typename: 'Payment'
}

export type PriceListStatus = 'ACTIVE' | 'DRAFT'

export type PriceListType = 'OVERRIDE' | 'SALE'

export interface PriceList {
    id: Scalars['ID']
    customer_groups: CustomerGroup[]
    description: (Scalars['String'] | null)
    ends_at: (Scalars['String'] | null)
    includes_tax: (Scalars['Boolean'] | null)
    name: (Scalars['String'] | null)
    prices: MoneyAmount[]
    starts_at: (Scalars['String'] | null)
    status: (PriceListStatus | null)
    type: (PriceListType | null)
    __typename: 'PriceList'
}

export interface ProductCollection {
    id: Scalars['ID']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    handle: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    products: Product[]
    title: Scalars['String']
    updated_at: (Scalars['String'] | null)
    __typename: 'ProductCollection'
}

export interface ListCollection {
    collections: ProductCollection[]
    count: (Scalars['Int'] | null)
    limit: (Scalars['Int'] | null)
    offset: (Scalars['Int'] | null)
    __typename: 'ListCollection'
}

export interface ProductOptionValue {
    id: Scalars['ID']
    metadata: (Scalars['String'] | null)
    option: (ProductOption | null)
    option_id: (Scalars['ID'] | null)
    value: (Scalars['String'] | null)
    variant: (ProductVariant | null)
    variant_id: (Scalars['ID'] | null)
    __typename: 'ProductOptionValue'
}

export interface ProductOption {
    id: Scalars['ID']
    metadata: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    product: (Product | null)
    product_id: (Scalars['ID'] | null)
    values: ProductOptionValue[]
    __typename: 'ProductOption'
}

export interface ProductTag {
    id: Scalars['ID']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    __typename: 'ProductTag'
}

export interface ProductType {
    id: Scalars['ID']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'ProductType'
}

export interface ProductVariant {
    id: Scalars['ID']
    allow_backorder: (Scalars['Boolean'] | null)
    barcode: (Scalars['String'] | null)
    calculated_price: (Scalars['Float'] | null)
    calculated_price_incl_tax: (Scalars['Float'] | null)
    calculated_tax: (Scalars['Float'] | null)
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    ean: (Scalars['String'] | null)
    height: (Scalars['Float'] | null)
    hs_code: (Scalars['String'] | null)
    inventory_quantity: (Scalars['Int'] | null)
    length: (Scalars['Float'] | null)
    manage_inventory: (Scalars['Boolean'] | null)
    material: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    mid_code: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    options: ((ProductOptionValue | null)[] | null)
    origin_country: (Scalars['String'] | null)
    original_price: (Scalars['Float'] | null)
    original_price_incl_tax: (Scalars['Float'] | null)
    original_tax: (Scalars['Float'] | null)
    prices: MoneyAmount[]
    product: (Product | null)
    product_id: (Scalars['ID'] | null)
    sku: (Scalars['String'] | null)
    upc: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    variant_rank: (Scalars['Int'] | null)
    width: (Scalars['Float'] | null)
    weight: (Scalars['Float'] | null)
    __typename: 'ProductVariant'
}

export interface TaxRate {
    code: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    rate: (Scalars['Float'] | null)
    __typename: 'TaxRate'
}

export type ProductStatus = 'DRAFT' | 'PROPOSED' | 'PUBLISHED' | 'REJECTED'

export interface Product {
    id: Scalars['ID']
    collection: (ProductCollection | null)
    collection_id: (Scalars['ID'] | null)
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    discountable: (Scalars['Boolean'] | null)
    external_id: (Scalars['String'] | null)
    handle: (Scalars['String'] | null)
    height: (Scalars['Float'] | null)
    hs_code: (Scalars['String'] | null)
    images: Image[]
    is_giftcard: (Scalars['Boolean'] | null)
    length: (Scalars['Float'] | null)
    material: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    mid_code: (Scalars['String'] | null)
    options: ProductOption[]
    origin_country: (Scalars['String'] | null)
    profile: (ShippingProfile | null)
    profile_id: (Scalars['ID'] | null)
    sales_channels: (SalesChannel[] | null)
    status: (ProductStatus | null)
    subtitle: (Scalars['String'] | null)
    tags: ProductTag[]
    thumbnail: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    type: (ProductType | null)
    type_id: (Scalars['ID'] | null)
    updated_at: (Scalars['String'] | null)
    variants: ProductVariant[]
    weight: (Scalars['Float'] | null)
    width: (Scalars['Float'] | null)
    __typename: 'Product'
}

export interface ListProductsResponse {
    limit: (Scalars['Int'] | null)
    offset: (Scalars['Int'] | null)
    products: Product[]
    __typename: 'ListProductsResponse'
}

export interface SearchProductsResponse {
    hits: (Scalars['String'] | null)
    __typename: 'SearchProductsResponse'
}

export interface Refund {
    id: Scalars['ID']
    amount: Scalars['Float']
    idempotency_key: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    note: (Scalars['String'] | null)
    order_id: Scalars['ID']
    order: (Order | null)
    payment_id: (Scalars['ID'] | null)
    payment: (Payment | null)
    reason: (Scalars['String'] | null)
    __typename: 'Refund'
}

export interface Region {
    id: Scalars['ID']
    automatic_taxes: (Scalars['Boolean'] | null)
    countries: ((Country | null)[] | null)
    created_at: (Scalars['String'] | null)
    currency_code: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    fulfillment_providers: ((FulfillmentProvider | null)[] | null)
    gift_cards_taxable: (Scalars['Boolean'] | null)
    includes_tax: (Scalars['Boolean'] | null)
    metadata: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    payment_providers: ((PaymentProvider | null)[] | null)
    tax_code: (Scalars['String'] | null)
    tax_provider_id: (Scalars['ID'] | null)
    tax_rate: (Scalars['Int'] | null)
    updated_at: (Scalars['String'] | null)
    __typename: 'Region'
}

export interface ReturnItem {
    is_requested: (Scalars['Boolean'] | null)
    item_id: Scalars['ID']
    item: (LineItem | null)
    metadata: (Scalars['String'] | null)
    note: (Scalars['String'] | null)
    quantity: (Scalars['Int'] | null)
    reason_id: (Scalars['ID'] | null)
    reason: (ReturnReason | null)
    received_quantity: (Scalars['Int'] | null)
    requested_quantity: (Scalars['Int'] | null)
    return_id: Scalars['ID']
    return_order: (Return | null)
    __typename: 'ReturnItem'
}

export interface ReturnReason {
    id: Scalars['ID']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    label: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    parent_return_reason: (ReturnReason | null)
    parent_return_reason_id: (Scalars['ID'] | null)
    return_reason_children: ReturnReason[]
    updated_at: (Scalars['String'] | null)
    value: (Scalars['String'] | null)
    __typename: 'ReturnReason'
}

export type ReturnStatus = 'CANCELED' | 'RECEIVED' | 'REQUESTED' | 'REQUIRESACTION'

export interface Return {
    id: Scalars['ID']
    claim_order_id: (Scalars['ID'] | null)
    claim_order: (ClaimOrder | null)
    idempotency_key: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    no_notification: (Scalars['Boolean'] | null)
    order_id: (Scalars['ID'] | null)
    order: (Order | null)
    received_at: (Scalars['String'] | null)
    refund_amount: Scalars['Float']
    shipping_data: (Scalars['String'] | null)
    shipping_method: (ShippingMethod | null)
    status: (ReturnStatus | null)
    swap_id: (Scalars['ID'] | null)
    swap: (Swap | null)
    items: ReturnItem[]
    __typename: 'Return'
}

export interface SalesChannel {
    id: Scalars['ID']
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    is_disabled: (Scalars['Boolean'] | null)
    name: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    __typename: 'SalesChannel'
}

export interface ShippingMethodTaxLine {
    id: Scalars['ID']
    code: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    name: Scalars['String']
    rate: Scalars['Float']
    shipping_method_id: Scalars['ID']
    shipping_method: (ShippingMethod | null)
    __typename: 'ShippingMethodTaxLine'
}

export interface ShippingMethod {
    id: Scalars['ID']
    cart_id: (Scalars['ID'] | null)
    cart: (Cart | null)
    claim_order_id: (Scalars['ID'] | null)
    claim_order: (ClaimOrder | null)
    data: (Scalars['String'] | null)
    includes_tax: (Scalars['Boolean'] | null)
    order_id: (Scalars['ID'] | null)
    order: (Order | null)
    price: Scalars['Float']
    return_id: (Scalars['ID'] | null)
    return_order: (Return | null)
    shipping_option_id: Scalars['ID']
    shipping_option: (ShippingOption | null)
    subtotal: (Scalars['Float'] | null)
    swap_id: (Scalars['ID'] | null)
    swap: (Swap | null)
    tax_lines: ShippingMethodTaxLine[]
    tax_total: (Scalars['Float'] | null)
    total: (Scalars['Float'] | null)
    __typename: 'ShippingMethod'
}

export type RequirementType = 'MAXSUBTOTAL' | 'MINSUBTOTAL'

export interface ShippingOptionRequirement {
    id: Scalars['ID']
    amount: Scalars['Float']
    deleted_at: (Scalars['String'] | null)
    shipping_option_id: Scalars['ID']
    shipping_option: (ShippingOption | null)
    type: RequirementType
    __typename: 'ShippingOptionRequirement'
}

export type ShippingOptionPriceType = 'FLATRATE' | 'CALCULATED'

export interface ShippingOption {
    id: Scalars['ID']
    admin_only: (Scalars['Boolean'] | null)
    amount: (Scalars['Float'] | null)
    data: (Scalars['String'] | null)
    includes_tax: (Scalars['Boolean'] | null)
    is_return: (Scalars['Boolean'] | null)
    metadata: (Scalars['String'] | null)
    name: Scalars['String']
    price_type: ShippingOptionPriceType
    profile_id: Scalars['ID']
    profile: (ShippingProfile | null)
    provider_id: Scalars['ID']
    provider: (FulfillmentProvider | null)
    region_id: Scalars['ID']
    region: (Region | null)
    requirements: ShippingOptionRequirement[]
    __typename: 'ShippingOption'
}

export type ShippingProfileType = 'CUSTOM' | 'DEFAULT' | 'GIFTCARD'

export interface ShippingProfile {
    id: Scalars['ID']
    metadata: (Scalars['String'] | null)
    name: Scalars['String']
    products: Product[]
    shipping_options: ShippingOption[]
    type: ShippingProfileType
    __typename: 'ShippingProfile'
}

export interface Store {
    id: (Scalars['ID'] | null)
    created_at: (Scalars['String'] | null)
    currencies: Currency[]
    default_currency: (Currency | null)
    default_currency_code: (Scalars['String'] | null)
    default_sales_channel: (SalesChannel | null)
    default_sales_channel_id: (Scalars['String'] | null)
    invite_link_template: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    payment_link_template: (Scalars['String'] | null)
    swap_link_template: (Scalars['String'] | null)
    updated_at: (Scalars['String'] | null)
    __typename: 'Store'
}

export type SwapFulfillmentStatus = 'CANCELED' | 'FULFILLED' | 'NOTFULFILLED' | 'PARTIALLYSHIPPED' | 'REQUIRESACTION' | 'SHIPPED'

export type SwapPaymentStatus = 'AWAITING' | 'CANCELED' | 'CAPTURED' | 'CONFIRMED' | 'DIFFERENCEREFUNDED' | 'NOTPAID' | 'PARTIALLYREFUNDED' | 'REFUNDED' | 'REQUIRESACTION'

export interface Swap {
    id: Scalars['ID']
    additional_items: ((LineItem | null)[] | null)
    allow_backorder: (Scalars['Boolean'] | null)
    canceled_at: (Scalars['String'] | null)
    cart_id: (Scalars['ID'] | null)
    cart: (Cart | null)
    confirmed_at: (Scalars['String'] | null)
    difference_due: (Scalars['Float'] | null)
    fulfillments: Fulfillment[]
    fulfillment_status: SwapFulfillmentStatus
    idempotency_key: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    no_notification: (Scalars['Boolean'] | null)
    order_id: Scalars['ID']
    order: (Order | null)
    payment: (Payment | null)
    payment_status: SwapPaymentStatus
    return_order: (Return | null)
    shipping_address_id: (Scalars['ID'] | null)
    shipping_address: (Address | null)
    shipping_methods: ShippingMethod[]
    __typename: 'Swap'
}

export interface TaxProvider {
    id: (Scalars['ID'] | null)
    is_installed: (Scalars['Boolean'] | null)
    __typename: 'TaxProvider'
}

export interface TrackingLink {
    id: Scalars['ID']
    fulfillment_id: Scalars['ID']
    idempotency_key: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    tracking_number: Scalars['String']
    url: (Scalars['String'] | null)
    __typename: 'TrackingLink'
}

export type UserRole = 'ADMIN' | 'MEMBER' | 'DEVELOPER'

export interface User {
    id: Scalars['ID']
    api_token: (Scalars['String'] | null)
    created_at: (Scalars['String'] | null)
    deleted_at: (Scalars['String'] | null)
    email: (Scalars['String'] | null)
    first_name: (Scalars['String'] | null)
    last_name: (Scalars['String'] | null)
    metadata: (Scalars['String'] | null)
    role: (UserRole | null)
    updated_at: (Scalars['String'] | null)
    __typename: 'User'
}

export interface AddressGenqlSelection{
    id?: boolean | number
    address_1?: boolean | number
    address_2?: boolean | number
    city?: boolean | number
    company?: boolean | number
    country_code?: boolean | number
    created_at?: boolean | number
    customer_id?: boolean | number
    deleted_at?: boolean | number
    first_name?: boolean | number
    last_name?: boolean | number
    metadata?: boolean | number
    phone?: boolean | number
    postal_code?: boolean | number
    province?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddLineItemInput {id: Scalars['ID'],metadata?: (Scalars['String'] | null),quantity: Scalars['Int'],variant_id: Scalars['ID']}

export interface AddressInput {id?: (Scalars['ID'] | null),address_1?: (Scalars['String'] | null),address_2?: (Scalars['String'] | null),city?: (Scalars['String'] | null),company?: (Scalars['String'] | null),country_code?: (Scalars['String'] | null),created_at?: (Scalars['String'] | null),customer_id?: (Scalars['ID'] | null),deleted_at?: (Scalars['String'] | null),first_name?: (Scalars['String'] | null),last_name?: (Scalars['String'] | null),metadata?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),postal_code?: (Scalars['String'] | null),province?: (Scalars['String'] | null),updated_at?: (Scalars['String'] | null)}

export interface AddShippingMethodInput {id: Scalars['ID'],option_id: Scalars['ID'],data?: (Scalars['String'] | null)}

export interface CompleteCartInput {id: Scalars['ID']}

export interface CreateCartInput {region_id?: (Scalars['ID'] | null),sales_channel_id?: (Scalars['ID'] | null),country_code?: (Scalars['String'] | null),items?: (CreateCartItemsInput[] | null),context?: (Scalars['String'] | null)}

export interface CreateCartItemsInput {variant_id?: (Scalars['ID'] | null),quantity?: (Scalars['Int'] | null)}

export interface CreatePaymentSessionsInput {id: Scalars['ID']}

export interface DeleteLineItemInput {id: Scalars['ID'],line_id: Scalars['ID']}

export interface DeletePaymentSessionInput {id: Scalars['ID'],provider_id: Scalars['ID']}

export interface RefreshPaymentSessionInput {id: Scalars['ID'],provider_id: Scalars['ID']}

export interface RemoveDiscountInput {id: Scalars['ID'],code: Scalars['String']}

export interface SelectPaymentSessionInput {id: Scalars['ID'],provider_id: Scalars['ID']}

export interface UpdateCartInput {id: Scalars['ID'],billing_address?: (AddressInput | null),context?: (Scalars['String'] | null),country_code?: (Scalars['String'] | null),customer_id?: (Scalars['ID'] | null),discounts?: (Scalars['String'][] | null),email?: (Scalars['String'] | null),gift_cards?: (Scalars['String'][] | null),region_id?: (Scalars['ID'] | null),sales_channel_id?: (Scalars['ID'] | null),shipping_address?: (AddressInput | null)}

export interface UpdateLineItemInput {id: Scalars['ID'],line_id: Scalars['ID'],quantity: Scalars['Int']}

export interface UpdatePaymentSessionInput {id: Scalars['ID'],provider_id: Scalars['ID'],data: Scalars['String']}

export interface CartGenqlSelection{
    id?: boolean | number
    billing_address_id?: boolean | number
    billing_address?: AddressGenqlSelection
    completed_at?: boolean | number
    context?: boolean | number
    customer_id?: boolean | number
    customer?: CustomerGenqlSelection
    discount_total?: boolean | number
    discounts?: DiscountGenqlSelection
    email?: boolean | number
    gift_card_tax_total?: boolean | number
    gift_card_total?: boolean | number
    gift_cards?: GiftCardGenqlSelection
    idempotency_key?: boolean | number
    items?: LineItemGenqlSelection
    item_tax_total?: boolean | number
    metadata?: boolean | number
    payment_authorized_at?: boolean | number
    payment_id?: boolean | number
    payment?: PaymentGenqlSelection
    payment_session?: PaymentSessionGenqlSelection
    payment_sessions?: PaymentSessionGenqlSelection
    region_id?: boolean | number
    region?: RegionGenqlSelection
    refundable_amount?: boolean | number
    refunded_total?: boolean | number
    sales_channel?: SalesChannelGenqlSelection
    sales_channel_id?: boolean | number
    shipping_addess_id?: boolean | number
    shipping_address?: AddressGenqlSelection
    shipping_methods?: ShippingMethodGenqlSelection
    shipping_tax_total?: boolean | number
    shipping_total?: boolean | number
    subtotal?: boolean | number
    tax_total?: boolean | number
    total?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CompleteCartResponseGenqlSelection{
    type?: boolean | number
    data?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    addLineItem?: (CartGenqlSelection & { __args?: {input?: (AddLineItemInput | null)} })
    addShippingMethod?: (CartGenqlSelection & { __args?: {input?: (AddShippingMethodInput | null)} })
    calculateCartTaxes?: (CartGenqlSelection & { __args: {id: Scalars['ID']} })
    completeCart?: (CompleteCartResponseGenqlSelection & { __args?: {input?: (CompleteCartInput | null)} })
    createCart?: (CartGenqlSelection & { __args?: {input?: (CreateCartInput | null)} })
    createPaymentSessions?: (CartGenqlSelection & { __args?: {input?: (CreatePaymentSessionsInput | null)} })
    deleteLineItem?: (CartGenqlSelection & { __args?: {input?: (DeleteLineItemInput | null)} })
    deletePaymentSession?: (CartGenqlSelection & { __args?: {input?: (DeletePaymentSessionInput | null)} })
    refreshPaymentSession?: (CartGenqlSelection & { __args?: {input?: (RefreshPaymentSessionInput | null)} })
    removeDiscount?: (CartGenqlSelection & { __args?: {input?: (RemoveDiscountInput | null)} })
    selectPaymentSession?: (CartGenqlSelection & { __args?: {input?: (SelectPaymentSessionInput | null)} })
    updateCart?: (CartGenqlSelection & { __args?: {input?: (UpdateCartInput | null)} })
    updateLineItem?: (CartGenqlSelection & { __args?: {input?: (UpdateLineItemInput | null)} })
    updatePaymentSession?: (CartGenqlSelection & { __args?: {input?: (UpdatePaymentSessionInput | null)} })
    createCustomer?: (CustomerGenqlSelection & { __args?: {input?: (CreateCustomerInput | null)} })
    addShippingAddress?: (CustomerGenqlSelection & { __args?: {input?: (AddShippingAddressInput | null)} })
    deleteShippingAddress?: (CustomerGenqlSelection & { __args?: {input?: (DeleteShippingAddressInput | null)} })
    resetPassword?: (CustomerGenqlSelection & { __args?: {input?: (ResetPasswordInput | null)} })
    requestPasswordReset?: (NoContentResponseGenqlSelection & { __args?: {input?: (ResetPasswordTokenInput | null)} })
    updateCustomer?: (CustomerGenqlSelection & { __args?: {input?: (UpdateCustomerInput | null)} })
    updateShippingAddress?: (CustomerGenqlSelection & { __args?: {input?: (UpdateShippingAddressInput | null)} })
    completeOrderEdit?: (OrderEditGenqlSelection & { __args?: {input?: (CompleteOrderEditInput | null)} })
    declineOrderEdit?: (OrderEditGenqlSelection & { __args?: {input?: (DeclineOrderEditInput | null)} })
    addCountry?: (RegionGenqlSelection & { __args?: {input?: (AddCountryInput | null)} })
    createReturnReason?: (ReturnReasonGenqlSelection & { __args?: {input?: (CreateReturnReasonInput | null)} })
    deleteReturnReason?: (DeletionResponseGenqlSelection & { __args?: {input?: (DeleteReturnReasonInput | null)} })
    updateReturnReason?: (ReturnReasonGenqlSelection & { __args?: {input?: (UpdateReturnReasonInput | null)} })
    createReturn?: (ReturnGenqlSelection & { __args?: {input?: (CreateReturnInput | null)} })
    addCurrencyCode?: (StoreGenqlSelection & { __args?: {input?: (AddCurrencyCodeInput | null)} })
    deleteCurrencyCode?: (StoreGenqlSelection & { __args?: {input?: (DeleteCurrencyCodeInput | null)} })
    updateStore?: (StoreGenqlSelection & { __args?: {input?: (UpdateStoreInput | null)} })
    createSwap?: (SwapGenqlSelection & { __args?: {input?: (CreateSwapInput | null)} })
    createUser?: (UserGenqlSelection & { __args?: {input?: (CreateUserInput | null)} })
    deleteUser?: (DeletionResponseGenqlSelection & { __args?: {input?: (DeleteUserInput | null)} })
    adminResetPassword?: (UserGenqlSelection & { __args?: {input?: (ResetPasswordInput | null)} })
    adminResetPasswordToken?: (NoContentResponseGenqlSelection & { __args?: {input?: (RequestPasswordResetInput | null)} })
    updateUser?: (UserGenqlSelection & { __args?: {input?: (UpdateUserInput | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    getCart?: (CartGenqlSelection & { __args: {id: Scalars['ID']} })
    listCurrencies?: (CurrencyGenqlSelection & { __args?: {code?: (Scalars['String'] | null), includes_tax?: (Scalars['Boolean'] | null), order?: (Scalars['String'] | null), offset?: (Scalars['Int'] | null), limit?: (Scalars['Int'] | null)} })
    getCurrentCustomer?: CustomerGenqlSelection
    getPaymentMethods?: PaymentMethodsResponseGenqlSelection
    listOrders?: (ListOrdersResponseGenqlSelection & { __args?: {cart_id?: (Scalars['ID'] | null), canceled_at?: (DateComparison | null), created_at?: (DateComparison | null), currency_code?: (Scalars['String'] | null), display_id?: (Scalars['ID'] | null), email?: (Scalars['String'] | null), expand?: (Scalars['String'] | null), fields?: (Scalars['String'] | null), fulfillment_status?: (Scalars['String'][] | null), limit?: (Scalars['Int'] | null), id?: (Scalars['ID'] | null), offset?: (Scalars['Int'] | null), payment_status?: (Scalars['String'][] | null), q?: (Scalars['String'] | null), region_id?: (Scalars['ID'] | null), status?: (Scalars['String'][] | null), tax_rate?: (Scalars['String'] | null), updated_at?: (DateComparison | null)} })
    getGitCardByCode?: (GiftCardGenqlSelection & { __args: {code: Scalars['String']} })
    doesEmailExist?: (ExistsGenqlSelection & { __args: {email: Scalars['String']} })
    getOrderEdit?: (OrderEditGenqlSelection & { __args: {id: Scalars['ID']} })
    getOrder?: (OrderGenqlSelection & { __args: {id: Scalars['ID']} })
    getOrderByCartId?: (OrderGenqlSelection & { __args: {cart_id: Scalars['ID']} })
    lookupOrder?: (OrderGenqlSelection & { __args: {display_id: Scalars['Int'], email: Scalars['String'], shipping_address?: (ShippingAddressQuery | null)} })
    getCollection?: (ProductCollectionGenqlSelection & { __args: {id: Scalars['ID']} })
    listCollections?: (ListCollectionGenqlSelection & { __args?: {offset?: (Scalars['Int'] | null), limit?: (Scalars['Int'] | null), created_at?: (DateComparison | null), updated_at?: (DateComparison | null)} })
    getProductVariant?: (ProductVariantGenqlSelection & { __args: {id: Scalars['ID'], cart_id?: (Scalars['ID'] | null), currency_code?: (Scalars['String'] | null), region_id?: (Scalars['ID'] | null)} })
    listProductVariants?: { __args: {expand?: (Scalars['String'] | null), ids?: (Scalars['String'] | null), limit?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), title?: (Scalars['String'] | null), inventory_quantity?: (Scalars['String'] | null)} } | boolean | number
    getProduct?: (ProductGenqlSelection & { __args: {id: Scalars['ID'], cart_id?: (Scalars['ID'] | null), region_id?: (Scalars['ID'] | null), currency_code?: (Scalars['String'] | null)} })
    listProducts?: (ListProductsResponseGenqlSelection & { __args?: {collection_id?: ((Scalars['String'] | null)[] | null), created_at?: (DateComparison | null), description?: (Scalars['String'] | null), handle?: (Scalars['String'] | null), id?: ((Scalars['String'] | null)[] | null), is_giftcard?: (Scalars['Boolean'] | null), q?: (Scalars['String'] | null), tags?: ((Scalars['String'] | null)[] | null), title?: (Scalars['String'] | null), type?: (Scalars['String'] | null), updated_at?: (DateComparison | null)} })
    searchProducts?: (SearchProductsResponseGenqlSelection & { __args: {limit?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), q: Scalars['String']} })
    getRegion?: (RegionGenqlSelection & { __args: {id: Scalars['ID']} })
    listRegions?: (RegionGenqlSelection & { __args?: {offset?: (Scalars['Int'] | null), limit?: (Scalars['Int'] | null), created_at?: (DateComparison | null), updated_at?: (DateComparison | null)} })
    getReturnReason?: (ReturnReasonGenqlSelection & { __args: {id: Scalars['ID']} })
    listReturnReasons?: ReturnReasonGenqlSelection
    listShippingOptions?: (ShippingOptionGenqlSelection & { __args?: {is_return?: (Scalars['Boolean'] | null), product_ids?: ((Scalars['String'] | null)[] | null), region_id?: (Scalars['String'] | null)} })
    listShippingOptionsForCart?: (ShippingOptionGenqlSelection & { __args: {cart_id: Scalars['ID']} })
    getStore?: StoreGenqlSelection
    listPaymentProviders?: PaymentProviderGenqlSelection
    listTaxProviders?: TaxProviderGenqlSelection
    getByCartId?: (SwapGenqlSelection & { __args?: {input?: (GetByCartIdInput | null)} })
    getUser?: (UserGenqlSelection & { __args: {id: Scalars['ID']} })
    listUsers?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClaimImageGenqlSelection{
    id?: boolean | number
    claim_item_id?: boolean | number
    claim_item?: ClaimItemGenqlSelection
    created_at?: boolean | number
    deleted_at?: boolean | number
    metadata?: boolean | number
    updated_at?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClaimItemGenqlSelection{
    id?: boolean | number
    claim_order_id?: boolean | number
    claim_order?: ClaimOrderGenqlSelection
    created_at?: boolean | number
    deleted_at?: boolean | number
    images?: ClaimImageGenqlSelection
    item_id?: boolean | number
    item?: LineItemGenqlSelection
    metadata?: boolean | number
    note?: boolean | number
    quantity?: boolean | number
    reason?: boolean | number
    tags?: ClaimTagGenqlSelection
    updated_at?: boolean | number
    variant_id?: boolean | number
    variant?: ProductVariantGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClaimOrderGenqlSelection{
    id?: boolean | number
    additional_items?: LineItemGenqlSelection
    canceled_at?: boolean | number
    claim_items?: ClaimItemGenqlSelection
    created_at?: boolean | number
    deleted_at?: boolean | number
    fulfillments?: FulfillmentGenqlSelection
    fulfillment_status?: boolean | number
    idempotency_key?: boolean | number
    metadata?: boolean | number
    no_notification?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    payment_status?: boolean | number
    refund_amount?: boolean | number
    return_order?: ReturnGenqlSelection
    shipping_address_id?: boolean | number
    shipping_address?: AddressGenqlSelection
    shipping_methods?: ShippingMethodGenqlSelection
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClaimTagGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    metadata?: boolean | number
    updated_at?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DateComparison {lt?: (Scalars['String'] | null),gt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),gte?: (Scalars['String'] | null)}

export interface DeletionResponseGenqlSelection{
    id?: boolean | number
    deleted?: boolean | number
    object?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NoContentResponseGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CountryGenqlSelection{
    id?: boolean | number
    display_name?: boolean | number
    iso_2?: boolean | number
    iso_3?: boolean | number
    name?: boolean | number
    num_code?: boolean | number
    region_id?: boolean | number
    region?: RegionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrencyGenqlSelection{
    code?: boolean | number
    includes_tax?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    symbol_native?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerGroupGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    customers?: CustomerGenqlSelection
    metadata?: boolean | number
    name?: boolean | number
    price_lists?: PriceListGenqlSelection
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerGenqlSelection{
    id?: boolean | number
    billing_address_id?: boolean | number
    billing_address?: AddressGenqlSelection
    created_at?: boolean | number
    deleted_at?: boolean | number
    email?: boolean | number
    first_name?: boolean | number
    groups?: CustomerGroupGenqlSelection
    has_account?: boolean | number
    last_name?: boolean | number
    metadata?: boolean | number
    orders?: OrderGenqlSelection
    phone?: boolean | number
    shipping_addresses?: AddressGenqlSelection
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExistsGenqlSelection{
    exists?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentMethodsResponseGenqlSelection{
    provider_id?: boolean | number
    data?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddShippingAddressInput {address_1: Scalars['String'],address_2?: (Scalars['String'] | null),city: Scalars['String'],company?: (Scalars['String'] | null),country_code: Scalars['String'],first_name: Scalars['String'],last_name: Scalars['String'],metadata?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),postal_code: Scalars['String'],province?: (Scalars['String'] | null)}

export interface CreateCustomerInput {email: Scalars['String'],first_name: Scalars['String'],last_name: Scalars['String'],password: Scalars['String'],phone?: (Scalars['String'] | null)}

export interface UpdateCustomerInput {billing_address?: (UpdateCustomerBillingAddressInput | null),email?: (Scalars['String'] | null),first_name?: (Scalars['String'] | null),last_name?: (Scalars['String'] | null),password?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),metadata?: (Scalars['String'] | null)}

export interface DeleteShippingAddressInput {id: Scalars['ID']}

export interface ResetPasswordInput {email: Scalars['String'],password: Scalars['String'],token: Scalars['String']}

export interface ResetPasswordTokenInput {email: Scalars['String']}

export interface UpdateCustomerBillingAddressInput {address_1?: (Scalars['String'] | null),address_2?: (Scalars['String'] | null),city?: (Scalars['String'] | null),company?: (Scalars['String'] | null),country_code?: (Scalars['String'] | null),first_name?: (Scalars['String'] | null),last_name?: (Scalars['String'] | null),metadata?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),postal_code?: (Scalars['String'] | null),province?: (Scalars['String'] | null)}

export interface UpdateShippingAddressInput {id: Scalars['ID'],address_1?: (Scalars['String'] | null),address_2?: (Scalars['String'] | null),city?: (Scalars['String'] | null),company?: (Scalars['String'] | null),country_code?: (Scalars['String'] | null),first_name?: (Scalars['String'] | null),last_name?: (Scalars['String'] | null),metadata?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),postal_code?: (Scalars['String'] | null),province?: (Scalars['String'] | null)}

export interface ListOrdersResponseGenqlSelection{
    count?: boolean | number
    limit?: boolean | number
    offset?: boolean | number
    orders?: OrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DiscountConditionGenqlSelection{
    id?: boolean | number
    customer_groups?: CustomerGroupGenqlSelection
    discount_rule?: DiscountRuleGenqlSelection
    discount_rule_id?: boolean | number
    metadata?: boolean | number
    operator?: boolean | number
    products?: ProductGenqlSelection
    product_collections?: ProductCollectionGenqlSelection
    product_tags?: ProductTagGenqlSelection
    product_types?: ProductTypeGenqlSelection
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DiscountRuleGenqlSelection{
    id?: boolean | number
    allocation?: boolean | number
    conditions?: DiscountConditionGenqlSelection
    description?: boolean | number
    metadata?: boolean | number
    type?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DiscountGenqlSelection{
    id?: boolean | number
    code?: boolean | number
    ends_at?: boolean | number
    is_disabled?: boolean | number
    is_dynamic?: boolean | number
    metadata?: boolean | number
    parent_discount?: DiscountGenqlSelection
    parent_discount_id?: boolean | number
    regions?: RegionGenqlSelection
    rule?: DiscountRuleGenqlSelection
    rule_id?: boolean | number
    starts_at?: boolean | number
    usage_count?: boolean | number
    usage_limit?: boolean | number
    valid_duration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DraftOrderGenqlSelection{
    id?: boolean | number
    canceled_at?: boolean | number
    cart_id?: boolean | number
    cart?: CartGenqlSelection
    completed_at?: boolean | number
    display_id?: boolean | number
    idempotency_key?: boolean | number
    metadata?: boolean | number
    no_notification_order?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FulfillmentItemGenqlSelection{
    fulfillment_id?: boolean | number
    fulfillment?: FulfillmentGenqlSelection
    item_id?: boolean | number
    item?: LineItemGenqlSelection
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FulfillmentProviderGenqlSelection{
    id?: boolean | number
    is_installed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FulfillmentGenqlSelection{
    id?: boolean | number
    canceled_at?: boolean | number
    claim_order_id?: boolean | number
    claim_order?: ClaimOrderGenqlSelection
    data?: boolean | number
    idempotency_key?: boolean | number
    items?: FulfillmentItemGenqlSelection
    metadata?: boolean | number
    no_notification?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    provider_id?: boolean | number
    provider?: FulfillmentProviderGenqlSelection
    shipped_at?: boolean | number
    swap_id?: boolean | number
    swap?: SwapGenqlSelection
    tracking_links?: TrackingLinkGenqlSelection
    tracking_numbers?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiftCardTransactionGenqlSelection{
    id?: boolean | number
    amount?: boolean | number
    created_at?: boolean | number
    gift_card_id?: boolean | number
    gift_card?: GiftCardGenqlSelection
    is_taxable?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    tax_rate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GiftCardGenqlSelection{
    id?: boolean | number
    balance?: boolean | number
    code?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    ends_at?: boolean | number
    is_disabled?: boolean | number
    metadata?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    value?: boolean | number
    region_id?: boolean | number
    region?: RegionGenqlSelection
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IdempotencyKeyGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    idempotency_key?: boolean | number
    locked_at?: boolean | number
    recovery_point?: boolean | number
    response_body?: boolean | number
    response_code?: boolean | number
    request_method?: boolean | number
    request_params?: boolean | number
    request_path?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImageGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    metadata?: boolean | number
    updated_at?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LineItemAdjustmentGenqlSelection{
    id?: boolean | number
    amount?: boolean | number
    description?: boolean | number
    discount_id?: boolean | number
    discount?: DiscountGenqlSelection
    item_id?: boolean | number
    item?: LineItemGenqlSelection
    metadata?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LineItemTaxLineGenqlSelection{
    id?: boolean | number
    code?: boolean | number
    item_id?: boolean | number
    item?: LineItemGenqlSelection
    metadata?: boolean | number
    name?: boolean | number
    rate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LineItemGenqlSelection{
    id?: boolean | number
    adjustments?: LineItemAdjustmentGenqlSelection
    allow_discounts?: boolean | number
    cart_id?: boolean | number
    cart?: CartGenqlSelection
    claim_order_id?: boolean | number
    claim_order?: ClaimOrderGenqlSelection
    description?: boolean | number
    discount_total?: boolean | number
    fulfilled_quantity?: boolean | number
    gift_card_total?: boolean | number
    has_shipping?: boolean | number
    includes_tax?: boolean | number
    is_giftcard?: boolean | number
    is_return?: boolean | number
    metadata?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    order_edit_id?: boolean | number
    order_edit?: OrderEditGenqlSelection
    original_item_id?: boolean | number
    original_tax_total?: boolean | number
    original_total?: boolean | number
    quantity?: boolean | number
    refundable?: boolean | number
    returned_quantity?: boolean | number
    shipped_quantity?: boolean | number
    should_merge?: boolean | number
    subtotal?: boolean | number
    swap_id?: boolean | number
    swap?: SwapGenqlSelection
    tax_lines?: LineItemTaxLineGenqlSelection
    tax_total?: boolean | number
    title?: boolean | number
    thumbnail?: boolean | number
    total?: boolean | number
    unit_price?: boolean | number
    variant_id?: boolean | number
    variant?: ProductVariantGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MoneyAmountGenqlSelection{
    id?: boolean | number
    amount?: boolean | number
    currency?: CurrencyGenqlSelection
    currency_code?: boolean | number
    min_quantity?: boolean | number
    max_quantity?: boolean | number
    price_list?: PriceListGenqlSelection
    price_list_id?: boolean | number
    region?: RegionGenqlSelection
    region_id?: boolean | number
    variant?: ProductVariantGenqlSelection
    variant_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NotificationProviderGenqlSelection{
    id?: boolean | number
    is_installed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OauthGenqlSelection{
    id?: boolean | number
    application_name?: boolean | number
    data?: boolean | number
    display_name?: boolean | number
    install_url?: boolean | number
    uninstall_url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CompleteOrderEditInput {id: Scalars['ID']}

export interface DeclineOrderEditInput {id: Scalars['ID'],declined_reason?: (Scalars['String'] | null)}

export interface OrderEditGenqlSelection{
    id?: boolean | number
    canceled_at?: boolean | number
    canceled_by?: boolean | number
    changes?: OrderItemChangeGenqlSelection
    confirmed_at?: boolean | number
    confirmed_by?: boolean | number
    created_by?: boolean | number
    declined_at?: boolean | number
    declined_by?: boolean | number
    declined_reason?: boolean | number
    difference_due?: boolean | number
    discount_total?: boolean | number
    gift_card_tax_total?: boolean | number
    gift_card_total?: boolean | number
    internal_note?: boolean | number
    items?: LineItemGenqlSelection
    order_id?: boolean | number
    order?: OrderGenqlSelection
    payment_collection?: PaymentCollectionGenqlSelection
    payment_collection_id?: boolean | number
    requested_at?: boolean | number
    requested_by?: boolean | number
    shipping_total?: boolean | number
    status?: boolean | number
    subtotal?: boolean | number
    tax_total?: boolean | number
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrderItemChangeGenqlSelection{
    id?: boolean | number
    line_item_id?: boolean | number
    line_item?: LineItemGenqlSelection
    order_edit_id?: boolean | number
    order_edit?: OrderEditGenqlSelection
    original_line_item_id?: boolean | number
    original_line_item?: LineItemGenqlSelection
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShippingAddressQuery {postal_code?: (Scalars['String'] | null)}

export interface OrderGenqlSelection{
    id?: boolean | number
    billing_address_id?: boolean | number
    billing_address?: AddressGenqlSelection
    canceled_at?: boolean | number
    cart_id?: boolean | number
    cart?: CartGenqlSelection
    claims?: ClaimOrderGenqlSelection
    currency_code?: boolean | number
    currency?: CurrencyGenqlSelection
    customer_id?: boolean | number
    customer?: CustomerGenqlSelection
    discounts?: DiscountGenqlSelection
    discount_total?: boolean | number
    display_id?: boolean | number
    draft_order_id?: boolean | number
    draft_order?: DraftOrderGenqlSelection
    edits?: OrderEditGenqlSelection
    email?: boolean | number
    external_id?: boolean | number
    fulfillments?: FulfillmentGenqlSelection
    fulfillment_status?: boolean | number
    gift_cards?: GiftCardGenqlSelection
    gift_card_tax_total?: boolean | number
    gift_card_total?: boolean | number
    gift_card_transactions?: GiftCardTransactionGenqlSelection
    idempotency_key?: boolean | number
    items?: LineItemGenqlSelection
    metadata?: boolean | number
    no_notification?: boolean | number
    paid_total?: boolean | number
    payments?: PaymentGenqlSelection
    payment_status?: boolean | number
    region_id?: boolean | number
    region?: RegionGenqlSelection
    refundable_amount?: boolean | number
    refunded_total?: boolean | number
    refunds?: RefundGenqlSelection
    returns?: ReturnGenqlSelection
    sales_channel_id?: boolean | number
    sales_channel?: SalesChannelGenqlSelection
    shipping_address_id?: boolean | number
    shipping_address?: AddressGenqlSelection
    shipping_methods?: ShippingMethodGenqlSelection
    shipping_total?: boolean | number
    status?: boolean | number
    subtotal?: boolean | number
    swaps?: SwapGenqlSelection
    tax_rate?: boolean | number
    tax_total?: boolean | number
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentCollectionGenqlSelection{
    id?: boolean | number
    amount?: boolean | number
    authorized_amount?: boolean | number
    captured_amount?: boolean | number
    created_by?: boolean | number
    currency_code?: boolean | number
    currency?: CurrencyGenqlSelection
    description?: boolean | number
    metadata?: boolean | number
    payments?: PaymentGenqlSelection
    payment_sessions?: PaymentSessionGenqlSelection
    refunded_amount?: boolean | number
    region_id?: boolean | number
    region?: RegionGenqlSelection
    status?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentProviderGenqlSelection{
    id?: boolean | number
    is_installed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentSessionGenqlSelection{
    id?: boolean | number
    amount?: boolean | number
    cart_id?: boolean | number
    cart?: CartGenqlSelection
    data?: boolean | number
    idempotency_key?: boolean | number
    is_selected?: boolean | number
    payment_authorized_at?: boolean | number
    provider_id?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentGenqlSelection{
    id?: boolean | number
    amount?: boolean | number
    amount_refunded?: boolean | number
    canceled_at?: boolean | number
    captured_at?: boolean | number
    cart_id?: boolean | number
    cart?: CartGenqlSelection
    currency_code?: boolean | number
    currency?: CurrencyGenqlSelection
    data?: boolean | number
    idempotency_key?: boolean | number
    metadata?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    provider_id?: boolean | number
    swap_id?: boolean | number
    swap?: SwapGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceListGenqlSelection{
    id?: boolean | number
    customer_groups?: CustomerGroupGenqlSelection
    description?: boolean | number
    ends_at?: boolean | number
    includes_tax?: boolean | number
    name?: boolean | number
    prices?: MoneyAmountGenqlSelection
    starts_at?: boolean | number
    status?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductCollectionGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    handle?: boolean | number
    metadata?: boolean | number
    products?: ProductGenqlSelection
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ListCollectionGenqlSelection{
    collections?: ProductCollectionGenqlSelection
    count?: boolean | number
    limit?: boolean | number
    offset?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductOptionValueGenqlSelection{
    id?: boolean | number
    metadata?: boolean | number
    option?: ProductOptionGenqlSelection
    option_id?: boolean | number
    value?: boolean | number
    variant?: ProductVariantGenqlSelection
    variant_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductOptionGenqlSelection{
    id?: boolean | number
    metadata?: boolean | number
    title?: boolean | number
    product?: ProductGenqlSelection
    product_id?: boolean | number
    values?: ProductOptionValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductTagGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    metadata?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductTypeGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    metadata?: boolean | number
    updated_at?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductVariantGenqlSelection{
    id?: boolean | number
    allow_backorder?: boolean | number
    barcode?: boolean | number
    calculated_price?: boolean | number
    calculated_price_incl_tax?: boolean | number
    calculated_tax?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    ean?: boolean | number
    height?: boolean | number
    hs_code?: boolean | number
    inventory_quantity?: boolean | number
    length?: boolean | number
    manage_inventory?: boolean | number
    material?: boolean | number
    metadata?: boolean | number
    mid_code?: boolean | number
    title?: boolean | number
    options?: ProductOptionValueGenqlSelection
    origin_country?: boolean | number
    original_price?: boolean | number
    original_price_incl_tax?: boolean | number
    original_tax?: boolean | number
    prices?: MoneyAmountGenqlSelection
    product?: ProductGenqlSelection
    product_id?: boolean | number
    sku?: boolean | number
    upc?: boolean | number
    updated_at?: boolean | number
    variant_rank?: boolean | number
    width?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TaxRateGenqlSelection{
    code?: boolean | number
    name?: boolean | number
    rate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductGenqlSelection{
    id?: boolean | number
    collection?: ProductCollectionGenqlSelection
    collection_id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    discountable?: boolean | number
    external_id?: boolean | number
    handle?: boolean | number
    height?: boolean | number
    hs_code?: boolean | number
    images?: ImageGenqlSelection
    is_giftcard?: boolean | number
    length?: boolean | number
    material?: boolean | number
    metadata?: boolean | number
    mid_code?: boolean | number
    options?: ProductOptionGenqlSelection
    origin_country?: boolean | number
    profile?: ShippingProfileGenqlSelection
    profile_id?: boolean | number
    sales_channels?: SalesChannelGenqlSelection
    status?: boolean | number
    subtitle?: boolean | number
    tags?: ProductTagGenqlSelection
    thumbnail?: boolean | number
    title?: boolean | number
    type?: ProductTypeGenqlSelection
    type_id?: boolean | number
    updated_at?: boolean | number
    variants?: ProductVariantGenqlSelection
    weight?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ListProductsResponseGenqlSelection{
    limit?: boolean | number
    offset?: boolean | number
    products?: ProductGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchProductsResponseGenqlSelection{
    hits?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RefundGenqlSelection{
    id?: boolean | number
    amount?: boolean | number
    idempotency_key?: boolean | number
    metadata?: boolean | number
    note?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    payment_id?: boolean | number
    payment?: PaymentGenqlSelection
    reason?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegionGenqlSelection{
    id?: boolean | number
    automatic_taxes?: boolean | number
    countries?: CountryGenqlSelection
    created_at?: boolean | number
    currency_code?: boolean | number
    deleted_at?: boolean | number
    fulfillment_providers?: FulfillmentProviderGenqlSelection
    gift_cards_taxable?: boolean | number
    includes_tax?: boolean | number
    metadata?: boolean | number
    name?: boolean | number
    payment_providers?: PaymentProviderGenqlSelection
    tax_code?: boolean | number
    tax_provider_id?: boolean | number
    tax_rate?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddCountryInput {id: Scalars['ID'],country_code: Scalars['String']}

export interface ReturnItemGenqlSelection{
    is_requested?: boolean | number
    item_id?: boolean | number
    item?: LineItemGenqlSelection
    metadata?: boolean | number
    note?: boolean | number
    quantity?: boolean | number
    reason_id?: boolean | number
    reason?: ReturnReasonGenqlSelection
    received_quantity?: boolean | number
    requested_quantity?: boolean | number
    return_id?: boolean | number
    return_order?: ReturnGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReturnReasonGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    label?: boolean | number
    metadata?: boolean | number
    parent_return_reason?: ReturnReasonGenqlSelection
    parent_return_reason_id?: boolean | number
    return_reason_children?: ReturnReasonGenqlSelection
    updated_at?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateReturnReasonInput {description: Scalars['String'],label: Scalars['String'],metadata?: (Scalars['String'] | null),parent_return_reason_id?: (Scalars['ID'] | null),value: Scalars['String']}

export interface UpdateReturnReasonInput {id: Scalars['ID'],description?: (Scalars['String'] | null),label?: (Scalars['String'] | null),metadata?: (Scalars['String'] | null),value?: (Scalars['String'] | null)}

export interface DeleteReturnReasonInput {id: Scalars['ID']}

export interface CreateReturnInput {items: CreateReturnItemsInput[],order_id: Scalars['ID'],return_shipping?: (CreateReturnReturnShippingInput | null)}

export interface CreateReturnItemsInput {item_id: Scalars['ID'],note?: (Scalars['String'] | null),reason_id?: (Scalars['ID'] | null),quantity: Scalars['Int']}

export interface CreateReturnReturnShippingInput {option_id: Scalars['ID']}

export interface ReturnGenqlSelection{
    id?: boolean | number
    claim_order_id?: boolean | number
    claim_order?: ClaimOrderGenqlSelection
    idempotency_key?: boolean | number
    metadata?: boolean | number
    no_notification?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    received_at?: boolean | number
    refund_amount?: boolean | number
    shipping_data?: boolean | number
    shipping_method?: ShippingMethodGenqlSelection
    status?: boolean | number
    swap_id?: boolean | number
    swap?: SwapGenqlSelection
    items?: ReturnItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SalesChannelGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    description?: boolean | number
    is_disabled?: boolean | number
    name?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShippingMethodTaxLineGenqlSelection{
    id?: boolean | number
    code?: boolean | number
    metadata?: boolean | number
    name?: boolean | number
    rate?: boolean | number
    shipping_method_id?: boolean | number
    shipping_method?: ShippingMethodGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShippingMethodGenqlSelection{
    id?: boolean | number
    cart_id?: boolean | number
    cart?: CartGenqlSelection
    claim_order_id?: boolean | number
    claim_order?: ClaimOrderGenqlSelection
    data?: boolean | number
    includes_tax?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    price?: boolean | number
    return_id?: boolean | number
    return_order?: ReturnGenqlSelection
    shipping_option_id?: boolean | number
    shipping_option?: ShippingOptionGenqlSelection
    subtotal?: boolean | number
    swap_id?: boolean | number
    swap?: SwapGenqlSelection
    tax_lines?: ShippingMethodTaxLineGenqlSelection
    tax_total?: boolean | number
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShippingOptionRequirementGenqlSelection{
    id?: boolean | number
    amount?: boolean | number
    deleted_at?: boolean | number
    shipping_option_id?: boolean | number
    shipping_option?: ShippingOptionGenqlSelection
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShippingOptionGenqlSelection{
    id?: boolean | number
    admin_only?: boolean | number
    amount?: boolean | number
    data?: boolean | number
    includes_tax?: boolean | number
    is_return?: boolean | number
    metadata?: boolean | number
    name?: boolean | number
    price_type?: boolean | number
    profile_id?: boolean | number
    profile?: ShippingProfileGenqlSelection
    provider_id?: boolean | number
    provider?: FulfillmentProviderGenqlSelection
    region_id?: boolean | number
    region?: RegionGenqlSelection
    requirements?: ShippingOptionRequirementGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShippingProfileGenqlSelection{
    id?: boolean | number
    metadata?: boolean | number
    name?: boolean | number
    products?: ProductGenqlSelection
    shipping_options?: ShippingOptionGenqlSelection
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StoreGenqlSelection{
    id?: boolean | number
    created_at?: boolean | number
    currencies?: CurrencyGenqlSelection
    default_currency?: CurrencyGenqlSelection
    default_currency_code?: boolean | number
    default_sales_channel?: SalesChannelGenqlSelection
    default_sales_channel_id?: boolean | number
    invite_link_template?: boolean | number
    metadata?: boolean | number
    name?: boolean | number
    payment_link_template?: boolean | number
    swap_link_template?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddCurrencyCodeInput {code?: (Scalars['String'] | null)}

export interface DeleteCurrencyCodeInput {code?: (Scalars['String'] | null)}

export interface UpdateStoreInput {name?: (Scalars['String'] | null),swap_link_template?: (Scalars['String'] | null),payment_link_template?: (Scalars['String'] | null),invite_link_template?: (Scalars['String'] | null),default_currency_code?: (Scalars['String'] | null),currencies?: ((Scalars['String'] | null)[] | null),metadata?: (Scalars['String'] | null)}

export interface AdditionalItemsInput {quantity?: (Scalars['Int'] | null),variant_id?: (Scalars['ID'] | null)}

export interface CreateSwapInput {additional_items: AdditionalItemsInput[],order_id: Scalars['ID'],return_items: ReturnItemsInput[],return_shipping_option?: (Scalars['String'] | null)}

export interface GetByCartIdInput {cart_id: Scalars['ID']}

export interface ReturnItemsInput {item_id: Scalars['ID'],note?: (Scalars['String'] | null),quantity: Scalars['Int'],reason_id?: (Scalars['ID'] | null)}

export interface SwapGenqlSelection{
    id?: boolean | number
    additional_items?: LineItemGenqlSelection
    allow_backorder?: boolean | number
    canceled_at?: boolean | number
    cart_id?: boolean | number
    cart?: CartGenqlSelection
    confirmed_at?: boolean | number
    difference_due?: boolean | number
    fulfillments?: FulfillmentGenqlSelection
    fulfillment_status?: boolean | number
    idempotency_key?: boolean | number
    metadata?: boolean | number
    no_notification?: boolean | number
    order_id?: boolean | number
    order?: OrderGenqlSelection
    payment?: PaymentGenqlSelection
    payment_status?: boolean | number
    return_order?: ReturnGenqlSelection
    shipping_address_id?: boolean | number
    shipping_address?: AddressGenqlSelection
    shipping_methods?: ShippingMethodGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TaxProviderGenqlSelection{
    id?: boolean | number
    is_installed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TrackingLinkGenqlSelection{
    id?: boolean | number
    fulfillment_id?: boolean | number
    idempotency_key?: boolean | number
    metadata?: boolean | number
    tracking_number?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserGenqlSelection{
    id?: boolean | number
    api_token?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    email?: boolean | number
    first_name?: boolean | number
    last_name?: boolean | number
    metadata?: boolean | number
    role?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateUserInput {email: Scalars['String'],password: Scalars['String'],first_name?: (Scalars['String'] | null),last_name?: (Scalars['String'] | null),role?: (UserRole | null)}

export interface DeleteUserInput {id: Scalars['ID']}

export interface UpdateUserInput {id: Scalars['ID'],first_name?: (Scalars['String'] | null),last_name?: (Scalars['String'] | null),role?: (UserRole | null),api_token?: (Scalars['String'] | null),metadata?: (Scalars['String'] | null)}

export interface RequestPasswordResetInput {email: Scalars['String']}


    const Address_possibleTypes: string[] = ['Address']
    export const isAddress = (obj?: { __typename?: any } | null): obj is Address => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddress"')
      return Address_possibleTypes.includes(obj.__typename)
    }
    


    const Cart_possibleTypes: string[] = ['Cart']
    export const isCart = (obj?: { __typename?: any } | null): obj is Cart => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCart"')
      return Cart_possibleTypes.includes(obj.__typename)
    }
    


    const CompleteCartResponse_possibleTypes: string[] = ['CompleteCartResponse']
    export const isCompleteCartResponse = (obj?: { __typename?: any } | null): obj is CompleteCartResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCompleteCartResponse"')
      return CompleteCartResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const ClaimImage_possibleTypes: string[] = ['ClaimImage']
    export const isClaimImage = (obj?: { __typename?: any } | null): obj is ClaimImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isClaimImage"')
      return ClaimImage_possibleTypes.includes(obj.__typename)
    }
    


    const ClaimItem_possibleTypes: string[] = ['ClaimItem']
    export const isClaimItem = (obj?: { __typename?: any } | null): obj is ClaimItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isClaimItem"')
      return ClaimItem_possibleTypes.includes(obj.__typename)
    }
    


    const ClaimOrder_possibleTypes: string[] = ['ClaimOrder']
    export const isClaimOrder = (obj?: { __typename?: any } | null): obj is ClaimOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isClaimOrder"')
      return ClaimOrder_possibleTypes.includes(obj.__typename)
    }
    


    const ClaimTag_possibleTypes: string[] = ['ClaimTag']
    export const isClaimTag = (obj?: { __typename?: any } | null): obj is ClaimTag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isClaimTag"')
      return ClaimTag_possibleTypes.includes(obj.__typename)
    }
    


    const DeletionResponse_possibleTypes: string[] = ['DeletionResponse']
    export const isDeletionResponse = (obj?: { __typename?: any } | null): obj is DeletionResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeletionResponse"')
      return DeletionResponse_possibleTypes.includes(obj.__typename)
    }
    


    const NoContentResponse_possibleTypes: string[] = ['NoContentResponse']
    export const isNoContentResponse = (obj?: { __typename?: any } | null): obj is NoContentResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNoContentResponse"')
      return NoContentResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Country_possibleTypes: string[] = ['Country']
    export const isCountry = (obj?: { __typename?: any } | null): obj is Country => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCountry"')
      return Country_possibleTypes.includes(obj.__typename)
    }
    


    const Currency_possibleTypes: string[] = ['Currency']
    export const isCurrency = (obj?: { __typename?: any } | null): obj is Currency => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrency"')
      return Currency_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerGroup_possibleTypes: string[] = ['CustomerGroup']
    export const isCustomerGroup = (obj?: { __typename?: any } | null): obj is CustomerGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerGroup"')
      return CustomerGroup_possibleTypes.includes(obj.__typename)
    }
    


    const Customer_possibleTypes: string[] = ['Customer']
    export const isCustomer = (obj?: { __typename?: any } | null): obj is Customer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomer"')
      return Customer_possibleTypes.includes(obj.__typename)
    }
    


    const Exists_possibleTypes: string[] = ['Exists']
    export const isExists = (obj?: { __typename?: any } | null): obj is Exists => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExists"')
      return Exists_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentMethodsResponse_possibleTypes: string[] = ['PaymentMethodsResponse']
    export const isPaymentMethodsResponse = (obj?: { __typename?: any } | null): obj is PaymentMethodsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentMethodsResponse"')
      return PaymentMethodsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const ListOrdersResponse_possibleTypes: string[] = ['ListOrdersResponse']
    export const isListOrdersResponse = (obj?: { __typename?: any } | null): obj is ListOrdersResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListOrdersResponse"')
      return ListOrdersResponse_possibleTypes.includes(obj.__typename)
    }
    


    const DiscountCondition_possibleTypes: string[] = ['DiscountCondition']
    export const isDiscountCondition = (obj?: { __typename?: any } | null): obj is DiscountCondition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscountCondition"')
      return DiscountCondition_possibleTypes.includes(obj.__typename)
    }
    


    const DiscountRule_possibleTypes: string[] = ['DiscountRule']
    export const isDiscountRule = (obj?: { __typename?: any } | null): obj is DiscountRule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscountRule"')
      return DiscountRule_possibleTypes.includes(obj.__typename)
    }
    


    const Discount_possibleTypes: string[] = ['Discount']
    export const isDiscount = (obj?: { __typename?: any } | null): obj is Discount => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscount"')
      return Discount_possibleTypes.includes(obj.__typename)
    }
    


    const DraftOrder_possibleTypes: string[] = ['DraftOrder']
    export const isDraftOrder = (obj?: { __typename?: any } | null): obj is DraftOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDraftOrder"')
      return DraftOrder_possibleTypes.includes(obj.__typename)
    }
    


    const FulfillmentItem_possibleTypes: string[] = ['FulfillmentItem']
    export const isFulfillmentItem = (obj?: { __typename?: any } | null): obj is FulfillmentItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFulfillmentItem"')
      return FulfillmentItem_possibleTypes.includes(obj.__typename)
    }
    


    const FulfillmentProvider_possibleTypes: string[] = ['FulfillmentProvider']
    export const isFulfillmentProvider = (obj?: { __typename?: any } | null): obj is FulfillmentProvider => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFulfillmentProvider"')
      return FulfillmentProvider_possibleTypes.includes(obj.__typename)
    }
    


    const Fulfillment_possibleTypes: string[] = ['Fulfillment']
    export const isFulfillment = (obj?: { __typename?: any } | null): obj is Fulfillment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFulfillment"')
      return Fulfillment_possibleTypes.includes(obj.__typename)
    }
    


    const GiftCardTransaction_possibleTypes: string[] = ['GiftCardTransaction']
    export const isGiftCardTransaction = (obj?: { __typename?: any } | null): obj is GiftCardTransaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiftCardTransaction"')
      return GiftCardTransaction_possibleTypes.includes(obj.__typename)
    }
    


    const GiftCard_possibleTypes: string[] = ['GiftCard']
    export const isGiftCard = (obj?: { __typename?: any } | null): obj is GiftCard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGiftCard"')
      return GiftCard_possibleTypes.includes(obj.__typename)
    }
    


    const IdempotencyKey_possibleTypes: string[] = ['IdempotencyKey']
    export const isIdempotencyKey = (obj?: { __typename?: any } | null): obj is IdempotencyKey => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdempotencyKey"')
      return IdempotencyKey_possibleTypes.includes(obj.__typename)
    }
    


    const Image_possibleTypes: string[] = ['Image']
    export const isImage = (obj?: { __typename?: any } | null): obj is Image => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImage"')
      return Image_possibleTypes.includes(obj.__typename)
    }
    


    const LineItemAdjustment_possibleTypes: string[] = ['LineItemAdjustment']
    export const isLineItemAdjustment = (obj?: { __typename?: any } | null): obj is LineItemAdjustment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLineItemAdjustment"')
      return LineItemAdjustment_possibleTypes.includes(obj.__typename)
    }
    


    const LineItemTaxLine_possibleTypes: string[] = ['LineItemTaxLine']
    export const isLineItemTaxLine = (obj?: { __typename?: any } | null): obj is LineItemTaxLine => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLineItemTaxLine"')
      return LineItemTaxLine_possibleTypes.includes(obj.__typename)
    }
    


    const LineItem_possibleTypes: string[] = ['LineItem']
    export const isLineItem = (obj?: { __typename?: any } | null): obj is LineItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLineItem"')
      return LineItem_possibleTypes.includes(obj.__typename)
    }
    


    const MoneyAmount_possibleTypes: string[] = ['MoneyAmount']
    export const isMoneyAmount = (obj?: { __typename?: any } | null): obj is MoneyAmount => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMoneyAmount"')
      return MoneyAmount_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationProvider_possibleTypes: string[] = ['NotificationProvider']
    export const isNotificationProvider = (obj?: { __typename?: any } | null): obj is NotificationProvider => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationProvider"')
      return NotificationProvider_possibleTypes.includes(obj.__typename)
    }
    


    const Oauth_possibleTypes: string[] = ['Oauth']
    export const isOauth = (obj?: { __typename?: any } | null): obj is Oauth => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOauth"')
      return Oauth_possibleTypes.includes(obj.__typename)
    }
    


    const OrderEdit_possibleTypes: string[] = ['OrderEdit']
    export const isOrderEdit = (obj?: { __typename?: any } | null): obj is OrderEdit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderEdit"')
      return OrderEdit_possibleTypes.includes(obj.__typename)
    }
    


    const OrderItemChange_possibleTypes: string[] = ['OrderItemChange']
    export const isOrderItemChange = (obj?: { __typename?: any } | null): obj is OrderItemChange => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderItemChange"')
      return OrderItemChange_possibleTypes.includes(obj.__typename)
    }
    


    const Order_possibleTypes: string[] = ['Order']
    export const isOrder = (obj?: { __typename?: any } | null): obj is Order => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrder"')
      return Order_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentCollection_possibleTypes: string[] = ['PaymentCollection']
    export const isPaymentCollection = (obj?: { __typename?: any } | null): obj is PaymentCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentCollection"')
      return PaymentCollection_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentProvider_possibleTypes: string[] = ['PaymentProvider']
    export const isPaymentProvider = (obj?: { __typename?: any } | null): obj is PaymentProvider => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentProvider"')
      return PaymentProvider_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentSession_possibleTypes: string[] = ['PaymentSession']
    export const isPaymentSession = (obj?: { __typename?: any } | null): obj is PaymentSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentSession"')
      return PaymentSession_possibleTypes.includes(obj.__typename)
    }
    


    const Payment_possibleTypes: string[] = ['Payment']
    export const isPayment = (obj?: { __typename?: any } | null): obj is Payment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPayment"')
      return Payment_possibleTypes.includes(obj.__typename)
    }
    


    const PriceList_possibleTypes: string[] = ['PriceList']
    export const isPriceList = (obj?: { __typename?: any } | null): obj is PriceList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPriceList"')
      return PriceList_possibleTypes.includes(obj.__typename)
    }
    


    const ProductCollection_possibleTypes: string[] = ['ProductCollection']
    export const isProductCollection = (obj?: { __typename?: any } | null): obj is ProductCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductCollection"')
      return ProductCollection_possibleTypes.includes(obj.__typename)
    }
    


    const ListCollection_possibleTypes: string[] = ['ListCollection']
    export const isListCollection = (obj?: { __typename?: any } | null): obj is ListCollection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListCollection"')
      return ListCollection_possibleTypes.includes(obj.__typename)
    }
    


    const ProductOptionValue_possibleTypes: string[] = ['ProductOptionValue']
    export const isProductOptionValue = (obj?: { __typename?: any } | null): obj is ProductOptionValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductOptionValue"')
      return ProductOptionValue_possibleTypes.includes(obj.__typename)
    }
    


    const ProductOption_possibleTypes: string[] = ['ProductOption']
    export const isProductOption = (obj?: { __typename?: any } | null): obj is ProductOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductOption"')
      return ProductOption_possibleTypes.includes(obj.__typename)
    }
    


    const ProductTag_possibleTypes: string[] = ['ProductTag']
    export const isProductTag = (obj?: { __typename?: any } | null): obj is ProductTag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductTag"')
      return ProductTag_possibleTypes.includes(obj.__typename)
    }
    


    const ProductType_possibleTypes: string[] = ['ProductType']
    export const isProductType = (obj?: { __typename?: any } | null): obj is ProductType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductType"')
      return ProductType_possibleTypes.includes(obj.__typename)
    }
    


    const ProductVariant_possibleTypes: string[] = ['ProductVariant']
    export const isProductVariant = (obj?: { __typename?: any } | null): obj is ProductVariant => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductVariant"')
      return ProductVariant_possibleTypes.includes(obj.__typename)
    }
    


    const TaxRate_possibleTypes: string[] = ['TaxRate']
    export const isTaxRate = (obj?: { __typename?: any } | null): obj is TaxRate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxRate"')
      return TaxRate_possibleTypes.includes(obj.__typename)
    }
    


    const Product_possibleTypes: string[] = ['Product']
    export const isProduct = (obj?: { __typename?: any } | null): obj is Product => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProduct"')
      return Product_possibleTypes.includes(obj.__typename)
    }
    


    const ListProductsResponse_possibleTypes: string[] = ['ListProductsResponse']
    export const isListProductsResponse = (obj?: { __typename?: any } | null): obj is ListProductsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListProductsResponse"')
      return ListProductsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const SearchProductsResponse_possibleTypes: string[] = ['SearchProductsResponse']
    export const isSearchProductsResponse = (obj?: { __typename?: any } | null): obj is SearchProductsResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchProductsResponse"')
      return SearchProductsResponse_possibleTypes.includes(obj.__typename)
    }
    


    const Refund_possibleTypes: string[] = ['Refund']
    export const isRefund = (obj?: { __typename?: any } | null): obj is Refund => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRefund"')
      return Refund_possibleTypes.includes(obj.__typename)
    }
    


    const Region_possibleTypes: string[] = ['Region']
    export const isRegion = (obj?: { __typename?: any } | null): obj is Region => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRegion"')
      return Region_possibleTypes.includes(obj.__typename)
    }
    


    const ReturnItem_possibleTypes: string[] = ['ReturnItem']
    export const isReturnItem = (obj?: { __typename?: any } | null): obj is ReturnItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReturnItem"')
      return ReturnItem_possibleTypes.includes(obj.__typename)
    }
    


    const ReturnReason_possibleTypes: string[] = ['ReturnReason']
    export const isReturnReason = (obj?: { __typename?: any } | null): obj is ReturnReason => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReturnReason"')
      return ReturnReason_possibleTypes.includes(obj.__typename)
    }
    


    const Return_possibleTypes: string[] = ['Return']
    export const isReturn = (obj?: { __typename?: any } | null): obj is Return => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReturn"')
      return Return_possibleTypes.includes(obj.__typename)
    }
    


    const SalesChannel_possibleTypes: string[] = ['SalesChannel']
    export const isSalesChannel = (obj?: { __typename?: any } | null): obj is SalesChannel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSalesChannel"')
      return SalesChannel_possibleTypes.includes(obj.__typename)
    }
    


    const ShippingMethodTaxLine_possibleTypes: string[] = ['ShippingMethodTaxLine']
    export const isShippingMethodTaxLine = (obj?: { __typename?: any } | null): obj is ShippingMethodTaxLine => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShippingMethodTaxLine"')
      return ShippingMethodTaxLine_possibleTypes.includes(obj.__typename)
    }
    


    const ShippingMethod_possibleTypes: string[] = ['ShippingMethod']
    export const isShippingMethod = (obj?: { __typename?: any } | null): obj is ShippingMethod => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShippingMethod"')
      return ShippingMethod_possibleTypes.includes(obj.__typename)
    }
    


    const ShippingOptionRequirement_possibleTypes: string[] = ['ShippingOptionRequirement']
    export const isShippingOptionRequirement = (obj?: { __typename?: any } | null): obj is ShippingOptionRequirement => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShippingOptionRequirement"')
      return ShippingOptionRequirement_possibleTypes.includes(obj.__typename)
    }
    


    const ShippingOption_possibleTypes: string[] = ['ShippingOption']
    export const isShippingOption = (obj?: { __typename?: any } | null): obj is ShippingOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShippingOption"')
      return ShippingOption_possibleTypes.includes(obj.__typename)
    }
    


    const ShippingProfile_possibleTypes: string[] = ['ShippingProfile']
    export const isShippingProfile = (obj?: { __typename?: any } | null): obj is ShippingProfile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShippingProfile"')
      return ShippingProfile_possibleTypes.includes(obj.__typename)
    }
    


    const Store_possibleTypes: string[] = ['Store']
    export const isStore = (obj?: { __typename?: any } | null): obj is Store => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStore"')
      return Store_possibleTypes.includes(obj.__typename)
    }
    


    const Swap_possibleTypes: string[] = ['Swap']
    export const isSwap = (obj?: { __typename?: any } | null): obj is Swap => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSwap"')
      return Swap_possibleTypes.includes(obj.__typename)
    }
    


    const TaxProvider_possibleTypes: string[] = ['TaxProvider']
    export const isTaxProvider = (obj?: { __typename?: any } | null): obj is TaxProvider => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxProvider"')
      return TaxProvider_possibleTypes.includes(obj.__typename)
    }
    


    const TrackingLink_possibleTypes: string[] = ['TrackingLink']
    export const isTrackingLink = (obj?: { __typename?: any } | null): obj is TrackingLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTrackingLink"')
      return TrackingLink_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    

export const enumCartType = {
   CLAIM: 'CLAIM' as const,
   DEFAULT: 'DEFAULT' as const,
   DRAFTORDER: 'DRAFTORDER' as const,
   PAYMENTLINK: 'PAYMENTLINK' as const,
   SWAP: 'SWAP' as const
}

export const enumCompleteCartType = {
   CART: 'CART' as const,
   ORDER: 'ORDER' as const,
   SWAP: 'SWAP' as const
}

export const enumClaimReason = {
   MISSINGITEM: 'MISSINGITEM' as const,
   WRONGITEM: 'WRONGITEM' as const,
   PRODUCTIONFAILURE: 'PRODUCTIONFAILURE' as const,
   OTHER: 'OTHER' as const
}

export const enumClaimFulfillmentStatus = {
   NOTFULFILLED: 'NOTFULFILLED' as const,
   PARTIALLYFULFILLED: 'PARTIALLYFULFILLED' as const,
   FULFILLED: 'FULFILLED' as const,
   PARTIALLYSHIPPED: 'PARTIALLYSHIPPED' as const,
   SHIPPED: 'SHIPPED' as const,
   PARTIALLYRETURNED: 'PARTIALLYRETURNED' as const,
   RETURNED: 'RETURNED' as const,
   CANCELED: 'CANCELED' as const,
   REQUIRESACTION: 'REQUIRESACTION' as const
}

export const enumClaimPaymentStatus = {
   NA: 'NA' as const,
   NOTREFUNDED: 'NOTREFUNDED' as const,
   REFUNDED: 'REFUNDED' as const
}

export const enumClaimType = {
   REFUND: 'REFUND' as const,
   REPLACE: 'REPLACE' as const
}

export const enumDiscountConditionOperator = {
   IN: 'IN' as const,
   NOTIN: 'NOTIN' as const
}

export const enumDiscountConditionType = {
   CUSTOMERGROUPS: 'CUSTOMERGROUPS' as const,
   PRODUCTCOLLECTIONS: 'PRODUCTCOLLECTIONS' as const,
   PRODUCTS: 'PRODUCTS' as const,
   PRODUCTTAGS: 'PRODUCTTAGS' as const,
   PRODUCTTYPES: 'PRODUCTTYPES' as const
}

export const enumAllocationType = {
   ITEM: 'ITEM' as const,
   TOTAL: 'TOTAL' as const
}

export const enumDiscountRuleType = {
   FIXED: 'FIXED' as const,
   FREESHIPPING: 'FREESHIPPING' as const,
   PERCENTAGE: 'PERCENTAGE' as const
}

export const enumDraftOrderStatus = {
   COMPLETED: 'COMPLETED' as const,
   OPEN: 'OPEN' as const
}

export const enumOrderEditStatus = {
   CANCELED: 'CANCELED' as const,
   CONFIRMED: 'CONFIRMED' as const,
   CREATED: 'CREATED' as const,
   DECLINED: 'DECLINED' as const,
   REQUESTED: 'REQUESTED' as const
}

export const enumOrderEditItemChangeType = {
   ITEMADD: 'ITEMADD' as const,
   ITEMREMOVE: 'ITEMREMOVE' as const,
   ITEMUPDATE: 'ITEMUPDATE' as const
}

export const enumFulfillmentStatus = {
   CANCELED: 'CANCELED' as const,
   FULFILLED: 'FULFILLED' as const,
   NOTFULFILLED: 'NOTFULFILLED' as const,
   PARTIALLYFULFILLED: 'PARTIALLYFULFILLED' as const,
   PARTIALLYRETURNED: 'PARTIALLYRETURNED' as const,
   PARTIALLYSHIPPED: 'PARTIALLYSHIPPED' as const,
   RETURNED: 'RETURNED' as const,
   REQUIRESACTION: 'REQUIRESACTION' as const,
   SHIPPED: 'SHIPPED' as const
}

export const enumOrderStatus = {
   ARCHIVED: 'ARCHIVED' as const,
   CANCELED: 'CANCELED' as const,
   COMPLETED: 'COMPLETED' as const,
   PENDING: 'PENDING' as const,
   REQUIRES_ACTION: 'REQUIRES_ACTION' as const
}

export const enumPaymentStatus = {
   AWAITING: 'AWAITING' as const,
   CANCELED: 'CANCELED' as const,
   CAPTURED: 'CAPTURED' as const,
   NOTPAID: 'NOTPAID' as const,
   PARTIALLYREFUNDED: 'PARTIALLYREFUNDED' as const,
   REFUNDED: 'REFUNDED' as const,
   REQUIRESACTION: 'REQUIRESACTION' as const
}

export const enumPaymentCollectionStatus = {
   AUTHORIZED: 'AUTHORIZED' as const,
   AWAITING: 'AWAITING' as const,
   CANCELED: 'CANCELED' as const,
   CAPTURED: 'CAPTURED' as const,
   NOTPAID: 'NOTPAID' as const,
   PARTIALLYAUTHORIZED: 'PARTIALLYAUTHORIZED' as const,
   PARTIALLYCAPTURED: 'PARTIALLYCAPTURED' as const,
   PARTIALLYREFUNDED: 'PARTIALLYREFUNDED' as const,
   REFUNDED: 'REFUNDED' as const,
   REQUIRESACTION: 'REQUIRESACTION' as const
}

export const enumPaymentCollectionType = {
   ORDEREDIT: 'ORDEREDIT' as const
}

export const enumPaymentSessionStatus = {
   AUTHORIZED: 'AUTHORIZED' as const,
   CANCELED: 'CANCELED' as const,
   ERROR: 'ERROR' as const,
   PENDING: 'PENDING' as const,
   REQUIRESMORE: 'REQUIRESMORE' as const
}

export const enumPriceListStatus = {
   ACTIVE: 'ACTIVE' as const,
   DRAFT: 'DRAFT' as const
}

export const enumPriceListType = {
   OVERRIDE: 'OVERRIDE' as const,
   SALE: 'SALE' as const
}

export const enumProductStatus = {
   DRAFT: 'DRAFT' as const,
   PROPOSED: 'PROPOSED' as const,
   PUBLISHED: 'PUBLISHED' as const,
   REJECTED: 'REJECTED' as const
}

export const enumReturnStatus = {
   CANCELED: 'CANCELED' as const,
   RECEIVED: 'RECEIVED' as const,
   REQUESTED: 'REQUESTED' as const,
   REQUIRESACTION: 'REQUIRESACTION' as const
}

export const enumRequirementType = {
   MAXSUBTOTAL: 'MAXSUBTOTAL' as const,
   MINSUBTOTAL: 'MINSUBTOTAL' as const
}

export const enumShippingOptionPriceType = {
   FLATRATE: 'FLATRATE' as const,
   CALCULATED: 'CALCULATED' as const
}

export const enumShippingProfileType = {
   CUSTOM: 'CUSTOM' as const,
   DEFAULT: 'DEFAULT' as const,
   GIFTCARD: 'GIFTCARD' as const
}

export const enumSwapFulfillmentStatus = {
   CANCELED: 'CANCELED' as const,
   FULFILLED: 'FULFILLED' as const,
   NOTFULFILLED: 'NOTFULFILLED' as const,
   PARTIALLYSHIPPED: 'PARTIALLYSHIPPED' as const,
   REQUIRESACTION: 'REQUIRESACTION' as const,
   SHIPPED: 'SHIPPED' as const
}

export const enumSwapPaymentStatus = {
   AWAITING: 'AWAITING' as const,
   CANCELED: 'CANCELED' as const,
   CAPTURED: 'CAPTURED' as const,
   CONFIRMED: 'CONFIRMED' as const,
   DIFFERENCEREFUNDED: 'DIFFERENCEREFUNDED' as const,
   NOTPAID: 'NOTPAID' as const,
   PARTIALLYREFUNDED: 'PARTIALLYREFUNDED' as const,
   REFUNDED: 'REFUNDED' as const,
   REQUIRESACTION: 'REQUIRESACTION' as const
}

export const enumUserRole = {
   ADMIN: 'ADMIN' as const,
   MEMBER: 'MEMBER' as const,
   DEVELOPER: 'DEVELOPER' as const
}
