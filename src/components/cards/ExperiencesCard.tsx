import { FC } from "react";
import { Experience } from "@/services/experiences";
import { Calendar, MapPin } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
} from "@/components";

type ExperienceCardProps = {
  experience: Experience;
};

const buildOthers = (others: string[]) => {
  return others.reduce((acc, other, index) => {
    if (index === 0) return other;

    if (index === others.length - 1) return acc + " e " + other;

    return acc + ", " + other;
  }, "");
};

export const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card className="py-0">
      <Accordion type="single" collapsible className="w-[934px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-primary text-lg font-bold">
                {experience.title}
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-1">
                  <Calendar size={13} color="#8B8B8B" />
                  <h3 className="text-gray-400 font-bold text-sm">
                    {experience.period}
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <MapPin size={13} color="#8B8B8B" />
                  <h3 className="text-gray-400 font-bold text-sm">
                    {experience.location}
                  </h3>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p className="mt-2 text-sm leading-[1.25] tracking-[-0.2] [word-spacing:0px]">
              {experience.description}
            </p>

            <ul className="list-disc pl-5">
              {experience.topics.map((topic) => (
                <li key={experience.title + topic}>{topic}</li>
              ))}
            </ul>

            <p>Outros: {buildOthers(experience.others)}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
