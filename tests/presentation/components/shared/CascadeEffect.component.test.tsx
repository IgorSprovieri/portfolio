import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CascadeEffectComponent } from '@/presentation/components/shared/CascadeEffect.component';

vi.mock('@/presentation/hooks/animations/useCascade', () => {
  return {
    useCascade: vi.fn(() => {}),
  };
});

describe('CascadeEffectComponent', () => {
  it('should render the children', () => {
    render(<CascadeEffectComponent>Content</CascadeEffectComponent>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
