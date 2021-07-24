import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

import { animateScroll } from "react-scroll"

import useScroll from "hooks/useScroll"

import getElementOffset from "utils/getElmentOffset"

import RevealOnScroll from "components/RevealOnScroll"

const STICK_OFFSET = 100

const TocWrapper = styled.div`
  position: absolute;
  opacity: 1;
  left: 100%;

  & > div {
    padding-left: 1rem;
    margin-left: 3rem;
    position: relative;
    width: 15rem;
    max-height: 70%;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.scrollTrack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollHandle};
    }

    ${props =>
      props.stick &&
      css`
        position: fixed;
        top: ${STICK_OFFSET}px;
      `}
  }

  @media (max-width: 1300px) {
    display: None;
  }
`

const ParagraphTitle = styled.div`
  margin-bottom: 0.5rem;
  padding-left: ${props => (props.subtitle ? 1.2 : 0)}rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.mutedText};
  line-height: 1.3;
  transition: all 0.2s;

  ${props =>
    props.active &&
    css`
      transform: translate(-0.7rem, 0);
      color: ${props => props.theme.colors.secondaryText};
    `}

  &:hover {
    color: ${props => props.theme.colors.text};
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
            <ParagraphTitle
              key={i}
              subtitle={item.tagName === "H3"}
              active={i === active}
              onClick={() => handleClickTitle(i)}
            >
              {item.innerText}
            </ParagraphTitle>
          ))}
        </div>
      </TocWrapper>
    </RevealOnScroll>
  )
}

export default Toc
