import { render, screen } from '@testing-library/react';
import { Button } from '@carbon/react';

describe('Carbon Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});
