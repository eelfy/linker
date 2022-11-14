import { FC } from 'react';
import { ButtonBehaviorProps } from './ButtonTypes';
import ButtonTemplate from './ButtonTemplate';

const ButtonBehavior: FC<ButtonBehaviorProps> = ({
  shape = 'default',
  ...other
}) => (
  <ButtonTemplate shape={shape} {...other} />
);

export default ButtonBehavior;
