import { FC } from 'react';
import { ButtonStyled } from './ButtonStyled';
import { ButtonTemplateProps } from './ButtonTypes';

const ButtonTemplate: FC<ButtonTemplateProps> = (
  { ...other },
  // @ts-expect-error
) => <ButtonStyled {...other} />;

export default ButtonTemplate;
