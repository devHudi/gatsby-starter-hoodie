import React from "react"

import GlobalStyles from "components/GlobalStyles"

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

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
