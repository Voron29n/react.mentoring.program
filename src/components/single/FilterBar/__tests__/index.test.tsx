import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, RenderResult } from '@testing-library/react';
import { IDropDownItem } from 'components';
import * as hooks from 'hooks';
import { FilterBar } from '../index';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  searchMovies: {
    activeGenre: null,
    activeSortType: {
      label: 'test',
      value: ''
    } as IDropDownItem
  }
});

describe('FilterBar component with mock hook', () => {
  const handleSelectedActive = jest.fn();
  let filterBarRender: RenderResult;

  beforeEach(() => {
    jest.spyOn(hooks, 'useActiveSearchParams').mockReturnValue({
      handleSelectedActive
    });
    filterBarRender = render(
      <ReduxProvider store={store}>
        <FilterBar />
      </ReduxProvider>
    );
  });

  it('FilterBar snapshot', () => {
    expect(filterBarRender).toMatchSnapshot();
  });
});
