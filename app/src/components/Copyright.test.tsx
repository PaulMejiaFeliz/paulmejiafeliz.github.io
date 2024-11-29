import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { Copyright } from './Copyright';

test('renders name', async () => {
  const screen = render(<Copyright />);

  await expect
    .element(screen.getByRole('link'))
    .toHaveTextContent('paulmejiafeliz.me');

  await expect
    .element(screen.getByText(new Date().getFullYear().toString()))
    .toBeInTheDocument();
});
