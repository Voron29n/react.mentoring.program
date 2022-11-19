import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import { IMovieItem } from 'components/MovieItem/MovieItem';
import useHovering from 'utils/hooks/useHovering';
import { DropDown } from 'components/DropDown/DropDown';
import movieAction from 'images/movieAction.svg';
import { MOVIE_ACTION } from 'utils/const/viewComponents';
import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';

const dropDownClass = ['movie__item__drop-down'];

interface IMovieItemProps {
  movieItem: IMovieItem;
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

  useEffect(() => {
    if (!isHovering) {
      setIsBarOpen(false);
    }
  }, [isHovering]);

  const handleActionClick = () => setIsBarOpen(true);

  const { title, genres, releaseDate, posterPath } = movieItem;
  const genreText = genres.join(', ');

  return (
    <div className={'movie__item__container'} ref={refContainer}>
      <div className="item" onClick={handleClick}>
        <img src={posterPath} alt="" />
        <div className="info">
          <div>{title}</div>
          <div className="release">{new Date(releaseDate).getFullYear()}</div>
        </div>
        <div className="genre">{genreText}</div>
      </div>
      {isHovering &&
        (isBarOpen ? (
          <DropDown
            isCloseIcon={true}
            classNames={dropDownClass}
            selectList={MOVIE_ACTION}
            setSelectedItem={handleSelectedDropdownItem}
            setIsBarOpen={setIsBarOpen}
          />
        ) : (
          <img
            src={movieAction}
            className="actions"
            alt="actions"
            onClick={handleActionClick}
          />
        ))}
    </div>
  );
};
