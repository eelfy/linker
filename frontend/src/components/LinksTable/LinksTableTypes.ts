import { Dispatch, SetStateAction } from 'react';
import { Link } from '../../store/stores/LinksStore';

interface LinksTableProps {
  isEditMode: boolean;
}

interface LinksTableBehaviorProps extends LinksTableProps {}
interface LinksTableTemplateProps extends LinksTableProps {
  links: Link[];
  isPopUpVisible: boolean;
  setIsPopUpVisible: Dispatch<SetStateAction<boolean>>;
  plusButtonHandler: PlusButtonHandler;
  createUrlWiaLinksObjectHandler: () => void;
  url: string;
}

type PlusButtonHandler = () => void;

export type {
  LinksTableBehaviorProps, LinksTableTemplateProps,
  PlusButtonHandler,
};
