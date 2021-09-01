import { useEffect, useState } from "react"

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  })

  const onScroll = () => {
    setScroll({ y: window.scrollY, x: window.scrollX })
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return scroll
}

export default useScroll
