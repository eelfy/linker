import { FC } from 'react';
import { CardBehaviorProps } from './CardTypes';
import CardTemplate from './CardTemplate';

const CardBehavior: FC<CardBehaviorProps> = ({ children }) => (
  <CardTemplate>{children}</CardTemplate>
);

export default CardBehavior;
