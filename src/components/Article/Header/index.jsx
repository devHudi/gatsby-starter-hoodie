import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { author } from "../../../../blog-config"

import Divider from "components/Divider"
import InvertLinkMixin from "components/Mixins/InvertLinkMixin"

const Title = styled.h1`
  margin-bottom: 1.6rem;
  line-height: 1.2;
  font-size: 2.8rem;
  font-weight: 700;
`

const Information = styled.div`
  margin-bottom: 2rem;
  font-size: 1rem;
`

const Author = styled.span`
  font-weight: 700;
`

const Date = styled.span`
  font-weight: 300;
  color: #868e96;
`

const TagsWrapper = styled.div`
  margin-bottom: 0.3rem;
`

const Tag = styled.span`
  margin-right: 0.3rem;

  & > a {
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  ${InvertLinkMixin}
`

const Header = ({ title, date, update, tags }) => {
  return (
    <>
      <TagsWrapper>
        {tags.map((tag, i) => (
          <Tag>
            <StyledLink to={`/tags/${tag}`}>#{tag}</StyledLink>
          </Tag>
        ))}
      </TagsWrapper>
      <Title> {title} </Title>
      <Information>
        <Author> @{author} </Author>
        <Date>· {date} </Date>
      </Information>
      <Divider mt="0" />
    </>
  )
}

export default Header
