export default {
    "scalars": [
        1,
        2,
        3,
        4,
        6,
        22,
        26,
        28,
        30,
        31,
        32,
        53,
        54,
        56,
        57,
        60,
        75,
        79,
        81,
        82,
        83,
        86,
        87,
        90,
        93,
        94,
        104,
        116,
        124,
        126,
        128,
        134,
        135,
        143
    ],
    "types": {
        "Address": {
            "id": [
                1
            ],
            "address_1": [
                2
            ],
            "address_2": [
                2
            ],
            "city": [
                2
            ],
            "company": [
                2
            ],
            "country_code": [
                2
            ],
            "created_at": [
                2
            ],
            "customer_id": [
                1
            ],
            "deleted_at": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "metadata": [
                2
            ],
            "phone": [
                2
            ],
            "postal_code": [
                2
            ],
            "province": [
                2
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "CartType": {},
        "CompleteCartType": {},
        "AddLineItemInput": {
            "id": [
                1
            ],
            "metadata": [
                2
            ],
            "quantity": [
                6
            ],
            "variant_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "AddressInput": {
            "id": [
                1
            ],
            "address_1": [
                2
            ],
            "address_2": [
                2
            ],
            "city": [
                2
            ],
            "company": [
                2
            ],
            "country_code": [
                2
            ],
            "created_at": [
                2
            ],
            "customer_id": [
                1
            ],
            "deleted_at": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "metadata": [
                2
            ],
            "phone": [
                2
            ],
            "postal_code": [
                2
            ],
            "province": [
                2
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "AddShippingMethodInput": {
            "id": [
                1
            ],
            "option_id": [
                1
            ],
            "data": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CompleteCartInput": {
            "id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "CreateCartInput": {
            "region_id": [
                1
            ],
            "sales_channel_id": [
                1
            ],
            "country_code": [
                2
            ],
            "items": [
                11
            ],
            "context": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CreateCartItemsInput": {
            "variant_id": [
                1
            ],
            "quantity": [
                6
            ],
            "__typename": [
                2
            ]
        },
        "CreatePaymentSessionsInput": {
            "id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "DeleteLineItemInput": {
            "id": [
                1
            ],
            "line_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "DeletePaymentSessionInput": {
            "id": [
                1
            ],
            "provider_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "RefreshPaymentSessionInput": {
            "id": [
                1
            ],
            "provider_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "RemoveDiscountInput": {
            "id": [
                1
            ],
            "code": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "SelectPaymentSessionInput": {
            "id": [
                1
            ],
            "provider_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "UpdateCartInput": {
            "id": [
                1
            ],
            "billing_address": [
                7
            ],
            "context": [
                2
            ],
            "country_code": [
                2
            ],
            "customer_id": [
                1
            ],
            "discounts": [
                2
            ],
            "email": [
                2
            ],
            "gift_cards": [
                2
            ],
            "region_id": [
                1
            ],
            "sales_channel_id": [
                1
            ],
            "shipping_address": [
                7
            ],
            "__typename": [
                2
            ]
        },
        "UpdateLineItemInput": {
            "id": [
                1
            ],
            "line_id": [
                1
            ],
            "quantity": [
                6
            ],
            "__typename": [
                2
            ]
        },
        "UpdatePaymentSessionInput": {
            "id": [
                1
            ],
            "provider_id": [
                1
            ],
            "data": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Cart": {
            "id": [
                1
            ],
            "billing_address_id": [
                1
            ],
            "billing_address": [
                0
            ],
            "completed_at": [
                2
            ],
            "context": [
                2
            ],
            "customer_id": [
                1
            ],
            "customer": [
                41
            ],
            "discount_total": [
                22
            ],
            "discounts": [
                59
            ],
            "email": [
                2
            ],
            "gift_card_tax_total": [
                22
            ],
            "gift_card_total": [
                22
            ],
            "gift_cards": [
                66
            ],
            "idempotency_key": [
                2
            ],
            "items": [
                71
            ],
            "item_tax_total": [
                22
            ],
            "metadata": [
                2
            ],
            "payment_authorized_at": [
                2
            ],
            "payment_id": [
                1
            ],
            "payment": [
                92
            ],
            "payment_session": [
                91
            ],
            "payment_sessions": [
                91
            ],
            "region_id": [
                1
            ],
            "region": [
                109
            ],
            "refundable_amount": [
                22
            ],
            "refunded_total": [
                22
            ],
            "sales_channel": [
                121
            ],
            "sales_channel_id": [
                1
            ],
            "shipping_addess_id": [
                1
            ],
            "shipping_address": [
                0
            ],
            "shipping_methods": [
                123
            ],
            "shipping_tax_total": [
                22
            ],
            "shipping_total": [
                22
            ],
            "subtotal": [
                22
            ],
            "tax_total": [
                22
            ],
            "total": [
                22
            ],
            "type": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "Float": {},
        "CompleteCartResponse": {
            "type": [
                4
            ],
            "data": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "addLineItem": [
                21,
                {
                    "input": [
                        5
                    ]
                }
            ],
            "addShippingMethod": [
                21,
                {
                    "input": [
                        8
                    ]
                }
            ],
            "calculateCartTaxes": [
                21,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "completeCart": [
                23,
                {
                    "input": [
                        9
                    ]
                }
            ],
            "createCart": [
                21,
                {
                    "input": [
                        10
                    ]
                }
            ],
            "createPaymentSessions": [
                21,
                {
                    "input": [
                        12
                    ]
                }
            ],
            "deleteLineItem": [
                21,
                {
                    "input": [
                        13
                    ]
                }
            ],
            "deletePaymentSession": [
                21,
                {
                    "input": [
                        14
                    ]
                }
            ],
            "refreshPaymentSession": [
                21,
                {
                    "input": [
                        15
                    ]
                }
            ],
            "removeDiscount": [
                21,
                {
                    "input": [
                        16
                    ]
                }
            ],
            "selectPaymentSession": [
                21,
                {
                    "input": [
                        17
                    ]
                }
            ],
            "updateCart": [
                21,
                {
                    "input": [
                        18
                    ]
                }
            ],
            "updateLineItem": [
                21,
                {
                    "input": [
                        19
                    ]
                }
            ],
            "updatePaymentSession": [
                21,
                {
                    "input": [
                        20
                    ]
                }
            ],
            "createCustomer": [
                41,
                {
                    "input": [
                        45
                    ]
                }
            ],
            "addShippingAddress": [
                41,
                {
                    "input": [
                        44
                    ]
                }
            ],
            "deleteShippingAddress": [
                41,
                {
                    "input": [
                        47
                    ]
                }
            ],
            "resetPassword": [
                41,
                {
                    "input": [
                        48
                    ]
                }
            ],
            "requestPasswordReset": [
                37,
                {
                    "input": [
                        49
                    ]
                }
            ],
            "updateCustomer": [
                41,
                {
                    "input": [
                        46
                    ]
                }
            ],
            "updateShippingAddress": [
                41,
                {
                    "input": [
                        51
                    ]
                }
            ],
            "completeOrderEdit": [
                78,
                {
                    "input": [
                        76
                    ]
                }
            ],
            "declineOrderEdit": [
                78,
                {
                    "input": [
                        77
                    ]
                }
            ],
            "addCountry": [
                109,
                {
                    "input": [
                        110
                    ]
                }
            ],
            "createReturnReason": [
                112,
                {
                    "input": [
                        113
                    ]
                }
            ],
            "deleteReturnReason": [
                36,
                {
                    "input": [
                        115
                    ]
                }
            ],
            "updateReturnReason": [
                112,
                {
                    "input": [
                        114
                    ]
                }
            ],
            "createReturn": [
                120,
                {
                    "input": [
                        117
                    ]
                }
            ],
            "addCurrencyCode": [
                130,
                {
                    "input": [
                        131
                    ]
                }
            ],
            "deleteCurrencyCode": [
                130,
                {
                    "input": [
                        132
                    ]
                }
            ],
            "updateStore": [
                130,
                {
                    "input": [
                        133
                    ]
                }
            ],
            "createSwap": [
                140,
                {
                    "input": [
                        137
                    ]
                }
            ],
            "createUser": [
                144,
                {
                    "input": [
                        145
                    ]
                }
            ],
            "deleteUser": [
                36,
                {
                    "input": [
                        146
                    ]
                }
            ],
            "adminResetPassword": [
                144,
                {
                    "input": [
                        48
                    ]
                }
            ],
            "adminResetPasswordToken": [
                37,
                {
                    "input": [
                        148
                    ]
                }
            ],
            "updateUser": [
                144,
                {
                    "input": [
                        147
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "getCart": [
                21,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "listCurrencies": [
                39,
                {
                    "code": [
                        2
                    ],
                    "includes_tax": [
                        26
                    ],
                    "order": [
                        2
                    ],
                    "offset": [
                        6
                    ],
                    "limit": [
                        6
                    ]
                }
            ],
            "getCurrentCustomer": [
                41
            ],
            "getPaymentMethods": [
                43
            ],
            "listOrders": [
                52,
                {
                    "cart_id": [
                        1
                    ],
                    "canceled_at": [
                        35
                    ],
                    "created_at": [
                        35
                    ],
                    "currency_code": [
                        2
                    ],
                    "display_id": [
                        1
                    ],
                    "email": [
                        2
                    ],
                    "expand": [
                        2
                    ],
                    "fields": [
                        2
                    ],
                    "fulfillment_status": [
                        2,
                        "[String!]"
                    ],
                    "limit": [
                        6
                    ],
                    "id": [
                        1
                    ],
                    "offset": [
                        6
                    ],
                    "payment_status": [
                        2,
                        "[String!]"
                    ],
                    "q": [
                        2
                    ],
                    "region_id": [
                        1
                    ],
                    "status": [
                        2,
                        "[String!]"
                    ],
                    "tax_rate": [
                        2
                    ],
                    "updated_at": [
                        35
                    ]
                }
            ],
            "getGitCardByCode": [
                66,
                {
                    "code": [
                        2,
                        "String!"
                    ]
                }
            ],
            "doesEmailExist": [
                42,
                {
                    "email": [
                        2,
                        "String!"
                    ]
                }
            ],
            "getOrderEdit": [
                78,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getOrder": [
                85,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getOrderByCartId": [
                85,
                {
                    "cart_id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "lookupOrder": [
                85,
                {
                    "display_id": [
                        6,
                        "Int!"
                    ],
                    "email": [
                        2,
                        "String!"
                    ],
                    "shipping_address": [
                        84
                    ]
                }
            ],
            "getCollection": [
                96,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "listCollections": [
                97,
                {
                    "offset": [
                        6
                    ],
                    "limit": [
                        6
                    ],
                    "created_at": [
                        35
                    ],
                    "updated_at": [
                        35
                    ]
                }
            ],
            "getProductVariant": [
                102,
                {
                    "id": [
                        1,
                        "ID!"
                    ],
                    "cart_id": [
                        1
                    ],
                    "currency_code": [
                        2
                    ],
                    "region_id": [
                        1
                    ]
                }
            ],
            "listProductVariants": [
                2,
                {
                    "expand": [
                        2
                    ],
                    "ids": [
                        2
                    ],
                    "limit": [
                        6
                    ],
                    "offset": [
                        6
                    ],
                    "title": [
                        2
                    ],
                    "inventory_quantity": [
                        2
                    ]
                }
            ],
            "getProduct": [
                105,
                {
                    "id": [
                        1,
                        "ID!"
                    ],
                    "cart_id": [
                        1
                    ],
                    "region_id": [
                        1
                    ],
                    "currency_code": [
                        2
                    ]
                }
            ],
            "listProducts": [
                106,
                {
                    "collection_id": [
                        2,
                        "[String]"
                    ],
                    "created_at": [
                        35
                    ],
                    "description": [
                        2
                    ],
                    "handle": [
                        2
                    ],
                    "id": [
                        2,
                        "[String]"
                    ],
                    "is_giftcard": [
                        26
                    ],
                    "q": [
                        2
                    ],
                    "tags": [
                        2,
                        "[String]"
                    ],
                    "title": [
                        2
                    ],
                    "type": [
                        2
                    ],
                    "updated_at": [
                        35
                    ]
                }
            ],
            "searchProducts": [
                107,
                {
                    "limit": [
                        6
                    ],
                    "offset": [
                        6
                    ],
                    "q": [
                        2,
                        "String!"
                    ]
                }
            ],
            "getRegion": [
                109,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "listRegions": [
                109,
                {
                    "offset": [
                        6
                    ],
                    "limit": [
                        6
                    ],
                    "created_at": [
                        35
                    ],
                    "updated_at": [
                        35
                    ]
                }
            ],
            "getReturnReason": [
                112,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "listReturnReasons": [
                112
            ],
            "listShippingOptions": [
                127,
                {
                    "is_return": [
                        26
                    ],
                    "product_ids": [
                        2,
                        "[String]"
                    ],
                    "region_id": [
                        2
                    ]
                }
            ],
            "listShippingOptionsForCart": [
                127,
                {
                    "cart_id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getStore": [
                130
            ],
            "listPaymentProviders": [
                89
            ],
            "listTaxProviders": [
                141
            ],
            "getByCartId": [
                140,
                {
                    "input": [
                        138
                    ]
                }
            ],
            "getUser": [
                144,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "listUsers": [
                144
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {},
        "ClaimImage": {
            "id": [
                1
            ],
            "claim_item_id": [
                1
            ],
            "claim_item": [
                29
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "metadata": [
                2
            ],
            "updated_at": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ClaimReason": {},
        "ClaimItem": {
            "id": [
                1
            ],
            "claim_order_id": [
                1
            ],
            "claim_order": [
                33
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "images": [
                27
            ],
            "item_id": [
                1
            ],
            "item": [
                71
            ],
            "metadata": [
                2
            ],
            "note": [
                2
            ],
            "quantity": [
                6
            ],
            "reason": [
                28
            ],
            "tags": [
                34
            ],
            "updated_at": [
                2
            ],
            "variant_id": [
                1
            ],
            "variant": [
                102
            ],
            "__typename": [
                2
            ]
        },
        "ClaimFulfillmentStatus": {},
        "ClaimPaymentStatus": {},
        "ClaimType": {},
        "ClaimOrder": {
            "id": [
                1
            ],
            "additional_items": [
                71
            ],
            "canceled_at": [
                2
            ],
            "claim_items": [
                29
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "fulfillments": [
                64
            ],
            "fulfillment_status": [
                30
            ],
            "idempotency_key": [
                2
            ],
            "metadata": [
                2
            ],
            "no_notification": [
                26
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "payment_status": [
                31
            ],
            "refund_amount": [
                22
            ],
            "return_order": [
                120
            ],
            "shipping_address_id": [
                1
            ],
            "shipping_address": [
                0
            ],
            "shipping_methods": [
                123
            ],
            "type": [
                32
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ClaimTag": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "metadata": [
                2
            ],
            "updated_at": [
                2
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DateComparison": {
            "lt": [
                2
            ],
            "gt": [
                2
            ],
            "lte": [
                2
            ],
            "gte": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DeletionResponse": {
            "id": [
                1
            ],
            "deleted": [
                26
            ],
            "object": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "NoContentResponse": {
            "success": [
                26
            ],
            "__typename": [
                2
            ]
        },
        "Country": {
            "id": [
                1
            ],
            "display_name": [
                2
            ],
            "iso_2": [
                2
            ],
            "iso_3": [
                2
            ],
            "name": [
                2
            ],
            "num_code": [
                2
            ],
            "region_id": [
                1
            ],
            "region": [
                109
            ],
            "__typename": [
                2
            ]
        },
        "Currency": {
            "code": [
                2
            ],
            "includes_tax": [
                26
            ],
            "name": [
                2
            ],
            "symbol": [
                2
            ],
            "symbol_native": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CustomerGroup": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "customers": [
                41
            ],
            "metadata": [
                2
            ],
            "name": [
                2
            ],
            "price_lists": [
                95
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Customer": {
            "id": [
                1
            ],
            "billing_address_id": [
                1
            ],
            "billing_address": [
                0
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "email": [
                2
            ],
            "first_name": [
                2
            ],
            "groups": [
                40
            ],
            "has_account": [
                26
            ],
            "last_name": [
                2
            ],
            "metadata": [
                2
            ],
            "orders": [
                85
            ],
            "phone": [
                2
            ],
            "shipping_addresses": [
                0
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Exists": {
            "exists": [
                26
            ],
            "__typename": [
                2
            ]
        },
        "PaymentMethodsResponse": {
            "provider_id": [
                1
            ],
            "data": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "AddShippingAddressInput": {
            "address_1": [
                2
            ],
            "address_2": [
                2
            ],
            "city": [
                2
            ],
            "company": [
                2
            ],
            "country_code": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "metadata": [
                2
            ],
            "phone": [
                2
            ],
            "postal_code": [
                2
            ],
            "province": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CreateCustomerInput": {
            "email": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "password": [
                2
            ],
            "phone": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "UpdateCustomerInput": {
            "billing_address": [
                50
            ],
            "email": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "password": [
                2
            ],
            "phone": [
                2
            ],
            "metadata": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DeleteShippingAddressInput": {
            "id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "ResetPasswordInput": {
            "email": [
                2
            ],
            "password": [
                2
            ],
            "token": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ResetPasswordTokenInput": {
            "email": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "UpdateCustomerBillingAddressInput": {
            "address_1": [
                2
            ],
            "address_2": [
                2
            ],
            "city": [
                2
            ],
            "company": [
                2
            ],
            "country_code": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "metadata": [
                2
            ],
            "phone": [
                2
            ],
            "postal_code": [
                2
            ],
            "province": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "UpdateShippingAddressInput": {
            "id": [
                1
            ],
            "address_1": [
                2
            ],
            "address_2": [
                2
            ],
            "city": [
                2
            ],
            "company": [
                2
            ],
            "country_code": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "metadata": [
                2
            ],
            "phone": [
                2
            ],
            "postal_code": [
                2
            ],
            "province": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ListOrdersResponse": {
            "count": [
                6
            ],
            "limit": [
                6
            ],
            "offset": [
                6
            ],
            "orders": [
                85
            ],
            "__typename": [
                2
            ]
        },
        "DiscountConditionOperator": {},
        "DiscountConditionType": {},
        "DiscountCondition": {
            "id": [
                1
            ],
            "customer_groups": [
                40
            ],
            "discount_rule": [
                58
            ],
            "discount_rule_id": [
                1
            ],
            "metadata": [
                2
            ],
            "operator": [
                53
            ],
            "products": [
                105
            ],
            "product_collections": [
                96
            ],
            "product_tags": [
                100
            ],
            "product_types": [
                101
            ],
            "type": [
                54
            ],
            "__typename": [
                2
            ]
        },
        "AllocationType": {},
        "DiscountRuleType": {},
        "DiscountRule": {
            "id": [
                1
            ],
            "allocation": [
                56
            ],
            "conditions": [
                55
            ],
            "description": [
                2
            ],
            "metadata": [
                2
            ],
            "type": [
                57
            ],
            "value": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "Discount": {
            "id": [
                1
            ],
            "code": [
                2
            ],
            "ends_at": [
                2
            ],
            "is_disabled": [
                26
            ],
            "is_dynamic": [
                26
            ],
            "metadata": [
                2
            ],
            "parent_discount": [
                59
            ],
            "parent_discount_id": [
                1
            ],
            "regions": [
                109
            ],
            "rule": [
                58
            ],
            "rule_id": [
                1
            ],
            "starts_at": [
                2
            ],
            "usage_count": [
                6
            ],
            "usage_limit": [
                6
            ],
            "valid_duration": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DraftOrderStatus": {},
        "DraftOrder": {
            "id": [
                1
            ],
            "canceled_at": [
                2
            ],
            "cart_id": [
                1
            ],
            "cart": [
                21
            ],
            "completed_at": [
                2
            ],
            "display_id": [
                1
            ],
            "idempotency_key": [
                2
            ],
            "metadata": [
                2
            ],
            "no_notification_order": [
                26
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "status": [
                60
            ],
            "__typename": [
                2
            ]
        },
        "FulfillmentItem": {
            "fulfillment_id": [
                1
            ],
            "fulfillment": [
                64
            ],
            "item_id": [
                1
            ],
            "item": [
                71
            ],
            "quantity": [
                6
            ],
            "__typename": [
                2
            ]
        },
        "FulfillmentProvider": {
            "id": [
                1
            ],
            "is_installed": [
                26
            ],
            "__typename": [
                2
            ]
        },
        "Fulfillment": {
            "id": [
                1
            ],
            "canceled_at": [
                2
            ],
            "claim_order_id": [
                1
            ],
            "claim_order": [
                33
            ],
            "data": [
                2
            ],
            "idempotency_key": [
                2
            ],
            "items": [
                62
            ],
            "metadata": [
                2
            ],
            "no_notification": [
                26
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "provider_id": [
                1
            ],
            "provider": [
                63
            ],
            "shipped_at": [
                2
            ],
            "swap_id": [
                1
            ],
            "swap": [
                140
            ],
            "tracking_links": [
                142
            ],
            "tracking_numbers": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "GiftCardTransaction": {
            "id": [
                1
            ],
            "amount": [
                22
            ],
            "created_at": [
                2
            ],
            "gift_card_id": [
                1
            ],
            "gift_card": [
                66
            ],
            "is_taxable": [
                26
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "tax_rate": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "GiftCard": {
            "id": [
                1
            ],
            "balance": [
                6
            ],
            "code": [
                2
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "ends_at": [
                2
            ],
            "is_disabled": [
                26
            ],
            "metadata": [
                2
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "value": [
                6
            ],
            "region_id": [
                1
            ],
            "region": [
                109
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "IdempotencyKey": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "idempotency_key": [
                2
            ],
            "locked_at": [
                2
            ],
            "recovery_point": [
                2
            ],
            "response_body": [
                2
            ],
            "response_code": [
                6
            ],
            "request_method": [
                2
            ],
            "request_params": [
                2
            ],
            "request_path": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Image": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "metadata": [
                2
            ],
            "updated_at": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "LineItemAdjustment": {
            "id": [
                1
            ],
            "amount": [
                22
            ],
            "description": [
                2
            ],
            "discount_id": [
                1
            ],
            "discount": [
                59
            ],
            "item_id": [
                1
            ],
            "item": [
                71
            ],
            "metadata": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "LineItemTaxLine": {
            "id": [
                1
            ],
            "code": [
                2
            ],
            "item_id": [
                1
            ],
            "item": [
                71
            ],
            "metadata": [
                2
            ],
            "name": [
                2
            ],
            "rate": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "LineItem": {
            "id": [
                1
            ],
            "adjustments": [
                69
            ],
            "allow_discounts": [
                26
            ],
            "cart_id": [
                1
            ],
            "cart": [
                21
            ],
            "claim_order_id": [
                1
            ],
            "claim_order": [
                33
            ],
            "description": [
                2
            ],
            "discount_total": [
                22
            ],
            "fulfilled_quantity": [
                6
            ],
            "gift_card_total": [
                22
            ],
            "has_shipping": [
                26
            ],
            "includes_tax": [
                26
            ],
            "is_giftcard": [
                26
            ],
            "is_return": [
                26
            ],
            "metadata": [
                2
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "order_edit_id": [
                1
            ],
            "order_edit": [
                78
            ],
            "original_item_id": [
                1
            ],
            "original_tax_total": [
                22
            ],
            "original_total": [
                22
            ],
            "quantity": [
                6
            ],
            "refundable": [
                26
            ],
            "returned_quantity": [
                6
            ],
            "shipped_quantity": [
                6
            ],
            "should_merge": [
                26
            ],
            "subtotal": [
                22
            ],
            "swap_id": [
                1
            ],
            "swap": [
                140
            ],
            "tax_lines": [
                70
            ],
            "tax_total": [
                22
            ],
            "title": [
                2
            ],
            "thumbnail": [
                2
            ],
            "total": [
                22
            ],
            "unit_price": [
                22
            ],
            "variant_id": [
                1
            ],
            "variant": [
                102
            ],
            "__typename": [
                2
            ]
        },
        "MoneyAmount": {
            "id": [
                1
            ],
            "amount": [
                22
            ],
            "currency": [
                39
            ],
            "currency_code": [
                2
            ],
            "min_quantity": [
                6
            ],
            "max_quantity": [
                6
            ],
            "price_list": [
                95
            ],
            "price_list_id": [
                1
            ],
            "region": [
                109
            ],
            "region_id": [
                1
            ],
            "variant": [
                102
            ],
            "variant_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "NotificationProvider": {
            "id": [
                1
            ],
            "is_installed": [
                26
            ],
            "__typename": [
                2
            ]
        },
        "Oauth": {
            "id": [
                1
            ],
            "application_name": [
                2
            ],
            "data": [
                2
            ],
            "display_name": [
                2
            ],
            "install_url": [
                2
            ],
            "uninstall_url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "OrderEditStatus": {},
        "CompleteOrderEditInput": {
            "id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "DeclineOrderEditInput": {
            "id": [
                1
            ],
            "declined_reason": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "OrderEdit": {
            "id": [
                1
            ],
            "canceled_at": [
                2
            ],
            "canceled_by": [
                2
            ],
            "changes": [
                80
            ],
            "confirmed_at": [
                2
            ],
            "confirmed_by": [
                2
            ],
            "created_by": [
                2
            ],
            "declined_at": [
                2
            ],
            "declined_by": [
                2
            ],
            "declined_reason": [
                2
            ],
            "difference_due": [
                22
            ],
            "discount_total": [
                22
            ],
            "gift_card_tax_total": [
                22
            ],
            "gift_card_total": [
                22
            ],
            "internal_note": [
                2
            ],
            "items": [
                71
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "payment_collection": [
                88
            ],
            "payment_collection_id": [
                1
            ],
            "requested_at": [
                2
            ],
            "requested_by": [
                2
            ],
            "shipping_total": [
                22
            ],
            "status": [
                75
            ],
            "subtotal": [
                22
            ],
            "tax_total": [
                22
            ],
            "total": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "OrderEditItemChangeType": {},
        "OrderItemChange": {
            "id": [
                1
            ],
            "line_item_id": [
                1
            ],
            "line_item": [
                71
            ],
            "order_edit_id": [
                1
            ],
            "order_edit": [
                78
            ],
            "original_line_item_id": [
                1
            ],
            "original_line_item": [
                71
            ],
            "type": [
                79
            ],
            "__typename": [
                2
            ]
        },
        "FulfillmentStatus": {},
        "OrderStatus": {},
        "PaymentStatus": {},
        "ShippingAddressQuery": {
            "postal_code": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Order": {
            "id": [
                1
            ],
            "billing_address_id": [
                1
            ],
            "billing_address": [
                0
            ],
            "canceled_at": [
                2
            ],
            "cart_id": [
                1
            ],
            "cart": [
                21
            ],
            "claims": [
                33
            ],
            "currency_code": [
                2
            ],
            "currency": [
                39
            ],
            "customer_id": [
                1
            ],
            "customer": [
                41
            ],
            "discounts": [
                59
            ],
            "discount_total": [
                22
            ],
            "display_id": [
                1
            ],
            "draft_order_id": [
                1
            ],
            "draft_order": [
                61
            ],
            "edits": [
                78
            ],
            "email": [
                2
            ],
            "external_id": [
                2
            ],
            "fulfillments": [
                64
            ],
            "fulfillment_status": [
                81
            ],
            "gift_cards": [
                66
            ],
            "gift_card_tax_total": [
                22
            ],
            "gift_card_total": [
                22
            ],
            "gift_card_transactions": [
                65
            ],
            "idempotency_key": [
                2
            ],
            "items": [
                71
            ],
            "metadata": [
                2
            ],
            "no_notification": [
                26
            ],
            "paid_total": [
                22
            ],
            "payments": [
                92
            ],
            "payment_status": [
                83
            ],
            "region_id": [
                1
            ],
            "region": [
                109
            ],
            "refundable_amount": [
                22
            ],
            "refunded_total": [
                22
            ],
            "refunds": [
                108
            ],
            "returns": [
                120
            ],
            "sales_channel_id": [
                1
            ],
            "sales_channel": [
                121
            ],
            "shipping_address_id": [
                1
            ],
            "shipping_address": [
                0
            ],
            "shipping_methods": [
                123
            ],
            "shipping_total": [
                22
            ],
            "status": [
                82
            ],
            "subtotal": [
                22
            ],
            "swaps": [
                140
            ],
            "tax_rate": [
                22
            ],
            "tax_total": [
                22
            ],
            "total": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "PaymentCollectionStatus": {},
        "PaymentCollectionType": {},
        "PaymentCollection": {
            "id": [
                1
            ],
            "amount": [
                22
            ],
            "authorized_amount": [
                22
            ],
            "captured_amount": [
                22
            ],
            "created_by": [
                2
            ],
            "currency_code": [
                2
            ],
            "currency": [
                39
            ],
            "description": [
                2
            ],
            "metadata": [
                2
            ],
            "payments": [
                92
            ],
            "payment_sessions": [
                91
            ],
            "refunded_amount": [
                22
            ],
            "region_id": [
                1
            ],
            "region": [
                109
            ],
            "status": [
                86
            ],
            "type": [
                87
            ],
            "__typename": [
                2
            ]
        },
        "PaymentProvider": {
            "id": [
                1
            ],
            "is_installed": [
                26
            ],
            "__typename": [
                2
            ]
        },
        "PaymentSessionStatus": {},
        "PaymentSession": {
            "id": [
                1
            ],
            "amount": [
                22
            ],
            "cart_id": [
                1
            ],
            "cart": [
                21
            ],
            "data": [
                2
            ],
            "idempotency_key": [
                2
            ],
            "is_selected": [
                26
            ],
            "payment_authorized_at": [
                2
            ],
            "provider_id": [
                1
            ],
            "status": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Payment": {
            "id": [
                1
            ],
            "amount": [
                22
            ],
            "amount_refunded": [
                22
            ],
            "canceled_at": [
                2
            ],
            "captured_at": [
                2
            ],
            "cart_id": [
                1
            ],
            "cart": [
                21
            ],
            "currency_code": [
                2
            ],
            "currency": [
                39
            ],
            "data": [
                2
            ],
            "idempotency_key": [
                2
            ],
            "metadata": [
                2
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "provider_id": [
                1
            ],
            "swap_id": [
                1
            ],
            "swap": [
                140
            ],
            "__typename": [
                2
            ]
        },
        "PriceListStatus": {},
        "PriceListType": {},
        "PriceList": {
            "id": [
                1
            ],
            "customer_groups": [
                40
            ],
            "description": [
                2
            ],
            "ends_at": [
                2
            ],
            "includes_tax": [
                26
            ],
            "name": [
                2
            ],
            "prices": [
                72
            ],
            "starts_at": [
                2
            ],
            "status": [
                93
            ],
            "type": [
                94
            ],
            "__typename": [
                2
            ]
        },
        "ProductCollection": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "handle": [
                2
            ],
            "metadata": [
                2
            ],
            "products": [
                105
            ],
            "title": [
                2
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ListCollection": {
            "collections": [
                96
            ],
            "count": [
                6
            ],
            "limit": [
                6
            ],
            "offset": [
                6
            ],
            "__typename": [
                2
            ]
        },
        "ProductOptionValue": {
            "id": [
                1
            ],
            "metadata": [
                2
            ],
            "option": [
                99
            ],
            "option_id": [
                1
            ],
            "value": [
                2
            ],
            "variant": [
                102
            ],
            "variant_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "ProductOption": {
            "id": [
                1
            ],
            "metadata": [
                2
            ],
            "title": [
                2
            ],
            "product": [
                105
            ],
            "product_id": [
                1
            ],
            "values": [
                98
            ],
            "__typename": [
                2
            ]
        },
        "ProductTag": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "metadata": [
                2
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ProductType": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "metadata": [
                2
            ],
            "updated_at": [
                2
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ProductVariant": {
            "id": [
                1
            ],
            "allow_backorder": [
                26
            ],
            "barcode": [
                2
            ],
            "calculated_price": [
                22
            ],
            "calculated_price_incl_tax": [
                22
            ],
            "calculated_tax": [
                22
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "ean": [
                2
            ],
            "height": [
                22
            ],
            "hs_code": [
                2
            ],
            "inventory_quantity": [
                6
            ],
            "length": [
                22
            ],
            "manage_inventory": [
                26
            ],
            "material": [
                2
            ],
            "metadata": [
                2
            ],
            "mid_code": [
                2
            ],
            "title": [
                2
            ],
            "options": [
                98
            ],
            "origin_country": [
                2
            ],
            "original_price": [
                22
            ],
            "original_price_incl_tax": [
                22
            ],
            "original_tax": [
                22
            ],
            "prices": [
                72
            ],
            "product": [
                105
            ],
            "product_id": [
                1
            ],
            "sku": [
                2
            ],
            "upc": [
                2
            ],
            "updated_at": [
                2
            ],
            "variant_rank": [
                6
            ],
            "width": [
                22
            ],
            "weight": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "TaxRate": {
            "code": [
                2
            ],
            "name": [
                2
            ],
            "rate": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "ProductStatus": {},
        "Product": {
            "id": [
                1
            ],
            "collection": [
                96
            ],
            "collection_id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "description": [
                2
            ],
            "discountable": [
                26
            ],
            "external_id": [
                2
            ],
            "handle": [
                2
            ],
            "height": [
                22
            ],
            "hs_code": [
                2
            ],
            "images": [
                68
            ],
            "is_giftcard": [
                26
            ],
            "length": [
                22
            ],
            "material": [
                2
            ],
            "metadata": [
                2
            ],
            "mid_code": [
                2
            ],
            "options": [
                99
            ],
            "origin_country": [
                2
            ],
            "profile": [
                129
            ],
            "profile_id": [
                1
            ],
            "sales_channels": [
                121
            ],
            "status": [
                104
            ],
            "subtitle": [
                2
            ],
            "tags": [
                100
            ],
            "thumbnail": [
                2
            ],
            "title": [
                2
            ],
            "type": [
                101
            ],
            "type_id": [
                1
            ],
            "updated_at": [
                2
            ],
            "variants": [
                102
            ],
            "weight": [
                22
            ],
            "width": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "ListProductsResponse": {
            "limit": [
                6
            ],
            "offset": [
                6
            ],
            "products": [
                105
            ],
            "__typename": [
                2
            ]
        },
        "SearchProductsResponse": {
            "hits": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Refund": {
            "id": [
                1
            ],
            "amount": [
                22
            ],
            "idempotency_key": [
                2
            ],
            "metadata": [
                2
            ],
            "note": [
                2
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "payment_id": [
                1
            ],
            "payment": [
                92
            ],
            "reason": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Region": {
            "id": [
                1
            ],
            "automatic_taxes": [
                26
            ],
            "countries": [
                38
            ],
            "created_at": [
                2
            ],
            "currency_code": [
                2
            ],
            "deleted_at": [
                2
            ],
            "fulfillment_providers": [
                63
            ],
            "gift_cards_taxable": [
                26
            ],
            "includes_tax": [
                26
            ],
            "metadata": [
                2
            ],
            "name": [
                2
            ],
            "payment_providers": [
                89
            ],
            "tax_code": [
                2
            ],
            "tax_provider_id": [
                1
            ],
            "tax_rate": [
                6
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "AddCountryInput": {
            "id": [
                1
            ],
            "country_code": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ReturnItem": {
            "is_requested": [
                26
            ],
            "item_id": [
                1
            ],
            "item": [
                71
            ],
            "metadata": [
                2
            ],
            "note": [
                2
            ],
            "quantity": [
                6
            ],
            "reason_id": [
                1
            ],
            "reason": [
                112
            ],
            "received_quantity": [
                6
            ],
            "requested_quantity": [
                6
            ],
            "return_id": [
                1
            ],
            "return_order": [
                120
            ],
            "__typename": [
                2
            ]
        },
        "ReturnReason": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "description": [
                2
            ],
            "label": [
                2
            ],
            "metadata": [
                2
            ],
            "parent_return_reason": [
                112
            ],
            "parent_return_reason_id": [
                1
            ],
            "return_reason_children": [
                112
            ],
            "updated_at": [
                2
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CreateReturnReasonInput": {
            "description": [
                2
            ],
            "label": [
                2
            ],
            "metadata": [
                2
            ],
            "parent_return_reason_id": [
                1
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "UpdateReturnReasonInput": {
            "id": [
                1
            ],
            "description": [
                2
            ],
            "label": [
                2
            ],
            "metadata": [
                2
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DeleteReturnReasonInput": {
            "id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "ReturnStatus": {},
        "CreateReturnInput": {
            "items": [
                118
            ],
            "order_id": [
                1
            ],
            "return_shipping": [
                119
            ],
            "__typename": [
                2
            ]
        },
        "CreateReturnItemsInput": {
            "item_id": [
                1
            ],
            "note": [
                2
            ],
            "reason_id": [
                1
            ],
            "quantity": [
                6
            ],
            "__typename": [
                2
            ]
        },
        "CreateReturnReturnShippingInput": {
            "option_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "Return": {
            "id": [
                1
            ],
            "claim_order_id": [
                1
            ],
            "claim_order": [
                33
            ],
            "idempotency_key": [
                2
            ],
            "metadata": [
                2
            ],
            "no_notification": [
                26
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "received_at": [
                2
            ],
            "refund_amount": [
                22
            ],
            "shipping_data": [
                2
            ],
            "shipping_method": [
                123
            ],
            "status": [
                116
            ],
            "swap_id": [
                1
            ],
            "swap": [
                140
            ],
            "items": [
                111
            ],
            "__typename": [
                2
            ]
        },
        "SalesChannel": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "description": [
                2
            ],
            "is_disabled": [
                26
            ],
            "name": [
                2
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ShippingMethodTaxLine": {
            "id": [
                1
            ],
            "code": [
                2
            ],
            "metadata": [
                2
            ],
            "name": [
                2
            ],
            "rate": [
                22
            ],
            "shipping_method_id": [
                1
            ],
            "shipping_method": [
                123
            ],
            "__typename": [
                2
            ]
        },
        "ShippingMethod": {
            "id": [
                1
            ],
            "cart_id": [
                1
            ],
            "cart": [
                21
            ],
            "claim_order_id": [
                1
            ],
            "claim_order": [
                33
            ],
            "data": [
                2
            ],
            "includes_tax": [
                26
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "price": [
                22
            ],
            "return_id": [
                1
            ],
            "return_order": [
                120
            ],
            "shipping_option_id": [
                1
            ],
            "shipping_option": [
                127
            ],
            "subtotal": [
                22
            ],
            "swap_id": [
                1
            ],
            "swap": [
                140
            ],
            "tax_lines": [
                122
            ],
            "tax_total": [
                22
            ],
            "total": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "RequirementType": {},
        "ShippingOptionRequirement": {
            "id": [
                1
            ],
            "amount": [
                22
            ],
            "deleted_at": [
                2
            ],
            "shipping_option_id": [
                1
            ],
            "shipping_option": [
                127
            ],
            "type": [
                124
            ],
            "__typename": [
                2
            ]
        },
        "ShippingOptionPriceType": {},
        "ShippingOption": {
            "id": [
                1
            ],
            "admin_only": [
                26
            ],
            "amount": [
                22
            ],
            "data": [
                2
            ],
            "includes_tax": [
                26
            ],
            "is_return": [
                26
            ],
            "metadata": [
                2
            ],
            "name": [
                2
            ],
            "price_type": [
                126
            ],
            "profile_id": [
                1
            ],
            "profile": [
                129
            ],
            "provider_id": [
                1
            ],
            "provider": [
                63
            ],
            "region_id": [
                1
            ],
            "region": [
                109
            ],
            "requirements": [
                125
            ],
            "__typename": [
                2
            ]
        },
        "ShippingProfileType": {},
        "ShippingProfile": {
            "id": [
                1
            ],
            "metadata": [
                2
            ],
            "name": [
                2
            ],
            "products": [
                105
            ],
            "shipping_options": [
                127
            ],
            "type": [
                128
            ],
            "__typename": [
                2
            ]
        },
        "Store": {
            "id": [
                1
            ],
            "created_at": [
                2
            ],
            "currencies": [
                39
            ],
            "default_currency": [
                39
            ],
            "default_currency_code": [
                2
            ],
            "default_sales_channel": [
                121
            ],
            "default_sales_channel_id": [
                2
            ],
            "invite_link_template": [
                2
            ],
            "metadata": [
                2
            ],
            "name": [
                2
            ],
            "payment_link_template": [
                2
            ],
            "swap_link_template": [
                2
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "AddCurrencyCodeInput": {
            "code": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DeleteCurrencyCodeInput": {
            "code": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "UpdateStoreInput": {
            "name": [
                2
            ],
            "swap_link_template": [
                2
            ],
            "payment_link_template": [
                2
            ],
            "invite_link_template": [
                2
            ],
            "default_currency_code": [
                2
            ],
            "currencies": [
                2
            ],
            "metadata": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "SwapFulfillmentStatus": {},
        "SwapPaymentStatus": {},
        "AdditionalItemsInput": {
            "quantity": [
                6
            ],
            "variant_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "CreateSwapInput": {
            "additional_items": [
                136
            ],
            "order_id": [
                1
            ],
            "return_items": [
                139
            ],
            "return_shipping_option": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "GetByCartIdInput": {
            "cart_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "ReturnItemsInput": {
            "item_id": [
                1
            ],
            "note": [
                2
            ],
            "quantity": [
                6
            ],
            "reason_id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "Swap": {
            "id": [
                1
            ],
            "additional_items": [
                71
            ],
            "allow_backorder": [
                26
            ],
            "canceled_at": [
                2
            ],
            "cart_id": [
                1
            ],
            "cart": [
                21
            ],
            "confirmed_at": [
                2
            ],
            "difference_due": [
                22
            ],
            "fulfillments": [
                64
            ],
            "fulfillment_status": [
                134
            ],
            "idempotency_key": [
                2
            ],
            "metadata": [
                2
            ],
            "no_notification": [
                26
            ],
            "order_id": [
                1
            ],
            "order": [
                85
            ],
            "payment": [
                92
            ],
            "payment_status": [
                135
            ],
            "return_order": [
                120
            ],
            "shipping_address_id": [
                1
            ],
            "shipping_address": [
                0
            ],
            "shipping_methods": [
                123
            ],
            "__typename": [
                2
            ]
        },
        "TaxProvider": {
            "id": [
                1
            ],
            "is_installed": [
                26
            ],
            "__typename": [
                2
            ]
        },
        "TrackingLink": {
            "id": [
                1
            ],
            "fulfillment_id": [
                1
            ],
            "idempotency_key": [
                2
            ],
            "metadata": [
                2
            ],
            "tracking_number": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "UserRole": {},
        "User": {
            "id": [
                1
            ],
            "api_token": [
                2
            ],
            "created_at": [
                2
            ],
            "deleted_at": [
                2
            ],
            "email": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "metadata": [
                2
            ],
            "role": [
                143
            ],
            "updated_at": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CreateUserInput": {
            "email": [
                2
            ],
            "password": [
                2
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "role": [
                143
            ],
            "__typename": [
                2
            ]
        },
        "DeleteUserInput": {
            "id": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "UpdateUserInput": {
            "id": [
                1
            ],
            "first_name": [
                2
            ],
            "last_name": [
                2
            ],
            "role": [
                143
            ],
            "api_token": [
                2
            ],
            "metadata": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "RequestPasswordResetInput": {
            "email": [
                2
            ],
            "__typename": [
                2
            ]
        }
    }
}