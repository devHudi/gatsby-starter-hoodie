import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { author } from "../../../../blog-config"

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

const Divider = styled.hr`
  margin-bottom: 3rem;
  border: none;
  border-bottom: 1px solid #dee2e6;
`

const Header = ({ title, date, update, tags }) => {
  return (
    <>
      <TagsWrapper>
        {tags.map((tag, i) => (
          <Tag>
            <Link to={`/tags/${tag}`}>#{tag}</Link>
          </Tag>
        ))}
      </TagsWrapper>
      <Title> {title} </Title>
      <Information>
        <Author> @{author} </Author>
        <span>·</span>
        <Date> {date} </Date>
      </Information>
      <Divider />
    </>
  )
}

export default Header
