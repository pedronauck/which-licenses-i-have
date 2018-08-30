import React from 'react'
import styled from 'react-emotion'
import Component from '@reach/component-component'
import Search from 'react-feather/dist/icons/search'

const InputWrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
`

const Input = styled('input')`
  outline: 1px solid deeppink;
  outline: none;
  padding: 20px 45px 20px 20px;
  border: none;
  background: white;
  max-width: 220px;
  font-size: 24px;
  font-weight: 300;
  color: #333;
`

const SearchIcon = styled(Search)`
  width: 30px;
  height: 30px;
  stroke: deeppink;
  stroke-width: 2px;
`

const SearchButton = styled('button')`
  position: absolute;
  top: 50%;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  background: none;
  border: none;
  transform: translateY(-50%);
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
            placeholder="Type package name..."
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
