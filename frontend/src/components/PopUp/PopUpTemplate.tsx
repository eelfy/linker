import { FC } from 'react';
import Card from '../Card';
import { Shadow } from './PopUpStyled';
import { PopUpTemplateProps } from './PopUpTypes';

const PopUpTemplate: FC<PopUpTemplateProps> = ({ closePopUp, children }) => (
  <Shadow onClick={closePopUp}>
    <Card>
      {children}
    </Card>
  </Shadow>
);

export default PopUpTemplate;
