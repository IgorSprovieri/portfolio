"use client";

import { Button } from "@/components/ui/button";
import { FC } from "react";

export type OpenArticleButtonProps = {
  src: string;
};

export const OpenArticleButton: FC<OpenArticleButtonProps> = ({ src }) => (
  <Button
    variant="outline"
    className="text-[10px] sm:text-sm px-2 py-0.5 h-fit"
    onClick={() => window.open(src, "_blank", "noopener,noreferrer")}
  >
    Aprender
  </Button>
);
