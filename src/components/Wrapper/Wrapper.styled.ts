import styled from '@emotion/styled';
import { breakpoints } from "@styles";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 100vh;
  z-index: 3;
  padding: 1rem;
  
  @media screen and (min-width: ${breakpoints.xs}) {
    padding: 2rem 1rem;
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 3rem 2rem;
  }
  
  &:before {
    content: '';
    display: block;
  }
`;
