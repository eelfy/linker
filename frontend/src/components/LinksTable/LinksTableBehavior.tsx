import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { LinksTableBehaviorProps, PlusButtonHandler } from './LinksTableTypes';
import LinksTableTemplate from './LinksTableTemplate';
import { useStore } from '../../store/RootStore';
import { separateURLOnModeAndLinksList } from '../../utils';

const LinksTableBehavior: FC<LinksTableBehaviorProps> = observer(({ isEditMode }) => {
  const {
    LinksStore: {
      links,
      createLink,
      addLink,
      createUrlWiaLinksObject,
      url,
    },
  } = useStore();

  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const sections = separateURLOnModeAndLinksList(location);

    const linksFromUrl = sections.find((section) => section !== 'edit' && section !== '');
    linksFromUrl?.split('&').forEach((link) => {
      const splitedLink = link?.split('-');
      const transformedLink = createLink(splitedLink[0], splitedLink[1]);

      addLink(transformedLink);
    });
  }, []);

  const plusButtonHandler: PlusButtonHandler = () => {
    setIsPopUpVisible(true);
  };

  return (
    <LinksTableTemplate
      links={links}
      isPopUpVisible={isPopUpVisible}
      setIsPopUpVisible={setIsPopUpVisible}
      plusButtonHandler={plusButtonHandler}
      isEditMode={isEditMode}
      url={url}
    />
  );
});

export default LinksTableBehavior;
