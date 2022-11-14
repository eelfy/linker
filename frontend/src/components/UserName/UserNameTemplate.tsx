import { FC } from 'react';
import Input from '../Input';
import { StyledUserName } from './UserNameStyled';
import { UserNameTemplateProps } from './UserNameTypes';

const UserNameTemplate: FC<UserNameTemplateProps> = ({
  userName,
  setUserName,
  isEditMode,
}) => (
  isEditMode ? (
    <Input
      value={userName}
      onChange={(event) => setUserName(event.currentTarget.value)}
    />
  ) : (
    <StyledUserName>
      @
      {userName}
    </StyledUserName>
  ));

export default UserNameTemplate;
