import { SVGProps } from 'react';
import { colors } from "@styles";

type Props = SVGProps<SVGSVGElement>;
const CloseIcon = ({ className, width = 18, height = 18, ...rest }: Props) => (
  <svg
    className={className}
    aria-hidden="true"
    viewBox="0 0 12 12"
    width={width}
    height={height}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fill={colors.white}
      d="M12 .707 11.293 0 6 5.293.707 0 0 .707 5.293 6 0 11.293.707 12 6 6.707 11.293 12l.707-.707L6.707 6z"
    />
  </svg>
);

export default CloseIcon;
