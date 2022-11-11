import { FC, useState } from 'react';
import { LinksEditPopUpBehaviorProps } from './LinksEditPopUpTypes';
import LinksEditPopUpTemplate from './LinksEditPopUpTemplate';

const LinksEditPopUpBehavior: FC<LinksEditPopUpBehaviorProps> = ({
  visible,
  setVisible,
}) => (
  <LinksEditPopUpTemplate
    visible={visible}
    setVisible={setVisible}
  />
);

export default LinksEditPopUpBehavior;
