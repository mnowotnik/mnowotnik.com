import * as React from "react"
import { Education, UniversityDegree } from "data/cv/model"
import { Text, Box } from "./ui"
import { BoxProps } from "./ui/Box"

const University = ({
  degree,
  ...props
}: { degree: UniversityDegree } & BoxProps) => (
  <Box {...props}>
    <Text fontSize="md">{degree.university.name}</Text>
    <Box fontSize="sm" flexDirection="row">
      <Text color="dim" marginRight={8}>
        {degree.period[0]} - {degree.period[1]}
      </Text>
      <Text>
        {degree.major}, {degree.title}
      </Text>
    </Box>
  </Box>
)

export default ({
  education,
  ...props
}: { education: Education } & BoxProps) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" marginBottom={7}>
        EDUCATION
      </Text>
      {education.universityDegrees.map(d => (
        <University
          degree={d}
          key={d.university.name + d.title}
          marginBottom={5}
        />
      ))}
    </Box>
  )
}
