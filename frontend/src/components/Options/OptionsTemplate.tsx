import { FC } from 'react';
import Card from '../Card';
import {
  CardAbsoluteWrapper, CardRelativeWrapper, OptionsBody, SingleOption,
} from './OptionsStyled';
import { OptionsTemplateProps } from './OptionsTypes';

const OptionsTemplate: FC<OptionsTemplateProps> = ({
  options,
  visible,
}) => (
  visible ? (
    <CardRelativeWrapper>
      <CardAbsoluteWrapper>
        <Card>
          <OptionsBody>
            {/* here i can use index as key cause elements of array will not change they pos or mutate or etc */}
            {/* eslint-disable-next-line react/no-array-index-key */}
            {options.map((option, optionIndex) => <SingleOption key={optionIndex} onClick={option.onClick}>{option.content}</SingleOption>)}
          </OptionsBody>
        </Card>
      </CardAbsoluteWrapper>
    </CardRelativeWrapper>
  ) : null
);

export default OptionsTemplate;
