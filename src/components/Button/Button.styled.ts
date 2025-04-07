import styled from '@emotion/styled';
import { colors } from '@styles';
import { css } from '@emotion/react';

export const StyledButton = styled.button<{ $inverted?: boolean }>`
  appearance: none;
  border: 0;
  box-shadow: inset 0 0 0 1px ${colors.white};
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 2.75rem;
  font-size: 0.8rem;
  font-weight: 300;
  font-family: inherit;
  padding: 0 1.25rem 0 1.45rem;
  border: none;
  background: transparent;
  color: ${colors.white};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  height: 2.75rem;
  outline: 0;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.075);
  }

  &:active {
    background-color: hsla(0, 0%, 100%, 0.175);
  }

  ${({ $inverted }) =>
    $inverted &&
    css`
      background: ${colors.white};
      color: ${colors.primary};
      font-weight: 600;
      
      &:hover, &:focus, &:active {
        background: ${colors.white};
      }
    `}
`;
