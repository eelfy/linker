interface LinksConstructorProps {}

interface LinksConstructorBehaviorProps extends LinksConstructorProps {}
interface LinksConstructorTemplateProps extends LinksConstructorProps {
  isEditMode: boolean;
  cancelEditHandler: SettingHandlers;
  acceptEditHandler: SettingHandlers;
  startEditHandler: SettingHandlers;
}

type SettingHandlers = () => void;
export type { LinksConstructorBehaviorProps, LinksConstructorTemplateProps, SettingHandlers };
