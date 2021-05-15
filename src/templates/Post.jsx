import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Article from "components/Article"

export default ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next, seriesList } = data

  const { title, date, update, tags, series } = post.frontmatter
  const { readingTime } = post.fields

  let filteredSeries = []
  if (series !== null) {
    filteredSeries = seriesList.edges.map(seriesPost => {
      if (seriesPost.node.id === post.id) {
        return {
          ...seriesPost.node,
          currentPost: true,
        }
      } else {
        return {
          ...seriesPost.node,
          currentPost: false,
        }
      }
    })
  }

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
        {filteredSeries.length > 0 && (
          <Article.Series header={series} series={filteredSeries} />
        )}
        <Article.Body html={post.html} />
        <Article.Footer />
      </Article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $series: String
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
        series
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
    seriesList: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { series: { eq: $series } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
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
