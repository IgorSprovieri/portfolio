import Image from "next/image";

import { FC } from "react";
import { SectionTitleTypewritter } from "../SectionTitleTypewritter";
import { Section } from "../Section";
import { achievementsList } from "./achievementsList";

type AchievementCardProps = {
  src: string;
  alt: string;
  date: string;
  description: string;
  width?: number;
  height?: number;
};

const AchievementCard: FC<AchievementCardProps> = ({
  src,
  alt,
  date,
  description,
  width,
  height,
}) => (
  <div className="flex flex-col items-center justify-center text-center w-[196px]">
    <div className="w-[96] h-[96px] flex items-center justify-center">
      <Image width={width || 96} height={height || 96} alt={alt} src={src} />
    </div>
    <h3 className="text-[16px] text-primary font-bold mt-2">{date}</h3>
    <p className="text-[14px] mt-0.5">{description}</p>
  </div>
);

export const AchievementsSection = () => {
  return (
    <Section id="achievements-section">
      <div className="flex flex-col items-center justify-evenly h-[calc(100dvh-114px)]">
        <SectionTitleTypewritter
          firstText="Conquistas"
          secondText="Profissionais"
        />

        <div className=" w-full overflow-x-scroll lg:w-fit">
          <div className="px-[32px] flex w-fit items-start justify-start gap-8 lg:justify-center lg:px-0">
            {achievementsList.map((achievement) => (
              <AchievementCard key={achievement.index} {...achievement} />
            ))}
          </div>
        </div>

        <a href="#skills-section">
          <div className="h-fit w-fit animate-bounce">
            <Image
              height={64}
              width={64}
              src="/icons/arrow-down.svg"
              alt="Arrow down"
            />
          </div>
        </a>
      </div>
    </Section>
  );
};
