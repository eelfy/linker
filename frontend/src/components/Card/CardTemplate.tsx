import { FC } from 'react';
import { CardStyled } from './CardStyled';
import { CardTemplateProps } from './CardTypes';

const CardTemplate: FC<CardTemplateProps> = ({ children }) => <CardStyled>{children}</CardStyled>;

export default CardTemplate;
