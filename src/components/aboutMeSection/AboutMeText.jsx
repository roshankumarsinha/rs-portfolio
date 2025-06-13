import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <div>
        <p>
          I'm a results-driven <b>Senior Software Engineer</b> with over 4 years of experience designing, building, and optimizing scalable web applications using
          modern technologies like <b>React, TypeScript, Node.js, GraphQL, Redux-Saga, and React Query</b>. I specialize in crafting clean, maintainable code with
          a strong focus on <b>performance, user experience, and team collaboration.</b>
        </p>
        <p>
          Over the years, I've led impactful projects such as developing <b>intelligent search systems using Algolia</b>, migrating complex codebases from <b>JavaScript to TypeScript</b> to
          improve type safety, and building <b>login and registration systems</b> that integrate seamlessly with <b>analytics and A/B testing platforms</b> like Google Analytics, GTM, and StatSig.
        </p>
        <p>
          As a passionate advocate for clean architecture and code quality, I've implemented <b>end-to-end testing using Playwright/Cypress</b>, strengthened unit testing with Jest/Vitest, and
          significantly reduced production issues. I'm experienced with <b>content-driven platforms (Contentful, Gatsby)</b> and improving SEO and discoverability through code and tooling optimizations.
        </p>
        <p>
          In addition to engineering, I actively mentor junior developers and contribute to the team’s growth through pair programming, code reviews, and knowledge sharing.
        </p>
        <p>📈 Outside of engineering, I help professionals with:</p>
        <ul className="list-disc ml-6">
          <li>Resume Writing</li>
          <li>Interview Preparation</li>
          <li>Career Development Coaching</li>
        </ul>
        I’m passionate about empowering others to grow their careers while continuing to advance my own through continuous learning and impactful engineering work.
        Let’s connect and create something meaningful — whether it’s scalable code or career success.
      </div>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects" // TODO : This part needs to be added in future
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;