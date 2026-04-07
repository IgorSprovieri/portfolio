import Image from 'next/image';
import { Card } from '../ui/card';

export const AboutMeCardView = () => {
  return (
    <Card className="w-full flex flex-row items-center justify-center gap-6 py-3 sm:py-6">
      <div className="hidden sm:flex relative w-72 h-96 overflow-hidden">
        <Image
          src="/dummy/dummy-hello.png"
          alt="igor-sprovieri-image"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-sm sm:text-md w-full">
        - Profissional com mais de 6 anos como Desenvolvedor de Software, com
        experiência no desenvolvimento de aplicações web e mobile escaláveis,
        com foco em performance, segurança e experiência do usuário;
        <br />
        <br /> - Desenvolvedor especializado em arquitetura de software (UML),
        modelagem de banco de dados (ERD) e UX/UI (Figma), atuando na construção
        de soluções completas, desde a definição técnica até a entrega final;
        <br />
        <br /> - Experiência sólida em JavaScript e TypeScript, com atuação em
        React (Next.js), React Native e Node.js (Express e NestJS),
        desenvolvendo aplicações end-to-end com integração de APIs REST; <br />
        <br /> - Atuação com bancos de dados PostgreSQL e MongoDB, além de
        experiência com cloud computing (AWS), conteinerização com Docker e
        implementação de pipelines CI/CD para automação de build, testes e
        deploy; <br />
        <br /> - Experiência com testes automatizados (Jest, Vitest, Testing
        Library e Playwright), garantindo qualidade, confiabilidade e manutenção
        do código; <br />
        <br /> - Vivência em liderança técnica, code review e aplicação de boas
        práticas como Clean Code, SOLID, design patterns e arquitetura
        escalável; <br />
        <br /> - Forte atuação em ambientes de startup e projetos de alta
        complexidade, com foco em escalabilidade, otimização de performance e
        melhoria contínua.
      </p>
    </Card>
  );
};
