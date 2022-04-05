import * as React from 'react'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    // const ENV = config.STOREFRONT_ENV
    //
    // const tagInfo =
    //   ENV === 'production'
    //     ? gtm.prod
    //     : ENV === 'staging'
    //     ? gtm.staging
    //     : gtm.dev

    return (
      <Html>
        <Head>
          <link
            id="GEPIStyles"
            rel="stylesheet"
            href="https://gepi.global-e.com/includes/css/10000945"
          />
          <link rel="stylesheet" href="/static/fonts/fonts.css" />
          <link rel="icon" href="/static/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
