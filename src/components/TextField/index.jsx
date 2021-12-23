import React from "react"
import styled from "styled-components"

import { FiSearch } from "react-icons/fi"

const Wrapper = styled.div`
  position: relative;
`

const Icon = styled.span`
  position: absolute;
  top: 12px;
  left: 18px;
  font-size: 20px;
  color: ${props => props.theme.colors.textFieldBorder};
  text-shadow: 0 0 5px ${props => props.theme.colors.textFieldBorder};
  transition: all 0.2s;
`

const Input = styled.input.attrs({ type: "text" })`
  padding: 14px 19.2px 12px 50px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.textFieldBorder};
  border-radius: 1vh;
  background-color: transparent;
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border: 1px solid ${props => props.theme.colors.textFieldActivatedBorder};
  }

  &:focus + ${Icon} {
    color: ${props => props.theme.colors.textFieldActivatedBorder};
  }
`

const TextField = ({ ...props }) => {
  return (
    <Wrapper>
      <Input {...props} />

      <Icon>
        <FiSearch />
      </Icon>
    </Wrapper>
  )
}

export default TextField
