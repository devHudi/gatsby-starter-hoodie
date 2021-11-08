import React from "react"
import { flow, map, groupBy, sortBy, filter, reverse } from "lodash/fp"
import styled from "styled-components"
import SEO from "components/SEO"

import { graphql } from "gatsby"

import Layout from "components/Layout"
import Title from "components/Title"
import SeriesList from "components/SeriesList"
import VerticleSpace from "components/VerticalSpace"
import NoContent from "components/NoContent"

import { title, description, siteUrl } from "../../blog-config"

const TagListWrapper = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const SeriesPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  const series = flow(
    map(post => ({ ...post.frontmatter, slug: post.fields.slug })),
    groupBy("series"),
    map(series => ({
      name: series[0].series,
      posts: series,
      lastUpdated: series[0].date,
    })),
    sortBy(series => new Date(series.lastUpdated)),
    filter(series => series.name),
    reverse
  )(posts)

  return (
    <Layout>
      <SEO title={title} description={description} url={siteUrl} />

      <TagListWrapper>
        {series.length > 0 && (
          <Title size="sm">There are {series.length} series.</Title>
        )}
      </TagListWrapper>

      {series.length === 0 && <NoContent name="series" />}

      <VerticleSpace size={32} />

      <SeriesList seriesList={series} />
    </Layout>
  )
}

export default SeriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          update(formatString: "MMM DD, YYYY")
          title
          tags
          series
        }
      }
    }
  }
`
