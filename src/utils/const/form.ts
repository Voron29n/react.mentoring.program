import { MovieInputSize } from 'components/MovieInput/MovieInputView/MovieInputView';
import { MovieItemKey } from 'components/MovieItem/MovieItem';

interface IMovieFormConst {
  label: string;
  placeholder: string;
  customClasses: Array<string>;
  keyName: MovieItemKey;
  size: MovieInputSize;
}

const MOVIE_FORM = [
  {
    label: 'title',
    placeholder: 'Title',
    customClasses: [] as Array<string>,
    keyName: MovieItemKey.TITLE,
    size: MovieInputSize.SMALL
  },
  {
    label: 'release date',
    placeholder: 'Select Date',
    customClasses: [] as Array<string>,
    keyName: MovieItemKey.DATE,
    size: MovieInputSize.SMALL
  },
  {
    label: 'movie url',
    placeholder: 'https://',
    customClasses: [] as Array<string>,
    keyName: MovieItemKey.MOVIE_URL,
    size: MovieInputSize.SMALL
  },
  {
    label: 'rating',
    placeholder: '7.8',
    customClasses: [] as Array<string>,
    keyName: MovieItemKey.RATING,
    size: MovieInputSize.SMALL
  },
  {
    label: 'genre',
    placeholder: 'Select Genre',
    customClasses: [] as Array<string>,
    keyName: MovieItemKey.GENRE,
    size: MovieInputSize.SMALL
  },
  {
    label: 'runtime',
    placeholder: 'minutes',
    customClasses: [] as Array<string>,
    keyName: MovieItemKey.RUNTIME,
    size: MovieInputSize.SMALL
  },
  {
    label: 'overview',
    placeholder: 'Movie description',
    customClasses: ['overview'] as Array<string>,
    keyName: MovieItemKey.OVERVIEW,
    size: MovieInputSize.LARGE
  }
] as Array<IMovieFormConst>;

export { MOVIE_FORM, IMovieFormConst };
