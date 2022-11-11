import {
  Dispatch, MouseEvent, ReactElement, SetStateAction,
} from 'react';

interface PopUpProps {children: ReactElement}

interface PopUpBehaviorProps extends PopUpProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
interface PopUpTemplateProps extends PopUpProps {
  closePopUp: ClosePopUp
}

type ClosePopUp = (event: MouseEvent) => void;

export type {
  PopUpProps, PopUpBehaviorProps, PopUpTemplateProps,
  ClosePopUp,
};
