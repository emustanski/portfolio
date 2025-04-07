import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, RESUME_DOWNLOAD_URL } from '@constants';
import GithubIcon from '@components/Icons/GithubIcon';
import LinkedInIcon from '@components/Icons/LinkedInIcon';
import ResumeIcon from '@components/Icons/ResumeIcon';
import { StyledList, StyledListItem } from './SocialLinks.styled';

const SocialLinks = () => (
  <StyledList>
    <StyledListItem>
      <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" aria-label="Github profile">
        <GithubIcon />
      </a>
    </StyledListItem>
    <StyledListItem>
      <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <LinkedInIcon />
      </a>
    </StyledListItem>
    <StyledListItem>
      <a href={RESUME_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" aria-label="Download resume">
        <ResumeIcon />
      </a>
    </StyledListItem>
  </StyledList>
);

export default SocialLinks;
