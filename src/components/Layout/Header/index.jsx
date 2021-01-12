import React from "react"
import styled, { useTheme } from "styled-components"

import { Link } from "gatsby"

import { title } from "../../../../blog-config"

import { FaSun, FaMoon, FaTags, FaSearch } from "react-icons/fa"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  background-color: ${props => props.theme.colors.headerBackground};
  box-shadow: 0 0 8px ${props => props.theme.colors.headerShadow};
  backdrop-filter: blur(5px);
  z-index: 999;
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 64px;
`

const BlogTitle = styled.span`
  letter-spacing: -1px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};

  & > a {
    text-decoration: none;
    color: inherit;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }

  & svg path {
    fill: ${props => props.theme.colors.icon};
    transition: fill 0.3s;
  }

  & svg:hover path {
    fill: ${props => props.theme.colors.text};
  }
`

const ToggleWrapper = styled.div`
  width: 1.2rem;
  height: 1.4rem;
  margin-right: 1rem;
  overflow: hidden;
  box-sizing: border-box;
`

const IconRail = styled.div`
  margin-top: ${props => (props.theme === "light" ? "-1.4rem" : "0")};
  transition: margin-top 0.4s;

  & > svg {
    transition: opacity 0.25s;
  }

  & > svg:first-child {
    margin-bottom: 0.2rem;
    opacity: ${props => (props.theme === "light" ? 0 : 1)};
  }

  & > svg:last-child {
    opacity: ${props => (props.theme === "dark" ? 0 : 1)};
  }
`

const Header = ({ toggleTheme }) => {
  const theme = useTheme()

  return (
    <HeaderWrapper>
      <Inner>
        <BlogTitle>
          <Link to="/">{title}</Link>
        </BlogTitle>
        <Menu>
          <ToggleWrapper>
            <IconRail theme={theme.name}>
              <FaSun onClick={toggleTheme} />
              <FaMoon onClick={toggleTheme} />
            </IconRail>
          </ToggleWrapper>

          <Link to="/tags">
            <FaTags />
          </Link>
          <Link to="/search">
            <FaSearch />
          </Link>
        </Menu>
      </Inner>
    </HeaderWrapper>
  )
}

export default Header
