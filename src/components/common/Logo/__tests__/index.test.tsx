import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { Logo } from '../index';

describe('Logo component', () => {
  let logoRender: RenderResult;

  beforeEach(() => {
    logoRender = render(<Logo />);
  });

  it('renders', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveClass('logo__img');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'logo');
  });

  it('Logo snapshot', () => {
    expect(logoRender).toMatchSnapshot();
  });
});
