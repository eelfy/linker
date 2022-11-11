import { FC } from 'react';
import { InputStyled } from './InputStyled';
import { InputTemplateProps } from './InputTypes';

const InputTemplate: FC<InputTemplateProps> = (
  { ...other },
  // @ts-expect-error
) => <InputStyled {...other} />;

export default InputTemplate;
