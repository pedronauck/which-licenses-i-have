import React, { Fragment } from 'react'
import styled from 'react-emotion'
import AsyncFetcher from 'react-async-fetcher'

import { Form, state } from './components/Form'
import { Licenses } from './components/Licenses'

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
`

const Title = styled('h1')`
  margin: 0;
  font-size: 50px;
  font-weight: 300;
  letter-spacing: -0.03em;
`

const Subtitle = styled(Title.withComponent('h2'))`
  margin-bottom: 50px;
  font-size: 26px;
  font-weight: 300px;
  letter-spacing: -0.03em;
  color: deeppink;
`

export default () => {
  const handleSubmit = fetch => ev => {
    ev.preventDefault()
    fetch()
  }

  return (
    <Wrapper>
      <Title>Which licenses I have?</Title>
      <Subtitle>Learn about the licenses around your package</Subtitle>
      {state.get(s => (
        <AsyncFetcher
          autoFetch={false}
          url={`https://deps-service-bymhrnqeqs.now.sh/${s.text}`}
        >
          {({ fetch, ...props }) => (
            <Fragment>
              <Form onSubmit={handleSubmit(fetch)} />
              <Licenses {...props} />
            </Fragment>
          )}
        </AsyncFetcher>
      ))}
    </Wrapper>
  )
}
