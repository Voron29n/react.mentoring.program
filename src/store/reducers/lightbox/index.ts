import {
  LightboxAction,
  LightboxActionTypes,
  LightboxState
} from 'store/types/lightbox';

const defaultState: LightboxState = {
  lightbox: null,
  isLightboxOpen: false
};

export const lightboxReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = defaultState,
  action: LightboxAction
): LightboxState => {
  switch (action.type) {
    case LightboxActionTypes.OPEN_LIGHTBOX:
      return { isLightboxOpen: true, lightbox: action.payload };
    case LightboxActionTypes.CLOSE_LIGHTBOX:
      return { isLightboxOpen: false, lightbox: null };
    default:
      return state;
  }
};
