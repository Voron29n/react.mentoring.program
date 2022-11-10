import React, { Dispatch, useEffect } from 'react';

import closeImg from 'images/close.png';
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
    <div className="lightbox__container">
      <div className={`window ${lightboxSize}`}>
        <div className="content">{children}</div>
        <div className="close__container">
          <img src={closeImg} alt={closeImg} onClick={handleClose} />
        </div>
      </div>
    </div>
  );
};

export { Lightbox, ILightboxProps, LightboxSize };
