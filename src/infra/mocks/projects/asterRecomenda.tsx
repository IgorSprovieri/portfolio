import { ProjectEntity } from '@/domain/entities/project.entity';

export const asterRecomenda: ProjectEntity = {
  id: '1',
  category: {
    id: '2',
    slug: 'freelancer',
    name: 'Freelancer',
  },
  title: 'Áster Recomenda',
  src: '/projects/aster-recomenda.svg',
  alt: 'Áster Recomenda image',
  description:
    'Um aplicativo que otimiza a produtividade de fazendas por todo o Brasil',
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
    '## Sobre o Projeto\n\nDesenvolvi um aplicativo e um site para a John Deere Áster, que monitoram máquinas agrícolas e otimizam a produtividade de fazendas por todo o Brasil.\n\n## Projeto em Produção\n\n[play.google.com](https://play.google.com/store/apps/details?id=com.aster.recomenda&hl=pt_BR&pli=1)\n\n## Problema\n\nJohn Deere é a maior empresa de máquinas agrícolas do mundo e buscava otimizar a produtividade e reduzir custos de seus clientes aqui no Brasil.\n\n## Solução\n\nA solução foi coletar dados das máquinas e oferecer para seus clientes recomendações de uso e manutenção, para isso precisaria de um aplicativo que pegasse essa base de dados e gerasse um relatório para que seus consultores pudessem apresentar aos clientes.\n\n## Execução\n\nDesenhei o aplicativo no Figma para alinharmos o produto com a experiência de usuário.\n\nPor ser um projeto de escopo pequeno, utilizei uma componetização simples com React e decidi por usar React Native com Expo para facilitar o processo de publicação, já que não necessitaria de bibliotecas nativas específicas.\n\nIntegrei a Api que já estava pronta com Tanstack Query e desenvolvi o login com Microsoft Azure para que somente funcionários autorizados pudessem usar o aplicativo.\n\nMelhorei a experiência de usuário através de animações e optei por usar React PDF para gerar relatórios de máquinas agrícolas com suas recomendações.\n\n## Tech Stack\n\nJavaScript, React, React Native, Expo, Styled Components, React PDF, Firebase, Login com Azure e Figma.\n\n## Avaliações Recebidas\n\nMichel Rodrigues (Workana) - Profissional excepcional, sempre disposto a entender a demanda corretamente e propor as melhores soluções para cada problema identificado. Demonstrou muito conhecimento técnico e realizou a entrega dentro do prazo estipulado.',
};

/*
import { Card } from '@/presentation/components/ui/card';

oldReadMore: (
  <>
    <h2 className="text-primary font-bold text-[18px]">Sobre o Projeto</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        Desenvolvi um aplicativo e um site para a John Deere Áster, que
        monitoram máquinas agrícolas e otimizam a produtividade de fazendas
        por todo o Brasil.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">
      Projeto em Produção
    </h2>
    <Card className="mt-1.5">
      <a
        className="text-left"
        href="https://play.google.com/store/apps/details?id=com.aster.recomenda&hl=pt_BR&pli=1"
        target="_blank"
      >
        play.google.com
      </a>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Problema</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        John Deere é a maior empresa de máquinas agrícolas do mundo e buscava
        otimizar a produtividade e reduzir custos de seus clientes aqui no
        Brasil.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Solução</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        A solução foi coletar dados das máquinas e oferecer para seus clientes
        recomendações de uso e manutenção, para isso precisaria de um
        aplicativo que pegasse essa base de dados e gerasse um relatório para
        que seus consultores pudessem apresentar aos clientes.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Execução</h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        Desenhei o aplicativo no Figma para alinharmos o produto com a
        experiência de usuário.
        <br />
        <br />
        Por ser um projeto de escopo pequeno, utilizei uma componetização
        simples com React e decidi por usar React Native com Expo para
        facilitar o processo de publicação, já que não necessitaria de
        bibliotecas nativas específicas.
        <br />
        <br />
        Integrei a Api que já estava pronta com Tanstack Query e desenvolvi o
        login com Microsoft Azure para que somente funcionários autorizados
        pudessem usar o aplicativo.
        <br />
        <br />
        Melhorei a experiência de usuário através de animações e optei por
        usar React PDF para gerar relatórios de máquinas agrícolas com suas
        recomendações.
      </p>
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">Tech Stack</h2>

    <Card className="mt-1.5">
      JavaScript, React, React Native, Expo, Styled Components, React PDF,
      Firebase, Login com Azure e Figma.
    </Card>

    <h2 className="mt-4 text-primary font-bold text-[18px]">
      Avaliações Recebidas
    </h2>
    <Card className="mt-1.5">
      <p className="text-[13px] lg:text-[16px] text-left">
        Michel Rodrigues (Workana) - Profissional excepcional, sempre disposto
        a entender a demanda corretamente e propor as melhores soluções para
        cada problema identificado. Demonstrou muito conhecimento técnico e
        realizou a entrega dentro do prazo estipulado.
      </p>
    </Card>
  </>
),
*/
