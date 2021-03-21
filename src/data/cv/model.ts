export class DateRange {
  static MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  constructor(
    public start: [number, number],
    public end: [number, number] | null
  ) {}

  public static IDENTITY = new DateRange([0, 0], [0, 0])

  merge(other: DateRange): DateRange {
    if (other === DateRange.IDENTITY) {
      return this
    }
    if (this === DateRange.IDENTITY) {
      return other
    }
    let first: DateRange
    let second: DateRange
    if (this.start[0] == other.start[0]) {
      if (this.start[1] <= other.start[1]) {
        first = this
        second = other
      } else {
        first = other
        second = this
      }
    } else if (this.start[0] < other.start[0]) {
      first = this
      second = other
    } else {
      first = other
      second = this
    }
    DateRange.rangesContinuityCheck(first, second)

    return new DateRange(first.start, second.end)
  }

  static rangesContinuityCheck(first: DateRange, second: DateRange): void {
    if (first.end == null) {
      throw new Error("First date range is not constrained")
    }
    const firstEndDate = first.getEndDate()
    firstEndDate.setMonth(firstEndDate.getMonth() + 1)
    const secondStartDate = second.getStartDate()
    if (firstEndDate.getTime() < secondStartDate.getTime()) {
      throw new Error(
        `There is a gap between the end of a first range [${firstEndDate}]` +
          `and the start of a second range [${secondStartDate}]`
      )
    }
  }

  getStartDate(): Date {
    return new Date(this.start[0], this.start[1] - 1, 1)
  }

  getEndDate(): Date {
    if (this.end == null) {
      throw new Error("End part of range is null")
    }
    return new Date(this.end[0], this.end[1] - 1, 1)
  }

  startMonthStrShort(): string {
    return DateRange.monthStr(this.start, true)
  }

  endMonthStrShort(): string | null {
    if (this.end === null) {
      return null
    }
    return DateRange.monthStr(this.end, true)
  }

  public static monthStr(part: [number, number], shortened = false): string {
    if (shortened) {
      return this.MONTH_NAMES[part[1] - 1].slice(0, 3)
    }
    return this.MONTH_NAMES[part[1] - 1]
  }

  startYear(): number {
    return this.start[0]
  }

  endYear(): number | null {
    if (this.end !== null) {
      return this.end[0]
    }
    return null
  }
}

export interface Skill {
  name: string
  strength: number
  tooltip?: string
  link?: string
}

export interface Company {
  name: string
  link?: string
}

export interface Location {
  city: string
  country: string
  countryCode: string
}

export interface Role {
  title: string
  period: DateRange
}

export interface Job {
  title: string
  roles: Role[]
  location: Location
  description: string
  period: DateRange
  company: Company
  skills: Skill[]
}

export interface Experience {
  jobs: Job[]
}

export interface PersonalInfo {
  firstName: string
  lastName: string
  fullName: string
  title: string
  location: Location
  email: string
  summary: string
}

type Degree = "BSc" | "MSc"

export interface University {
  name: string
  link: string
}

export interface UniversityDegree {
  title: Degree
  university: University
  period: [number, number]
  major: string
}

export interface Education {
  universityDegrees: UniversityDegree[]
}
