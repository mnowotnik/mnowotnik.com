import { Link as ChakraLink, LinkProps } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import React from "react"

export default function Link({ href, ...restProps }: LinkProps) {
  let src
  if (href?.startsWith("/") && !href?.endsWith(".pdf")) {
    src = { as: GatsbyLink, to: href }
  } else {
    src = { href }
  }

  return <ChakraLink {...src} {...restProps} />
}
