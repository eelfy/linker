import { ReactNode } from 'react';

type RequiredFieldsInDate = {
  id: number,
} & { [key: string]: any };

interface TableProps {
  caption: ReactNode;
  data: Array<RequiredFieldsInDate>
}

interface TableBehaviorProps extends TableProps {
  columns: Array<keyof RequiredFieldsInDate>;
}
interface TableTemplateProps extends TableProps {
  columnsToShow: string[];
}

export type { TableBehaviorProps, TableTemplateProps };
