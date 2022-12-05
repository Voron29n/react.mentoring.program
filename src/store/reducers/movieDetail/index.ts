import {
  MovieDetailAction,
  MovieDetailActionTypes,
  MovieDetailState
} from 'store/types/movieDetail';

const defaultState: MovieDetailState = {
  movieDetail: null
};

export const movieDetailReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = defaultState,
  action: MovieDetailAction
): MovieDetailState => {
  switch (action.type) {
    case MovieDetailActionTypes.SET_MOVIE_DETAIL:
      return { movieDetail: action.payload };
    case MovieDetailActionTypes.DELETE_MOVIE_DETAIL:
      return { movieDetail: null };
    default:
      return state;
  }
};
