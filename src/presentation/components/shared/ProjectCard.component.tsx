import Image from 'next/image';

import { FC, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import { buttonVariants } from '@/presentation/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/presentation/components/ui/dialog';

type ProjectCardComponentProps = {
  title: string;
  src: string;
  alt: string;
  description: string;
  skillIcons: ReactNode;
  readMore?: string | ReactNode;
};

export const ProjectCardComponent: FC<ProjectCardComponentProps> = ({
  title,
  src,
  alt,
  description,
  skillIcons,
  readMore,
}) => {
  const readMoreContent =
    typeof readMore === 'string' ? (
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="mt-4 text-primary font-bold text-[18px] first:mt-0">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="text-[13px] lg:text-[16px] text-left mt-1.5">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left underline text-primary"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 text-[13px] lg:text-[16px] text-left mt-1.5 space-y-1">
              {children}
            </ul>
          ),
          li: ({ children }) => <li>{children}</li>,
        }}
      >
        {readMore}
      </ReactMarkdown>
    ) : (
      readMore
    );

  return (
    <Card className="p-2 lg:p-3">
      <CardHeader>
        <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
          <Image width={200} height={96} alt={alt} src={src} />
        </div>
        <CardTitle className="mt-1 hidden sm:flex">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col mt-1.5 sm:mt-0.5">
        <CardDescription className="w-full">{description}</CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between items-center mt-2">
        <div className="hidden sm:flex gap-1.5 justify-start items-center">
          {skillIcons}
        </div>

        {readMore != null && readMore !== '' && (
          <div className="w-full flex justify-end">
            <Dialog>
              <DialogTrigger
                className={buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                  className:
                    'text-[11px] sm:text-sm py-0.5 sm:px-2 sm:py-0.5 h-max',
                })}
              >
                Ver Mais
              </DialogTrigger>
              <DialogContent className="h-[90dvh] sm:h-auto sm:max-w-[900px]">
                <DialogHeader>
                  <DialogTitle className="text-[22px] font-bold text-primary border-b-2 border-border">
                    {title}
                  </DialogTitle>
                  <DialogDescription />
                  <div className="h-[75dvh] overflow-y-scroll">
                    <div className="h-fit">{readMoreContent}</div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
