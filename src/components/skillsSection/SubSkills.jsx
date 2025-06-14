const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightGrey relative">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      {/*
        bg-gradient-to-r from-orange to-cyan: This class applies a gradient background that transitions from orange to cyan.
        opacity-50: This class sets the opacity of the gradient to 50%, making it semi-transparent.
      */}
      <img
        src="/images/subSkills.jpg"
        alt="subSkills image"
        loading="lazy"
      />
    </div>
  );
};

export default SubSkills;