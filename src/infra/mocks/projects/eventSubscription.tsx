import { ProjectEntity } from '@/domain/entities/project.entity';

export const eventSubscription: ProjectEntity = {
  id: '2',
  category: {
    id: '3',
    slug: 'others',
    name: 'Outros',
  },
  title: 'Inscrição em Eventos',
  src: '/projects/event-subscription.svg',
  alt: 'Inscrição em Eventos image',
  description:
    'Trabalho voluntário para a igreja de um site de inscrições para grandes eventos',
  skillIcons: [
    { src: '/icons/skills/react.svg', alt: 'react', height: 20, width: 20 },
    {
      src: '/icons/skills/styled-components.svg',
      alt: 'styled-components',
      height: 20,
      width: 30,
    },
    {
      src: '/icons/skills/expo-mini.svg',
      alt: 'expo',
      height: 20,
      width: 16,
    },
  ],
  readMore:
    '## Sobre o Projeto\n\nDesenvolvi um trabalho voluntário para a igreja que consiste em um site de inscrições para eventos com mais de 1.200 pessoas.\n\n## Problema\n\nA igreja começou a realizar projetos com pessoas do Brasil todo, gerando uma quantidade de inscritos alta que era muito difícil de gerenciar através de google forms.\n\n## Solução\n\nA solução foi criar um site simples e acessível que funcionasse também no celular, permitindo um maior controle dos inscritos e a geração de relatórios.\n\n## Execução\n\nO primeiro passo foi entender as necessidades, desenhar o projeto no Figma e após a aprovação foi iniciado o desenvolvimento.\n\n## Tech Stack\n\nTypeScript, React, Next, Tanstack Query, Node, Express, TypeORM, MongoDB e Figma.',
};

/*
import { Card } from '@/presentation/components/ui/card';

oldReadMore: (
  <>
    <h2 className="text-primary font-bold text-[18px]">Sobre o Projeto</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        Desenvolvi um trabalho voluntário para a igreja que consiste em um
        site de inscrições para eventos com mais de 1.200 pessoas.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Problema</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        A igreja começou a realizar projetos com pessoas do Brasil todo,
        gerando uma quantidade de inscritos alta que era muito difícil de
        gerenciar através de google forms.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Solução</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        A solução foi criar um site simples e acessível que funcionasse também
        no celular, permitindo um maior controle dos inscritos e a geração de
        relatórios.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Execução</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        O primeiro passo foi entender as necessidades, desenhar o projeto no
        Figma e após a aprovação foi iniciado o desenvolvimento.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Tech Stack</h2>

    <Card className="mt-1.5">
      TypeScript, React, Next, Tanstack Query, Node, Express, TypeORM, MongoDB
      e Figma.
    </Card>
  </>
),
*/
