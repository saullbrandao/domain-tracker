import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { TrackerContextProvider } from 'src/hooks/useTracker'

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
