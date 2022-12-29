import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as hooks from 'hooks';
import { GenreBar } from '../index';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  searchMovies: {
    activeGenre: null
  }
});

describe('GenreBar component with mock hook', () => {
  const handleSelectedActive = jest.fn();
  let genreBarRender: RenderResult;

  beforeEach(() => {
    jest.spyOn(hooks, 'useActiveSearchParams').mockReturnValue({
      handleSelectedActive
    });
    genreBarRender = render(
      <ReduxProvider store={store}>
        <GenreBar />
      </ReduxProvider>
    );
  });

  it('renders', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(5);
  });

  it('handleSelectedActive works', async () => {
    await userEvent.click(screen.getAllByRole('listitem')[0] as HTMLLIElement);
    expect(handleSelectedActive).toHaveBeenCalledTimes(1);
  });

  it('GenreBar snapshot', () => {
    expect(genreBarRender).toMatchSnapshot();
  });
});
