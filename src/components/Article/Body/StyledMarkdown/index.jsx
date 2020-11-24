import styled from "styled-components"

const StyledMarkdown = styled.div`
  & {
    font-size: 1.1rem;
    color: #212529;
    line-height: 1.6;
  }

  & > p,
  & > ul,
  & > ol,
  & table,
  & blockquote,
  & pre,
  & img {
    margin-bottom: 1.5rem;
  }

  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin: 0.7rem 0 0.3rem 0;
    font-weight: 700;
  }

  & h2 {
    font-size: 2rem;
  }

  & h3 {
    font-size: 1.6rem;
  }

  & h4 {
    font-size: 1.4rem;
  }

  & h5 {
    font-size: 1.2rem;
  }

  & h6 {
    font-size: 1.1rem;
  }

  & strong {
    font-weight: 700;
  }

  & em {
    font-style: italic;
  }

  & a {
    padding: 0.1rem;
    color: inherit;
  }

  & a:hover {
    background-color: #212529;
    color: #f8f9fa;
  }

  & blockquote {
    padding: 1.5rem;
    border-left: 5px solid #dee2e6;
    background-color: #f1f3f5;
  }

  & blockquote blockquote {
    margin-top: 1.5rem;
  }

  & table {
    border-collapse: collapse;
  }

  & th {
    border-bottom: 2px solid #ced4da;
    font-weight: 700;
  }

  & td {
    border-top: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
  }

  & td,
  th {
    padding: 0.5rem;
  }

  & tr:first-child td {
    border-top: none;
  }

  & tr:nth-child(even) {
    background-color: #f1f3f5;
  }

  & tr:last-child td {
    border-bottom: none;
  }

  & :not(pre) > code {
    padding: 0.15rem 0.2rem;
    border-radius: 0;
    background-color: #e9ecef;
    font-size: 1.1rem;
    font-weight: 700;
    color: #212529;
  }

  & ul,
  & ol {
    padding-left: 1.5rem;
  }

  & li {
    list-style: disc;
  }

  & li > ul > li {
    list-style: circle;
  }

  & li > ul > li ul li {
    list-style: square;
  }

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  & hr {
    border: none;
    border-bottom: 1px solid #dee2e6;
  }
`

export default StyledMarkdown
