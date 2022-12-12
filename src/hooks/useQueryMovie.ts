import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {
  fetchReq,
  HttpMethod,
  ServerMovie,
  transformMovieMap
} from 'hooks/utils';
import { baseApiConfig } from 'utils';
import { Movie } from 'components';

const fetchDeleteMovie = async (id: number): Promise<Response> => {
  return fetchReq({
    url: `${baseApiConfig._apiBase}movies/${id}`,
    method: HttpMethod.DELETE
  });
};

const fetchEditMovie = async (movie: Movie): Promise<ServerMovie> => {
  const serverMovie: ServerMovie = transformMovieMap<ServerMovie>(movie);
  const res = await fetchReq({
    url: `${baseApiConfig._apiBase}movies`,
    formData: JSON.stringify(serverMovie),
    method: HttpMethod.PUT,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res.json();
};

const fetchAddMovie = async (movie: Movie): Promise<ServerMovie> => {
  const serverMovie: ServerMovie = transformMovieMap<ServerMovie>(movie);
  delete serverMovie.id;
  const res = await fetchReq({
    url: `${baseApiConfig._apiBase}movies`,
    formData: JSON.stringify(serverMovie),
    method: HttpMethod.POST,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return res.json();
};

export enum MovieQueryTypeActions {
  EDIT = 'edit-movie',
  DELETE = 'delete-movie',
  ADD = 'add-movie'
}

export const useQueryMovie = (
  movie: Movie,
  isConfirmed: boolean,
  movieTypeAction: MovieQueryTypeActions
): UseQueryResult<ServerMovie | Response> => {
  const queryDelete = useQuery({
    queryKey: [MovieQueryTypeActions.DELETE, movie.id],
    queryFn: () => fetchDeleteMovie(movie.id),
    enabled: movieTypeAction == MovieQueryTypeActions.DELETE && isConfirmed
  });
  const queryEdit = useQuery({
    queryKey: [MovieQueryTypeActions.EDIT, movie],
    queryFn: () => fetchEditMovie(movie),
    enabled: movieTypeAction == MovieQueryTypeActions.EDIT && isConfirmed
  });
  const queryAdd = useQuery({
    queryKey: [MovieQueryTypeActions.EDIT, movie],
    queryFn: () => fetchAddMovie(movie),
    enabled: movieTypeAction == MovieQueryTypeActions.ADD && isConfirmed
  });

  switch (movieTypeAction) {
    case MovieQueryTypeActions.ADD:
      return queryAdd;
    case MovieQueryTypeActions.EDIT:
      return queryEdit;
    case MovieQueryTypeActions.DELETE:
      return queryDelete;
    default:
      return null;
  }
};
