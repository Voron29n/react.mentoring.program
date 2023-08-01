import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../index';
import {
  commonButtonClassnames,
  defaultType,
  emptyTestButton,
  expectedClassnames,
  testButton
} from './mocks';

const onClick = jest.fn();

describe('Button component', () => {
  let buttonRender: RenderResult;

  beforeEach(() => {
    buttonRender = render(<Button {...testButton} onClick={onClick} />);
  });

  it('renders', () => {
    const buttonElement = screen.getByRole('button') as HTMLButtonElement;
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(...expectedClassnames);
    expect(buttonElement.type).toBe(testButton.type);
  });

  it('onClick works', async () => {
    await userEvent.click(screen.getByRole('button') as HTMLButtonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Button snapshot', () => {
    expect(buttonRender).toMatchSnapshot();
  });
});

describe('Empty Button component', () => {
  let button: RenderResult;

  beforeEach(() => {
    button = render(<Button {...emptyTestButton} onClick={onClick} />);
  });

  it('renders without classNames', () => {
    const element = screen.getByRole('button') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(commonButtonClassnames);
    expect(element.type).toBe(defaultType);
  });

  it('Button snapshot without classNames', () => {
    expect(button).toMatchSnapshot();
  });
});
