import * as React from 'react'
import { Variant } from 'use-shopify'
import { Product } from '../../../types/generated'
import { NormalizeDiv } from '../styled'
import { Header2, Header4 } from 'Components/Text'

interface ProductDetailHeaderProps {
  product: Product
  currentVariant: Variant
}

export const ProductDetailHeader = ({
  product,
  currentVariant,
  mobile,
  align,
}: ProductDetailHeaderProps) => {
  return (
    <NormalizeDiv marginBottom="triple" mobile={'hidden'} align={align}>
      <Header2 weight="xlight" color="dark">
        {product.title}
      </Header2>
      <Header4 weight="strong" color="dark">
        ${currentVariant.price}
      </Header4>
    </NormalizeDiv>
  )
}
