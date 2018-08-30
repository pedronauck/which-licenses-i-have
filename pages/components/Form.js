import React from 'react'
import styled from 'react-emotion'
import Component from '@reach/component-component'
import Search from 'react-feather/dist/icons/search'

const InputWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding-left: 65px;
`

const Input = styled('input')`
  outline: 1px solid deeppink;
  outline: none;
  padding: 20px;
  border: none;
  background: white;
  min-width: 280px;
  font-size: 24px;
  font-weight: 300;
  color: #333;
`

const SearchIcon = styled(Search)`
  width: 35px;
  height: 35px;
  stroke: white;
  stroke-width: 2px;
`

const SearchButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  background: none;
  border: none;
`

const inputRef = React.createRef()

export const Form = ({ initialValue, onSubmit }) => (
  <Component
    initialState={{ text: initialValue }}
    didMount={() => inputRef.current.focus()}
    render={({ state, setState }) => (
      <form onSubmit={ev => onSubmit(ev, state.text)}>
        <InputWrapper>
          <Input
            innerRef={inputRef}
            value={state.text}
            placeholder="Your package name..."
            onChange={ev => setState({ text: ev.target.value })}
          />
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>
        </InputWrapper>
      </form>
    )}
  />
)
