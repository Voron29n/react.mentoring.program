import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Footer } from '../index';

describe('Footer component', () => {
  let footerRender: RenderResult;

  beforeEach(() => {
    footerRender = render(<Footer />);
  });

  it('renders', () => {
    const { container } = footerRender;
    expect(
      container.querySelector('.footer__container.sticky__position')
    ).not.toBeUndefined();
  });

  it('Footer snapshot', () => {
    expect(footerRender).toMatchSnapshot();
  });
});
