import { FaFileDownload } from "react-icons/fa";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <a href="../../public/resume/resume.pdf" download>
        Resume
      </a>
      <div className="sm:hidden md:block">
        <FaFileDownload />
      </div>
    </button>
  );
};

export default NavbarBtn;