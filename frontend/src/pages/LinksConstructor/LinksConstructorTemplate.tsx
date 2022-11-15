import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCancel, faCheck, faPen, faShare,
} from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/RootStore';
import UserName from '../../components/UserName';
import LinksTable from '../../components/LinksTable';
import {
  AppSettingsContainer, ConstructorStyled, ConstructorWrapper, SettingsButton,
} from './LinksConstructorStyled';
import { LinksConstructorTemplateProps } from './LinksConstructorTypes';

const ShareButton:FC = observer(() => {
  const { LinksStore: { createUrlWiaLinksObject } } = useStore();

  const copyLinkHandler = () => {
    createUrlWiaLinksObject();
  };

  return (
    <SettingsButton title="share" onClick={copyLinkHandler} shape="circle">
      <FontAwesomeIcon icon={faShare} />
    </SettingsButton>
  );
});

const LinksConstructorTemplate: FC<LinksConstructorTemplateProps> = ({
  isEditMode,
  cancelEditHandler,
  acceptEditHandler,
  startEditHandler,
}) => (
  <ConstructorWrapper>
    <ConstructorStyled>
      <UserName isEditMode={isEditMode} />
      <LinksTable isEditMode={isEditMode} />
    </ConstructorStyled>

    <AppSettingsContainer>
      {isEditMode ? (
        <>
          <SettingsButton title="undo" onClick={cancelEditHandler} shape="circle">
            <FontAwesomeIcon icon={faCancel} />
          </SettingsButton>

          <SettingsButton title="accept" onClick={acceptEditHandler} shape="circle">
            <FontAwesomeIcon icon={faCheck} />
          </SettingsButton>

          <ShareButton />
        </>
      ) : (
        <SettingsButton title="edit" onClick={startEditHandler} shape="circle">
          <FontAwesomeIcon icon={faPen} />
        </SettingsButton>
      )}

    </AppSettingsContainer>
  </ConstructorWrapper>
);

export default LinksConstructorTemplate;
