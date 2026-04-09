import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ReviewEntity } from '@/domain/entities/review.entity';

import {
  ReviewService,
  reviewService,
} from '@/domain/services/reviews.service';

const allReviewsMock: ReviewEntity[] = [
  {
    id: '1',
    title: 'Review 1',
    subTitle: 'Sub Title 1',
    smallDescription: 'Small Description 1',
    description: 'Description 1',
  },
  {
    id: '2',
    title: 'Review 2',
    subTitle: 'Sub Title 2',
    smallDescription: 'Small Description 2',
    description: 'Description 2',
  },
];

describe('Review Service', () => {
  const repositoryMock = {
    getReviews: vi.fn().mockResolvedValue(allReviewsMock),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(reviewService).toBeDefined();
  });

  it('should called the repository and return all reviews', async () => {
    const service = new ReviewService(repositoryMock);
    const reviews = await service.getAllReviews();

    expect(repositoryMock.getReviews).toHaveBeenCalled();
    expect(reviews).toEqual(allReviewsMock);
  });
});
