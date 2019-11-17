import React from 'react'
import Head from 'next/head'

import Header from '../Header'
import './layout.scss'

export default ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Mercado Libre</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </React.Fragment>
  )
}