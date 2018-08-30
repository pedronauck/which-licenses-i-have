import React from 'react'
import App, { Container } from 'next/app'
import { hydrate, injectGlobal } from 'react-emotion'

import { GithubLink } from './components/GithubLink'

if (typeof window !== 'undefined') hydrate(window.__NEXT_DATA__.ids)

injectGlobal`
  html, body {
    margin: 0;
    background: black;
    min-height: 100%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 22px;
    color: white;
  }
`

class Layout extends React.Component {
  render() {
    return this.props.children
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GithubLink />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
