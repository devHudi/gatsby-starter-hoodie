import React, { useState, useEffect } from "react"
import styled from "styled-components"

import useOffsetTop from "hooks/useOffsetTop"

import RevealOnScroll from "components/RevealOnScroll"

import Bio from "./Bio"
import Toc from "./Toc"

const Wrapper = styled.div`
  position: relative;
`

const Article = styled.div`
  & {
    line-height: 1.7;
  }

  & > section > h2 {
    font-size: 1.8rem;
    color: #343a40;
  }

  & > section > p {
    font-size: 1rem;
    color: #212529;
  }
`

const Body = ({ html }) => {
  const [toc, setToc] = useState([])

  const [ref, offsetTop] = useOffsetTop()

  useEffect(() => {
    setToc(
      Array.from(
        document.querySelectorAll("#article-body > h2, #article-body > h3")
      )
    )
  }, [])

  const revealAt = offsetTop

  return (
    <Wrapper>
      <RevealOnScroll revealAt={revealAt}>
        <Bio revealAt={revealAt} />
        <Toc items={toc} revealAt={revealAt} />
      </RevealOnScroll>
      <Article
        id="article-body"
        dangerouslySetInnerHTML={{ __html: html }}
        itemProp="articleBody"
        ref={ref}
      />
    </Wrapper>
  )
}

export default Body
