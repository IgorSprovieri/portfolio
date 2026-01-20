import { Card } from "@/components";
import { Header } from "@/components/Header";
import { PageScrollProgress } from "@/components/PageScrollProgress";

export default function Home() {
  return (
    <PageScrollProgress>
      <Header logoSrc="/logo-secondary.svg" />

      <main className="flex flex-col gap-16 items-center justify-start mt-32">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(216px,1fr))] gap-4 max-w-[934px]">
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
          <Card className="aspect-[17/19]"></Card>
        </div>
      </main>
    </PageScrollProgress>
  );
}
