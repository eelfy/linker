import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCancel, faCheck, faPen, faShare,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Button from '../../components/Button';
import UserName from '../../components/UserName';
import LinksTable from '../../components/LinksTable';
import {
  AppSettingsContainer, ConstructorStyled, ConstructorWrapper, SettingsButton,
} from './LinksConstructorStyled';
import { LinksConstructorTemplateProps } from './LinksConstructorTypes';

const LinksConstructorTemplate: FC<LinksConstructorTemplateProps> = ({
  isEditMode,
  cancelEditHandler,
  acceptEditHandler,
  startEditHandler,
  copyLinkHandler,
}) => (
  <ConstructorWrapper>
    <ConstructorStyled>
      <UserName isEditMode={isEditMode} />
      <LinksTable isEditMode={isEditMode} />
    </ConstructorStyled>

    <AppSettingsContainer>
      {isEditMode ? (
        <>
          <SettingsButton onClick={cancelEditHandler} shape="circle">
            <FontAwesomeIcon icon={faCancel} />
          </SettingsButton>

          <SettingsButton onClick={acceptEditHandler} shape="circle">
            <FontAwesomeIcon icon={faCheck} />
          </SettingsButton>

          <SettingsButton onClick={copyLinkHandler} shape="circle">
            <FontAwesomeIcon icon={faShare} />
          </SettingsButton>
        </>
      ) : (
        <SettingsButton onClick={startEditHandler} shape="circle">
          <FontAwesomeIcon icon={faPen} />
        </SettingsButton>
      )}

    </AppSettingsContainer>
  </ConstructorWrapper>
);

export default LinksConstructorTemplate;
