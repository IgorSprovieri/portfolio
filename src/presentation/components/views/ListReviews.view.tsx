import { ReviewEntity } from '@/domain/entities/review.entity';
import { ReviewCardComponent } from '../shared/ReviewCard.component';

export const ListReviewsView = ({ reviews }: { reviews: ReviewEntity[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
      {reviews.map((review) => (
        <ReviewCardComponent key={'review-' + review.id} review={review} />
      ))}
    </div>
  );
};
