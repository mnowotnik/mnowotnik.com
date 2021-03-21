import * as React from "react"
import ReactPDF from "@react-pdf/renderer"
import theme from "./theme"
import Text from "./Text"

export default (
  props: ReactPDF.Style & ReactPDF.TextProps
): React.ReactNode => {
  return <Text {...{ ...props, fontFamily: theme.fonts.heading }} />
}
