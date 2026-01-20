import Image from "next/image";

import { FC, ReactNode } from "react";
import { buttonVariants } from "../ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

type ProjectCardProps = {
  title: string;
  src: string;
  alt: string;
  description: string;
  skillIcons: ReactNode;
  readMode?: ReactNode;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  src,
  alt,
  description,
  skillIcons,
  readMode,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
          <Image width={200} height={96} alt={alt} src={src} />
        </div>
        <CardTitle className="mt-1">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col mt-0.5">
        <CardDescription className="w-full">{description}</CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between items-center mt-2">
        <div className="flex gap-1.5 justify-start items-center">
          {skillIcons}
        </div>

        {readMode && (
          <div className="w-full flex justify-end">
            <Dialog>
              <DialogTrigger
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "text-sm px-2 py-0.5 h-fit",
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
                    <div className="h-fit">{readMode}</div>
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
