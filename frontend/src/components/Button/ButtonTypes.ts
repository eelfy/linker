import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  shape?: ButtonShape;
}

interface ButtonBehaviorProps extends ButtonProps {}
interface ButtonTemplateProps extends ButtonProps {}

interface ButtonStyledProps {
  shape: ButtonShape;
}

type ButtonShape = 'circle' | 'default';

export type {
  ButtonBehaviorProps, ButtonTemplateProps,
  ButtonStyledProps,
};
