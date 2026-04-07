import { ListReviewsView } from '@/presentation/components/views/ListReviews.view';
import { reviewsService } from '@/domain/services/reviews.service';

export const ListAllReviewsController = async () => {
  const reviews = await reviewsService.getAllReviews();

  return <ListReviewsView reviews={reviews} />;
};
