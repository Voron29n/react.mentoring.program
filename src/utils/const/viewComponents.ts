import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';

export const SEARCH_COMPONENT = {
  headline: 'find you movie',
  placeholder: 'What do you want to watch?',
  button: {
    text: 'search',
    classNames: ['search__button', 'upper__text']
  }
};

export const CONFIRM_COMPONENT = {
  DELETE_ACTION: {
    headline: 'Delete MOVIE',
    confirmText: 'Are you sure you want to delete this movie?'
  }
};

export const GENRE_LIST = [
  'Fantasy',
  'Adventure',
  'Science Fiction',
  'Drama',
  'Romance'
];

export const GENRE_BAR = [
  { label: 'all' },
  ...GENRE_LIST.map(genreName => ({ label: genreName }))
] as Array<IDropDownItem>;

export const SORT_BAR = {
  labelText: 'sort by',
  list: [
    {
      label: 'release date'
    },
    {
      label: 'name'
    },
    {
      label: 'genre'
    },
    {
      label: 'rating'
    }
  ] as Array<IDropDownItem>
};

export const MOVIE_ACTION = [
  {
    label: 'edit'
  },
  {
    label: 'delete'
  }
] as Array<IDropDownItem>;
