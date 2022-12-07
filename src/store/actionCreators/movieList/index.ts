import { Dispatch } from 'redux';
import { IDropDownItem, Movie } from 'components';
import { MoviesAction, MoviesActionTypes } from 'store/types';
import MoviesService from 'services/MoviesService';

export const fetchMovies = (
  activeGenre: IDropDownItem,
  activeSortType: IDropDownItem
) => {
  const moviesService = new MoviesService();
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
      const movieList = await moviesService.getMovies(
        activeGenre.value,
        activeSortType.value
      );
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
        payload: movieList
      });
    } catch (e) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: 'Error when trying fetch movies'
      });
    }
  };
};

export const addMovies = (newMovie: Movie) => {
  return (dispatch: Dispatch<MoviesAction>) => {
    dispatch({
      type: MoviesActionTypes.ADD_MOVIE,
      payload: newMovie
    });
  };
};

export const editMovies = (editedMovie: Movie) => {
  return (dispatch: Dispatch<MoviesAction>) => {
    dispatch({
      type: MoviesActionTypes.EDIT_MOVIE,
      payload: editedMovie
    });
  };
};

export const deleteMovies = (movieId: number) => {
  return (dispatch: Dispatch<MoviesAction>) => {
    dispatch({
      type: MoviesActionTypes.DELETE_MOVIE,
      payload: movieId
    });
  };
};
