import React from "react"
import styled, { css } from "styled-components"

import useScroll from "hooks/useScroll"

const StyledWrapper = styled.div`
  position: relative;
  top: 30px;
  opacity: 0;
  transition: 0.35s all ease;
  ${props =>
    props.visible &&
    css`
      top: 0;
      opacity: 1;
    `}
`

const RevealOnScroll = ({ revealAt, children }) => {
  const { y } = useScroll()

  const reveal = y > revealAt

  return <StyledWrapper visible={reveal}>{children}</StyledWrapper>
}

export default RevealOnScroll
