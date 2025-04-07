import { HTMLAttributes } from 'react';
import { StyledPaper } from './Paper.styled';

type Props = HTMLAttributes<HTMLDivElement>;
const Paper = ({ children, ...rest }: Props) => (
  <StyledPaper {...rest}>{children}</StyledPaper>
);

export default Paper;
