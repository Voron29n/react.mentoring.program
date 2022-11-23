import React from 'react';
import { Button } from 'common/components';
import {
  FORM_MOVIE_RESET_BUTTON,
  FORM_MOVIE_SUBMIT_BUTTON
} from 'common/const';
import './style.scss';

interface IFormMovieView {
  smallInputs: JSX.Element | JSX.Element[];
  largeInputs: JSX.Element | JSX.Element[];
  headline: string;
  handleReset: () => void;
  handleSubmit: () => void;
}

export const MovieFormView = ({
  headline,
  smallInputs,
  largeInputs,
  handleReset,
  handleSubmit
}: IFormMovieView) => {
  return (
    <div className='movie__form__container'>
      <div className='headline upper__text'>{headline}</div>
      <div className='movie__data'>
        {smallInputs && (
          <div className='movie__small__inputs'>{smallInputs}</div>
        )}
        {largeInputs && (
          <div className='movie__large__inputs'>{largeInputs}</div>
        )}
      </div>
      <div className='movie__form__buttons'>
        <Button {...FORM_MOVIE_RESET_BUTTON} onClick={handleReset} />
        <Button {...FORM_MOVIE_SUBMIT_BUTTON} onClick={handleSubmit} />
      </div>
    </div>
  );
};
