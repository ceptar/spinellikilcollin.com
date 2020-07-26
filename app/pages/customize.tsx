import * as React from 'react'
import gql from 'graphql-tag'
import { GetStaticProps } from 'next'
import { Maybe, Customize as CustomizeType } from '../src/types'
import { NotFound } from '../src/views/NotFound'
import { Customize as CustomizeView } from '../src/views/Customize'
import { request, seoFragment, heroFragment } from '../src/graphql'
import { requestShopData } from '../src/providers/ShopDataProvider/shopDataQuery'

const customizeQuery = gql`
  query CustomizeQuery {
    Customize(id: "customize") {
      _id
      _type
      title
      subtitle
      bodyRaw
      seo {
        ...SEOFragment
      }
      hero {
        ...HeroFragment
      }
    }
  }
  ${seoFragment}
  ${heroFragment}
`

interface CustomizeProps {
  customize?: CustomizeType
}

const Customize = ({ customize }: CustomizeProps) => {
  if (!customize) return <NotFound />
  return <CustomizeView customize={customize} />
}

interface CustomizeResponse {
  Customize?: Maybe<CustomizeType>
}

/**
 * Initial Props
 */

export const getStaticProps: GetStaticProps = async () => {
  const [response, shopData] = await Promise.all([
    request<CustomizeResponse>(customizeQuery),
    requestShopData(),
  ])

  const customize = response?.Customize || null
  return { props: { customize, shopData }, unstable_revalidate: 60 }
}

export default Customize
