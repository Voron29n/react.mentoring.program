import React from 'react';
import {
  Congratulations,
  ILightboxProps,
  LightboxSize,
  Movie,
  MovieForm
} from 'components';

const handleSubmitAddMovie =
  (
    addMovies: (movie: Movie) => void,
    openLightbox: (lightbox: ILightboxProps) => void
  ) =>
  (movie: Movie) => {
    addMovies(movie);
    openLightbox({
      lightboxSize: LightboxSize.SMALL,
      children: <Congratulations />
    });
  };

export const handleAddMovie = (
  addMovies: (movie: Movie) => void,
  openLightbox: (lightbox: ILightboxProps) => void
) => {
  const onSubmitAddMovie = handleSubmitAddMovie(addMovies, openLightbox);

  openLightbox({
    lightboxSize: LightboxSize.LARGE,
    children: <MovieForm onSubmit={onSubmitAddMovie} headline={'Add movie'} />
  });
};
