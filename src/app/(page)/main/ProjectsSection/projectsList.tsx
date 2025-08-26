import { Card } from "@/components";

export const projectsList = [
  {
    title: "Áster Recomenda",
    src: "/projects/aster-recomenda.svg",
    alt: "Áster Recomenda image",
    description:
      "Desenvolvi um aplicativo e site de recomendações para máquinas agrícolas",
    skillIcons: [
      { src: "/icons/skills/react.svg", alt: "react", height: 20, width: 20 },
      {
        src: "/icons/skills/styled-components.svg",
        alt: "styled-components",
        height: 20,
        width: 30,
      },
      {
        src: "/icons/skills/expo-mini.svg",
        alt: "expo",
        height: 20,
        width: 16,
      },
    ],
    readMode: (
      <>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7128411177486852098?compact=1"
          height="500px"
          width="100%"
          title="Publicação incorporada"
        />

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Aplicativo na Loja
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

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Sobre o Projeto
        </h2>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            A Áster Máquinas é uma empresa de consultoria agrícola que pertence
            a John Deere e monitora máquinas em fazendas pelo Brasil todo.
            <br />
            <br />
            Através de diversos sensores, temos diversos dados sobre as máquinas
            e assim eles podem dar a consultoria de forma mais precisa,
            indicando se esses valores estão bons ou não.
            <br />
            <br />
            Foi aí então que surgiu a necessidade de um aplicativo, que seria
            usado pelos consultores para gerar relatórios a partir desses dados.
            <br />
            <br />
            Para desenvolver esse aplicativo foi usado uma API da própria
            empresa que fornece esses dados.
            <br />
            <br />
            Além do aplicativo, também desenvolvi um site para salvar no banco
            de dados as recomendações para cada máquina, que seriam coletadas
            pelo aplicativo.
          </p>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Tecnologias Utilizadas
        </h2>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">
              React Native
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">Expo</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Styled Components
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">Firebase</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Login via Azure
            </li>
          </ul>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Avaliações Recebidas
        </h2>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            Michel Rodrigues (Workana) - Profissional excepcional, sempre
            disposto a entender a demanda corretamente e propor as melhores
            soluções para cada problema identificado. Demonstrou muito
            conhecimento técnico e realizou a entrega dentro do prazo
            estipulado.
          </p>
        </Card>
      </>
    ),
  },
  {
    title: "BestBarbers",
    src: "/projects/bestbarbers.svg",
    alt: "BestBarbers image",
    job: "Full-time",
    description: "Desenvolvi, em equipe, um sistema completo para barbearias",
    skillIcons: [
      {
        src: "/icons/skills/typescript.svg",
        alt: "typescript",
        height: 20,
        width: 24,
      },
      { src: "/icons/skills/next.svg", alt: "next", height: 20, width: 20 },
      { src: "/icons/skills/nest.svg", alt: "nest", height: 20, width: 20 },
      {
        src: "/icons/skills/expo-mini.svg",
        alt: "expo",
        height: 20,
        width: 16,
      },
    ],
    readMode: (
      <>
        {/* <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7128411177486852098?compact=1"
          height="500px"
          width="100%"
          title="Publicação incorporada"
        /> */}

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Aplicativo na Loja e Site:
        </h2>
        <Card className="mt-1.5">
          <a
            className="text-left"
            href="https://apps.apple.com/br/app/bestbarbers/id1501336370"
            target="_blank"
          >
            apps.apple.com
          </a>
        </Card>
        <Card className="mt-1.5">
          <a
            className="text-left"
            href="https://adm.bestbarbers.app"
            target="_blank"
          >
            adm.bestbarbers.app
          </a>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Sobre o Projeto
        </h2>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            Bestbarbers é um sistema completo para barbearias. Além do sistema
            de agendamentos, possui sistema de assinaturas, pacote de serviços,
            fechamento de caixa, controle de finanças e dezenas de relatórios
            para ajudar a barbearia. Também possui um sistema whitelabel para
            geração de aplicativos personalizados.
            <br />
            <br />
            O principal desafio foi refazer o sistema por completo em
            tecnologias mais atuais e uma arquitetura mais robusta.
            <br />
            <br />
            Para isso, montamos o projeto em uma arquitetura monorepo, o que
            acelerou muito o desenvolvimento com o compartilhamento de
            traduções, tipos, requisições e validações nas 3 frentes: Backend,
            Frontend e Mobile.
            <br />
            <br />
            O backend foi desenvolvido com Nest e Prisma, utilizamos o Swagger
            para documentação e era de lá que saíam os tipos, as requisições e
            validações que seriam usadas no Frontend.
            <br />
            <br />
            O frontend foi feito com Next e Chakra UI, seguimos uma arquitetura
            de Atomic Design e acelerou muito o desenvolvimento com a
            reutilização de código.
            <br />
            <br />
            Já o mobile foi feito com React Native, Expo e Styled Components,
            também seguimos a arquitetura de Atomic Design e acelerou muito o
            desenvolvimento com a reutilização de código.
            <br />
            <br />
            Nosso segundo desafio foi manter o projeto antigo enquanto
            desenvolvíamos o atual. Novas features e aplicativos eram
            requisitados todos os meses, além de alguns bugs para arrumar.
            <br />
            <br />
            Iniciamos o processo de migração utilizando 2 api&apos;s e
            implementamos um versionamento para evitar grandes problemas.
          </p>
        </Card>
        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Tecnologias Utilizadas - Projeto Novo
        </h2>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">Node</li>
            <li className="text-[13px] lg:text-[16px] text-left">Expess</li>
            <li className="text-[13px] lg:text-[16px] text-left">Prisma</li>
            <li className="text-[13px] lg:text-[16px] text-left">Postgres</li>
            <li className="text-[13px] lg:text-[16px] text-left">React</li>
            <li className="text-[13px] lg:text-[16px] text-left">Chakra UI</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              React Native
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Styled Components
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">Firebase</li>
            <li className="text-[13px] lg:text-[16px] text-left">OneSignal</li>
            <li className="text-[13px] lg:text-[16px] text-left">CodePush</li>
            <li className="text-[13px] lg:text-[16px] text-left">AWS</li>
            <li className="text-[13px] lg:text-[16px] text-left">Railway</li>
          </ul>
        </Card>
        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Tecnologias Utilizadas - Projeto Antigo
        </h2>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">TurboRepo</li>
            <li className="text-[13px] lg:text-[16px] text-left">Typescript</li>
            <li className="text-[13px] lg:text-[16px] text-left">Nest</li>
            <li className="text-[13px] lg:text-[16px] text-left">Prisma</li>
            <li className="text-[13px] lg:text-[16px] text-left">Postgres</li>
            <li className="text-[13px] lg:text-[16px] text-left">React</li>
            <li className="text-[13px] lg:text-[16px] text-left">Next</li>
            <li className="text-[13px] lg:text-[16px] text-left">Chakra UI</li>
            <li className="text-[13px] lg:text-[16px] text-left">React</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              React Native
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">Expo</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Styled Components
            </li>
          </ul>
        </Card>
        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Avaliações Recebidas
        </h2>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            Samuel Cupertino (Linkedin) - Tive o imenso prazer de trabalhar com
            o Igor e acompanhar de perto seu desenvolvimento como desenvolvedor.
            Desde o início, ele demonstrou uma curva de aprendizado
            impressionante e uma rara capacidade de absorver conceitos complexos
            e aplicá-los rapidamente na prática.
            <br />
            <br />
            Sua proatividade e vontade de aprender o transformaram em um membro
            produtivo e valioso para a equipe. Além de sua rápida evolução
            técnica, o Igor sempre se mostrou um excelente colega de equipe,
            receptivo a feedbacks e pronto para colaborar. Seu potencial é
            imenso e tenho certeza de que ele terá uma carreira brilhante.
          </p>
        </Card>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            Thabita Silva (Linkedin) - Tive a oportunidade de trabalhar com o
            Igor na BestBarbers, onde atuei como Analista de Produto. Ele sempre
            foi um desenvolvedor comprometido, com foco em entregar valor por
            meio de um código de qualidade, alinhado aos objetivos do produto.
            <br />
            <br />
            Durante nosso trabalho conjunto, Igor se mostrou proativo,
            colaborativo e sempre disposto a aprender e propor melhorias.
            Trocamos muitas ideias, refinamos tarefas juntos e pude contar com
            seu apoio em todas as fases de desenvolvimento.
            <br />
            <br />
            Sem dúvida, ele será um ótimo reforço para qualquer equipe de
            tecnologia!
          </p>
        </Card>
      </>
    ),
  },
  {
    title: "Mapa da Programação",
    src: "/projects/mapa-da-programacao.svg",
    alt: "Mapa da Programação image",
    job: "Full-time",
    description:
      "Desenvolvi, em equipe, um aplicativo e site de um curso online para devs",
    skillIcons: [
      { src: "/icons/skills/next.svg", alt: "next", height: 20, width: 20 },
      { src: "/icons/skills/chakra.svg", alt: "chakra", height: 20, width: 20 },
      {
        src: "/icons/skills/expo-mini.svg",
        alt: "expo",
        height: 20,
        width: 16,
      },
      { src: "/icons/skills/aws.svg", alt: "aws", height: 20, width: 26 },
    ],
    readMode: (
      <>
        {/* <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7128411177486852098?compact=1"
          height="500px"
          width="100%"
          title="Publicação incorporada"
        /> */}

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Aplicativo na Loja e Site:
        </h2>
        <Card className="mt-1.5">
          <a
            className="text-left"
            href="https://apps.apple.com/br/app/bestbarbers/id1501336370"
            target="_blank"
          >
            apps.apple.com
          </a>
        </Card>
        <Card className="mt-1.5">
          <a
            className="text-left"
            href="https://www.mapadaprogramacao.com.br"
            target="_blank"
          >
            mapadaprogramacao.com.br
          </a>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Sobre o Projeto
        </h2>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            SevenApps é uma empresa que aloca profissionais para projetos e
            empresas.
            <br />
            <br />
            Em 2024 fechamos um contrato para expandir o seu novo projeto: Mapa
            da Programação.
            <br />
            <br />
            Mapa da Programação é uma paltaforma de cursos online para
            desenvolvedores e o principal desafio era tirar os cursos de uma
            plataforma de cursos e criar uma plataforma exclusiva para os
            cursos.
            <br />
            <br />
            Desenvolvi o frontend e o mobile dessa plataforma, usando a AWS para
            arquivar as aulas. Além de desenvolver essa plataforma, também
            ajudei no suporte dos alunos, tirando todas as dúvidas sobre
            programação.
          </p>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Tecnologias Utilizadas
        </h2>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">Nest</li>
            <li className="text-[13px] lg:text-[16px] text-left">Prisma</li>
            <li className="text-[13px] lg:text-[16px] text-left">Postgres</li>
            <li className="text-[13px] lg:text-[16px] text-left">AWS</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              React Native
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">Expo</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Styled Components
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">Next</li>
            <li className="text-[13px] lg:text-[16px] text-left">Chakra UI</li>
          </ul>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Avaliações Recebidas
        </h2>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            Gabriel Rangel (Linkedin Traduzido) - Igor se destacou como o melhor
            aluno do Mapa da Programação, sempre indo além para ajudar seus
            colegas, compartilhar exemplos práticos e se disponibilizar para os
            outros. Sua dedicação e talento foram tão notáveis que decidi
            contratá-lo.
            <br />
            <br />
            Seu primeiro projeto foi ajudar a criar uma plataforma de streaming,
            onde demonstrou seu sólido conhecimento em React Native, Nest e
            Next.js, entregando resultados excepcionais.
            <br />
            <br />
            Mais tarde, Igor foi encarregado de um grande desafio na
            BestBarbers, contribuindo para a construção da nova versão da
            plataforma enquanto mantinha a existente. Mais uma vez, ele se
            destacou com suas habilidades, adaptabilidade e capacidade de
            resolver problemas.
            <br />
            <br />
            Igor tem um futuro brilhante pela frente, e estou confiante de que
            continuará alcançando grandes feitos em sua carreira. Foi um enorme
            prazer trabalhar com ele e testemunhar seu crescimento e
            contribuições de perto.
          </p>
        </Card>
      </>
    ),
  },
  {
    title: "Cálculo de Aluguéis",
    src: "/projects/rent-calculator.svg",
    alt: "Rent Calculator Image",
    job: "Projeto Pessoal",
    description:
      "Desenvolvi um sistema para cálculo de aluguéis de espaços internos",
    skillIcons: [
      { src: "/icons/skills/vite.svg", alt: "vite", height: 20, width: 20 },
      {
        src: "/icons/skills/styled-components.svg",
        alt: "styled-components",
        height: 20,
        width: 30,
      },
      {
        src: "/icons/skills/firebase.svg",
        alt: "firebase",
        height: 20,
        width: 24,
      },
    ],
    readMode: (
      <>
        {/* <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7128411177486852098?compact=1"
          height="500px"
          width="100%"
          title="Publicação incorporada"
        /> */}

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Site para Teste e Repositório:
        </h2>
        <Card className="mt-1.5">
          <a
            className="text-left"
            href="https://preview.rent-calculator.ispapps.com"
            target="_blank"
          >
            preview.rent-calculator.ispapps.com
          </a>
        </Card>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">
              Email: teste@teste.com
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Senha: 123456
            </li>
          </ul>
        </Card>
        <Card className="mt-1.5">
          <a
            className="text-left"
            href="https://github.com/IgorSprovieri/rent-calculator/tree/main"
            target="_blank"
          >
            github.com/IgorSprovieri/rent-calculator
          </a>
        </Card>
        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Sobre o Projeto
        </h2>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            Por volta de 9 meses eu administrei uma empreasa e na época estava
            estudando desenvolvimento web.
            <br />
            <br />
            Uma das coisas que fazíamos todos os meses era calcular aluguéis de
            espaços internos e enviar a conta com o boleto para o inquilino.
            <br />
            <br />
            A minha ideia então foi criar um sistema simples para calcular e
            imprimir os cálculos, diminuindo substancialmente o trabalho.
            <br />
            <br />O sistema é bem simples, permite criar, listar, editar e
            excluir os aluguéis calculados, além de imprimir quando quiser. Fiz
            isso gerando um PDF com base no cálculo.
            <br />
            <br />
            Como era um sistema simples, não precisou de uma api e o firebase
            resolveu todos os problemas.
          </p>
        </Card>
        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Tecnologias Utilizadas
        </h2>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">React</li>
            <li className="text-[13px] lg:text-[16px] text-left">Vite</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Styled Components
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Tanstack Router
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Tanstack Query
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Firebase Auth
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Firebase Firestore
            </li>
          </ul>
        </Card>
      </>
    ),
  },
  {
    title: "Weekly",
    src: "/projects/weekly.svg",
    alt: "Weekly image",
    job: "Projeto Pessoal",
    description:
      "Aplicativo web com api em node para gerenciamento tarefas semanais",
    skillIcons: [
      {
        src: "/icons/skills/html.svg",
        alt: "html",
        height: 20,
        width: 20,
      },
      {
        src: "/icons/skills/css.svg",
        alt: "css",
        height: 20,
        width: 20,
      },
      {
        src: "/icons/skills/javascript.svg",
        alt: "javascript",
        height: 20,
        width: 20,
      },
    ],
    readMode: (
      <>
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
        <Card className="mt-1.5">
          <a
            className="text-left"
            href="https://github.com/IgorSprovieri/weekly-app/tree/main"
            target="_blank"
          >
            github.com/IgorSprovieri/weekly-app
          </a>
        </Card>
        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Sobre o Projeto
        </h2>
        <Card className="mt-1.5">
          <p className="text-[13px] lg:text-[16px] text-left">
            Weekly é um projeto que desenvolvi quando estava aprendendo os
            fundamentos de desenvolvimento web. Utilizei um pouco do meu
            conhecimento em design para fazer a identidade desse projeto no
            Figma.
            <br />
            <br />
            A ideia é simples: Um gerenciador de tarefas semanais, onde você
            organiza suas tarefas por cards.
            <br />
            <br />
            O frontend foi feito com HTML, CSS e JS puro, onde apliquei diversos
            conceitos como HTML Form, JS DOM, API Fetch, Local Storage, Flexbox,
            Media Query e External Fonts.
            <br />
            <br />
            O backend eu atualizei para typescript e depois apliquei conceitos
            como: Logs, observabilidade e testes automatizados (E2E e coverage).
            A documentação foi feita com o Insomnia.
            <br />
            <br />
            Posteriormente, adicionei a possibilidade de criar e separar as
            tarefas por categoria para fazer o aplicativo mobile, onde apliquei
            diversos conceitos como HTTP State e Atomic Design.
            <br />
            <br />A versão final eu subi no Github Pages, Render e Mongo DB
            Atlas.
          </p>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Tecnologias Utilizadas - Frontend
        </h2>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">JavaScript</li>
            <li className="text-[13px] lg:text-[16px] text-left">HTML</li>
            <li className="text-[13px] lg:text-[16px] text-left">CSS</li>
          </ul>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Tecnologias Utilizadas - Backend
        </h2>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">Typescript</li>
            <li className="text-[13px] lg:text-[16px] text-left">Express</li>
            <li className="text-[13px] lg:text-[16px] text-left">Mongoose</li>
            <li className="text-[13px] lg:text-[16px] text-left">Mongo DB</li>
            <li className="text-[13px] lg:text-[16px] text-left">JWT</li>
            <li className="text-[13px] lg:text-[16px] text-left">Mailjet</li>
          </ul>
        </Card>

        <h2 className="mt-4 text-primary font-bold text-[18px]">
          Tecnologias Utilizadas - Mobile
        </h2>
        <Card className="mt-1.5">
          <ul>
            <li className="text-[13px] lg:text-[16px] text-left">Typescript</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              React Native
            </li>
            <li className="text-[13px] lg:text-[16px] text-left">Expo</li>
            <li className="text-[13px] lg:text-[16px] text-left">
              Styled Components
            </li>
          </ul>
        </Card>
      </>
    ),
  },
  // {
  //   title: "Inscrição de Eventos",
  //   src: "/projects/pizza-burguer.svg",
  //   alt: "Pizza burguer image",
  //   job: "Voluntário",
  //   description: "Desenvolvi um site para inscrição e gerenciamento de eventos",
  //   skillIcons: [
  //     {
  //       src: "/icons/skills/typescript.svg",
  //       alt: "typescript",
  //       height: 20,
  //       width: 24,
  //     },
  //     { src: "/icons/skills/next.svg", alt: "next", height: 20, width: 20 },
  //     { src: "/icons/skills/chakra.svg", alt: "chakra", height: 20, width: 20 },
  //     { src: "/icons/skills/mongo.svg", alt: "mongo", height: 20, width: 20 },
  //   ],
  // },
  // {
  //   title: "Site Portfólio",
  //   src: "/projects/pizza-burguer.svg",
  //   alt: "Pizza burguer image",
  //   job: "Projeto Pessoal",
  //   description:
  //     "Desenvolvi meu portfólio utilizando Next, Tailwind e Shadcn/ui",
  //   skillIcons: [
  //     {
  //       src: "/icons/skills/typescript.svg",
  //       alt: "typescript",
  //       height: 20,
  //       width: 24,
  //     },
  //     { src: "/icons/skills/next.svg", alt: "next", height: 20, width: 20 },
  //     {
  //       src: "/icons/skills/tailwind.svg",
  //       alt: "tailwind",
  //       height: 20,
  //       width: 26,
  //     },
  //   ],
  // },
  //   {
  //     title: "Pizza Burguer",
  //     src: "/projects/pizza-burguer.svg",
  //     alt: "Pizza burguer image",
  //     job: "Projeto Pessoal",
  //     description: "Cardápio online e aplicativo de um restaurante fictício",
  //     skillIcons: [
  //       { src: "/icons/skills/next.svg", alt: "next", height: 20, width: 20 },
  //       { src: "/icons/skills/chakra.svg", alt: "chakra", height: 20, width: 20 },
  //       {
  //         src: "/icons/skills/postgres.svg",
  //         alt: "postgres",
  //         height: 20,
  //         width: 20,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Wallet App",
  //     src: "/projects/wallet-app-api.svg",
  //     alt: "Wallet app image",
  //     job: "Projeto Pessoal",
  //     description: "Uma api completa para controle de finanças pessoais",
  //     skillIcons: [
  //       {
  //         src: "/icons/skills/express-mini.svg",
  //         alt: "express",
  //         height: 20,
  //         width: 20,
  //       },
  //       {
  //         src: "/icons/skills/postgres.svg",
  //         alt: "postgres",
  //         height: 16,
  //         width: 16,
  //       },
  //       { src: "/icons/skills/aws.svg", alt: "aws", height: 20, width: 20 },
  //     ],
  //   },
  //   {
  //   {
  //     title: "Supermarket List",
  //     src: "/projects/weekly-web.svg",
  //     alt: "stock controller image",
  //     job: "Projeto Pessoal",
  //     description:
  //       "Aplicativo web com api em node para gerenciamento tarefas semanais",
  //     skillIcons: [
  //       { src: "/icons/skills/html.svg", alt: "html", height: 20, width: 20 },
  //       { src: "/icons/skills/css.svg", alt: "css", height: 20, width: 20 },
  //       {
  //         src: "/icons/skills/javascript.svg",
  //         alt: "javascript",
  //         height: 20,
  //         width: 20,
  //       },
  //     ],
  //   },
];
