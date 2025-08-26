import { Button } from "@/components";
import Image from "next/image";

const MENU_ANCHOR_CLASSNAME =
  "text-[14px] cursor-pointer hover:-translate-y-[8px] transition-transform duration-500 font-medium";

export const Header = () => (
  <header className="w-full flex justify-between items-center fixed bg-(--header) py-[38px] px-[32px] top-0 z-50">
    <menu className="gap-[32px] hidden lg:flex">
      <a className={MENU_ANCHOR_CLASSNAME} href="#home-section">
        Home
      </a>
      <a className={MENU_ANCHOR_CLASSNAME} href="#achievements-section">
        Conquistas
      </a>
      <a className={MENU_ANCHOR_CLASSNAME} href="#skills-section">
        Habilidades
      </a>
      <a className={MENU_ANCHOR_CLASSNAME} href="#projects-section">
        Portfólio
      </a>
      <a className={MENU_ANCHOR_CLASSNAME} href="#experiences-section">
        Experiências
      </a>
      <a className={MENU_ANCHOR_CLASSNAME} href="#reviews-section">
        Avaliações
      </a>
      <a className={MENU_ANCHOR_CLASSNAME} href="#contact-section">
        Contato
      </a>
    </menu>

    <div className="flex gap-4">
      <a href="https://github.com/IgorSprovieri" target="_blank">
        <Button variant="ghost" className="w-[32px] h-[32px] p-0">
          <Image width={32} height={32} src="/icons/Github.png" alt="GitHub" />
        </Button>
      </a>

      <a href="https://br.linkedin.com/in/igor-sprovieri" target="_blank">
        <Button variant="ghost" className="w-[32px] h-[32px] p-0">
          <Image
            width={32}
            height={32}
            src="/icons/Linkedin.png"
            alt="Linkedin"
          />
        </Button>
      </a>
    </div>
  </header>
);
