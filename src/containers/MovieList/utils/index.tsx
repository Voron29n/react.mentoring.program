import React, { Dispatch } from 'react';
import { Confirm, IMovieItem } from 'components';
import { ILightboxProps, LightboxSize, MovieForm } from 'containers';
import { CONFIRM_COMPONENT } from 'common/const';

const handleDeleteAction = (
  handleDelete: () => void,
  setLightbox: Dispatch<ILightboxProps>,
  setIsLightboxOpen: Dispatch<boolean>
) => {
  const handleConfirm = () => {
    handleDelete();
    setIsLightboxOpen(false);
  };

  const lightboxChildren = (
    <Confirm handleClick={handleConfirm} {...CONFIRM_COMPONENT.DELETE_ACTION} />
  );

  setLightbox({
    lightboxSize: LightboxSize.SMALL,
    setLightboxOpen: () => setIsLightboxOpen(false),
    children: lightboxChildren
  });
  setIsLightboxOpen(true);
};

const handleEditAction = (
  movieItem: IMovieItem,
  editMovie: (editMovieItem: IMovieItem) => void,
  setLightbox: Dispatch<ILightboxProps>,
  setIsLightboxOpen: Dispatch<boolean>
) => {
  const lightboxChildren = (
    <MovieForm
      onSubmit={editMovie}
      headline={'Edit movie'}
      editMovieItem={movieItem}
    />
  );

  setLightbox({
    lightboxSize: LightboxSize.LARGE,
    setLightboxOpen: () => setIsLightboxOpen(false),
    children: lightboxChildren
  });
  setIsLightboxOpen(true);
};

export { handleDeleteAction, handleEditAction };
