import { InputHTMLAttributes } from "react";
import { StyledInput } from './Input.styled';

type Props = InputHTMLAttributes<HTMLInputElement>;
const Input = ({ ...props }: Props) => (
  <StyledInput {...props}></StyledInput>
);

export default Input;
