import styled from 'styled-components';

const OptionsBody = styled.ul``;

const SingleOption = styled.li`
  font-size: 16px;
  
  padding: 5px;
  list-style: none;
  
  border-radius: var(--border-main-radius);
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--color-table-row);
  }
`;

const CardRelativeWrapper = styled.div`
  position: relative;
`;

const CardAbsoluteWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 25px;
`;

export {
  OptionsBody, SingleOption,
  CardRelativeWrapper, CardAbsoluteWrapper,
};
