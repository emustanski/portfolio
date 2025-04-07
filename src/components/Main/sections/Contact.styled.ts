import styled from '@emotion/styled';
import Button from "@components/Button";
import { breakpoints } from "@styles";

export const StyledContainer = styled.div<{ $isActive?: boolean }>`
  display: ${({ $isActive }) => $isActive ? 'block' : 'none'};
`;

export const StyledForm = styled.form`
  margin: 0 0 2rem;
`;

export const StyledFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 3rem);
  margin: -1.5rem 0 2rem -1.5rem;
`;

export const StyledField = styled.div<{ $half?: boolean }>`
  flex-grow: 0;
  flex-shrink: 0;
  padding: 1.5rem 0 0 1.5rem;
  width: calc(${({ $half }) => ($half ? `50% - 0.75rem` : `100% - 1.5rem`)});
`;

export const StyledButton = styled(Button)`
  width: 100%;
  
  @media screen and (min-width: ${breakpoints.md}) {
    width: auto;
  }
`;
