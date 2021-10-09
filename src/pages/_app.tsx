import Head from 'next/head'
import type { AppProps } from 'next/app'
import { TrackerContextProvider } from 'hooks/useTracker'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Domain Tracker</title>
        <meta
          name="description"
          content="See information about any domain or IP address"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <TrackerContextProvider>
        <Component {...pageProps} />
      </TrackerContextProvider>
    </>
  )
}
export default MyApp
