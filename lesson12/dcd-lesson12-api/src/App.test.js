import { render, screen } from '@testing-library/react';
import DcdApp from './DcdApp';

test('renders learn react link', () => {
  render(<DcdApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
