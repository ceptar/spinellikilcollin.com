export const shopifyImageFragment = /* GraphQL */ `
  fragment ImageFragment on Image {
    id
    altText
    originalSrc
  }
`

export const sanityImageFragment = /* GraphQL */ `
  fragment SanityImageFragment on SanityImageAsset {
    _id
    _type
    _key
    label
    extension
    path
    url
    metadata {
      dimensions {
        height
        width
        aspectRatio
      }
    }
  }
`

export const backgroundImageFragment = /* GraphQL */ `
  fragment BackgroundImageFragment on BackgroundImage {
    asset {
      ...SanityImageFragment
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
  }
  ${sanityImageFragment}
`