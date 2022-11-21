import React, { Dispatch } from 'react';
import { Congratulations, IMovieItem } from 'components';
import { ILightboxProps, LightboxSize, MovieForm } from 'containers';

const addMovie =
  (
    setMovieList: Dispatch<any>,
    setLightbox: Dispatch<ILightboxProps>,
    setIsLightboxOpen: Dispatch<boolean>
  ) =>
  (movieItem: IMovieItem) => {
    setMovieList((prevState: Array<IMovieItem>) => [
      ...prevState,
      {
        ...movieItem,
        id: prevState.length++
      }
    ]);

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
