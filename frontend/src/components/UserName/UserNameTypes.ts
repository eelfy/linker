import { Dispatch, SetStateAction } from 'react';

interface UserNameProps {
  isEditMode: boolean;
}

interface UserNameBehaviorProps extends UserNameProps {}
interface UserNameTemplateProps extends UserNameProps {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  editUserNameHandler: () => void;
  acceptNewUserNameHandler: () => void;
  cancelNewUseNameHandler: () => void;
}

export type { UserNameBehaviorProps, UserNameTemplateProps };
