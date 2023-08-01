import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Spinner } from '../index';

describe('Spinner component', () => {
  let spinnerRender: RenderResult;

  beforeEach(() => {
    spinnerRender = render(<Spinner />);
  });

  it('Spinner snapshot', () => {
    expect(spinnerRender).toMatchSnapshot();
  });
});
