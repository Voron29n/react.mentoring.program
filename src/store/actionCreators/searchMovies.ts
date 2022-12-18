import { Dispatch } from 'redux';
import { IDropDownItem } from 'components';
import { baseApiConfig } from 'utils';

export enum SearchMoviesActionTypes {
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
  SET_ACTIVE_GENRE = 'SET_ACTIVE_GENRE',
  SET_ACTIVE_SORT_TYPE = 'SET_ACTIVE_SORT_TYPE'
}

type SetSearchTextAction = {
  type: SearchMoviesActionTypes.SET_SEARCH_TEXT;
  payload: string;
};

type SetActiveGenreAction = {
  type: SearchMoviesActionTypes.SET_ACTIVE_GENRE;
  payload: IDropDownItem;
};

type SetActiveSortTypeAction = {
  type: SearchMoviesActionTypes.SET_ACTIVE_SORT_TYPE;
  payload: IDropDownItem;
};

export type SearchMoviesActions =
  | SetSearchTextAction
  | SetActiveGenreAction
  | SetActiveSortTypeAction;

export const setSearchText = (searchText: string) => {
  return (dispatch: Dispatch<SearchMoviesActions>) => {
    dispatch({
      type: SearchMoviesActionTypes.SET_SEARCH_TEXT,
      payload: searchText
    });
  };
};

const searchParamsActions = (
  searchName: string,
  activeParam: IDropDownItem,
  searchParams: URLSearchParams,
  setSearchParams: (searchParams: URLSearchParams) => void
): void => {
  if (!!activeParam.value) {
    searchParams.set(searchName, activeParam.value);
    setSearchParams(searchParams);
  } else {
    searchParams.delete(searchName);
    setSearchParams(searchParams);
  }
};

export const setActiveGenre = (
  activeGenre: IDropDownItem,
  searchParams: URLSearchParams,
  setSearchParams: (searchParams: URLSearchParams) => void
) => {
  searchParamsActions(
    baseApiConfig._searchParams.genre,
    activeGenre,
    searchParams,
    setSearchParams
  );

  return (dispatch: Dispatch<SearchMoviesActions>) => {
    dispatch({
      type: SearchMoviesActionTypes.SET_ACTIVE_GENRE,
      payload: activeGenre
    });
  };
};

export const setActiveSortType = (
  activeSortType: IDropDownItem,
  searchParams: URLSearchParams,
  setSearchParams: (searchParams: URLSearchParams) => void
) => {
  searchParamsActions(
    baseApiConfig._searchParams.sortBy,
    activeSortType,
    searchParams,
    setSearchParams
  );

  return (dispatch: Dispatch<SearchMoviesActions>) => {
    dispatch({
      type: SearchMoviesActionTypes.SET_ACTIVE_SORT_TYPE,
      payload: activeSortType
    });
  };
};
