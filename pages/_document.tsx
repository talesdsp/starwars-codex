import Document, { DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"

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

  // render() {
  //   return (
  //     <Html>
  //       <Head>
  //         <meta charSet="UTF-8" />
  //         <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

  //         <meta name="theme-color" content="#ffe81f" />

  //         {/* <!--  SEO   --> */}
  //         <meta property="og:title" content="Star Wars Codex" />
  //         <meta
  //           name="description"
  //           content="Ever wanted to know all the characters and starships name? Exactly what you find here"
  //         />
  //         <meta
  //           property=" og:description"
  //           content="Ever wanted to know all the characters and starships name? Exactly what you find here"
  //         />
  //         <meta
  //           property=" og:url"
  //           content="https://tales-starwars.netlify.com"
  //         />
  //         <link rel="canonical" href="/" />
  //         <meta name="robots" content="nofollow" />

  //         {/* <!--  FAVICON --> */}
  //         <link rel="icon" href="/favicon.ico" />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="57x57"
  //           href="/apple-icon-57x57.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="60x60"
  //           href="/apple-icon-60x60.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="72x72"
  //           href="/apple-icon-72x72.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="76x76"
  //           href="/apple-icon-76x76.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="114x114"
  //           href="/apple-icon-114x114.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="120x120"
  //           href="/apple-icon-120x120.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="144x144"
  //           href="/apple-icon-144x144.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="152x152"
  //           href="/apple-icon-152x152.png"
  //         />
  //         <link
  //           rel="apple-touch-icon"
  //           sizes="180x180"
  //           href="/apple-icon-180x180.png"
  //         />
  //         <link
  //           rel="icon"
  //           type="image/png"
  //           sizes="192x192"
  //           href="/android-icon-192x192.png"
  //         />
  //         <link
  //           rel="icon"
  //           type="image/png"
  //           sizes="32x32"
  //           href="/favicon-32x32.png"
  //         />
  //         <link
  //           rel="icon"
  //           type="image/png"
  //           sizes="96x96"
  //           href="/favicon-96x96.png"
  //         />
  //         <link
  //           rel="icon"
  //           type="image/png"
  //           sizes="16x16"
  //           href="/favicon-16x16.png"
  //         />

  //         {/* <!--  PWA   --> */}
  //         <link rel="manifest" href="/manifest.json" />
  //         <meta name="msapplication-config" content="/browserconfig.xml" />
  //         <meta name="apple-mobile-web-app-capable" content="yes" />
  //         <meta
  //           name="apple-mobile-web-app-status-bar-style"
  //           content="#ffe81f"
  //         />
  //         <meta name="apple-mobile-web-app-title" content="Star Wars Codex" />

  //         {/* <script>0</script> */}
  //       </Head>

  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   )
  // }
}
