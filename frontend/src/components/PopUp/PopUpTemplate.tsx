import { FC } from 'react';
import Card from '../Card';
import { Shadow } from './PopUpStyled';
import { PopUpTemplateProps } from './PopUpTypes';

const PopUpTemplate: FC<PopUpTemplateProps> = ({ closePopUp, children }) => (
  <Shadow onClick={closePopUp}>
    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events  */}
    <div onClick={(event) => event.stopPropagation()}>
      <Card>
        {children}
      </Card>
    </div>
  </Shadow>
);

export default PopUpTemplate;
