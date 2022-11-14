import styled, { css } from 'styled-components';
import { ButtonStyledProps } from './ButtonTypes';

const ButtonBorder = '2px solid';

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 100%;
  height: 30px;
  
  padding: 7px;
 
  color: #fff;
  background-color: var(--color-pink);

  border: ${ButtonBorder} transparent;
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : css`var(--border-main-radius)`)};

  cursor: pointer;

  transition: var(--main-transition);

  &:hover {
    /* border: ${ButtonBorder} #fff; */
    opacity: .7;
  }
`;

export { ButtonStyled };
