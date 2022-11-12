import { FC } from 'react';
import UserName from '../../components/UserName';
import LinksTable from '../../components/LinksTable';
import { ConstructorWrapper } from './LinksConstructorStyled';
import { LinksConstructorTemplateProps } from './LinksConstructorTypes';

const LinksConstructorTemplate: FC<LinksConstructorTemplateProps> = () => (
  <ConstructorWrapper>
    <UserName />
    <LinksTable />
  </ConstructorWrapper>
);

export default LinksConstructorTemplate;
