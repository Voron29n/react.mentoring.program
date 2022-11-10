import { Confirm } from 'components/Confirm/Confirm';
import { CONFIRM_COMPONENT } from 'utils/constant';
import { ILightboxProps, LightboxSize } from 'containers/Lightbox/Lightbox';
import React, { Dispatch } from 'react';
import MovieForm from 'containers/MovieForm/MovieForm';
import { IMovieItem } from 'components/MovieItem/MovieItem';

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
