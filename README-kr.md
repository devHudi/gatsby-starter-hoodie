# gatsby-starter-hoodie

## 🚀 gatsby-starter-hoodie 에 대하여

gatsby-starter-hoodie 는 기술 블로그를 작성하기 위해 개발된 Gatsby 테마입니다. 마크다운과 많은 프로그래밍 언어의 코드 하이라이팅, 그리고 Katex 문법을 지원합니다. 또한 태그와 시리즈를 통하여 쉽게 게시물을 분류할 수 있습니다.

다크모드를 지원하는 깔끔한 디자인의 gatsby-starter-hoodie 로 여러분의 블로그를 시작하세요.

이 프로젝트는 [벨로그](https://velog.io)에서 영감을 얻었습니다.

## [라이브 데모](https://devHudi.github.io/gatsby-starter-hoodie)

## 주요 기능

- 마크다운
- 코드 하이라이팅
- Katex 문법
- 다크모드 (OS 환경설정과 연동)
- 태그 분류
- 시리즈 분류
- 반응형 웹
- SEO
- Utterance (댓글 위젯)

아래 단계를 따라서 여러분의 블로그를 시작하세요. 굉장히 쉬워요 😉.

## 1. Gatsby 사이트 생성

> 컴퓨터에 **node.js** 와 **gatsby-cli** 가 설치되어 있어야합니다.

```
$ npx gatsby new my-hoodie-blog https://github.com/devHudi/gatsby-starter-hoodie
```

## 2. 개발 서버 시작

```
$ cd my-hoodie-blog
$ npm run start
```

이제 localhost:8000 으로 여러분의 블로그를 접속할 수 있습니다.

## 3. Github 레포지토리 생성

Utterance 댓글 위젯은 **Github 이슈 시스템** 기반입니다. 따라서 각 블로그 별 Github 레포지토리가 필요합니다. 또한 여러분이 Github Pages 혹은 Netlify 로 블로그를 배포하길 원한다면, Github 레포지토리는 필수입니다.

만약 Github 레포지토리를 생성하는 법을 모른다면, [Github 공식 문서](https://docs.github.com/en/github/getting-started-with-github/create-a-repo) 를 참조하세요.

### 원격 레포지토리 등록

```
git remote add origin https://github.com/{YOUR_GITHUB_NAME}/{YOUR_REPOSITORY_NAME}
```

## 4. blog-config.js 작성

```javascript
module.exports = {
  title: "MY BLOG",
  description: "Hello, This is my blog",
  author: "YOUR NAME",
  siteUrl: "https://myblog.com",
  links: {
    github: "https://github.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    etc: "https://www.google.com/",
  },
  utterances: {
    repo: "{YOUR_GITHUB_NAME}/{YOUR_REPOSITORY_NAME}",
    type: "pathname",
  },
}
```

gatsby-starter-hoodie 는 `blog-config.js` 라는 설정 파일을 제공합니다. 이 파일에서 블로그 정보, 작성자 프로필, Utterance 설정 등을 작성할 수 있습니다. 여러분 블로그 설정에 맞게 `blog-config.js` 를 설정하세요. 하지만, `utterances.type` 속성은 수정하지 않는 것을 권장합니다.

## 5. 포스트 추가

마크다운 포스트는 `contents/posts` 경로에 위치해있습니다. 해당 경로에서 글을 작성할 수 있습니다. [여기를 클릭하여](https://devHudi.github.io/gatsby-starter-hoodie/writing-guide) 더 자세한 글 작성 방법을 확인하세요.

## 6. 블로그 배포하기

### 6-1 Netlify 를 통해

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/alxshelepenok/gatsby-starter-lumen" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

[A Step-by-Step Guide: Gatsby on Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/) 문서를 참조하여, Netlify 를 Github 레포지토리와 연결할 수 있습니다. 이 과정은 어렵지 않습니다.

Github 레포지토리와 연결이 되었다면, Github 레포지토리에 변경사항이 발생할 때 마다 자동으로 여러분의 블로그에 배포됩니다.

### 6-2. Github Pages 를 통해

#### 상황 1

레포지토리 이름이 `{YOUR_GITHUB_NAME}.github.io` 형태일 경우, 아래 명령어를 실행해주세요.

```
$ npm run deploy-gh
```

#### 상황 2

레포지토리 이름이 `{YOUR_GITHUB_NAME}.github.io` 형태가 아닐 경우, 아래 명령어를 실행해주세요.

```
$ npm run deploy-gh-prefix-paths
```

만약 위와 같은 경우 `gatsby-config.js` 에서 `pathPrefix` 를 여러분의 레포지토리 이름으로 바꿔야합니다.

### 6-3. 다른 플랫폼

```
$ npm run build
```

위 명령어로 Gastby 웹사이트를 빌드할 수 있습니다. 빌드 결과물은 `/public` 에 저장됩니다. `/public` 디렉토리를 여러분이 사용하는 플랫폼의 배포 명령을 통해 배포해주세요.

## 7. 커스터마이징

### 프로젝트 구조

아래 프로젝트 구조를 참고하여 커스터마이징 할 수 있습니다 🙊.

```
├── node_modules
├── contents
│   └── posts // your articles are here
├── public // build outputs are here
└── src
    ├── assets
    │   └── theme // theme config is here
    ├── components
    │   └── Article
    │       └── Body
    │           └── StyledMarkdown
    │               └── index.jsx // markdown styles are here
    │   ...
    ├── fonts // webfonts are here
    ├── hooks
    ├── images
    ├── pages // page components are here
    ├── reducers
    ├── templates // post components are here
    └── utils
```
