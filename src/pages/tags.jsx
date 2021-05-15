import React, { useState, useEffect } from "react"
import filter from "lodash/filter"

import { Helmet } from "react-helmet"
import { graphql, navigate } from "gatsby"

import queryString from "query-string"

import Layout from "components/Layout"
import Title from "components/Title"
import TagList from "components/TagList"
import PostList from "components/PostList"
import VerticleSpace from "components/VerticalSpace"

const TagsPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const tags = data.allMarkdownRemark.group
  const posts = data.allMarkdownRemark.nodes

  const [selected, setSelected] = useState()
  const [filteredPosts, setFilteredPosts] = useState([])

  let query = null
  if (typeof document !== "undefined") {
    query = document.location.search
  }

  useEffect(() => {
    if (!selected) {
      setFilteredPosts(posts)
      return
    }

    setFilteredPosts(
      filter(posts, post => post.frontmatter.tags.indexOf(selected) !== -1)
    )
  }, [selected])

  useEffect(() => {
    const q = queryString.parse(query)["q"]
    setSelected(q)
  }, [query])

  return (
    <Layout>
      <Helmet title={title} />

      {selected ? (
        <Title size="sm">
          #{selected} 에 해당하는 글이 총 {filteredPosts.length}개가 있습니다.
        </Title>
      ) : (
        <Title size="sm"> 총 {tags.length}개의 태그가 존재합니다. </Title>
      )}

      <TagList
        count
        tagList={tags}
        selected={selected}
        onClick={tag => {
          console.log(tag, selected)
          if (tag === selected) {
            navigate("/tags")
            alert("zz")
          } else setSelected(tag)
        }}
      />

      <VerticleSpace size={2} />

      <PostList postList={filteredPosts} />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
