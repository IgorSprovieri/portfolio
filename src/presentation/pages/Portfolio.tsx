import { PageScrollProgressComponent } from '../components/shared/PageScrollProgress.component';
import { CascadeEffectComponent } from '../components/shared/CascadeEffect.component';
import { FadeInEffectComponent } from '../components/shared/FadeInEffect.component';
import { TitleBetweenBracesInTwoLinesComponent } from '../components/shared/TitleBetweenBracesInTwoLines.component';
import { ListAllExperiencesController } from '../controllers/ListAllExperiences.controller';
import { ListAllReviewsController } from '../controllers/ListAllReviews.controller';
import { TypewritterTitleComponent } from '../components/shared/TypewritterTitle.component';
import { Card } from '../components/ui/card';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { ListAllProjectsTabbedByCategoryController } from '../controllers/ListAllProjectsTabbedByCategory.controller';
import { HeaderMenuController } from '../controllers/HeaderMenu.controller';
import { AboutMeCardController } from '../controllers/AboutMeCard.controller';
import { StackCardController } from '../controllers/StackCard.controller';

export const PortfolioPage = () => {
  return (
    <PageScrollProgressComponent>
      <HeaderMenuController
        headerMenuOptions={[
          {
            label: 'Sobre Mim',
            href: '#about-section',
          },
          {
            label: 'Projetos',
            href: '#projects-section',
          },
          {
            label: 'Carreira',
            href: '#experiences-section',
          },
          {
            label: 'Avaliações',
            href: '#reviews-section',
          },
          {
            label: 'Contato',
            href: '#contact-section',
          },
        ]}
      />

      <main className="flex flex-col gap-8 sm:gap-16 items-center justify-start mt-24 mb-32 sm:my-32">
        <FadeInEffectComponent>
          <section className="flex flex-col gap-6 sm:gap-16 items-center justify-start max-w-236.5 px-3">
            <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <TypewritterTitleComponent
                  title="Olá, Muito Prazer!"
                  variant="card"
                />
                <TypewritterTitleComponent
                  title="Sou o Igor Sprovieri"
                  variant="text"
                />
              </div>

              <div className="w-32 h-32 sm:h-44 sm:w-44 overflow-hidden relative rounded-full">
                <Image
                  src="/igor-sprovieri.jpeg"
                  alt="igor-sprovieri-image"
                  fill
                />
              </div>
            </div>

            <p className="text-sm sm:text-md max-w-[692px] text-center">
              Desenvolvedor de Software há mais de 6 anos, com experiência em
              desenvolvimento de aplicações web e mobile, especializado em
              arquitetura de software (UML), modelagem de banco de dados (ERD) e
              UX/UI (Figma).
            </p>

            <StackCardController />
          </section>
        </FadeInEffectComponent>

        <CascadeEffectComponent>
          <section
            id="about-section"
            className="flex flex-col gap-8 sm:gap-16 items-center justify-start scroll-mt-48 max-w-236.5 px-3"
          >
            <TitleBetweenBracesInTwoLinesComponent
              firstLineText="Um Pouco"
              secondLineText="Sobre Mim"
            />

            <AboutMeCardController />
          </section>
        </CascadeEffectComponent>

        <CascadeEffectComponent>
          <section
            id="projects-section"
            className="flex flex-col gap-8 sm:gap-16 items-center justify-start scroll-mt-48 max-w-236.5 px-3"
          >
            <TitleBetweenBracesInTwoLinesComponent
              firstLineText="Portfólio de"
              secondLineText="Projetos"
            />

            <ListAllProjectsTabbedByCategoryController />
          </section>
        </CascadeEffectComponent>

        <CascadeEffectComponent>
          <section
            id="experiences-section"
            className="flex flex-col gap-8 sm:gap-16 items-center justify-start scroll-mt-48 max-w-236.5 px-3"
          >
            <TitleBetweenBracesInTwoLinesComponent
              firstLineText="Minha"
              secondLineText="Carreira"
            />

            <ListAllExperiencesController />
          </section>
        </CascadeEffectComponent>

        <CascadeEffectComponent>
          <section
            id="reviews-section"
            className="flex flex-col gap-8 sm:gap-16 items-center justify-start scroll-mt-48 max-w-236.5 px-3"
          >
            <TitleBetweenBracesInTwoLinesComponent
              firstLineText="Avaliações"
              secondLineText="Recebidas"
            />

            <ListAllReviewsController />
          </section>
        </CascadeEffectComponent>

        <CascadeEffectComponent>
          <section
            id="contact-section"
            className="flex flex-col gap-8 sm:gap-16 items-center justify-start scroll-mt-48 max-w-236.5 px-3"
          >
            <TitleBetweenBracesInTwoLinesComponent
              firstLineText="Entre em"
              secondLineText="Contato"
            />
            <Card className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 lg:gap-12 py-3 px-3 sm:px-4">
              <div className="relative w-24 h-64 sm:w-48 sm:h-128 overflow-hidden">
                <Image
                  src="/dummy/dummy-tablet.png"
                  alt="igor-sprovieri-image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-16">
                <h2 className="font-bold text-center">
                  Estou pronto para ajudar no seu projeto ou na sua empresa!
                </h2>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3">
                    <Phone />
                    <label>+55 11 99761 2295</label>
                  </div>

                  <div className="flex gap-2">
                    <Mail />
                    <label>igor.sprovieri@outlook.com</label>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </CascadeEffectComponent>
      </main>
    </PageScrollProgressComponent>
  );
};
