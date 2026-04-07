import { ReviewEntity } from '@/domain/entities/review.entity';
import { IReviewsRepository } from '@/domain/services/reviews.service';
import { reviewsMock } from '../mocks/reviews';

class ReviewsRepository implements IReviewsRepository {
  async getReviews(): Promise<ReviewEntity[]> {
    return reviewsMock;
  }
}

export const reviewsRepository = new ReviewsRepository();
