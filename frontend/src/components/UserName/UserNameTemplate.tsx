import { FC } from 'react';
import Input from '../Input';
import { StyledUserName } from './UserNameStyled';
import { UserNameTemplateProps } from './UserNameTypes';

const UserNameTemplate: FC<UserNameTemplateProps> = ({
  userName,
  editMode,
}) => (
  userName ? (
    <StyledUserName>
      {userName}
    </StyledUserName>
  ) : <Input />);

export default UserNameTemplate;
