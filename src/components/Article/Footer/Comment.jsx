import React from "react"
import { useSelector } from "react-redux"
import Giscus from "@giscus/react"

import { giscus } from "../../../../blog-config"

const Comment = () => {
  const { theme } = useSelector(state => state.theme)

  return (
    <Giscus
      id="comments"
      repo={giscus.repo}
      repoId={giscus.repoId}
      category={giscus.category}
      categoryId={giscus.categoryId}
      mapping={giscus.mapping}
      strict={giscus.strict}
      reactionsEnabled={giscus.reactionsEnabled}
      inputPosition={giscus.inputPosition}
      lang={giscus.lang}
      theme={theme === "light" ? "light" : "dark"}
      emitMetadata="0"
    />
  )
}

export default Comment
