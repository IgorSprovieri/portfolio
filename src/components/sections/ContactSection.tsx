import Image from "next/image";

import { SectionTitle } from "../SectionTitle";
import { FC } from "react";
import { Card } from "../ui/card";
import { Mail, Phone } from "lucide-react";

export const ContactSection: FC = () => {
  return (
    <section
      id="contact-section"
      className="flex flex-col gap-16 items-center justify-start scroll-mt-48"
    >
      <SectionTitle firstText="Entre em" secondText="Contato" />
      <Card className="w-[934px] flex flex-row items-center justify-center gap-12 py-4">
        <div className="relative w-48 h-128 overflow-hidden">
          <Image
            src="/dummy/dummy-tablet.png"
            alt="igor-sprovieri-image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-16">
          <h2 className="font-bold text-center">
            Estou pronto para ajudar no seu projeto ou na sua empresa!
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <Phone />
              <label>+55 11 99761 2295</label>
            </div>

            <div className="flex gap-2">
              <Mail />
              <label>igor.sprovieri@outlook.com</label>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
