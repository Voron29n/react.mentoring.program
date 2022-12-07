import { Dispatch } from 'redux';
import { ILightboxProps } from 'components';
import { LightboxAction, LightboxActionTypes } from 'store/types/lightbox';

export const openLightbox = (lightbox: ILightboxProps) => {
  return (dispatch: Dispatch<LightboxAction>) => {
    dispatch({
      type: LightboxActionTypes.OPEN_LIGHTBOX,
      payload: lightbox
    });
  };
};

export const closeLightbox = () => {
  return (dispatch: Dispatch<LightboxAction>) => {
    dispatch({
      type: LightboxActionTypes.CLOSE_LIGHTBOX
    });
  };
};
