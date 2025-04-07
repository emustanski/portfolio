import { LabelHTMLAttributes } from "react";
import { StyledLabel } from "./Label.styled";

type Props = LabelHTMLAttributes<HTMLLabelElement>;
const Label = ({ ...props }: Props) => (
  <StyledLabel {...props}></StyledLabel>
);

export default Label;
