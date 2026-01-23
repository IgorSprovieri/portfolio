import { experiencesService } from "@/services/experiences";
import { SectionTitle } from "../SectionTitle";
import { ExperienceCard } from "../cards/ExperiencesCard";

export const ExperiencesSection = () => {
  return (
    <section
      id="experiences-section"
      className="flex flex-col gap-8 sm:gap-16 items-center justify-start scroll-mt-48 max-w-[946px] px-3"
    >
      <SectionTitle firstText="Minha" secondText="Carreira" />

      <div className="flex flex-col items-center justify-start h-full gap-4 w-full">
        {experiencesService.map((experience) => (
          <ExperienceCard
            key={experience.title}
            accordionValue={experience.title}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
