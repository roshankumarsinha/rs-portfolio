import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    // Css for left-50% and translate-x-50% to center the navbar
    // 1. left-[50%]
      // This sets the left edge of the element to 50% of its parent’s width.
        // 🔹 Imagine the element starts with its left edge aligned at the halfway point of the parent.

    // 2. -translate-x-[50%]
      // This shifts the element left by 50% of its own width.
        // 🔹 This compensates for the element’s own width to truly center it.
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks toggleMenu={toggleMenu} />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px] ">
        <NavbarToggler toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default NavbarMain;
