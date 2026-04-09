import { ReviewEntity } from '@/domain/entities/review.entity';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const reviewMock: ReviewEntity = {
  id: '1',
  title: 'Review 1',
  subTitle: 'Sub Title 1',
  smallDescription: 'Small Description 1',
  description: 'Description 1',
};

describe('Review Entity', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(ReviewEntity).toBeDefined();
  });

  it('should create an instance of ReviewEntity with the correct properties', () => {
    const review = new ReviewEntity(reviewMock);

    expect(review.id).toEqual(reviewMock.id);
    expect(review.title).toEqual(reviewMock.title);
    expect(review.subTitle).toEqual(reviewMock.subTitle);
    expect(review.smallDescription).toEqual(reviewMock.smallDescription);
    expect(review.description).toEqual(reviewMock.description);
  });
});
