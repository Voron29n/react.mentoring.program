import React from 'react';
import './style.scss';
import { CONGRATULATIONS_ADD_MOVIE } from 'utils/constant';
import congratulationsIcon from 'images/congratulations.svg';

const Congratulations = () => {
  const { headline, text } = CONGRATULATIONS_ADD_MOVIE;
  return (
    <div className="congratulations__container">
      <div className="congratulations_icon">
        <img src={congratulationsIcon} />
      </div>
      <div className="headline upper__text">{headline}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export { Congratulations };
