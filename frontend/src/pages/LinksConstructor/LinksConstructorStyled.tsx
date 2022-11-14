import styled from 'styled-components';
import Button from '../../components/Button';

const ConstructorWrapper = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-direction: column;
`;

const ConstructorStyled = styled.div`
    margin: 20px;

    width: 300px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const AppSettingsContainer = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;

    display: flex;
    gap: 10px;
`;

const SettingsButton = styled(Button)`
  width: 50px;
  height: 50px;
`;

export {
  ConstructorWrapper, ConstructorStyled,
  AppSettingsContainer, SettingsButton,
};
