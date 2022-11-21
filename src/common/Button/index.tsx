import * as React from 'react';
import './style.scss';

interface IButtonProps {
  text: string;
  classNames?: Array<string>;
  onClick: () => void;
}

export const Button = ({ text, classNames, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={['common__button', ...classNames].join(' ')}
    >
      {text}
    </button>
  );
};
