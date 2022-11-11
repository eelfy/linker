import { FC } from 'react';
import { IconBehaviorProps } from './IconTypes';
import IconTemplate from './IconTemplate';

const IconBehavior: FC<IconBehaviorProps> = ({
  active = false,
  children,
  ...other
}) => (
  <IconTemplate active={active} {...other}>
    {children}
  </IconTemplate>
);

export default IconBehavior;
