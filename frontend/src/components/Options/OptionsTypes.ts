import {
  Dispatch, MouseEvent, SetStateAction,
} from 'react';

interface OptionsProps {
  options: Option[]
}

interface OptionsBehaviorProps extends OptionsProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface OptionsTemplateProps extends OptionsProps {
  visible: boolean;
}

interface Option {
  content: JSX.Element | string;
  onClick: (event: MouseEvent) => void;
}

export type { OptionsBehaviorProps, OptionsTemplateProps };
