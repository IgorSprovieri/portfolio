import { Card } from "@/components";

export const rentCalculator = {
  title: "Controle de Aluguéis",
  src: "/projects/rent-calculator.svg",
  alt: "Rent Calculator Image",
  job: "Projeto Pessoal",
  description:
    "Um sistema web para uma empresa familiar que otimizou o cálculo e a emissão de boletos",
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
      <h2 className="mt-4 text-primary font-bold text-[18px]">
        Sobre o Projeto
      </h2>
      <Card className="mt-1.5">
        <p className="text-[13px] lg:text-[16px] text-left">
          Desenvolvi para uma empresa familiar um sistema web para gerenciar
          aluguéis que otimizou o processo de cálculo e emissão de boletos.
        </p>
      </Card>

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

      <h2 className="mt-4 text-primary font-bold text-[18px]">Problema</h2>
      <Card className="mt-1.5">
        <p className="text-[13px] lg:text-[16px] text-left">
          Um dos problemas que essa empresa tinha era em relação ao cálculo de
          aluguéis de espaços internos, já que era um cálculo trabalhoso e com
          grande probabilidade de erro.
        </p>
      </Card>

      <h2 className="mt-4 text-primary font-bold text-[18px]">Solução</h2>
      <Card className="mt-1.5">
        <p className="text-[13px] lg:text-[16px] text-left">
          A minha ideia foi criar um sistema simples para calcular e imprimir os
          cálculos, diminuindo substancialmente o trabalho, reduzindo erros e
          deixando o processo mais profissional.
        </p>
      </Card>

      <h2 className="mt-4 text-primary font-bold text-[18px]">Execução</h2>
      <Card className="mt-1.5">
        <p className="text-[13px] lg:text-[16px] text-left">
          Primeiro desenhei o projeto no Figma e depois desenvolvi um site que
          permite criar, listar, editar e excluir os aluguéis calculados.
          <br />
          <br />
          O sistema também permite imprimir quando quiser, gerando um PDF com
          base no cálculo.
          <br />
          <br />
          Como era um sistema simples, não precisou de uma api e o firebase
          supriu todos os problemas.
        </p>
      </Card>

      <h2 className="mt-4 text-primary font-bold text-[18px]">Tech Stack</h2>
      <Card className="mt-1.5">
        <p className="text-[13px] lg:text-[16px] text-left">
          React, Vite, Tanstack Query, Firebase e Figma.
        </p>
      </Card>
    </>
  ),
};
