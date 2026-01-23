import { Card } from "@/components";
import { BlogCard } from "@/components/cards/BlogCard";
import { Header } from "@/components/Header";
import { PageScrollProgress } from "@/components/PageScrollProgress";
import Image from "next/image";

export default function Home() {
  return (
    <PageScrollProgress>
      <Header />

      <main className="flex flex-col gap-4 items-center justify-start mt-24 sm:my-32">
        <Card className="w-[934px] flex flex-row items-center justify-center gap-16 py-4 px-16">
          <div className="relative w-64 h-64 overflow-hidden">
            <Image
              src="/dummy/dummy.png"
              alt="igor-sprovieri-image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-12 w-full h-full">
            <h2 className="text-2xl w-full text-center font-bold">
              Bem-Vindo ao meu Dev Blog!
            </h2>
            <p className="text-lg w-full text-center">
              Aqui é onde compartilho tudo aquilo que aprendi e estou aprendendo
              em minha carreira
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-2 w-[934px] gap-4">
          <BlogCard
            title="Como aplicar Atomic Design corretamente em projetos Frontend com React"
            description="Atomic Design usado errado transforma organização em refatoração sem fim. Aqui você vai aprender a tornar ele uma máquina de produtividade e escalabilidade."
            src="https://www.linkedin.com/pulse/como-utilizar-atomic-design-da-forma-correta-em-igor-sprovieri-hxqmf/?trackingId=vD6PDmX%2BRQiXnIha1GyaPA%3D%3D"
          />
        </div>
      </main>
    </PageScrollProgress>
  );
}
