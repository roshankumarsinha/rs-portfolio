import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavbarToggler = ({ toggleMenu, menuOpen }) => {
  return (
    <button
      className="text-2xl p-3 border border-orange rounded-full"
      onClick={toggleMenu}
    >
      {menuOpen ? (
        <ImCross />
      ) : (
        <GiHamburgerMenu />
      )}
    </button>
  );
};

export default NavbarToggler;