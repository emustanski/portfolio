import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledFooter = styled.footer<{
  $isHidden: boolean;
  $isGettingHidden: boolean;
}>`
  transition: transform 325ms ease-in-out, filter 325ms ease-in-out,
    opacity 325ms ease-in-out;
  width: 100%;
  max-width: 100%;
  margin-top: 2rem;
  text-align: center;

  ${({ $isGettingHidden }) =>
    $isGettingHidden &&
    css`
      transform: scale(0.95);
      filter: blur(0.1rem);
      opacity: 0;
    `}
  ${({ $isHidden }) => $isHidden && css`display: none;`}
`;

export const StyledCopyright = styled.p`
  letter-spacing: 0.2rem;
  font-size: 0.6rem;
  opacity: 0.75;
  margin-bottom: 0;
  text-transform: uppercase;
`;
