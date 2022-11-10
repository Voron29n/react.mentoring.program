import React from 'react';
import './style.scss';

interface IFooterProps {
  children?: JSX.Element | JSX.Element[];
}
export const Footer = ({ children }: IFooterProps) => {
  return <div className={'footer__container'}>{children}</div>;
};
