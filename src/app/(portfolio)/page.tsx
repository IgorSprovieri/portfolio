import { PageScrollProgress } from "@/components/PageScrollProgress";
import { Header, HEADER_MENU_ANCHOR_CLASSNAME } from "@/components/Header";
import { StartPortfolioSection } from "@/components/sections/StartPortfolioSection";
import { CascadeEffect } from "@/components/CascadeEffect";
import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { FadeInEffect } from "@/components/FadeInEffect";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Portfolio() {
  return (
    <PageScrollProgress>
      <Header
        renderHeaderMenuAnchor={() => (
          <>
            <a className={HEADER_MENU_ANCHOR_CLASSNAME} href="#about-section">
              Sobre Mim
            </a>
            <a
              className={HEADER_MENU_ANCHOR_CLASSNAME}
              href="#projects-section"
            >
              Projetos
            </a>
            <a
              className={HEADER_MENU_ANCHOR_CLASSNAME}
              href="#experiences-section"
            >
              Carreira
            </a>
            <a className={HEADER_MENU_ANCHOR_CLASSNAME} href="#reviews-section">
              Avaliações
            </a>
            <a className={HEADER_MENU_ANCHOR_CLASSNAME} href="#contact-section">
              Contato
            </a>
          </>
        )}
      />

      <main className="flex flex-col gap-8 sm:gap-16 items-center justify-start mt-24 mb-32 sm:my-32">
        <FadeInEffect>
          <StartPortfolioSection />
        </FadeInEffect>

        <CascadeEffect>
          <AboutMeSection />
        </CascadeEffect>

        <CascadeEffect>
          <ProjectsSection />
        </CascadeEffect>

        <CascadeEffect>
          <ExperiencesSection />
        </CascadeEffect>

        <CascadeEffect>
          <ReviewsSection />
        </CascadeEffect>

        <CascadeEffect>
          <ContactSection />
        </CascadeEffect>
      </main>
    </PageScrollProgress>
  );
}
