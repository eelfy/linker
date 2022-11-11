import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps extends
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

interface InputBehaviorProps extends InputProps {}
interface InputTemplateProps extends InputProps {}

export type { InputBehaviorProps, InputTemplateProps };
