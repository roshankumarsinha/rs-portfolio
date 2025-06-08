import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/heroGradient";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ToolsMain from "./components/toolsSection/ToolsMain";
import SubTools from "./components/toolsSection/SubTools";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import NotesMain from "./components/notesSection/NotesMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

const App = () => {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain firstSkill="Fast Learner" secondSkill="Team Work" thirdSkill="Lead Team" />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ToolsMain />
      <SubTools />
      <ExperienceMain />
      <SubHeroMain firstSkill="Career Growth" secondSkill="Mentoring" thirdSkill="Resume Builder" />
      <NotesMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;