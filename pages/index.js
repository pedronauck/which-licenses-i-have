import React, { Fragment } from 'react'
import styled from 'react-emotion'
import AsyncFetcher from 'react-async-fetcher'
import { withRouter } from 'next/router'
import Component from '@reach/component-component'

import { Form } from './components/Form'
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

export default withRouter(({ router: { query, push } }) => {
  const handleSubmit = pkg => ev => {
    ev.preventDefault()
    push(`/${pkg}`)
  }

  return (
    <Wrapper>
      <Title>Which licenses I have?</Title>
      <Subtitle>Learn about the licenses around your package</Subtitle>
      <AsyncFetcher
        autoFetch={false}
        url={`https://deps-service-bymhrnqeqs.now.sh/${query.name}`}
      >
        {({ fetch, ...props }) => (
          <Component
            didMount={() => {
              if (query.name && query.name.length > 0) fetch()
            }}
          >
            {() => (
              <Fragment>
                <Form
                  initialValue={query.name}
                  onSubmit={val => handleSubmit(val)}
                />
                <Licenses {...props} />
              </Fragment>
            )}
          </Component>
        )}
      </AsyncFetcher>
    </Wrapper>
  )
})
