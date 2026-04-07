import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FadeInEffectComponent } from '@/presentation/components/shared/FadeInEffect.component';

describe('FadeInEffectComponent', () => {
  it('should render the children', () => {
    render(<FadeInEffectComponent>Content</FadeInEffectComponent>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should add the opacity-100 class when the component is mounted', () => {
    const { container } = render(
      <FadeInEffectComponent>Content</FadeInEffectComponent>
    );
    expect(container.firstChild).toHaveClass('opacity-100');
  });

  it('should remove the opacity-0 class when the component is mounted', () => {
    const { container } = render(
      <FadeInEffectComponent>Content</FadeInEffectComponent>
    );
    expect(container.firstChild).not.toHaveClass('opacity-0');
  });
});
