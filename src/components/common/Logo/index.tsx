import React, { memo } from 'react';
import logoImg from 'images/netflixroulette.png';
import './style.scss';

const LogoComponent = () => {
  return <img className='logo__img' src={logoImg} alt='logo' />;
};

export const Logo = memo(LogoComponent);
