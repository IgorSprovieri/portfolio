import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Igor Sprovieri",
  description: "Igor Sprovieri - Desenvolvedor Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jetBrainsMono.variable} antialiased w-dvw h-dvh overflow-hidden p-2 sm:p-4 bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
