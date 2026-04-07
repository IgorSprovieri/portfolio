import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { PageScrollProgressComponent } from '@/presentation/components/shared/PageScrollProgress.component';

describe('PageScrollProgressComponent', () => {
  it('should render the children, the top button and the progress bar', async () => {
    render(
      <PageScrollProgressComponent>
        <div className="h-[2000px]">Content</div>
      </PageScrollProgressComponent>
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Voltar ao topo' })
    ).toBeInTheDocument();
  });

  it('should that the top button is disabled when the scroll progress is 0', async () => {
    const { container } = render(
      <PageScrollProgressComponent>
        <div className="h-[2000px]">Content</div>
      </PageScrollProgressComponent>
    );

    const scrollContainer = container.firstChild as HTMLElement;

    Object.defineProperty(scrollContainer, 'scrollTop', {
      value: 0,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(scrollContainer, 'scrollHeight', {
      value: 2000,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(scrollContainer, 'clientHeight', {
      value: 800,
      writable: true,
      configurable: true,
    });

    fireEvent.scroll(scrollContainer);

    expect(
      screen.getByRole('button', { name: 'Voltar ao topo' })
    ).toBeDisabled();
  });

  it('should have the top button enabled when scroll progress is greater than 0', () => {
    const { container } = render(
      <PageScrollProgressComponent>
        <div className="h-[2000px]">Content</div>
      </PageScrollProgressComponent>
    );

    const scrollContainer = container.firstChild as HTMLElement;

    Object.defineProperty(scrollContainer, 'scrollTop', {
      value: 500,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(scrollContainer, 'scrollHeight', {
      value: 2000,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(scrollContainer, 'clientHeight', {
      value: 800,
      writable: true,
      configurable: true,
    });

    fireEvent.scroll(scrollContainer);

    expect(
      screen.getByRole('button', { name: 'Voltar ao topo' })
    ).toBeEnabled();
  });

  it('should calculate and render the scroll progress correctly', () => {
    const { container } = render(
      <PageScrollProgressComponent>
        <div className="h-[2000px]">Content</div>
      </PageScrollProgressComponent>
    );

    const scrollContainer = container.firstChild as HTMLElement;

    Object.defineProperty(scrollContainer, 'scrollTop', {
      value: 840,
      writable: true,
      configurable: true,
    });

    Object.defineProperty(scrollContainer, 'scrollHeight', {
      value: 2000,
      writable: true,
      configurable: true,
    });

    Object.defineProperty(scrollContainer, 'clientHeight', {
      value: 800,
      writable: true,
      configurable: true,
    });

    fireEvent.scroll(scrollContainer);

    expect(
      screen
        .getByRole('progressbar')
        .querySelector('[data-slot="progress-indicator"]')
    ).toHaveStyle('transform: translateX(-30%)');
  });
});
