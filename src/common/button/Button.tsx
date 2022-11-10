import * as React from 'react';
import './style.scss';

interface IButtonProps {
  text: string;
  classNames?: Array<string>;
  onClick: () => void;
}

export const Button = ({ text, classNames, onClick }: IButtonProps) => {
  const containerClassNames = classNames.join(' ');
  return (
    <div
      onClick={onClick}
      className={`button__container ${containerClassNames}`}
    >
      <div className="text">{text}</div>
    </div>
  );
};
