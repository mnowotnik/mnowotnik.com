import * as React from "react"
//@ts-ignore
import { Path, Svg } from "@react-pdf/renderer"
import Md from "react-icons/md"
import Vsc from "react-icons/vsc"

type IconLibrary = "md" | "vsc"

interface Props {
  size?: number
  fill: string
  library: IconLibrary
  type: string
}

export default (props: Props) => {
  const { size = 12, fill, library, type, ...passing } = props
  let ComponentClass
  switch (library) {
    case "md":
      ComponentClass = Md[type as keyof typeof Md]
      break
    case "vsc":
      ComponentClass = Vsc[type as keyof typeof Vsc]
      break
  }

  const { children, ...svgProps } = ComponentClass({
    style: { width: size, height: size },
  }).props
  const pathProps = children[0].props

  return (
    <Svg {...svgProps.attr} width={size} height={size} fill={fill}>
      <Path {...pathProps} />
    </Svg>
  )
}
