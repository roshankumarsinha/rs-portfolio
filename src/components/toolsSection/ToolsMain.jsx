import AllTools from "./AllTools";
import AllToolsSM from "./AllToolsSM";
import ToolsText from "./ToolsText";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const ToolsMain = () => {
  return (
    <div id="tools">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ToolsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllTools />
        </div>
        <div className="sm:block lg:hidden">
          <AllToolsSM />
        </div>
      </div>
    </div>
  );
};

export default ToolsMain;