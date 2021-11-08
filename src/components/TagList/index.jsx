import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TagListWrapper = styled.div`
  margin-bottom: 16px;
  word-break: break-all;
`

const TagLink = styled.div`
  display: inline-block;
  padding: 9.6px 11.2px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 50px;
  background-color: ${props =>
    props.selected
      ? props.theme.colors.selectedTagBackground
      : props.theme.colors.tagBackground};
  color: ${props =>
    props.selected
      ? props.theme.colors.selectedTagText
      : props.theme.colors.tagText};
  text-decoration: none;
  font-size: 14.4px;
  transition: all 0.2s;

  &:hover {
    background-color: ${props =>
      props.selected
        ? props.theme.colors.hoveredSelectedTagBackground
        : props.theme.colors.hoveredTagBackground};
  }
`

const spaceToDash = text => {
  return text.replace(/\s+/g, "-")
}

const TagList = ({ tagList, count, selected }) => {
  if (!tagList) return null

  if (!count) {
    return (
      <TagListWrapper>
        {tagList.map((tag, i) => (
          <Link key={JSON.stringify({ tag, i })} to={`/tags?q=${tag}`}>
            <TagLink>{spaceToDash(tag)}</TagLink>
          </Link>
        ))}
      </TagListWrapper>
    )
  }

  return (
    <TagListWrapper>
      {tagList.map((tag, i) => (
        <Link
          key={JSON.stringify({ tag, i })}
          to={
            selected === tag.fieldValue ? "/tags" : `/tags?q=${tag.fieldValue}`
          }
        >
          <TagLink selected={tag.fieldValue === selected}>
            {spaceToDash(tag.fieldValue)} ({tag.totalCount})
          </TagLink>
        </Link>
      ))}
    </TagListWrapper>
  )
}

export default TagList
