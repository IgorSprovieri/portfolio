import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

export const HEADER_MENU_ANCHOR_CLASSNAME =
  "cursor-pointer hover:-translate-y-[4px] transition-transform duration-500 text-sm whitespace-nowrap";

export type HeaderProps = {
  logoSrc?: string;
  renderHeaderMenuAnchor?: () => ReactNode;
};

export const Header: FC<HeaderProps> = ({
  logoSrc,
  renderHeaderMenuAnchor,
}) => {
  return (
    <header className="w-fit flex justify-between items-center fixed bg-card py-2.5 px-3 top-8 left-1/2 -translate-x-1/2 z-50 rounded-full shadow-md gap-6">
      <Image height={40} width={40} src={logoSrc || "/logo.svg"} alt="logo" />

      <menu className="flex gap-8">
        <Link className={HEADER_MENU_ANCHOR_CLASSNAME} href="/">
          Portfólio
        </Link>
        <Link className={HEADER_MENU_ANCHOR_CLASSNAME} href="/blog">
          Blog
        </Link>
        {/* <Link className={HEADER_MENU_ANCHOR_CLASSNAME} href="/jogos">
          Jogos
        </Link> */}

        <div className="w-0.5 h-5 bg-gray-400" />
        <>{renderHeaderMenuAnchor?.()}</>
      </menu>

      <div className="flex items-center justify-between mr-4 w-28">
        <a href="https://github.com/IgorSprovieri" target="_blank">
          <Image width={28} height={28} src="/icons/Github.png" alt="GitHub" />
        </a>

        <a href="https://br.linkedin.com/in/igor-sprovieri" target="_blank">
          <Image
            width={28}
            height={28}
            src="/icons/Linkedin.png"
            alt="Linkedin"
          />
        </a>
      </div>
    </header>
  );
};
