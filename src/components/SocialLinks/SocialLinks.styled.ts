import styled from '@emotion/styled';
import { colors } from "@styles";

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  display: inline-block;
  padding: 0 0.75rem 0 0;
  
  a {
    border-radius: 100%;
    box-shadow: inset 0 0 0 1px ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: center;
    width: 2.25rem;
    text-decoration: none;
    border-bottom: none;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    
    &:hover, &:focus {
      background-color: rgba(255, 255, 255, 0.075);
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.175);
    }
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
      
      path {
        fill: ${colors.white};
      }
    }
  }
`;
