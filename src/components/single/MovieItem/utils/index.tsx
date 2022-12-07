import React from 'react';
import {
  Confirm,
  ILightboxProps,
  LightboxSize,
  Movie,
  MovieForm
} from 'components';
import { CONFIRM_COMPONENT } from 'utils';

const handleDeleteAction = (
  movieItem: Movie,
  deleteMovies: (id: number) => void,
  openLightbox: (lightbox: ILightboxProps) => void,
  closeLightbox: () => void
) => {
  const handleConfirm = () => {
    deleteMovies(movieItem.id);
    closeLightbox();
  };

  openLightbox({
    lightboxSize: LightboxSize.SMALL,
    children: (
      <Confirm onClick={handleConfirm} {...CONFIRM_COMPONENT.DELETE_ACTION} />
    )
  });
};

const handleEditAction = (
  movieItem: Movie,
  editMovie: (editMovieItem: Movie) => void,
  openLightbox: (lightbox: ILightboxProps) => void,
  closeLightbox: () => void
) => {
  const handleEditMovie = (editedMovie: Movie) => {
    editMovie(editedMovie);
    closeLightbox();
  };

  const lightboxChildren = (
    <MovieForm
      onSubmit={handleEditMovie}
      headline={'Edit movie'}
      editMovieItem={movieItem}
    />
  );

  openLightbox({
    lightboxSize: LightboxSize.LARGE,
    children: lightboxChildren
  });
};

export { handleDeleteAction, handleEditAction };
