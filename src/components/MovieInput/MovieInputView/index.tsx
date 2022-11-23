import React from 'react';
import './style.scss';

enum MovieInputSize {
  SMALL = 'small__input',
  LARGE = 'large__input'
}

interface IMovieInputView {
  label: string;
  customClasses: Array<string>;
  children?: JSX.Element | JSX.Element[];
}

const MovieInputView = ({
  customClasses,
  label,
  children
}: IMovieInputView) => {
  return (
    <>
      <div className={`movie__input__container ${customClasses.join(' ')}`}>
        <div className='label upper__text'>{label}</div>
        {children}
      </div>
    </>
  );
};

export { MovieInputView, MovieInputSize };
