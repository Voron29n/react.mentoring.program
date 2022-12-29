import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Movie } from 'components';
import {
  fetchReq,
  generateMoviesUrl,
  ServerMovie,
  transformMovieMap
} from 'hooks/utils';
import { baseApiConfig } from 'utils';

const checkMovieImage = async (imageUrl: string): Promise<boolean> => {
  return fetch(imageUrl)
    .then(async res => {
      if (res.ok) {
        const imageBlob = await res.blob();
        const imageText = await imageBlob.text();
        return !imageText.includes('File not Found');
      }
    })
    .catch(() => {
      return false;
    });
};

const filterEmptyMovieImages = async (movieList: Array<Movie>) => {
  const list: Array<Movie> = [];
  for (const movie of movieList) {
    if (list.length === baseApiConfig._baseMovies) {
      return list;
    } else {
      const isCheck = await checkMovieImage(movie.posterPath);
      if (isCheck) {
        list.push(movie);
      }
    }
  }
  return list;
};

export const fetchMovieList = async (
  activeGenre: string,
  activeSortType: string,
  searchQuery: string
): Promise<Array<Movie>> => {
  const movieListUrl = generateMoviesUrl(
    activeGenre,
    activeSortType,
    searchQuery
  );
  const res = await fetchReq({ url: movieListUrl.toString() });
  const json = await res.json();

  const movieList = await json.data
    .map((serverMovie: ServerMovie) => transformMovieMap<Movie>(serverMovie))
    .filter((movie: Movie) => !!movie.runtime);

  return filterEmptyMovieImages(movieList);
};

export const useQueryMovieList = (
  activeGenre: string,
  activeSortType: string,
  searchQuery: string
): UseQueryResult<Array<Movie>> => {
  return useQuery({
    queryKey: ['movieList', activeGenre, activeSortType, searchQuery],
    queryFn: () => fetchMovieList(activeGenre, activeSortType, searchQuery)
  });
};
