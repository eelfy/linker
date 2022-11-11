import { Dispatch, SetStateAction } from 'react';
import { Link } from '../../store/stores/LinksStore';

interface LinkCardProps extends Link {}

interface LinkCardBehaviorProps extends LinkCardProps {}
interface LinkCardTemplateProps extends Omit<LinkCardProps, 'id'> {
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
