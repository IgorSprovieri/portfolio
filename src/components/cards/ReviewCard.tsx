import { FC, ReactNode } from "react";
import { Card } from "../ui/card";
import { buttonVariants } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "../ui/dialog";

export type ReviewCardProps = {
  review: {
    title: string;
    subTitle: string;
    smallDescription: ReactNode;
    description?: ReactNode;
  };
};

export const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card className="w-full px-4 h-full">
      <div className="flex flex-col items-center justify-between h-full">
        <div>
          <h2 className="text-primary text-[18px] font-bold">{review.title}</h2>
          <h3 className="text-gray-500 font-bold text-[16px] m-[-1px]">
            {review.subTitle}
          </h3>
          <p className="text-[14px] leading-[1.3] tracking-[-0.2] [word-spacing:0px] pl-2 pt-1.5 text-left">
            {review.smallDescription}
          </p>
        </div>

        {!!review.description && (
          <div className="w-full flex justify-end">
            <Dialog>
              <DialogTrigger
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "mt-3",
                })}
              >
                Ver Mais
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-[18px] font-bold text-primary">
                    {review.title}
                  </DialogTitle>
                  <DialogDescription />
                  <div className="text-[14px] leading-[1.25] tracking-[-0.2] [word-spacing:0px] pl-2 pt-1 text-black lg:text-[16px] text-left">
                    {review.description}
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
