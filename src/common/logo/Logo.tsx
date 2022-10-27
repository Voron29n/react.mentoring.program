import React from 'react';
import logoImg from '$images/netflixroulette.png';
import './style.scss';

const Logo = () => {
  return (
    <>
      <img className={'logo__img'} src={logoImg} alt="logo" />
    </>
  );
};

export default Logo;
