import React from "react"
import styled from "styled-components"

import { author } from "../../../../blog-config"

const FooterWrapper = styled.footer`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      © {author}, Built with Gatsby and Hoodie theme.
    </FooterWrapper>
  )
}

export default Footer
