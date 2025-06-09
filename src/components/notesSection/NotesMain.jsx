import NotesText from "./NotesText";
import SingleNote from "./SingleNote";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const notes = [
  {
    name: "DSA Notes (C++)",
    taughtBy: "CodeHelp - by Babbar & takeUforward",
    align: "right",
    image: "/images/dsa.png",
    link: "https://github.com/roshankumarsinha/DSA",
  },
  {
    name: "Namaste Frontend System Design",
    taughtBy: "Akshay Saini",
    align: "left",
    image: "/images/frontendDesign.png",
    link: "https://github.com/roshankumarsinha/namaste-frontend-system-design",
  },
  {
    name: "Namaste React (in progress)",
    taughtBy: "Akshay Saini",
    align: "right",
    image: "/images/react.png",
    link: "#",
  },
  {
    name: "Namaste JavaScript (in progress)",
    taughtBy: "Akshay Saini",
    align: "left",
    image: "/images/javascript.png",
    link: "#",
  },
];

const NotesMain = () => {
  return (
    <div id="notes" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <NotesText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {notes.map((note, index) => {
          return (
            <SingleNote
              key={index}
              name={note.name}
              taughtBy={note.taughtBy}
              link={note.link}
              align={note.align}
              image={note.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotesMain;