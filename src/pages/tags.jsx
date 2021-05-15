import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SEO from "components/SEO"
import filter from "lodash/filter"

import { graphql, navigate } from "gatsby"

import queryString from "query-string"

import Layout from "components/Layout"
import Title from "components/Title"
import TagList from "components/TagList"
import PostList from "components/PostList"
import VerticleSpace from "components/VerticalSpace"

import { title, description, siteUrl } from "../../blog-config"

const TagListWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const TagsPage = ({ data }) => {
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
      <SEO title={title} description={description} url={siteUrl} />

      <TagListWrapper>
        {selected ? (
          <Title size="sm">
            There are {filteredPosts.length} post
            {filteredPosts.length > 1 && "s"} that match #{selected}.
          </Title>
        ) : (
          <Title size="sm">
            There are {tags.length} tag{tags.length > 1 && "s"}.
          </Title>
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
      </TagListWrapper>

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
