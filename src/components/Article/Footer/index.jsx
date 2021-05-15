import React from "react"
import styled from "styled-components"
import ReactUtterences from "react-utterances"

import { utterances } from "../../../../blog-config"

import Divider from "components/Divider"
import Bio from "components/Bio"

const CommentWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Comment = () => (
  <ReactUtterences repo={utterances.repo} type={utterances.type} />
)

const Footer = () => {
  return (
    <>
      <Bio />
      <CommentWrapper>
        <Divider mt="2rem" />
        <Comment />
      </CommentWrapper>
    </>
  )
}

export default Footer
