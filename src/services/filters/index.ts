import { IDropDownItem, IMovieItem } from 'components';

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
