import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import Title from "components/Title"
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

const Date = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.tertiaryText};
`

const Excerpt = styled.p`
  margin-bottom: 2rem;
  line-height: 1.7;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryText};
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
              <Title size="bg">
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
