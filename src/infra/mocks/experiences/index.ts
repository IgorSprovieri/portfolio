import { ExperienceEntity } from '@/domain/entities/experience.entity';

export const experiencesMock: ExperienceEntity[] = [
  {
    id: '1',
    title: 'Risqo - Tech Lead / Frontend Developer',
    period: '09/2025 - 11/2025',
    location: 'São Paulo, SP - Brasil',
    topics: [
      'Atuando na liderança técnica do frontend utilizando React, Next.js e TypeScript em sistema de risco cambial;',
      'Definição de arquitetura de componentes com Atomic Design, Tailwind CSS e Shadcn/ui, garantindo escalabilidade;',
      'Implementação de autenticação server-side com Next.js (SSR), aumentando segurança da aplicação;',
      'Otimização de requisições e cache com TanStack Query e Axios, melhorando performance;',
      'Estruturação de pipeline de deploy com Vercel e GitHub (CI/CD), garantindo entregas contínuas;',
      'Desenvolvimento de interfaces complexas com TanStack Table e Dagre, facilitando análise de dados.',
    ],
  },
  {
    id: '2',
    title: 'Seven Apps - Fullstack Developer',
    period: '02/2024 - 08/2025',
    location: 'São Paulo, SP - Brasil',
    topics: [
      'Atuando no desenvolvimento de aplicações web e mobile com React, Next.js, React Native (Expo) e Node.js (Express e Nest.js);',
      'Construção de soluções end-to-end integrando frontend, backend e banco de dados (PostgreSQL);',
      'Implementação de arquitetura monorepo com Turborepo, TypeScript e internacionalização com i18n, aumentando produtividade;',
      'Otimização de banco de dados com PostgreSQL, Sequelize e Prisma, utilizando triggers e normalização;',
      'Automação de processos com Node.js (CLI), reduzindo em 90% o tempo de atualização de aplicações;',
      'Implementação de pipelines de deploy com Vercel e Render (CI/CD);',
      'Desenvolvimento de formulários e validações com Zod, Yup e React Hook Form;',
      'Publicação de aplicativos mobile whitelabel com Expo, Android Studio e Xcode.',
    ],
  },
  {
    id: '3',
    title: 'Mapa da Programação - Fullstack Developer & Backend',
    period: '01/2023 - 01/2024',
    location: 'São Paulo, SP - Brasil',
    topics: [
      'Atuando no desenvolvimento de aplicações web com React e Next.js e mobile com React Native (Expo);',
      'Criação de APIs com Node.js, Express e Sequelize, integradas ao PostgreSQL;',
      'Desenvolvimento de interfaces com Figma (UX/UI);',
      'Definição e implementação de Arquitetura de Software (Arquitetura Limpa);',
      'Atuação como tutor backend ensinando Node.js, APIs REST e modelagem de banco de dados;',
      'Integração com serviços externos utilizando Firebase;',
      'Geração de documentos e relatórios com React PDF.',
    ],
  },
  {
    id: '4',
    title: 'CSJ Digital - Fullstack Developer & Backend',
    period: '01/2020 - 09/2022',
    location: 'São Paulo, SP - Brasil',
    topics: [
      'Atuando no desenvolvimento de 17 jogos 2D e 3D com Unity e C#, publicados na Steam, Nintendo Switch e Google Play;',
      'Aplicação de conceitos de POO e design de jogos na construção de experiências interativas;',
      'Produção de mais de 100 artigos técnicos com foco em SEO, aumentando tráfego e geração de leads;',
      'Atuação como freelancer, gerenciando múltiplos projetos e entregas simultâneas.',
    ],
  },
];
