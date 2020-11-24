import React from "react"

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}

export default Layout
