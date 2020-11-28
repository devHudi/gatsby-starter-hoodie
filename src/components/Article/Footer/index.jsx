import React from "react"
import styled from "styled-components"
import ReactUtterences from "react-utterances"

import { utterances } from "../../../../blog-config"

import Divider from "components/Divider"
import Bio from "components/Bio"

const Comment = () => (
  <ReactUtterences repo={utterances.repo} type={utterances.type} />
)

const Footer = () => {
  return (
    <div>
      <Bio />
      <Divider mt="2rem" />
      <Comment />
    </div>
  )
}

export default Footer
