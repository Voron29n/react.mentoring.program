import { useCallback, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { Movie } from 'components';
import { MovieQueryTypeActions, useQueryMovie } from 'hooks/useQueryMovie';
import { ServerMovie, transformMovieMap } from 'hooks/utils';
import { MovieDetailActions, MovieListActions } from 'store/actionCreators';

interface IUseMovieService {
  defaultMovie: Movie;
  successCallback?: () => void;
  movieAction: (
    movie: Movie,
    searchParams?: URLSearchParams,
    setSearchParams?: (searchParams: URLSearchParams) => void
  ) => (dispatch: Dispatch<MovieListActions | MovieDetailActions>) => void;
  movieQueryTypeActions: MovieQueryTypeActions;
}

export const useMovieService = ({
  defaultMovie = {} as Movie,
  successCallback = () => {},
  movieAction,
  movieQueryTypeActions
}: IUseMovieService) => {
  const [newMovie, setNewMovie] = useState(defaultMovie);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { isError, isLoading, isSuccess, data } = useQueryMovie({
    movie: newMovie,
    isConfirmed,
    movieTypeAction: movieQueryTypeActions
  });

  const handleConfirm = useCallback((movie: Movie) => {
    setNewMovie(movie);
    setIsConfirmed(true);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      movieAction(
        (data as ServerMovie).id !== undefined
          ? transformMovieMap<Movie>(data as ServerMovie)
          : newMovie
      );
      successCallback();
    }
  }, [isSuccess, data]);

  return { isError, isLoading, isSuccess, isConfirmed, handleConfirm };
};
