import React from 'react';
import { FetchErrorMessage, Movie, MovieItem, Spinner } from 'components';
import './style.scss';

interface IMovieListViewProps {
  movieList: Array<Movie>;
  error: string;
  loading: boolean;
}

export const MovieListView = ({
  movieList,
  error,
  loading
}: IMovieListViewProps) => {
  const errorMessage = error ? <FetchErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content =
    error || loading ? null : (
      <>
        <div className='movie__count'>
          <span>{movieList?.length}</span>movies found
        </div>
        <div className='movie__list'>
          {movieList?.map(movieItem => (
            <MovieItem key={movieItem.id} movieItem={movieItem} />
          ))}
        </div>
      </>
    );

  return (
    <div className='movie__view'>{spinner || errorMessage || content}</div>
  );
};
