import { AchievementsSection } from "./AchievementsSection";
import { ContactSection } from "./ContactSection";
import { ExperiencesSection } from "./ExperiencesSection";
import { HomeSection } from "./HomeSection";
import { ProjectsSection } from "./ProjectsSection";
import { ReviewsSection } from "./ReviewsSection";
import { SkillsSection } from "./SkillsSection";

export const Main = () => (
  <main className="px-4 lg:p-0">
    <HomeSection />

    <AchievementsSection />

    <SkillsSection />

    <ProjectsSection />

    <ExperiencesSection />

    <ReviewsSection />

    <ContactSection />
  </main>
);
