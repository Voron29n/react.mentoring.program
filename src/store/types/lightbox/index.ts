import { ILightboxProps } from 'components';

export interface LightboxState {
  lightbox: ILightboxProps;
  isLightboxOpen: boolean;
}

export enum LightboxActionTypes {
  CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX',
  OPEN_LIGHTBOX = 'OPEN_LIGHTBOX'
}

export interface CloseLightboxAction {
  type: LightboxActionTypes.CLOSE_LIGHTBOX;
}

export interface OpenLightboxAction {
  type: LightboxActionTypes.OPEN_LIGHTBOX;
  payload: ILightboxProps;
}

export type LightboxAction = OpenLightboxAction | CloseLightboxAction;
