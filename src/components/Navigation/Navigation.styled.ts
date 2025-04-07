import styled from '@emotion/styled';
import Button from '../Button';
import { colors } from '@styles';
import { css } from '@emotion/react';
import { breakpoints } from "@styles";

const verticalLine = css`
  content: '';
  display: block;
  position: absolute;
  width: 1px;
  background: ${colors.white};
  left: calc(50% - 1px);
`;

export const StyledContainer = styled.div<{
  $isGettingHidden: boolean;
  $isHidden: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  transition: transform 325ms ease-in-out, filter 325ms ease-in-out,
    opacity 325ms ease-in-out;

  ${({ $isGettingHidden }) =>
    $isGettingHidden &&
    css`
      transform: scale(0.95);
      filter: blur(0.1rem);
      opacity: 0;
    `}
  ${({ $isHidden }) =>
    $isHidden &&
    css`
      display: none;
    `}
`;

export const StyledLogo = styled.div`
  width: 4rem;
  height: 2rem;
  line-height: 0;
  border: 1px solid ${colors.white};
  border-top: 0;
`;

export const StyledContent = styled.div`
  border: 1px solid ${colors.white};
  border-left: 0;
  border-right: 0;
  max-width: 100%;
  margin-top: 3.5rem;
  position: relative;

  &:before {
    top: calc(-3.5rem - 1px);
    height: calc(3.5rem + 1px);

    ${verticalLine}
  }
`;

export const StyledExpand = styled.div<{ $isExpanded: boolean }>`
  transition: max-height 1s ease, padding 1s ease, opacity 0.5s ease-in-out;
  transition-delay: 0.25s;
  max-height: ${({ $isExpanded }) => ($isExpanded ? `40rem` : `0`)};
  overflow: hidden;
  padding: ${({ $isExpanded }) => ($isExpanded ? `2rem 0.25rem` : `0 2rem`)};

  @media screen and (min-width: ${breakpoints.xs}) {
    padding: ${({ $isExpanded }) => ($isExpanded ? `2.5rem 1rem` : `0 2rem`)};
  }

  @media screen and (min-width: ${breakpoints.md}) {
    padding: ${({ $isExpanded }) => ($isExpanded ? `3rem 2rem` : `0 2rem`)};
  }
`;

export const StyledSubtitle = styled.p`
  margin: 0;
  font-size: 0.8rem;
  line-height: 2;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

export const StyledNavigation = styled.nav`
  margin-top: 3.5rem;
  position: relative;

  &:before {
    ${verticalLine};
    top: calc(-3.5rem - 1px);
    height: calc(3.5rem + 1px);
  }

  &:after {
    ${verticalLine};
    top: 0;
    height: 100%;
    left: calc(50% - 1px);
    display: none;

    @media screen and (min-width: ${breakpoints.sm}) {
      display: block;
    }
  }
`;
export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid ${colors.white};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }

  li {
    &:first-of-type {
      @media screen and (min-width: ${breakpoints.sm}) {
        border-right: 1px solid ${colors.white};
      }
    }
    &:last-of-type {
      @media screen and (min-width: ${breakpoints.sm}) {
        border-left: 1px solid ${colors.white};
      }
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid ${colors.white};
      
      @media screen and (min-width: ${breakpoints.sm}) {
        border-bottom: none;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  box-shadow: none;
  min-width: 10rem;
  height: 2.75rem;
  width: 100%;

  @media screen and (min-width: ${breakpoints.sm}) {
    min-width: 8rem;
  }
`;
