import { FC } from 'react';
import { TableBehaviorProps } from './TableTypes';
import TableTemplate from './TableTemplate';

const TableBehavior: FC<TableBehaviorProps> = ({
  caption,
  columns,
  data,
}) => {
  const columnsToShow = Object.keys(data[0]).filter((columnName) => columns.includes(columnName));

  return (
    <TableTemplate
      caption={caption}
      columnsToShow={columnsToShow}
      data={data}
    />
  );
};

export default TableBehavior;
