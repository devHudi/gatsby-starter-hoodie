import React from "react"
import { useSelector } from "react-redux"
import DarkMode from "./DarkMode"
import LightMode from "./LightMode"

const PrismTheme = () => {
  const { theme } = useSelector(state => state.theme)

  return <>{theme === "light" ? <LightMode /> : <DarkMode />}</>
}

export default PrismTheme
