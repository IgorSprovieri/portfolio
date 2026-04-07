import { ExperienceEntity } from '../../../domain/entities/experience.entity';
import { ExperienceCardComponent } from '../shared/ExperienceCard.component';

export const ListExperiencesView = ({
  experiences,
}: {
  experiences: ExperienceEntity[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      {experiences.map((experience) => (
        <ExperienceCardComponent
          key={'experience-' + experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
};
