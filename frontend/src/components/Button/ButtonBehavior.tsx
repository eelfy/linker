import { FC } from 'react';
import { ButtonBehaviorProps } from './ButtonTypes';
import ButtonTemplate from './ButtonTemplate';

const ButtonBehavior: FC<ButtonBehaviorProps> = ({ ...other }) => (
  <ButtonTemplate {...other} />
);

export default ButtonBehavior;
