import { ProjectEntity } from '@/domain/entities/project.entity';

export const weekly: ProjectEntity = {
  id: '5',
  category: {
    id: '1',
    slug: 'projects',
    name: 'Projetos',
  },
  title: 'Weekly',
  src: '/projects/weekly.svg',
  alt: 'Weekly image',
  description:
    'Um web app que ajuda pessoas a criarem uma rotina saudável e alcançar seus objetivos',
  skillIcons: [
    {
      src: '/icons/skills/html.svg',
      alt: 'html',
      height: 20,
      width: 20,
    },
    {
      src: '/icons/skills/css.svg',
      alt: 'css',
      height: 20,
      width: 20,
    },
    {
      src: '/icons/skills/javascript.svg',
      alt: 'javascript',
      height: 20,
      width: 20,
    },
  ],
  readMore:
    '## Sobre o Projeto\n\nWeekly é um aplicativo web que tem a proposta de ajudar pessoas a criar uma rotina saudável e conquistar seus objetivos.\n\n## Preview\n\n[Abrir publicação no LinkedIn](https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7024027948454141952?compact=1)\n\n## Site para Teste e Repositórios:\n\n[weekly.ispapps.com](https://weekly.ispapps.com)\n\n[github.com/IgorSprovieri/weekly-web](https://github.com/IgorSprovieri/weekly-web/tree/main)\n\n[github.com/IgorSprovieri/weekly-api](https://github.com/IgorSprovieri/weekly-api/tree/main)\n\n## Problema\n\nTempo é o ativo mais precioso atualmente, com tantas responsabilidades e coisas a se fazer, muitas pessoas não conseguem atingir seus objetivos por não terem uma semana organizada.\n\n## Solução\n\nWeekly vem para que você possa organizar sua semana e conseguir criar rotinas de forma simples e flexível, podendo criar rotinas e hábitos de forma eficiente.\n\n## Execução\n\nA execução foi feita em 4 etapas:\n\nPrimeiro foi desenhado o projeto e projetado o banco de dados no Figma.\n\nDepois foi desenvolvido o backend, onde criei a api rest e escolhi o MongoDB como banco de dados para a aplicação por não terem muitas relações.\n\nAntes de partir para o backend o projeto foi testado e documentado com o Insomnia.\n\nPor último foi construído o frontend com HTML, CSS e JS junto com a metodologia Block Element Modifier (BEM).\n\n## Tech Stack\n\nHTML, CSS, JavaScript, Node, Express, Mongoose, MongoDB, JWT, Mailjet e Figma.',
};

/*
import { Card } from '@/presentation/components/ui/card';

oldReadMore: (
  <>
    <h2 className="mt-4 text-primary font-bold text-[18px]">
      Sobre o Projeto
    </h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        Weekly é um aplicativo web que tem a proposta de ajudar pessoas a
        criar uma rotina saudável e conquistar seus objetivos.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Preview</h2>
    <iframe
      src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7024027948454141952?compact=1"
      height="500"
      width="100%"
      title="Publicação incorporada"
    />

    <h2 className="mt-4 text-primary font-bold text-[18px]">
      Site para Teste e Repositórios:
    </h2>
    <Card className="mt-1.5">
      <a
        className="text-left"
        href="https://weekly.ispapps.com"
        target="_blank"
      >
        weekly.ispapps.com
      </a>
    </Card>
    <Card className="mt-1.5">
      <a
        className="text-left"
        href="https://github.com/IgorSprovieri/weekly-web/tree/main"
        target="_blank"
      >
        github.com/IgorSprovieri/weekly-web
      </a>
    </Card>
    <Card className="mt-1.5">
      <a
        className="text-left"
        href="https://github.com/IgorSprovieri/weekly-api/tree/main"
        target="_blank"
      >
        github.com/IgorSprovieri/weekly-api
      </a>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Problema</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        Tempo é o ativo mais precioso atualmente, com tantas responsabilidades
        e coisas a se fazer, muitas pessoas não conseguem atingir seus
        objetivos por não terem uma semana organizada.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Solução</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        Weekly vem para que você possa organizar sua semana e conseguir criar
        rotinas de forma simples e flexível, podendo criar rotinas e hábitos
        de forma eficiente.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Execução</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        A execução foi feita em 4 etapas:
        <br />
        <br />
        Primeiro foi desenhado o projeto e projetado o banco de dados no
        Figma.
        <br />
        <br />
        Depois foi desenvolvido o backend, onde criei a api rest e escolhi o
        MongoDB como banco de dados para a aplicação por não terem muitas
        relações.
        <br />
        <br />
        Antes de partir para o backend o projeto foi testado e documentado com
        o Insomnia.
        <br />
        <br />
        Por último foi construído o frontend com HTML, CSS e JS junto com a
        metodologia Block Element Modifier (BEM).
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Tech Stack</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        HTML, CSS, JavaScript, Node, Express, Mongoose, MongoDB, JWT, Mailjet
        e Figma.
      </p>
    </Card>
  </>
),
*/
