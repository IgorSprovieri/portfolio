import { BlogCard } from '@/presentation/components/shared/BlogCard';
import { PageScrollProgressComponent } from '@/presentation/components/shared/PageScrollProgress.component';
import { Card } from '@/presentation/components/ui/card';

import { HeaderMenuView } from '@/presentation/components/views/HeaderMenu.view';

import Image from 'next/image';

export default function Home() {
  return (
    <PageScrollProgressComponent>
      <HeaderMenuView />

      <main className="flex flex-col gap-4 items-center justify-start mt-24 sm:my-32 px-3">
        <Card className="w-full flex flex-row items-center justify-center py-2 px-1 sm:p-4 lg:px-4 lg:gap-4 max-w-236.5">
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 overflow-hidden">
            <Image
              src="/dummy/dummy.png"
              alt="igor-sprovieri-image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-0.5 sm:gap-4 w-full h-full">
            <h2 className="text-sm sm:text-2xl w-full text-center font-bold">
              Bem-Vindo ao meu Dev Blog!
            </h2>
            <p className="text-[10px] sm:text-lg lg:text-lg w-full text-center">
              Aqui é onde compartilho tudo aquilo que aprendi e estou aprendendo
              em minha carreira
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 max-w-236.5">
          <BlogCard
            title="Como aplicar Atomic Design corretamente em projetos Frontend com React"
            description="Atomic Design usado errado transforma organização em refatoração sem fim. Aqui você vai aprender a tornar ele uma máquina de produtividade e escalabilidade."
            src="https://www.linkedin.com/pulse/como-utilizar-atomic-design-da-forma-correta-em-igor-sprovieri-hxqmf/?trackingId=vD6PDmX%2BRQiXnIha1GyaPA%3D%3D"
          />
        </div>
      </main>
    </PageScrollProgressComponent>
  );
}
