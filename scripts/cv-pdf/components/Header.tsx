import ReactPDF from "@react-pdf/renderer"
import { PersonalInfo } from "data/cv/model"
import * as React from "react"
import { Box, Text } from "./ui"
import Icon from "./ui/Icon"
import Link from "./ui/Link"

export default (props: { personalInfo: PersonalInfo }) => {
  const pi = props.personalInfo

  const LocationIcon = <Icon fill="black" library="md" type="MdMyLocation" />
  const CodeIcon = <Icon fill="black" library="vsc" type="VscCode" />
  const EmailIcon = <Icon fill="black" library="md" type="MdEmail" />

  const IconContainer = ({ children }: { children: React.ReactNode }) => (
    <Box
      flexDirection="row"
      alignSelf="flex-end"
      marginBottom={2}
      alignItems="center"
    >
      {children}
    </Box>
  )

  const iconTextProps = { marginLeft: 7 }

  return (
    <Box marginBottom={16} flexDirection="row" justifyContent="space-between">
      <Box>
        <Text marginBottom={12} fontSize="xl">
          {pi.fullName}
        </Text>
        <Text width="70%" fontSize="md">
          {pi.summary}
        </Text>
      </Box>
      <Box>
        <IconContainer>
          {LocationIcon}
          <Text {...iconTextProps}>
            {pi.location.city}, {pi.location.country}
          </Text>
        </IconContainer>
        <IconContainer>
          {EmailIcon}
          <Link src={`mailto:${pi.email}`} {...iconTextProps}>
            {pi.email}
          </Link>
        </IconContainer>
        <IconContainer>
          {CodeIcon}
          <Link
            src="https://github.com/mnowotnik/mnowotnik.com"
            {...iconTextProps}
          >
            Get source code
          </Link>
        </IconContainer>
      </Box>
    </Box>
  )
}
