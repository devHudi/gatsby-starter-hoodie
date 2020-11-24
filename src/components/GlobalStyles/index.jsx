import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import notoSansKrV13Latin300 from "fonts/noto-sans-kr-v13-latin-300.woff"
import notoSansKrV13Latin300_2 from "fonts/noto-sans-kr-v13-latin-300.woff2"
import notoSansKrV13Latin400 from "fonts/noto-sans-kr-v13-latin-regular.woff"
import notoSansKrV13Latin400_2 from "fonts/noto-sans-kr-v13-latin-regular.woff2"
import notoSansKrV13Latin500 from "fonts/noto-sans-kr-v13-latin-500.woff"
import notoSansKrV13Latin500_2 from "fonts/noto-sans-kr-v13-latin-500.woff2"
import notoSansKrV13Latin700 from "fonts/noto-sans-kr-v13-latin-700.woff"
import notoSansKrV13Latin700_2 from "fonts/noto-sans-kr-v13-latin-700.woff2"
import notoSansKrV13Latin900 from "fonts/noto-sans-kr-v13-latin-900.woff"
import notoSansKrV13Latin900_2 from "fonts/noto-sans-kr-v13-latin-900.woff2"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    src: local('Noto Sans KR'),
    url(${notoSansKrV13Latin300}) format('woff'),
    url(${notoSansKrV13Latin300_2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: local('Noto Sans KR'),
    url(${notoSansKrV13Latin400}) format('woff'),
    url(${notoSansKrV13Latin400_2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: local('Noto Sans KR'),
    url(${notoSansKrV13Latin500}) format('woff'),
    url(${notoSansKrV13Latin500_2}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: local('Noto Sans KR'),
    url(${notoSansKrV13Latin700}) format('woff'),
    url(${notoSansKrV13Latin700_2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: local('Noto Sans KR'),
    url(${notoSansKrV13Latin900}) format('woff'),
    url(${notoSansKrV13Latin900_2}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif !important;
  }

  a {
    padding: 0.1rem 0.3rem;
    color: #212529;
  }

  a:hover {
    background-color: #212529;
    color: #f8f9fa;
  }
`

export default GlobalStyles
