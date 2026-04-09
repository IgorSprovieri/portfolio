import { ReviewEntity } from '../entities/review.entity';
import { reviewsRepository } from '@/infra/repository/reviews.repository';

export interface IReviewsRepository {
  getReviews(): Promise<ReviewEntity[]>;
}

export class ReviewService {
  constructor(private readonly reviewsRepository: IReviewsRepository) {}

  async getAllReviews() {
    return this.reviewsRepository.getReviews();
  }
}

export const reviewService = new ReviewService(reviewsRepository);
