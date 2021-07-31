import Head from 'next/head'
import type { AppProps } from 'next/app'
import { TrackerContextProvider } from 'hooks/useTracker'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Domain Tracker</title>
      </Head>
      <TrackerContextProvider>
        <Component {...pageProps} />
      </TrackerContextProvider>
    </>
  )
}
export default MyApp
