const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
    {/* items-center: Centers child elements horizontally */}
      <h2 className="text-6xl text-cyan mb-10">My Skill/Tech</h2>
      <p className="text-lg text-center">
      {/* text-center: Centers the paragraph text */}
        I not only work with technologies but I excel at using them with industry best practices to deliver high-quality,
        maintainable solutions. These skills are not just part of my professional toolkit but are also actively applied in
        building my portfolio and other projects, where I emphasize clean architecture, performance, and user experience.
      </p>
    </div>
  );
};

export default SkillsText;