import { Document, Page, StyleSheet } from "@react-pdf/renderer"
import { Education, Experience, PersonalInfo } from "data/cv/model"
import * as React from "react"
import EducationSection from "./Education"
import Header from "./Header"
import ExperienceSection from "./Experience"
import { Box } from "./ui"
import theme from "./ui/theme"

const styles = StyleSheet.create({
  page: {
    padding: 14,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.md,
  },
})

interface Props {
  experience: Experience
  personalInfo: PersonalInfo
  education: Education
}

export default ({ experience, personalInfo, education }: Props) => {
  return (
    <Document
      title={`Resume of ${personalInfo.fullName} - ${personalInfo.title}`}
      author={personalInfo.fullName}
      subject="Resume"
      creator={personalInfo.fullName}
    >
      <Page size="A4" style={styles.page} wrap>
        <Header personalInfo={personalInfo} />
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <ExperienceSection width="65%" experience={experience} />
          <EducationSection width="30%" education={education} />
        </Box>
      </Page>
    </Document>
  )
}
