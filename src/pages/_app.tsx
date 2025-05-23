import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Web3Provider } from '../contexts/Web3Context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </SessionProvider>
  )
}