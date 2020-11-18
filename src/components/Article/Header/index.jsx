import React from "react"
import styled from "styled-components"

const Title = styled.h1``
const Description = styled.h2``
const Date = styled.div``

const TagsWrapper = styled.div``

const Header = ({ title, description, date, update, tags }) => {
  return (
    <div>
      <Title> {title} </Title>
      <Description> {description} </Description>
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
