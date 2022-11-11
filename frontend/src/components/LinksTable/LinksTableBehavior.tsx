import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { LinksTableBehaviorProps, PlusButtonHandler } from './LinksTableTypes';
import LinksTableTemplate from './LinksTableTemplate';
import { useStore } from '../../store/RootStore';

const LinksTableBehavior: FC<LinksTableBehaviorProps> = observer(() => {
  const {
    LinksStore: {
      links,
      addLink,
    },
  } = useStore();

  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  const plusButtonHandler: PlusButtonHandler = () => {
    setIsPopUpVisible(true);
  };

  return (
    <LinksTableTemplate
      links={links}
      isPopUpVisible={isPopUpVisible}
      setIsPopUpVisible={setIsPopUpVisible}
      plusButtonHandler={plusButtonHandler}
    />
  );
});

export default LinksTableBehavior;
