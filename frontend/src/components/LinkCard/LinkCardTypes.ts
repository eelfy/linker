import { Dispatch, SetStateAction } from 'react';
import { Link } from '../../store/stores/LinksStore';

interface LinkCardProps extends Link {
  isEditMode: boolean;
}

interface LinkCardBehaviorProps extends LinkCardProps {}
interface LinkCardTemplateProps extends LinkCardProps {
  deleteHandler: DeleteHandler;
  editHandler: EditHandler;
  isPopUpVisible: boolean;
  setIsPopUpVisible: Dispatch<SetStateAction<boolean>>
}

type DeleteHandler = () => void;
type EditHandler = () => void;

export type {
  LinkCardBehaviorProps, LinkCardTemplateProps,
  DeleteHandler, EditHandler,
};
