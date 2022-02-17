import { render, screen } from '../../utils/testing';
import SafeLink from '.';

jest.mock('./external-link.svg', () => 'mocked-asset');
jest.mock('./SafeLink.module.css', () => ({}));

it('renders a secure anchor tag', () => {
  render(<SafeLink href="https://some.url">Some text</SafeLink>);

  const anchor = screen.getByRole('link');
  expect(anchor).toBeInTheDocument();
  expect(anchor).toHaveProperty('target', '_blank');
  expect(anchor).toHaveProperty('rel', 'noopener noreferrer');
});

it('renders the children', () => {
  render(<SafeLink href="https://some.url">Some text</SafeLink>);

  expect(screen.getByRole('link', { name: /Some text/ }));
});

it('allows target override', () => {
  render(
    <SafeLink href="https://some.url" target="_self">
      Some text
    </SafeLink>,
  );

  expect(screen.getByRole('link')).toHaveProperty('target', '_self');
});

it('does NOT allow security override', () => {
  render(
    <SafeLink href="https://some.url" rel="some value">
      Some text
    </SafeLink>,
  );

  expect(screen.getByRole('link')).toHaveProperty('rel', 'noopener noreferrer');
});
