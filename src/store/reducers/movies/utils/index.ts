import { Movie } from 'components';
import { MoviesState } from 'store/types';

export const defaultState: MoviesState = {
  movieList: [],
  loading: false,
  error: null
};

export function editMovie(
  movieList: Array<Movie>,
  changedMovie: Movie
): Array<Movie> {
  return movieList.map(movie =>
    movie.id === changedMovie.id ? changedMovie : movie
  );
}

export function addMovie(
  movieList: Array<Movie>,
  newMovie: Movie
): Array<Movie> {
  return [
    ...movieList,
    {
      ...newMovie,
      id: movieList.length++
    }
  ];
}

export function deleteMovie(
  movieList: Array<Movie>,
  movieId: number
): Array<Movie> {
  return movieList.filter(movie => movie.id !== movieId);
}
