import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { tools } from "./AllTools";

const AllToolsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {tools.map((item, index) => {
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
            <p className="text-center mt-4">{item.tool}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllToolsSM;