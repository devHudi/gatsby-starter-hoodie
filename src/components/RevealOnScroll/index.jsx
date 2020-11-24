import React from "react"
import { useSpring, animated } from "react-spring"

import useScroll from "hooks/useScroll"

const RevealOnScroll = ({ revealAt, children }) => {
  const { y } = useScroll()

  const reveal = y > revealAt

  const props = useSpring({
    opacity: reveal ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 250 },
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default RevealOnScroll
