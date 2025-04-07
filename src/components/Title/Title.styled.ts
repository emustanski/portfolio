import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors, typography } from '@styles';
import { TitleLevel } from './Title';

const headingMapping = {
  1: typography['headingOne'],
  2: typography['headingTwo'],
  3: typography['headingThree'],
  4: typography['headingFour'],
};

export const StyledTitle = styled.h1<{
  $level: TitleLevel;
  $underlined?: boolean;
}>`
  ${({ $level }) => headingMapping[$level]}
  ${({ $underlined }) =>
    $underlined &&
    css`
      border-bottom: 1px solid ${colors.white};
      padding-bottom: 0.5rem;
      margin-bottom: 2rem;
      width: max-content;
    `}
`;
