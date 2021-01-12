import React from "react"
import styled from "styled-components"

const Wrapper = styled.h1`
  margin-bottom: 1.5rem;
  font-size: ${props => props.size};
  font-weight: 700;
  line-height: 1.3;
  color: ${props => props.theme.colors.text};

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
    sm: "1.2rem",
    md: "1.6rem",
    bg: "2.1rem",
  }

  return <Wrapper size={sizes[size]}> {children} </Wrapper>
}

export default Title
