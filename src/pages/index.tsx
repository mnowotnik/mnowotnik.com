import React from "react"
import Cv from "components/cv/Cv"
import { education, experience, personalInfo } from "data/cv/data"

export default () => {
  const props = {
    education,
    experience,
    personalInfo,
  }
  return <Cv {...props} />
}
