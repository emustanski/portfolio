import styled from '@emotion/styled';

export const StyledContainer = styled.div<{ $isActive?: boolean }>`
  display: ${({ $isActive }) => $isActive ? 'block' : 'none'};
`;
