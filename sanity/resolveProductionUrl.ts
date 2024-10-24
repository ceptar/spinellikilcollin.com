import {type DocumentActionProps, type DocumentActionDescription, type SanityDocument} from 'sanity'

export default function resolveProductionUrl(props: DocumentActionProps): string {
  const readToken =
    'skJYfxJ3jrRboMVwSHlHCRrAqz0CHyISPWNL28LFExJVMMWtRBcQcOBYdCWevD9Np6HLnfXwOIrwkK0ljT483rRBIpWZHRZyxQQ9iUZvEA1zm1NDJWxVObgtZU947K5cqM61cbCpfec0FCHfrqaTwyyy1sga4o5oaPz2orBSczcrEfKSm8Zd'
  const {type, draft, published} = props

  const slug =
    // @ts-ignore
    draft?.handle || draft?.slug?.current || published?.handle || published?.slug?.current

  switch (type) {
    case 'homepage':
      return `http://localhost:3333?preview=${readToken}`
      break
    case 'product':
      return `http://localhost:3333/products/${slug}?preview=${readToken}`
      break
    case 'collection':
      return `http://localhost:3333/collections/${slug}?preview=${readToken}`
      break
    case 'journalEntry':
      return `http://localhost:3333/journal/${slug}?preview=${readToken}`
      break
    case 'about':
      return `http://localhost:3333/about?preview=${readToken}`
      break
    case 'page':
      // @ts-ignore
      return `http://localhost:3333/about/${slug}?preview=${readToken}`
      break
    case 'contact':
      return `http://localhost:3333/about/contact?preview=${readToken}`
      break
    case 'customize':
      return `http://localhost:3333/customize?preview=${readToken}`
      break
    case 'customerCare':
      return `http://localhost:3333/customer-care?preview=${readToken}`
    default:
      return `http://localhost:3333?preview=${readToken}`
  }
}
