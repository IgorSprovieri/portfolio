import { FC, ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({ id, children }) => (
  <section id={id} className="min-h-[100dvh] w-full pt-[114px]">
    {children}
  </section>
);
