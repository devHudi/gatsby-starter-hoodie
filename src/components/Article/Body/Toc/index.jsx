import React, { useEffect } from "react"
import styled from "styled-components"

const TocWrapper = styled.div`
  position: absolute;
  left: 100%;

  & > div {
    margin-left: 2rem;
    position: fixed;
    background-color: #dee2e6;
    width: 15rem;
  }
`

const Title = styled.div``

const Subtitle = styled.div`
  padding-left: 1rem;
`

const Toc = ({ items }) => {
  return (
    <TocWrapper>
      <div>
        {items.map(item => {
          if (item.tagName === "H2") return <Title> {item.innerText} </Title>
          else return <Subtitle> {item.innerText} </Subtitle>
        })}
      </div>
    </TocWrapper>
  )
}

export default Toc
