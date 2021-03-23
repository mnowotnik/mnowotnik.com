import { Box, FlexProps } from "@chakra-ui/react"
import { Education, Experience, PersonalInfo } from "data/cv/model"
import React from "react"
import ExperienceSection from "./Experience"
import Header from "./Header"

interface Props extends FlexProps {
  experience: Experience
  personalInfo: PersonalInfo
  education: Education
}

const Resume = ({ experience, personalInfo, education, ...rest }: Props) => (
  <Box maxW="articleWidth" {...rest} mx="auto">
    <Header personalInfo={personalInfo} marginBottom={8} />
    <Box>
      <ExperienceSection experience={experience} />
    </Box>
  </Box>
)
export default Resume
