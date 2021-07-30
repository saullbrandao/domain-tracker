import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="See key information and location of any domain you want to search"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
