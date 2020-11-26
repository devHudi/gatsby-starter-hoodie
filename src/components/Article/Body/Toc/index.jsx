import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

import useScroll from "hooks/useScroll"

import RevealOnScroll from "components/RevealOnScroll"

const STICK_OFFSET = 100

const TocWrapper = styled.div`
  position: absolute;
  left: 100%;

  & > div {
    margin-left: 3rem;
    position: relative;
    width: 15rem;
    line-height: 1.6;
    font-size: 0.9rem;

    ${props =>
      props.stick &&
      css`
        position: fixed;
        top: ${STICK_OFFSET}px;
      `}
  }
`

const Title = styled.div``

const Subtitle = styled.div`
  padding-left: 0.7rem;
`

const Toc = ({ items, articleOffset }) => {
  const { y } = useScroll()
  const [revealAt, setRevealAt] = useState(4000)

  useEffect(() => {
    setRevealAt(document.getElementById("bio").offsetTop - 100)
  }, [])

  return (
    <RevealOnScroll revealAt={revealAt} reverse>
      <TocWrapper stick={y > articleOffset - STICK_OFFSET}>
        <div>
          {items.map(item => {
            if (item.tagName === "H2") return <Title> {item.innerText} </Title>
            else return <Subtitle> {item.innerText} </Subtitle>
          })}
        </div>
      </TocWrapper>
    </RevealOnScroll>
  )
}

export default Toc
