import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/RootStore';
import { DeleteHandler, EditHandler, LinkCardBehaviorProps } from './LinkCardTypes';
import LinkCardTemplate from './LinkCardTemplate';

const LinkCardBehavior: FC<LinkCardBehaviorProps> = observer(({
  id,
  tag,
  link,
  isEditMode,
}) => {
  const {
    LinksStore: {
      deleteLink,
    },
  } = useStore();

  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  const deleteHandler: DeleteHandler = () => {
    deleteLink(id);
  };
  const editHandler: EditHandler = () => {
    setIsPopUpVisible(true);
  };

  return (
    <LinkCardTemplate
      id={id}
      tag={tag}
      link={link}
      deleteHandler={deleteHandler}
      editHandler={editHandler}
      isPopUpVisible={isPopUpVisible}
      setIsPopUpVisible={setIsPopUpVisible}
      isEditMode={isEditMode}
    />
  );
});

export default LinkCardBehavior;
