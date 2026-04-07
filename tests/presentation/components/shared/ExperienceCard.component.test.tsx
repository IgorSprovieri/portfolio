import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceCardComponent } from '@/presentation/components/shared/ExperienceCard.component';
import { ExperienceEntity } from '@/domain/entities/experience.entity';
import userEvent from '@testing-library/user-event';

const experienceMock = new ExperienceEntity({
  id: 'test-1',
  title: 'Tech Company',
  period: '01/2020 - 12/2021',
  location: 'City - State',
  topics: ['Topic 1', 'Topic 2'],
});

describe('ExperienceCardComponent', () => {
  it('should render initial data corretly', async () => {
    render(<ExperienceCardComponent experience={experienceMock} />);

    expect(screen.getByText('Tech Company')).toBeInTheDocument();
    expect(screen.getByText('01/2020 - 12/2021')).toBeInTheDocument();
    expect(screen.getByText('City - State')).toBeInTheDocument();
  });

  it('should show the accordion content when clicked', async () => {
    render(<ExperienceCardComponent experience={experienceMock} />);

    const trigger = screen.getByRole('button');

    await userEvent.click(trigger);

    expect(screen.getByText('Topic 1')).toBeInTheDocument();
    expect(screen.getByText('Topic 2')).toBeInTheDocument();
  });

  it('should hide the accordion when clicked again', async () => {
    render(<ExperienceCardComponent experience={experienceMock} />);

    const trigger = screen.getByRole('button');

    await userEvent.click(trigger);
    await userEvent.click(trigger);

    expect(screen.queryByText('Topic 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Topic 2')).not.toBeInTheDocument();
  });
});
