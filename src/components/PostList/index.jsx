import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import Divider from "components/Divider"
import TagList from "components/TagList"
import InvertLinkMixin from "components/Mixins/InvertLinkMixin"

const PostListWrapper = styled.div``

const PostWrapper = styled.div`
  position: relative;
  top: 0;
  /* left: 0; */
  transition: all 0.5s;

  &:hover {
    /* top: -10px; */
    /* left: 15px; */
  }
`

const Title = styled.h1`
  margin-bottom: 1.5rem;
  line-height: 1.3;
  font-size: 2.1rem;
  font-weight: 700;

  & > a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  & > a:hover {
    color: #495057;
  }
`

const Date = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #868e96;
`

const Excerpt = styled.p`
  margin-bottom: 2rem;
  line-height: 1.7;
  font-size: 1rem;
  color: #495057;
`

const Tags = styled.div`
  margin-bottom: 1rem;

  & a {
    padding: 0.3rem 0.7rem;
    margin-right: 0.5rem;
    border-radius: 50px;
    background-color: #f1f3f5;
    text-decoration: none;
    font-size: 0.9rem;
    color: #495057;
    transition: all 0.2s;
  }

  & a:hover {
    background-color: #dee2e6;
  }
`

const PostList = ({ postList }) => {
  return (
    <PostListWrapper>
      {postList.map((post, i) => {
        const { title, date, tags } = post.frontmatter
        const { excerpt } = post
        const { slug } = post.fields

        return (
          <>
            <PostWrapper>
              <Title>
                <Link to={slug}>{title}</Link>
              </Title>
              <Date>{date}</Date>
              <Excerpt>{excerpt}</Excerpt>
              <TagList tagList={tags} />
            </PostWrapper>

            {postList.length - 1 !== i && <Divider mt="3rem" mb="2rem" />}
          </>
        )
      })}
    </PostListWrapper>
  )
}

export default PostList
