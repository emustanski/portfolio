import styled from '@emotion/styled';
import { breakpoints } from '@styles';

export const StyledContainer = styled.div<{ $isActive?: boolean }>`
  display: ${({ $isActive }) => $isActive ? 'block' : 'none'};
`;

export const StyledProject = styled.div`
  position: relative;
  margin: 0 0 2rem;

  img {
    width: 100%;
    
    &:last-of-type {
      position: absolute;
      top: -0.5rem;
      
      left: 0;
      z-index: -1;
      transform: scale(.7);
      
      @media screen and (min-width: ${breakpoints.xs}) {
        top: -0.75rem;
      }
      
      @media screen and (min-width: ${breakpoints.sm}) {
        top: -1rem;
      }
    }
  }
`;
