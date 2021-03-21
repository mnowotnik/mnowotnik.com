import { Box, Flex, FlexProps, Spacer } from "@chakra-ui/react"
import { Education, Experience, PersonalInfo } from "data/cv/model"
import { Link } from "gatsby"
import React from "react"
import ExperienceSection from "./Experience"
import Header from "./Header"

interface Props extends FlexProps {
  experience: Experience
  personalInfo: PersonalInfo
  education: Education
}

const Cv = ({ experience, personalInfo, education, ...rest }: Props) => (
  <Box {...rest}>
    <Header mx="auto" maxW="mainWidth" personalInfo={personalInfo} marginBottom={14} />
    <Box mx="auto" as="main" maxW="mainWidth" width="100%">
      <ExperienceSection experience={experience} />
    </Box>
  </Box>
)
{
  /* <EducationSection width="30%" education={education} /> */
}

export default Cv
