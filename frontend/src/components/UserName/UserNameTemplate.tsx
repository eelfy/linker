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
      placeholder="user name"
      value={userName}
      onChange={(event) => setUserName(event.currentTarget.value)}
    />
  ) : (
    <StyledUserName>
      {userName.length > 0 && '@'}
      {userName}
    </StyledUserName>
  ));

export default UserNameTemplate;
