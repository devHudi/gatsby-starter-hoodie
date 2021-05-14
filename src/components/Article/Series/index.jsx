import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { AiOutlineArrowLeft } from "react-icons/ai"

const SeriesWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.seriesBackground};
`

const SeriesHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`

const Post = styled.li`
  position: relative;
  font-size: 0.8rem;
  color: ${props =>
    props.currentPost
      ? props.theme.colors.text
      : props.theme.colors.tertiaryText};

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }

  & > a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
  }

  & > a:hover {
    color: ${props => props.theme.colors.text};
  }

  & > svg {
    position: absolute;
    margin-left: 5px;
  }
`

const Series = ({ header, series }) => {
  return (
    <SeriesWrapper>
      <SeriesHeader>{header}</SeriesHeader>
      <ul>
        {series.map(post => (
          <Post currentPost={post.currentPost}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>{" "}
            {post.currentPost && <AiOutlineArrowLeft />}{" "}
          </Post>
        ))}
      </ul>
    </SeriesWrapper>
  )
}

export default Series
