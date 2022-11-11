import { FC } from 'react';
import { IconStyled } from './IconStyled';
import { IconTemplateProps } from './IconTypes';

const IconTemplate: FC<IconTemplateProps> = ({
  active,
  children,
  ...other
}) => (
  <IconStyled active={active} {...other}>
    {children}
  </IconStyled>
);

export default IconTemplate;
