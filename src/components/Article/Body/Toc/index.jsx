import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

import { animateScroll } from "react-scroll"

import useScroll from "hooks/useScroll"

import getElementOffset from "utils/getElmentOffset"

import RevealOnScroll from "components/RevealOnScroll"

const STICK_OFFSET = 100

const TocWrapper = styled.div`
  position: absolute;
  left: 100%;

  & > div {
    margin-left: 4rem;
    position: relative;
    width: 15rem;
    line-height: 1.9;

    ${props =>
      props.stick &&
      css`
        position: fixed;
        top: ${STICK_OFFSET}px;
      `}
  }
`

const Title = styled.div`
  font-size: 0.9rem;
  color: #adb5bd;
  padding-left: ${props => (props.subtitle ? 0.7 : 0)}rem;
  transition: all 0.2s;

  ${props =>
    props.active &&
    css`
      margin-left: -0.7rem;
      color: #495057;
    `}

  &:hover {
    color: #212529;
    cursor: pointer;
  }
`

const Toc = ({ items, articleOffset }) => {
  const { y } = useScroll()

  const [revealAt, setRevealAt] = useState(4000)
  const [headers, setHeaders] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const bioElm = document.getElementById("bio")

    setRevealAt(
      getElementOffset(bioElm).top - bioElm.getBoundingClientRect().height
    )
  }, [])

  useEffect(() => {
    setHeaders(
      [
        ...document.querySelectorAll("#article-body > h2, #article-body > h3"),
      ].map(element => getElementOffset(element).top)
    )
  }, [])

  useEffect(() => {
    headers.forEach((header, i) => {
      if (header - 300 < y) {
        setActive(i)
        return
      }
    })
  }, [y])

  const handleClickTitle = index => {
    animateScroll.scrollTo(headers[index] - 100)
  }

  return (
    <RevealOnScroll revealAt={revealAt} reverse>
      <TocWrapper stick={y > articleOffset - STICK_OFFSET}>
        <div>
          {items.map((item, i) => (
            <Title
              subtitle={item.tagName === "H3"}
              active={i === active}
              onClick={() => handleClickTitle(i)}
            >
              {item.innerText}
            </Title>
          ))}
        </div>
      </TocWrapper>
    </RevealOnScroll>
  )
}

export default Toc
