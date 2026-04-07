'use client';

import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { FC, useRef, useState } from 'react';
import { CircleChevronUp } from 'lucide-react';

export const PageScrollProgressComponent: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-hidden overflow-y-scroll rounded-xl bg-background w-full h-full scroll-smooth"
      onScroll={(e) => {
        const scrollTop = e.currentTarget.scrollTop;
        const scrollHeight = e.currentTarget.scrollHeight;
        const clientHeight = e.currentTarget.clientHeight;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
      }}
    >
      <div className="flex flex-row items-center justify-center gap-2 fixed bottom-8 right-8 z-50">
        <Card
          title="Progresso de scroll da tela"
          aria-label="Progresso de scroll da tela"
        >
          <Progress className="w-32" value={scrollProgress} />
        </Card>

        <Button
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
          disabled={scrollProgress === 0}
          size="icon"
          className={`transition-all duration-500 rounded-xl`}
          onClick={() => {
            if (scrollProgress > 0) {
              scrollRef?.current?.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }
          }}
        >
          <CircleChevronUp height={18} width={18} />
        </Button>
      </div>

      {children}
    </div>
  );
};
