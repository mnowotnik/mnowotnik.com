require("module-alias/register")
import * as path from "path"
import * as React from "react"
import ReactPDF from "@react-pdf/renderer"
import { education, experience, personalInfo } from "data/cv/data"
import Resume from "./components/Resume"
import theme from "./components/ui/theme"

theme.registerFonts()
const defaultPath = path.resolve(__dirname, "../../resume.pdf")

ReactPDF.render(
  <Resume education={education} experience={experience} personalInfo={personalInfo} />,
  defaultPath
)
