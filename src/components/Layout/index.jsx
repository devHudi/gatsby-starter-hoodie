import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"

import { light, dark } from "assets/theme"

import GlobalStyles from "components/GlobalStyles"

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches

  const localTheme = localStorage.getItem("theme")

  const [themeMode, setThemeMode] = useState(
    localTheme ? localTheme : isSystemDarkMode ? "dark" : "light"
  )

  const toggleTheme = () => {
    const nextTheme = themeMode === "light" ? "dark" : "light"
    setThemeMode(nextTheme)
    localStorage.setItem("theme", nextTheme)
  }

  const theme = themeMode === "light" ? light : dark
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Body>{children}</Body>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
