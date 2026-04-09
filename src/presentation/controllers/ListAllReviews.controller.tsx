import { ListReviewsView } from '@/presentation/components/views/ListReviews.view';
import { reviewService } from '@/domain/services/reviews.service';

export const ListAllReviewsController = async () => {
  const reviews = await reviewService.getAllReviews();

  return <ListReviewsView reviews={reviews} />;
};
