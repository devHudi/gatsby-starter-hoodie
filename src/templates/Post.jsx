import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/Layout"
import Article from "components/Article"

export default ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  const { title, date, update, tags } = post.frontmatter
  const { readingTime } = post.fields

  return (
    <Layout>
      <Article>
        <Article.Header
          title={title}
          date={date}
          update={update}
          tags={tags}
          minToRead={Math.round(readingTime.minutes)}
        />
        <Article.Body html={post.html} />
        <Article.Footer />
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
        date(formatString: "MMMM DD, YYYY")
        update(formatString: "MMMM DD, YYYY")
        tags
      }
      fields {
        readingTime {
          minutes
        }
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
