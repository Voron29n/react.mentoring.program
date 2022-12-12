import React, { createContext, Dispatch, SetStateAction } from 'react';
import {
  AddMovie,
  DeleteMovie,
  ILightboxProps,
  LightboxSize,
  Movie
} from 'components';

import { EditMovie } from 'components/service/EditMovie';

interface IHandleActionsProps {
  movie?: Movie;
  setLightbox: Dispatch<SetStateAction<ILightboxProps>>;
}

export interface ILightboxMovieActionsProps extends IHandleActionsProps {
  action: MovieActionTypes;
}

const handleDeleteAction = ({ movie, setLightbox }: IHandleActionsProps) => {
  setLightbox({
    lightboxSize: LightboxSize.SMALL,
    children: <DeleteMovie deletedMovie={movie} />
  });
};

const handleEditAction = ({ movie, setLightbox }: IHandleActionsProps) => {
  setLightbox({
    lightboxSize: LightboxSize.LARGE,
    children: <EditMovie editedMovie={movie} />
  });
};

const handleAddAction = ({ setLightbox }: IHandleActionsProps) => {
  setLightbox({
    lightboxSize: LightboxSize.LARGE,
    children: <AddMovie />
  });
};

export enum MovieActionTypes {
  ADD = 'ADD',
  EDIT = 'EDIT',
  DELETE = 'DELETE'
}

export const handleLightboxMovieActions = ({
  action,
  setLightbox,
  movie
}: ILightboxMovieActionsProps) => {
  switch (action) {
    case MovieActionTypes.DELETE:
      handleDeleteAction({ movie, setLightbox });
      break;
    case MovieActionTypes.ADD:
      handleAddAction({ setLightbox });
      break;
    case MovieActionTypes.EDIT:
      handleEditAction({ movie, setLightbox });
      break;
  }
};

export type ILightboxContext = {
  lightbox: ILightboxProps;
  setLightbox: Dispatch<SetStateAction<ILightboxProps>>;
  handleLightboxMovieActions: ({
    action,
    setLightbox,
    movie
  }: ILightboxMovieActionsProps) => void;
};

export const LightboxContext = createContext<ILightboxContext>(
  {} as ILightboxContext
);
