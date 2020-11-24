import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Bio from "./Bio"
import Toc from "./Toc"

const BodyWrapper = styled.div`
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

  useEffect(() => {
    setToc(
      Array.from(
        document.querySelectorAll("#article-body > h2, #article-body > h3")
      )
    )
  }, [])

  return (
    <>
      <Bio />
      <Toc items={toc} />
      <BodyWrapper
        id="article-body"
        dangerouslySetInnerHTML={{ __html: html }}
        itemProp="articleBody"
      />
    </>
  )
}

export default Body
