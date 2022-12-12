import { useCallback, useContext, useEffect, useState } from 'react';
import { MovieQueryTypeActions, useQueryMovie } from 'hooks/useQueryMovie';
import { LightboxContext } from 'context';
import { LightboxSize, Movie } from 'components';
import { MovieListActions } from 'store/actionCreators';
import { Dispatch } from 'redux';
import { ServerMovie, transformMovieMap } from 'hooks/utils';

interface IUseMovieService {
  defaultMovie: Movie;
  movieAction: (movie: Movie) => (dispatch: Dispatch<MovieListActions>) => void;
  movieQueryTypeActions: MovieQueryTypeActions;
}

export const useMovieService = ({
  defaultMovie,
  movieAction,
  movieQueryTypeActions
}: IUseMovieService) => {
  const [newMovie, setNewMovie] = useState(defaultMovie);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { setLightbox } = useContext(LightboxContext);

  const { isError, isLoading, isSuccess, data } = useQueryMovie(
    newMovie,
    isConfirmed,
    movieQueryTypeActions
  );

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
      setLightbox(oldLightbox => ({
        ...oldLightbox,
        lightboxSize: LightboxSize.SMALL
      }));
    }
  }, [isSuccess, data]);

  return { isError, isLoading, isSuccess, isConfirmed, handleConfirm };
};
