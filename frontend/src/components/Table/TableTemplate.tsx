import { FC } from 'react';
import {
  TableStyled, TableCaption, TableHeader, TableBody,
  TableFooter, TableRow, TableHeaderCell, TableBodyCell,
} from './TableStyled';
import { TableTemplateProps } from './TableTypes';

const TableTemplate: FC<TableTemplateProps> = ({ caption, columnsToShow, data }) => (
  <TableStyled>
    <TableCaption>
      {caption}
    </TableCaption>
    <TableHeader>
      <TableRow>
        {columnsToShow.map((columnName) => <TableHeaderCell key={columnName}>{columnName}</TableHeaderCell>)}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          {columnsToShow.map((columnName) => <TableBodyCell key={`${row.id}-${columnName}`}>{row[columnName]}</TableBodyCell>)}
        </TableRow>
      ))}
    </TableBody>
    <tbody />
  </TableStyled>
);

export default TableTemplate;
