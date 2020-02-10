import * as React from 'react'
import gql from 'graphql-tag'
import fetch from 'isomorphic-unfetch'
import { useQuery } from '@apollo/react-hooks'
import { ContentBlock } from '../components/ContentBlock'
import { Homepage as HomepageType } from '../types'

interface HomepageResponse {
  Homepage: HomepageType
}

const homepageQuery = /*  GraphQL */ gql`
  query HomepageQuery {
    Homepage(id: "homepage") {
      _id
    }
  }
`

export const Homepage = () => {
  const { loading, error, data } = useQuery<HomepageResponse>(homepageQuery)
  if (error)
    return (
      <React.Fragment>
        <p>error!</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </React.Fragment>
    )

  if (loading || !data || !data.Homepage.content) return null

  const { content } = data.Homepage

  return (
    <React.Fragment>
      {content.map((content, index) =>
        content ? <ContentBlock key={content._key} content={content} /> : null,
      )}
    </React.Fragment>
  )
}

Homepage.getInitialProps = async () => {
  return {}
}

export default Homepage
