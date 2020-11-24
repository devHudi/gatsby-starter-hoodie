import styled from "styled-components"

const Article = styled.div`
  & {
    line-height: 1.7;
  }

  & > section > h2 {
    font-size: 1.8rem;
    color: #343a40;
  }

  & > section > p {
    font-size: 1rem;
    color: #212529;
  }
`

export default Article
