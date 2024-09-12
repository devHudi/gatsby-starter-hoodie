import React from "react"
import _ from "lodash"
import styled from "styled-components"
import { Link } from "gatsby"

const RelativeWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.aside`
  position: absolute;
  left: 112%;
  top: 0px;
  width: 200px;
  height: 100px;
  font-size: 16px;

  @media (max-width: 1300px) {
    display: none;
  }
`

const Title = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondaryText};
`

const Tag = styled.li`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.tertiaryText};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.text};
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
`

const SideTagList = ({ tags, postCount }) => {
  return (
    <RelativeWrapper>
      <Wrapper>
        <Title>TAG LIST</Title>
        <ul>
          <Tag>
            <Link to="/tags">all ({postCount})</Link>
          </Tag>
          {_.map(tags, tag => (
            <Tag key={tag.fieldValue}>
              <Link to={`/tags?q=${tag.fieldValue}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </Tag>
          ))}
        </ul>
      </Wrapper>
    </RelativeWrapper>
  )
}

export default SideTagList
