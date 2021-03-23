import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"
import Link from "components/ui/Link"
import React from "react"

const { useState, useEffect } = React

enum TargetText {
  initial,
  siteName,
  myName,
}

const Logo = () => {
  const myName = "Michał Nowotnik"
  const siteName = "mnowotnik.com"
  const [state, setState] = useState({
    text: siteName,
    targetTextType: TargetText.initial,
    currentTextType: TargetText.siteName,
  })

  useEffect(() => {
    if (state.targetTextType === TargetText.initial) {
      return
    }
    const [t, ctt, ttt] = [
      state.text,
      state.currentTextType,
      state.targetTextType,
    ]
    let timeout: NodeJS.Timeout
    if (ttt == TargetText.myName) {
      timeout = setTimeout(() => {
        if (ctt == TargetText.siteName && t.length > 0) {
          setState(state => ({ ...state, text: t.substring(0, t.length - 1) }))
        } else {
          setState(state => ({
            ...state,
            currentTextType: TargetText.myName,
            text: myName.substring(0, Math.min(t.length + 1, myName.length)),
          }))
        }
      }, 50)
    } else if (ttt == TargetText.siteName) {
      timeout = setTimeout(() => {
        if (ctt == TargetText.myName && t.length > 0) {
          setState(state => ({ ...state, text: t.substring(0, t.length - 1) }))
        } else {
          setState(state => ({
            ...state,
            currentTextType: TargetText.siteName,
            text: siteName.substring(
              0,
              Math.min(t.length + 1, siteName.length)
            ),
          }))
        }
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [state.targetTextType, state.text])
  return (
    <Link
      href="/"
      color="white"
      whiteSpace="nowrap"
      fontFamily="mono"
      overflow="hidden"
      minWidth={44}
      style={{
        textDecoration: "none",
      }}
      onMouseEnter={() =>
        setState({ ...state, targetTextType: TargetText.myName })
      }
      onMouseLeave={() =>
        setState({ ...state, targetTextType: TargetText.siteName })
      }
    >
      {"❯ "}
      <Text as="span" whiteSpace="nowrap">
        {state.text}
      </Text>
      <Text ml={1} as="span" whiteSpace="nowrap" color="dim">
        {"\u2588"}
      </Text>
    </Link>
  )
}

const Header = (props: FlexProps) => {
  return (
    <Box
      as="header"
      wrap="wrap"
      w="100%"
      mb={8}
      mx="auto"
      px={{ base: 4, md: 8 }}
      bgColor="black"
      {...props}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        height="60px"
        justify="space-between"
        alignItems="center"
      >
        <Logo />
      </Flex>
    </Box>
  )
}

export default Header
