import React, { useEffect } from "react"
import styled from "styled-components"

const TocWrapper = styled.div`
  position: fixed;
  top: 5rem;
  right: 50px;
`

const Title = styled.div``

const Subtitle = styled.div`
  padding-left: 1rem;
`

const Toc = ({ items }) => {
  return (
    <TocWrapper>
      {items.map(item => {
        if (item.tagName === "H2") return <Title> {item.innerText} </Title>
        else return <Subtitle> {item.innerText} </Subtitle>
      })}
    </TocWrapper>
  )
}

export default Toc
