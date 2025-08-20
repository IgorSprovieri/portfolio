import { FC, ReactNode } from "react";
import { Section } from "../Section";
import { SectionTitleTypewritter } from "../SectionTitleTypewritter";
import { reviewsList } from "./reviewsList";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Card,
  buttonVariants,
  DialogDescription,
} from "@/components";

export type ReviewCardProps = {
  title: string;
  subTitle: string;
  smallDescription: string;
  description: ReactNode;
  hideShowMoreButton?: boolean;
};

export const ReviewCard: FC<ReviewCardProps> = ({
  title,
  subTitle,
  smallDescription,
  description,
  hideShowMoreButton,
}) => {
  return (
    <Card className="w-[300px] px-4 h-[304px]">
      <div className="flex flex-col items-center justify-between h-full">
        <div>
          <h2 className="text-primary text-[18px] font-bold">{title}</h2>
          <h3 className="text-gray-500 font-bold text-[16px] m-[-1px]">
            {subTitle}
          </h3>
          <p className="text-[14px] leading-[1.3] tracking-[-0.2] [word-spacing:0px] pl-2 pt-1.5 text-left">
            {smallDescription}
          </p>
        </div>

        {!hideShowMoreButton && (
          <div className="w-[100%] flex justify-end">
            <Dialog>
              <DialogTrigger
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "mt-[8px]",
                })}
              >
                Ver Mais
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-[18px] font-bold text-primary">
                    {title}
                  </DialogTitle>
                  <DialogDescription />
                  <div className="text-[14px] leading-[1.25] tracking-[-0.2] [word-spacing:0px] pl-2 pt-1 text-black lg:text-[16px] text-left">
                    {description}
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </Card>
  );
};

export const ReviewsSection = () => {
  return (
    <Section id="reviews-section">
      <div className="flex flex-col items-center justify-evenly h-[calc(100dvh-114px)]">
        <SectionTitleTypewritter
          firstText="Avaliações"
          secondText="Recebidas"
        />

        <div className=" w-full overflow-x-scroll lg:w-fit">
          <div className="flex items-center justify-center gap-4 w-fit">
            {reviewsList.map((review) => (
              <ReviewCard key={review.index} {...review} />
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </Section>
  );
};
