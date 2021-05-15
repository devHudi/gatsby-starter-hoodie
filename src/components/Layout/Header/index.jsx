import React, { useEffect, useState } from "react"
import styled, { useTheme } from "styled-components"

import { Link } from "gatsby"

import { title } from "../../../../blog-config"

import { FaSun, FaMoon, FaTags, FaSearch } from "react-icons/fa"

const HeaderWrapper = styled.header`
  display: block;
  position: fixed;
  top: ${props => (props.isHidden ? -60 : 0)}px;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: ${props => props.theme.colors.headerBackground};
  box-shadow: 0 0 8px ${props => props.theme.colors.headerShadow};
  backdrop-filter: blur(5px);
  opacity: ${props => (props.isHidden ? 0 : 1)};
  transition: top 0.5s, opacity 0.5s;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 64px;

  @media (max-width: 768px) {
    margin: 0 15px;
  }
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
  const [scrollY, setScrollY] = useState()
  const [hidden, setHidden] = useState(false)

  const detectScrollDirection = e => {
    if (scrollY >= window.scrollY) {
      // scroll up
      setHidden(false)
    } else if (scrollY < window.scrollY && 400 <= window.scrollY) {
      // scroll down
      setHidden(true)
    }

    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection)

    return () => {
      window.removeEventListener("scroll", detectScrollDirection)
    }
  }, [scrollY])

  useEffect(() => {
    setScrollY(window.scrollY)
  }, [])

  return (
    <HeaderWrapper isHidden={hidden}>
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
            <FaSearch style={{ marginRight: 0 }} />
          </Link>
        </Menu>
      </Inner>
    </HeaderWrapper>
  )
}

export default Header
