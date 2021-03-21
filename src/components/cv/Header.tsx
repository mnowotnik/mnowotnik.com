import {
  Box,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { PersonalInfo } from "data/cv/model"
import React from "react"
import { MdMyLocation, MdEmail } from "react-icons/md"
import { ImFilePdf } from "react-icons/im"
import { VscCode, VscFilePdf } from "react-icons/vsc"
import Link from "components/ui/Link"

interface Props {
  personalInfo: PersonalInfo
}

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
  return (
    <Flex flexDirection="row" justifyContent="space-between" {...props}>
      <Box>
        <Heading fontWeight={300} fontSize="3.6rem" mb={12}>
          {pi.fullName}
        </Heading>
        <Text w="100%">{pi.summary}</Text>
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
          <Link href={`mailto:${pi.email}`} {...iconTextProps}>
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
