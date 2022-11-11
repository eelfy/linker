import { Dispatch, SetStateAction } from 'react';
import { Link } from '../../store/stores/LinksStore';

interface LinksTableProps {}

interface LinksTableBehaviorProps extends LinksTableProps {}
interface LinksTableTemplateProps extends LinksTableProps {
  links: Link[];
  isPopUpVisible: boolean;
  setIsPopUpVisible: Dispatch<SetStateAction<boolean>>;
  plusButtonHandler: PlusButtonHandler;
}

type PlusButtonHandler = () => void;

export type {
  LinksTableBehaviorProps, LinksTableTemplateProps,
  PlusButtonHandler,
};
