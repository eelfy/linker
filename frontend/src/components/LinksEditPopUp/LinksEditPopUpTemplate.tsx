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
  linkValue,
  descriptionValue,
  updateLinkValue,
  updateDescriptionValue,
  acceptChangesHandler,
}) => (
  <PopUp
    visible={visible}
    setVisible={setVisible}
  >
    <PopUpBody>
      <Input
        value={linkValue}
        onChange={updateLinkValue}
        placeholder={Texts.link}
      />
      <Input
        value={descriptionValue}
        onChange={updateDescriptionValue}
        placeholder={Texts.tag}
      />
      <Button onClick={acceptChangesHandler}>{Texts.accept}</Button>
    </PopUpBody>
  </PopUp>
);

export default LinksEditPopUpTemplate;
