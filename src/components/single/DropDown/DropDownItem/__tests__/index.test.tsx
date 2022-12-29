import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropDownItem } from '../index';
import { testDropdownItem } from './mocks';

const onClick = jest.fn();

describe('DropDownItem component', () => {
  let dropDownItemRender: RenderResult;

  beforeEach(() => {
    dropDownItemRender = render(
      <DropDownItem value={testDropdownItem} onClick={onClick} />
    );
  });

  it('renders', () => {
    expect(screen.getByText(/test label/i)).toBeInTheDocument();
  });

  it('onClick works', async () => {
    await userEvent.click(screen.getByText(/test label/i));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(testDropdownItem);
  });

  it('DropDownItem snapshot', () => {
    expect(dropDownItemRender).toMatchSnapshot();
  });
});
