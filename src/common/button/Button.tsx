import * as React from 'react';
import './style.scss';
import { CSSProperties } from 'react';

export interface IButtonFontProps {
  text: string;
  isUpperCase: boolean;
  style: CSSProperties;
}

interface IButtonProps {
  frontData: IButtonFontProps;
  onClick: () => void;
}

export const Button = ({ frontData, onClick }: IButtonProps) => {
  const { text, isUpperCase, style } = frontData;

  return (
    <div
      style={style}
      onClick={onClick}
      className={`button__container ${isUpperCase ? 'upper__text' : ''}`}
    >
      <div className={'button__text'}>{text}</div>
    </div>
  );
};
