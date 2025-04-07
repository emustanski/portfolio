import styled from '@emotion/styled';
import { breakpoints } from "@styles";
import Paper from '@components/Paper';
import { css } from '@emotion/react';
import IconButton from "@components/IconButton";

export const StyledMain = styled.div<{
  $isVisible?: boolean;
}>`
  display: none;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1 1 100%;
      max-width: 100%;
    `}
`;

export const StyledPaper = styled(Paper)<{
  $isActive?: boolean;
}>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  transition: opacity 325ms ease-in-out, transform 325ms ease-in-out;
  padding: 3rem 1.5rem 0.5rem;
  width: 40rem;
  transform: translateY(0);
  opacity: 0;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: translateY(-0.25rem);
      opacity: 1;
    `};
  
  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 4.5rem 2.5rem 1.5rem;
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;

  @media screen and (min-width: ${breakpoints.sm}) {
    top: 1rem;
    right: 1rem;
  }
`;
