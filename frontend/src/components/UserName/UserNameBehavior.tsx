import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/RootStore';
import { UserNameBehaviorProps } from './UserNameTypes';
import UserNameTemplate from './UserNameTemplate';
import { getUserNameFromUrl } from '../../utils';

const UserNameBehavior: FC<UserNameBehaviorProps> = observer(({ isEditMode }) => {
  const { LinksStore: { updateUserName } } = useStore();

  const location = useLocation();
  const [userName, setUserName] = useState<string>(getUserNameFromUrl(location) ?? '');

  useEffect(() => {
    updateStoredUserNameWiaState();
  }, [userName]);

  const editUserNameHandler = () => {};
  const acceptNewUserNameHandler = () => {
    updateStoredUserNameWiaState();
  };
  const cancelNewUseNameHandler = () => {};

  function updateStoredUserNameWiaState() {
    updateUserName(userName);
  }
  return (
    <UserNameTemplate
      userName={userName}
      setUserName={setUserName}
      isEditMode={isEditMode}
      editUserNameHandler={editUserNameHandler}
      acceptNewUserNameHandler={acceptNewUserNameHandler}
      cancelNewUseNameHandler={cancelNewUseNameHandler}
    />
  );
});

export default UserNameBehavior;
