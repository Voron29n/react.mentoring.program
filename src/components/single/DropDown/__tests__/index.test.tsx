import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropDown } from 'components';
import {
  defaultClassnames,
  expectedClassnames,
  testClassnames,
  testDropdownList
} from './mocks';

const onClose = jest.fn();
const onSelected = jest.fn();

describe('DropDown component', () => {
  let dropDownRender: RenderResult;

  beforeEach(() => {
    dropDownRender = render(
      <DropDown
        classNames={testClassnames}
        selectList={testDropdownList}
        closeIcon={true}
        onClose={onClose}
        onSelected={onSelected}
      />
    );
  });

  it('renders', () => {
    const { container } = dropDownRender;
    const dropDownContainer = container.querySelector('.drop__down__container');
    const closeIcon = dropDownContainer.querySelector('.close__icon');

    expect(dropDownContainer).toBeInTheDocument();
    expect(dropDownContainer).toHaveClass(...expectedClassnames);

    expect(closeIcon).toBeInTheDocument();

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });

  it('onClose works', async () => {
    const { container } = dropDownRender;
    const closeIcon = container.querySelector('.close__icon').firstElementChild;
    await userEvent.click(closeIcon);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('onSelect works', async () => {
    await userEvent.click(screen.getAllByRole('listitem')[0]);
    expect(onSelected).toHaveBeenCalledTimes(1);
    expect(onSelected).toHaveBeenCalledWith(testDropdownList[0]);
  });

  it('DropDown snapshot', () => {
    expect(dropDownRender).toMatchSnapshot();
  });
});

describe('DropDown component with required props', () => {
  let dropDownRender: RenderResult;

  beforeEach(() => {
    dropDownRender = render(
      <DropDown selectList={testDropdownList} onSelected={onSelected} />
    );
  });

  it('renders', () => {
    const { container } = dropDownRender;
    const dropDownContainer = container.querySelector('.drop__down__container');
    const closeIcon = dropDownContainer.querySelector('.close__icon');

    expect(dropDownContainer).toBeInTheDocument();
    expect(dropDownContainer).toHaveClass(...defaultClassnames);

    expect(closeIcon).toBeNull();

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });

  it('DropDown snapshot', () => {
    expect(dropDownRender).toMatchSnapshot();
  });
});
