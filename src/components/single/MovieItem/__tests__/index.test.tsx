import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { handleSelectedDropdownItemTest } from 'components/single/MovieItem/MovieView/__tests__/utils.test';
import { LightboxContextProvider } from 'context/lightbox';
import * as hooks from 'hooks';
import { MoviesActionCreators } from 'store/actionCreators';
import { MovieItem } from '../index';
import { testMovie } from './mocks';

const mockStore = configureMockStore([thunk]);
const setMovieDetail = jest.fn();
const dispatch = jest.fn();

describe('MovieItem component', () => {
  let movieViewRender: RenderResult;

  beforeEach(() => {
    jest.spyOn(hooks, 'useActions').mockReturnValue({
      ...MoviesActionCreators,
      setMovieDetail
    });
    jest.spyOn(hooks, 'useLightboxContext').mockReturnValue({
      dispatch,
      state: {
        lightbox: undefined
      }
    });
    const store = mockStore({
      movieDetail: {
        movieDetail: null
      }
    });
    movieViewRender = render(
      <MemoryRouter initialEntries={['']}>
        <ReduxProvider store={store}>
          <LightboxContextProvider>
            <MovieItem movieItem={testMovie} />
          </LightboxContextProvider>
        </ReduxProvider>
      </MemoryRouter>
    );
  });

  it('renders', () => {
    const { container } = movieViewRender;
    expect(
      container.querySelector('.movie__item__container')
    ).toBeInTheDocument();
  });

  it('handleClick works', async () => {
    await userEvent.click(screen.getByRole('img') as HTMLImageElement);
    expect(setMovieDetail).toHaveBeenCalledTimes(1);
  });

  it('dispatch works', async () => {
    await handleSelectedDropdownItemTest(movieViewRender, 0);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('dispatch works', async () => {
    await handleSelectedDropdownItemTest(movieViewRender, 1);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('MovieItem snapshot', () => {
    expect(movieViewRender).toMatchSnapshot();
  });
});
