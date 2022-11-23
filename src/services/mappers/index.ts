import { IMovieItem } from 'components';
import { MOVIE_LIST } from 'common/const';

export const mapMockDataToMovieList = (): Array<IMovieItem> => {
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

export const mapRuntimeToString = (movieItemElement: number) => {
  const hours = Math.floor(movieItemElement / 60);
  const minutes = movieItemElement % 60;
  const hoursStr = hours > 0 ? `${hours}h` : '';
  const minutesStr = minutes > 0 ? `${minutes}min` : '';
  return `${hoursStr} ${minutesStr}`;
};
