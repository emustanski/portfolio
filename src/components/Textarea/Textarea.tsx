import { TextareaHTMLAttributes } from "react";
import { StyledTextarea } from './Textarea.styled';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;
const Textarea = ({ ...props }: Props) => (
  <StyledTextarea {...props}></StyledTextarea>
);

export default Textarea;
