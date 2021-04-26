import * as React from "react"
import ReactPDF, { View } from "@react-pdf/renderer"
import { Style } from "@react-pdf/types"
import theme, { ThemeableProps } from "./theme"

export type BoxProps = Style & ReactPDF.ViewProps & ThemeableProps

export default (props: BoxProps): React.ReactElement => {
  const { wrap, debug, children, fixed, minPresenceAhead, ...style } = props
  const _break = props["break"]
  // workaround for the "TypeError: node.props.render is not a function" bug
  if (props.render) {
    return (
      <View
        wrap={wrap}
        debug={debug}
        render={props.render}
        style={{
          ...theme.applyTheme(style),
        }}
        break={_break}
        fixed={fixed}
        minPresenceAhead={minPresenceAhead}
      >
        {children}
      </View>
    )
  }
  return (
    <View
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
    </View>
  )
}
