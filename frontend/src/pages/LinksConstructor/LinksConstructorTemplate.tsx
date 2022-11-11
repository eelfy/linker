import { FC } from 'react';
import LinksTable from '../../components/LinksTable';
import { ConstructorWrapper } from './LinksConstructorStyled';
import { LinksConstructorTemplateProps } from './LinksConstructorTypes';

const LinksConstructorTemplate: FC<LinksConstructorTemplateProps> = () => (
  <ConstructorWrapper>
    <h1 style={{
      color: 'var(--color-table-header-font)',
    }}
    >
      user name

    </h1>
    <LinksTable />
  </ConstructorWrapper>
);

export default LinksConstructorTemplate;
