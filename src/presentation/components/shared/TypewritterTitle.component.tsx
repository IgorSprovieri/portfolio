'use client';

import { Card } from '@/presentation/components/ui/card';
import { useTypewritter } from '@/presentation/hooks/animations/useTypewritter';
import { FC, useRef } from 'react';

type TypewritterTitleComponentProps = {
  title: string;
  delay?: number;
  variant?: 'card' | 'text';
};

export const TypewritterTitleComponent: FC<TypewritterTitleComponentProps> = ({
  title,
  delay = 0,
  variant = 'card',
}) => {
  const typewritterElementRef = useRef<HTMLDivElement>(null);
  const typewritterText = useTypewritter(title, typewritterElementRef, delay);

  return (
    <>
      {variant === 'card' && (
        <Card className="bg-primary flex items-center justify-center p-3 sm:p-4">
          <h1
            ref={typewritterElementRef}
            className="text-2xl sm:text-4xl text-card font-bold"
          >
            {typewritterText}
          </h1>
        </Card>
      )}

      {variant === 'text' && (
        <h1
          ref={typewritterElementRef}
          className="text-2xl sm:text-4xl font-bold"
        >
          {typewritterText}
        </h1>
      )}
    </>
  );
};
