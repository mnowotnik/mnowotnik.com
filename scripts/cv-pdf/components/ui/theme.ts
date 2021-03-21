import { border, color } from "@chakra-ui/react"
import ReactPDF, { Font } from "@react-pdf/renderer"
import { Style } from "@react-pdf/types"

const googleFontsOfl = "https://github.com/google/fonts/raw/main/ofl/"

// TODO cache in /tmp, make more intelligent

const makeGoogleFontLink = (
  fontName: string,
  weight: string,
  infix?: string
): string => {
  if (infix != null) {
    return `${googleFontsOfl}${fontName.toLowerCase()}/${infix}/${fontName}-${weight}.ttf`
  }
  return `${googleFontsOfl}${fontName.toLowerCase()}/${fontName}-${weight}.ttf`
}

const fontSizes = {
  xl: 27,
  lg: 18,
  md: 11,
  sm: 9,
  xs: 8,
}

const WeightMapping = {
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
}

interface IFont {
  family: string
  infix?: string
  weights: (keyof typeof WeightMapping)[]
}

const registerFonts = () => {
  fontsToRegister.map(f => {
    f.weights.map(w => {
      const wS = WeightMapping[w]
      const src = makeGoogleFontLink(f.family, wS, f.infix)
      console.log(`Getting font ${src}`)
      let family = f.family
      // react-pdf doesn't seem to respect multiple fontWeights per family
      if (w != 400) {
        family = `${family}-${w}`
      }
      Font.register({
        src,
        family,
        fontStyle: "normal",
        fontWeight: w,
      })
    })
  })

  Font.registerHyphenationCallback(word => {
    return [word]
  })
}

const fontsToRegister: IFont[] = [
  {
    family: "SourceSansPro",
    weights: [400, 300],
  },
  {
    family: "JetBrainsMono",
    infix: "static",
    weights: [400],
  },
]

const fontVariants = {
  sansSerifLight: {
    family: "SourceSansPro-300",
  },
  sansSerifRegular: {
    family: "SourceSansPro",
  },
}

const colors = {
  dim: "#5f5f5f",
  verylightgray: "#d9d9d9",
}

type ColorType = string | keyof typeof colors

export interface ThemeableProps {
  color?: ColorType
  borderColor?: ColorType
  backgroundColor?: ColorType
  fontSize?: keyof typeof fontSizes | number
  fontVariant?: keyof typeof fontVariants
}

function applyTheme(props: ThemeableProps & Style): Style {
  let { color, borderColor, backgroundColor, fontSize, fontFamily } = props

  const { fontVariant } = props

  if (fontSize != null && typeof fontSize === "string") {
    fontSize = theme.fontSizes[fontSize]
  }
  if (fontVariant != null) {
    fontFamily = theme.fontVariants[fontVariant].family
  }
  
  const colors = theme.colors as any

  color = mapColor(color, colors)
  borderColor = mapColor(borderColor, colors)
  backgroundColor = mapColor(backgroundColor, colors)

  return { ...props, color, borderColor, backgroundColor, fontSize, fontFamily }
}

function mapColor(colorKey: string | undefined, clrs: any) {
  if (colorKey != null && clrs[colorKey] != null) {
    return clrs[colorKey]
  }
  return colorKey
}

const theme = {
  fonts: {
    body: "SourceSansPro-300",
    heading: "Merriweather",
  },
  colors,
  fontSizes,
  fontVariants,
  registerFonts,
  applyTheme,
}

export default theme
