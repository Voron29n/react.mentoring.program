import { IMovieItem } from 'components/MovieItem/MovieItem';
import { MOVIE_LIST } from 'utils/const/moviList';
import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';

export const getMovieListMockData = (): Array<IMovieItem> => {
  return MOVIE_LIST.map(
    ({
      id,
      title,
      genres,
      release_date,
      vote_average,
      poster_path,
      runtime,
      overview
    }) => {
      return {
        id,
        title,
        genres,
        runtime,
        overview,
        releaseDate: release_date,
        voteAverage: vote_average,
        posterPath: poster_path
      };
    }
  );
};

export const filterMovieList = (
  movieList: Array<IMovieItem>,
  { label: activeGenre }: IDropDownItem,
  { label: activeSortType }: IDropDownItem,
  { label: defaultActiveGenre }: IDropDownItem
) =>
  movieList
    .filter(
      (movieItem: IMovieItem) =>
        activeGenre === defaultActiveGenre ||
        movieItem.genres.includes(activeGenre)
    )
    .sort((movieItem1: IMovieItem, movieItem2: IMovieItem) => {
      switch (activeSortType) {
        case 'name':
          return movieItem1.title.localeCompare(movieItem2.title);
        case 'release date':
          return (
            Date.parse(movieItem2.releaseDate) -
            Date.parse(movieItem1.releaseDate)
          );
        case 'rating':
          return movieItem2.voteAverage - movieItem1.voteAverage;
        case 'genre':
          return movieItem2.genres.length - movieItem1.genres.length;
        default:
          return 0;
      }
    });

export const prepareRuntime = (movieItemElement: number) => {
  const hours = Math.floor(movieItemElement / 60);
  const minutes = movieItemElement % 60;
  const hoursStr = hours > 0 ? `${hours}h` : '';
  const minutesStr = minutes > 0 ? `${minutes}min` : '';
  return `${hoursStr} ${minutesStr}`;
};
