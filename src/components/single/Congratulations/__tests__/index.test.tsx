import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { Congratulations } from '../index';
import { testCongratulations } from './mocks';

describe('Congratulations component', () => {
  let congratulationsRender: RenderResult;

  beforeEach(() => {
    congratulationsRender = render(
      <Congratulations
        headline={testCongratulations.headline}
        text={testCongratulations.text}
      />
    );
  });

  it('renders', () => {
    expect(screen.getByText(testCongratulations.headline)).toBeInTheDocument();
    expect(screen.getByText(testCongratulations.text)).toBeInTheDocument();
  });

  it('Congratulations snapshot', () => {
    expect(congratulationsRender).toMatchSnapshot();
  });
});
