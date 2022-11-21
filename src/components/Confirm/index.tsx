import React from 'react';
import { Button } from 'common';
import { CONFIRM_BUTTON } from 'utils/const';
import './style.scss';

interface IConfirmFormProps {
  headline: string;
  confirmText: string;
  handleClick: () => void;
}

export const Confirm = ({
  headline,
  confirmText,
  handleClick
}: IConfirmFormProps) => (
  <div className={'confirm__form__container'}>
    <div className={'headline upper__text'}>{headline}</div>
    <div className={'confirm__text'}>{confirmText}</div>
    <div className={'confirm__button__container'}>
      <Button onClick={handleClick} {...CONFIRM_BUTTON} />
    </div>
  </div>
);
