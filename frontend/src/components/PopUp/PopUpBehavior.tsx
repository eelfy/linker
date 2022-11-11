import { FC } from 'react';
import { createPortal } from 'react-dom';
import { popUpRoot } from '../../consts';
import { ClosePopUp, PopUpBehaviorProps } from './PopUpTypes';
import PopUpTemplate from './PopUpTemplate';

const PopUpBehavior: FC<PopUpBehaviorProps> = ({
  visible,
  setVisible,
  children,
}) => {
  const closePopUp:ClosePopUp = () => {
    setVisible(false);
  };

  return visible ? createPortal(
    <PopUpTemplate closePopUp={closePopUp}>{children}</PopUpTemplate>,
    popUpRoot!,
  ) : null;
};

export default PopUpBehavior;
