import Image from "next/image";
import { Section } from "../Section";
import { SectionTitleTypewritter } from "../SectionTitleTypewritter";
import { Button } from "@/components";

export const ContactSection = () => {
  return (
    <Section id="contact-section">
      <div className="flex flex-col items-center justify-evenly h-[calc(100dvh-114px)]">
        <SectionTitleTypewritter firstText="Entrar em" secondText="Contato" />

        <div className="flex flex-col gap-10 items-center">
          <h2 className="font-bold text-center">
            Estou pronto para ajudar no seu projeto ou na sua empresa!
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <Image
                height={16}
                width={24}
                src="/icons/phone.png"
                alt="Phone"
              />
              <label>+55 11 997612295</label>
            </div>

            <div className="flex gap-2">
              <Image
                height={16}
                width={24}
                src="/icons/email.png"
                alt="Phone"
              />
              <label>igor.sprovieri@outlook.com</label>
            </div>
          </div>
        </div>

        <a href="https://wa.me/5511997612295" target="_blank">
          <Button>Entrar em Contato</Button>
        </a>
      </div>
    </Section>
  );
};
