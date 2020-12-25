import React from 'react'
import Head from 'next/head'
import { StoreProvider } from '../store'

import '../styles/app.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
