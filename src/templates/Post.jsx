import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Article from "../components/Article"

export default ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  const { title, description, date, update, tags } = post.frontmatter

  return (
    <Layout>
      <Article>
        <Article.Header
          title={title}
          description={description}
          date={date}
          update={update}
          tags={tags}
        />
        <Article.Body html={post.html} />
      </Article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        update(formatString: "MMMM DD, YYYY")
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
