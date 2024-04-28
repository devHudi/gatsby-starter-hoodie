import React from "react"
import styled from "styled-components"

const Wrapper = styled.h1`
  margin-bottom: 24px;
  font-size: ${props => props.size};
  font-weight: 700;
  line-height: 1.3;
  color: ${props => props.theme.colors.text};
  word-break: break-all;

  & > a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  & > a:hover {
    color: ${props => props.theme.colors.secondaryText};
  }
`

const Title = ({ size, children }) => {
  const sizes = {
    sm: "19.2px",
    md: "25.6px",
    bg: "32px",
  }

  return <Wrapper size={sizes[size]}> {children} </Wrapper>
}

export default Title
