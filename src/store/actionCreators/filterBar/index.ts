import { IDropDownItem } from 'components';
import { Dispatch } from 'redux';
import { FilterBarAction, FilterBarActionTypes } from 'store/types/filterBar';

export const setActiveGenre = (activeGenre: IDropDownItem) => {
  return (dispatch: Dispatch<FilterBarAction>) => {
    dispatch({
      type: FilterBarActionTypes.SET_ACTIVE_GENRE,
      payload: activeGenre
    });
  };
};

export const setActiveSortType = (activeSortType: IDropDownItem) => {
  return (dispatch: Dispatch<FilterBarAction>) => {
    dispatch({
      type: FilterBarActionTypes.SET_ACTIVE_SORT_TYPE,
      payload: activeSortType
    });
  };
};
