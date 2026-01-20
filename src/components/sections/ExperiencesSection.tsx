import { experiencesService } from "@/services/experiences";
import { SectionTitle } from "../SectionTitle";
import { ExperienceCard } from "../cards/ExperiencesCard";

export const ExperiencesSection = () => {
  return (
    <section
      id="experiences-section"
      className="flex flex-col gap-16 items-center justify-start scroll-mt-48"
    >
      <SectionTitle firstText="Minha" secondText="Carreira" />
      <div className="flex flex-col items-center justify-start h-full gap-4">
        {experiencesService.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </section>
  );
};
