import React from 'react';
import { CONGRATULATIONS_ADD_MOVIE } from 'utils/const';
import congratulationsIcon from 'images/congratulations.svg';
import './style.scss';

export const Congratulations = () => {
  const { headline, text } = CONGRATULATIONS_ADD_MOVIE;
  return (
    <div className={'congratulations__container'}>
      <div className={'congratulations_icon'}>
        <img src={congratulationsIcon} />
      </div>
      <div className={'headline upper__text'}>{headline}</div>
      <div className={'text'}>{text}</div>
    </div>
  );
};
