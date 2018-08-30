import * as R from 'ramda'
import React, { Fragment } from 'react'
import styled, { injectGlobal } from 'react-emotion'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Component from '@reach/component-component'
import { X } from 'react-feather'
import { Dialog as BaseDialog } from '@reach/dialog'

import { state } from './Form'

injectGlobal`
  [data-reach-dialog-overlay] {
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

const Loading = styled('div')`
  margin-top: ${MARGIN};
  text-align: center;
  font-size: 30px;
`

const Small = styled('div')`
  margin-top: 5px;
  font-size: 12px;
`

const Wrapper = styled('div')`
  margin: ${MARGIN} 0;
`

const ItemWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 320px;
  margin-top: -1px;
  border: 1px dashed white;
`

const Name = styled('div')`
  flex: 1;
  padding: 20px;
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
  margin: 10vh auto;
  background: white;
  padding: 1rem 2rem 1rem 1.5rem;
  outline: none;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  color: black;
`

const Text = styled('p')`
  white-space: pre-line;
`

const getLicensesName = R.pipe(
  R.path(['licenseSources', 'package', 'sources']),
  R.defaultTo([]),
  R.map(R.prop('license')),
)

const getLicensesText = R.pipe(
  R.path(['licenseSources', 'license', 'sources']),
  R.defaultTo([]),
  R.map(R.prop('text')),
)

const Item = ({ selected, item }) => {
  const name = R.prop('name', item)
  const version = R.prop('version', item)
  const licensesNames = getLicensesName(item)
  const licensesTexts = getLicensesText(item)

  return (
    <ItemWrapper>
      <Name>
        {name}
        <Version>@{version}</Version>
      </Name>
      <Component initialState={{ showDialog: false }}>
        {({ state, setState }) => (
          <LicenseList>
            {licensesNames.map((license, i) => (
              <Fragment>
                <a href="#" onClick={() => setState({ showDialog: true })}>
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
}

export const Licenses = ({ isLoading, error, data }) => {
  if (isLoading) {
    return (
      <Loading>
        <ScaleLoader size={120} color="white" loading />
        <Small>This may take a while...</Small>
      </Loading>
    )
  }

  return (
    <Wrapper>
      {data &&
        data.length > 0 &&
        data.map(item => <Item item={item} selected={''} />)}
    </Wrapper>
  )
}
