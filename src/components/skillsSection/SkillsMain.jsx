import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative">
      {/*
        max-w-[1200px] mx-auto: This sets a maximum width of 1200px for the container and centers it horizontally within the viewport.
        min-h-[600px]: This sets a minimum height of 600px for the container, ensuring it has enough vertical space.
        relative: This sets the position of the container to relative, allowing for absolute positioning of child elements within it.
      */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
        {/*
          Skills for larger screens
          bottom-[50px] absolute: This positions the element absolutely, 50 pixels from the bottom of its nearest positioned ancestor.
          left-[50%] -translate-x-[50%]: This centers the element horizontally by moving it 50% to the left from its current position.
          sm:hidden lg:block: This hides the element on small screens and shows it on large screens.
        */}
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
        {/*
          Skills for smaller screens
          sm:block lg:hidden: This shows the element on small screens and hides it on large screens.
        */}
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;