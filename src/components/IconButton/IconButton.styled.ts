import styled from '@emotion/styled';
import Button from "@components/Button";

export const StyledIconButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  box-shadow: none;
  background: transparent;
  border-radius: 50%;
  line-height: 1.5;
  transition: background-color 0.2s ease-in-out,color 0.2s ease-in-out;
  height: 2.5rem;
  width: 2.5rem;
`;