import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DropDown, IDropDownItem, Movie } from 'components';
import { useHovering } from 'hooks';
import { MOVIE_ACTION } from 'utils';
import movieAction from 'images/movieAction.svg';
import './style.scss';

const dropDownClass = ['movie__item__drop-down'];

interface IMovieItemProps {
  movieItem: Movie;
  handleClick: () => void;
  handleSelectedDropdownItem: (dropDownItem: IDropDownItem) => void;
}

export const MovieView = ({
  movieItem,
  handleSelectedDropdownItem,
  handleClick
}: IMovieItemProps) => {
  const [isBarOpen, setIsBarOpen] = useState(true);

  const refContainer = useRef<HTMLDivElement>(null);
  const isHovering = useHovering(refContainer);

  const handleSelectedAction = useCallback(
    (dropDownItem: IDropDownItem) => {
      handleSelectedDropdownItem(dropDownItem);
      setIsBarOpen(false);
    },
    [handleSelectedDropdownItem]
  );
  const handleCloseActions = useCallback(() => {
    setIsBarOpen(false);
  }, []);
  const handleActionClick = () => setIsBarOpen(true);

  useEffect(() => {
    if (!isHovering) {
      setIsBarOpen(false);
    }
  }, [isHovering]);

  const { title, genres, releaseDate, posterPath } = movieItem;
  const genreText = genres?.join(', ');

  return (
    <div className='movie__item__container' ref={refContainer}>
      <div className='item' onClick={handleClick}>
        <img className='poster' src={posterPath} alt={title} />
        <div className='info'>
          <div>{title}</div>
          <div className='release'>{new Date(releaseDate).getFullYear()}</div>
        </div>
        <div className='genre'>{genreText}</div>
      </div>
      {isHovering &&
        (isBarOpen ? (
          <DropDown
            closeIcon
            onClose={handleCloseActions}
            classNames={dropDownClass}
            selectList={MOVIE_ACTION}
            onSelected={handleSelectedAction}
          />
        ) : (
          <img
            src={movieAction}
            className='actions'
            alt='actions'
            onClick={handleActionClick}
          />
        ))}
    </div>
  );
};
