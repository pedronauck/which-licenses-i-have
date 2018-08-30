import React from 'react'
import { Search } from 'react-feather'
import { create } from 'reworm'
import Component from '@reach/component-component'
import styled from 'react-emotion'

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

export const state = create({
  text: '',
})

export const Form = ({ onSubmit }) => (
  <Component
    didMount={() => inputRef.current.focus()}
    render={() =>
      state.get(s => (
        <form onSubmit={onSubmit}>
          <InputWrapper>
            <Input
              innerRef={inputRef}
              value={s.text}
              placeholder="Your package name..."
              onChange={ev => state.set({ text: ev.target.value })}
            />
            <SearchButton type="submit">
              <SearchIcon />
            </SearchButton>
          </InputWrapper>
        </form>
      ))
    }
  />
)
