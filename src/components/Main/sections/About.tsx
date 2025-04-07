import { memo } from "react";
import Title from '@components/Title';
import { JOB_TITLE, OWNER_EMAIL, OWNER_NAME, OWNER_PHONE } from '@constants';
import { StyledContainer } from './About.styled';

type Props = {
  isActive: boolean;
};
const AboutSection = ({ isActive }: Props) => (
  <StyledContainer $isActive={isActive}>
    <Title level="2" underlined>
      About
    </Title>
    <p>
      Hi! I’m {OWNER_NAME}, an enthusiastic and passionate Berlin-based {JOB_TITLE} who
      enjoys developing innovative solutions to real life problems and to design
      and implement beautiful and accessible web apps.
    </p>
    <p>
      Outside of engineering world, I love to travel around the world and hang out with friends.
    </p>

    <h3>Get in touch</h3>
    <p>
      I’m always open to new opportunities and freelance work, so email me if
      you’d like to work together.
    </p>
    <div>
      <a href={`maito:${OWNER_EMAIL}?subject=Hi%20there!`}>{OWNER_EMAIL}</a>
    </div>
    <div>
      <a href={`tel:${OWNER_PHONE}`}>{OWNER_PHONE}</a>
    </div>
  </StyledContainer>
);

export default memo(AboutSection);
