import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { title } from "../../../../blog-config"

import { FaSun, FaMoon, FaTags, FaSearch } from "react-icons/fa"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
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
    fill: #868e96;
    transition: fill 0.3s;
  }

  & a:hover svg path {
    fill: #212529;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Inner>
        <BlogTitle>
          <Link to="/">{title}</Link>
        </BlogTitle>
        <Menu>
          <Link to="#">
            {/* to be developed */}
            <FaMoon />
          </Link>
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
