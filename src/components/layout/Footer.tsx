import { Box } from "@chakra-ui/react"
import React from "react"

export default () => (
  <Box
    as="footer"
    w="100%"
    p={{ base: 4, md: 8 }}
    fontSize={{ base: "xs", md: "sm" }}
    bgColor="black"
    color="whiteAlpha.700"
  >
    © 2021 Michał Nowotnik. All rights reserved.
  </Box>
)
