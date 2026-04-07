import { render } from '@testing-library/react';
import { HeaderMenuView } from '@/presentation/components/views/HeaderMenu.view';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

describe('HeaderMenuView', () => {
  it('should render the header with the correct links', () => {
    render(
      <HeaderMenuView
        headerMenuOptions={[
          {
            label: 'Label 1',
            href: '#href-1',
          },
          {
            label: 'Label 2',
            href: '#href-2',
          },
        ]}
      />
    );

    expect(screen.getByRole('link', { name: 'Portfólio' })).toHaveAttribute(
      'href',
      '/'
    );
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute(
      'href',
      '/blog'
    );
    expect(screen.getByRole('link', { name: 'Label 1' })).toHaveAttribute(
      'href',
      '#href-1'
    );
    expect(screen.getByRole('link', { name: 'Label 2' })).toHaveAttribute(
      'href',
      '#href-2'
    );
  });
});
