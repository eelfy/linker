import styled from 'styled-components';
import { IIconStyled } from './IconTypes';

const IconStyled = styled.div<IIconStyled>`
    font-size: 22px;
    
    transition: var(--main-transition);
    color: ${({ active }) => (active ? 'var(--color-pink)' : 'var(--color-gray)')};

    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};

    &:hover {
        color: var(--color-pink);
    }
    
`;

export { IconStyled };
