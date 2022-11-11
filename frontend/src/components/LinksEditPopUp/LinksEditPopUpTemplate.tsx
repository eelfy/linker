import { FC } from 'react';
import { Texts } from '../../consts';
import Button from '../Button';
import Input from '../Input';
import PopUp from '../PopUp';
import { PopUpBody } from './LinksEditPopUpStyled';
import { LinksEditPopUpTemplateProps } from './LinksEditPopUpTypes';

const LinksEditPopUpTemplate: FC<LinksEditPopUpTemplateProps> = ({
  visible,
  setVisible,
}) => (
  <PopUp
    visible={visible}
    setVisible={setVisible}
  >
    <PopUpBody>
      <Input placeholder={Texts.link} />
      <Input placeholder={Texts.tag} />
      <Button>{Texts.accept}</Button>
    </PopUpBody>
  </PopUp>
);

export default LinksEditPopUpTemplate;
