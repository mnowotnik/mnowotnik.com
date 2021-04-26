import * as React from "react"
import ReactPDF, { Link } from "@react-pdf/renderer"
import { Style } from "@react-pdf/types"
import theme, { ThemeableProps } from "./theme"

export type LinkProps = Style & ReactPDF.LinkProps & ThemeableProps

export default (props: LinkProps): React.ReactElement => {
  const {
    wrap,
    debug,
    src,
    children,
    fixed,
    minPresenceAhead,
    ...style
  } = props
  const _break = props["break"]
  return (
    <Link
      wrap={wrap}
      debug={debug}
      src={src}
      style={{
        ...theme.applyTheme(style),
      }}
      break={_break}
      fixed={fixed}
      minPresenceAhead={minPresenceAhead}
    >
      {children}
    </Link>
  )
}
