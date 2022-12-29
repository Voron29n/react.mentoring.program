import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Confirm } from '../index';
import { testConfirm } from './mocks';

const onClick = jest.fn();

describe('Confirm component', () => {
  let confirmRender: RenderResult;

  beforeEach(() => {
    confirmRender = render(
      <Confirm
        headline={testConfirm.headline}
        confirmText={testConfirm.confirmText}
        onClick={onClick}
      />
    );
  });

  it('renders', () => {
    expect(screen.getByText(/headline/i)).toBeInTheDocument();
    expect(screen.getByText(/confirmText/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('onClick works', async () => {
    await userEvent.click(screen.getByRole('button') as HTMLButtonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Confirm snapshot', () => {
    expect(confirmRender).toMatchSnapshot();
  });
});
