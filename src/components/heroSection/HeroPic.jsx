import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="/images/me.png"
        loading="lazy"
        alt="Roshan Sinha"
        className="max-h-[450px] w-auto"
      />

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
      {/* There are two overlapping hexagons behind the image that spin slowly and pulse. */}
      {/* absolute:	Positions hexagons behind the image layer
          -z-10:	Pushes the hexagon behind everything visually
          animate-pulse:	Creates a pulsing glow effect */}
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange blur-md animate-[spin_30s_linear_infinite]" />
        {/* animate-[spin_XXs_linear_infinite]:	Slow, infinite spinning using custom animation duration */}
      </div>
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;