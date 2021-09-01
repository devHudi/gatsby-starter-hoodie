import styled from "styled-components"

export default styled.input.attrs({ type: "text" })`
  padding: 0.7rem 1.2rem;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50vh;
  background-color: transparent;
  font-size: 1.2rem;
  outline: none;
  box-sizing: border-box;
  color: ${props => props.theme.colors.text};
  transition: all 0.2s;

  &:focus {
    border: 1px solid ${props => props.theme.colors.activatedBorder};
  }
`
