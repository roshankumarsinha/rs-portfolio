const NavbarLogo = () => {
  return (
    <div id='logo' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
    {/* cursor-pointer:	Makes the logo look clickable (like a link) */}
      <h1 className="text-white text-2xl sm:hidden md:block">
      {/* text-white:	White text (from theme: #f1e1d9)
          text-2xl:	Medium-large text size
          sm:hidden:	Hidden on small screens and below
          md:block:	Displayed as block on medium screens and above */}
        Roshan Sinha
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
      {/* text-white:	White text
          font-special:	Uses Roboto, defined in your tailwind.config.js
          font-extrabold:	Bold weight
          text-4xl:	Larger text size
          md:hidden:	Hidden on medium+ screens
          sm:block:	Shown as block on small screens */}
        RS
      </h1>
    </div>
  );
};

export default NavbarLogo;