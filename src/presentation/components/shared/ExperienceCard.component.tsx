import { Calendar, MapPin } from 'lucide-react';
import { Card } from '@/presentation/components/ui/card';
import { ExperienceEntity } from '@/domain/entities/experience.entity';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/presentation/components/ui/accordion';

export const ExperienceCardComponent = ({
  experience,
}: {
  experience: ExperienceEntity;
}) => {
  return (
    <Card className="py-0 w-full p-2 sm:p-3">
      <Accordion type="single" collapsible>
        <AccordionItem value={experience.title}>
          <AccordionTrigger className="p-0">
            <div className="flex flex-col items-start justify-start gap-1 sm:gap-0">
              <h2 className="text-primary text-sm sm:text-lg font-bold">
                {experience.title}
              </h2>

              <div className="flex items-center justify-center gap-1.5 sm:gap-3">
                <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                  <Calendar size={13} color="#8B8B8B" />
                  <h3 className="text-gray-400 font-bold text-[10px] sm:text-sm">
                    {experience.period}
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                  <MapPin size={13} color="#8B8B8B" />
                  <h3 className="text-gray-400 font-bold text-[10px] sm:text-sm">
                    {experience.location}
                  </h3>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <ul className="list-disc pl-3 sm:pl-5">
              {experience.topics.map((topic) => (
                <li
                  className="text-[12px] sm:text-sm mt-1"
                  key={experience.title + topic}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
