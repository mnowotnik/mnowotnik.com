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
  TextProps,
  Tooltip,
} from "@chakra-ui/react"
import Link from "components/ui/Link"

const Separator = (props: TextProps) => (
  <Text marginX={4} {...props}>
    |
  </Text>
)

const JobSkills = ({ skills, ...props }: { skills: Skill[] } & BoxProps) => {
  const space = { base: 1, md: 2 }
  const fsizes = { base: "xs", md: "sm" }
  return (
    <Flex {...props}>
      {skills.map((s, idx) => (
        <Box
          key={idx}
          borderRadius={1.5}
          border={0.5}
          borderColor="verylightgray"
          color="dim"
          marginX={space}
          paddingX={space}
          paddingY={{ base: 0.5, md: 1 }}
          justifyContent="center"
        >
          {s.link == null ? (
            <Box href={s.link} fontSize={fsizes}>
              {s.name}
            </Box>
          ) : (
            <Link href={s.link} fontSize={fsizes}>
              <Tooltip label={s.tooltip}>{s.name}</Tooltip>
            </Link>
          )}
        </Box>
      ))}
    </Flex>
  )
}

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

  let $jobInfo = null
  if (job.roles && job.roles.length > 1) {
    $jobInfo = (
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
            <Text marginX={1} />
            <Text whiteSpace="nowrap">{role.title}</Text>
          </>
        ))}
      </Grid>
    )
  }
  return (
    <Box>
      <Box>
        <Flex
          marginBottom={1}
          fontSize={{ base: "xl", md: "2xl" }}
          flexDirection="row"
        >
          <Text marginRight={4}>❯</Text>
          <Text fontWeight="light" fontFamily="Work Sans">
            {job.title}
          </Text>
        </Flex>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Link href={job.company.link}>{job.company.name}</Link>
          <Separator display={{ base: "none", md: "block" }} />
          <DateRange range={job.period} format="year-mon" />
          <Separator display={{ base: "none", md: "block" }} />
          <Text color="dim" fontSize={{ base: "xs", md: "initial" }}>
            {job.location.city}, {job.location.countryCode}
          </Text>
        </Flex>
        {$jobInfo}
      </Box>
      <Text textAlign={{ base: "justify", md: "initial" }}>
        {job.description}
      </Text>
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
