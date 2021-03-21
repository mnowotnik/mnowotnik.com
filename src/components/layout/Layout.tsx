import theme from "@chakra-ui/gatsby-plugin/theme"
import { Box, BoxProps, Flex } from "@chakra-ui/react"
import "@fontsource/source-sans-pro"
import "@fontsource/source-sans-pro/600.css"
import "@fontsource/work-sans"
import "@fontsource/work-sans/300.css"
import "@fontsource/source-sans-pro/400-italic.css"
import "focus-visible/dist/focus-visible"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Transition from "./Transition"

const { useState, useEffect } = React

const Layout = ({
  children,
  location,
  ...props
}: { children: React.ReactNode } & BoxProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isReady, setReady] = useState(false)

  useEffect(() => {
    const waitForFonts = async () => {
      console.log(theme.fonts.bodyFont)
      console.log(theme.fonts.body)
      try {
        await document.fonts.load(`12px ${theme.fonts.bodyFont}`, "ł")
        await document.fonts.load(`12px ${theme.fonts.bodyFont}`)
      } catch (er) {
        //
      }
      setReady(true)
    }
    waitForFonts()
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <Flex direction="column" minHeight="100vh" height="100%">
      <Header />
      <Box maxW="100vw" overflow="hidden" position="relative">
        <Transition location={location}>{children}</Transition>
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
