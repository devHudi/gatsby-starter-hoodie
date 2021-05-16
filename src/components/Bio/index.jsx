import React from "react"
import styled from "styled-components"

import ProfileImage from "images/profile.png"

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaLink,
} from "react-icons/fa"

import { description, author, links } from "../../../blog-config"

const BioWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Profile = styled.div`
  flex: 0 0 auto;
  margin-right: 1rem;
  width: 8rem;
  height: 8rem;
  border-radius: 999px;
  background-image: url(${ProfileImage});
  background-size: cover;
  background-position: center;
`

const Author = styled.div`
  margin-bottom: 0.3rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`

const Description = styled.div`
  margin-bottom: 0.7rem;
  line-height: 1.5;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryText};
`

const LinksWrapper = styled.div`
  & a {
    margin-right: 0.6rem;
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
  }

  & svg path {
    fill: ${props => props.theme.colors.icon};
    transition: fill 0.3s;
  }

  & a:hover svg path {
    fill: ${props => props.theme.colors.text};
  }
`

const Link = ({ link, children }) => {
  if (!link) return null
  return (
    <a href={link} target="_blank">
      {children}
    </a>
  )
}

const Bio = () => {
  const { github, instagram, facebook, linkedIn, etc } = links

  return (
    <BioWrapper id="bio">
      <Profile />
      <div>
        <Author>@{author}</Author>
        <Description>{description}</Description>
        <LinksWrapper>
          <Link link={github}>
            <FaGithub />
          </Link>
          <Link link={instagram}>
            <FaInstagram />
          </Link>
          <Link link={facebook}>
            <FaFacebook />
          </Link>
          <Link link={linkedIn}>
            <FaLinkedin />
          </Link>
          <Link link={etc}>
            <FaLink />
          </Link>
        </LinksWrapper>
      </div>
    </BioWrapper>
  )
}

export default Bio
