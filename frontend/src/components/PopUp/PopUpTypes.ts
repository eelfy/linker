import { Dispatch, ReactElement, SetStateAction } from 'react';

interface PopUpProps {children: ReactElement}

interface PopUpBehaviorProps extends PopUpProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
interface PopUpTemplateProps extends PopUpProps {
  closePopUp: () => void;
}

export type { PopUpBehaviorProps, PopUpTemplateProps };
