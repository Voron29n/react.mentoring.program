import { IDropDownItem } from 'components';
import { Dispatch } from 'redux';

export enum FilterBarActionTypes {
  SET_ACTIVE_GENRE = 'SET_ACTIVE_GENRE',
  SET_ACTIVE_SORT_TYPE = 'SET_ACTIVE_SORT_TYPE'
}

type SetActiveGenreAction = {
  type: FilterBarActionTypes.SET_ACTIVE_GENRE;
  payload: IDropDownItem;
};

type SetActiveSortTypeAction = {
  type: FilterBarActionTypes.SET_ACTIVE_SORT_TYPE;
  payload: IDropDownItem;
};

export type FilterBarActions = SetActiveGenreAction | SetActiveSortTypeAction;

export const setActiveGenre = (activeGenre: IDropDownItem) => {
  return (dispatch: Dispatch<FilterBarActions>) => {
    dispatch({
      type: FilterBarActionTypes.SET_ACTIVE_GENRE,
      payload: activeGenre
    });
  };
};

export const setActiveSortType = (activeSortType: IDropDownItem) => {
  return (dispatch: Dispatch<FilterBarActions>) => {
    dispatch({
      type: FilterBarActionTypes.SET_ACTIVE_SORT_TYPE,
      payload: activeSortType
    });
  };
};
