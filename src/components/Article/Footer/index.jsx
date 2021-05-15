import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled, { useTheme } from "styled-components"
import ReactUtterences from "react-utterances"

import { utterances } from "../../../../blog-config"

import MDSpinner from "react-md-spinner"

import Divider from "components/Divider"
import Bio from "components/Bio"

const CommentWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const SpinnerWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HiddenWrapper = styled.div`
  display: ${props => (props.isHidden ? "none" : "block")};
`

const Spinner = () => {
  const theme = useTheme()
  return (
    <SpinnerWrapper>
      <MDSpinner singleColor={theme.colors.spinner} />
    </SpinnerWrapper>
  )
}

const Comment = () => {
  const { theme } = useSelector(state => state.theme)
  const [flag, setFlag] = useState(false)

  const setCommentTheme = () => {
    const message = {
      type: "set-theme",
      theme: `github-${theme}`,
    }

    let utteranceIframe = null
    utteranceIframe = document.querySelector("iframe.utterances-frame")

    if (utteranceIframe) {
      utteranceIframe.contentWindow.postMessage(message, "https://utteranc.es")
    }
  }

  useEffect(() => {
    setCommentTheme()
  }, [theme])

  useEffect(() => {
    setTimeout(() => {
      if (!flag) {
        setCommentTheme()
        setFlag(true)
      }
    }, 2000)
  }, [theme, flag])

  return (
    <>
      {flag || <Spinner />}
      <HiddenWrapper isHidden={!flag}>
        <ReactUtterences repo={utterances.repo} type={utterances.type} />
      </HiddenWrapper>
    </>
  )
}

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
