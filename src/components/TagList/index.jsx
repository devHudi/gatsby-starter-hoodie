import React from "react"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"

const TagListWrapper = styled.div`
  margin-bottom: 1rem;
  word-break: break-all;
`

const TagLink = styled.a`
  display: inline-block;
  padding: 0.6rem 0.7rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 50px;
  background-color: ${props => (props.selected ? "#495057" : "#f1f3f5")};
  color: ${props => (props.selected ? "#f8f9fa" : "#495057")};
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => (props.selected ? "#343a40" : "#dee2e6")};
    /* color: #495057; */
  }
`

const TagList = ({ tagList, count, selected, onClick }) => {
  if (!count) {
    return (
      <TagListWrapper>
        {tagList.map((tag, i) => (
          <Link to={`/tags?q=${kebabCase(tag)}`}>
            <TagLink>{kebabCase(tag)}</TagLink>
          </Link>
        ))}
      </TagListWrapper>
    )
  }

  return (
    <TagListWrapper>
      {tagList.map((tag, i) => (
        <Link
          to={
            selected === tag.fieldValue ? "/tags" : `/tags?q=${tag.fieldValue}`
          }
        >
          <TagLink selected={tag.fieldValue === selected}>
            {kebabCase(tag.fieldValue)} ({tag.totalCount})
          </TagLink>
        </Link>
      ))}
    </TagListWrapper>
  )
}

export default TagList
