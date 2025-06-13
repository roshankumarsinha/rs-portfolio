import { FaFileDownload } from "react-icons/fa";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      {/* 
        px-4 py-2: Padding on x and y axes
        rounded-full: Fully rounded button
        text-xl font-bold: Large, bold text
        font-body: Custom font from tailwind.config.js
        text-white: White text color
        border-cyan border: Cyan border color
        flex items-center gap-1: Flexbox layout with centered items and small gap between icon and text
        bg-gradient-to-r from-darkCyan to-orange: Gradient background from dark cyan to orange
        transition-all duration-500: Smooth transition for all properties over 500ms
        hover:scale-110: Slightly enlarges the button on hover
        hover:border-orange: Changes border color to orange on hover
        cursor-pointer: Changes cursor to pointer on hover
        hover:shadow-cyanShadow: Adds a cyan shadow effect on hover
      */}
      <a href="/resume/resume.pdf" download>
        {/* The download attribute allows the file to be downloaded instead of opened in the browser. */}
        Resume
      </a>
      <div className="sm:hidden md:block">
        <FaFileDownload />
      </div>
    </button>
  );
};

export default NavbarBtn;