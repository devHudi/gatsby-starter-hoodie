import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import Divider from "components/Divider"

import { useAbout } from "../../../blog-config"

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
  margin-top: 35px;
  margin-bottom: 48px;

  & a {
    text-decoration: none;
  }
`

const TabButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 43px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid;
  border-bottom-color: ${props =>
    props.active ? props.theme.colors.text : "transparent"};
  font-size: 14px;
  color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.tertiaryText};
  font-weight: ${props => (props.active ? "bold" : "normal")};
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme.colors.text};
    border-bottom-color: ${props =>
      props.active ? props.theme.colors.text : props.theme.colors.divider};
  }

  & svg {
    margin-right: 10px;
    height: 20px;
  }
`

const Badge = styled.span`
  display: inline-block;
  margin-left: 7px;
  padding: 3px 6px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.tagBackground};
  color: ${props => props.theme.colors.tagText};
  font-weight: normal;
  font-size: 13px;
  letter-spacing: 0.3px;
  transition: all 0.2s;
`

const Tab = ({ postsCount, activeTab }) => {
  if (!useAbout) return <Divider />

  return (
    <TabWrapper>
      <Link to="/">
        <TabButton active={activeTab == "posts"}>
          POSTS <Badge>{postsCount}</Badge>
        </TabButton>
      </Link>
      <Link to="/about">
        <TabButton active={activeTab == "about"}>ABOUT</TabButton>
      </Link>
    </TabWrapper>
  )
}

export default Tab
