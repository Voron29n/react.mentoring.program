import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { act, render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from 'components';
import * as hooks from 'hooks';
import { MoviesActionCreators } from 'store/actionCreators';
import { searchTestComponent, testValue1, testValue2 } from './mocks';

const mockStore = configureMockStore([thunk]);
const setSearchText = jest.fn();

describe('SearchBar component', () => {
  const { button, placeholder, headline } = searchTestComponent;
  let searchBarRender: RenderResult;

  beforeEach(() => {
    jest.spyOn(hooks, 'useActions').mockReturnValue({
      ...MoviesActionCreators,
      setSearchText
    });
    const store = mockStore({
      searchMovies: {
        searchQuery: null
      }
    });
    searchBarRender = render(
      <MemoryRouter initialEntries={['']}>
        <ReduxProvider store={store}>
          <SearchBar {...searchTestComponent} />
        </ReduxProvider>
      </MemoryRouter>
    );
  });

  it('renders', () => {
    const { container } = searchBarRender;
    expect(container.querySelector('.search__container')).toBeInTheDocument();
    expect(screen.getByText(headline)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByText(button.text)).toBeInTheDocument();
    expect(screen.getByText(button.text)).toHaveClass(...button.classNames);
  });

  it('handleClick works', async () => {
    await act(async () => {
      await userEvent.type(
        screen.getByPlaceholderText(placeholder) as HTMLInputElement,
        testValue1
      );
      await userEvent.clear(screen.getByRole('textbox') as HTMLInputElement);
      await userEvent.type(
        screen.getByRole('textbox') as HTMLInputElement,
        testValue2
      );
    });
    await userEvent.click(screen.getByRole('button') as HTMLButtonElement);
    expect(setSearchText).toHaveBeenCalledTimes(2);
    expect(setSearchText).toHaveBeenCalledWith(testValue2);
  });

  it('SearchBar snapshot', () => {
    expect(searchBarRender).toMatchSnapshot();
  });
});
