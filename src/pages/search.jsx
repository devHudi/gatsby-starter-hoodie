import React, { useState, useCallback } from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/Layout"

const Search = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  const [query, setQuery] = useState("")

  const filteredPosts = useCallback(
    posts.filter(post => {
      const { frontmatter, rawMarkdownBody } = post
      const { title } = frontmatter
      const lowerQuery = query.toLocaleLowerCase()

      if (rawMarkdownBody.toLocaleLowerCase().includes(lowerQuery)) return true

      return title.toLocaleLowerCase().includes(lowerQuery)
    }),
    [query]
  )

  return (
    <Layout>
      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder="input keyword here"
      />
      {filteredPosts.map(post => (
        <Link key={post.title} to={post.fields.slug}>
          <div>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.excerpt}</p>
            <p>
              {post.frontmatter.tags.map(tag => (
                <span>#{tag} </span>
              ))}
            </p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default Search

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
        }
        rawMarkdownBody
      }
    }
  }
`
