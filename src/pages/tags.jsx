import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"

import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import TagList from "components/TagList"

const TagsPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const tags = data.allMarkdownRemark.group

  return (
    <Layout>
      <Helmet title={title} />
      <TagList tagList={tags} count />
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
