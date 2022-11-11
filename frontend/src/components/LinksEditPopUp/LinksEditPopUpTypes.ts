import { Dispatch, SetStateAction } from 'react';

interface LinksEditPopUpProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface LinksEditPopUpBehaviorProps extends LinksEditPopUpProps {}
interface LinksEditPopUpTemplateProps extends LinksEditPopUpProps {}

export type { LinksEditPopUpBehaviorProps, LinksEditPopUpTemplateProps };
