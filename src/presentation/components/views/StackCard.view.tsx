import Image from 'next/image';
import { Card } from '../ui/card';

export const StackCardView = () => {
  return (
    <Card className="flex flex-row items-center justify-between sm:justify-evenly w-full py-3 sm:py-6">
      <div className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden relative ">
        <Image fill src="/icons/skills/typescript.svg" alt="typescript" />
      </div>

      <div className="h-7 w-7 sm:h-9 sm:w-9 overflow-hidden relative ">
        <Image fill src="/icons/skills/react.svg" alt="react" />
      </div>

      <div className="h-6 w-6 sm:h-8 sm:w-8 overflow-hidden relative ">
        <Image fill src="/icons/skills/aws.svg" alt="aws" />
      </div>

      <div className="h-8 w-14 sm:h-10 sm:w-17 overflow-hidden relative ">
        <Image fill src="/icons/skills/expo.svg" alt="expo" />
      </div>

      <div className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden relative">
        <Image fill src="/icons/skills/node.svg" alt="node" />
      </div>
    </Card>
  );
};
