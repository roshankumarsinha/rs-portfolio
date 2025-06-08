import SingleExperience from "./SingleExperience";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Cimpress Technology Pvt Ltd",
    date: "Jan 2023 - Present",
    responsibilities: [
      `Led development of the Multiple Design feature allowing uploads of different designs for separate quantities,
improving design flexibility and increasing user satisfaction by 25% using React, TypeScript.`,
      `Managed and mentored a team of 3 developers, overseeing sprint planning, code reviews, and driving timely
deliveries following Agile Scrum practices.`,
      `Built and ran several A/B tests on the Registration flow with Statstig, including a CoC-based auto-fill feature
that boosted form completion by 18%; implemented comprehensive validation using Zod.`,
      `Engineered end-to-end Login and Registration features using React, Node.js, JWT, Zod, React Query,
React-Hook-Form, with seamless integration of Google Analytics, GTM, and dataLayer for user behavior
tracking.`,
      `Implemented a Re-Order capability on the homepage, increasing repeat purchases by 22%; stack included
Node.js, React, GraphQL, Contentful.`,
      `Improved the Order Management System and Order Detail Page, resulting in a 30% drop in customer
support tickets; worked across both frontend and backend using React, Node.js, Contentful, Zendesk.`,
    ],
  },
  {
    role: "Software Engineer",
    company: "Cimpress Technology Pvt Ltd",
    date: "Aug 2021 - Dec 2022",
    responsibilities: [
      `Developed a high-performance Search and Auto-suggestion system using Algolia, including a custom
Algolia-Gatsby plugin, increasing product discoverability by 35% and reducing bounce rate.`,
      `Revamped the Website Navigation by restructuring components in Contentful and optimizing the codebase,
reducing DOM elements by 40% and boosting load performance and UX.`,
      `Mentored junior developers through code reviews, pair programming, and internal knowledge-sharing sessions to
elevate team productivity.`,
      `Implemented Safari-compatible Intelligent Tracking Prevention (ITP) using Express and cookies, improving
session tracking accuracy by 20%; deployed on AWS Lambda.`,
      `Automated Affiliate Marketing workflows via Webgains and Node.js, deployed using AWS Lambda,
streamlining the setup and reducing manual errors.`,
      `Developed comprehensive test coverage using Playwright and Cypress for E2E testing, and Jest/Vitest for unit
testing, reducing production issues by 45%.`,
    ],
  },
  {
    role: "Internship",
    company: "TakeUforward",
    date: "Apr 2021 - July 2021",
    responsibilities: [
      `Led the migration of a significant portion of the codebase from JavaScript to TypeScript, enhancing code quality
and maintainability. Introduced strong typing across modules, which reduced runtime errors by 25% and improved developer
productivity through better tooling support and early error detection during development.`,
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return  <SingleExperience key={index} experience={experience} />
      })}
    </div>
  );
};

export default AllExperiences;