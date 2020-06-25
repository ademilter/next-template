import React from 'react'
import { StoreProvider } from '../store'

import '../styles/app.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
