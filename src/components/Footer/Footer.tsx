import { StyledFooter, StyledCopyright } from './Footer.styled';
import { OWNER_NAME } from '@constants';
import { Transition } from '@enums';

type Props = {
  transition: Transition;
};
const Footer = ({ transition }: Props) => {
  const isGettingHidden =
    transition === Transition.NAV_TRANSITION ||
    transition !== Transition.NAV_VISIBLE;
  const isHidden =
    transition !== Transition.NAV_TRANSITION &&
    transition !== Transition.NAV_VISIBLE;

  return (
    <StyledFooter $isHidden={isHidden} $isGettingHidden={isGettingHidden}>
      <StyledCopyright>© {OWNER_NAME}</StyledCopyright>
    </StyledFooter>
  );
};

export default Footer;
