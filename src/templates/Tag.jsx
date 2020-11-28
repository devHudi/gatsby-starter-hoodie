import React from "react"
import styled from "styled-components"

import { Link, graphql } from "gatsby"

import Layout from "components/Layout"
import PostList from "components/PostList"

const Header = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Header>
        #{tag} 에 해당하는 글이 {totalCount}개 있습니다.
      </Header>

      <PostList postList={posts} />

      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt(pruneLength: 200)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          update(formatString: "MMM DD, YYYY")
          title
          tags
        }
      }
    }
  }
`
