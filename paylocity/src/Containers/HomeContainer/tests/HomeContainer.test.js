import { render, screen } from '@testing-library/react';
import HomeContainer from './HomeContainer';

test('renders HomeContainer', () => {
  const comp = render(<HomeContainer />);
  expect(comp).toBeDefined();
});
