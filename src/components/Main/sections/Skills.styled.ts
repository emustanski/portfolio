import styled from '@emotion/styled';
import { breakpoints } from '@styles';

const gutter = '0.5rem';

export const StyledContainer = styled.div<{ $isActive?: boolean }>`
  display: ${({ $isActive }) => $isActive ? 'block' : 'none'};
`;

export const StyledSkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 100%;
  margin: -${gutter} -${gutter} 1rem;
`;

export const StyledSkillItem = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  width: 100%;
  text-align: center;
  padding: ${gutter};

  @media screen and (min-width: ${breakpoints.sm}) {
    flex-basis: 25%;
  }
`;
