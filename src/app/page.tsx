import {
  Navigation,
  HeroSection,
  RecognitionStrip,
  AboutSection,
  ProjectsSection,
  AwardsSection,
  ExperienceSection,
  SkillsSection,
  MediaSection,
  InternationalSection,
  BeyondTechnologySection,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navigation />
      <main className="flex-1 w-full">
        <HeroSection />
        <RecognitionStrip />
        <AboutSection />
        <ProjectsSection />
        <AwardsSection />
        <ExperienceSection />
        <SkillsSection />
        <MediaSection />
        <InternationalSection />
        <BeyondTechnologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
