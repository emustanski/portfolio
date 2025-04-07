import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.styled';

type Props = {
  inverted?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, inverted, ...rest }: Props) => (
  <StyledButton $inverted={inverted} {...rest}>{children}</StyledButton>
);

export default Button;
