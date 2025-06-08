import { Link } from "react-scroll";
import { links as footerLinks } from "../navbar/NavbarLinks";

const FooterMain = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Roshan Sinha</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.link}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.section}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        &copy; {currentYear} Roshan Sinha | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;