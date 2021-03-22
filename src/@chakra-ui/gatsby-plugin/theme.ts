import "@fontsource/source-sans-pro"
import "@fontsource/source-sans-pro/600.css"
import "@fontsource/work-sans"
import "@fontsource/work-sans/300.css"
import "@fontsource/source-sans-pro/400-italic.css"
// fix accessibility focus outline
import "focus-visible/dist/focus-visible"
import { extendTheme, theme } from "@chakra-ui/react"

const defaultFontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
}

const fontSizes = Object.fromEntries(
  Object.keys(defaultFontSizes)
    .map((val, idx, arr) => {
      if (val == "9xl") {
        return []
      }
      return [
        val,
        defaultFontSizes[arr[idx + 1] as keyof typeof defaultFontSizes],
      ]
    })
    .filter(val => val.length != 0)
)

fontSizes["9xl"] = "9rem"

const bodyFont = "Source Sans Pro"
const headingFont = "Work Sans"

export default extendTheme({
  fontSizes,
  colors: {
    dim: "#5f5f5f",
    verylightgray: "#d9d9d9",
  },
  fonts: {
    heading: `${headingFont},${theme.fonts.heading}`,
    body: `${bodyFont},${theme.fonts.body}`,
    bodyFont,
  },
  fontWeights: {
    light: 300,
  },
  lineHeights: {
    base: "1.6",
  },
  sizes: {
    articleWidth: "44rem",
  },
  styles: {
    global: {
      ":root": {
        "--bg-color": "#fff"
      },
      body: {
        fontSize: "md",
      },
    },
  },
})
