import React, { memo } from 'react';
import congratulationsIcon from 'images/congratulations.svg';
import './style.scss';

interface ICongratulationsProps {
  headline: string;
  text: string;
}

const CongratulationsMemo = ({ headline, text }: ICongratulationsProps) => {
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

export const Congratulations = memo(CongratulationsMemo);
