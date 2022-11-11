import { FC, useRef } from 'react';
import { useClickOutside } from '../../hooks';
import { OptionsBehaviorProps } from './OptionsTypes';
import OptionsTemplate from './OptionsTemplate';

const OptionsBehavior: FC<OptionsBehaviorProps> = ({
  options,
  visible,
  setVisible,
}) => {
  const optionsBodyRef = useRef(null);
  useClickOutside(optionsBodyRef, setVisible);

  return (
    <div ref={optionsBodyRef}>
      <OptionsTemplate
        visible={visible}
        options={options}
      />
    </div>
  );
};

export default OptionsBehavior;
