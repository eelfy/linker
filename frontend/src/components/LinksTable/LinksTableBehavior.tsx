import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { LinksTableBehaviorProps, PlusButtonHandler } from './LinksTableTypes';
import LinksTableTemplate from './LinksTableTemplate';
import { useStore } from '../../store/RootStore';

const LinksTableBehavior: FC<LinksTableBehaviorProps> = observer(() => {
  const {
    LinksStore: {
      links,
      createLink,
      addLink,
      createUrlWiaLinksObject,
    },
  } = useStore();

  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const sections = location.search?.split('?');
    const isEditMode = sections.includes('edit');
    const linksFromUrl = isEditMode ? sections[2] : sections[1];

    linksFromUrl?.split('&').forEach((link) => {
      const splitedLink = link?.split('-');
      const transformedLink = createLink(splitedLink[0], splitedLink[1]);
      addLink(transformedLink);
    });
  }, []);

  const plusButtonHandler: PlusButtonHandler = () => {
    setIsPopUpVisible(true);
  };

  const createUrlWiaLinksObjectHandler = () => {
    console.log(createUrlWiaLinksObject());
  };

  return (
    <LinksTableTemplate
      links={links}
      isPopUpVisible={isPopUpVisible}
      setIsPopUpVisible={setIsPopUpVisible}
      plusButtonHandler={plusButtonHandler}
      createUrlWiaLinksObjectHandler={createUrlWiaLinksObjectHandler}
    />
  );
});

export default LinksTableBehavior;
