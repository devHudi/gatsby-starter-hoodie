import styled from "styled-components"

const StyledMarkdown = styled.div`
  & {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    overflow: hidden;
  }

  & > p,
  & > ul,
  & > ol,
  & table,
  & blockquote,
  & pre,
  & img,
  & .katex-display {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  & p {
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
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
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }

  & h3 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }

  & h4 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  & h5 {
    font-size: 1rem;
  }

  & h6 {
    font-size: 0.9rem;
  }

  & strong {
    font-weight: 700;
  }

  & em {
    font-style: italic;
  }

  & blockquote {
    padding: 1.5rem;
    border-left: 5px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.background};
  }

  & blockquote blockquote {
    margin-top: 1.5rem;
  }

  & table {
    border-collapse: collapse;
  }

  & th {
    border-bottom: 2px solid ${props => props.theme.colors.border};
    font-weight: 700;
  }

  & td {
    border-top: 1px solid ${props => props.theme.colors.border};
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  & td,
  th {
    padding: 0.5rem;
  }

  & tr:first-child td {
    border-top: none;
  }

  & tr:nth-child(even) {
    background-color: ${props => props.theme.colors.background};
  }

  & tr:last-child td {
    border-bottom: none;
  }

  & p > code {
    word-break: break-all;
  }

  & p > code.language-text,
  & li > code.language-text {
    padding: 0.1rem 0.3rem;
    font-size: 0.9rem;
    background-color: ${props => props.theme.colors.inlineCodeBackground};
    font-weight: bold;
    color: ${props => props.theme.colors.text};
  }

  & ul,
  & ol {
    padding-left: 2rem;
  }

  & ol {
    list-style: decimal;
  }

  & ul {
    list-style: disc;
  }

  & ul ul {
    list-style: circle;
  }

  & ul ul ul {
    list-style: square;
  }

  & li {
    margin-bottom: 0.8rem;
  }

  & li p {
    margin-top: 0.5rem;
  }

  & pre {
    ::-webkit-scrollbar {
      height: 12px;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.scrollTrack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollHandle};
    }
  }

  & pre > code {
    font-size: 0.9rem;
  }

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  & hr {
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  & a {
    padding: 0.1rem 0;
    color: ${props => props.theme.colors.text};
  }

  & a:hover {
    background-color: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.hoveredLinkText};
  }
`

export default StyledMarkdown
