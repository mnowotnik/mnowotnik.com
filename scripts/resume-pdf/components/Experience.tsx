import { Experience, Job, Skill } from "data/cv/model"
import React from "react"
import ReactPDF from "@react-pdf/renderer"
import { Box, Text } from "./ui"
import { Style } from "@react-pdf/types"
import DateRange from "./DateRange"
import { BoxProps } from "./ui/Box"

interface JobViewProps {
  job: Job
}

const Separator = () => <Text marginHorizontal={4}>|</Text>

const JobSkills = ({ skills, ...props }: { skills: Skill[] } & BoxProps) => (
  <Box {...props}>
    {skills.map((s, idx) => (
      <Box
        key={idx}
        borderRadius={1.5}
        border={0.5}
        borderColor="verylightgray"
        color="dim"
        marginHorizontal={2}
        paddingHorizontal={2}
        paddingVertical={2}
        justifyContent="center"
      >
        <Text fontSize="sm">{s.name}</Text>
      </Box>
    ))}
  </Box>
)

const JobView = (props: JobViewProps & ReactPDF.ViewProps & Style) => {
  const job = props.job
  if (job.roles == null || job.period == null) {
    throw new Error("Assertion failed")
  }
  return (
    <Box>
      <Box>
        <Box marginBottom={1} fontSize="lg" flexDirection="row">
          <Text marginRight={4} fontFamily="JetBrainsMono">
            ❯
          </Text>
          <Text>{job.title}</Text>
        </Box>
        <Box
          flexDirection="row"
          marginBottom={2}
        >
          <DateRange range={job.period} format="year-mon" />
          <Separator />
          <Text>{job.company.name}</Text>
          <Separator />
          <Text>
            {job.location.city}, {job.location.countryCode}
          </Text>
        </Box>
      </Box>
      <Text>{job.description}</Text>
      <JobSkills
        skills={job.skills}
        flex={1}
        flexDirection="row"
        marginTop={3}
        marginBottom={8}
      />
    </Box>
  )
}

export default ({
  experience,
  ...props
}: { experience: Experience } & BoxProps): React.ReactElement => {
  const jobs = experience.jobs
  const $jobs = jobs.map((job, idx) => <JobView key={idx} job={job} />)
  return (
    <Box {...props}>
      <Text fontSize="lg">{"Professional Experience".toUpperCase()}</Text>
      {$jobs}
    </Box>
  )
}
