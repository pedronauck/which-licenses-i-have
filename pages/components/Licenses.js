import * as R from 'ramda'
import React, { Fragment } from 'react'
import styled, { injectGlobal } from 'react-emotion'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Component from '@reach/component-component'
import { Dialog as BaseDialog } from '@reach/dialog'
import { withRouter } from 'next/router'
import X from 'react-feather/dist/icons/x'

import '@reach/dialog/styles.css'

injectGlobal`
  [data-reach-dialog-overlay] {
    z-index: 9999;
    background: hsla(0, 0%, 0%, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
  }
`

const MARGIN = '50px'

const Centering = styled('div')`
  margin: ${MARGIN} 0;
  text-align: center;
  font-size: 30px;
`

const Small = styled('div')`
  margin-top: 5px;
  font-size: 12px;
`

const Wrapper = styled('div')`
  margin: ${MARGIN} 0 80px 0;

  @media screen and (max-width: 460px) {
    min-width: calc(100% - 30px);
    margin-bottom: 40px;
  }
`

const ItemWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 100%;
  margin-top: -1px;
  border: 1px dashed white;

  @media screen and (max-width: 460px) {
    font-size: 16px;
  }
`

const Name = styled('div')`
  flex: 1;
  padding: 20px;

  a {
    color: white;
  }

  @media screen and (max-width: 460px) {
    padding: 10px;
  }
`

const Version = styled('span')`
  opacity: 0.5;
`

const LicenseList = styled('div')`
  border-left: 1px dashed white;
  color: deeppink;
  padding: 20px;

  a {
    outline: none;
    color: deeppink;
    text-decoration: none;
  }

  @media screen and (max-width: 460px) {
    padding: 10px;
  }
`

const CloseButton = styled('span')`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
  }
`

const Dialog = styled(BaseDialog)`
  position: relative;
  width: 50vw;
  max-width: 100vw;
  margin: 10vh auto;
  background: white;
  padding: 1rem 2rem 1rem 1.5rem;
  outline: none;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  color: black;

  @media screen and (min-width: 520px) and (max-width: 1200px) {
    width: 80vw;
  }

  @media screen and (max-width: 520px) {
    width: 100vw;
    margin: 0;
  }
`

const Text = styled('p')`
  white-space: pre-line;
`

const getLicensesName = R.pipe(
  R.path(['licenseSources', 'package', 'sources']),
  R.defaultTo([]),
  R.map(R.prop('license'))
)

const getLicensesText = R.pipe(
  R.path(['licenseSources', 'license', 'sources']),
  R.defaultTo([]),
  R.map(R.prop('text'))
)

const Item = withRouter(({ router, item }) => {
  const name = R.prop('name', item)
  const version = R.prop('version', item)
  const licensesNames = getLicensesName(item)
  const licensesTexts = getLicensesText(item)

  return (
    <ItemWrapper>
      <Name>
        <a
          href="#"
          onClick={ev => {
            router.push(`/${name}`)
            ev.preventDefault()
          }}
        >
          {name}
        </a>
        <Version>@{version}</Version>
      </Name>
      <Component initialState={{ showDialog: false }}>
        {({ state, setState }) => (
          <LicenseList>
            {licensesNames.map((license, i) => (
              <Fragment key={`${license}-${i}`}>
                <a
                  href="#"
                  onClick={ev => {
                    setState({ showDialog: true })
                    ev.preventDefault()
                  }}
                >
                  {license}
                </a>
                <Dialog isOpen={state.showDialog}>
                  <CloseButton
                    aria-hidden
                    onClick={() => setState({ showDialog: false })}
                  >
                    <X />
                  </CloseButton>
                  <Text
                    dangerouslySetInnerHTML={{ __html: licensesTexts[i] }}
                  />
                </Dialog>
              </Fragment>
            ))}
          </LicenseList>
        )}
      </Component>
    </ItemWrapper>
  )
})

export const Licenses = ({ isLoading, error, data, response }) => {
  if (isLoading) {
    return (
      <Centering>
        <ScaleLoader size={120} color="white" loading />
        <Small>This may take a while...</Small>
      </Centering>
    )
  }

  if (response && !response.data.length) {
    return <Centering>No results found</Centering>
  }

  return (
    data &&
    data.length > 0 && (
      <Wrapper>
        {data &&
          data.length > 0 &&
          data.map(item => <Item key={item.id} item={item} selected={''} />)}
      </Wrapper>
    )
  )
}
