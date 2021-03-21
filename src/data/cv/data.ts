import {
  Job,
  DateRange,
  Skill,
  Company,
  Location,
  PersonalInfo,
  Role,
  Education,
  University,
  Experience,
} from "./model"

export interface JobTemp {
  title?: string
  roles?: Role[]
  location: Location
  description: string
  period?: DateRange
  company: Company
  skills: Skill[]
}

const warsaw: Location = {
  city: "Warsaw",
  country: "Poland",
  countryCode: "PL",
}

const summary =
  "Reflective software engineer with analytical mind. " +
  "Slow thinker - tends to analyze a problem in-depth before taking action. " +
  "Likes to learn and teach others.\n" +
  "Looking for technology or research oriented company to " +
  "work on challenging projects."

export const personalInfo: PersonalInfo = {
  firstName: "Michał",
  lastName: "Nowotnik",
  fullName: "Michał Nowotnik",
  title: "Software Developer",
  location: warsaw,
  email: "michal@mnowotnik.com",
  summary: summary,
}

const dbmsTooltip = "A database management system"
const python: Skill = { name: "Python", strength: 5 / 5 }
const java: Skill = { name: "Java", strength: 5 / 5 }
const javascript: Skill = { name: "Javascript", strength: 4 / 5 }
const golang: Skill = { name: "Go", strength: 4 / 5 }
const docker: Skill = { name: "Docker", strength: 3 / 5 }
const git: Skill = { name: "Git", strength: 4 / 5 }
const css: Skill = { name: "CSS", strength: 2 / 5 }
const html: Skill = { name: "HTML", strength: 2 / 5 }
const kafka: Skill = {
  name: "Kafka",
  strength: 2 / 5,
  tooltip: "message streaming platform",
  link: "https://kubernetes.io/",
}
const cassandra: Skill = {
  name: "Cassandra",
  strength: 2 / 5,
  link: "https://cassandra.apache.org/",
  tooltip: "distributed, NoSQL database management system"
}
const postgresql: Skill = {
  name: "PostgreSQL",
  strength: 3 / 5,
  link: "https://www.postgresql.org/",
  tooltip: dbmsTooltip
}
const mysql: Skill = {
  name: "MySQL",
  strength: 3 / 5,
  link: "https://www.mysql.com/",
  tooltip: dbmsTooltip
}
const django: Skill = {
  name: "Django",
  tooltip: "Python web framework",
  strength: 3 / 5,
  link: "https://docs.djangoproject.com/",
}
const sql: Skill = {
  name: "SQL",
  tooltip: "Query language for databases",
  strength: 3 / 5,
  link: "https://en.wikipedia.org/wiki/SQL",
}
const rabbitmq: Skill = {
  name: "RabbitMQ",
  tooltip: "message broker",
  strength: 2 / 5,
  link: "https://www.rabbitmq.com/",
}
const activemq: Skill = {
  name: "ActiveMQ",
  tooltip: "message broker",
  strength: 2 / 5,
  link: "http://activemq.apache.org/",
}
const kubernetes: Skill = {
  name: "Kubernetes",
  tooltip: "Container-orchestration system",
  link: "https://kubernetes.io/",
  strength: 3 / 5,
}
const flask: Skill = {
  name: "Flask",
  tooltip: "lightweight Python web application framework",
  link: "https://palletsprojects.com/p/flask/",
  strength: 3 / 5,
}
const cpp: Skill = {
  name: "c++",
  strength: 3 / 5,
}
const spring: Skill = {
  name: "Spring",
  tooltip: "Java web application framework",
  link: "https://spring.io/",
  strength: 4 / 5,
}
const angular: Skill = {
  name: "Angular",
  tooltip: "Javascript single page application framework",
  link: "https://angular.io/",
  strength: 3 / 5,
}
const react: Skill = {
  name: "React",
  tooltip: "Javascript single page application framework",
  link: "https://reactjs.org/",
  strength: 4 / 5,
}
const backbonejs: Skill = {
  name: "Backbone.js",
  tooltip: "Javascript single page application framework",
  link: "https://backbonejs.org/",
  strength: 3 / 5,
}
const dockerCompose: Skill = {
  name: "docker-compose",
  tooltip: "a tool for defining and running multiple docker containers",
  strength: 4 / 5,
}
const teamcity: Skill = {
  name: "TeamCity",
  tooltip: "Continuous integration server",
  strength: 3 / 5,
  link: "https://www.jetbrains.com/teamcity/",
}

type CompanyId =
  | "onwelo"
  | "enigma"
  | "samsungrdpl"
  | "ibb"
  | "accenture"
  | "pwc_it_services"

const companies: Record<CompanyId, Company> = {
  onwelo: { name: "Onwelo", link: "https://onwelo.pl/" },
  enigma: {
    name: "Enigma Information Security Systems",
    link: "https://www.enigma.com.pl/",
  },
  samsungrdpl: {
    name: "Samsung R&D Institute Poland",
    link: "https://research.samsung.com/srpol",
  },
  ibb: {
    name: "Institute of Biochemistry and Biophysics PAN",
    link: "https://www.ibb.waw.pl/en",
  },
  accenture: {
    name: "Accenture",
    link: "https://www.accenture.com/gb-en",
  },
  pwc_it_services: {
    name: "PwC IT Services",
    link: "https://www.pwc.pl/pl/uslugi/customer-technology.html",
  },
}

const jobsArr: JobTemp[] = []

const pwc_desc =
  "Developed and maintained lending platform serving over " +
  "300k customers across seven countries. Assisted Solution Architect " +
  "in modernizing monolithic system and introducing " +
  "development guidelines. Extended third party solutions in order to provide unified " +
  "approaches to observability and configurability of microservices. " +
  "Created automated data pipeline jobs for Analytics department. " +
  "Conducted a small workshop about working in Linux environment."

jobsArr.push({
  title: "Senior Consultant",
  description: pwc_desc,
  period: new DateRange([2018, 4], null),
  location: warsaw,
  company: companies.pwc_it_services,
  skills: [java, spring, kubernetes, docker, python, sql],
})

const onwelo_desc =
  "Developed microservices in a Kubernetes-managed distributed system. " +
  "Worked closely with UX and Testing departments to ensure high product quality. " +
  "Created a microservice serving classification ML model. " +
  "Helped BI department by providing expertise and creating software tools."

jobsArr.push({
  title: "Java Developer",
  description: onwelo_desc,
  period: new DateRange([2017, 5], [2018, 3]),
  location: warsaw,
  company: companies.onwelo,
  skills: [java, python, javascript, kubernetes, sql],
})

const enigma_desc =
  "Maintained and developed various web services in Java and Python as a part of a complex " +
  "distributed system. Created a Django application serving Angular SPA."

jobsArr.push({
  description: enigma_desc,
  roles: [
    {
      title: "Senior Software Engineer",
      period: new DateRange([2017, 1], [2017, 4]),
    },
    {
      title: "Software Engineer",
      period: new DateRange([2016, 2], [2016, 12]),
    },
  ],
  location: warsaw,
  company: companies.enigma,
  skills: [
    java,
    spring,
    python,
    django,
    javascript,
    angular,
    cassandra,
    postgresql,
    activemq,
  ],
})

const samsungrgpl_desc =
  "Responsible for development of an interactive single page application " +
  "that served as a visual tool to edit graph-based specifications."

jobsArr.push({
  description: samsungrgpl_desc,
  title: "Software Developer Intern",
  period: new DateRange([2015, 9], [2015, 11]),
  location: warsaw,
  company: companies.samsungrdpl,
  skills: [python, django, javascript, backbonejs],
})

const ibb_desc =
  "Built an efficient natural language processing pipeline to parse the entire set of " +
  "PubMed article abstracts (over 22 milion)."

jobsArr.push({
  description: ibb_desc,
  title: "Software Developer Contractor",
  period: new DateRange([2015, 4], [2015, 7]),
  location: warsaw,
  company: companies.ibb,
  skills: [java, python, mysql],
})

const accenture_desc =
  "Was responsible for creating training materials for a programming course. " +
  "To automate test scoring, I designed and implemented a test scoring system. " +
  "It had an administrator panel and used Sharepoint REST API to evaluate tests and create downloadable reports. " +
  "This system had been in active use one year later."

jobsArr.push({
  description: accenture_desc,
  title: "IT Consultant Intern",
  period: new DateRange([2014, 9], [2014, 11]),
  location: warsaw,
  company: companies.accenture,
  skills: [java, javascript, html],
})

const jobs = jobsArr.map(job => {
  let { title, period, roles } = job
  if (roles != null) {
    const role = roles[0]
    title = role.title
    period = roles.reduce((p, c) => {
      return p.merge(c.period)
    }, DateRange.IDENTITY)
  } else if (period != null && title != null) {
    roles = [{ period, title }]
  } else {
    throw new Error(`Incorrectly defined job: ${job}`)
  }
  return { ...job, roles, title, period }
})

export const experience: Experience = {
  jobs,
}

const pw: University = {
  name: "Warsaw University of Technology",
  link: "https://www.pw.edu.pl/engpw",
}

const sggw: University = {
  name: "Warsaw University of Life Sciences",
  link: "https://www.sggw.pl/en/",
}

export const education: Education = {
  universityDegrees: [
    {
      title: "MSc",
      university: pw,
      period: [2018, 2021],
      major: "Computer Science",
    },
    {
      title: "BSc",
      university: pw,
      period: [2011, 2016],
      major: "Computer Science",
    },
    {
      title: "BSc",
      university: sggw,
      period: [2009, 2014],
      major: "Biotechnology",
    },
  ],
}
