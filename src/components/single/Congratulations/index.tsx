import React, { memo } from 'react';
import { CONGRATULATIONS_ADD_MOVIE } from 'utils';
import congratulationsIcon from 'images/congratulations.svg';
import './style.scss';

const CongratulationsComponent = () => {
  const { headline, text } = CONGRATULATIONS_ADD_MOVIE;
  return (
    <div className='congratulations__container'>
      <div className='congratulations_icon'>
        <img src={congratulationsIcon} alt={headline} />
      </div>
      <div className='headline upper__text'>{headline}</div>
      <div className='text'>{text}</div>
    </div>
  );
};

export const Congratulations = memo(CongratulationsComponent);
