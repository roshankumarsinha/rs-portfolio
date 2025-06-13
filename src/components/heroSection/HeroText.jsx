import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      {/*
        flex-col: Arranges children in a column
        gap-4: Adds a gap of 1rem between each child element
        h-full: Sets the height to 100% of the parent container
        justify-center: Centers children vertically within the container
        md:text-left: Aligns text to the left on medium screens and larger
        sm:text-center: Centers text on small screens
      */}
      <motion.h2
        variants={fadeIn("down", 0.2)}  // Fade-in effect from the top, with a delay of 0.2 seconds
        initial="hidden"  // Elements start off hidden.
        whileInView="show"  // They animate to "show" when they come into view.
        viewport={{ once: false, amount: 0 }} // Triggers animation every time the element enters the viewport (can repeat)
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Web Developer and Full Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Roshan <br className="sm:hidden md:block" />
        Sinha
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Web Developer and Full Stack Developer <br /> with 4+ years of
        experience.
      </motion.p>
    </div>
  );
};

export default HeroText;