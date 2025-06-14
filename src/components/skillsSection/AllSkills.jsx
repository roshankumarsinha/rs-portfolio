import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { GrGatsbyjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

export const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NodeJs",
    icon: DiNodejs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "C++",
    icon: SiCplusplus,
  },
  {
    skill: "GatsbyJS",
    icon: GrGatsbyjs,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
  {
    skill: "React Query",
    icon: SiReactquery,
  },
];

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
    {/*
      This div is used to center the skills section and provide a maximum width of 1200px.
      The gap-2 class adds a small space between each skill item.
      The relative class allows for absolute positioning of child elements if needed.
      max-w-[1200px] mx-auto: This sets a maximum width of 1200px for the container and centers it horizontally within the viewport.
      flex items-center justify-center: This makes the container a flexbox, aligning items in the center both vertically and horizontally.
    */}
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon />}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;