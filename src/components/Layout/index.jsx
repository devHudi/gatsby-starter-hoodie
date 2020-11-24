import React from "react"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

const GlobalStyles = createGlobalStyle`
  ${reset};
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  )
}

export default Layout
