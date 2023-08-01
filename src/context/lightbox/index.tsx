import React, { createContext, useMemo, useReducer } from 'react';
import {
  AddMovie,
  DeleteMovie,
  ILightboxProps,
  LightboxSize
} from 'components';
import { EditMovie } from 'components/service/EditMovie';
import {
  actions,
  LightboxActionTypes as ActionTypes,
  LightboxMovieAction
} from './actions';

export const lightboxActions = actions;

export const LightboxActionTypes = ActionTypes;

type MovieState = {
  lightbox: ILightboxProps;
};

export type ILightboxContext = {
  state: MovieState;
  dispatch: React.Dispatch<LightboxMovieAction>;
};
export const lightboxMovieReducer = (
  state: MovieState,
  action: LightboxMovieAction
) => {
  console.log(action);
  switch (action.type) {
    case LightboxActionTypes.ADD_MOVIE_FORM:
      return {
        lightbox: {
          lightboxSize: LightboxSize.LARGE,
          children: <AddMovie />
        }
      };
    case LightboxActionTypes.DELETE_MOVIE:
      return {
        lightbox: {
          lightboxSize: LightboxSize.SMALL,
          children: <DeleteMovie deletedMovie={action.payload.movie} />
        }
      };
    case LightboxActionTypes.EDIT_MOVIE_FORM:
      return {
        lightbox: {
          lightboxSize: LightboxSize.LARGE,
          children: <EditMovie editedMovie={action.payload.movie} />
        }
      };
    case LightboxActionTypes.CLOSE_LIGHTBOX:
      return {
        lightbox: null
      };
    case LightboxActionTypes.CHANGE_LIGHTBOX_SIZE:
      return {
        lightbox: {
          ...state.lightbox,
          lightboxSize: action.payload.lightboxSize
        }
      };
    default:
      return state;
  }
};

export const LightboxContext = createContext<ILightboxContext>(
  {} as ILightboxContext
);

const initialState = {
  lightbox: null
} as MovieState;

interface ILightboxContextProvider {
  children: JSX.Element | JSX.Element[];
}

export const LightboxContextProvider = ({
  children
}: ILightboxContextProvider) => {
  const [state, dispatch] = useReducer(lightboxMovieReducer, initialState);
  const lightboxValue = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <LightboxContext.Provider value={lightboxValue}>
      {children}
    </LightboxContext.Provider>
  );
};
