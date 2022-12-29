import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IDropDownItem } from 'components';
import * as hooks from 'hooks';
import { SortBar } from '../index';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  searchMovies: {
    activeSortType: {
      label: 'test',
      value: ''
    } as IDropDownItem
  }
});

describe('FilterBar component with mock hook', () => {
  const handleSelectedActive = jest.fn();
  let sortBarRender: RenderResult;

  beforeEach(() => {
    jest.spyOn(hooks, 'useActiveSearchParams').mockReturnValue({
      handleSelectedActive
    });
    sortBarRender = render(
      <ReduxProvider store={store}>
        <SortBar />
      </ReduxProvider>
    );
  });

  it('renders', () => {
    const { container } = sortBarRender;
    expect(
      container.querySelector('.sort__bar__container')
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).not.toHaveClass('img__flip');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'close');
  });

  it('handleSelectedActive works', async () => {
    await userEvent.click(screen.getByRole('img'));

    expect(screen.getByRole('img')).toHaveClass('img__flip');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'open');
    expect(screen.getByRole('list')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('listitem')[0] as HTMLLIElement);

    expect(handleSelectedActive).toHaveBeenCalledTimes(1);
  });

  it('SortBar snapshot', () => {
    expect(sortBarRender).toMatchSnapshot();
  });
});
