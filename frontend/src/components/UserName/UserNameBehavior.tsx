import { FC, useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { UserNameBehaviorProps } from './UserNameTypes';
import UserNameTemplate from './UserNameTemplate';

const createUserNameFromPath = (location: Location): string | undefined => {
  const { pathname } = location;
  const pathnameArr = pathname.split('');
  pathnameArr.shift();
  const userName = pathnameArr.join('');
  return userName;
};

const UserNameBehavior: FC<UserNameBehaviorProps> = () => {
  const location = useLocation();
  const [userName, setUserName] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    const name = createUserNameFromPath(location);
    if (!name) {
      setEditMode(true);
    } else {
      setUserName(name);
    }
  }, []);
  return (
    <UserNameTemplate
      userName={userName}
      editMode={editMode}
    />
  );
};

export default UserNameBehavior;
