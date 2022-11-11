import { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

interface IconBehaviorProps extends IconProps {
  active?: boolean;
}
interface IconTemplateProps extends IconProps {
  active: boolean;
}

interface IIconStyled extends HTMLAttributes<HTMLDivElement> {
  active: boolean
}

export type { IconBehaviorProps, IconTemplateProps, IIconStyled };
