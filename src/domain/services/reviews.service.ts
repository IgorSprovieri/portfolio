import { ReviewEntity } from '../entities/review.entity';
import { reviewsRepository } from '@/infra/repository/reviews.repository';

export interface IReviewsRepository {
  getReviews(): Promise<ReviewEntity[]>;
}

class ReviewsService {
  constructor(private readonly reviewsRepository: IReviewsRepository) {}

  async getAllReviews() {
    return this.reviewsRepository.getReviews();
  }
}

export const reviewsService = new ReviewsService(reviewsRepository);
