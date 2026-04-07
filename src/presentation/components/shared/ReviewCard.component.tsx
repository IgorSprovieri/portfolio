import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Card } from '../ui/card';
import { buttonVariants } from '../ui/button';
import { ReviewEntity } from '@/domain/entities/review.entity';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '../ui/dialog';

export type ReviewCardComponentProps = {
  review: ReviewEntity;
};

export const ReviewCardComponent: FC<ReviewCardComponentProps> = ({
  review,
}) => {
  return (
    <Card className="w-full p-2 sm:p-3 h-full">
      <div className="flex flex-col items-center justify-between h-full">
        <div>
          <h2 className="text-primary text-[14px] sm:text-[16px] lg:text-[18px] font-bold">
            {review.title}
          </h2>
          <h3 className="text-gray-500 font-bold text-[13px] sm:text-[14px] lg:text-[16px] -m-px">
            {review.subTitle}
          </h3>
          <p className="text-[12px] sm:text-[14px] leading-[1.3] tracking-[-0.2] [word-spacing:0px] pt-1.5 text-left">
            {review.smallDescription}
          </p>
        </div>

        {!!review.description && (
          <div className="w-full flex justify-end">
            <Dialog>
              <DialogTrigger
                className={buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                  className:
                    'text-[11px] sm:text-sm py-0.5 sm:px-2 sm:py-0.5 h-max lg:mt-3',
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
                  <div className="text-[12px] sm:text-[14px] leading-tight tracking-[-0.2] [word-spacing:0px] pl-2 pt-1 text-black lg:text-[16px] text-left [&_p]:mb-3 [&_p:last-child]:mb-0">
                    <ReactMarkdown>{review.description}</ReactMarkdown>
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
