import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react"
import Link from "components/ui/Link"
import { PersonalInfo } from "data/cv/model"
import React from "react"
import { ImFilePdf } from "react-icons/im"
import { MdEmail, MdMyLocation } from "react-icons/md"
import { VscCode } from "react-icons/vsc"

interface Props {
  personalInfo: PersonalInfo
}
const { useState } = React

export default ({ personalInfo, ...props }: Props & FlexProps) => {
  const pi = personalInfo

  const iconTextProps = { marginLeft: 3 }
  const IconContainer = ({ children }: { children: React.ReactNode }) => (
    <Flex
      flexDirection="row"
      alignSelf="flex-end"
      marginBottom={1}
      alignItems="center"
      fontSize="sm"
    >
      {children}
    </Flex>
  )
  const email = pi.email.split("").reverse().join("")
  const [state, setState] = useState({ email: pi.email })
  return (
    <Flex
      flexWrap={{ base: "wrap", md: "nowrap" }}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      {...props}
    >
      <Box mb={{ base: 10, md: "inherit" }} mt={{ base: 6, md: 4 }}>
        <Heading fontWeight={300} fontSize="5xl" mb={{ base: 12, md: 14 }}>
          {pi.fullName}
        </Heading>
        <Text fontSize="lg">{pi.summary}</Text>
      </Box>
      <Flex direction="column">
        <IconContainer>
          <Icon as={MdMyLocation} />
          <Text {...iconTextProps}>
            {pi.location.city}, {pi.location.country}
          </Text>
        </IconContainer>
        <IconContainer>
          <Icon as={MdEmail} />
          <Link
            onClick={() => {
              window.location.href = `mailto:${email}`
            }}
            onMouseOver={() => {
              setState({ email })
            }}
            style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
            href={`mailto:${state.email}`}
            {...iconTextProps}
          >
            {pi.email}
          </Link>
        </IconContainer>
        <IconContainer>
          <Icon as={VscCode} />
          <Link
            href="https://github.com/mnowotnik/mnowotnik.com"
            {...iconTextProps}
          >
            Get source code
          </Link>
        </IconContainer>
        <IconContainer>
          <Button
            fontSize="sm"
            color="black"
            leftIcon={<Icon as={ImFilePdf} />}
            variant="link"
          >
            <Link href="/static/cv.pdf">Get PDF</Link>
          </Button>
        </IconContainer>
      </Flex>
    </Flex>
  )
}
