import { IMovieItem } from 'components/MovieItem/MovieItem';
import MovieForm from 'containers/MovieForm/MovieForm';
import { ILightboxProps, LightboxSize } from 'containers/Lightbox/Lightbox';
import React, { Dispatch } from 'react';
import { Congratulations } from 'components/Congratulations/Congratulations';

const addMovie =
  (
    setMovieList: Dispatch<any>,
    setLightbox: Dispatch<ILightboxProps>,
    setIsLightboxOpen: Dispatch<boolean>
  ) =>
  (movieItem: IMovieItem) => {
    setMovieList((prevState: Array<IMovieItem>) => [...prevState, movieItem]);

    const lightboxChildren = <Congratulations />;

    setLightbox({
      lightboxSize: LightboxSize.SMALL,
      setLightboxOpen: () => setIsLightboxOpen(false),
      children: lightboxChildren
    });
    setIsLightboxOpen(true);
  };

export const handleAddMovie =
  (
    setMovieList: Dispatch<any>,
    setLightbox: Dispatch<ILightboxProps>,
    setIsLightboxOpen: Dispatch<boolean>
  ) =>
  () => {
    const onAddMovieSubmit = addMovie(
      setMovieList,
      setLightbox,
      setIsLightboxOpen
    );

    const lightboxChildren = (
      <MovieForm onSubmit={onAddMovieSubmit} headline={'Add movie'} />
    );

    setLightbox({
      lightboxSize: LightboxSize.LARGE,
      setLightboxOpen: () => setIsLightboxOpen(false),
      children: lightboxChildren
    });
    setIsLightboxOpen(true);
  };
