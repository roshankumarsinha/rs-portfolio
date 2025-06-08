const NavbarLogo = () => {
  return (
    <div id='logo' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
      <h1 className="text-white  text-2xl sm:hidden md:block">
        Roshan Sinha
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
        RS
      </h1>
    </div>
  );
};

export default NavbarLogo;