import React from "react"
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="fun_javascript"
      dangerouslySetInnerHTML={{
        __html: `0`,
      }}
    />,
  ])
}
