import { useEffect, useState } from 'react';
import {
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledExpand,
  StyledList,
  StyledLogo,
  StyledNavigation,
  StyledSubtitle,
} from './Navigation.styled';
import Title from '../Title';
import { JOB_TITLE, OWNER_NAME } from '@constants';
import { Article, Transition } from '@enums';

const navigationItems = [
  {
    key: Article.ABOUT,
    label: 'About',
  },
  {
    key: Article.SKILLS,
    label: 'Skills',
  },
  {
    key: Article.PROJECTS,
    label: 'Projects',
  },
  {
    key: Article.CONTACTS,
    label: 'Contacts',
  },
];

type Props = {
  transition: Transition;
  onOpenArticle: (key: string) => void;
};
const Navigation = ({ onOpenArticle, transition }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isGettingHidden =
    transition === Transition.NAV_TRANSITION ||
    transition !== Transition.NAV_VISIBLE;
  const isHidden =
    transition !== Transition.NAV_TRANSITION &&
    transition !== Transition.NAV_VISIBLE;

  useEffect(() => {
    setIsExpanded(true);
  }, []);

  return (
    <StyledContainer $isHidden={isHidden} $isGettingHidden={isGettingHidden}>
      <StyledLogo/>
      <StyledContent>
        <StyledExpand $isExpanded={isExpanded}>
          <Title>{OWNER_NAME}</Title>
          <StyledSubtitle>{JOB_TITLE}</StyledSubtitle>
        </StyledExpand>
      </StyledContent>
      <StyledNavigation>
        <StyledList>
          {navigationItems.map(({ key, label }) => (
            <li key={key}>
              <StyledButton
                onClick={() => {
                  onOpenArticle(key);
                }}
              >
                {label}
              </StyledButton>
            </li>
          ))}
        </StyledList>
      </StyledNavigation>
    </StyledContainer>
  );
};

export default Navigation;
