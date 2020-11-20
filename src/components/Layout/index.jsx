import React from "react"

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import Bio from "./Bio"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Bio />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}

export default Layout
