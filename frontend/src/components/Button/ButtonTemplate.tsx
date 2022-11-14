import { FC } from 'react';
import { ButtonStyled } from './ButtonStyled';
import { ButtonTemplateProps } from './ButtonTypes';

const ButtonTemplate: FC<ButtonTemplateProps> = (
  {
    shape,
    ...other
  },
  // @ts-expect-error
) => <ButtonStyled shape={shape} {...other} />;

export default ButtonTemplate;
