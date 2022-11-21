import React, { Dispatch, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import './style.scss';

enum LightboxSize {
  SMALL = 'small',
  LARGE = 'large'
}

interface ILightboxProps {
  lightboxSize: LightboxSize;
  setLightboxOpen: Dispatch<boolean>;
  children?: JSX.Element | JSX.Element[];
}

const Lightbox = ({
  lightboxSize,
  setLightboxOpen,
  children
}: ILightboxProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setLightboxOpen(false);
  };

  return (
    <div className={'lightbox__container'}>
      <div className={`window ${lightboxSize}`}>
        <div className={'content'}>{children}</div>
        <IoClose className={'close__container'} onClick={handleClose} />
      </div>
    </div>
  );
};

export { Lightbox, ILightboxProps, LightboxSize };
