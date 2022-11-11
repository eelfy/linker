import { FC } from 'react';
import { InputBehaviorProps } from './InputTypes';
import InputTemplate from './InputTemplate';

const InputBehavior: FC<InputBehaviorProps> = ({ ...other }) => (
  <InputTemplate {...other} />
);

export default InputBehavior;
