import { css } from "styled-components"

const InvertLinkMixin = css`
  padding: 0.1rem 0.3rem;
  color: ${props => props.theme.colors.text};

  &:hover {
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.hoveredLinkText};
  }
`

export default InvertLinkMixin
