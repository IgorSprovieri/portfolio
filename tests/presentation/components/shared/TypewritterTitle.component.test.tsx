import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TypewritterTitleComponent } from '@/presentation/components/shared/TypewritterTitle.component';

vi.mock('@/presentation/hooks/animations/useTypewritter', () => {
  return {
    useTypewritter: vi.fn(() => 'Title'),
  };
});

describe('TypewritterTitleComponent', () => {
  it('should render the title with the card variant', async () => {
    const { container } = render(
      <TypewritterTitleComponent title="Title" variant="card" />
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card"]')).toBeInTheDocument();
  });

  it('should render the title with the text variant', async () => {
    const { container } = render(
      <TypewritterTitleComponent title="Title" variant="text" />
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="card"]')).toBe(null);
  });
});
