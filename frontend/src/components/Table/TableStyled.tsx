import styled, { css } from 'styled-components';

const TableCell = css`
    width: 10vw;
    min-width: 100px;
    padding: 14px;

    text-align: start;
`;

const TableStyled = styled.table`
  background-color: #fff;
  
  border-collapse: collapse;
  border-bottom-left-radius: var(--border-main-radius);
  border-bottom-right-radius: var(--border-main-radius);

  overflow-x: scroll;
`;

const TableCaption = styled.caption`
    text-align: start;

    background-color: #fff;
    color: var(--color-gray);

    border-top-left-radius: var(--border-main-radius);
    border-top-right-radius: var(--border-main-radius);
`;

const TableHeader = styled.thead`
    color: var(--color-table-header-font);
`;

const TableBody = styled.tbody`
    & > tr:nth-child(odd) {
        background-color: var(--color-table-row);
    }
`;

const TableFooter = styled.tfoot``;

const TableRow = styled.tr`
    display: flex;

    border-radius: var(--border-main-radius);
`;

const TableHeaderCell = styled.th`
    ${TableCell}
`;

const TableBodyCell = styled.td`
    ${TableCell}
`;

export {
  TableStyled, TableCaption, TableHeader, TableBody,
  TableFooter, TableRow, TableHeaderCell, TableBodyCell,
};
