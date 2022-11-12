interface UserNameProps {}

interface UserNameBehaviorProps extends UserNameProps {}
interface UserNameTemplateProps extends UserNameProps {
  userName: string;
  editMode: boolean;
}

export type { UserNameBehaviorProps, UserNameTemplateProps };
