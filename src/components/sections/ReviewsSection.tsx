import { SectionTitle } from "../SectionTitle";
import { reviewsService } from "@/services/reviews";
import { ReviewCard } from "../cards/ReviewCard";

export const ReviewsSection = () => {
  return (
    <section
      id="reviews-section"
      className="flex flex-col gap-16 items-center justify-start scroll-mt-48"
    >
      <SectionTitle firstText="Avaliações" secondText="Recebidas" />

      <div className="grid grid-cols-3 gap-3 w-[934px]">
        {reviewsService.map(({ index, ...review }) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
};
