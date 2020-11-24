import React from "react"
import styled from "styled-components"

const Title = styled.h1``
  margin: 0;
const Date = styled.div``

const TagsWrapper = styled.div``

const Header = ({ title, date, update, tags }) => {
  return (
    <div>
      <Title> {title} </Title>
      <Date>
        {date}
        {update && <>(Updated at {update})</>}
      </Date>
      <TagsWrapper> {tags.join(" ")} </TagsWrapper>
      <hr />
    </div>
  )
}

export default Header
