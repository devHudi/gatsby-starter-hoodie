import { css } from "styled-components"

const InvertLinkMixin = css`
  padding: 0.1rem 0.3rem;
  color: #212529;

  &:hover {
    background-color: #212529;
    color: #f8f9fa;
  }
`

export default InvertLinkMixin
