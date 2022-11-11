import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

interface ButtonBehaviorProps extends ButtonProps {}
interface ButtonTemplateProps extends ButtonProps {}

export type { ButtonBehaviorProps, ButtonTemplateProps };
