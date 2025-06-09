import SingleTool from "./SingleTool";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiAlgolia } from "react-icons/si";
import { SiContentful } from "react-icons/si";
import { SiCrowdin } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiHubspot } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiSentry } from "react-icons/si";
import { SiZendesk } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { FaToggleOn } from "react-icons/fa";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

export const tools = [
  {
    tool: "Jest",
    icon: SiJest,
  },
  {
    tool: "Cypress",
    icon: SiCypress,
  },
  {
    tool: "Algolia",
    icon: SiAlgolia,
  },
  {
    tool: "Contentful",
    icon: SiContentful,
  },
  {
    tool: "Crowdin",
    icon: SiCrowdin,
  },
  {
    tool: "Postman",
    icon: SiPostman,
  },
  {
    tool: "HubSpot",
    icon: SiHubspot,
  },
  {
    tool: "AWS Lamda",
    icon: FaAws,
  },
  {
    tool: "Sentry",
    icon: SiSentry,
  },
  {
    tool: "Zendesk",
    icon: SiZendesk,
  },
  {
    tool: "Zod",
    icon: SiZod,
  },
  {
    tool: "StatSig",
    icon: FaToggleOn,
  },
];

const AllTools = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {tools.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleTool
              key={index}
              text={item.tool}
              imgSvg={<item.icon />}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllTools;