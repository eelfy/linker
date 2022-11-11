import styled from 'styled-components';

const Shadow = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: var(--color-shadow);
    
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export { Shadow };
