import styled from '@emotion/styled';
import { colors } from "@styles";

export const StyledInput = styled.input`
  appearance: none;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
  background-color: transparent;
  border: 1px solid ${colors.white};
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 1rem;
  text-decoration: none;
  width: 100%;
  height: 2.75rem;
  
  &:invalid {
    box-shadow: none;
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    opacity: 1;
  }
  
  &:focus {
    background: rgba(255, 255, 255, 0.075);
    border-color: ${colors.white};
    box-shadow: 0 0 0 1px ${colors.white};
  }
`;