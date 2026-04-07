import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TitleBetweenBracesInTwoLinesComponent } from '@/presentation/components/shared/TitleBetweenBracesInTwoLines.component';

describe('TitleBetweenBracesInTwoLinesComponent', () => {
  it('should render the section title between braces in two lines', async () => {
    render(
      <TitleBetweenBracesInTwoLinesComponent
        firstLineText="Section"
        secondLineText="Title"
      />
    );
    expect(screen.getByText('{Section')).toBeInTheDocument();
    expect(screen.getByText('Title}')).toBeInTheDocument();
  });
});
