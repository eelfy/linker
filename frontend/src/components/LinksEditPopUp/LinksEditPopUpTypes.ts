import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface LinksEditPopUpProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface LinksEditPopUpBehaviorProps extends LinksEditPopUpProps {
  initDescriptionValue?: string;
  initLinkValue?: string;
  linkId?: number;
}
interface LinksEditPopUpTemplateProps extends LinksEditPopUpProps {
  linkValue: string;
  descriptionValue: string;
  updateLinkValue: UpdateConcreteInput;
  updateDescriptionValue: UpdateConcreteInput;
  acceptChangesHandler: () => void;
}

type UpdateInputHandler = (event: ChangeEvent<HTMLInputElement>, setState: Dispatch<SetStateAction<string>>) => void;
type UpdateConcreteInput = (event: ChangeEvent<HTMLInputElement>) => void;

export type {
  LinksEditPopUpBehaviorProps, LinksEditPopUpTemplateProps,
  UpdateInputHandler, UpdateConcreteInput,
};
