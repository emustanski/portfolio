import { HTMLAttributes } from 'react';
import { StyledIconButton } from './IconButton.styled';

type Props = HTMLAttributes<HTMLButtonElement>;
const IconButton = ({ children, ...rest }: Props) => (
  <StyledIconButton {...rest}>{children}</StyledIconButton>
);

export default IconButton;
