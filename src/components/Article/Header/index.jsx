import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { author } from "../../../../blog-config"

import Divider from "components/Divider"
import TagList from "components/TagList"
import InvertLinkMixin from "components/Mixins/InvertLinkMixin"

const ArticleTitle = styled.h1`
  margin-bottom: 1.6rem;
  line-height: 1.2;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`

const Information = styled.div`
  margin-bottom: 2rem;
  font-size: 1rem;
`

const Author = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`

const Date = styled.span`
  font-weight: 300;
  color: ${props => props.theme.colors.secondaryText};
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

const Header = ({ title, date, update, tags, minToRead }) => {
  return (
    <>
      <ArticleTitle> {title} </ArticleTitle>
      <Information>
        <Author> @{author} </Author>
        <Date>· {date} </Date>
        <Date>· {minToRead} min read </Date>
      </Information>
      {tags && <TagList tagList={tags} />}
      <Divider mt="0" />
    </>
  )
}

export default Header
