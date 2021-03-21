import { Experience, Job, Skill } from "data/cv/model"
import React from "react"
import DateRange from "./DateRange"
import {
  Box,
  BoxProps,
  Flex,
  Grid,
  GridItem,
  Text,
  Tooltip,
} from "@chakra-ui/react"
import Link from "components/ui/Link"

const Separator = () => <Text marginX={4}>|</Text>

const JobSkills = ({ skills, ...props }: { skills: Skill[] } & BoxProps) => (
  <Flex {...props}>
    {skills.map((s, idx) => (
      <Box
        key={idx}
        borderRadius={1.5}
        border={0.5}
        borderColor="verylightgray"
        color="dim"
        marginX={2}
        paddingX={2}
        paddingY={2}
        justifyContent="center"
      >
        {s.link == null ? (
          <Box href={s.link} fontSize="sm">
            {s.name}
          </Box>
        ) : (
          <Link href={s.link} fontSize="sm">
            <Tooltip label={s.tooltip} aira-label="A tooltip">
              {s.name}
            </Tooltip>
          </Link>
        )}
      </Box>
    ))}
  </Flex>
)

const JobView = ({ job }: { job: Job }) => {
  const $jobSkills = (
    <JobSkills
      skills={job.skills}
      flexWrap="wrap"
      flex={1}
      flexDirection="row"
      marginTop={3}
      marginBottom={8}
    />
  )

  let $jobInfo
  if (job.roles && job.roles.length > 1) {
    $jobInfo = (
      <>
        <Flex>
          <DateRange range={job.period} format="year-mon" />
          <Separator />
          <Link href={job.company.link}>{job.company.name}</Link>
          <Separator />
          <Text>
            {job.location.city}, {job.location.countryCode}
          </Text>
        </Flex>
        <Grid
          templateRows="repeat(2,min-content)"
          templateColumns="repeat(3,min-content)"
          fontSize="sm"
          color="gray.600"
          marginBottom={2}
        >
          {job.roles.map(role => (
            <>
              <DateRange
                whiteSpace="nowrap"
                range={role.period}
                format="year-mon"
              />
              <Text marginX={1}/>
              <Text whiteSpace="nowrap">{role.title}</Text>
            </>
          ))}
        </Grid>
      </>
    )
  } else {
    $jobInfo = (
      <Flex flexDirection="row" marginBottom={2}>
        <DateRange range={job.period} format="year-mon" />
        <Separator />
        <Link href={job.company.link}>{job.company.name}</Link>
        <Separator />
        <Text>
          {job.location.city}, {job.location.countryCode}
        </Text>
      </Flex>
    )
  }

  return (
    <Box>
      <Box>
        <Flex marginBottom={1} fontSize="2xl" flexDirection="row">
          <Text marginRight={4}>❯</Text>
          <Text fontWeight="light" fontFamily="Work Sans">
            {job.title}
          </Text>
        </Flex>
        {$jobInfo}
      </Box>
      <Text>{job.description}</Text>
      {$jobSkills}
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
      <Text mb={4} fontSize="2xl">
        {"Professional Experience".toUpperCase()}
      </Text>
      {$jobs}
    </Box>
  )
}
