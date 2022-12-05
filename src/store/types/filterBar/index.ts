import { IDropDownItem } from 'components';

export interface FilterBarState {
  activeGenre: IDropDownItem;
  activeSortType: IDropDownItem;
}

export enum FilterBarActionTypes {
  SET_ACTIVE_GENRE = 'SET_ACTIVE_GENRE',
  SET_ACTIVE_SORT_TYPE = 'SET_ACTIVE_SORT_TYPE'
}

export interface SetActiveGenreAction {
  type: FilterBarActionTypes.SET_ACTIVE_GENRE;
  payload: IDropDownItem;
}

export interface SetActiveSortTypeAction {
  type: FilterBarActionTypes.SET_ACTIVE_SORT_TYPE;
  payload: IDropDownItem;
}

export type FilterBarAction = SetActiveGenreAction | SetActiveSortTypeAction;
