import { Text, TextProps } from "@chakra-ui/react"
import { DateRange } from "data/cv/model"
import * as React from "react"

type FormatType = "year" | "year-mon" | "year-month"

function makeSegment(
  range: DateRange,
  format: FormatType,
  end?: boolean
): string {
  if (end && range.end == null) {
    return "Present"
  }
  let part = range.start
  if (end) {
    part = range.end!
  }
  switch (format) {
    case "year":
      return `${part[0]}`
    case "year-mon":
      return `${part[0]} ${DateRange.monthStr(part, true)}`
    case "year-month":
      return `${part[0]} ${DateRange.monthStr(part, false)}`
  }
}

export default (
  props: { range: DateRange; format: FormatType } & TextProps
) => {
  const { range, format, ...style } = props
  return (
    <Text {...style}>
      {makeSegment(range, format)} - {makeSegment(range, format, true)}
    </Text>
  )
}
