import {
  FilterBarAction,
  FilterBarActionTypes,
  FilterBarState
} from 'store/types/filterBar';
import { GENRE_BAR, SORT_BAR } from 'utils';

const defaultState: FilterBarState = {
  activeGenre: GENRE_BAR[0],
  activeSortType: SORT_BAR.list[0]
};

export const filterBarReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = defaultState,
  action: FilterBarAction
): FilterBarState => {
  switch (action.type) {
    case FilterBarActionTypes.SET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
    case FilterBarActionTypes.SET_ACTIVE_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload
      };
    default:
      return state;
  }
};
