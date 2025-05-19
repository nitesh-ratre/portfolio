import HomeSection from '@/components/sections/home-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import ResumeSection from '@/components/sections/resume-section';

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <HomeSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ExperienceSection id="experience" />
      <ResumeSection id="resume" />
    </>
  );
}
