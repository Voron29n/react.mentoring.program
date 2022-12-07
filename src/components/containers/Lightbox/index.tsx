import React from 'react';
import { useActions } from 'hooks';
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
  const { closeLightbox } = useActions();

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
