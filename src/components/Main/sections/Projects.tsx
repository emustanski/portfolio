import { memo } from 'react';
import Title from '@components/Title';
import { StyledContainer, StyledProject } from './Projects.styled';
import { GITHUB_PROFILE_URL } from '@constants';

type Props = {
  isActive: boolean;
};
const ProjectsSection = ({ isActive }: Props) => (
  <StyledContainer $isActive={isActive}>
    <Title level="2" underlined>
      Projects
    </Title>
    <Title level="4">Content coming soon...!!</Title>

    <Title level="4">Until then, you can see them on my <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" aria-label="Github profile">
    GitHub</a>.</Title>
    
    <StyledProject>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/laptop-mockup.png" alt="Laptop" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/google.png" alt="Google project" />
    </StyledProject>
  </StyledContainer>
);

export default memo(ProjectsSection);
