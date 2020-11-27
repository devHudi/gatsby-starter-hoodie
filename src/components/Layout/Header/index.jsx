import React from "react"
import styled from "styled-components"

import { title } from "../../../../blog-config"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  z-index: 999;
`

const Inner = styled.div`
  margin: 0 64px;
  letter-spacing: -1px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Inner>{title}</Inner>
    </HeaderWrapper>
  )
}

export default Header
