---
title: "🤔 3. Writing Guide"
description: "How to write and add a post?"
date: 2021-05-03
update: 2021-05-03
tags:
  - hoodie
  - writing-guide
series: "Getting started your blog with gatsby-starter-hoodie"
---

## 1. Add a post

You can add posts by creating a new markdown document in the `contents/post` path.

### 1-1. Post file structure

There are two ways to add a new document. The first is to create a markdown file for a single document without a directory. If you are writing about JavaScript, you can create a `about-javascript.md` file in the `contents/posts` directory.

The second is to create a directory and create an `index.md` file in it. This method is useful when the document contains several additional files such as picture files.

Each file name or directory name becomes a unique address of the document and can be accessed as follows. `https://siteURL/about-javascript`.

### 1-2. Frontmatter

The Markdown document you create contains the document's metadata called frontmatter.

```
---
title: "🤔 3. Writing Guide"
description: "How to write and add a post?"
date: 2021-05-03
update: 2021-05-03
tags:
  - hoodie
  - writing-guide
series: "Getting started your blog with gatsby-starter-hoodie"
---
```

Above is the frontmatter of the document you are currently reading. Among them, title and date are required. It is recommended to enclose the string with spaces in quotation marks.

### 1-3. Writing markdown

If you have written a Frontmatter, you can write your markdown document under it. gatsby-starter-hoodie supports most Markdown syntax. To learn more about Markdown syntax, see the [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) documentation on GitHub.

## 2. Syntax Highlighting & Katex

### 2-1. Syntax Highlighting

Syntax highlighting based on Prism.JS is supported.

#### Examples

Javascript

```javascript
console.log("Hello, world!")
```

Python

```python
print("Hello, world!")
```

It supports a wider variety of other languages. Check it out on the [Prism.js website](https://prismjs.com/).

### 2-2. Katex

It supports Katex syntax, you can easily express complex formulas.

#### Inline mode

$$E = m c^{2}$$

#### Block mode

$$
\int_{0}^{\infty} f(x) dx
$$

## 3. Add images to a post

You can easily embed images using relative paths. It is easy to manage documents containing images by creating a directory.

![](sample-image.jpg)

Images are loaded with Lazy Loading, so you can secure fast document loading speed.

> ⚠ The extension of the file must be set to lowercase.

## 4. Tagging

![](tag-example.jpg)

You can classify and search documents by tag set in Frontmatter. All tags you set can be viewed and searched in `https://siteUrl/tags`.

## 5. Series

![](series-example.jpg)

You can publish multiple related documents in a series. The series set in Frontmatter is grouped together and shown at the top of the document. This can be useful for serialized documents with an order. Series documents are displayed in ascending order of creation date.

The current document is also set in a series called `Getting started your blog with gatsby-starter-hoodie`.
