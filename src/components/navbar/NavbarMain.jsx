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
    {/* max-w-[1300px]:	Limits the navbar width to 1300px max
        mx-auto:	Horizontally centers the nav on the page
        w-full:	Takes full available width
        px-4:	Adds padding on left/right
        fixed left-[50%]:	Fixes position and aligns its left edge to the middle of the viewport
        -translate-x-[50%]:	Pulls it back by 50% of its own width to center the whole navbar
        z-20:	Stacks this nav above other elements
        flex gap-4:	Lays out the nav content in a horizontal row with spacing
        mt-2:	Adds top margin */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
      {/* flex justify-between:	Horizontally spaces out children
          w-full max-w-[1200px]:	Responsive size cap
          mx-auto:	Centers this inner div
          bg-black:	Background color from theme (#1e1917)
          items-center:	Vertically centers children
          p-6:	Padding on all sides
          rounded-r-full rounded-l-full:	Fully rounded pill shape
          border-orange border-[0.5px]:	Thin orange border */}
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks toggleMenu={toggleMenu} />
        </div>

        <NavbarBtn />
      </div>
      <div className="lg:hidden sm:block p-6 bg-black rounded-full border-orange border-[0.5px]">
      {/* lg:hidden sm:block:	Only shows on small screens, hides on large screens
          rounded-full:	Makes the button completely circular
          p-6:	Adds padding
          bg-black, border-orange, border-[0.5px]:	Styled consistently with the nav */}
        <NavbarToggler toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
    </nav>
  );
};

export default NavbarMain;
