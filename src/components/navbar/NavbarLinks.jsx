import { Link } from "react-scroll";

export const links = [
  { section: "About Me", link: "about" },
  { section: "Skills", link: "skills" },
  { section: "Tools", link: "tools" },
  { section: "Experience", link: "experience" },
  { section: "Notes", link: "notes" },
  { section: "Contact", link: "contact" },
];

const NavbarLinks = ({ toggleMenu }) => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[105%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4 sm:border sm:border-cyan sm:rounded-lg lg:rounded-none sm:shadow-cyanShadow lg:shadow-none lg:border-none">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.link}
              onClick={toggleMenu}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.section}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;