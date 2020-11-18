import React from "react"
import styled from "styled-components"

const BodyWrapper = styled.div`
  margin: 0 auto;
  padding-top: 5rem;
  max-width: 680px;
`

const Body = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>
}

export default Body
