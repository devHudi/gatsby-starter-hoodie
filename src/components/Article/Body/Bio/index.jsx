import React from "react"
import styled from "styled-components"

import { title, description, author, links } from "../../../../blog-config"

const BioWrapper = styled.div`
  position: fixed;
  top: 5rem;
  left: 2rem;
`

const Title = styled.h1`
  margin: 0;
  font-size: 1.2rem;
`
const Author = styled.div``

const Description = styled.p``

const Link = styled.a``

const OutLink = ({ site, link }) => (
  <li>
    {site}: <Link href={link}>{link}</Link>
  </li>
)

const Bio = () => {
  const { github, facebook, linkedIn } = links

  return (
    <BioWrapper>
      <Title> {title} </Title>
      <Author> @{author} </Author>
      <Description>{description}</Description>
      <ul>
        {github && <OutLink site="github" link={github} />}
        {facebook && <OutLink site="facebook" link={facebook} />}
        {linkedIn && <OutLink site="linkedIn" link={linkedIn} />}
      </ul>
    </BioWrapper>
  )
}

export default Bio
