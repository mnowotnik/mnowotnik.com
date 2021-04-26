import * as React from "react"
import ReactPDF, { Text } from "@react-pdf/renderer"
import { Style } from "@react-pdf/types"
import theme, { ThemeableProps } from "./theme"

export type TextProps = Style & ReactPDF.TextProps & ThemeableProps

export default (props: TextProps): React.ReactElement => {
  const { wrap, debug, children, fixed, minPresenceAhead, ...style } = props
  const _break = props["break"]

  return (
    <Text
      wrap={wrap}
      debug={debug}
      style={{
        ...theme.applyTheme(style),
      }}
      break={_break}
      fixed={fixed}
      minPresenceAhead={minPresenceAhead}
    >
      {children}
    </Text>
  )
}
