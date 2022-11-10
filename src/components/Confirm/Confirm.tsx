import React from 'react';
import './style.scss';
import { Button } from 'common/button/Button';
import { CONFIRM_BUTTON } from 'utils/constant';

interface IConfirmFormProps {
  headline: string;
  confirmText: string;
  handleClick: () => void;
}

const Confirm = ({ headline, confirmText, handleClick }: IConfirmFormProps) => {
  return (
    <div className="confirm__form__container">
      <div className="headline upper__text">{headline}</div>
      <div className="confirm__text">{confirmText}</div>
      <div className="confirm__button__container">
        <Button onClick={handleClick} {...CONFIRM_BUTTON} />
      </div>
    </div>
  );
};

export { Confirm };
