import React, { memo } from 'react';
import './style.scss';

interface IButtonProps {
  text: string;
  classNames?: Array<string>;
  onClick: () => void;
}

const ButtonComponent = ({ text, classNames, onClick }: IButtonProps) => {
  let classNameAtr = ['common__button'] as Array<string>;
  if (classNames) {
    classNameAtr = [...classNameAtr, ...classNames];
  }
  return (
    <button onClick={onClick} className={classNameAtr.join(' ')}>
      {text}
    </button>
  );
};

export const Button = memo(ButtonComponent);
