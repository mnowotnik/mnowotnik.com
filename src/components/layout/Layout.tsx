import theme from "@chakra-ui/gatsby-plugin/theme"
import { Box, BoxProps, Flex } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Transition from "./Transition"

const { useState, useEffect } = React

//TODO: add 'location' interface
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

  // const [isReady, setReady] = useState(false)

  // useEffect(() => {
  //   const waitForFonts = async () => {
  //     try {
  //       await document.fonts.load(`12px ${theme.fonts.bodyFont}`, "ł")
  //       await document.fonts.load(`12px ${theme.fonts.bodyFont}`)
  //     } catch (er) {
  //       //
  //     }
  //     setReady(true)
  //   }
  //   waitForFonts()
  // }, [])

  // TODO try to flatten nested divs?
  return (
    <Flex direction="column" minHeight="100vh" height="100%">
      <Header />
      <Box
        as="main"
        mx="auto"
        px={2}
        width="100%"
        maxW={{ xl: "1200px" }}
        overflow="hidden"
        position="relative"
      >
        {children}
        {/* <Transition location={location}>{children}</Transition> */}
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
