import { Link } from "react-scroll";
// react-scroll enables smooth scrolling to section IDs on the page.
// Link is a special component from this library that replaces regular <a href="#...">.

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
    {/* lg:flex-row:	Horizontal menu on large screens
        sm:flex-col:	Vertical stacked menu on small screens
        sm:absolute sm:top-[105%]:	Dropdown-style on small screens
        lg:relative:	Inline on large screens
        left-[50%] -translate-x-[50%]:	Horizontally center on small screens
        sm:bg-cyan/30:	Semi-transparent cyan background on small screens
        backdrop-blur-lg:	Glassmorphism effect */}
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}  // Enables smooth scrolling to the target section
              smooth={true} // Enables smooth scrolling
              duration={500}  // Duration of the scroll animation in milliseconds
              offset={-130} // Offset to adjust the scroll position (e.g., for fixed headers)
              to={link.link}  //  Scrolls to the section with this id
              onClick={toggleMenu}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.section}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            {/* Adds a horizontal line under the link that expands on hover. */}
            {/* mx-auto:	Centers the line
                bg-cyan:	Line color
                w-0:	Starts with no width
                group-hover:w-full: Expands to full width on hover
                h-[1px]:	Height of the line
                transition-all duration-500: Smooth transition effect */}
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;