import React, { useContext } from 'react';
import { ILightboxContext, LightboxContext } from 'context';
import { IoClose } from 'react-icons/io5';
import './style.scss';

enum LightboxSize {
  SMALL = 'small',
  LARGE = 'large'
}

interface ILightboxProps {
  lightboxSize: LightboxSize;
  children?: JSX.Element | JSX.Element[];
}

const Lightbox = ({ lightboxSize, children }: ILightboxProps) => {
  const { setLightbox } = useContext<ILightboxContext>(LightboxContext);
  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className='lightbox__container'>
      <div className={`window ${lightboxSize}`}>
        <div className='content'>{children}</div>
        <IoClose className='close__container' onClick={closeLightbox} />
      </div>
    </div>
  );
};

export { Lightbox, ILightboxProps, LightboxSize };
