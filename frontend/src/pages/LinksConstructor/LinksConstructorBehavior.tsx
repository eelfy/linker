import { FC, useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { separateURLOnModeAndLinksList } from '../../utils';
import { LinksConstructorBehaviorProps, SettingHandlers } from './LinksConstructorTypes';
import LinksConstructorTemplate from './LinksConstructorTemplate';

const inferModeFromLocation = (location: Location) => {
  const sections = separateURLOnModeAndLinksList(location);
  const editMode = sections.includes('edit');
  return editMode;
};

const LinksConstructorBehavior: FC<LinksConstructorBehaviorProps> = () => {
  const location = useLocation();
  const [isEditMode, setIsEditMode] = useState<boolean>(inferModeFromLocation(location));

  const cancelEditHandler: SettingHandlers = () => {
    setIsEditMode(false);
  };
  const acceptEditHandler: SettingHandlers = () => {
    setIsEditMode(false);
  };
  const startEditHandler: SettingHandlers = () => {
    setIsEditMode(true);
  };
  const copyLinkHandler: SettingHandlers = () => {};

  return (
    <LinksConstructorTemplate
      isEditMode={isEditMode}
      cancelEditHandler={cancelEditHandler}
      acceptEditHandler={acceptEditHandler}
      startEditHandler={startEditHandler}
      copyLinkHandler={copyLinkHandler}
    />
  );
};

export default LinksConstructorBehavior;
