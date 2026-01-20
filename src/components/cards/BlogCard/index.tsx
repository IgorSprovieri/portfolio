import { FC } from "react";
import { OpenArticleButton } from "./client/openArticleButton";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

type BlogCardProps = {
  title: string;
  description: string;
  src: string;
};

export const BlogCard: FC<BlogCardProps> = ({ title, description, src }) => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="mt-1">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col mt-2">
        <CardDescription className="w-full text-gray-500">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between items-center mt-2">
        <div className="w-full flex justify-end">
          <OpenArticleButton src={src} />
        </div>
      </CardFooter>
    </Card>
  );
};
