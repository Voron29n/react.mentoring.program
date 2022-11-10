import React from 'react';
import bitmap from 'images/bitmap.png';
import './style.scss';

interface IHeaderProps {
  children?: JSX.Element | JSX.Element[];
}

const Header = ({ children }: IHeaderProps) => {
  const style = {
    backgroundImage: `url(${bitmap})`
  };

  return (
    <header style={style} className={'header__container'}>
      {children}
    </header>
  );
};

export default Header;
