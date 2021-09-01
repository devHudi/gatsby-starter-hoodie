import React from "react"
import styled, { css } from "styled-components"

import useScroll from "hooks/useScroll"

const StyledWrapper = styled.div`
  position: relative;
  opacity: 0;
  transition: 0.35s all ease;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
    `}
`

const RevealOnScroll = ({ revealAt, reverse, children }) => {
  const { y } = useScroll()

  let reveal = null
  if (!reverse) reveal = y > revealAt
  else reveal = y < revealAt

  return <StyledWrapper visible={reveal}>{children}</StyledWrapper>
}

export default RevealOnScroll
