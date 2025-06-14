import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { skills } from "./AllSkills";

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
    {/*
      This component displays a grid of skills for smaller screens.
      It uses a responsive grid layout with 4 columns on medium screens and 2 columns on small screens.
      The gap between the grid items is set to 12, and there is a margin of 12 on the top and bottom.
    */}
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;